// ════════════════════════════════════════════════════════════════
// ⚡ TOP HEADER COMPONENT V9.4 - CLEAN ALIGNED EDITION
// ════════════════════════════════════════════════════════════════
// Fixes:
//   ✓ Removed avatar from header (cleaner look)
//   ✓ Proper spacing (no elements touch borders)
//   ✓ Better alignment (balanced layout)
//   ✓ Premium aesthetics maintained

import { useApp } from '../context'

export default function TopHeader({ onMenuClick }) {
  const { state, navigate, isAdmin } = useApp()
  const unreadNotifications = state.notifications?.filter(n => !n.read).length || 0
  
  // Admin-specific counts
  const pendingFinance = isAdmin 
    ? (state.pendingWithdrawals?.length || 0) + (state.pendingAddMoneyRequests?.length || 0)
    : 0

  return (
    <>
      {/* ════════════════════════════════════════════════════════
          MAIN HEADER CONTAINER - Clean & Spaced
          ════════════════════════════════════════════════════════ */}
      <header
        className="zeno-clean-header"
        style={{
          display: typeof window !== 'undefined' && window.innerWidth > 768 ? 'none' : 'flex',
        }}
      >
        
        {/* Background Layers */}
        <div className="header-bg-base" />
        <div className="header-gradient-overlay" />
        <div className="header-top-accent" />
        
        {/* Content Container - Properly Padded */}
        <div className="header-content">
          
          {/* ═══ LEFT: HAMBURGER MENU ═══ */}
          <button
            onClick={onMenuClick}
            aria-label="Open menu"
            className="btn-hamburger"
          >
            <div className="hamburger-inner">
              <i className="fa-solid fa-bars" />
            </div>
          </button>

          {/* ═══ CENTER: BRAND IDENTITY ═══ */}
          <div className="brand-center">
            <img 
              src="/logo.png" 
              alt="Zeno League" 
              className="brand-logo"
            />
            <div className="brand-text">
              <span className="brand-name">ZENO LEAGUE</span>
              <span className="brand-sub">ESPORTS</span>
            </div>
          </div>

          {/* ═══ RIGHT: NOTIFICATION ONLY (No Avatar!) ═══ */}
          <button
            onClick={() => navigate('notifications')}
            aria-label={`Notifications (${unreadNotifications})`}
            className={`btn-notification ${unreadNotifications > 0 ? 'has-notifications' : ''}`}
          >
            <i className="fa-solid fa-bell" />
            
            {unreadNotifications > 0 && (
              <span className="notif-badge">{unreadNotifications > 99 ? '99+' : unreadNotifications}</span>
            )}
          </button>
        </div>

        {/* Bottom Fade */}
        <div className="header-bottom-fade" />
      </header>

      {/* ═══ STYLESHEET ═══ */}
      <style>{`
        /* ════════════════════════════════════════════════════════
           ZENO LEAGUE V9.4 - CLEAN HEADER STYLES
           ════════════════════════════════════════════════════════ */
        
        .zeno-clean-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 58px;
          
          display: flex;
          align-items: center;
          justify-content: center;
          
          padding: 0 20px;  /* ← KEY: 20px padding from edges */
          padding-top: max(14px, env(safe-area-inset-top));
          
          z-index: 1000;
          box-sizing: border-box;
          overflow: hidden;
          
          box-shadow: 
            0 4px 24px rgba(0, 0, 0, 0.4),
            0 1px 0 rgba(255, 255, 255, 0.03) inset;
        }

        /* Background Base */
        .header-bg-base {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(10, 8, 22, 0.97) 0%,
            rgba(15, 12, 28, 0.96) 100%
          );
          backdrop-filter: blur(30px) saturate(180%);
          -webkit-backdrop-filter: blur(30px) saturate(180%);
        }

        /* Gradient Overlay */
        .header-gradient-overlay {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse 70% 50% at 20% 50%, rgba(168, 85, 247, 0.06) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 80% 50%, rgba(236, 72, 153, 0.04) 0%, transparent 55%);
          pointer-events: none;
        }

        /* Top Accent Line */
        .header-top-accent {
          position: absolute;
          top: 0;
          left: 15%;
          right: 15%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(168, 85, 247, 0.5) 30%,
            rgba(236, 72, 153, 0.6) 50%,
            rgba(168, 85, 247, 0.5) 70%,
            transparent 100%
          );
          filter: blur(0.3px);
        }

        /* Content Layer - Flex Layout */
        .header-content {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;  /* ← KEY: Space out left/center/right */
          width: 100%;
          max-width: 500px;  /* Prevent over-stretching */
          gap: 16px;  /* ← KEY: Gap between items */
        }

        /* ═══ HAMBURGER BUTTON ═══ */
        .btn-hamburger {
          position: relative;
          width: 46px;
          height: 46px;
          min-width: 46px;  /* Prevent shrinking */
          border-radius: 14px;
          border: none;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          -webkit-tap-highlight-color: transparent;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          flex-shrink: 0;  /* Don't shrink */
        }

        .btn-hamburger:hover {
          transform: scale(1.05);
        }

        .btn-hamburger:active {
          transform: scale(0.92) !important;
        }

        .hamburger-inner {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
          background: linear-gradient(
            135deg,
            rgba(168, 85, 247, 0.12) 0%,
            rgba(236, 72, 153, 0.08) 100%
          );
          border: 1.5px solid rgba(168, 85, 247, 0.18);
          transition: all 0.3s ease;
        }

        .btn-hamburger:hover .hamburger-inner {
          background: linear-gradient(
            135deg,
            rgba(168, 85, 247, 0.2) 0%,
            rgba(236, 72, 153, 0.14) 100%
          );
          border-color: rgba(168, 85, 247, 0.35);
          box-shadow: 0 4px 20px rgba(168, 85, 247, 0.25);
        }

        .hamburger-inner i {
          font-size: 18px;
          color: #A055F7;
          transition: all 0.3s ease;
        }

        .btn-hamburger:hover .hamburger-inner i {
          color: #c084fc;
          filter: drop-shadow(0 0 8px rgba(168, 85, 247, 0.5));
        }

        /* ═══ BRAND CENTER ═══ */
        .brand-center {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 5;
        }

        .brand-logo {
          height: 32px;
          width: auto;
          object-fit: contain;
          filter: drop-shadow(0 2px 10px rgba(168, 85, 247, 0.45));
        }

        .brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
          gap: 1px;
        }

        .brand-name {
          font-family: 'Lexend', sans-serif;
          font-weight: 900;
          font-size: 16px;
          letter-spacing: 0.12em;
          color: #fff;
          text-transform: uppercase;
          background: linear-gradient(135deg, #ffffff 0%, #c084fc 50%, #A055F7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 2px 6px rgba(168, 85, 247, 0.4));
        }

        .brand-sub {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 9px;
          letter-spacing: 0.28em;
          color: rgba(236, 72, 153, 0.85);
          text-transform: uppercase;
          margin-left: 1px;
        }

        /* ═══ NOTIFICATION BUTTON ═══ */
        .btn-notification {
          position: relative;
          width: 46px;
          height: 46px;
          min-width: 46px;  /* Prevent shrinking */
          border-radius: 14px;
          border: none;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          -webkit-tap-highlight-color: transparent;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          flex-shrink: 0;  /* Don't shrink */
        }

        .btn-notification:hover {
          transform: scale(1.05);
        }

        .btn-notification:active {
          transform: scale(0.92) !important;
        }

        /* Notification Background (appears on hover/alerts) */
        .btn-notification::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 14px;
          background: radial-gradient(
            circle at center,
            rgba(251, 191, 36, 0.12) 0%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .btn-notification.has-notifications::before {
          opacity: 1;
        }

        .btn-notification:hover::before {
          opacity: 1;
        }

        /* Border */
        .btn-notification::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 14px;
          padding: 1.5px;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.08),
            rgba(255, 255, 255, 0.04)
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.6;
          transition: all 0.3s ease;
        }

        .btn-notification:hover::after,
        .btn-notification.has-notifications::after {
          opacity: 1;
          background: linear-gradient(
            135deg,
            rgba(239, 68, 68, 0.4),
            rgba(220, 38, 38, 0.25)
          );
        }

        .btn-notification i {
          position: relative;
          font-size: 17px;
          color: #64748b;
          transition: all 0.3s ease;
          z-index: 2;
        }

        .btn-notification:hover i {
          color: #94a3b8;
          transform: scale(1.08);
        }

        .btn-notification.has-notifications i {
          color: #fbbf24;
          filter: drop-shadow(0 0 6px rgba(251, 191, 36, 0.5));
          animation: bell-gentle-shake 3s ease-in-out infinite;
        }

        @keyframes bell-gentle-shake {
          0%, 100% { transform: rotate(0deg); }
          10%, 30%, 50%, 70%, 90% { transform: rotate(-6deg); }
          20%, 40%, 60%, 80% { transform: rotate(6deg); }
        }

        /* Notification Badge */
        .notif-badge {
          position: absolute;
          top: 7px;
          right: 7px;
          min-width: 18px;
          height: 18px;
          border-radius: 9px;
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: #fff;
          font-size: 10px;
          font-weight: 800;
          font-family: 'Inter', sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 5px;
          box-shadow: 
            0 2px 8px rgba(239, 68, 68, 0.5),
            0 0 0 2px rgba(10, 8, 22, 0.9);
          z-index: 3;
          animation: badge-pulse 2s ease-in-out infinite;
        }

        @keyframes badge-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }

        /* Bottom Fade */
        .header-bottom-fade {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 20px;
          background: linear-gradient(
            180deg,
            rgba(10, 8, 22, 0) 0%,
            rgba(10, 8, 22, 0.06) 60%,
            rgba(10, 8, 22, 0.12) 100%
          );
          pointer-events: none;
          z-index: 8;
        }

        /* Responsive Adjustments */
        @media (max-width: 380px) {
          .brand-sub {
            display: none;
          }
          
          .brand-name {
            font-size: 14px;
          }
          
          .brand-logo {
            height: 28px;
          }
        }

        @media (max-width: 340px) {
          .brand-text {
            display: none;
          }
        }

        /* ════════════════════════════════════════
           CRITICAL FIX: Hide Mobile Header on Desktop!
           Prevents overlap with PC Sidebar
           ════════════════════════════════════════ */
        
        /* Base Rule: Hidden on large screens by default */
        .zeno-clean-header {
          display: none;
        }

        /* Show ONLY on mobile and portrait tablets */
        @media (max-width: 768px) {
          .zeno-clean-header {
            display: flex !important;
          }
        }

        /* Extra safety: Force hide on anything wider than tablet */
        @media (min-width: 769px) {
          .zeno-clean-header {
            display: none !important;
            visibility: hidden !important;
            pointer-events: none !important;
            position: absolute !important;
            left: -99999px !important;
            top: -99999px !important;
          }
        }
      `}
      
      </style>
    </>
  )
}