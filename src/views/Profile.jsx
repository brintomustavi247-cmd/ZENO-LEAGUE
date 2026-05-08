import { useState, useEffect, useRef } from 'react'
import { useApp } from '../context'
import { formatTK, formatTKShort, getEloTier } from '../utils'
import { getTierFromXP, getTierProgress, TIERS } from '../database'

// ═══════════════════════════════════════════════════════════════════════════════
//  ANIMATED COUNTER — Premium number animation
// ═══════════════════════════════════════════════════════════════════════════════
function AnimatedNumber({ value, duration = 1500, suffix = '' }) {
  const [display, setDisplay] = useState(0)
  const startRef = useRef(null)
  const fromRef = useRef(0)

  useEffect(() => {
    fromRef.current = display
    startRef.current = null
    let raf
    const animate = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp
      const progress = Math.min((timestamp - startRef.current) / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 4)
      const current = Math.round(fromRef.current + (value - fromRef.current) * easeOut)
      setDisplay(current)
      if (progress < 1) raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [value])

  return <span>{display.toLocaleString()}{suffix}</span>
}

// ═══════════════════════════════════════════════════════════════════════════════
//  CIRCULAR PROGRESS — SVG ring with glow
// ═══════════════════════════════════════════════════════════════════════════════
function CircularProgress({ value, max = 100, size = 80, strokeWidth = 6, color, icon, label }) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const progress = Math.min(value / max, 1)
  const offset = circumference - progress * circumference
  const [animatedOffset, setAnimatedOffset] = useState(circumference)

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedOffset(offset), 100)
    return () => clearTimeout(timer)
  }, [offset])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <div style={{ position: 'relative', width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
          <defs>
            <filter id={`glow-${label}`}>
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <circle
            cx={size/2} cy={size/2} r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size/2} cy={size/2} r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={animatedOffset}
            filter={`url(#glow-${label})`}
            style={{ transition: 'stroke-dashoffset 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
          />
        </svg>
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
        }}>
          <i className={icon} style={{ fontSize: 14, color, opacity: 0.8 }} />
          <span style={{ fontSize: 16, fontWeight: 800, color, fontFamily: 'var(--font-mono)' }}>
            {value}{label === 'Win Rate' ? '%' : ''}
          </span>
        </div>
      </div>
      <span style={{
        fontSize: 10,
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: 'var(--text-muted)',
      }}>{label}</span>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
//  PARTICLE BUTTON — Click burst effect
// ═══════════════════════════════════════════════════════════════════════════════
function ParticleButton({ children, onClick, variant = 'primary', className = '' }) {
  const btnRef = useRef(null)
  const [particles, setParticles] = useState([])

  const handleClick = (e) => {
    const rect = btnRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x,
      y,
      angle: (i * 45) + Math.random() * 30,
      color: variant === 'primary' ? '#a855f7' : '#ef4444',
    }))

    setParticles(prev => [...prev, ...newParticles])
    setTimeout(() => setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id))), 600)
    onClick?.(e)
  }

  const baseStyle = {
    position: 'relative',
    padding: '12px 24px',
    borderRadius: 12,
    fontFamily: 'var(--font-display)',
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  }

  const variants = {
    primary: {
      background: 'linear-gradient(135deg, #a855f7, #ec4899)',
      color: '#fff',
      boxShadow: '0 4px 20px rgba(168, 85, 247, 0.3)',
    },
    secondary: {
      background: 'rgba(255,255,255,0.05)',
      color: 'var(--text-secondary)',
      border: '1px solid rgba(255,255,255,0.1)',
    },
    danger: {
      background: 'rgba(239, 68, 68, 0.1)',
      color: '#ef4444',
      border: '1px solid rgba(239, 68, 68, 0.2)',
    },
  }

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      className={className}
      style={{ ...baseStyle, ...variants[variant] }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-2px)'
        if (variant === 'primary') {
          e.currentTarget.style.boxShadow = '0 8px 30px rgba(168, 85, 247, 0.4), 0 0 60px rgba(168, 85, 247, 0.15)'
        }
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        if (variant === 'primary') {
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(168, 85, 247, 0.3)'
        }
      }}
    >
      {particles.map(p => (
        <span
          key={p.id}
          style={{
            position: 'absolute',
            left: p.x,
            top: p.y,
            width: 4,
            height: 4,
            borderRadius: '50%',
            background: p.color,
            pointerEvents: 'none',
            animation: `particleBurst 0.6s ease-out forwards`,
            '--angle': `${p.angle}deg`,
          }}
        />
      ))}
      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
    </button>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
