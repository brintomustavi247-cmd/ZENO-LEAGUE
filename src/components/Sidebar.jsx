import { useApp } from '../context'

const NAV_ITEMS = [
  { id: 'dashboard', icon: 'fa-solid fa-house', label: 'Home' },
  { id: 'matches', icon: 'fa-solid fa-gamepad', label: 'Matches' },
  { id: 'wallet', icon: 'fa-solid fa-wallet', label: 'Wallet' },
  { id: 'leaderboard', icon: 'fa-solid fa-ranking-star', label: 'Rankings' },
  { id: 'notifications', icon: 'fa-solid fa-bell', label: 'Notifications' },
]

const BOTTOM_ITEMS = [
  { id: 'settings', icon: 'fa-solid fa-gear', label: 'Settings' },
  { id: 'logout', icon: 'fa-solid fa-right-from-bracket', label: 'Logout' },
]

export default function Sidebar() {
  const { state, dispatch, navigate } = useApp()
  const { currentView, notifications } = state

  const handleNav = (view) => {
    if (view === 'logout') {
      dispatch({ type: 'LOGOUT' })
    } else {
      navigate(view)
    }
    dispatch({ type: 'CLOSE_SIDEBAR' })
  }

 return (
    <aside className="sidebar">
      {/* ════════════════════════════════════════
          PREMIUM BRAND IDENTITY SECTION V9.4
          ════════════════════════════════════════ */}
      <div className="sidebar-brand-premium">
        
        {/* Logo Mark */}
        <div className="brand-logo-wrapper">
          <img 
            src="/logo.png" 
            alt="Zeno League" 
            className="brand-logo-mark"
          />
          <div className="logo-glow-effect" />
        </div>
        
        {/* Brand Typography */}
        <div className="brand-text-group">
          <h1 className="brand-title-main">ZENO</h1>
          <span className="brand-title-sub">LEAGUE</span>
        </div>

        {/* Decorative Accent Line */}
        <div className="brand-accent-line" />
      </div>

      {/* Premium Styles for Sidebar Branding */}
      <style>{`
        /* ════════════════════════════════════════
           SIDEBAR BRAND IDENTITY - PREMIUM STYLES
           ════════════════════════════════════════ */
        
        .sidebar-brand-premium {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 24px 16px 20px;
          
          position: relative;
          
          background: linear-gradient(
            180deg,
            rgba(168, 85, 247, 0.04) 0%,
            transparent 100%
          );
          
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          margin-bottom: 8px;
        }

        /* Logo Wrapper */
        .brand-logo-wrapper {
          position: relative;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .brand-logo-mark {
          position: relative;
          width: 52px;
          height: 52px;
          object-fit: contain;
          
          filter: drop-shadow(0 4px 12px rgba(168, 85, 247, 0.35));
          
          z-index: 2;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .sidebar-brand-premium:hover .brand-logo-mark {
          transform: scale(1.05);
          filter: drop-shadow(0 6px 16px rgba(168, 85, 247, 0.45));
        }

        /* Soft Glow Behind Logo */
        .logo-glow-effect {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          
          background: radial-gradient(
            circle,
            rgba(168, 85, 247, 0.25) 0%,
            rgba(236, 72, 153, 0.15) 40%,
            transparent 70%
          );
          
          filter: blur(8px);
          opacity: 0.8;
          
          transition: all 0.4s ease;
        }

        .sidebar-brand-premium:hover .logo-glow-effect {
          opacity: 1;
          transform: scale(1.1);
        }

        /* Brand Text */
        .brand-text-group {
          display: flex;
          align-items: baseline;
          gap: 6px;
          line-height: 1;
        }

        .brand-title-main {
          margin: 0;
          padding: 0;
          
          font-family: 'Lexend', sans-serif;
          font-weight: 900;
          font-size: 22px;
          letter-spacing: 0.12em;
          
          color: #ffffff;
          text-transform: uppercase;
          
          background: linear-gradient(
            180deg,
            #ffffff 0%,
            #e0d4fc 50%,
            #A055F7 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          
          filter: drop-shadow(0 2px 6px rgba(168, 85, 247, 0.3));
        }

        .brand-title-sub {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          font-size: 13px;
          letter-spacing: 0.18em;
          
          color: #EC4899;
          text-transform: uppercase;
          
          background: linear-gradient(
            90deg,
            #EC4899 0%,
            #f472b6 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          
          filter: drop-shadow(0 2px 4px rgba(236, 72, 153, 0.3));
        }

        /* Accent Line Under Brand */
        .brand-accent-line {
          width: 48px;
          height: 2px;
          border-radius: 1px;
          
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(168, 85, 247, 0.5) 30%,
            rgba(236, 72, 153, 0.5) 70%,
            transparent 100%
          );
          
          box-shadow: 0 1px 6px rgba(168, 85, 247, 0.2);
        }
      `}</style>

      <nav className="sidebar-nav">
        {NAV_ITEMS.map(item => (
          <button
            key={item.id}
            className={`sidebar-item ${currentView === item.id ? 'active' : ''}`}
            onClick={() => handleNav(item.id)}
          >
            <i className={item.icon} />
            <span className="sidebar-label">{item.label}</span>
            {item.id === 'matches' && notifications?.matches > 0 && (
              <span className="sidebar-badge">{notifications.matches}</span>
            )}
            {item.id === 'notifications' && (state.notifications?.filter(n => !n.read).length || 0) > 0 && (
              <span className="sidebar-badge">{state.notifications?.filter(n => !n.read).length || 0}</span>
            )}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        {BOTTOM_ITEMS.map(item => (
          <button
            key={item.id}
            className="sidebar-item"
            onClick={() => handleNav(item.id)}
          >
            <i className={item.icon} />
            <span className="sidebar-label">{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  )
}