import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useApp } from '../context'
import { formatTK, slotPercent, getMatchPhase, getMatchCountdown } from '../utils'
import './MatchCard.css'

// ═══════════════════════════════════════════════════════════════════════
//  ★ ZENO LEAGUE — CUSTOM FREE FIRE MAP BACKGROUNDS
//  Priority: Admin Upload → These Default FF Map Images → Gradient Fallback
// ═══════════════════════════════════════════════════════════════════════
const MAP_BACKGROUNDS = {
  Bermuda: {
    primary: 'https://z-cdn-media.chatglm.cn/files/7dd05de5-886f-49ce-b030-ad7effd217d7.jpg?auth_key=1879443065-4d0113aafd9a43c1b17e880d1556554a-0-343c3dc45b02f0da39231ec282a5059e',
    gradient: 'linear-gradient(135deg, rgba(6,182,212,0.35) 0%, rgba(8,145,178,0.55) 100%)',
    accentColor: '#06b6d4',
    name: 'Bermuda',
    description: 'Classic tropical island - swimming to victory',
  },
  Kalahari: {
    primary: 'https://z-cdn-media.chatglm.cn/files/739b993f-a154-4be2-81e1-980c1264439f.jpg?auth_key=1879443065-89b8f8483ffd414397e740e74e900b0f-0-566cf06aa9daabe9a8be9c588a9f9aa0',
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.35) 0%, rgba(217,119,6,0.55) 100%)',
    accentColor: '#f59e0b',
    name: 'Kalahari',
    description: 'Desert industrial zone - dominate the battlefield',
  },
  Alpine: {
    primary: 'https://z-cdn-media.chatglm.cn/files/d09f242d-0ab7-43a5-8c1a-467f74694c42.jpg?auth_key=1879443065-08fbd830d6e2428d9681dde2e6e236fc-0-b35c5d9845530606927d3b376404818d',
    gradient: 'linear-gradient(135deg, rgba(34,197,94,0.35) 0%, rgba(22,163,74,0.55) 100%)',
    accentColor: '#22c55e',
    name: 'Alpine',
    description: 'Modern zone - burger bus & facilities',
  },
  Purgatory: {
    primary: 'https://z-cdn-media.chatglm.cn/files/23f1a948-f661-415d-94be-bcfa3107acd6.jpg?auth_key=1879443065-ecec5cf2c7be4f3cb223a929046ad603-0-17dd00712517b1717e171da8cf5c069f',
    gradient: 'linear-gradient(135deg, rgba(239,68,68,0.35) 0%, rgba(220,38,38,0.55) 100%)',
    accentColor: '#ef4444',
    name: 'Purgatory',
    description: 'Volcanic battlefield - zipline to glory',
  },
};

const DEFAULT_MAP_BG = MAP_BACKGROUNDS.Bermuda;

// ═══════════════════════════════════════════════════════════════════════
//  TIME PARSER
// ═══════════════════════════════════════════════════════════════════════
function parseMatchTime(startTime) {
  if (!startTime) return null
  if (startTime && typeof startTime.toDate === 'function') return startTime.toDate().getTime()
  if (typeof startTime === 'number') return startTime
  if (typeof startTime === 'string') {
    const ts = new Date(startTime.replace(' ', 'T')).getTime()
    if (!isNaN(ts)) return ts
    const ts2 = new Date(startTime).getTime()
    if (!isNaN(ts2)) return ts2
  }
  return null
}

