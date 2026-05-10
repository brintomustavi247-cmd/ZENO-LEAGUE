import { useState, useEffect, useMemo } from 'react'
import './ResultInput.css'

const PLACEMENT_POINTS = [12, 9, 7, 5, 4, 3, 2, 1, 0, 0, 0, 0]

export default function ResultInput({ match, onSave, onCancel }) {
  const [totalRounds, setTotalRounds] = useState(match?.rounds || 3)
  const [currentRound, setCurrentRound] = useState(1)
  const [roundsData, setRoundsData] = useState([])
  const [expandedTeam, setExpandedTeam] = useState(null)

  useEffect(() => {
    const slots = match?.maxSlots || 12
    const initial = []
    for (let i = 0; i < totalRounds; i++) {
      initial.push(Array.from({ length: slots }, () => ({
        teamId: null, teamName: '', kills: 0, players: []
      })))
    }
    setRoundsData(initial)
  }, [totalRounds, match?.maxSlots])

  const teams = useMemo(() => {
    if (!match?.joined) return []
    return match.joined.map((j, i) => ({
      id: j.uid || j.teamId || `team_${i}`,
      name: j.teamName || j.ign || j.name || `Team ${i + 1}`,
      players: j.players || [{ uid: j.uid, ign: j.ign || j.name }],
      igl: j.igl || j.ign || j.name,
      iglUid: j.iglUid || j.uid,
    }))
  }, [match?.joined])

  const finalResults = useMemo(() => {
    if (!roundsData.length) return []
    const map = {}
    roundsData.forEach(round => {
      round.forEach((entry, rank) => {
        if (!entry?.teamId) return
        if (!map[entry.teamId]) {
          map[entry.teamId] = {
            teamId: entry.teamId, teamName: entry.teamName,
            wins: 0, points: 0, kills: 0, players: {},
          }
        }
        map[entry.teamId].points += PLACEMENT_POINTS[rank] || 0
        map[entry.teamId].kills += entry.kills || 0
        if (rank === 0) map[entry.teamId].wins += 1
        if (entry.players?.length) {
          entry.players.forEach(p => {
            if (!map[entry.teamId].players[p.name]) {
              map[entry.teamId].players[p.name] = { kills: 0 }
            }
            map[entry.teamId].players[p.name].kills += p.kills || 0
          })
        }
      })
    })
    return Object.values(map)
      .map(t => ({
        ...t, total: t.points + t.kills,
        playerList: Object.entries(t.players).map(([name, d]) => ({ name, ...d }))
      }))
      .sort((a, b) => b.total - a.total || b.kills - a.kills)
  }, [roundsData])

  const updateCell = (rIdx, tIdx, field, value) => {
    setRoundsData(prev => {
      const copy = prev.map(r => r.map(t => ({ ...t, players: t.players ? [...t.players] : [] })))
      copy[rIdx][tIdx][field] = value
      if (field === 'teamId') {
        const team = teams.find(t => t.id === value)
        if (team) {
          copy[rIdx][tIdx].teamName = team.name
          copy[rIdx][tIdx].players = team.players.map(p => ({ name: p.ign || p.name, kills: 0 }))
        }
      }
      return copy
    })
  }

  const updatePlayerKill = (rIdx, tIdx, pIdx, kills) => {
    setRoundsData(prev => {
      const copy = prev.map(r => r.map(t => ({ ...t, players: t.players ? [...t.players] : [] })))
      copy[rIdx][tIdx].players[pIdx].kills = parseInt(kills) || 0
      return copy
    })
  }

  const handleSave = () => {
    onSave?.({
      matchId: match.id,
      totalRounds,
      roundsData,
      finalResults,
      gameType: match.gameType,
      mode: match.mode,
      matchTitle: match.title,
      prizePool: match.prizePool || 0,
      submittedAt: new Date().toISOString(),
    })
  }

  const rd = roundsData[currentRound - 1] || []
  const isSquad = match?.gameType === 'squad'
  const isDuo = match?.gameType === 'duo'
  const usedIds = new Set(rd.filter(r => r?.teamId).map(r => r.teamId))
  const available = teams.filter(t => !usedIds.has(t.id))
  const used = teams.filter(t => usedIds.has(t.id))

  return (
    <div className="result-input-container">
      <div className="ri-header">
        <div>
          <h2 className="ri-title">{match?.title || 'Match Results'}</h2>
          <p className="ri-subtitle">{match?.gameType?.toUpperCase()} • {match?.mode} • {match?.maxSlots} Teams</p>
        </div>
        <div className="ri-rounds-control">
          <label>Rounds:</label>
          <select value={totalRounds} onChange={e => { setTotalRounds(+e.target.value); setCurrentRound(1); setExpandedTeam(null) }}>
            {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
      </div>

      <div className="ri-round-tabs">
        {Array.from({ length: totalRounds }, (_, i) => i + 1).map(r => (
          <button key={r}
            className={`ri-round-tab ${currentRound === r ? 'active' : ''} ${roundsData[r-1]?.some(e => e?.teamId) ? 'filled' : ''}`}
            onClick={() => { setCurrentRound(r); setExpandedTeam(null) }}
          >R{r}</button>
        ))}
        <button className="ri-round-tab final" onClick={() => setCurrentRound(0)}>📊 FINAL</button>
      </div>

      {currentRound > 0 ? (
        <div className="ri-round-input">
          <div className="ri-round-label">ROUND {currentRound} — Select team + enter kills from Free Fire screen</div>
          <div className="ri-table">
            <div className="ri-table-header">
              <div className="ri-col-rank">#</div>
              <div className="ri-col-team">TEAM</div>
              <div className="ri-col-kills">KILLS</div>
              <div className="ri-col-pts">PTS</div>
              <div className="ri-col-action"></div>
            </div>
            {rd.map((row, idx) => (
              <div key={idx}>
                <div className="ri-table-row">
                  <div className="ri-col-rank">
                    <span className={`ri-rank-badge rank-${idx + 1}`}>{idx + 1}</span>
                  </div>
                  <div className="ri-col-team">
                    <select value={row?.teamId || ''} onChange={e => updateCell(currentRound - 1, idx, 'teamId', e.target.value)}>
                      <option value="">— Select —</option>
                      {available.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                      {used.map(t => <option key={`u-${t.id}`} value={t.id} disabled>✓ {t.name}</option>)}
                    </select>
                  </div>
                  <div className="ri-col-kills">
                    <input type="number" min="0" max="99" value={row?.kills || ''} placeholder="0"
                      onChange={e => updateCell(currentRound - 1, idx, 'kills', parseInt(e.target.value) || 0)} />
                  </div>
                  <div className="ri-col-pts">
                    <span className="ri-auto-pts">{row?.teamId ? PLACEMENT_POINTS[idx] || 0 : '-'}</span>
                  </div>
                  <div className="ri-col-action">
                    {(isSquad || isDuo) && row?.teamId && (
                      <button className="ri-expand-btn" onClick={() => setExpandedTeam(expandedTeam === idx ? null : idx)}>
                        {expandedTeam === idx ? '▲' : '▼'} {isSquad ? '4P' : '2P'}
                      </button>
                    )}
                  </div>
                </div>
                {expandedTeam === idx && rd[idx]?.players?.length > 0 && (
                  <div className="ri-player-detail">
                    <div className="ri-player-detail-header">{rd[idx].teamName} — Individual Kills</div>
                    {rd[idx].players.map((p, pIdx) => (
                      <div key={pIdx} className="ri-player-row">
                        <span className="ri-player-name">{pIdx === 0 ? '👑 ' : ''}{p.name}</span>
                        <input type="number" min="0" max="30" value={p.kills || ''} placeholder="0"
                          onChange={e => updatePlayerKill(currentRound - 1, idx, pIdx, e.target.value)} />
                      </div>
                    ))}
                    <div className="ri-player-note">Team total: {rd[idx].kills} kills (from main input)</div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="ri-round-actions">
            {currentRound < totalRounds && (
              <button className="ri-btn ri-btn-next" onClick={() => { setCurrentRound(currentRound + 1); setExpandedTeam(null) }}>
                NEXT ROUND →
              </button>
            )}
            {currentRound === totalRounds && (
              <button className="ri-btn ri-btn-final" onClick={() => setCurrentRound(0)}>📊 VIEW FINAL</button>
            )}
          </div>
        </div>
      ) : (
        <div className="ri-final">
          <div className="ri-final-header">📊 FINAL STANDINGS — {match?.title}</div>
          <div className="ri-final-table">
            <div className="ri-final-table-head">
              <div className="ri-fc-rank">RANK</div>
              <div className="ri-fc-team">TEAM</div>
              <div className="ri-fc-win">WIN</div>
              <div className="ri-fc-pts">POINT</div>
              <div className="ri-fc-kills">KILLS</div>
              <div className="ri-fc-total">TOTAL</div>
            </div>
            {finalResults.length === 0 && <div className="ri-empty">Fill all rounds to see standings</div>}
            {finalResults.map((team, idx) => (
              <div key={team.teamId} className={`ri-final-row ${idx < 3 ? `rank-top-${idx+1}` : ''}`}>
                <div className="ri-fc-rank"><span className={`ri-final-rank rank-${idx+1}`}>{String(idx+1).padStart(2,'0')}</span></div>
                <div className="ri-fc-team">{team.teamName}</div>
                <div className="ri-fc-win">{String(team.wins).padStart(2,'0')}</div>
                <div className="ri-fc-pts">{team.points}</div>
                <div className="ri-fc-kills">{team.kills}</div>
                <div className="ri-fc-total">{team.total}</div>
              </div>
            ))}
          </div>

          {finalResults.length > 0 && match?.prizePool > 0 && (
            <div className="ri-prize-preview">
              <h3>💰 Prize Distribution (to IGL wallet)</h3>
              {[0.6, 0.25, 0.15].map((pct, idx) => {
                const team = finalResults[idx]
                if (!team) return null
                const amount = Math.round(match.prizePool * pct)
                const igl = teams.find(t => t.id === team.teamId)
                return (
                  <div key={idx} className={`ri-prize-row prize-${idx+1}`}>
                    <span>{['🥇','🥈','🥉'][idx]}</span>
                    <span>{team.teamName}</span>
                    <span className="ri-prize-igl">IGL: {igl?.igl || '—'}</span>
                    <span className="ri-prize-amount">+{amount} TK</span>
                  </div>
                )
              })}
            </div>
          )}

          <div className="ri-submit-section">
            <button className="ri-btn ri-btn-cancel" onClick={onCancel}>CANCEL</button>
            <button className="ri-btn ri-btn-submit" onClick={handleSave} disabled={finalResults.length === 0}>
              ✅ SUBMIT RESULTS & DISTRIBUTE
            </button>
          </div>
        </div>
      )}

      <div className="ri-point-ref">
        Points: 1st=12 | 2nd=9 | 3rd=7 | 4th=5 | 5th=4 | 6th=3 | 7th=2 | 8th=1 | Rest=0 • Kills=1 each
      </div>
    </div>
  )
}