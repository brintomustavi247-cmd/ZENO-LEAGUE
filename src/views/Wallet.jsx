import { useState } from 'react'
import { useApp } from '../context'
import { formatTK } from '../utils'

export default function Wallet() {
  const { state, dispatch } = useApp()
  const { currentUser, transactions } = state

  if (!currentUser) return null

  // ═══ V6.0: SPLIT BALANCES ═══
  const realBalance = currentUser.balance || 0
  const lockedBalance = currentUser.lockedBalance || 0
  const totalBalance = realBalance + lockedBalance
  const freeMatches = currentUser.tokens?.freeMatch || 0

  // Existing Stats (Preserved exactly)
  const totalWon = transactions.filter(t => t.type === 'win' && t.status !== 'rejected').reduce((s, t) => s + t.amount, 0)
  const totalPending = transactions.filter(t => t.status === 'pending').reduce((s, t) => s + t.amount, 0)
  const totalSpent = transactions.filter(t => t.type === 'join' && t.status !== 'rejected').reduce((s, t) => s + t.amount, 0)
  const totalAdded = transactions.filter(t => t.type === 'add' && t.status === 'completed').reduce((s, t) => s + t.amount, 0)
  const pendingCount = transactions.filter(t => t.status === 'pending').length

  // ═══ V6.0: UPGRADED TRANSACTION ICONS ═══
  const txIcon = (type) => {
    switch (type) {
      case 'add': return { icon: 'fa-solid fa-plus', bg: 'rgba(186,195,255,0.12)', color: '#bac3ff' }
      case 'win': return { icon: 'fa-solid fa-trophy', bg: 'rgba(186,195,255,0.12)', color: '#bac3ff' }
      case 'join': return { icon: 'fa-solid fa-crosshairs', bg: '#2a2a2c', color: '#889299' }
      case 'withdraw': return { icon: 'fa-solid fa-arrow-up-from-bracket', bg: '#2a2a2c', color: '#889299' }
      case 'refund': return { icon: 'fa-solid fa-rotate-left', bg: 'rgba(74,222,128,0.12)', color: '#4ade80' }
      // V6.0 New Transaction Types
      case 'referral_unlock': return { icon: 'fa-solid fa-lock-open', bg: 'rgba(168,85,247,0.12)', color: '#a855f7' }
      case 'referral_bonus': return { icon: 'fa-solid fa-gift', bg: 'rgba(168,85,247,0.12)', color: '#a855f7' }
      case 'referral_earn': return { icon: 'fa-solid fa-user-plus', bg: 'rgba(168,85,247,0.12)', color: '#a855f7' }
      case 'spin_reward': return { icon: 'fa-solid fa-dharmachakra', bg: 'rgba(236,72,153,0.12)', color: '#ec4899' }
      case 'ad_reward': return { icon: 'fa-solid fa-clapperboard', bg: 'rgba(34,211,238,0.12)', color: '#22d3ee' }
      case 'share_reward': return { icon: 'fa-solid fa-share-nodes', bg: 'rgba(6,182,212,0.12)', color: '#06b6d4' }
      case 'adjust_add': return { icon: 'fa-solid fa-wand-magic-sparkles', bg: 'rgba(251,191,36,0.12)', color: '#fbbf24' }
      case 'adjust_deduct': return { icon: 'fa-solid fa-eraser', bg: 'rgba(248,113,113,0.12)', color: '#f87171' }
      default: return { icon: 'fa-solid fa-arrow-right-arrow-left', bg: '#2a2c', color: '#889299' }
    }
  }

  // Preserved Status logic
  const txStatus = (status) => {
    switch (status) {
      case 'completed': return { label: 'Completed', color: '#4ade80', bg: 'rgba(74,222,128,0.1)' }
      case 'pending': return { label: 'Pending', color: '#fbbf24', bg: 'rgba(251,191,36,0.1)' }
      case 'rejected': return { label: 'Rejected', color: '#f87171', bg: 'rgba(248,113,113,0.1)' }
      default: return null
    }
  }

  return (
    <div style={{ padding: '0 0 100px 0' }}>

      {/* ═══ PAGE HEADER ═══ */}
      <div style={{ marginBottom: 28 }}>
        <h1 style={{
          fontFamily: "'Lexend', sans-serif", fontSize: 28, fontWeight: 700,
          color: '#e5e1e4', margin: '0 0 6px',
          letterSpacing: '-0.025em', textTransform: 'uppercase',
        }}>
          Wallet
        </h1>
        <p style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13,
          color: '#889299', margin: 0, fontWeight: 500,
        }}>
          Manage your funds, deposits and withdrawals
        </p>
      </div>

      {/* ═══ BALANCE HERO CARD — V6.0 SPLIT BALANCE ═══ */}
      <div style={{
        position: 'relative', borderRadius: 20, overflow: 'hidden',
        background: 'linear-gradient(145deg, #1c1b1d, #141416)',
        border: '1px solid rgba(255,255,255,0.08)',
        padding: '32px 24px 28px',
        marginBottom: 20,
        boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
      }}>
        {/* Subtle glow */}
        <div style={{
          position: 'absolute', top: -40, right: -40,
          width: 250, height: 250,
          background: 'rgba(139,92,246,0.08)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }} />
        
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <span style={{
            fontSize: 12, fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.1em', color: '#889299',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            Total Balance
          </span>
          <div style={{ margin: '8px 0 24px' }}>
            <span style={{
              fontFamily: "'Inter', sans-serif", fontSize: 48, fontWeight: 700,
              color: '#e5e1e4', letterSpacing: '-0.02em',
            }}>
              {formatTK(totalBalance)}
            </span>
            <span style={{
              fontSize: 22, fontWeight: 700, color: '#a78bfa',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              textTransform: 'uppercase', letterSpacing: '0.05em',
              marginLeft: 6,
            }}>
              TK
            </span>
          </div>

          {/* V6.0: Real vs Locked Split */}
          <div style={{
            display: 'flex', justifyContent: 'center', gap: 24,
            marginBottom: 24, padding: '12px 0',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 10, color: '#4ade80', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
                <i className="fa-solid fa-check-circle" style={{ fontSize: 9 }} /> Real
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 20, fontWeight: 700, color: '#fff' }}>
                {formatTK(realBalance)} <span style={{ fontSize: 11, color: '#4ade80' }}>TK</span>
              </div>
            </div>
            
            <div style={{ width: 1, background: 'rgba(255,255,255,0.08)' }}></div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 10, color: '#fbbf24', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
                <i className="fa-solid fa-lock" style={{ fontSize: 9 }} /> Arena Credit
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 20, fontWeight: 700, color: '#fff' }}>
                {formatTK(lockedBalance)} <span style={{ fontSize: 11, color: '#fbbf24' }}>TK</span>
              </div>
            </div>
          </div>

          {/* V6.0: Free Match Token Indicator */}
          {freeMatches > 0 && (
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              padding: '8px 16px', borderRadius: 10,
              background: 'rgba(0,212,255,0.08)',
              border: '1px solid rgba(0,212,255,0.15)',
              marginBottom: 20,
            }}>
              <i className="fa-solid fa-ticket" style={{ color: '#00d4ff', fontSize: 14 }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: '#00d4ff' }}>
                {freeMatches} Free Match Token{freeMatches > 1 ? 's' : ''} Available!
              </span>
            </div>
          )}

          <div style={{
            display: 'flex', gap: 12, maxWidth: 340, margin: '0 auto',
          }}>
            <button
              onClick={(e) => { e.stopPropagation(); dispatch({ type: 'SHOW_MODAL', payload: { type: 'add-money' } }) }}
              style={{
                flex: 1, padding: '14px 0', borderRadius: 12, border: 'none',
                background: '#61cdff', color: '#005572',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 13, fontWeight: 700,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                WebkitTapHighlightColor: 'transparent',
                boxShadow: '0 4px 20px rgba(97, 205, 255, 0.25)',
              }}
            >
              <i className="fa-solid fa-plus-circle" style={{ fontSize: 13 }} />
              Deposit
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); dispatch({ type: 'SHOW_MODAL', payload: { type: 'withdraw' } }) }}
              style={{
                flex: 1, padding: '14px 0', borderRadius: 12,
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#e5e1e4',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 13, fontWeight: 700,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              <i className="fa-solid fa-arrow-up-from-bracket" style={{ fontSize: 13 }} />
              Withdraw
            </button>
          </div>
        </div>
      </div>

      {/* ═══ V6.0: CLUTCH PASS PROMO BANNER ═══ */}
      <div style={{
        position: 'relative', borderRadius: 16, overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(236,72,153,0.1))',
        border: '1px solid rgba(168,85,247,0.2)',
        padding: '18px 20px',
        marginBottom: 20,
        display: 'flex', alignItems: 'center', gap: 16,
        cursor: 'pointer',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(168,85,247,0.2)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
      onClick={() => dispatch({ type: 'SHOW_MODAL', payload: { type: 'clutch-pass' } })}
      >
        <div style={{
          width: 44, height: 44, borderRadius: 12,
          background: 'rgba(168,85,247,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <i className="fa-solid fa-crown" style={{ fontSize: 18, color: '#a855f7' }} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'Lexend', sans-serif", fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 2 }}>
            Clutch Pass <span style={{ fontSize: 10, color: '#fbbf24', background: 'rgba(251,191,36,0.15)', padding: '2px 6px', borderRadius: 4, marginLeft: 6 }}>99 TK/mo</span>
          </div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>
            Get 2x XP, exclusive badges & priority queue access!
          </div>
        </div>
        <i className="fa-solid fa-chevron-right" style={{ color: '#a855f7', fontSize: 12 }} />
      </div>

      {/* ═══ QUICK STATS — 2x2 Grid (Preserved) ═══ */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24,
      }}>
        {/* Total Winnings */}
        <div style={{
          position: 'relative', borderRadius: 14, overflow: 'hidden',
          background: '#1c1b1d',
          border: '1px solid rgba(255,255,255,0.05)',
          padding: '18px 16px',
        }}>
          <div style={{
            position: 'absolute', top: -20, right: -20,
            width: 80, height: 80,
            background: 'rgba(186,195,255,0.06)',
            borderRadius: '50%',
            filter: 'blur(30px)', pointerEvents: 'none',
          }} />
          <span style={{
            fontSize: 11, fontWeight: 700, color: '#889299',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            textTransform: 'uppercase', letterSpacing: '0.1em',
            display: 'block', marginBottom: 6,
          }}>
            Total Winnings
          </span>
          <span style={{
            fontFamily: "'Inter', sans-serif", fontSize: 22, fontWeight: 700,
            color: '#e5e1e4',
            letterSpacing: '-0.01em',
          }}>
            {formatTK(totalWon)}
          </span>
        </div>

        {/* Pending */}
        <div style={{
          position: 'relative', borderRadius: 14, overflow: 'hidden',
          background: '#1c1b1d',
          border: pendingCount > 0 ? '1px solid rgba(251,191,36,0.2)' : '1px solid rgba(255,255,255,0.05)',
          padding: '18px 16px',
        }}>
          <div style={{
            position: 'absolute', top: -20, right: -20,
            width: 80, height: 80,
            background: pendingCount > 0 ? 'rgba(251,191,36,0.08)' : 'rgba(248,113,113,0.06)',
            borderRadius: '50%',
            filter: 'blur(30px)', pointerEvents: 'none',
          }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
            <span style={{
              fontSize: 11, fontWeight: 700, color: pendingCount > 0 ? '#fbbf24' : '#889299',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              textTransform: 'uppercase', letterSpacing: '0.1em',
            }}>
              Pending
            </span>
            {pendingCount > 0 && (
              <span style={{
                fontSize: 9, fontWeight: 700, color: '#fbbf24',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                padding: '2px 8px', borderRadius: 6,
                background: 'rgba(251,191,36,0.12)',
                letterSpacing: '0.05em',
              }}>
                {pendingCount} {pendingCount === 1 ? 'REQUEST' : 'REQUESTS'}
              </span>
            )}
          </div>
          <span style={{
            fontFamily: "'Inter', sans-serif", fontSize: 22, fontWeight: 700,
            color: pendingCount > 0 ? '#fbbf24' : '#e5e1e4',
            letterSpacing: '-0.01em',
          }}>
            {formatTK(totalPending)}
          </span>
          {pendingCount > 0 && (
            <div style={{
              fontSize: 10, color: '#889299', marginTop: 4,
              fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500,
            }}>
              Awaiting admin approval
            </div>
          )}
        </div>

        {/* Total Spent */}
        <div style={{
          borderRadius: 14,
          background: '#1c1b1d',
          border: '1px solid rgba(255,255,255,0.05)',
          padding: '18px 16px',
        }}>
          <span style={{
            fontSize: 11, fontWeight: 700, color: '#889299',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            textTransform: 'uppercase', letterSpacing: '0.1em',
            display: 'block', marginBottom: 6,
          }}>
            Total Spent
          </span>
          <span style={{
            fontFamily: "'Inter', sans-serif", fontSize: 22, fontWeight: 700,
            color: '#e5e1e4',
            letterSpacing: '-0.01em',
          }}>
            {formatTK(totalSpent)}
          </span>
        </div>

        {/* Total Added */}
        <div style={{
          position: 'relative', borderRadius: 14, overflow: 'hidden',
          background: '#1c1b1d',
          border: '1px solid rgba(255,255,255,0.05)',
          padding: '18px 16px',
        }}>
          <div style={{
            position: 'absolute', top: -20, left: -20,
            width: 80, height: 80,
            background: 'rgba(74,222,128,0.06)',
            borderRadius: '50%',
            filter: 'blur(30px)', pointerEvents: 'none',
          }} />
          <span style={{
            fontSize: 11, fontWeight: 700, color: '#889299',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            textTransform: 'uppercase', letterSpacing: '0.1em',
            display: 'block', marginBottom: 6,
          }}>
            Total Added
          </span>
          <span style={{
            fontFamily: "'Inter', sans-serif", fontSize: 22, fontWeight: 700,
            color: '#e5e1e4',
            letterSpacing: '-0.01em',
          }}>
            {formatTK(totalAdded)}
          </span>
        </div>
      </div>

      {/* ═══ RECENT ACTIVITY (Preserved & Enhanced) ═══ */}
      <div style={{ marginBottom: 16 }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginBottom: 14,
          borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: 12,
        }}>
          <h3 style={{
            fontFamily: "'Lexend', sans-serif", fontSize: 16, fontWeight: 700,
            color: '#e5e1e4', margin: 0,
            textTransform: 'uppercase', letterSpacing: '-0.025em',
          }}>
            Recent Activity
          </h3>
          <span style={{
            fontSize: 12, fontWeight: 600, color: '#889299',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            cursor: 'pointer',
          }}>
            View All
          </span>
        </div>

        {/* Transaction List */}
        <div style={{
          display: 'flex', flexDirection: 'column', gap: 8,
        }}>
          {transactions.slice(0, 10).map(tx => {
            const isPositive = (tx.type === 'win' || tx.type === 'add' || tx.type === 'referral_bonus' || tx.type === 'referral_unlock' || tx.type === 'spin_reward' || tx.type === 'ad_reward' || tx.type === 'share_reward' || tx.type === 'adjust_add') && tx.status !== 'rejected'
            const isPending = tx.status === 'pending'
            const isRejected = tx.status === 'rejected'
            const icon = txIcon(tx.type)
            const statusInfo = txStatus(tx.status)

            let amtColor = '#e5e1e4'
            if (isRejected) amtColor = '#f87171'
            else if (isPending && isPositive) amtColor = '#889299'
            else if (!isPositive) amtColor = '#f87171'

            const prefix = isPositive ? '+ ' : '- '

            return (
              <div
                key={tx.id}
                style={{
                  background: isPending ? '#141416' : '#131315',
                  borderRadius: 14, padding: '14px 16px',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  WebkitTapHighlightColor: 'transparent',
                  borderLeft: isPending ? '3px solid rgba(251,191,36,0.3)' : isRejected ? '3px solid rgba(248,113,113,0.3)' : isPositive ? '3px solid rgba(139,92,246,0.2)' : '3px solid transparent',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
                onMouseLeave={e => e.currentTarget.style.background = isPending ? '#141416' : '#131315'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, flex: 1, minWidth: 0 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: isPending ? 'rgba(251,191,36,0.08)' : isRejected ? 'rgba(248,113,113,0.08)' : icon.bg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <i className={icon.icon} style={{
                      fontSize: 15,
                      color: isPending ? '#fbbf24' : isRejected ? '#f87171' : icon.color,
                    }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 600,
                      color: isRejected ? '#555555' : '#e5e1e4', lineHeight: 1.3,
                      overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                      textDecoration: isRejected ? 'line-through' : 'none',
                    }}>
                      {tx.desc}
                    </div>
                    <div style={{
                      fontSize: 11, color: '#555555',
                      fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500,
                      marginTop: 1,
                      display: 'flex', alignItems: 'center', gap: 6,
                    }}>
                      <span>{tx.date || 'Just now'}</span>
                      {tx.locked && <span style={{ fontSize: 9, fontWeight: 700, color: '#fbbf24', background: 'rgba(251,191,36,0.1)', padding: '1px 6px', borderRadius: 4 }}>LOCKED</span>}
                      {statusInfo && (
                        <span style={{
                          fontSize: 9, fontWeight: 700, color: statusInfo.color,
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          textTransform: 'uppercase', letterSpacing: '0.05em',
                          padding: '1px 6px', borderRadius: 4,
                          background: statusInfo.bg,
                        }}>
                          {statusInfo.label}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{
                    fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 700,
                    color: amtColor, letterSpacing: '-0.01em',
                    textDecoration: isRejected ? 'line-through' : 'none',
                    opacity: isPending && isPositive ? 0.6 : 1,
                  }}>
                    {prefix}{formatTK(tx.amount)}
                  </div>
                  {isPending && isPositive && (
                    <div style={{
                      fontSize: 9, fontWeight: 600, color: '#fbbf24',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      textTransform: 'uppercase', letterSpacing: '0.05em',
                      marginTop: 2,
                    }}>
                      ⏳ Processing
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* View All button */}
        <div style={{ textAlign: 'center', padding: '12px 0' }}>
          <span style={{
            fontFamily: "'Lexend', sans-serif", fontSize: 14, fontWeight: 600, color: '#61cdff',
            cursor: 'pointer',
            WebkitTapHighlightColor: 'transparent',
          }}>
            Load More
          </span>
        </div>
      </div>
    </div>
  )
}