// ═══════════════════════════════════════════════════════════════════════
//  DIGITAL COUNTDOWN DISPLAY
// ═══════════════════════════════════════════════════════════════════════
function DigitalCountdown({ ms }) {
  if (ms <= 0) return null
  const h = Math.floor(ms / 3600000)
  const m = Math.floor((ms % 3600000) / 60000)
  const s = Math.floor((ms % 60000) / 1000)

  const Digit = ({ value, label }) => (
    <div className="countdown-digit-box">
      <div className="countdown-digit-value">{String(value).padStart(2, '0')}</div>
      <div className="countdown-digit-label">{label}</div>
    </div>
  )

  return (
    <div className="digital-countdown">
      {h > 0 && <><Digit value={h} label="HR" /><span className="countdown-separator">:</span></>}
      <Digit value={m} label="MIN" />
      <span className="countdown-separator">:</span>
      <Digit value={s} label="SEC" />
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════
//  PROGRESS RING (Slots)
// ═══════════════════════════════════════════════════════════════════════
function SlotRing({ current, max, phase }) {
  const pct = Math.min((current / max) * 100, 100)
  const circumference = 2 * Math.PI * 18
  const offset = circumference - (pct / 100) * circumference
  const color = phase === 'live' ? '#ef4444' : phase === 'completed' ? '#6b7280' : '#06b6d4'

  return (
    <div className="slot-ring">
      <svg width="40" height="40" viewBox="0 0 40 40" style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="20" cy="20" r="18" fill="none" stroke="#1a1a2e" strokeWidth="3" />
        <circle cx="20" cy="20" r="18" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round"
          strokeDasharray={circumference} strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' }} />
      </svg>
      <div className="slot-ring-text">{current}</div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════
//  AVATAR STACK
// ═══════════════════════════════════════════════════════════════════════
function AvatarStack({ participants = [], maxShow = 4 }) {
  const displayCount = Math.min(participants.length, maxShow)
  const remaining = Math.max(participants.length - maxShow, 0)

  return (
    <div className="avatar-stack">
      {participants.slice(0, maxShow).map((p, i) => (
        <div key={p.userId || i} className="avatar-item" style={{ zIndex: maxShow - i }} title={p.name || p.username || 'Player'}>
          {p.avatar ? (
            <img src={p.avatar} alt="" />
          ) : (
            <div className="avatar-placeholder">{(p.name || p.username || '?')[0].toUpperCase()}</div>
          )}
        </div>
      ))}
      {remaining > 0 && <div className="avatar-more">+{remaining}</div>}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════
//  MOBILE DETECTION HOOK
// ═══════════════════════════════════════════════════════════════════════
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window
      const isSmallScreen = window.innerWidth < 768
      const isLowCoherence = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      setIsMobile(isSmallScreen || isTouchDevice || isLowCoherence)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    motionQuery.addEventListener('change', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
      motionQuery.removeEventListener('change', checkMobile)
    }
  }, [])

  return isMobile
}

// ═══════════════════════════════════════════════════════════════════════
//  3D TILT HOOK (Desktop only)
// ═══════════════════════════════════════════════════════════════════════
function useTilt(disabled = false) {
  const ref = useRef(null)
  const [style, setStyle] = useState({})
  const lastUpdateRef = useRef(0)

  const onMouseMove = useCallback((e) => {
    if (!ref.current || disabled) return
    const now = performance.now()
    if (now - lastUpdateRef.current < 33) return
    lastUpdateRef.current = now

    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rotateX = (y - 0.5) * -10
    const rotateY = (x - 0.5) * 10
    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s ease-out',
    })
  }, [disabled])

  const onMouseLeave = useCallback(() => {
    if (disabled) return
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
    })
  }, [disabled])

  return { ref, style, onMouseMove, onMouseLeave }
}

