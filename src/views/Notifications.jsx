import { useEffect } from 'react'
import { useApp } from '../context'
import { timeAgo } from '../utils'
import '../styles/notifications-premium.css'

export default function Notifications() {
  const { state, dispatch } = useApp()
  const { notifications } = state

  useEffect(() => {
    dispatch({ type: 'MARK_NOTIFICATIONS_READ' })
  }, [dispatch])

  const config = {
    room:   { icon: 'fa-solid fa-key',       color: '#06B6D4', bg: 'rgba(6,182,212,0.08)',    border: 'rgba(6,182,212,0.20)',    label: 'Room' },
    result: { icon: 'fa-solid fa-trophy',     color: '#10B981', bg: 'rgba(16,185,129,0.08)',   border: 'rgba(16,185,129,0.20)',    label: 'Result' },
    match:  { icon: 'fa-solid fa-gamepad',    color: '#F59E0B', bg: 'rgba(245,158,11,0.08)',   border: 'rgba(245,158,11,0.20)',   label: 'Match' },
    wallet: { icon: 'fa-solid fa-wallet',     color: '#8B5CF6', bg: 'rgba(139,92,246,0.08)',   border: 'rgba(139,92,246,0.20)',   label: 'Wallet' },
    system: { icon: 'fa-solid fa-circle-info', color: '#71717A', bg: 'rgba(113,113,122,0.06)',  border: 'rgba(113,113,122,0.12)',   label: 'System' },
  }

  const unread = notifications.filter(n => !n.read).length

  // Group by type
  const grouped = notifications.reduce((acc, n) => {
    const type = n.type || 'system'
    if (!acc[type]) acc[type] = []
    acc[type].push(n)
    return acc
  }, {})

  return (
    <div className="notifications-premium">

      {/* ═══ PAGE HEADER ═══ */}
      <header className="n-header">
        <h1 className="n-title">
          <i className="fa-solid fa-bell" />
          Notifications
        </h1>
        <p className="n-subtitle">
          {notifications.length} total • {unread} unread
        </p>
      </header>

      {/* ═══ MARK ALL READ BANNER ═══ */}
      {unread > 0 && (
        <div className="n-read-banner">
          <i className="fa-solid fa-check-double" />
          <span>All notifications marked as read</span>
        </div>
      )}

      {/* ═══ NOTIFICATION LIST ═══ */}
      {notifications.length === 0 ? (
        <div className="n-empty">
          <i className="fa-solid fa-bell-slash n-empty-icon" />
          <p className="n-empty-title">No notifications yet</p>
          <p className="n-empty-desc">
            They'll appear here when you join matches or get results
          </p>
        </div>
      ) : (
        <div className="n-list">
          {notifications.map((n, i) => {
            const cfg = config[n.type] || config.system
            const isLast = i === notifications.length - 1
            const isUnread = !n.read

            return (
              <div
                key={n.id}
                className={`n-item ${isUnread ? 'n-item-unread' : 'n-item-read'}`}
                style={{
                  borderBottom: isLast ? 'none' : '1px solid rgba(255,255,255,0.04)',
                  borderLeft: isUnread ? `3px solid ${cfg.border}` : '3px solid transparent',
                  background: isUnread ? cfg.bg : 'transparent',
                }}
              >
                {/* Icon */}
                <div
                  className="n-icon"
                  style={{
                    background: isUnread ? cfg.bg : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${isUnread ? cfg.border : 'rgba(255,255,255,0.06)'}`,
                    color: isUnread ? cfg.color : 'var(--pr-text-muted)',
                  }}
                >
                  <i className={cfg.icon} style={{ opacity: isUnread ? 1 : 0.6 }} />
                </div>

                {/* Content */}
                <div className="n-content">
                  <div
                    className="n-type-label"
                    style={{ color: isUnread ? cfg.color : 'var(--pr-text-muted)', opacity: isUnread ? 1 : 0.6 }}
                  >
                    {cfg.label}
                  </div>
                  <div className="n-message">{n.text}</div>
                  <div className="n-time">
                    <i className="fa-regular fa-clock" />
                    {typeof n.time === 'string' && (n.time.includes('ago') || n.time.includes('just'))
                      ? n.time
                      : timeAgo(n.time)
                    }
                  </div>
                </div>

                {/* Unread dot */}
                {isUnread && (
                  <div
                    className="n-unread-dot"
                    style={{ background: cfg.color, boxShadow: `0 0 8px ${cfg.color}66` }}
                  />
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* ═══ TYPE LEGEND ═══ */}
      {notifications.length > 0 && (
        <div className="n-legend">
          {Object.entries(config).map(([key, cfg]) => {
            const count = grouped[key]?.length || 0
            if (count === 0) return null
            return (
              <div key={key} className="n-legend-item">
                <div className="n-legend-swatch" style={{ background: cfg.color }} />
                <span>{cfg.label}</span>
                <span className="n-legend-count" style={{ color: cfg.color }}>
                  {count}
                </span>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}