//  HOLOGRAPHIC CARD — 3D tilt + shine effect
// ═══════════════════════════════════════════════════════════════════════════════
function HolographicCard({ children, className = '', glowColor = 'rgba(0,212,255,0.3)' }) {
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        borderRadius: 24,
        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: `0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px ${glowColor}`,
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
//  V6.0: TIER BADGE SVG
// ═══════════════════════════════════════════════════════════════════════════════
function TierBadgeSVG({ tier, size = 64 }) {
  return (
    <div style={{
      width: size,
      height: size,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <svg width={size} height={size} viewBox="0 0 64 64">
        <defs>
          <linearGradient id={`tierGrad-${tier.name}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={tier.color} stopOpacity="0.8" />
            <stop offset="100%" stopColor={tier.color} stopOpacity="0.3" />
          </linearGradient>
          <filter id={`tierGlow-${tier.name}`}>
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M32 4 L58 16 L58 44 L32 60 L6 44 L6 16 Z"
          fill={`url(#tierGrad-${tier.name})`}
          stroke={tier.color}
          strokeWidth="1.5"
          filter={`url(#tierGlow-${tier.name})`}
          opacity="0.9"
        />
        <text
          x="32" y="28"
          textAnchor="middle"
          fill={tier.color}
          fontSize="10"
          fontWeight="800"
          fontFamily="var(--font-mono)"
        >
          {tier.name[0]}
        </text>
        <text
          x="32" y="42"
          textAnchor="middle"
          fill={tier.color}
          fontSize="8"
          fontWeight="600"
          opacity="0.8"
        >
          {tier.name.slice(0, 3).toUpperCase()}
        </text>
      </svg>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
//  V6.0: STREAK VISUALIZER
// ═══════════════════════════════════════════════════════════════════════════════
function StreakVisualizer({ streak, best }) {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  const current = streak || 0
  const maxStreak = 7

  return (
    <div style={{
      padding: '16px 20px',
      borderRadius: 14,
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255,255,255,0.05)',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <i className="fa-solid fa-fire" style={{ color: '#f59e0b', fontSize: 16 }} />
          <span style={{
            fontSize: 13, fontWeight: 700, color: '#e5e1e4',
            textTransform: 'uppercase', letterSpacing: '0.05em',
          }}>
            Login Streak
          </span>
        </div>
        <span style={{ fontSize: 11, color: '#f59e0b', fontWeight: 700 }}>
          Best: {best} days
        </span>
      </div>
      <div style={{
        display: 'flex',
        gap: 6,
        justifyContent: 'space-between',
      }}>
        {days.map((day, i) => (
          <div key={i} style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
            padding: '8px 4px',
            borderRadius: 8,
            background: i < current ? 'rgba(251,191,36,0.1)' : 'rgba(255,255,255,0.02)',
            border: i < current ? '1px solid rgba(251,191,36,0.2)' : '1px solid rgba(255,255,255,0.04)',
          }}>
            <span style={{
              fontSize: 10, fontWeight: 700,
              color: i < current ? '#fbbf24' : '#555',
            }}>
              {day}
            </span>
            <span style={{
              fontSize: 14, fontWeight: 800,
              color: i < current ? '#fbbf24' : '#333',
            }}>
              {i < current ? '✓' : '·'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
//  V6.0: REFERRAL TREE MINI
// ═══════════════════════════════════════════════════════════════════════════════
function ReferralTreeMini({ referralStats, currentUser }) {
  const code = referralStats?.code || currentUser.referral?.code || currentUser.referralCode || 'N/A'
  const count = referralStats?.totalReferrals || currentUser.referral?.referrals?.length || currentUser.referralCount || 0
  const unlocked = referralStats?.earnings || currentUser.referral?.totalUnlocked || currentUser.referralEarnings || 0
  const locked = referralStats?.totalLocked || currentUser.referral?.totalLocked || currentUser.lockedBalance || 0

  const milestones = [
    { match: 1, amount: 5, label: '1st Match' },
    { match: 3, amount: 7, label: '3rd Match' },
    { match: 5, amount: 8, label: '5th Match' },
  ]

  return (
    <div style={{
      padding: '16px 20px',
      borderRadius: 14,
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255,255,255,0.05)',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <i className="fa-solid fa-rocket" style={{ color: '#8b5cf6', fontSize: 16 }} />
          <span style={{
            fontSize: 13, fontWeight: 700, color: '#e5e1e4',
            textTransform: 'uppercase', letterSpacing: '0.05em',
          }}>
            Referral Network
          </span>
        </div>
        <button
          onClick={() => {
            navigator.clipboard.writeText(`Join Clutch Arena BD! Use code ${code}: https://clutch-arena-bd.vercel.app/ref/${code}`)
          }}
          style={{
            padding: '6px 12px', borderRadius: 8,
            background: 'rgba(168,85,247,0.1)',
            border: '1px solid rgba(168,85,247,0.2)',
            color: '#a855f7',
            fontSize: 11, fontWeight: 700,
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: 6,
          }}
        >
          <i className="fa-solid fa-copy" style={{ fontSize: 10 }} />
          Copy
        </button>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 12,
        marginBottom: 14,
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: '#e5e1e4' }}>{count}</div>
          <div style={{ fontSize: 10, color: '#555', textTransform: 'uppercase' }}>Invited</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: '#fbbf24' }}>{formatTKShort(locked)}</div>
          <div style={{ fontSize: 10, color: '#555', textTransform: 'uppercase' }}>Locked</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: '#4ade80' }}>{formatTKShort(unlocked)}</div>
          <div style={{ fontSize: 10, color: '#555', textTransform: 'uppercase' }}>Unlocked</div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {milestones.map((m, i) => {
          const isUnlocked = unlocked >= milestones.slice(0, i + 1).reduce((s, x) => s + x.amount, 0)
          return (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '8px 12px', borderRadius: 8,
              background: isUnlocked ? 'rgba(34,197,94,0.05)' : 'rgba(255,255,255,0.01)',
              border: isUnlocked ? '1px solid rgba(34,197,94,0.1)' : '1px solid rgba(255,255,255,0.03)',
            }}>
              <i className={isUnlocked ? 'fa-solid fa-check-circle' : 'fa-solid fa-lock'} style={{
                fontSize: 12,
                color: isUnlocked ? '#22c55e' : '#555',
              }} />
              <span style={{
                flex: 1, fontSize: 11, fontWeight: 600,
                color: isUnlocked ? '#22c55e' : '#e5e1e4',
              }}>
                {m.label} — +{m.amount} TK
              </span>
              <span style={{
                fontSize: 10, fontWeight: 700,
                color: isUnlocked ? '#22c55e' : '#555',
                textTransform: 'uppercase',
              }}>
                {isUnlocked ? 'Done' : 'Locked'}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
//  V6.0: DAILY QUESTS PANEL
// ═══════════════════════════════════════════════════════════════════════════════
function DailyQuestsPanel({ quests }) {
  if (!quests || quests.length === 0) return null

  const completed = quests.filter(q => q.completed).length
  const total = quests.length

  return (
    <div style={{
      padding: '16px 20px',
      borderRadius: 14,
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255,255,255,0.05)',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <i className="fa-solid fa-bullseye" style={{ color: '#ec4899', fontSize: 16 }} />
          <span style={{
            fontSize: 13, fontWeight: 700, color: '#e5e1e4',
            textTransform: 'uppercase', letterSpacing: '0.05em',
          }}>
            Daily Quests
          </span>
        </div>
        <span style={{ fontSize: 11, color: '#ec4899', fontWeight: 700 }}>
          {completed}/{total}
        </span>
      </div>

      <div style={{
        height: 4, borderRadius: 2,
        background: 'rgba(255,255,255,0.05)',
        marginBottom: 12,
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%', borderRadius: 2,
          width: `${(completed / total) * 100}%`,
          background: 'linear-gradient(90deg, #ec4899, #a855f7)',
          transition: 'width 0.5s ease',
        }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {quests.map((q, i) => (
          <div key={q.id || i} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '8px 12px', borderRadius: 8,
            background: q.completed ? 'rgba(34,197,94,0.05)' : 'rgba(255,255,255,0.01)',
            border: q.completed ? '1px solid rgba(34,197,94,0.1)' : '1px solid rgba(255,255,255,0.03)',
          }}>
            <i className={q.completed ? 'fa-solid fa-check' : 'fa-solid fa-circle-dot'} style={{
              fontSize: 12,
              color: q.completed ? '#22c55e' : '#555',
            }} />
            <span style={{
              flex: 1, fontSize: 11, fontWeight: 600,
              color: q.completed ? '#22c55e' : '#e5e1e4',
              textDecoration: q.completed ? 'line-through' : 'none',
            }}>
              {q.label}
            </span>
            <span style={{ fontSize: 10, color: '#a855f7', fontWeight: 700 }}>
              +{q.xpReward} XP
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
//  V6.0: REPUTATION CARD
// ═══════════════════════════════════════════════════════════════════════════════
function ReputationCard({ reputation, currentUser }) {
  const score = reputation?.score || currentUser.reputation?.score || 5.0
  const noShows = reputation?.noShows || currentUser.reputation?.noShows || 0
  const reviews = reputation?.reviews || currentUser.reputation?.reviews || 0
  const positive = reputation?.positive || currentUser.reputation?.positive || 0

  const stars = Math.round(score)
  const color = score >= 4.5 ? '#22c55e' : score >= 3.5 ? '#fbbf24' : score >= 2.5 ? '#f59e0b' : '#ef4444'

  return (
    <div style={{
      padding: '16px 20px',
      borderRadius: 14,
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255,255,255,0.05)',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <i className="fa-solid fa-star" style={{ color, fontSize: 16 }} />
          <span style={{
            fontSize: 13, fontWeight: 700, color: '#e5e1e4',
            textTransform: 'uppercase', letterSpacing: '0.05em',
          }}>
            Reputation
          </span>
        </div>
        <span style={{
          fontSize: 18, fontWeight: 800, color,
          fontFamily: 'var(--font-mono)',
        }}>
          {score.toFixed(1)}
        </span>
      </div>

      <div style={{ display: 'flex', gap: 4, marginBottom: 12 }}>
        {[1, 2, 3, 4, 5].map(i => (
          <i key={i} className={i <= stars ? 'fa-solid fa-star' : 'fa-regular fa-star'} style={{
            fontSize: 14,
            color: i <= stars ? color : 'rgba(255,255,255,0.1)',
          }} />
        ))}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 8,
      }}>
        <div style={{ textAlign: 'center', padding: '8px', borderRadius: 8, background: 'rgba(255,255,255,0.02)' }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: '#22c55e' }}>{positive}</div>
          <div style={{ fontSize: 9, color: '#555', textTransform: 'uppercase' }}>Positive</div>
        </div>
        <div style={{ textAlign: 'center', padding: '8px', borderRadius: 8, background: 'rgba(255,255,255,0.02)' }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: '#ef4444' }}>{noShows}</div>
          <div style={{ fontSize: 9, color: '#555', textTransform: 'uppercase' }}>No-Shows</div>
        </div>
        <div style={{ textAlign: 'center', padding: '8px', borderRadius: 8, background: 'rgba(255,255,255,0.02)' }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: '#e5e1e4' }}>{reviews}</div>
          <div style={{ fontSize: 9, color: '#555', textTransform: 'uppercase' }}>Reviews</div>
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
//  V6.0: CLAN CARD
// ═══════════════════════════════════════════════════════════════════════════════
function ClanCard({ clan, currentUser }) {
  const clanData = clan || currentUser.clan
  const hasClan = clanData?.id && clanData?.tag

  if (!hasClan) {
    return (
      <div style={{
        padding: '16px 20px',
        borderRadius: 14,
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.05)',
        textAlign: 'center',
      }}>
        <i className="fa-solid fa-shield-halved" style={{ fontSize: 24, color: '#555', marginBottom: 8, display: 'block' }} />
        <div style={{ fontSize: 13, fontWeight: 700, color: '#e5e1e4', marginBottom: 4 }}>
          No Clan Yet
        </div>
        <div style={{ fontSize: 11, color: '#555', marginBottom: 12 }}>
          Join or create a clan to compete together
        </div>
        <button style={{
          padding: '8px 16px', borderRadius: 8,
          background: 'rgba(168,85,247,0.1)',
          border: '1px solid rgba(168,85,247,0.2)',
          color: '#a855f7',
          fontSize: 12, fontWeight: 700,
          cursor: 'pointer',
          textTransform: 'uppercase',
        }}>
          Find Clan
        </button>
      </div>
    )
  }

  return (
    <div style={{
      padding: '16px 20px',
      borderRadius: 14,
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(168,85,247,0.1)',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 12,
            background: 'rgba(168,85,247,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <i className="fa-solid fa-shield-halved" style={{ color: '#a855f7', fontSize: 18 }} />
          </div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#e5e1e4' }}>
              [{clanData.tag}]
            </div>
            <div style={{ fontSize: 10, color: '#a855f7', textTransform: 'uppercase' }}>
              {clanData.role || 'Member'}
            </div>
          </div>
        </div>
        <span style={{
          padding: '4px 10px', borderRadius: 6,
          background: 'rgba(168,85,247,0.1)',
          color: '#a855f7',
          fontSize: 10, fontWeight: 700,
          textTransform: 'uppercase',
        }}>
          {clanData.role === 'leader' ? 'LEADER' : clanData.role === 'co-leader' ? 'CO-LEAD' : 'MEMBER'}
        </span>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
//  V6.0: SEASON CARD
// ═══════════════════════════════════════════════════════════════════════════════
function SeasonCard({ season, currentUser }) {
  const seasonData = season || currentUser.season
  const hasSeason = seasonData?.currentSeason

  if (!hasSeason) {
    return (
      <div style={{
        padding: '16px 20px',
        borderRadius: 14,
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.05)',
        textAlign: 'center',
      }}>
        <i className="fa-solid fa-calendar-star" style={{ fontSize: 24, color: '#555', marginBottom: 8, display: 'block' }} />
        <div style={{ fontSize: 13, fontWeight: 700, color: '#e5e1e4', marginBottom: 4 }}>
          No Active Season
        </div>
        <div style={{ fontSize: 11, color: '#555' }}>
          Seasons reset every 3 months with exclusive rewards
        </div>
      </div>
    )
  }

  return (
    <div style={{
      padding: '16px 20px',
      borderRadius: 14,
      background: 'rgba(0,212,255,0.05)',
      border: '1px solid rgba(0,212,255,0.1)',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <i className="fa-solid fa-calendar-star" style={{ color: '#00d4ff', fontSize: 16 }} />
          <span style={{
            fontSize: 13, fontWeight: 700, color: '#00d4ff',
            textTransform: 'uppercase', letterSpacing: '0.05em',
          }}>
            {seasonData.currentSeason}
          </span>
        </div>
        <span style={{
          padding: '4px 10px', borderRadius: 6,
          background: 'rgba(0,212,255,0.1)',
          color: '#00d4ff',
          fontSize: 10, fontWeight: 700,
        }}>
          {seasonData.seasonRank || 'Unranked'}
        </span>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 8,
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: '#00d4ff' }}>{seasonData.seasonXP || 0}</div>
          <div style={{ fontSize: 9, color: '#555', textTransform: 'uppercase' }}>Season XP</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: '#e5e1e4' }}>{seasonData.seasonWins || 0}</div>
          <div style={{ fontSize: 9, color: '#555', textTransform: 'uppercase' }}>Wins</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: '#e5e1e4' }}>{seasonData.seasonMatches || 0}</div>
          <div style={{ fontSize: 9, color: '#555', textTransform: 'uppercase' }}>Matches</div>
        </div>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
//  MAIN PROFILE COMPONENT — v6.0 Premium with FULL EDIT CAPABILITIES
// ═══════════════════════════════════════════════════════════════════════════════
export default function Profile() {
  const { state, dispatch, navigate, updateUser, tierInfo, streakData, dailyQuests, referralStats, clanData, seasonData, reputation } = useApp()
  const { currentUser, matches } = state

  const [editing, setEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [editError, setEditError] = useState('')
  
  // ★ FULL EDIT FIELDS — Same as registration
  const [editName, setEditName] = useState('')
  const [editIgn, setEditIgn] = useState('')
  const [editUid, setEditUid] = useState('')
  const [editPhone, setEditPhone] = useState('')
  const [editEmail, setEditEmail] = useState('')
  const [editTeamName, setEditTeamName] = useState('')
const [editUsername, setEditUsername] = useState('')
const [activeTab, setActiveTab] = useState('overview')

  if (!currentUser) return null

  // ═══ V6.0: TIER DATA (from database.js TIERS) ═══
  const userXP = currentUser.rank?.xp || currentUser.xp || 0
  const computedTier = tierInfo || getTierProgress(userXP)
  const tier = computedTier?.current || getTierFromXP(userXP)
  const nextTier = computedTier?.next

  // ═══ V6.0: STREAK ═══
  const streak = streakData?.current || currentUser.streakData?.current || currentUser.streak || 0
  const streakBest = streakData?.best || currentUser.streakData?.best || streak

  // ═══ V6.0: REFERRAL ═══
  const refCode = referralStats?.code || currentUser.referral?.code || currentUser.referralCode || 'N/A'
  const refCount = referralStats?.totalReferrals || currentUser.referral?.referrals?.length || currentUser.referralCount || 0
  const refEarnings = referralStats?.earnings || currentUser.referral?.totalUnlocked || currentUser.referralEarnings || 0

  // ═══ V6.0: REPUTATION ═══
  const repScore = reputation?.score || currentUser.reputation?.score || 5.0
  const repReviews = reputation?.reviews || currentUser.reputation?.reviews || 0

  // ═══ V6.0: CLAN ═══
  const clan = clanData || currentUser.clan
  const hasClan = clan?.id && clan?.tag

  // ═══ V6.0: SEASON ═══
  const season = seasonData || currentUser.season
  const hasSeason = season?.currentSeason

  // Legacy data
  const myMatches = matches.filter(m => m.participants?.includes(currentUser.id))
  const winRate = currentUser.rank?.winRate || (currentUser.matchesPlayed > 0
    ? Math.round((currentUser.wins / currentUser.matchesPlayed) * 100)
    : 0)
  const kd = currentUser.matchesPlayed > 0
    ? ((currentUser.totalKills || currentUser.kills || 0) / currentUser.matchesPlayed).toFixed(2)
    : '0.00'

  const roleLabel = currentUser.role === 'owner' ? 'OWNER' : currentUser.role === 'admin' ? 'ADMIN' : 'PLAYER'
  const roleColor = currentUser.role === 'owner' ? '#fbbf24' : currentUser.role === 'admin' ? '#ef4444' : '#00d4ff'

  // ═══ INPUT STYLE (Matching Login.jsx) ═══
  const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    borderRadius: 12,
    border: '1px solid rgba(255,255,255,0.08)',
    background: 'rgba(255,255,255,0.04)',
    color: '#fff',
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    outline: 'none',
    boxSizing: 'border-box',
  }

  // Handlers
   const startEdit = () => {
    setEditName(currentUser.displayName || currentUser.name || '')
    setEditUsername(currentUser.username || '')
    setEditIgn(currentUser.ign || '')
    setEditUid(currentUser.uid || '')
    setEditPhone(currentUser.phone || '')
    setEditEmail(currentUser.email || '')
    setEditTeamName(currentUser.teamName || '')
    setEditError('')
    setEditing(true)
  }

  const saveEdit = async () => {
    setEditError('')
    
    if (!editName.trim()) { setEditError('Display name is required'); return }
    if (editUsername.trim() && !/^[a-z0-9_]{3,20}$/.test(editUsername.trim().toLowerCase())) {
      setEditError('Username: 3-20 chars, lowercase, numbers, underscores only'); return
    }
    if (editPhone.trim() && !/^01\d{9}$/.test(editPhone.trim())) {
      setEditError('Enter valid BD number (01XXXXXXXXX)'); return
    }
    if (editEmail.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(editEmail.trim())) {
      setEditError('Enter valid email address'); return
    }
    if (editUid.trim() && !/^\d+$/.test(editUid.trim())) {
      setEditError('Free Fire UID must be numbers only'); return
    }

    setSaving(true)
    
    const updatePayload = {
      name: editName.trim(),
      displayName: editName.trim(),
      username: editUsername.trim().toLowerCase() || currentUser.username,
      ign: editIgn.trim(),
      uid: editUid.trim(),
      phone: editPhone.trim(),
      email: editEmail.trim(),
      teamName: editTeamName.trim(),
    }

    try {
      await updateUser(currentUser.id, updatePayload)
      dispatch({ type: 'UPDATE_PROFILE', payload: updatePayload })
      setEditing(false)
      dispatch({ type: 'SHOW_TOAST', payload: { id: 'ps_' + Date.now(), type: 'success', text: 'Profile saved!', removing: false } })
    } catch (err) {
      console.error('Profile save failed:', err)
      setEditError('Save failed. Check connection and try again.')
    } finally {
      setSaving(false)
    }
  }

  // ... (handleAvatarChange, handleLogout, copyReferralCode stay the same) ...
  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0]
    if (!file || file.size > 2 * 1024 * 1024) return
    const reader = new FileReader()
    reader.onload = (ev) => dispatch({ type: 'SET_AVATAR', payload: ev.target.result })
    reader.readAsDataURL(file)
  }

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
    window.location.hash = 'login'
  }

  const copyReferralCode = () => {
    navigator.clipboard.writeText(refCode)
    dispatch({ type: 'SHOW_TOAST', payload: { id: 'ref_copy_' + Date.now(), type: 'success', text: 'Referral code copied!', removing: false } })
  }

  // Tab content
  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'fa-solid fa-user' },
    { id: 'stats', label: 'Stats', icon: 'fa-solid fa-chart-simple' },
    { id: 'quests', label: 'Quests', icon: 'fa-solid fa-bullseye' },
    { id: 'network', label: 'Network', icon: 'fa-solid fa-share-nodes' },
  ]

  return (
    <div className="profile-page" style={{
      padding: '0 0 100px 0',
      position: 'relative',
      zIndex: 1,
    }}>

      {/* ═══ AMBIENT BACKGROUND GLOW ═══ */}
      <div style={{
        position: 'fixed',
        top: '10%',
        right: '-10%',
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${tier.color}08, transparent 70%)`,
        filter: 'blur(80px)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />
      <div style={{
        position: 'fixed',
        bottom: '-10%',
        left: '-5%',
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168,85,247,0.05), transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* ═══ PROFILE HEADER — Holographic Card ═══ */}
      <HolographicCard glowColor={`${tier.color}20`}>
        <div style={{ padding: '24px 16px 20px' }}>

          {/* Top accent line */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: `linear-gradient(90deg, transparent, ${tier.color}, transparent)`,
            backgroundSize: '200% 100%',
            animation: 'shimmer 3s linear infinite',
          }} />

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 20 }}>
            {/* Avatar with glow ring */}
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <div style={{
                width: 72,
                height: 72,
                borderRadius: 18,
                padding: 2,
                background: `linear-gradient(135deg, ${tier.color}, ${tier.color}60)`,
                boxShadow: `0 0 20px ${tier.color}30, 0 0 40px ${tier.color}15`,
              }}>
                {currentUser.avatar ? (
                  <img
                    src={currentUser.avatar}
                    alt="Avatar"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 21,
                      objectFit: 'cover',
                      border: '2px solid var(--bg-card)',
                    }}
                  />
                ) : (
                  <div style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 21,
                    background: `linear-gradient(135deg, ${tier.color}40, ${tier.color}15)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 28,
                    fontWeight: 800,
                    color: tier.color,
                    fontFamily: 'var(--font-heading)',
                  }}>
                    {(currentUser.displayName || currentUser.name || '?').charAt(0).toUpperCase()}
                  </div>
                )}
              </div>

              {/* Online indicator */}
              <div style={{
                position: 'absolute',
                bottom: 2,
                right: 2,
                width: 16,
                height: 16,
                borderRadius: '50%',
                background: '#22c55e',
                border: '2px solid var(--bg-card)',
                boxShadow: '0 0 8px rgba(34,197,94,0.5)',
              }} />

              {/* Camera button */}
              {!editing && (
                <label style={{
                  position: 'absolute',
                  bottom: -4,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 26,
                  height: 26,
                  borderRadius: 10,
                  background: `linear-gradient(135deg, ${tier.color}, ${tier.color}cc)`,
                  border: '2px solid var(--bg-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: `0 4px 16px ${tier.color}50`,
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateX(-50%) scale(1.1)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateX(-50%) scale(1)'}
                >
                  <i className="fa-solid fa-camera" style={{ fontSize: 12, color: '#fff' }} />
                  <input type="file" accept="image/*" onChange={handleAvatarChange} style={{ display: 'none' }} />
                </label>
              )}
            </div>

            {/* User Info */}
            <div style={{ flex: 1, minWidth: 0 }}>
                           {editing ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  
                  {editError && (
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 8,
                      padding: '10px 14px', marginBottom: 4,
                      background: 'rgba(239,68,68,0.08)',
                      border: '1px solid rgba(239,68,68,0.15)',
                      borderRadius: 10,
                    }}>
                      <i className="fa-solid fa-circle-exclamation" style={{ fontSize: 12, color: '#f87171', flexShrink: 0 }}></i>
                      <span style={{ fontSize: 12, color: '#f87171' }}>{editError}</span>
                    </div>
                  )}

                  {/* Display Name */}
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: 10, fontWeight: 700, color: 'var(--text-muted, #777)', letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 4 }}>Display Name *</label>
                    <input value={editName} onChange={e => { setEditName(e.target.value); setEditError('') }} placeholder="Your display name" style={{ ...inputStyle, maxWidth: 350, borderColor: editError ? 'rgba(239,68,68,0.4)' : undefined }} onFocus={e => e.target.style.borderColor = 'rgba(0,240,255,0.3)'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} />
                  </div>

                  {/* Username */}
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: 10, fontWeight: 700, color: 'var(--text-muted, #777)', letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 4 }}>Username</label>
                    <div style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', fontSize: 13, color: 'var(--text-muted, #555)', fontFamily: 'var(--font-mono)' }}>@</span>
                      <input value={editUsername} onChange={e => { setEditUsername(e.target.value); setEditError('') }} placeholder="your_username" style={{ ...inputStyle, maxWidth: 350, paddingLeft: 36, fontFamily: 'var(--font-mono)' }} onFocus={e => e.target.style.borderColor = 'rgba(0,240,255,0.3)'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} />
                    </div>
                  </div>

                  {/* In-Game Name (IGN) */}
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: 10, fontWeight: 700, color: 'var(--text-muted, #777)', letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 4 }}>In-Game Name (IGN)</label>
                    <input value={editIgn} onChange={e => { setEditIgn(e.target.value); setEditError('') }} placeholder="Your Free Fire IGN" style={{ ...inputStyle, maxWidth: 350 }} onFocus={e => e.target.style.borderColor = 'rgba(0,240,255,0.3)'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} />
                  </div>

                  {/* Free Fire UID */}
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: 10, fontWeight: 700, color: 'var(--text-muted, #777)', letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 4 }}>Free Fire UID</label>
                    <div style={{ position: 'relative' }}>
                      <i className="fa-solid fa-id-badge" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', fontSize: 13, color: 'var(--text-muted, #555)' }}></i>
                      <input value={editUid} onChange={e => { setEditUid(e.target.value); setEditError('') }} placeholder="e.g., 1234567890" style={{ ...inputStyle, maxWidth: 350, paddingLeft: 42, fontFamily: 'var(--font-display)', letterSpacing: 1 }} onFocus={e => e.target.style.borderColor = 'rgba(0,240,255,0.3)'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: 10, fontWeight: 700, color: 'var(--text-muted, #777)', letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 4 }}>Phone Number</label>
                    <div style={{ position: 'relative' }}>
                      <i className="fa-solid fa-phone" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', fontSize: 13, color: 'var(--text-muted, #555)' }}></i>
                      <input type="tel" value={editPhone} onChange={e => { setEditPhone(e.target.value); setEditError('') }} placeholder="01XXXXXXXXX" style={{ ...inputStyle, maxWidth: 350, paddingLeft: 42, fontFamily: 'var(--font-display)', letterSpacing: 2 }} onFocus={e => e.target.style.borderColor = 'rgba(0,240,255,0.3)'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: 10, fontWeight: 700, color: 'var(--text-muted, #777)', letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 4 }}>Email Address</label>
                    <div style={{ position: 'relative' }}>
                      <i className="fa-solid fa-envelope" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', fontSize: 13, color: 'var(--text-muted, #555)' }}></i>
                      <input type="email" value={editEmail} onChange={e => { setEditEmail(e.target.value); setEditError('') }} placeholder="your@email.com" style={{ ...inputStyle, maxWidth: 350, paddingLeft: 42 }} onFocus={e => e.target.style.borderColor = 'rgba(0,240,255,0.3)'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} />
                    </div>
                  </div>

                  {/* Team Name */}
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: 10, fontWeight: 700, color: 'var(--text-muted, #777)', letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 4 }}>Team Name</label>
                    <div style={{ position: 'relative' }}>
                      <i className="fa-solid fa-users" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', fontSize: 13, color: 'var(--text-muted, #555)' }}></i>
                      <input value={editTeamName} onChange={e => { setEditTeamName(e.target.value); setEditError('') }} placeholder="Your team name" style={{ ...inputStyle, maxWidth: 350, paddingLeft: 42 }} onFocus={e => e.target.style.borderColor = 'rgba(0,240,255,0.3)'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
                    <ParticleButton onClick={saveEdit} variant="primary">
                      {saving ? (
                        <><i className="fa-solid fa-spinner fa-spin" style={{ marginRight: 6 }} /> Saving...</>
                      ) : (
                        <><i className="fa-solid fa-check" style={{ marginRight: 6 }} /> Save Profile</>
                      )}
                    </ParticleButton>
                    <ParticleButton onClick={() => setEditing(false)} variant="secondary">
                      Cancel
                    </ParticleButton>
                  </div>
                </div>
              ) : (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6, flexWrap: 'wrap' }}>
                    <h1 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 28,
                      fontWeight: 800,
                      color: '#fff',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.2,
                    }}>
                      {currentUser.displayName || currentUser.name || 'Player'}
                    </h1>
                    <span className="badge" style={{
                      background: `${roleColor}15`,
                      color: roleColor,
                      border: `1px solid ${roleColor}30`,
                    }}>
                      {currentUser.role === 'owner' && <i className="fa-solid fa-crown" style={{ fontSize: 10 }} />}
                      {roleLabel}
                    </span>
                    {hasClan && (
                      <span className="badge" style={{
                        background: 'rgba(168,85,247,0.15)',
                        color: '#a855f7',
                        border: '1px solid rgba(168,85,247,0.3)',
                        fontSize: 10,
                      }}>
                        <i className="fa-solid fa-shield-halved" style={{ fontSize: 9, marginRight: 4 }} />
                        [{clan.tag}]
                      </span>
                    )}
                    {hasSeason && (
                      <span className="badge" style={{
                        background: 'rgba(0,212,255,0.15)',
                        color: '#00d4ff',
                        border: '1px solid rgba(0,212,255,0.3)',
                        fontSize: 10,
                      }}>
                        <i className="fa-solid fa-calendar-star" style={{ fontSize: 9, marginRight: 4 }} />
                        {season.seasonRank || 'Active'}
                      </span>
                    )}
                  </div>

                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 15,
                    fontWeight: 600,
                    color: tier.color,
                    marginBottom: 8,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}>
                    <i className="fa-solid fa-gamepad" style={{ fontSize: 12, opacity: 0.7 }} />
                    {currentUser.ign || 'Set your IGN'}
                    {currentUser.uid && (
                      <span style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 500 }}>
                        • UID: {currentUser.uid}
                      </span>
                    )}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                    <span style={{
                      fontSize: 12,
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-mono)',
                    }}>@{currentUser.username}</span>
                    <span style={{ color: 'var(--border-medium)' }}>•</span>
                    {currentUser.phone && (
                      <>
                        <span style={{ fontSize: 12, color: 'var(--text-dim)' }}>
                          <i className="fa-solid fa-phone" style={{ fontSize: 10, marginRight: 4 }} />
                          {currentUser.phone}
                        </span>
                        <span style={{ color: 'var(--border-medium)' }}>•</span>
                      </>
                    )}
                    {currentUser.email && (
                      <>
                        <span style={{ fontSize: 12, color: 'var(--text-dim)' }}>
                          <i className="fa-solid fa-envelope" style={{ fontSize: 10, marginRight: 4 }} />
                          {currentUser.email}
                        </span>
                        <span style={{ color: 'var(--border-medium)' }}>•</span>
                      </>
                    )}
                    <span style={{
                      fontSize: 12,
                      color: 'var(--text-dim)',
                    }}>
                      Joined {currentUser.createdAt ? new Date(currentUser.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'N/A'}
                    </span>
                    <span style={{ color: 'var(--border-medium)' }}>•</span>
                    <span style={{
                      fontSize: 12,
                      color: repScore >= 4.5 ? '#22c55e' : repScore >= 3 ? '#fbbf24' : '#ef4444',
                      display: 'flex', alignItems: 'center', gap: 4,
                    }}>
                      <i className="fa-solid fa-star" style={{ fontSize: 10 }} />
                      {repScore.toFixed(1)} ({repReviews} reviews)
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* ═══ V6.0: TIER BADGE + XP PROGRESS (Large) ═══ */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            padding: '20px 24px',
            borderRadius: 16,
            background: `linear-gradient(135deg, ${tier.color}08, transparent)`,
            border: `1px solid ${tier.color}15`,
            marginBottom: 24,
          }}>
            <TierBadgeSVG tier={tier} size={72} />

            <div style={{ flex: 1 }}>
              <div style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: `${tier.color}aa`,
                marginBottom: 4,
              }}>
                {tier.name} Tier • {userXP.toLocaleString()} XP
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span style={{
                  fontSize: 32,
                  fontWeight: 900,
                  color: tier.color,
                  fontFamily: 'var(--font-mono)',
                  lineHeight: 1,
                  textShadow: `0 0 30px ${tier.color}40`,
                }}>
                  <AnimatedNumber value={userXP} />
                </span>
                <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600 }}>XP</span>
              </div>
            </div>

            <div style={{ textAlign: 'right', minWidth: 140 }}>
              <div style={{
                fontSize: 11,
                color: 'var(--text-muted)',
                marginBottom: 8,
                fontWeight: 600,
              }}>
                {computedTier?.remaining > 0 ? `${computedTier.remaining.toLocaleString()} XP to ${nextTier?.name || 'Next'}` : 'MAX TIER'}
              </div>
              <div style={{
                width: '100%',
                height: 6,
                borderRadius: 99,
                background: 'rgba(255,255,255,0.05)',
                overflow: 'hidden',
                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.5)',
              }}>
                <div style={{
                  width: `${computedTier?.percent || 0}%`,
                  height: '100%',
                  background: `linear-gradient(90deg, ${tier.color}, ${nextTier?.color || tier.color}dd)`,
                  borderRadius: 99,
                  boxShadow: `0 0 12px ${tier.color}60`,
                  transition: 'width 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }} />
              </div>
            </div>
          </div>

          {/* ═══ TAB NAVIGATION ═══ */}
          {!editing && (
            <div style={{
              display: 'flex',
              gap: 8,
              marginBottom: 24,
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              paddingBottom: 12,
            }}>
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '10px 18px',
                    borderRadius: 10,
                    background: activeTab === tab.id ? `${tier.color}15` : 'transparent',
                    color: activeTab === tab.id ? tier.color : 'var(--text-muted)',
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    transition: 'all 0.3s ease',
                    borderBottom: activeTab === tab.id ? `2px solid ${tier.color}` : '2px solid transparent',
                    marginBottom: -12,
                  }}
                >
                  <i className={tab.icon} style={{ fontSize: 12 }} />
                  {tab.label}
                </button>
              ))}
            </div>
          )}

          {/* ═══ TAB CONTENT ═══ */}
          {!editing && activeTab === 'overview' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Quick Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: 12,
              }}>
                {[
                  { label: 'Real Balance', value: currentUser.balance || 0, color: '#4ade80', icon: 'fa-solid fa-wallet', format: true, sub: 'Withdrawable' },
                  { label: 'Arena Credit', value: currentUser.lockedBalance || 0, color: '#fbbf24', icon: 'fa-solid fa-lock', format: true, sub: 'Match entry only' },
                  { label: 'Matches', value: currentUser.rank?.totalMatches || currentUser.matchesPlayed || 0, color: '#6c8cff', icon: 'fa-solid fa-gamepad' },
                  { label: 'Wins', value: currentUser.rank?.wins || currentUser.wins || 0, color: '#22c55e', icon: 'fa-solid fa-trophy' },
                  { label: 'Earnings', value: currentUser.totalEarnings || currentUser.earnings || 0, color: '#fbbf24', icon: 'fa-solid fa-coins', format: true },
                  { label: 'Streak', value: streak, color: '#f59e0b', icon: 'fa-solid fa-fire', sub: streak >= 3 ? `${streakBest} best` : undefined },
                ].map(item => {
                  const displayValue = item.format ? formatTKShort(item.value || 0) : item.value
                  return (
                    <div
                      key={item.label}
                      style={{
                        padding: '14px 16px',
                        borderRadius: 12,
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                        e.currentTarget.style.borderColor = `${item.color}20`
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                      }}
                    >
                      <div style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: `${item.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        <i className={item.icon} style={{ fontSize: 14, color: item.color }} />
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{
                          fontSize: 10,
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          color: 'var(--text-muted)',
                        }}>
                          {item.label}
                        </div>
                        <div style={{
                          fontSize: 14,
                          fontWeight: 800,
                          color: item.color,
                          lineHeight: 1.2,
                          fontFamily: 'var(--font-mono)',
                        }}>
                          {displayValue}
                        </div>
                        {item.sub && (
                          <div style={{
                            marginTop: 2,
                            fontSize: 10,
                            color: 'var(--text-dim)',
                            fontWeight: 600,
                          }}>
                            {item.sub}
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 16,
              }}>
                <StreakVisualizer streak={streak} best={streakBest} />
                <ReputationCard reputation={reputation} currentUser={currentUser} />
                <ClanCard clan={clan} currentUser={currentUser} />
                <SeasonCard season={season} currentUser={currentUser} />
              </div>
            </div>
          )}

          {!editing && activeTab === 'stats' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                padding: '24px',
                borderRadius: 16,
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
              }}>
                <CircularProgress
                  value={winRate}
                  max={100}
                  color={winRate >= 60 ? '#22c55e' : winRate >= 40 ? '#fbbf24' : '#ef4444'}
                  icon="fa-solid fa-percent"
                  label="Win Rate"
                />
                <CircularProgress
                  value={currentUser.rank?.totalMatches || currentUser.matchesPlayed || 0}
                  max={100}
                  color="#6c8cff"
                  icon="fa-solid fa-gamepad"
                  label="Matches"
                />
                <CircularProgress
                  value={kd}
                  max={5}
                  color="#f59e0b"
                  icon="fa-solid fa-crosshairs"
                  label="K/D"
                />
              </div>

              <div style={{
                borderRadius: 18,
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '16px 20px',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <div style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: `${tier.color}18`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <i className="fa-solid fa-clock-rotate-left" style={{ fontSize: 14, color: tier.color }} />
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 15,
                    fontWeight: 700,
                    color: '#fff',
                    margin: 0,
                  }}>
                    Match History
                    <span style={{
                      marginLeft: 8,
                      fontSize: 11,
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                    }}>
                      ({myMatches.length})
                    </span>
                  </h3>
                </div>

                {myMatches.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                    <i className="fa-solid fa-ghost" style={{
                      fontSize: 32,
                      color: 'rgba(255,255,255,0.1)',
                      marginBottom: 12,
                      display: 'block',
                    }} />
                    <p style={{
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-body)',
                      fontSize: 13,
                      margin: 0,
                    }}>
                      No matches joined yet
                    </p>
                  </div>
                ) : (
                  <div style={{ padding: '8px 12px' }}>
                    {myMatches.map(m => {
                      const phaseColors = { live: '#22c55e', upcoming: '#6c8cff', completed: '#64748b' }
                      const phaseLabels = { live: 'LIVE', upcoming: 'UPCOMING', completed: 'DONE' }
                      return (
                        <div
                          key={m.id}
                          onClick={() => navigate(`match-detail/${m.id}`)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 14,
                            padding: '12px 14px',
                            borderRadius: 12,
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            borderBottom: '1px solid rgba(255,255,255,0.04)',
                          }}
                          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
                          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                        >
                          <div style={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            flexShrink: 0,
                            background: phaseColors[m.status] || '#64748b',
                            boxShadow: m.status === 'live' ? `0 0 8px ${phaseColors[m.status]}80` : 'none',
                            animation: m.status === 'live' ? 'pulse 1.5s infinite' : 'none',
                          }} />

                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{
                              fontFamily: 'var(--font-heading)',
                              fontSize: 13,
                              fontWeight: 600,
                              color: '#fff',
                              marginBottom: 2,
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}>
                              {m.title}
                            </div>
                            <div style={{
                              fontSize: 10,
                              color: 'var(--text-muted)',
                              fontFamily: 'var(--font-body)',
                            }}>
                              {m.mode} • {m.map} • {formatTK(m.entryFee)}
                            </div>
                          </div>

                          <span style={{
                            padding: '3px 10px',
                            borderRadius: 6,
                            fontSize: 9,
                            fontFamily: 'var(--font-display)',
                            fontWeight: 700,
                            letterSpacing: 0.5,
                            textTransform: 'uppercase',
                            background: (phaseColors[m.status] || '#64748b') + '18',
                            color: phaseColors[m.status] || '#64748b',
                            flexShrink: 0,
                          }}>
                            {m.status === 'live' && (
                              <span style={{
                                display: 'inline-block',
                                width: 4,
                                height: 4,
                                borderRadius: '50%',
                                background: '#22c55e',
                                marginRight: 4,
                                animation: 'pulse 1s infinite',
                                verticalAlign: 'middle',
                              }} />
                            )}
                            {phaseLabels[m.status] || m.status}
                          </span>

                          <i className="fa-solid fa-chevron-right" style={{
                            fontSize: 10,
                            color: 'var(--text-muted)',
                            flexShrink: 0,
                          }} />
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>
          )}

          {!editing && activeTab === 'quests' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <DailyQuestsPanel quests={dailyQuests || currentUser.dailyQuests} />
            </div>
          )}

          {!editing && activeTab === 'network' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <ReferralTreeMini referralStats={referralStats} currentUser={currentUser} />
            </div>
          )}

          {!editing && (
            <div style={{ marginTop: 24, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <ParticleButton onClick={startEdit} variant="primary">
                <i className="fa-solid fa-pen" style={{ marginRight: 6 }} /> Edit Profile
              </ParticleButton>
              <ParticleButton onClick={() => navigate('settings')} variant="secondary">
                <i className="fa-solid fa-gear" style={{ marginRight: 6 }} /> Settings
              </ParticleButton>
              <ParticleButton onClick={handleLogout} variant="danger">
                <i className="fa-solid fa-right-from-bracket" style={{ marginRight: 6 }} /> Logout
              </ParticleButton>
            </div>
          )}
        </div>
      </HolographicCard>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes particleBurst {
          0% { transform: translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(calc(cos(var(--angle)) * 40px), calc(sin(var(--angle)) * 40px)) scale(0); opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  )
}