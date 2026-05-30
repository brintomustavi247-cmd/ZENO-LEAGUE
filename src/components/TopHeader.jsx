import { useEffect, useState, useCallback } from 'react'
import { useApp } from '../context'
import { useLanguage } from '../hooks/useLanguage'
import '../styles/header-premium.css'

export default function TopHeader({ onMenuClick }) {
  const { state, navigate, dispatch } = useApp()
  const { lang, toggleLang } = useLanguage()
  const [isMobile, setIsMobile] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const unreadNotifications = state.notifications?.filter(n => !n.read).length || 0

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 769)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const triggerHaptic = useCallback((pattern = 10) => {
    if ('vibrate' in navigator) navigator.vibrate(pattern)
  }, [])

  if (!isMobile) return null

  return (
    <header className={`zh-root ${scrolled ? 'zh-scrolled' : ''}`}>
      <div className="zh-glass" />
      <div className="zh-accent-line" />

      <div className="zh-inner">
        {/* LEFT — Hamburger */}
        <div className="zh-side zh-left">
          <button
            className="zh-btn zh-btn-ham"
            onClick={(e) => {
              triggerHaptic(12)
              onMenuClick?.(e)
            }}
            aria-label="Open menu"
          >
            <span className="zh-btn-glow" />
            <span className="zh-btn-shine" />
            <i className="fa-solid fa-bars" />
          </button>
        </div>

        {/* CENTER — Logo */}
        <div className="zh-center">
          <img src="/logo.png" alt="" className="zh-logo-img" draggable={false} />
          <div className="zh-logo-text">
            <span className="zh-name">ZENO LEAGUE</span>
            <span className="zh-tag">ESPORTS</span>
          </div>
        </div>

        {/* RIGHT — Bell + Lang */}
        <div className="zh-side zh-right">
          <button
            className={`zh-btn zh-btn-bell ${unreadNotifications > 0 ? 'zh-unread' : ''}`}
            onClick={() => {
              triggerHaptic(unreadNotifications > 0 ? [12, 40, 12] : 10)
              navigate('notifications')
            }}
            aria-label={`Notifications ${unreadNotifications > 0 ? `(${unreadNotifications})` : ''}`}
          >
            <span className="zh-btn-glow" />
            <span className="zh-btn-shine" />
            <i className="fa-solid fa-bell" />
            {unreadNotifications > 0 && (
              <span className="zh-badge">
                {unreadNotifications > 99 ? '99+' : unreadNotifications}
              </span>
            )}
          </button>

          <button
            className="zh-btn zh-btn-lang"
            onClick={() => {
              triggerHaptic(8)
              const nextLang = lang === 'bn' ? 'en' : 'bn'
              toggleLang()
              dispatch({ type: 'SET_LANGUAGE', payload: nextLang })
            }}
            aria-label="Switch language"
            title={lang === 'en' ? 'বাংলায় পরিবর্তন করুন' : 'Switch to English'}
          >
            <span className="zh-btn-glow" />
            <span className="zh-btn-shine" />
            <span className="zh-lang-label">{lang === 'en' ? 'EN' : 'বাং'}</span>
          </button>
        </div>
      </div>

      <div className="zh-fade-bottom" />
    </header>
  )
}