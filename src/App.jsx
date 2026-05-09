import { useState, useEffect } from 'react'
import { AppProvider, useApp } from './context'
import { firebaseReady } from './firebase'
import Sidebar from './components/Sidebar'
import MobileNav from './components/MobileNav'
import RightPanel from './components/RightPanel'
import Modal from './components/Modal'
import Toast from './components/Toast'
import Dashboard from './views/Dashboard'
import Matches from './views/Matches'
import MatchDetail from './views/MatchDetail'
import Wallet from './views/Wallet'
import Leaderboard from './views/Leaderboard'
import Notifications from './views/Notifications'
import Admin from './views/Admin'
import Login from './views/Login'
import Profile from './views/Profile'
import Settings from './views/Settings'
import './admin-premium.css'

function LoadingSkeleton() {
  return (
    <div style={{ padding: 24 }}>
      <div className="skeleton" style={{ width: 220, height: 32, marginBottom: 24, borderRadius: 8 }}></div>
      <div className="skeleton" style={{ width: '100%', height: 280, marginBottom: 28, borderRadius: 12 }}></div>
      <div className="skeleton" style={{ width: 160, height: 22, marginBottom: 18, borderRadius: 6 }}></div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="skeleton" style={{ height: 180, borderRadius: 12 }}></div>
        ))}
      </div>
    </div>
  )
}

function AuthGuard({ children }) {
  const { state } = useApp()

  if (!state.isLoggedIn) {
    const mode = state.currentView === 'admin-login' ? 'admin' : 'user'
    return <Login mode={mode} />
  }
  return children
}

function isAdminView(view) {
  return view && view.startsWith('admin')
}

function ViewRouter() {
  const { state, dispatch, isAdmin } = useApp()
  const { currentView, viewParam, loading, sidebarOpen, modal } = state
  const admin = isAdminView(currentView)

  // ═══ PHASE 4.7: Offline detection ═══
  const [offline, setOffline] = useState(typeof navigator !== 'undefined' ? !navigator.onLine : false)

  useEffect(() => {
    const goOffline = () => setOffline(true)
    const goOnline = () => setOffline(false)
    window.addEventListener('offline', goOffline)
    window.addEventListener('online', goOnline)
    return () => {
      window.removeEventListener('offline', goOffline)
      window.removeEventListener('online', goOnline)
    }
  }, [])

  // ═══ PHASE 4.6: Android back button — modal/sidebar close on back press ═══
  useEffect(() => {
    if (state.modal) {
      window.history.pushState({ modalOpen: true }, '')
    }
  }, [state.modal])

  useEffect(() => {
    if (state.sidebarOpen && !state.modal) {
      window.history.pushState({ sidebarOpen: true }, '')
    }
  }, [state.sidebarOpen, state.modal])

  useEffect(() => {
    const onPopState = () => {
      if (state.modal) {
        window.history.pushState({ modalOpen: true }, '')
        dispatch({ type: 'CLOSE_MODAL' })
      } else if (state.sidebarOpen) {
        window.history.pushState({ sidebarOpen: true }, '')
        dispatch({ type: 'CLOSE_SIDEBAR' })
      }
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [state.modal, state.sidebarOpen, dispatch])

  function renderView() {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />
      case 'matches':
        return <Matches />
      case 'match-detail':
        return <MatchDetail matchId={viewParam} />
      case 'wallet':
        return <Wallet />
      case 'leaderboard':
        return <Leaderboard />
      case 'notifications':
        return <Notifications />
      case 'profile':
        return <Profile />
      case 'settings':
        return <Settings />

      case 'admin-overview':
      case 'admin-create':
      case 'admin-rooms':
      case 'admin-results':
      case 'admin-users':
      case 'admin-finance':
      case 'admin-dashboard':
      case 'admin-matches':
      case 'admin-payments':
      case 'admin-owners':
      case 'admin-activity':
      case 'admin-profit':
      case 'admin-add-money':
        if (!isAdmin) return <Dashboard />
        return <Admin />

      case 'login':
      case 'admin-login':
        return <Login mode={currentView === 'admin-login' ? 'admin' : 'user'} />

      default:
        return <Dashboard />
    }
  }

  // ═══ PHASE 4.7: Offline banner component ═══
  const offlineBanner = offline && (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999,
      background: 'linear-gradient(90deg, #fbbf24, #f59e0b)',
      color: '#1a1a1a',
      padding: '8px 16px',
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, fontWeight: 700,
      letterSpacing: '0.05em', textTransform: 'uppercase',
      boxShadow: '0 2px 16px rgba(251,191,36,0.3)',
    }}>
      <i className="fa-solid fa-wifi" style={{ fontSize: 13 }} />
      <span>You are offline — Check your internet connection</span>
    </div>
  )

  if (loading) {
    return (
      <div style={{ display: 'flex', minHeight: '100dvh', paddingTop: offline ? 36 : 0 }}>
        {offlineBanner}
        <Sidebar />
        <div style={{ flex: 1, minWidth: 0, padding: '0 16px', overflow: 'hidden' }}>
          <LoadingSkeleton />
        </div>
      </div>
    )
  }

  return (
    <div style={{
      display: 'flex',
      minHeight: '100dvh',
      position: 'relative',
      paddingTop: offline ? 36 : 0,
    }}>
      {offlineBanner}

      <Sidebar />

      {sidebarOpen && (
        <div
          onClick={() => dispatch({ type: 'CLOSE_SIDEBAR' })}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(0,0,0,0.6)',
          }}
        />
      )}

      <main
        key={admin ? 'admin' : (currentView + viewParam)}
        style={{
          flex: 1,
          minWidth: 0,
          maxWidth: '100%',
          overflowX: 'hidden',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div
          className="main-content"
          style={{
            padding: '16px',
            paddingBottom: '80px',
            maxWidth: admin ? 1400 : 900,
            margin: '0 auto',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          {renderView()}
        </div>
      </main>

      <RightPanel />
      <MobileNav />
      <Modal />
      <Toast />
    </div>
  )
}
export default function App() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // ✅ KEY FIX: Wait for persistence to be ready BEFORE rendering anything
    // This guarantees onAuthStateChanged in context.jsx fires AFTER localStorage is enabled
    firebaseReady.then(() => {
      setReady(true)
    })
  }, [])

  if (!ready) {
    return (
      <div style={{ display: 'flex', minHeight: '100dvh', alignItems: 'center', justifyContent: 'center', background: '#0e0e10' }}>
        <div style={{ textAlign: 'center' }}>
         <img src="/logo.png" alt="ZENO LEAGUE" style={{ height: 80, marginBottom: 16, objectFit: 'contain' }} />
<div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 800, color: '#00f0ff', letterSpacing: 4, marginBottom: 12 }}>ZENO LEAGUE</div>
<div style={{ fontSize: 12, color: '#555', fontFamily: 'var(--font-body)' }}>Checking session...</div>
        </div>
      </div>
    )
  }

  return (
    <AppProvider>
      <AuthGuard>
        <ViewRouter />
      </AuthGuard>
    </AppProvider>
  )
}