import { useState } from 'react'
import { useApp } from '../context'
import { formatTK } from '../utils'

export default function Leaderboard() {
  const { state } = useApp()
  const { users, currentUser } = state
  const [tab, setTab] = useState('earnings')

  if (!currentUser) return null

  const activeUsers = users.filter(u => u.ign && !u.banned && u.role !== 'owner' && u.role !== 'admin')

  const sortedPlayers = (() => {
    if (tab === 'wins') return [...activeUsers].sort((a, b) => (b.wins || 0) - (a.wins || 0))
    if (tab === 'kills') return [...activeUsers].sort((a, b) => (b.kills || 0) - (a.kills || 0))
    return [...activeUsers].sort((a, b) => (b.earnings || 0) - (a.earnings || 0))
  })()

  const getValue = (u) => {
    if (tab === 'wins') return `${u.wins || 0} W`
    if (tab === 'kills') return `${u.kills || 0} K`
    return formatTK(u.earnings || 0)
  }

  const podiumPlayers = sortedPlayers.slice(0, 3).map(u => ({
    ...u,
    xp: getValue(u),
  }))

  const hasPodium = podiumPlayers.length === 3
  const restList = sortedPlayers.slice(3)

  const userPlayerRank = sortedPlayers.findIndex(u => u.id === currentUser.id)
  const userRank = userPlayerRank >= 0 ? userPlayerRank + 1 : null

  const initial = (name) => name ? name[0].toUpperCase() : '?'

  const AvatarCircle = ({ name, size = 32, rank }) => {
    const colors = { 1: '#facc15', 2: '#cccccc', 3: '#cd7f32' }
    const c = colors[rank] || '#2a2a2c'
    return (
      <div style={{
        width: size, height: size, borderRadius: '50%',
        background: '#2a2a2c',
        border: rank <= 3 ? `2px solid ${c}` : '1px solid rgba(255,255,255,0.06)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: "'Lexend', sans-serif", fontSize: size * 0.35, fontWeight: 700,
        color: rank <= 3 ? '#000' : '#889299',
        flexShrink: 0,
      }}>
        {initial(name)}
      </div>
    )
  }

  return (
    <div style={{ padding: '0 0 100px 0', overflowX: 'hidden' }}>

      {/* ═══ PAGE HEADER ═══ */}
      <div style={{ marginBottom: 32 }}>
        <h1 style={{
          fontFamily: "'Lexend', sans-serif", fontSize: 28, fontWeight: 700,
          color: '#e5e1e4', margin: '0 0 6px',
          letterSpacing: '-0.025em', textTransform: 'uppercase',
        }}>
          Leaderboard
        </h1>
        <p style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13,
          color: '#889299', margin: 0, fontWeight: 500,
        }}>
          Compete in matches to climb the leaderboard and win rewards.
        </p>
      </div>

      {/* ═══ TAB SWITCHER ═══ */}
      <div style={{
        display: 'flex', background: '#1c1b1d', padding: 4,
        borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)',
        marginBottom: 40, width: 'fit-content',
      }}>
        {[
          { key: 'earnings', label: 'Earnings' },
          { key: 'wins', label: 'Wins' },
          { key: 'kills', label: 'Kills' },
        ].map(t => {
          const active = tab === t.key
          return (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              style={{
                padding: '8px 24px', borderRadius: 8, border: 'none',
                fontFamily: "'Lexend', sans-serif", fontSize: 13, fontWeight: 600,
                color: active ? '#005572' : '#889299',
                background: active ? '#61cdff' : 'transparent',
                cursor: 'pointer',
                WebkitTapHighlightColor: 'transparent',
                transition: 'opacity 0.2s ease',
              }}
            >
              {t.label}
            </button>
          )
        })}
      </div>

      {/* ═══ PODIUM SECTION ═══ */}
      {hasPodium && (
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'flex-end',
        height: 280, marginBottom: 48, gap: 8,
      }}>
        {/* Rank 2 — Left */}
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          width: '28%', maxWidth: 160,
        }}>
          <AvatarCircle name={podiumPlayers[1]?.name} size={56} rank={2} />
          <div style={{ textAlign: 'center', marginBottom: 10 }}>
            <div style={{
              fontFamily: "'Lexend', sans-serif", fontSize: 14, fontWeight: 700,
              color: '#e5e1e4', overflow: 'hidden', textOverflow: 'ellipsis',
              whiteSpace: 'nowrap', maxWidth: 120,
            }}>
              {podiumPlayers[1]?.name}
            </div>
            <div style={{
              fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: '#cccccc', marginTop: 2,
            }}>
              {podiumPlayers[1]?.xp} XP
            </div>
          </div>
          <div style={{
            width: '100%', height: 120,
            background: '#2a2a2c', borderRadius: '12px 12px 0 0',
            borderTop: '3px solid #cccccc',
            display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: 16,
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom, rgba(204,204,204,0.08), transparent)',
            }} />
            <span style={{
              fontFamily: "'Lexend', sans-serif", fontSize: 28, fontWeight: 700, color: '#cccccc',
            }}>2</span>
          </div>
        </div>

        {/* Rank 1 — Center (tallest) */}
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          width: '32%', maxWidth: 180, position: 'relative', zIndex: 2,
        }}>
          <div style={{ marginBottom: 8, color: '#facc15' }}>
            <i className="fa-solid fa-crown" style={{ fontSize: 28 }} />
          </div>
          <AvatarCircle name={podiumPlayers[0]?.name} size={72} rank={1} />
          <div style={{ textAlign: 'center', marginBottom: 10 }}>
            <div style={{
              fontFamily: "'Lexend', sans-serif", fontSize: 16, fontWeight: 700,
              color: '#e5e1e4', overflow: 'hidden', textOverflow: 'ellipsis',
              whiteSpace: 'nowrap', maxWidth: 140,
            }}>
              {podiumPlayers[0]?.name}
            </div>
            <div style={{
              fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600, color: '#facc15', marginTop: 2,
            }}>
              {podiumPlayers[0]?.xp} XP
            </div>
          </div>
          <div style={{
            width: '100%', height: 160,
            background: '#2a2a2c', borderRadius: '12px 12px 0 0',
            borderTop: '4px solid #facc15',
            display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: 16,
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom, rgba(250,204,21,0.1), transparent)',
            }} />
            <span style={{
              fontFamily: "'Lexend', sans-serif", fontSize: 36, fontWeight: 700, color: '#facc15',
            }}>1</span>
          </div>
        </div>

        {/* Rank 3 — Right */}
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          width: '28%', maxWidth: 160,
        }}>
          <AvatarCircle name={podiumPlayers[2]?.name} size={56} rank={3} />
          <div style={{ textAlign: 'center', marginBottom: 10 }}>
            <div style={{
              fontFamily: "'Lexend', sans-serif", fontSize: 14, fontWeight: 700,
              color: '#e5e1e4', overflow: 'hidden', textOverflow: 'ellipsis',
              whiteSpace: 'nowrap', maxWidth: 120,
            }}>
              {podiumPlayers[2]?.name}
            </div>
            <div style={{
              fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: '#cd7f32', marginTop: 2,
            }}>
              {podiumPlayers[2]?.xp} XP
            </div>
          </div>
          <div style={{
            width: '100%', height: 80,
            background: '#2a2a2c', borderRadius: '12px 12px 0 0',
            borderTop: '3px solid #cd7f32',
            display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: 14,
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom, rgba(205,127,50,0.06), transparent)',
            }} />
            <span style={{
              fontFamily: "'Lexend', sans-serif", fontSize: 28, fontWeight: 700, color: '#cd7f32',
            }}>3</span>
          </div>
        </div>
      </div>
      )}

      {/* ═══ RANKED TABLE ═══ */}
      <div style={{
        background: '#0e0e10', borderRadius: 12,
        border: '1px solid rgba(255,255,255,0.05)',
        overflow: 'hidden', marginBottom: 24,
      }}>
        {/* Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '36px 1fr 60px 58px 48px',
          gap: 4, padding: '12px 16px',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          background: '#1c1b1d',
          fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 10, fontWeight: 700,
          color: '#889299', textTransform: 'uppercase', letterSpacing: '0.08em',
        }}>
          <div style={{ textAlign: 'center' }}>Rank</div>
          <div style={{ minWidth: 0, overflow: 'hidden' }}>Player</div>
          <div style={{ textAlign: 'center' }}>Matches</div>
          <div style={{ textAlign: 'center' }}>Win Rate</div>
          <div style={{ textAlign: 'center' }}>Score</div>
        </div>

        {/* Rows */}
        {restList.map((item, idx) => {
          const rank = idx + 4
          const isMe = item.id === currentUser.id
          const matchesPlayed = item.matchesPlayed || 0
          const winRate = matchesPlayed > 0 ? Math.round(((item.wins || 0) / matchesPlayed) * 100) : 0

          return (
            <div key={item.id || item.teamName} style={{
              display: 'grid',
              gridTemplateColumns: '36px 1fr 60px 58px 48px',
              gap: 4, padding: '12px 16px', alignItems: 'center',
              borderBottom: idx < restList.length - 1 ? '1px solid rgba(255,255,255,0.03)' : 'none',
              background: isMe ? 'rgba(97,205,255,0.05)' : 'transparent',
            }}>
              {/* Rank */}
              <div style={{
                textAlign: 'center',
                fontFamily: "'Lexend', sans-serif", fontSize: 13, fontWeight: 700,
                color: isMe ? '#61cdff' : '#889299',
              }}>
                {rank}
              </div>

              {/* Player */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0, overflow: 'hidden' }}>
                <div style={{
                  width: 28, height: 28, borderRadius: '50%',
                  background: '#2a2a2c',
                  border: isMe ? '1px solid #61cdff' : 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Lexend', sans-serif", fontSize: isMe ? 11 : 10, fontWeight: 700,
                  color: isMe ? '#61cdff' : '#555555',
                  flexShrink: 0,
                }}>
                  {(isMe ? (currentUser?.ign || 'Y') : (item.name || item.teamName || '?'))[0].toUpperCase()}
                </div>
                <span style={{
                  fontFamily: "'Lexend', sans-serif", fontSize: 13, fontWeight: 600,
                  color: isMe ? '#61cdff' : '#e5e1e4',
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                }}>
                  {isMe ? (currentUser?.ign || 'You') : (item.name || item.teamName)}
                  {isMe && (
                    <span style={{
                      fontSize: 9, fontWeight: 700, color: '#0e0e10',
                      background: '#61cdff', padding: '1px 5px', borderRadius: 3,
                      marginLeft: 6, textTransform: 'uppercase', letterSpacing: '0.05em',
                    }}>
                      Me
                    </span>
                  )}
                </span>
              </div>

              {/* Matches */}
              <div style={{
                textAlign: 'center',
                fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500, color: '#555555',
              }}>
                {matchesPlayed}
              </div>

              {/* Win Rate */}
              <div style={{
                textAlign: 'center',
                fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500, color: '#555555',
              }}>
                {winRate}%
              </div>

              {/* Score */}
              <div style={{
                textAlign: 'center',
                fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 700,
                color: isMe ? '#61cdff' : '#e5e1e4',
              }}>
                {tab === 'earnings' ? formatTK(item.earnings || 0) : tab === 'wins' ? `${item.wins || 0}` : `${item.kills || 0}`}
              </div>
            </div>
          )
        })}
      </div>

      {/* ═══ YOUR RANK BANNER ═══ */}
      {userRank && (
        <div style={{
          background: 'rgba(97,205,255,0.05)',
          border: '1px solid rgba(97,205,255,0.1)',
          borderRadius: 12, padding: '16px 24px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginBottom: 16, flexWrap: 'wrap', gap: 12,
        }}>
          <span style={{
            fontSize: 12, fontWeight: 700, color: '#889299',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            textTransform: 'uppercase', letterSpacing: '0.08em',
          }}>
            Your Ranking
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontFamily: "'Lexend', sans-serif", fontSize: 24, fontWeight: 700, color: '#61cdff' }}>
              #{userRank}
            </span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: '#e5e1e4' }}>
              {getValue(currentUser)}
            </span>
            <span style={{
              fontSize: 10, fontWeight: 700, color: '#0e0e0e',
              background: '#61cdff', padding: '3px 10px', borderRadius: 4,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              textTransform: 'uppercase', letterSpacing: '0.05em',
            }}>
              Top {Math.round((userRank / Math.max(sortedPlayers.length, 1)) * 100)}%
            </span>
          </div>
        </div>
      )}

      {activeUsers.length === 0 && (
        <div style={{
          textAlign: 'center', padding: '60px 20px',
          background: '#1c1b1d', borderRadius: 16,
          border: '1px solid rgba(255,255,255,0.05)',
        }}>
          <i className="fa-solid fa-trophy" style={{ fontSize: 40, color: '#353437', marginBottom: 16, display: 'block' }} />
          <p style={{ color: '#889299', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, marginBottom: 8 }}>No players yet</p>
          <p style={{ color: '#555555', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12 }}>
            Players will appear here after joining their first match.
          </p>
        </div>
      )}

      {/* ═══ LOAD MORE ═══ */}
      <div style={{ textAlign: 'center', padding: '12px 0' }}>
        <span style={{
          fontFamily: "'Lexend', sans-serif", fontSize: 14, fontWeight: 600, color: '#61cdff', cursor: 'pointer',
          WebkitTapHighlightColor: 'transparent',
        }}>
          Load More
        </span>
      </div>
    </div>
  )
}