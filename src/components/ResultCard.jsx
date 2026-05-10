import { useState } from 'react'
import './ResultCard.css'

const MEDALS = ['🥇', '🥈', '🥉']

export default function ResultCard({ result, onViewMatch }) {
  const [expandedTeam, setExpandedTeam] = useState(null)

  if (!result?.finalResults?.length) return null

  const { matchTitle, gameType, mode, totalRounds, finalResults, submittedAt } = result
  const isExpandable = gameType === 'squad' || gameType === 'duo'

  const fmtDate = (iso) => {
    if (!iso) return ''
    const d = new Date(iso)
    return d.toLocaleDateString('en-BD', { day: '2-digit', month: 'short', year: 'numeric' })
      + ' • ' + d.toLocaleTimeString('en-BD', { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div className="result-card">
      <div className="rc-header">
        <div className="rc-header-left">
          <span className="rc-game-badge">{gameType?.toUpperCase()}</span>
          <h3 className="rc-match-title">{matchTitle}</h3>
        </div>
        <span className="rc-rounds-badge">{totalRounds}R</span>
      </div>

      <div className="rc-meta">
        <span>{mode}</span><span className="rc-dot">•</span><span>{fmtDate(submittedAt)}</span>
      </div>

      <div className="rc-table">
        <div className="rc-table-head">
          <div className="rc-col-rank">RANK</div>
          <div className="rc-col-team">TEAM</div>
          <div className="rc-col-win">WIN</div>
          <div className="rc-col-pts">POINT</div>
          <div className="rc-col-kills">KILLS</div>
          <div className="rc-col-total">TOTAL</div>
        </div>

        {finalResults.map((team, idx) => (
          <div key={team.teamId}>
            <div
              className={`rc-row ${idx < 3 ? `rc-top-${idx+1}` : ''} ${expandedTeam === idx ? 'rc-expanded' : ''} ${isExpandable ? 'rc-clickable' : ''}`}
              onClick={() => isExpandable && setExpandedTeam(expandedTeam === idx ? null : idx)}
            >
              <div className="rc-col-rank">
                {idx < 3
                  ? <span className="rc-medal">{MEDALS[idx]}</span>
                  : <span className="rc-rank-num">{String(idx + 1).padStart(2, '0')}</span>
                }
              </div>
              <div className="rc-col-team">
                <span className="rc-team-name">{team.teamName}</span>
                {isExpandable && <span className="rc-expand-icon">{expandedTeam === idx ? '▲' : '▼'}</span>}
              </div>
              <div className="rc-col-win">{String(team.wins).padStart(2, '0')}</div>
              <div className="rc-col-pts">{team.points}</div>
              <div className="rc-col-kills">{team.kills}</div>
              <div className="rc-col-total">{team.total}</div>
            </div>

            {expandedTeam === idx && team.playerList?.length > 0 && (
              <div className="rc-player-detail">
                {team.playerList.map((p, pIdx) => (
                  <div key={pIdx} className="rc-player-item">
                    <span className="rc-player-igl">{pIdx === 0 ? '👑' : ''}</span>
                    <span className="rc-player-name">{p.name}</span>
                    <span className="rc-player-kills">{p.kills} kills</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="rc-footer">
        <span className="rc-footer-brand">by ZENO LEAGUE</span>
        {onViewMatch && <button className="rc-view-btn" onClick={onViewMatch}>View Match →</button>}
      </div>
    </div>
  )
}