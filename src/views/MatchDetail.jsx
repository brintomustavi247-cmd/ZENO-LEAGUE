import { useMemo, useState, useRef, useEffect } from 'react'
import { useApp } from '../context'
import { formatTK, formatTKShort, calculateMatchEconomics, getRoomUnlockCountdown, showToast } from '../utils'
import { getMatchUrl } from '../utils/url'
import '../styles/MatchDetail.css'

/* ═══════════════════════════════════════════════════════════════
   ZENO LEAGUE — MATCH DETAIL PREMIUM v1.0
   Ultra-Dark Esports Edition | Profile-Premium.css Theme Matched

   Features:
   ✅ Full profile-premium.css design system match
   ✅ World-class tabs (Overview, Rules, Results, Players)
   ✅ Match timeline/status steps
   ✅ Format info card grid
   ✅ Stream placeholder card
   ✅ Lazy-loaded themed banner
   ✅ Social share dropdown
   ✅ Premium tactile buttons
   ✅ Animated player slots
   ✅ Prize distribution with gold/silver/bronze
   ✅ Room credentials with copy
   ✅ Bilingual rules (EN/BN)
   ✅ Team name input
   ✅ No-refund warning
   ✅ Admin controls
   ═══════════════════════════════════════════════════════════════ */

/* ── helpers ── */

const pad = n => String(n).padStart(2, '0')

function scheduledTime(ts) {
  if (!ts) return { time: 'TBA', date: '' }
  const d = new Date(ts)
  let h = d.getHours()
  const m = pad(d.getMinutes())
  const ap = h >= 12 ? 'PM' : 'AM'
  h = h % 12 || 12
  const day = d.getDate()
  const mons = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  return { time: `${h}:${m} ${ap}`, date: `${day} ${mons[d.getMonth()]}` }
}

function cdFormat(ms) {
  if (ms <= 0) return null
  const h = Math.floor(ms / 3600000)
  const m = Math.floor((ms % 3600000) / 60000)
  const s = Math.floor((ms % 60000) / 1000)
  return `${pad(h)}:${pad(m)}:${pad(s)}`
}

function ordinal(n) {
  const s = ['th','st','nd','rd']
  const v = n % 100
  return n + (s[(v - 20) % 10] || s[v] || s[0])
}

/* ═══════════════════════════════════════════════════════════════
   FREE FIRE MAP-SPECIFIC IMAGES
   ═══════════════════════════════════════════════════════════════ */

const FREE_FIRE_MAP_IMAGES = {
  Bermuda: {
    url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
    gradient: 'linear-gradient(135deg, rgba(6,182,212,0.3) 0%, rgba(8,145,178,0.4) 100%)',
    accentColor: '#06b6d4',
    overlayTint: 'rgba(8, 145, 178, 0.15)',
  },
  Purgatory: {
    url: 'https://images.unsplash.com/photo-1513151233558-d860c540816e?w=1200&q=80',
    gradient: 'linear-gradient(135deg, rgba(239,68,68,0.3) 0%, rgba(220,38,38,0.4) 100%)',
    accentColor: '#ef4444',
    overlayTint: 'rgba(220, 38, 38, 0.15)',
  },
  Kalahari: {
    url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1200&q=80',
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.3) 0%, rgba(217,119,6,0.4) 100%)',
    accentColor: '#f59e0b',
    overlayTint: 'rgba(217, 119, 6, 0.15)',
  },
  Alpine: {
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    gradient: 'linear-gradient(135deg, rgba(99,102,241,0.3) 0%, rgba(79,70,229,0.4) 100%)',
    accentColor: '#6366f1',
    overlayTint: 'rgba(79, 70, 229, 0.15)',
  },
}

const MODE_CONFIG = {
  'Solo': {
    icon: 'fa-solid fa-user-ninja',
    label: 'SOLO SHOWDOWN',
    color: '#61cdff',
    bgGradient: 'linear-gradient(135deg, rgba(97,205,255,0.15), rgba(97,205,255,0.05))',
    borderGradient: 'rgba(97,205,255,0.3)',
  },
  'Duo': {
    icon: 'fa-solid fa-user-group',
    label: 'DUO COMBAT',
    color: '#a78bfa',
    bgGradient: 'linear-gradient(135deg, rgba(167,139,250,0.15), rgba(167,139,250,0.05))',
    borderGradient: 'rgba(167,139,250,0.3)',
  },
  'Squad': {
    icon: 'fa-solid fa-shield-halved',
    label: 'SQUAD WARFARE',
    color: '#06d6a0',
    bgGradient: 'linear-gradient(135deg, rgba(6,214,160,0.15), rgba(6,214,160,0.05))',
    borderGradient: 'rgba(6,214,160,0.3)',
  },
  'Clash Squad': {
    icon: 'fa-solid fa-crosshairs',
    label: 'CLASH SQUAD',
    color: '#FFC857',
    bgGradient: 'linear-gradient(135deg, rgba(255,200,87,0.15), rgba(255,200,87,0.05))',
    borderGradient: 'rgba(255,200,87,0.3)',
  },
}

const RANK_CFG = {
  1: {
    badgeBg: 'linear-gradient(135deg, #FFD700, #FFB800)',
    badgeTxt: '#503E00',
    barBg: 'linear-gradient(to bottom, #FFD700, #FFB800)',
    amtBg: 'linear-gradient(135deg, #FFD700, #FFB800)',
    glow: '0 0 12px rgba(255,215,0,0.15)',
    cls: 'gold',
  },
  2: {
    badgeBg: 'linear-gradient(135deg, #C0C6D9, #8F9BB3)',
    badgeTxt: '#2D3342',
    barBg: 'linear-gradient(to bottom, #C0C6D9, #8F9BB3)',
    amtBg: 'linear-gradient(135deg, #C0C6D9, #8F9BB3)',
    glow: '0 0 12px rgba(192,198,217,0.10)',
    cls: 'silver',
  },
  3: {
    badgeBg: 'linear-gradient(135deg, #FF8A3D, #C76B2F)',
    badgeTxt: '#4A1D00',
    barBg: 'linear-gradient(to bottom, #FF8A3D, #C76B2F)',
    amtBg: 'linear-gradient(135deg, #FF8A3D, #C76B2F)',
    glow: '0 0 12px rgba(255,138,61,0.10)',
    cls: 'bronze',
  },
}

