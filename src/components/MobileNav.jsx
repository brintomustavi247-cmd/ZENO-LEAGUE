import { useApp } from '../context'
import { useState, useEffect, useRef } from 'react'
import TopHeader from './TopHeader'  // ← THIS LINE MUST EXIST!

// ═══ USER TABS (5 tabs - Notifications added!) ═══
const MAIN_TABS = [
  { id: 'dashboard', label: 'Home', icon: 'fa-solid fa-house' },
  { id: 'matches', label: 'Matches', icon: 'fa-solid fa-gamepad' },
  { id: 'wallet', label: 'Wallet', icon: 'fa-solid fa-wallet' },
  { id: 'notifications', label: 'Alerts', icon: 'fa-solid fa-bell', hasBadge: true },
  { id: 'profile', label: 'Profile', icon: 'fa-solid fa-user' },
]

// ═══ SECONDARY ITEMS (Hidden in Hamburger Menu) ═══
const SECONDARY_ITEMS = [
  { id: 'leaderboard', label: 'Rankings', icon: 'fa-solid fa-ranking-star' },
  { id: 'settings', label: 'Settings', icon: 'fa-solid fa-gear' },
]

const ADMIN_NAV_ITEMS = [
  { id: 'admin-overview', label: 'Overview', icon: 'fa-solid fa-chart-pie', color: '#00f0ff' },
  { id: 'admin-profit', label: 'Profit', icon: 'fa-solid fa-chart-line', color: '#22c55e' },
  { id: 'admin-create', label: 'Create', icon: 'fa-solid fa-circle-plus', color: '#a78bfa' },
  { id: 'admin-rooms', label: 'Rooms', icon: 'fa-solid fa-key', color: '#fbbf24' },
  { id: 'admin-results', label: 'Results', icon: 'fa-solid fa-clipboard-check', color: '#22c55e' },
  { id: 'admin-users', label: 'Users', icon: 'fa-solid fa-users-gear', color: '#6c8cff' },
  { id: 'admin-finance', label: 'Finance', icon: 'fa-solid fa-money-bill-transfer', color: '#ef4444' },
  { id: 'admin-payments', label: 'Payments', icon: 'fa-solid fa-credit-card', color: '#f59e0b' },
  { id: 'admin-owners', label: 'Owner', icon: 'fa-solid fa-crown', color: '#fbbf24' },
  { id: 'admin-activity', label: 'Activity', icon: 'fa-solid fa-clock-rotate-left', color: '#6c8cff' },
  { id: 'admin-top-teams', label: 'Top Teams', icon: 'fa-solid fa-ranking-star', color: '#fbbf24' },
  { id: 'admin-live', label: 'Live', icon: 'fa-solid fa-tower-broadcast', color: '#ef4444' },
]

export default function MobileNav() {
  const { state, navigate, isAdmin } = useApp()
  const { currentView } = state
  const pendingFinance = (state.pendingWithdrawals?.length || 0) + (state.pendingAddMoneyRequests?.length || 0)
  const unreadNotifications = state.notifications?.filter(n => !n.read).length || 0
    
  // ═══ DRAWER STATE ═══
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [touchStart, setTouchStart] = useState(null)
  const navRef = useRef(null)
  
  // Close drawer on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setDrawerOpen(false)
    }
    if (drawerOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [drawerOpen])
  
  // Swipe from left edge to open drawer
  const handleTouchStart = (e) => {
    if (e.touches[0].clientX < 20) {
      setTouchStart(e.touches[0].clientX)
    }
  }
  
  const handleTouchMove = (e) => {
    if (touchStart !== null && e.touches[0].clientX - touchStart > 80) {
      setDrawerOpen(true)
      setTouchStart(null)
    }
  }

