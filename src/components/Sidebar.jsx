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
      <div className="sidebar-logo" style={{ background: 'none', boxShadow: 'none', overflow: 'visible' }}>
        <img src="/logo.png" alt="ZL" style={{ width: 40, height: 40, objectFit: 'contain' }} />
      </div>

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