function rankColor(rank) {
  if (rank === 1) return '#FFD700'
  if (rank === 2) return '#C0C6D9'
  if (rank === 3) return '#FF8A3D'
  return null
}

function isTeamMode(mode) {
  return mode === 'Duo' || mode === 'Squad' || mode === 'Clash Squad'
}

/* ── bilingual rules ── */

const RULES_EN = [
  { e: '🔒', t: 'Room ID and Password will be shared 10 minutes before the match starts.' },
  { e: '🎮', t: 'Verify your Game ID correctly when joining the match. Joining with anything other than the correct Game ID will not be allowed.' },
  { e: '📊', t: 'The playing account must be at least Level 40. Lower level accounts will not be permitted.' },
  { e: '📷', t: 'For any match or app issues, always save video or clear proof. Complaints without evidence will not be accepted.' },
  { e: '⏰', t: 'If you enter on time but find 48 spots full or the match already started, record a short video with your phone\'s current time. This video is required for verification. No refund after time passes.' },
  { e: '📱', t: 'After joining the Custom Room, if you cannot enter the match when it starts, ZENO LEAGUE will not be responsible. This usually happens due to network issues.' },
  { e: '⚠️', t: 'Bringing outside players into your joined match and killing them yourself will result in full balance deduction from your account.' },
  { e: '🎯', t: 'Sniper guns are not allowed during the match.' },
  { e: '🛡️', t: 'Victor guns are not allowed during the match.' },
  { e: '💀', t: 'In BR matches, players getting more than 7 kills will only be paid for 7 kills.' },
  { e: '🚗', t: 'No vehicles are allowed during the match. However, if stuck in a difficult zone where running out is impossible, vehicle use is permitted, but you must exit the vehicle before entering the zone.' },
  { e: '🛡️', t: 'If someone kills you by breaking rules, send the video (in-game or recorder) to Support Helpline. Your issue will be resolved.' },
  { e: '🤝', t: 'Teaming up with anyone during the match will result in all involved accounts having zero balance.' },
  { e: '⚒️', t: 'Any player caught using hacks or unfair methods will have their account and all balance banned.' },
  { e: '💰', t: 'Rewards will be added to your account within 10-20 minutes after the match ends.' },
]

const RULES_BN = [
  { e: '🔒', t: 'ম্যাচ শুরু হওয়ার ১০ মিনিট আগে রুম আইডি ও পাসওয়ার্ড দেওয়া হবে।' },
  { e: '🎮', t: 'ম্যাচে যোগ দেওয়ার সময় আপনার গেম আইডি সঠিকভাবে যাচাই করে নিন। গেম আইডির পরিবর্তে অন্য কিছু লিখে যোগ দিলে ম্যাচে অংশগ্রহণ করতে পারবেন না।' },
  { e: '📊', t: 'খেলার জন্য ব্যবহৃত আইডির লেভেল কমপক্ষে ৪০ হতে হবে। এর নিচে লেভেল থাকলে ম্যাচে প্রবেশের অনুমতি দেওয়া হবে না।' },
  { e: '📷', t: 'ম্যাচ বা অ্যাপ সংক্রান্ত যেকোনো সমস্যায় সর্বদা ভিডিও বা স্পষ্ট প্রমাণ সংরক্ষণ করে রাখবেন। প্রমাণ ছাড়া কোনো অভিযোগ গ্রহণ করা হবে না।' },
  { e: '⏰', t: 'নির্ধারিত সময়ের মধ্যে ম্যাচে ঢোকার পর যদি ৪৮ স্পট পূর্ণ বা ম্যাচ ইতিমধ্যে শুরু হয়ে যায়, তাহলে ফোনের বর্তমান সময়সহ একটি ছোট ভিডিও রেকর্ড করুন। এই ভিডিও যাচাইয়ের জন্য প্রয়োজনীয়। সময় পার হয়ে গেলে রিফান্ড দেওয়া হবে না।' },
  { e: '📱', t: 'কাস্টম রুমে যোগ দেওয়ার পর ম্যাচ শুরু হওয়ার সময় কোনো কারণে ম্যাচে প্রবেশ করতে না পারলে ZENO LEAGUE দায়ী থাকবে না। এটি সাধারণত নেটওয়ার্ক সমস্যার কারণে হয়।' },
  { e: '⚠️', t: 'নিজের জয়েন করা ম্যাচে বাইরের প্লেয়ার ঢুকিয়ে নিজে কিল করলে আপনার অ্যাকাউন্টের সমস্ত ব্যালেন্স কেটে নেওয়া হবে।' },
  { e: '🎯', t: 'ম্যাচের মধ্যে কোনো ধরনের Sniper Gun ব্যবহার করা যাবে না।' },
  { e: '🛡️', t: 'ম্যাচের মধ্যে কোনো ধরনের Victor Gun ব্যবহার করা যাবে না।' },
  { e: '💀', t: 'BR ম্যাচে কোনো প্লেয়ার ৭টির বেশি কিল করলে শুধুমাত্র ৭ কিলের পুরস্কার দেওয়া হবে।' },
  { e: '🚗', t: 'ম্যাচ চলাকালীন কোনো ধরনের গাড়ি ব্যবহার করা যাবে না। তবে খুব কঠিন জোনে আটকে পড়ে দৌড়ে বের হওয়া অসম্ভব হলে, সেক্ষেত্রে গাড়ি ব্যবহার করা যাবে, কিন্তু জোনে প্রবেশের আগেই গাড়ি থেকে নেমে যেতে হবে।' },
  { e: '🛡️', t: 'ম্যাচ চলার সময় কেউ নিয়ম ভঙ্গ করে আপনাকে কিল করলে ইন-গেম বা রেকর্ডারের ভিডিও সাপোর্ট হেল্পলাইনে পাঠাবেন। আপনার সমস্যার সমাধান করা হবে।' },
  { e: '🤝', t: 'ম্যাচের মধ্যে কাউ বা সাথে টিম আপ করলে সংশ্লিষ্ট সব অ্যাকাউন্টের ব্যালেন্স শূন্য করে দেওয়া হবে।' },
  { e: '⚒️', t: 'ম্যাচ চলাকালীন কেউ হ্যাক বা অসাধু পদ্ধতি ব্যবহার করে ধরা পড়লে তার অ্যাকাউন্টসহ সমস্ত ব্যালেন্স ব্যান করা হবে।' },
  { e: '💰', t: 'একটি ম্যাচ শেষ হওয়ার ১০-২০ মিনিটের মধ্যে রিওয়ার্ড আপনার অ্যাকাউন্টে যোগ হয়ে যাবে।' },
]