if (isAdmin) {
  return (
    <>
      {/* TOP HEADER BAR (NEW V9.1) */}
      <TopHeader onMenuClick={() => setDrawerOpen(true)} />

      {/* Main Bottom Tab Bar - Admin gets ALL tabs (CLEANED) */}
      <nav 
          ref={navRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            background: 'rgba(8,8,22,0.96)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingBottom: 'env(safe-area-inset-bottom, 0px)',
          }}
        >
         {/* Hamburger removed - moved to TopHeader */}
{/* Hamburger is now rendered in TopHeader component */}

          {/* Center Tabs - Scrollable for Admin (ALL 12 items!) */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            padding: '8px 56px 8px',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
          }}>
            {ADMIN_NAV_ITEMS.map(item => {
              const on = currentView === item.id
              const col = on ? item.color : '#475569'

              return (
                <button
                  key={item.id}
                  onClick={() => navigate(item.id)}
                  aria-label={item.label}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 4,
                    padding: '7px 10px 5px',
                    border: 'none',
                    borderRadius: 10,
                    background: on ? `${item.color}15` : 'transparent',
                    cursor: 'pointer',
                    WebkitTapHighlightColor: 'transparent',
                    minWidth: 64,
                    flexShrink: 0,
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: on ? 'scale(1.05)' : 'scale(1)',
                  }}
                >
                  {on && (
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 22,
                      height: 2.5,
                      borderRadius: '0 0 3px 3px',
                      background: item.color,
                      boxShadow: `0 2px 12px ${item.color}60`,
                    }} />
                  )}
                  <i
                    className={item.icon}
                    style={{
                      fontSize: on ? 17 : 14,
                      color: col,
                      filter: on ? `drop-shadow(0 0 6px ${item.color}50)` : 'none',
                      transition: 'all 0.25s ease',
                    }}
                  />
                  <span style={{
                    fontSize: on ? 9.5 : 8.5,
                    fontWeight: on ? 700 : 500,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: col,
                    letterSpacing: 0.02,
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}>
                    {item.label}
                  </span>
                  
                  {item.id === 'admin-finance' && pendingFinance > 0 && (
                    <span style={{
                      position: 'absolute',
                      top: 2,
                      right: 4,
                      minWidth: 16,
                      height: 16,
                      borderRadius: 8,
                      background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                      color: '#fff',
                      fontSize: 9,
                      fontWeight: 700,
                      fontFamily: "'Inter', sans-serif",
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '0 4px',
                      boxShadow: '0 2px 6px rgba(239,68,68,0.4)',
                    }}>
                      {pendingFinance > 9 ? '9+' : pendingFinance}
                    </span>
                  )}
                </button>
              )
            })}
          </div>

         {/* Notification Bell removed - moved to TopHeader */}
{/* Notifications are now rendered in TopHeader component */}
        </nav>

        {/* DRAWER OVERLAY */}
        {drawerOpen && (
          <div
            onClick={() => setDrawerOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              background: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
              animation: 'fadeIn 0.25s ease',
            }}
          />
        )}

        {/* DRAWER PANEL - Admin Profile + Support Options */}
        <aside
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            width: 280,
            zIndex: 1001,
            background: 'linear-gradient(180deg, #0f0f1a 0%, #13131f 100%)',
            borderRight: '1px solid rgba(255,255,255,0.06)',
            transform: drawerOpen ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            boxShadow: drawerOpen ? '4px 0 30px rgba(0,0,0,0.5)' : 'none',
          }}
        >
          {/* Header - Premium Gaming Style Balance */}
          <div style={{ padding: '48px 20px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{
                width: 52,
                height: 52,
                borderRadius: 16,
                background: 'linear-gradient(135deg, #A055F7, #EC4899)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 22,
                fontWeight: 800,
                color: '#fff',
                fontFamily: "'Lexend', sans-serif",
                boxShadow: '0 4px 20px rgba(168,85,247,0.4), 0 0 30px rgba(168,85,247,0.15)',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              }}>
                {state.currentUser?.name?.charAt(0)?.toUpperCase() || 'A'}
              </div>
              
              <div style={{ flex: 1, overflow: 'hidden' }}>
                <div style={{
                  fontSize: 17,
                  fontWeight: 800,
                  color: '#E5E1E4',
                  fontFamily: "'Lexend', sans-serif",
                  letterSpacing: '-0.02em',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  textTransform: 'uppercase',
                }}>
                  {state.currentUser?.name || 'Admin'}
                </div>
                <div style={{
                  fontSize: 11.5,
                  color: '#A055F7',
                  fontWeight: 700,
                  marginTop: 3,
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '0.05em',
                }}>
                  ⭐ ADMINISTRATOR
                </div>
              </div>
              
              <button
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  border: 'none',
                  background: 'rgba(255,255,255,0.05)',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                }}
              >
                <i className="fa-solid fa-xmark" style={{ fontSize: 14 }} />
              </button>
            </div>
            
            {/* MINIMALIST BALANCE */}
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              borderRadius: 12,
              padding: '16px 18px',
              border: '1px solid rgba(255,255,255,0.06)',
            }}>
              <div style={{
                fontSize: 9.5,
                color: '#64748b',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: 8,
                fontFamily: "'Inter', sans-serif",
              }}>
                Available Balance
              </div>
              <div style={{
                fontSize: 26,
                fontWeight: 600,
                fontFamily: "'Inter', sans-serif",
                color: '#E5E1E4',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}>
                {state.currentUser?.balance || 0} <span style={{ 
                  fontSize: 13, 
                  fontWeight: 500, 
                  color: '#64748b',
                  marginLeft: 4,
                }}>TK</span>
              </div>
              <div style={{
                display: 'flex',
                gap: 12,
                marginTop: 12,
                paddingTop: 12,
                borderTop: '1px solid rgba(255,255,255,0.04)',
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 8.5, color: '#64748b', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 3 }}>Pending</div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#94a3b8', fontFamily: "'Inter', sans-serif", lineHeight: 1 }}>
                    {pendingFinance || 0}
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 8.5, color: '#64748b', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 3 }}>Level</div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#94a3b8', fontFamily: "'Inter', sans-serif", lineHeight: 1 }}>
                    {state.currentUser?.level || 1}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Support Section - WhatsApp + Telegram */}
          <div style={{ padding: '16px 12px' }}>
            <div style={{
              fontSize: 10.5,
              color: '#64748b',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: 1.2,
              paddingLeft: 14,
              marginBottom: 10,
            }}>
              📞 Support Channels
            </div>

            {/* WhatsApp Button */}
            <button
              onClick={() => {
                window.open('https://wa.me/8801XXXXXXXXX?text=Hi%20Zeno%20League%20Admin%20Support%20Needed', '_blank')
                setDrawerOpen(false)
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                width: '100%',
                padding: '14px 18px',
                border: '1px solid rgba(16,185,129,0.25)',
                borderRadius: 12,
                background: 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(16,185,129,0.03))',
                cursor: 'pointer',
                WebkitTapHighlightColor: 'transparent',
                transition: 'all 0.25s ease',
                marginBottom: 10,
              }}
            >
              <div style={{
                width: 40,
                height: 40,
                borderRadius: 11,
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(37,211,102,0.3)',
              }}>
                <i className="fa-brands fa-whatsapp" style={{ fontSize: 22, color: '#fff' }} />
              </div>
              <div style={{ flex: 1, textAlign: 'left' }}>
                <div style={{
                  fontSize: 14.5,
                  fontWeight: 700,
                  color: '#10B981',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}>
                  WhatsApp Support
                </div>
                <div style={{
                  fontSize: 11,
                  color: '#64748b',
                  fontWeight: 500,
                  marginTop: 2,
                }}>
                  Chat with us instantly
                </div>
              </div>
              <i className="fa-solid fa-chevron-right" style={{ fontSize: 11, color: '#10B981', opacity: 0.5 }} />
            </button>

            {/* Telegram Button */}
            <button
              onClick={() => {
                window.open('https://t.me/zenoleaguesupport', '_blank')
                setDrawerOpen(false)
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                width: '100%',
                padding: '14px 18px',
                border: '1px solid rgba(59,130,246,0.25)',
                borderRadius: 12,
                background: 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(59,130,246,0.03))',
                cursor: 'pointer',
                WebkitTapHighlightColor: 'transparent',
                transition: 'all 0.25s ease',
                marginBottom: 10,
              }}
            >
              <div style={{
                width: 40,
                height: 40,
                borderRadius: 11,
                background: 'linear-gradient(135deg, #0088cc, #229ED9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(0,136,204,0.3)',
              }}>
                <i className="fa-brands fa-telegram" style={{ fontSize: 22, color: '#fff' }} />
              </div>
              <div style={{ flex: 1, textAlign: 'left' }}>
                <div style={{
                  fontSize: 14.5,
                  fontWeight: 700,
                  color: '#3B82F6',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}>
                  Telegram Channel
                </div>
                <div style={{
                  fontSize: 11,
                  color: '#64748b',
                  fontWeight: 500,
                  marginTop: 2,
                }}>
                  Join for updates & alerts
                </div>
              </div>
              <i className="fa-solid fa-chevron-right" style={{ fontSize: 11, color: '#3B82F6', opacity: 0.5 }} />
            </button>
          </div>

          {/* Footer */}
          <div style={{ padding: '16px 12px', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: 'auto' }}>
            <button
              onClick={() => {
                window.location.hash = 'login'
                setDrawerOpen(false)
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                width: '100%',
                padding: '12px 16px',
                border: '1px solid rgba(239,68,68,0.2)',
                borderRadius: 10,
                background: 'rgba(239,68,68,0.06)',
                color: '#ef4444',
                cursor: 'pointer',
                fontSize: 13.5,
                fontWeight: 600,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                WebkitTapHighlightColor: 'transparent',
                transition: 'all 0.2s ease',
              }}
            >
              <i className="fa-solid fa-right-from-bracket" style={{ fontSize: 15 }} />
              Sign Out
            </button>
            
            <div style={{
              textAlign: 'center',
              marginTop: 12,
              fontSize: 10,
              color: '#475569',
              fontFamily: "'Inter', sans-serif",
            }}>
              Zeno League v9.0 ⚡
            </div>
          </div>
        </aside>

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}</style>
      </>
    )
  }

  // ═══ USER MOBILE NAV (5 Tabs Only - Clean!) ═══
  const active = (id) => currentView === id

  return (
    <>
      {/* TOP HEADER BAR (NEW V9.1) */}
      <TopHeader onMenuClick={() => setDrawerOpen(true)} />

      {/* ════════════════════════════════════════════════════
          PREMIUM BOTTOM NAVIGATION V9.4 - Refined Elegance
          ════════════════════════════════════════════════════ */}
      <nav 
        ref={navRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        className="premium-bottom-nav"
      >
        {/* Background Layers */}
        <div className="nav-bg-glass" />
        <div className="nav-border-subtle" />
        
        {/* Tab Items Container */}
        <div className="nav-tabs-container">
          {MAIN_TABS.map((item, index) => {
            const isActive = active(item.id)
            
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                aria-label={item.label}
                aria-current={isActive ? 'page' : undefined}
                className={`nav-tab-item ${isActive ? 'is-active' : ''}`}
              >
                {/* Active Indicator Pill */}
                {isActive && <div className="active-indicator-pill" />}
                
                {/* Icon Container */}
                <div className="tab-icon-wrapper">
                  <i className={item.icon} />
                  
                  {/* Notification Badge (Alerts only) */}
                  {item.hasBadge && unreadNotifications > 0 && (
                    <span className="tab-notification-dot">
                      <span className="dot-core" />
                    </span>
                  )}
                </div>
                
                {/* Label Text */}
                <span className="tab-label">{item.label}</span>
                
                {/* Hover/Active Ripple */}
                <div className="tab-ripple-effect" />
              </button>
            )
          })}
        </div>

        {/* Premium Stylesheet for Bottom Nav */}
        <style>{`
          /* ════════════════════════════════════════════════════
             ZENO LEAGUE - PREMIUM BOTTOM NAVIGATION STYLES
             Design: Refined elegance • No cheap neon • iOS-grade
             ════════════════════════════════════════════════════ */
          
          .premium-bottom-nav {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: 72px;
            
            display: flex;
            align-items: center;
            justify-content: center;
            
            padding: 0 16px;
            padding-bottom: env(safe-area-inset-bottom, 0px);
            
            z-index: 1000;
            overflow: hidden;
            
            box-shadow: 
              0 -4px 24px rgba(0, 0, 0, 0.3),
              0 -1px 0 rgba(255, 255, 255, 0.03) inset;
          }

          /* Glass Background */
          .nav-bg-glass {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              180deg,
              rgba(12, 10, 24, 0.96) 0%,
              rgba(8, 6, 20, 0.98) 100%
            );
            backdrop-filter: blur(30px) saturate(180%);
            -webkit-backdrop-filter: blur(30px) saturate(180%);
          }

          /* Subtle Top Border */
          .nav-border-subtle {
            position: absolute;
            top: 0;
            left: 10%;
            right: 10%;
            height: 1px;
            background: linear-gradient(
              90deg,
              transparent 0%,
              rgba(168, 85, 247, 0.08) 30%,
              rgba(236, 72, 153, 0.1) 50%,
              rgba(168, 85, 247, 0.08) 70%,
              transparent 100%
            );
          }

          /* Tabs Container */
          .nav-tabs-container {
            position: relative;
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 100%;
            max-width: 480px;
            gap: 4px;
            padding: 8px 0 12px;
          }

          /* Tab Item */
          .nav-tab-item {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 4px;
            
            min-width: 64px;
            max-width: 80px;
            height: 56px;
            padding: 8px 4px 6px;
            
            border: none;
            border-radius: 16px;
            background: transparent;
            cursor: pointer;
            
            -webkit-tap-highlight-color: transparent;
            outline: none;
            
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            flex: 1;
            overflow: visible;
          }

          .nav-tab-item:hover {
            transform: translateY(-2px);
          }

          .nav-tab-item:active {
            transform: scale(0.95) !important;
            transition-duration: 0.1s;
          }

          /* Active Indicator Pill */
          .active-indicator-pill {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            
            width: 24px;
            height: 3px;
            border-radius: 0 0 3px 3px;
            
            background: linear-gradient(
              90deg,
              rgba(168, 85, 247, 0.7) 0%,
              rgba(236, 72, 153, 0.7) 100%
            );
            
            box-shadow: 
              0 2px 8px rgba(168, 85, 247, 0.25),
              0 0 12px rgba(236, 72, 153, 0.15);
            
            animation: pill-slide-in 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          @keyframes pill-slide-in {
            from { 
              opacity: 0; 
              transform: translateX(-50%) scaleX(0.5); 
            }
            to { 
              opacity: 1; 
              transform: translateX(-50%) scaleX(1); 
            }
          }

          /* Icon Wrapper */
          .tab-icon-wrapper {
            position: relative;
            width: 28px;
            height: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            
            transition: all 0.4s ease;
          }

          .nav-tab-item i {
            font-size: 20px;
            color: #475569;
            
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            line-height: 1;
          }

          /* Active Icon */
          .nav-tab-item.is-active i {
            font-size: 22px;
            color: #c084fc;
            
            filter: drop-shadow(0 2px 8px rgba(168, 85, 247, 0.35));
            transform: translateY(-1px);
          }

          /* Hover Icon */
          .nav-tab-item:hover:not(.is-active) i {
            color: #94a3b8;
            transform: scale(1.05);
          }

          /* Label Text */
          .tab-label {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            font-size: 10px;
            font-weight: 500;
            letter-spacing: 0.03em;
            color: #475569;
            
            transition: all 0.4s ease;
            white-space: nowrap;
            line-height: 1.2;
          }

          /* Active Label */
          .nav-tab-item.is-active .tab-label {
            font-weight: 700;
            font-size: 10.5px;
            color: #e2e8f0;
            letter-spacing: 0.04em;
          }

          /* Hover Label */
          .nav-tab-item:hover:not(.is-active) .tab-label {
            color: #64748b;
          }

          /* Notification Dot */
          .tab-notification-dot {
            position: absolute;
            top: -2px;
            right: -6px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #ef4444;
            
            box-shadow: 0 0 0 2px rgba(12, 10, 24, 0.95);
            
            animation: dot-pulse 2.5s ease-in-out infinite;
          }

          .dot-core {
            position: absolute;
            inset: 0;
            border-radius: inherit;
            background: inherit;
          }

          @keyframes dot-pulse {
            0%, 100% { 
              opacity: 1; 
              transform: scale(1); 
            }
            50% { 
              opacity: 0.7; 
              transform: scale(1.15); 
            }
          }

          /* Ripple Effect */
          .tab-ripple-effect {
            position: absolute;
            inset: 0;
            border-radius: 16px;
            
            background: radial-gradient(
              circle at center,
              rgba(168, 85, 247, 0.15) 0%,
              transparent 70%
            );
            
            opacity: 0;
            transform: scale(0);
            
            pointer-events: none;
            transition: all 0.5s ease-out;
          }

          .nav-tab-item:active .tab-ripple-effect {
            opacity: 1;
            transform: scale(2.5);
          }

          /* Active Background (Very Subtle) */
          .nav-tab-item.is-active::before {
            content: '';
            position: absolute;
            inset: 4px;
            border-radius: 14px;
            
            background: radial-gradient(
              ellipse at center bottom,
              rgba(168, 85, 247, 0.08) 0%,
              transparent 70%
            );
            
            animation: bg-fade-in 0.4s ease-out;
          }

          @keyframes bg-fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          /* Responsive */
          @media (max-width: 360px) {
            .nav-tab-item {
              min-width: 56px;
              gap: 2px;
            }
            
            .nav-tab-item i {
              font-size: 18px;
            }
            
            .nav-tab-item.is-active i {
              font-size: 19px;
            }
            
            .tab-label {
              font-size: 9px;
            }
            
            .nav-tab-item.is-active .tab-label {
              font-size: 9.5px;
            }
          }
        `}</style>
      </nav>

      {/* DRAWER OVERLAY */}
      {drawerOpen && (
        <div
          onClick={() => setDrawerOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            background: 'rgba(0,0,0,0.65)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            animation: 'drawerFadeIn 0.3s ease',
          }}
        />
      )}

      {/* DRAWER PANEL - User Version */}
      <aside
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          width: 290,
          zIndex: 1001,
          background: 'linear-gradient(180deg, #0a0a12 0%, #111119 50%, #0f0f1a 100%)',
          borderRight: '1px solid rgba(168,85,247,0.1)',
          transform: drawerOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.35s cubic-bezier(0.32, 0.72, 0, 1)',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
          boxShadow: drawerOpen 
            ? '-4px 0 40px rgba(168,85,247,0.15), 4px 0 30px rgba(0,0,0,0.5)' 
            : 'none',
        }}
      >
        {/* Profile Header - PREMIUM GAMING BALANCE */}
        <div style={{ 
          padding: '52px 20px 24px', 
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          background: 'linear-gradient(180deg, rgba(168,85,247,0.1) 0%, transparent 100%)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
            {state.currentUser?.avatar ? (
              <img 
                src={state.currentUser.avatar} 
                alt=""
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 18,
                  objectFit: 'cover',
                  border: '2px solid rgba(168,85,247,0.4)',
                  boxShadow: '0 4px 24px rgba(168,85,247,0.35), 0 0 40px rgba(168,85,247,0.15)',
                }}
              />
            ) : (
              <div style={{
                width: 56,
                height: 56,
                borderRadius: 18,
                background: 'linear-gradient(135deg, #A055F7, #EC4899)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
                fontWeight: 800,
                color: '#fff',
                fontFamily: "'Lexend', sans-serif",
                boxShadow: '0 4px 24px rgba(168,85,247,0.4), 0 0 40px rgba(168,85,247,0.15)',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              }}>
                {state.currentUser?.name?.charAt(0)?.toUpperCase() || '?'}
              </div>
            )}
            
            <div style={{ flex: 1, overflow: 'hidden' }}>
              <div style={{
                fontSize: 19,
                fontWeight: 800,
                color: '#E5E1E4',
                fontFamily: "'Lexend', sans-serif",
                letterSpacing: '-0.02em',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                lineHeight: 1.2,
                textTransform: 'uppercase',
              }}>
                {state.currentUser?.name || state.currentUser?.displayName || 'Player'}
              </div>
              <div style={{
                fontSize: 12.5,
                color: '#A055F7',
                fontWeight: 700,
                marginTop: 4,
                fontFamily: "'Inter', sans-serif",
                letterSpacing: '0.03em',
              }}>
                @{state.currentUser?.username || 'player'}
              </div>
            </div>
            
            <button
              onClick={() => setDrawerOpen(false)}
              aria-label="Close menu"
              style={{
                width: 34,
                height: 34,
                borderRadius: 10,
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.04)',
                color: '#94a3b8',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
              }}
            >
              <i className="fa-solid fa-xmark" style={{ fontSize: 15 }} />
            </button>
          </div>
          
          {/* MINIMALIST BALANCE */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            borderRadius: 12,
            padding: '16px 18px',
            border: '1px solid rgba(255,255,255,0.06)',
          }}>
            <div style={{
              fontSize: 9.5,
              color: '#64748b',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: 8,
              fontFamily: "'Inter', sans-serif",
            }}>
              Available Balance
            </div>
            <div style={{
              fontSize: 26,
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif",
              color: '#E5E1E4',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}>
              {state.currentUser?.balance || 0} <span style={{ 
                fontSize: 13, 
                fontWeight: 500, 
                color: '#64748b',
                marginLeft: 4,
              }}>TK</span>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div style={{
          display: 'flex',
          gap: 10,
          padding: '16px 12px 0',
        }}>
          <div style={{
            flex: 1,
            background: 'rgba(255,255,255,0.03)',
            borderRadius: 12,
            padding: '12px 14px',
            border: '1px solid rgba(255,255,255,0.05)',
          }}>
            <div style={{ fontSize: 9, color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 5 }}>Level</div>
            <div style={{ fontSize: 20, fontWeight: 900, color: '#A055F7', fontFamily: "'Lexend', sans-serif", lineHeight: 1 }}>
              {state.currentUser?.level || 1}
            </div>
          </div>
          <div style={{
            flex: 1,
            background: 'rgba(255,255,255,0.03)',
            borderRadius: 12,
            padding: '12px 14px',
            border: '1px solid rgba(255,255,255,0.05)',
          }}>
            <div style={{ fontSize: 9, color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 5 }}>Wins</div>
            <div style={{ fontSize: 20, fontWeight: 900, color: '#10B981', fontFamily: "'Lexend', sans-serif", lineHeight: 1 }}>
              {state.currentUser?.wins || 0}
            </div>
          </div>
          <div style={{
            flex: 1,
            background: 'rgba(255,255,255,0.03)',
            borderRadius: 12,
            padding: '12px 14px',
            border: '1px solid rgba(255,255,255,0.05)',
          }}>
            <div style={{ fontSize: 9, color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 5 }}>Win %</div>
            <div style={{ fontSize: 20, fontWeight: 900, color: '#F59E0B', fontFamily: "'Lexend', sans-serif", lineHeight: 1 }}>
              {state.currentUser?.winRate ? Math.round(state.currentUser.winRate) : 0}%
            </div>
          </div>
        </div>

        {/* Secondary Navigation Items */}
        <div style={{ padding: '16px 12px', flex: 1 }}>
          <div style={{
            fontSize: 10.5,
            color: '#64748b',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: 1.2,
            paddingLeft: 14,
            marginBottom: 10,
            marginTop: 8,
          }}>
            More Options
          </div>
          
          {SECONDARY_ITEMS.map(item => {
            const on = active(item.id)
            return (
              <button
                key={item.id}
                onClick={() => {
                  navigate(item.id)
                  setDrawerOpen(false)
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  width: '100%',
                  padding: '13px 16px',
                  border: 'none',
                  borderRadius: 12,
                  background: on ? 'rgba(6,214,240,0.08)' : 'transparent',
                  cursor: 'pointer',
                  WebkitTapHighlightColor: 'transparent',
                  transition: 'all 0.2s ease',
                  marginBottom: 3,
                }}
              >
                <div style={{
                  width: 38,
                  height: 38,
                  borderRadius: 11,
                  background: on ? 'rgba(6,214,240,0.12)' : 'rgba(255,255,255,0.03)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <i
                    className={item.icon}
                    style={{
                      fontSize: 17,
                      color: on ? '#06d6f0' : '#64748b',
                    }}
                  />
                </div>
                <span style={{
                  fontSize: 14.5,
                  fontWeight: on ? 600 : 500,
                  color: on ? '#06d6f0' : '#e2e8f0',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  flex: 1,
                  textAlign: 'left',
                }}>
                  {item.label}
                </span>
                {on && (
                  <i className="fa-solid fa-chevron-right" style={{ fontSize: 11, color: '#06d6f0', opacity: 0.6 }} />
                )}
              </button>
            )
          })}

          <div style={{ 
            height: 1, 
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)', 
            margin: '20px 12px' 
          }} />

          {/* Support Section - WhatsApp + Telegram */}
          <div style={{
            fontSize: 10.5,
            color: '#64748b',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: 1.2,
            paddingLeft: 14,
            marginBottom: 10,
          }}>
            📞 Support
          </div>

          {/* WhatsApp */}
          <button
            onClick={() => {
              window.open('https://wa.me/8801XXXXXXXXX?text=Hi%20I%20need%20help%20with%20Zeno%20League!', '_blank')
              setDrawerOpen(false)
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              width: '100%',
              padding: '13px 16px',
              border: '1px solid rgba(16,185,129,0.2)',
              borderRadius: 12,
              background: 'rgba(16,185,129,0.05)',
              cursor: 'pointer',
              WebkitTapHighlightColor: 'transparent',
              transition: 'all 0.2s ease',
              marginBottom: 8,
            }}
          >
            <div style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: 'linear-gradient(135deg, #25D366, #128C7E)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 3px 12px rgba(37,211,102,0.25)',
            }}>
              <i className="fa-brands fa-whatsapp" style={{ fontSize: 19, color: '#fff' }} />
            </div>
            <span style={{
              fontSize: 14,
              fontWeight: 600,
              color: '#10B981',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              flex: 1,
              textAlign: 'left',
            }}>
              WhatsApp
            </span>
            <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: 11, color: '#10B981', opacity: 0.5 }} />
          </button>

          {/* Telegram */}
          <button
            onClick={() => {
              window.open('https://t.me/zenoleague', '_blank')
              setDrawerOpen(false)
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              width: '100%',
              padding: '13px 16px',
              border: '1px solid rgba(59,130,246,0.2)',
              borderRadius: 12,
              background: 'rgba(59,130,246,0.05)',
              cursor: 'pointer',
              WebkitTapHighlightColor: 'transparent',
              transition: 'all 0.2s ease',
            }}
          >
            <div style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: 'linear-gradient(135deg, #0088cc, #229ED9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 3px 12px rgba(0,136,204,0.25)',
            }}>
              <i className="fa-brands fa-telegram" style={{ fontSize: 19, color: '#fff' }} />
            </div>
            <span style={{
              fontSize: 14,
              fontWeight: 600,
              color: '#3B82F6',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              flex: 1,
              textAlign: 'left',
            }}>
              Telegram
            </span>
            <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: 11, color: '#3B82F6', opacity: 0.5 }} />
          </button>
        </div>

        {/* Footer */}
        <div style={{ 
          padding: '16px 12px 28px', 
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}>
          <button
            onClick={() => {
              window.location.hash = 'login'
              setDrawerOpen(false)
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              width: '100%',
              padding: '13px 18px',
              border: '1px solid rgba(239,68,68,0.15)',
              borderRadius: 12,
              background: 'rgba(239,68,68,0.04)',
              color: '#ef4444',
              cursor: 'pointer',
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              WebkitTapHighlightColor: 'transparent',
              transition: 'all 0.2s ease',
            }}
          >
            <i className="fa-solid fa-right-from-bracket" style={{ fontSize: 16 }} />
            Sign Out
          </button>
          
          <div style={{
            textAlign: 'center',
            marginTop: 14,
            fontSize: 10.5,
            color: '#334155',
            fontFamily: "'Inter', sans-serif",
            letterSpacing: 0.3,
          }}>
            ⚡ Zeno League v9.0 • Made ❤️ in BD
          </div>
        </div>
      </aside>

      <style>{`
        @keyframes drawerFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulse-badge {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </>
  )
}