// ═══════════════════════════════════════════════════════════════════════
//  PARTICLE BURST ON JOIN
// ═══════════════════════════════════════════════════════════════════════
function ParticleBurst({ trigger, isMobile }) {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    if (!trigger) return
    const particleCount = isMobile ? 6 : 12
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: Date.now() + i,
      angle: (i / particleCount) * 360,
      color: ['#7C3AED', '#8B5CF6', '#F59E0B', '#ffffff'][i % 4],
      delay: i * 30,
    }))
    setParticles(newParticles)
    const timer = setTimeout(() => setParticles([]), 1000)
    return () => clearTimeout(timer)
  }, [trigger, isMobile])

  if (particles.length === 0) return null

  return (
    <div className="particle-burst">
      {particles.map(p => (
        <div key={p.id} className="particle" style={{
          background: p.color,
          boxShadow: `0 0 6px ${p.color}`,
          animationDelay: `${p.delay}ms`,
          transform: `rotate(${p.angle}deg)`,
        }} />
      ))}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════
//  WHATSAPP SHARE BUTTON
// ═══════════════════════════════════════════════════════════════════════
function WhatsAppShare({ match, onShare }) {
  const handleShare = (e) => {
    e.stopPropagation()
    const text = `🔥 *${match.title}* on ZENO LEAGUE!\n\n` +
      `🎮 Mode: ${match.mode}\n` +
      `🗺️ Map: ${match.map}\n` +
      `💰 Prize Pool: ${formatTK(match.prizePool || match.entryFee * match.maxSlots * 0.8)}\n` +
      `🎫 Entry: ${formatTK(match.entryFee)}\n` +
      `👥 ${match.joinedCount || 0}/${match.maxSlots} Joined\n\n` +
      `Join now: https://zeno-league.vercel.app/match/${match.id}`
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank')
    onShare?.()
  }

  return (
    <button className="whatsapp-share-btn" onClick={handleShare} title="Share on WhatsApp">
      <i className="fa-brands fa-whatsapp" />
    </button>
  )
}

// ═══════════════════════════════════════════════════════════════════════
//  PRIZE BADGE
// ═══════════════════════════════════════════════════════════════════════
function PrizeBadge({ amount }) {
  return (
    <div className="prize-badge">
      <i className="fa-solid fa-trophy" />
      <span>{formatTK(amount)}</span>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════
//  MAIN MATCH CARD V3 — PREMIUM ULTRA-DARK
// ═══════════════════════════════════════════════════════════════════════
export default function MatchCard({ match, variant = 'default', index = 0 }) {
  const { dispatch, navigate } = useApp()
  const [countdown, setCountdown] = useState(getMatchCountdown(match))
  const [burstTrigger, setBurstTrigger] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const isMobile = useIsMobile()
  const { ref, style, onMouseMove, onMouseLeave } = useTilt(isMobile)

  const phase = getMatchPhase(match)
  const isLive = phase === 'live'
  const isUpcoming = phase === 'upcoming'
  const isCompleted = phase === 'completed'
  const pct = slotPercent(match)

  const prizePoolValue = match.prizePool || Math.round(match.entryFee * match.maxSlots * 0.8)

  useEffect(() => {
    if (!isUpcoming) return
    const interval = setInterval(() => setCountdown(getMatchCountdown(match)), 1000)
    return () => clearInterval(interval)
  }, [isUpcoming, match])

  const matchTimeStr = (() => {
    const ts = parseMatchTime(match.startTime)
    if (!ts) return ''
    const d = new Date(ts)
    let h = d.getHours()
    const m = String(d.getMinutes()).padStart(2, '0')
    const ap = h >= 12 ? 'PM' : 'AM'
    h = h % 12 || 12
    const day = d.getDate()
    const mons = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    return `${h}:${m} ${ap} · ${day} ${mons[d.getMonth()]}`
  })()

  const handleJoin = (e) => {
    e.stopPropagation()
    if (isCompleted) return
    setBurstTrigger(prev => prev + 1)
    dispatch({ type: 'SHOW_MODAL', payload: { type: 'join-match', matchId: match.id } })
  }

  const handleViewDetail = () => navigate(`match-detail/${match.id}`)
  const handleShareMatch = () => dispatch({ type: 'SHARE_MATCH', payload: match.id })

  const modeIcon = match.mode === 'Solo' ? 'fa-user'
    : match.mode === 'Duo' ? 'fa-user-group'
    : match.mode === 'Clash Squad' ? 'fa-crosshairs'
    : 'fa-shield-halved'

  const isGlow = variant === 'glow'
  const isDim = variant === 'dim'

  const phaseColors = {
    live: { accent: '#EF4444', gradient: 'linear-gradient(135deg, #EF4444, #F97316)', glow: 'rgba(239, 68, 68, 0.3)' },
    upcoming: { accent: '#7C3AED', gradient: 'linear-gradient(135deg, #7C3AED, #06B6D4)', glow: 'rgba(124, 58, 237, 0.3)' },
    completed: { accent: '#71717A', gradient: 'linear-gradient(135deg, #3f3f46, #52525b)', glow: 'transparent' },
  }
  const pc = phaseColors[phase] || phaseColors.upcoming

  return (
    <div
      ref={ref}
      onClick={handleViewDetail}
      onMouseMove={onMouseMove}
      onMouseLeave={(e) => { onMouseLeave(e); setIsHovered(false) }}
      onMouseEnter={() => setIsHovered(true)}
      className={`match-card-v3 ${isGlow ? 'match-card-glow' : ''} ${isDim ? 'match-card-dim' : ''}`}
      style={{
        ...style,
        animationDelay: `${index * 80}ms`,
        '--card-accent': pc.accent,
        '--card-glow': pc.glow,
      }}
    >
      {/* Holographic shine — desktop only */}
      {!isMobile && <div className="holographic-shine" />}

      {/* Live pulse ring */}
      {isLive && <div className="live-pulse-ring" />}

      {/* Card Header */}
      <div className="match-card-header">
        {(() => {
          if (match.image) {
            return <img src={match.image} alt="" className="match-card-bg" />
          }
          if (match.map && MAP_BACKGROUNDS[match.map]) {
            return (
              <>
                <img
                  src={MAP_BACKGROUNDS[match.map].primary}
                  alt={`${match.map} map`}
                  className="match-card-bg"
                />
                <div className={`mode-overlay mode-${match.mode?.toLowerCase()?.replace(' ', '-')}`} />
              </>
            )
          }
          return (
            <div
              className="match-card-bg-fallback"
              style={{ background: pc.gradient }}
            />
          )
        })()}
        <div className="match-card-overlay" />

        {/* Status Badge */}
        <div className="status-badge" style={{ background: pc.gradient, boxShadow: `0 0 20px ${pc.glow}` }}>
          {isLive && <span className="live-dot" />}
          <i className={isLive ? 'fa-solid fa-tower-broadcast' : isUpcoming ? 'fa-regular fa-clock' : 'fa-solid fa-check-circle'} />
          {isLive ? 'LIVE NOW' : isUpcoming ? matchTimeStr || 'UPCOMING' : 'COMPLETED'}
        </div>

        {/* Prize Badge */}
        <div className="prize-badge-wrapper">
          <PrizeBadge amount={prizePoolValue} />
        </div>

        {/* No Refund Badge */}
        {!isCompleted && (
          <div className="no-refund-badge">
            <i className="fa-solid fa-shield-halved" /> <span>No Refund</span>
          </div>
        )}

        {/* Mode Badge */}
        <div className="mode-badge">
          <i className={`fa-solid ${modeIcon}`} style={{ color: pc.accent }} />
          {match.mode}
        </div>

        {/* Slot Ring */}
        <div className="slot-ring-wrapper">
          <SlotRing current={match.joinedCount || 0} max={match.maxSlots} phase={phase} />
        </div>

        {/* Share Button */}
        {!isCompleted && (
          <div className="share-wrapper">
            <WhatsAppShare match={match} onShare={handleShareMatch} />
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="match-card-content">
        <h3 className="match-title" style={{ textShadow: isLive ? `0 0 20px ${pc.glow}` : 'none' }}>
          {match.title}
        </h3>

        {isUpcoming && countdown > 0 && countdown < 3600000 && (
          <div className="countdown-wrapper"><DigitalCountdown ms={countdown} /></div>
        )}

        <div className="match-meta-row">
          <span className="meta-item"><i className="fa-solid fa-location-dot" style={{ color: pc.accent }} />{match.map}</span>
          <span className="meta-dot" />
          <span className="meta-item">{match.gameType === 'BR' ? 'TPP' : 'FPP'}</span>
          <span className="meta-dot" />
          <span className="meta-item"><i className="fa-solid fa-users" style={{ color: pc.accent }} />{match.joinedCount || 0}/{match.maxSlots}</span>
        </div>

        {match.joined && match.joined.length > 0 && (
          <div className="match-avatars-row">
            <AvatarStack participants={match.joined} maxShow={4} />
            <span className="players-text">{match.joinedCount || 0} warriors joined</span>
          </div>
        )}

        <div className="slot-progress">
          <div className="slot-track">
            <div className="slot-fill" style={{ width: `${pct}%`, background: pc.gradient, boxShadow: `0 0 10px ${pc.glow}` }} />
          </div>
          <div className="slot-labels">
            <span>Slots Filled</span>
            <span style={{ color: pc.accent }}>{Math.round(pct)}%</span>
          </div>
        </div>

        {match.perKill > 0 && !isCompleted && (
          <div className="per-kill-badge">
            <i className="fa-solid fa-crosshairs" />+{match.perKill} TK per Kill
          </div>
        )}

        <div className="prize-row">
          <div className="prize-item">
            <div className="prize-label">Entry Fee</div>
            <div className="prize-value">
              <i className="fa-solid fa-ticket" style={{ color: '#8B5CF6' }} />
              {formatTK(match.entryFee)}
            </div>
          </div>
          <div className="prize-item right">
            <div className="prize-label">Prize Pool</div>
            <div className="prize-value gold">
              <i className="fa-solid fa-trophy" />
              {formatTK(prizePoolValue)}
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      {!isCompleted && (
        <div className="match-card-actions">
          <ParticleBurst trigger={burstTrigger} isMobile={isMobile} />
          <button
            className="join-btn-v3"
            style={{ background: pc.gradient, boxShadow: `0 4px 20px ${pc.glow}` }}
            onClick={handleJoin}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)'
              e.currentTarget.style.boxShadow = `0 8px 30px ${pc.glow}`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)'
              e.currentTarget.style.boxShadow = `0 4px 20px ${pc.glow}`
            }}
          >
            <span className="btn-shine" />
            <i className={isLive ? 'fa-solid fa-play' : 'fa-solid fa-bolt'} />
            {isLive ? 'Watch Live' : 'Join Match'}
            <span className="join-fee">{formatTK(match.entryFee)}</span>
            <i className="fa-solid fa-arrow-right" />
          </button>
        </div>
      )}

      {/* Completed Overlay */}
      {isCompleted && (
        <div className="completed-overlay">
          <div className="completed-badge">
            <i className="fa-solid fa-flag-checkered" />Match Ended
          </div>
        </div>
      )}
    </div>
  )
}