const TABS = [
  { id: 'overview', label: 'Overview', icon: 'fa-solid fa-chart-pie' },
  { id: 'players', label: 'Players', icon: 'fa-solid fa-users' },
  { id: 'rules', label: 'Rules', icon: 'fa-solid fa-scroll' },
  { id: 'results', label: 'Results', icon: 'fa-solid fa-trophy' },
]

/* ── main component ── */

export default function MatchDetail() {
  const { state, dispatch, navigate, isAdmin } = useApp()

  const [activeTab, setActiveTab] = useState('overview')
  const [showPlayers, setShowPlayers] = useState(false)
  const [rulesLang, setRulesLang] = useState('en')
  const [hoveredSlot, setHoveredSlot] = useState(null)
  const [teamName, setTeamName] = useState('')
  const [teamNameError, setTeamNameError] = useState('')
  const [shareMenuOpen, setShareMenuOpen] = useState(false)
  const [copiedLink, setCopiedLink] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const shareMenuRef = useRef(null)

  const unreadNotifications = state.notifications?.filter(n => !n.read).length || 0

  const match = state.matches.find(m => m.id === state.viewParam)
  const cu = state.currentUser
  const team = isTeamMode(match?.mode)

  const mapConfig = FREE_FIRE_MAP_IMAGES[match?.map] || FREE_FIRE_MAP_IMAGES.Bermuda
  const modeConfig = MODE_CONFIG[match?.mode] || MODE_CONFIG['Solo']

  if (!match) {
    return (
      <div className="match-detail-premium">
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <i className="fa-solid fa-ghost" style={{ fontSize: 44, color: '#353437', marginBottom: 16, display: 'block' }} />
          <p style={{ color: '#e8e8e8', fontFamily: 'Plus Jakarta Sans', fontSize: 15, marginBottom: 24 }}>Match not found</p>
          <div onClick={() => navigate('matches')} className="md-btn md-btn-primary" style={{ width: 'auto', padding: '0 32px', display: 'inline-flex' }}>
            <i className="fa-solid fa-arrow-left" style={{ marginRight: 8 }} />Back to Matches
          </div>
        </div>
      </div>
    )
  }

  const eco = useMemo(() => {
    try { return calculateMatchEconomics(match.entryFee, match.maxSlots, match.gameType, match.include4th, match.include5th) }
    catch(e) { return calculateMatchEconomics(match) }
  }, [match])

  const startMs = new Date(match.startTime).getTime()
  const now = state.now
  const dur = match.gameType === 'BR' ? 25 * 60000 : 15 * 60000

  let phase = match.status
  if (phase === 'upcoming' && now >= startMs) phase = 'live'
  if (phase === 'live' && now >= startMs + dur) phase = 'completed'

  const cdStart = startMs - now
  const cdEnd = startMs + dur - now
  const joined = cu && match.participants?.includes(cu.id)
  const joinCount = match.participants?.length || match.joinedCount || 0
  const full = joinCount >= match.maxSlots
  const pct = Math.round((joinCount / match.maxSlots) * 100)
  const roomUnlockMs = startMs - 10 * 60000
  const roomVisible = (isAdmin || joined) && now >= roomUnlockMs && match.roomId
  const roomCd = getRoomUnlockCountdown(match)
  const st = scheduledTime(match.startTime)
  const bannerImg = match.image || mapConfig.url

  const userById = id => state.users.find(u => u.id === id)
  const rules = rulesLang === 'bn' ? RULES_BN : RULES_EN

  const slotItems = Array.from({ length: match.maxSlots }, (_, i) => {
    const pId = match.participants?.[i]
    if (pId === cu?.id) return { key: i, type: 'me' }
    if (pId) return { key: i, type: 'filled', user: userById(pId) }
    return { key: i, type: 'empty' }
  })

  const copy = txt => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(txt)
        .then(() => showToast('Copied to clipboard!', 'success'))
        .catch(() => showToast('Failed to copy', 'error'))
    }
  }

  const handleJoin = () => {
    if (!cu) { navigate('login'); return }
    if (joined || full || phase === 'completed') return
    if (team && !teamName.trim()) {
      setTeamNameError(`Enter your ${match.mode} team name to join`)
      return
    }
    dispatch({ type: 'SHOW_MODAL', payload: { type: 'join-match', data: { matchId: match.id, teamName: team ? teamName.trim() : '' } } })
  }

  const generateShareData = () => {
    const url = getMatchUrl(match.id)
    const text = [
      `🎮 ${match.title}`,
      `💰 Prize: ${formatTK(eco.prizePool)}`,
      `🎫 Entry: ${formatTK(match.entryFee)}`,
      '',
      `Join now on Zeno League!`
    ].join('\n')
    const encodedText = encodeURIComponent(text)
    const encodedUrl = encodeURIComponent(url)
    return {
      url,
      text: `${text}\n\n${url}`,
      whatsapp: `https://wa.me/?text=${encodedText}%0A%0A${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
    }
  }

  const handleShare = async () => {
    const shareData = generateShareData()
    if (navigator.share) {
      try {
        await navigator.share({ title: match.title, text: shareData.text, url: shareData.url })
        return
      } catch (err) {
        if (err.name === 'AbortError') return
      }
    }
    setShareMenuOpen(!shareMenuOpen)
  }

  const handleCopyLink = async () => {
    const { url } = generateShareData()
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(url)
        setCopiedLink(true)
        showToast('Link copied!', 'success')
        setTimeout(() => setCopiedLink(false), 2000)
      } catch (err) {
        showToast('Failed to copy', 'error')
      }
    }
  }

  const handleSocialShare = (platform) => {
    const shareData = generateShareData()
    if (shareData[platform]) window.open(shareData[platform], '_blank', 'noopener,noreferrer')
    setShareMenuOpen(false)
  }

  const handleNotifications = () => navigate('alerts')

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (shareMenuRef.current && !shareMenuRef.current.contains(event.target)) {
        setShareMenuOpen(false)
      }
    }
    if (shareMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [shareMenuOpen])

  const phasePillBg = phase === 'live' ? 'rgba(230,57,70,0.85)' : phase === 'upcoming' ? 'rgba(255,209,102,0.15)' : '#201f21'
  const phasePillFg = phase === 'live' ? '#ffffff' : phase === 'upcoming' ? '#ffd166' : '#9ca3af'
  const phasePillBrd = phase === 'live' ? 'transparent' : (phasePillFg + '50')

  const slotTooltip = hoveredSlot !== null ? slotItems[hoveredSlot] : null

  /* ── Timeline steps ── */
  const getTimelineSteps = () => {
    const steps = [
      { id: 'created', label: 'Created', completed: true },
      { id: 'open', label: 'Open', completed: phase !== 'upcoming' || joinCount > 0 },
      { id: 'live', label: 'Live', completed: phase === 'live' || phase === 'completed' },
      { id: 'results', label: 'Results', completed: phase === 'completed' && match.result },
    ]
    let activeFound = false
    return steps.map(s => {
      const active = !s.completed && !activeFound
      if (active) activeFound = true
      return { ...s, active }
    })
  }

  const timelineSteps = getTimelineSteps()

  /* ── Render ── */
  return (
    <div className="match-detail-premium">
      {/* ═══════ FIXED HEADER ═══════ */}
      <header className="md-header">
        <div className="md-header-left">
          <button className="md-header-btn" onClick={() => navigate('matches')} aria-label="Go Back">
            <i className="fa-solid fa-arrow-left" style={{ fontSize: 14, fontWeight: 900 }} />
          </button>
          <div className="md-header-brand">
            <div className="md-brand-icon">
              <i className="fa-solid fa-gamepad" />
            </div>
            <div className="md-brand-text">
              <span className="md-brand-title">ZENO LEAGUE</span>
              <span className="md-brand-sub">Esports Platform</span>
            </div>
          </div>
        </div>
        <div className="md-header-right" ref={shareMenuRef}>
          <button className={`md-notify-btn ${unreadNotifications > 0 ? 'has-unread' : ''}`} onClick={handleNotifications} aria-label="Notifications">
            <i className={`fa-${unreadNotifications > 0 ? 'solid' : 'regular'} fa-bell`} style={{ fontSize: 17 }} />
            {unreadNotifications > 0 && (
              <span className="md-notify-badge">{unreadNotifications > 9 ? '9+' : unreadNotifications}</span>
            )}
          </button>
          <div className="md-share-wrap">
            <button className={`md-share-btn ${shareMenuOpen ? 'active' : ''}`} onClick={handleShare} aria-label="Share">
              <i className="fa-solid fa-share-nodes" />
            </button>
            {shareMenuOpen && (
              <div className="md-share-dropdown">
                <div className="md-dropdown-header">
                  <i className="fa-solid fa-bullhorn" /> Share Tournament
                </div>
                <div className={`md-copy-row ${copiedLink ? 'copied' : ''}`} onClick={handleCopyLink}>
                  <div className={`md-copy-icon ${copiedLink ? 'copied' : ''}`}>
                    <i className={`fas ${copiedLink ? 'fa-check' : 'fa-link'}`} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="md-copy-title">{copiedLink ? '✓ Copied!' : 'Copy Link'}</div>
                    {!copiedLink && <div className="md-copy-url">{getMatchUrl(match.id)}</div>}
                  </div>
                </div>
                <div style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)', margin: '10px 10px' }} />
                <div className="md-social-grid">
                  <div className="md-social-btn whatsapp" onClick={() => handleSocialShare('whatsapp')}>
                    <i className="fab fa-whatsapp" />
                    <span className="md-social-label">WhatsApp</span>
                  </div>
                  <div className="md-social-btn facebook" onClick={() => handleSocialShare('facebook')}>
                    <i className="fab fa-facebook-f" />
                    <span className="md-social-label">Facebook</span>
                  </div>
                  <div className="md-social-btn telegram" onClick={() => handleSocialShare('telegram')}>
                    <i className="fab fa-telegram" />
                    <span className="md-social-label">Telegram</span>
                  </div>
                  <div className="md-social-btn twitter" onClick={() => handleSocialShare('twitter')}>
                    <i className="fab fa-twitter" />
                    <span className="md-social-label">Twitter</span>
                  </div>
                </div>
                <div className="md-dropdown-footer">
                  <i className="fa-solid fa-lock" style={{ fontSize: 9, opacity: 0.6 }} />
                  Secure sharing • No login required • Instant
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* ═══════ BANNER ═══════ */}
      <div className="md-banner">
        {!imageLoaded && (
          <div className="md-banner-placeholder" style={{ background: mapConfig.gradient }} />
        )}
        <img
          src={bannerImg}
          alt={`${match.map} - ${match.mode}`}
          className={`md-banner-img ${imageLoaded ? 'loaded' : 'loading'}`}
          onLoad={() => setImageLoaded(true)}
          onError={e => {
            if (e.target.src !== FREE_FIRE_MAP_IMAGES.Bermuda.url) {
              e.target.src = FREE_FIRE_MAP_IMAGES.Bermuda.url
            } else {
              e.target.style.display = 'none'
            }
          }}
          loading="lazy"
        />
        <div className="md-banner-overlay" style={{ '--md-banner-tint': mapConfig.overlayTint }} />
        {phase === 'live' && <div className="md-banner-live-glow" />}
        <div className="md-banner-badges">
          <span className={`md-badge status-${phase}`}>
            {phase === 'live' && <span className="md-live-dot" />}
            {phase === 'upcoming' ? 'UPCOMING' : phase === 'live' ? '🔴 LIVE' : 'COMPLETED'}
          </span>
          <span className="md-badge mode" style={{
            '--md-mode-bg': modeConfig.bgGradient,
            '--md-mode-color': modeConfig.color,
            '--md-mode-border': modeConfig.borderGradient,
          }}>
            <i className={modeConfig.icon} style={{ fontSize: 9 }} />
            {modeConfig.label}
          </span>
          <span className="md-badge map" style={{
            '--md-map-color': mapConfig.accentColor,
            '--md-map-border': mapConfig.accentColor + '33',
          }}>
            📍 {match.map}
          </span>
        </div>
        <div className="md-banner-content">
          <h1 className="md-banner-title">{match.title}</h1>
          {st.date && (
            <div className="md-banner-meta">
              <i className="fa-regular fa-calendar" />
              <span>
                {phase === 'upcoming' && cdStart > 0
                  ? `⏱ Starts in ${cdFormat(cdStart)}`
                  : phase === 'live' && cdEnd > 0
                    ? `🔴 Live — ends in ${cdFormat(cdEnd)}`
                    : `📅 ${st.date} · ${st.time}`}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* ═══════ CONTENT ═══════ */}
      <div className="md-content">
        {/* Countdown */}
        {phase === 'upcoming' && cdStart > 0 && (
          <div className="md-countdown" style={{
            '--md-countdown-border': mapConfig.accentColor + '22',
            '--md-countdown-color': mapConfig.accentColor,
          }}>
            <i className="fa-solid fa-clock" />
            <div style={{ minWidth: 0 }}>
              <div className="md-countdown-label">Starts in</div>
              <div className="md-countdown-time">{cdFormat(cdStart)}</div>
            </div>
          </div>
        )}

        {/* Live Pill */}
        {phase === 'live' && (
          <div className="md-live-pill">
            <span className="md-live-pill-dot" />
            <span className="md-live-pill-text">🔴 Match is LIVE NOW!</span>
          </div>
        )}

        {/* Timeline */}
        <div className="md-timeline">
          {timelineSteps.map((step, i) => (
            <div key={step.id} className="md-timeline-step">
              <div className={`md-timeline-dot ${step.completed ? 'completed' : step.active ? 'active' : 'pending'}`}>
                {step.completed ? <i className="fa-solid fa-check" style={{ fontSize: 10 }} /> : i + 1}
              </div>
              <span className={`md-timeline-label ${step.completed ? 'completed' : step.active ? 'active' : ''}`}>
                {step.label}
              </span>
            </div>
          ))}
        </div>

        {/* Format Info Grid */}
        <div className="md-format-grid">
          {[
            { icon: 'fa-solid fa-coins', label: 'Entry Fee', value: formatTK(match.entryFee), color: '#FFC857', bg: 'rgba(255,200,87,0.08)' },
            { icon: 'fa-solid fa-trophy', label: 'Prize Pool', value: formatTK(eco.prizePool), color: mapConfig.accentColor, bg: mapConfig.accentColor + '15' },
            { icon: 'fa-solid fa-crosshairs', label: 'Per Kill', value: formatTK(match.perKill || 0), color: '#06d6a0', bg: 'rgba(6,214,160,0.08)' },
            { icon: 'fa-solid fa-users', label: 'Slots', value: `${match.maxSlots - joinCount} / ${match.maxSlots}`, color: '#61cdff', bg: 'rgba(97,205,255,0.08)' },
            { icon: 'fa-solid fa-layer-group', label: 'Game Type', value: match.gameType || 'BR', color: '#a78bfa', bg: 'rgba(167,139,250,0.08)' },
            { icon: 'fa-solid fa-clock', label: 'Duration', value: match.gameType === 'BR' ? '25 min' : '15 min', color: '#f59e0b', bg: 'rgba(245,158,11,0.08)' },
          ].map((s, i) => (
            <div key={i} className="md-format-cell">
              <div className="md-format-icon" style={{ background: s.bg, color: s.color }}>
                <i className={s.icon} />
              </div>
              <div className="md-format-value" style={{ color: s.color }}>{s.value}</div>
              <div className="md-format-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="md-progress-wrap">
          <div className="md-progress-track">
            <div className="md-progress-fill" style={{
              width: pct + '%',
              '--md-progress-bg': full ? '#06d6a0' : `linear-gradient(90deg, ${mapConfig.accentColor}, #a78bfa)`,
              '--md-progress-glow': full ? 'rgba(6,214,160,0.3)' : mapConfig.accentColor + '4d',
            }} />
          </div>
          <div className="md-progress-meta">
            <span>{joinCount}/{match.maxSlots} joined</span>
            <span className="md-progress-pct" style={{ '--md-progress-color': mapConfig.accentColor }}>{pct}%</span>
          </div>
        </div>
      </div>

      {/* ═══════ TABS ═══════ */}
      <nav style={{ padding: '0 16px', marginBottom: '16px', position: 'relative', zIndex: 2 }}>
        <div className="md-tabs">
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={`md-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <i className={tab.icon} style={{ marginRight: 6, fontSize: 11 }} />
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ═══════ TAB PANELS ═══════ */}
      <div style={{ padding: '0 16px', position: 'relative', zIndex: 2 }}>

        {/* ─── OVERVIEW TAB ─── */}
        {activeTab === 'overview' && (
          <>
            {/* Stream Card (if live) */}
            {phase === 'live' && (
              <div className="md-stream-card">
                <div className="md-stream-icon">
                  <i className="fa-brands fa-youtube" />
                </div>
                <div className="md-stream-title">🔴 Live Stream Available</div>
                <div className="md-stream-hint">Watch the match live on our official channel</div>
              </div>
            )}

            {/* Room Credentials */}
            {joined && (
              <div style={{ marginBottom: 20 }}>
                <div className="md-section-head">
                  <span><i className="fa-solid fa-key" style={{ marginRight: 8, color: '#7C3AED' }} />Room Credentials</span>
                </div>
                <div className="md-creds-card" style={{ '--md-creds-border': roomVisible ? '#06d6a0' : '#FFC857' }}>
                  {roomVisible ? (
                    <div className="md-creds-unlocked">
                      <div className="md-creds-banner">
                        <i className="fa-solid fa-lock-open" />
                        <span className="md-creds-banner-text">🔓 Unlocked — Join in Free Fire now</span>
                      </div>
                      <div className="md-creds-grid">
                        {[
                          { label: 'Room ID', value: match.roomId, color: '#61cdff' },
                          { label: 'Password', value: match.roomPassword, color: '#06d6a0' },
                        ].map((item, idx) => (
                          <div key={idx} className="md-cred-item">
                            <div className="md-cred-label">{item.label}</div>
                            <div className="md-cred-row">
                              <span className="md-cred-value" style={{ '--md-cred-color': item.color }}>{item.value || 'Not set'}</span>
                              <button className="md-cred-copy" onClick={() => copy(item.value)} aria-label={`Copy ${item.label}`}>
                                <i className="fa-regular fa-copy" style={{ fontSize: 11 }} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="md-creds-locked">
                      <i className="fa-solid fa-hourglass-half" />
                      <div className="md-creds-locked-label">Unlocks 10 min before match</div>
                      {roomCd && roomCd !== 'UNLOCKED' && (
                        <div className="md-creds-locked-time">{roomCd.replace('Unlocks in ', '')}</div>
                      )}
                      <div className="md-creds-locked-hint">Stay on this page — credentials appear automatically</div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Prize Distribution */}
            <div style={{ marginBottom: 20 }}>
              <div className="md-section-head">
                <span><i className="fa-solid fa-coins" style={{ marginRight: 8, color: '#7C3AED' }} />💰 Prize Distribution</span>
              </div>
              {eco.prizes && eco.prizes.length > 0 ? (
                <div className="md-prize-list">
                  {eco.prizes.map((p) => {
                    const cfg = RANK_CFG[p.rank]
                    const isTop3 = !!cfg
                    return (
                      <div key={p.rank} className={`md-prize-row ${isTop3 ? 'top3' : ''}`} style={{
                        '--md-prize-bar': cfg?.barBg,
                        '--md-prize-glow': cfg?.glow,
                      }}>
                        <div className="md-prize-rank">
                          <span className={`md-prize-badge ${cfg?.cls || 'other'}`}>{ordinal(p.rank)}</span>
                          <span className="md-prize-label">Place</span>
                        </div>
                        <span className={`md-prize-amount ${cfg?.cls || ''}`}>{formatTK(p.amount)}</span>
                      </div>
                    )
                  })}
                  {match.perKill > 0 && (
                    <div className="md-prize-kill">
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div className="md-prize-kill-icon">
                          <i className="fa-solid fa-crosshairs" />
                        </div>
                        <span style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 500, fontSize: 14, color: '#bdc8cf' }}>Per Kill</span>
                      </div>
                      <span style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 16, color: '#61cdff' }}>{formatTK(match.perKill)}</span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="md-card">
                  <div className="md-empty">
                    <i className="fa-solid fa-users-slash" />
                    <div>Prize breakdown updates when players join</div>
                  </div>
                </div>
              )}
            </div>

            {/* Admin Buttons */}
            {isAdmin && phase !== 'completed' && (
              <div className="md-admin-bar">
                <button className="md-admin-btn room" onClick={() => dispatch({ type: 'SHOW_MODAL', payload: { type: 'room', data: { matchId: match.id } } })}>
                  <i className="fa-solid fa-key" /> Set Room
                </button>
                <button className="md-admin-btn result" onClick={() => dispatch({ type: 'SHOW_MODAL', payload: { type: 'result', data: { matchId: match.id } } })}>
                  <i className="fa-solid fa-trophy" /> Submit Result
                </button>
              </div>
            )}
            {isAdmin && phase === 'completed' && !match.result && (
              <button className="md-admin-btn result full" onClick={() => dispatch({ type: 'SHOW_MODAL', payload: { type: 'result', data: { matchId: match.id } } })}>
                <i className="fa-solid fa-trophy" /> Submit Result
              </button>
            )}

            {/* Team Name Input */}
            {team && !joined && phase !== 'completed' && !full && cu && (
              <div className="md-team-card">
                <div className="md-section-head" style={{ marginBottom: 10 }}>
                  <span>{match.mode} Team Name — Required</span>
                </div>
                <div className="md-team-hint">
                  <i className="fa-solid fa-people-group" />
                  Enter your {match.mode} team name before joining. This will be shown in match results.
                </div>
                <div className="md-input-wrap">
                  <i className="fa-solid fa-shield-halved" />
                  <input
                    type="text"
                    placeholder={`e.g. ${match.mode === 'Squad' ? 'Dragon Squad' : 'Duo Kings'}`}
                    value={teamName}
                    onChange={e => { setTeamName(e.target.value); setTeamNameError('') }}
                    maxLength={30}
                    className={`md-input ${teamNameError ? 'error' : ''}`}
                  />
                  {teamName && (
                    <button className="md-input-clear" onClick={() => setTeamName('')} aria-label="Clear">
                      <i className="fa-solid fa-xmark" style={{ fontSize: 10 }} />
                    </button>
                  )}
                </div>
                {teamNameError && (
                  <div className="md-input-error">
                    <i className="fa-solid fa-circle-exclamation" style={{ fontSize: 11, flexShrink: 0 }} />
                    {teamNameError}
                  </div>
                )}
                {teamName.trim() && !teamNameError && (
                  <div className="md-input-success">
                    <i className="fa-solid fa-check-circle" style={{ fontSize: 12 }} />
                    Team: <strong>"{teamName.trim()}"</strong>
                  </div>
                )}
              </div>
            )}

            {/* No Refund Warning */}
            {cu && !joined && !full && phase !== 'completed' && (
              <div className="md-refund-box">
                <div className="md-refund-header">
                  <i className="fa-solid fa-shield-halved" />
                  <span>⚠️ No Refund Policy</span>
                </div>
                <div className="md-refund-body">
                  <p>Entry fee is NON-REFUNDABLE once you join this match.</p>
                  <div className="md-refund-tags">
                    {['No-show', 'Disconnect', 'Match lost', 'Cannot leave'].map(tag => (
                      <span key={tag} className="md-refund-tag">
                        <i className="fa-solid fa-xmark" /> {tag}
                      </span>
                    ))}
                  </div>
                  <p className="md-refund-note">
                    <i className="fa-solid fa-circle-info" style={{ fontSize: 9 }} />
                    Only admin-cancelled matches get full refund
                  </p>
                </div>
              </div>
            )}

            {/* Action Bar */}
            <div style={{ marginBottom: 20 }}>
              {!cu ? (
                <button className="md-btn md-btn-primary" onClick={() => navigate('login')}>
                  <i className="fa-solid fa-right-to-bracket" style={{ fontSize: 16 }} />
                  Login to Join
                </button>
              ) : joined ? (
                <div className="md-btn md-btn-primary" style={{
                  background: '#1b1b1d',
                  border: '1px solid rgba(6,214,160,0.2)',
                  color: '#06d6a0',
                  cursor: 'default',
                  boxShadow: 'none',
                }}>
                  <i className="fa-solid fa-circle-check" />
                  You have joined{team && cu?.teamName ? ` — ${cu.teamName}` : ''}
                </div>
              ) : full ? (
                <div className="md-btn md-btn-primary" style={{
                  background: '#1b1b1d',
                  border: '1px solid rgba(62,72,78,0.15)',
                  color: '#889299',
                  cursor: 'default',
                  boxShadow: 'none',
                }}>
                  <i className="fa-solid fa-ban" />
                  Slots Full
                </div>
              ) : phase === 'completed' ? (
                <div className="md-btn md-btn-primary" style={{
                  background: '#1b1b1d',
                  border: '1px solid rgba(62,72,78,0.15)',
                  color: '#555555',
                  cursor: 'default',
                  boxShadow: 'none',
                }}>
                  <i className="fa-solid fa-flag-checkered" />
                  Completed
                </div>
              ) : (
                <button className="md-btn md-btn-primary" onClick={handleJoin}>
                  <i className="fa-solid fa-bolt" style={{ fontSize: 16 }} />
                  ⚡ Join Battle — {formatTK(match.entryFee)}
                </button>
              )}
            </div>
          </>
        )}

        {/* ─── PLAYERS TAB ─── */}
        {activeTab === 'players' && (
          <>
            <button className="md-slots-toggle" onClick={() => setShowPlayers(!showPlayers)}>
              <i className="fa-solid fa-users" />
              {showPlayers ? '▼ HIDE PLAYERS' : '▲ VIEW JOINED PLAYERS'}
            </button>

            {showPlayers && (
              <div className="md-card" style={{ marginBottom: 20 }}>
                <div className="md-card-title">
                  <i className="fa-solid fa-users" /> Player Slots — {joinCount}/{match.maxSlots}
                </div>
                <div className="md-slots-grid">
                  {slotItems.map(s => (
                    <div
                      key={s.key}
                      onClick={() => setHoveredSlot(hoveredSlot === s.key ? null : s.key)}
                      className={`md-slot ${s.type}`}
                    >
                      {s.type === 'me' ? 'YOU' : s.type === 'filled' ? (s.user?.ign?.substring(0, 5) || '#') : (s.key + 1)}
                    </div>
                  ))}
                </div>

                {slotTooltip && slotTooltip.type !== 'empty' && (
                  <div className="md-slot-tooltip">
                    <div className={`md-slot-tooltip-avatar ${slotTooltip.type}`}>
                      <i className="fa-solid fa-user" style={{ fontSize: 14 }} />
                    </div>
                    <div className="md-slot-tooltip-info">
                      <div className="md-slot-tooltip-name" style={{ color: slotTooltip.type === 'me' ? '#61cdff' : '#e8e8e8' }}>
                        {slotTooltip.type === 'me'
                          ? (cu?.displayName || cu?.ign || 'You')
                          : (slotTooltip.user?.displayName || slotTooltip.user?.ign || 'Player')}
                      </div>
                      <div className="md-slot-tooltip-meta">
                        {slotTooltip.type === 'me' ? (
                          <span>Slot #{slotTooltip.key + 1} — Joined</span>
                        ) : (
                          <>
                            <span>IGN: {slotTooltip.user?.ign || 'N/A'}</span>
                            {team && <span style={{ color: '#444444' }}>|</span>}
                            {team && <span style={{ color: '#FFC857' }}>Team: {slotTooltip.user?.teamName || 'N/A'}</span>}
                          </>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); setHoveredSlot(null) }}
                      style={{
                        width: 28, height: 28, borderRadius: 6,
                        background: 'rgba(255,255,255,0.04)', display: 'flex',
                        alignItems: 'center', justifyContent: 'center',
                        cursor: 'pointer', flexShrink: 0, border: 'none', color: '#555',
                      }}
                    >
                      <i className="fa-solid fa-xmark" style={{ fontSize: 11 }} />
                    </button>
                  </div>
                )}

                <div className="md-slot-legend">
                  {[
                    { bg: 'rgba(97,205,255,0.15)', bd: 'rgba(97,205,255,0.35)', label: 'You' },
                    { bg: 'rgba(167,139,250,0.10)', bd: 'rgba(167,139,250,0.20)', label: 'Filled' },
                    { bg: '#201f21', bd: 'rgba(62,72,78,0.15)', label: 'Open' },
                  ].map(l => (
                    <div key={l.label} className="md-slot-legend-item">
                      <div className="md-slot-legend-box" style={{ background: l.bg, border: `1px solid ${l.bd}` }} />
                      {l.label}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* ─── RULES TAB ─── */}
        {activeTab === 'rules' && (
          <>
            <div className="md-rules-header">
              <span className="md-rules-title">
                {rulesLang === 'bn' ? '📜 ম্যাচ নিয়ম' : '📜 Match Rules'}
              </span>
              <div className="md-lang-toggle">
                {[{ code: 'en', label: 'EN' }, { code: 'bn', label: 'বাং' }].map(l => (
                  <button
                    key={l.code}
                    className={`md-lang-btn ${rulesLang === l.code ? 'active' : ''}`}
                    onClick={() => setRulesLang(l.code)}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {rules.map((r, i) => (
                <div key={i} className="md-rule-item">
                  <span className="md-rule-emoji">{r.e}</span>
                  <span className="md-rule-text">{r.t}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ─── RESULTS TAB ─── */}
        {activeTab === 'results' && (
          <>
            {phase === 'completed' && match.result && match.result.players ? (
              <>
                <div className="md-section-head">
                  <span><i className="fa-solid fa-trophy" style={{ marginRight: 8, color: '#7C3AED' }} />🏆 Match Results</span>
                </div>
                <div className="md-result-list">
                  {match.result.players.map((p, i) => {
                    const rc = rankColor(p.rank || p.position)
                    const isTop3 = !!rc
                    const isMe = cu && p.ign === cu.ign
                    const last = i === match.result.players.length - 1
                    const rankCls = p.rank === 1 ? 'gold' : p.rank === 2 ? 'silver' : p.rank === 3 ? 'bronze' : 'other'
                    return (
                      <div key={i} className={`md-result-row ${isMe ? 'is-me' : ''} ${isTop3 ? 'top' + p.rank : ''}`}>
                        <div className="md-result-player">
                          <span className={`md-result-rank ${rankCls}`}>{ordinal(p.rank || p.position)}</span>
                          <div className="md-result-info">
                            <div className={`md-result-name ${isMe ? 'is-me' : ''}`}>
                              {p.teamName && <span className="md-result-team">{p.teamName}</span>}
                              {p.teamName && p.ign ? ' — ' : ''}
                              {p.ign}{isMe ? ' (You)' : ''}
                            </div>
                            <div className="md-result-meta">
                              {team ? (
                                <>
                                  <i className="fa-solid fa-star" style={{ color: '#FFC857' }} />
                                  <span>{p.points != null ? p.points : p.kills} pts</span>
                                </>
                              ) : (
                                <>
                                  <i className="fa-solid fa-crosshairs" />
                                  <span>{p.kills} kills</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        {p.prize != null && (
                          <span className={`md-result-prize ${rankCls}`}>{formatTK(p.prize)}</span>
                        )}
                      </div>
                    )
                  })}
                </div>
                {match.result.submittedAt && (
                  <div className="md-result-submitted">
                    Submitted {match.result.submittedAt}{match.result.method === 'screenshot' ? ' via screenshot' : ' manually'}
                  </div>
                )}
              </>
            ) : phase === 'completed' && (!match.result || !match.result.players) ? (
              <div className="md-card" style={{ marginBottom: 20 }}>
                <div className="md-empty">
                  <i className="fa-solid fa-hourglass-half" />
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#bdc8cf', marginBottom: 4 }}>Results Pending</div>
                  <div style={{ fontSize: 12, color: '#555555' }}>Admin hasn't submitted results yet.</div>
                </div>
              </div>
            ) : (
              <div className="md-card" style={{ marginBottom: 20 }}>
                <div className="md-empty">
                  <i className="fa-solid fa-clock" />
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#bdc8cf', marginBottom: 4 }}>Match Not Completed</div>
                  <div style={{ fontSize: 12, color: '#555555' }}>Results will appear here after the match ends.</div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
