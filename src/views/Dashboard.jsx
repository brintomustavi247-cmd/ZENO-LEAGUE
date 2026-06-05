import { useState, useEffect, memo } from 'react'
import { useApp } from '../context'
import { useLanguage } from '../hooks/useLanguage'
import MatchCard from '../components/MatchCard'
import { formatTK, getMatchPhase, getMatchCountdown } from '../utils'

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

// ═══════════════════════════════════════════════════════════════════════
//  HERO BANNER — Flat, zero animations
// ═══════════════════════════════════════════════════════════════════════
const HeroBannerV4 = memo(function HeroBannerV4({ hero, heroPhase, heroCountdown, heroJoined, heroTime, onJoin, onNavigate, t }) {
  const [countdown, setCountdown] = useState(heroCountdown)

  useEffect(() => {
    if (heroPhase === 'live' || heroPhase === 'completed') return
    const interval = setInterval(() => {
      setCountdown(prev => prev > 1000 ? prev - 1000 : 0)
    }, 1000)
    return () => clearInterval(interval)
  }, [heroPhase, heroCountdown])

  if (!hero) return null
  const cd = cdFormat(countdown)

  return (
    <div className="hero-banner-v4" onClick={() => onNavigate(`match-detail/${hero.id}`)}>
      <div className="hero-content-v4">
        <div className="hero-badge-row-v4">
          {heroPhase === 'live' ? (
            <span className="zeno-badge zeno-badge-live">
              <span className="live-dot" /> {t('matches.live_now')}
            </span>
          ) : (
            <span className="zeno-badge zeno-badge-upcoming">
              <span className="live-dot" style={{ background: '#8b5cf6', animation: 'none' }} /> {t('matches.upcoming')}
            </span>
          )}
          <span className="zeno-badge zeno-badge-prize">
            <i className="fa-solid fa-trophy" /> {formatTK(hero.prizePool || 0)}
          </span>
        </div>

        <h2 className="hero-title-v4">{hero.title || 'Clutch Arena'}</h2>
        <p className="hero-subtitle-v4">Tournament</p>

        <div className="hero-meta-v4">
          <span className="meta-pill-v4"><i className="fa-solid fa-gamepad" /> {hero.mode || 'Solo'}</span>
          <span className="meta-pill-v4"><i className="fa-solid fa-map" /> {hero.map || 'Bermuda'}</span>
          <span className="meta-pill-v4"><i className="fa-regular fa-clock" /> {heroTime.time}</span>
          <span className="meta-pill-v4"><i className="fa-solid fa-users" /> {hero.participants?.length || 0}/{hero.maxPlayers || 50}</span>
        </div>

        {cd && (
          <div className="hero-countdown-v4">
            <div className="countdown-item"><span>{cd.split(':')[0]}</span><label>HRS</label></div>
            <span className="countdown-sep">:</span>
            <div className="countdown-item"><span>{cd.split(':')[1]}</span><label>MIN</label></div>
            <span className="countdown-sep">:</span>
            <div className="countdown-item"><span>{cd.split(':')[2]}</span><label>SEC</label></div>
          </div>
        )}

        <div className="hero-actions-v4">
          <button
            className="btn-zeno btn-zeno-primary"
            onClick={(e) => { e.stopPropagation(); if (!heroJoined) onJoin(hero.id) }}
            disabled={heroJoined}
          >
            {heroJoined ? <><i className="fa-solid fa-check" /> Joined</> : <><i className="fa-solid fa-bolt" /> {t('matches.join_match')}</>}
          </button>
          <button className="btn-zeno btn-zeno-ghost" onClick={(e) => e.stopPropagation()}>
            <i className="fa-solid fa-share-nodes" />
          </button>
        </div>
      </div>
    </div>
  )
})

// ═══════════════════════════════════════════════════════════════════════
//  SIMPLE STAT — No SVG, no animated counter, instant
// ═══════════════════════════════════════════════════════════════════════
const SimpleStatV4 = memo(function SimpleStatV4({ value, label, color, icon, suffix = '' }) {
  return (
    <div className="simple-stat-v4">
      <i className={icon} style={{ color, fontSize: 16 }} />
      <span className="simple-stat-value" style={{ color }}>{value}{suffix}</span>
      <span className="simple-stat-label">{label}</span>
    </div>
  )
})

// ═══════════════════════════════════════════════════════════════════════
//  WALLET — Flat
// ═══════════════════════════════════════════════════════════════════════
const WalletVaultV4 = memo(function WalletVaultV4({ balance, lockedBalance, onDeposit, onWithdraw, onNavigate, t }) {
  return (
    <div className="zeno-card zeno-card-interactive" onClick={() => onNavigate('wallet')}>
      <div className="wallet-header-v4">
        <div className="wallet-label"><i className="fa-solid fa-wallet" /> {t('wallet.total_balance')}</div>
        <div className="wallet-locked"><i className="fa-solid fa-lock" /> {formatTK(lockedBalance)} locked</div>
      </div>
      <div className="wallet-balance-v4">
        <span className="wallet-amount">{formatTK(balance)}</span>
        <span className="wallet-currency">TK</span>
      </div>
      <div className="wallet-actions-v4">
        <button className="btn-zeno btn-zeno-secondary" onClick={(e) => { e.stopPropagation(); onWithdraw() }}>
          <i className="fa-solid fa-arrow-up-from-bracket" /> {t('wallet.withdraw')}
        </button>
        <button className="btn-zeno btn-zeno-primary" onClick={(e) => { e.stopPropagation(); onDeposit() }}>
          <i className="fa-solid fa-plus" /> {t('wallet.deposit')}
        </button>
      </div>
    </div>
  )
})

// ═══════════════════════════════════════════════════════════════════════
//  SQUAD CARD — No SVG ring, no heavy effects
// ═══════════════════════════════════════════════════════════════════════
const SquadCardV4 = memo(function SquadCardV4({ squad, rank, onNavigate }) {
  const rankColors = ['#fbbf24', '#c0c0c0', '#cd7f32', '#06d6f0', '#a78bfa']
  const rankColor = rankColors[rank] || '#6c8cff'

  return (
    <div className="squad-card-v4" onClick={() => onNavigate && onNavigate('leaderboard')}>
      <div className="squad-rank-ring" style={{ borderColor: rankColor, color: rankColor }}>
        {rank === 0 ? '🥇' : rank === 1 ? '🥈' : rank === 2 ? '🥉' : `#${rank + 1}`}
      </div>
      <div className="squad-logo-wrap">
        {squad.logo ? (
          <img src={squad.logo} alt={squad.name} className="squad-logo-img" loading="lazy" />
        ) : (
          <div className="squad-logo-fallback" style={{ background: `linear-gradient(135deg, ${rankColor}30, ${rankColor}10)` }}>
            <span style={{ color: rankColor, fontSize: 18, fontWeight: 800 }}>{(squad.name || '?').charAt(0)}</span>
          </div>
        )}
      </div>
      <div className="squad-info-v4">
        <div className="squad-name-v4">{squad.name || 'Unknown Squad'}</div>
        <div className="squad-tag-v4" style={{ color: rankColor }}>{squad.tag || 'No Tag'}</div>
        <div className="squad-stats-v4">
          <div className="squad-stat-v4">
            <span className="squad-stat-value-v4" style={{ color: rankColor }}>{squad.winRate || 0}%</span>
            <span className="squad-stat-label-v4">Win Rate</span>
          </div>
          <div className="squad-stat-v4">
            <span className="squad-stat-value-v4">{squad.matchesPlayed || 0}</span>
            <span className="squad-stat-label-v4">Matches</span>
          </div>
        </div>
      </div>
    </div>
  )
})

const TopSquadsSectionV4 = memo(function TopSquadsSectionV4({ t, squads, onNavigate }) {
  const topSquads = (squads || []).sort((a, b) => (b.winRate || 0) - (a.winRate || 0)).slice(0, 5)
  const demoSquads = topSquads.length > 0 ? topSquads : [
    { id: 's1', name: 'Zenith', tag: 'ZEN', winRate: 78, matchesPlayed: 24, logo: '' },
    { id: 's2', name: 'Phoenix', tag: 'PHX', winRate: 65, matchesPlayed: 31, logo: '' },
    { id: 's3', name: 'Vortex', tag: 'VOR', winRate: 58, matchesPlayed: 19, logo: '' },
    { id: 's4', name: 'Nemesis', tag: 'NMS', winRate: 52, matchesPlayed: 42, logo: '' },
    { id: 's5', name: 'Reapers', tag: 'RPR', winRate: 45, matchesPlayed: 28, logo: '' },
  ]

  return (
    <section className="dashboard-section">
      <div className="section-header-v4">
        <h2 className="section-title-v4">Top Squads</h2>
        <span className="view-all-v4" onClick={() => onNavigate('leaderboard')}>{t('common.view_all')} <i className="fa-solid fa-arrow-right" /></span>
      </div>
      <div className="squads-scroll-v4">
        {demoSquads.map((squad, i) => (
          <SquadCardV4 key={squad.id || i} squad={squad} rank={i} onNavigate={onNavigate} />
        ))}
      </div>
    </section>
  )
})

// ═══════════════════════════════════════════════════════════════════════
//  COMMUNITY HUB
// ═══════════════════════════════════════════════════════════════════════
const CommunityHubSectionV4 = memo(function CommunityHubSectionV4({ t, content, onNavigate }) {
  const hasContent = content && content.length > 0
  return (
    <section className="dashboard-section">
      <div className="section-header-v4">
        <h2 className="section-title-v4">Community Hub</h2>
        <span className="view-all-v4" onClick={() => onNavigate('community')}>
          {hasContent ? 'View All' : 'Coming Soon'} <i className="fa-solid fa-arrow-right" />
        </span>
      </div>
      {!hasContent ? (
        <div className="community-empty-v4">
          <div className="community-empty-icon"><i className="fa-solid fa-video-slash" /></div>
          <div className="community-empty-title">Coming Soon</div>
          <div className="community-empty-subtitle">Highlights, Reels & More</div>
          <div className="community-empty-hint">Admin can add YouTube links, thumbnails, and video URLs from the Content tab</div>
        </div>
      ) : (
        <div className="channels-scroll-v4">
          {content.slice(0, 3).map(item => (
            <div key={item.id} className="channel-card-v4" onClick={() => window.open(item.videoUrl, '_blank')}>
              <div className="channel-thumbnail-v4">
                <img src={item.thumbnailUrl} alt={item.title} loading="lazy" />
                <div className="channel-overlay-v4">
                  <div className="channel-live-badge"><i className="fa-solid fa-play" /> {item.type === 'highlight' ? 'Highlight' : item.type === 'reel' ? 'Reel' : 'Video'}</div>
                </div>
              </div>
              <div className="channel-info-v4">
                <div className="channel-meta-text">
                  <div className="channel-title-v4">{item.title}</div>
                  <div className="channel-creator-v4">{new Date(item.createdAt).toLocaleDateString()}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
})

// ═══════════════════════════════════════════════════════════════════════
//  STATS META
// ═══════════════════════════════════════════════════════════════════════
const ZENO_META = [
  { rank: 1, name: 'Alok', role: 'Most Picked', roleIcon: 'fa-solid fa-crown', percentage: 24.5, avatar: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100&h=100&fit=crop' },
  { rank: 2, name: 'Kelly', role: 'Speed King', roleIcon: 'fa-solid fa-bolt', percentage: 19.2, avatar: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=100&h=100&fit=crop' },
  { rank: 3, name: 'Hayato', role: 'Aggressive', roleIcon: 'fa-solid fa-crosshairs', percentage: 15.8, avatar: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100&h=100&fit=crop' },
  { rank: 4, name: 'Chronos', role: 'Tactical', roleIcon: 'fa-solid fa-clock', percentage: 12.3, avatar: 'https://images.unsplash.com/photo-1552820728-8b83bb6b2b0a?w=100&h=100&fit=crop' },
]

const StatsSectionV4 = memo(function StatsSectionV4({ t }) {
  return (
    <section className="dashboard-section">
      <div className="section-header-v4">
        <h2 className="section-title-v4">Meta Stats</h2>
        <span className="view-all-v4">{t('common.view_all')} <i className="fa-solid fa-arrow-right" /></span>
      </div>
      <div className="zeno-card">
        <div className="stats-header-v4">
          <h3 className="stats-title-v4">Character Meta</h3>
          <span className="trend-up-v4"><i className="fa-solid fa-arrow-trend-up" /> +12%</span>
        </div>
        {ZENO_META.map(stat => (
          <div key={stat.rank} className="stat-row-v4">
            <span className="stat-rank-v4">{stat.rank}</span>
            <img src={stat.avatar} alt={stat.name} className="stat-avatar-v4" loading="lazy" />
            <div className="stat-details-v4">
              <div className="stat-name-v4">{stat.name}</div>
              <div className="stat-role-v4"><i className={stat.roleIcon} /> {stat.role}</div>
            </div>
            <div className="stat-bar-track">
              <div className="stat-bar-fill" style={{ width: `${stat.percentage * 2.5}%` }} />
            </div>
            <span className="stat-percentage-v4">{stat.percentage}%</span>
          </div>
        ))}
      </div>
    </section>
  )
})

// ═══════════════════════════════════════════════════════════════════════
//  NEWS
// ═══════════════════════════════════════════════════════════════════════
const ZENO_NEWS = [
  { id: 1, title: '🏆 New Champion Crowned in ZENO Weekly Finals!', date: 'July 19, 2025', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop', tag: 'Tournament' },
  { id: 2, title: '🎮 Free Fire MAX: New Character "Maya" Coming!', date: 'July 18, 2025', image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?w=600&h=400&fit=crop', tag: 'Update' },
  { id: 3, title: '💰 Referral System Live — Earn up to 1500 TK!', date: 'July 17, 2025', image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=600&h=400&fit=crop', tag: 'Feature' },
]

const NewsSectionV4 = memo(function NewsSectionV4({ t }) {
  return (
    <section className="dashboard-section">
      <div className="section-header-v4">
        <h2 className="section-title-v4">Latest News</h2>
        <span className="view-all-v4">{t('common.view_all')} <i className="fa-solid fa-arrow-right" /></span>
      </div>
      <div className="news-scroll-v4">
        {ZENO_NEWS.map(news => (
          <div key={news.id} className="news-card-v4">
            <img src={news.image} alt={news.title} className="news-image-v4" loading="lazy" />
            <div className="news-content-v4">
              <div className="news-tag-v4">{news.tag}</div>
              <div className="news-title-v4">{news.title}</div>
              <div className="news-date-v4">{news.date}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
})

// ═══════════════════════════════════════════════════════════════════════
//  QUICK ACTIONS
// ═══════════════════════════════════════════════════════════════════════
const QuickActionsV4 = memo(function QuickActionsV4({ onNavigate, t }) {
  const actions = [
    { icon: 'fa-solid fa-trophy', label: 'Tournaments', color: '#6366F1', path: 'matches' },
    { icon: 'fa-solid fa-chart-line', label: 'Leaderboard', color: '#22C55E', path: 'leaderboard' },
    { icon: 'fa-solid fa-gift', label: 'Rewards', color: '#F59E0B', path: 'wallet' },
    { icon: 'fa-solid fa-user-group', label: 'Referral', color: '#06B6D4', path: 'profile' },
  ]
  return (
    <section className="dashboard-section">
      <div className="quick-actions-grid">
        {actions.map((action, i) => (
          <button key={i} className="quick-action-card" onClick={() => onNavigate(action.path)}>
            <div className="quick-action-icon" style={{ color: action.color }}><i className={action.icon} /></div>
            <span className="quick-action-label">{action.label}</span>
          </button>
        ))}
      </div>
    </section>
  )
})

// ═══════════════════════════════════════════════════════════════════════
//  MAIN DASHBOARD
// ═══════════════════════════════════════════════════════════════════════
export default function Dashboard() {
  const { state, dispatch, navigate } = useApp()
  const { t } = useLanguage()
  const { matches, currentUser, squads, communityContent } = state

  if (!currentUser) return null

  const hero = matches.filter(m => m.status === 'upcoming')[0] || matches[0]
  const heroPhase = hero ? getMatchPhase(hero) : 'unknown'
  const heroCountdown = hero ? getMatchCountdown(hero) : 0
  const heroJoined = hero ? hero.participants?.includes(currentUser.id) : false
  const heroTime = hero ? scheduledTime(hero.startTime) : { time: 'TBA', date: '' }

  const myJoinedCount = matches.filter(m => m.participants?.includes(currentUser.id)).length
  const liveCount = matches.filter(m => m.status === 'live').length
  const winRate = currentUser.winRate || 68.4
  const level = currentUser.level || 5

  const handleJoin = (matchId) => dispatch({ type: 'SHOW_MODAL', payload: { type: 'join-match', matchId } })
  const handleDeposit = () => dispatch({ type: 'SHOW_MODAL', payload: { type: 'add-money' } })
  const handleWithdraw = () => dispatch({ type: 'SHOW_MODAL', payload: { type: 'withdraw' } })

  return (
    <div className="dashboard-v4">
      <div className="dashboard-content">
        <HeroBannerV4
          hero={hero}
          heroPhase={heroPhase}
          heroCountdown={heroCountdown}
          heroJoined={heroJoined}
          heroTime={heroTime}
          onJoin={handleJoin}
          onNavigate={navigate}
          t={t}
        />

        <section className="dashboard-section stats-row-v4">
          <SimpleStatV4 value={liveCount} label="Live" color="#6366F1" icon="fa-solid fa-circle-play" />
          <SimpleStatV4 value={myJoinedCount} label="My Matches" color="#8B5CF6" icon="fa-solid fa-user-check" />
          <SimpleStatV4 value={winRate} label="Win Rate" color="#10B981" icon="fa-solid fa-percent" suffix="%" />
          <SimpleStatV4 value={level} label="Level" color="#F59E0B" icon="fa-solid fa-military-tech" />
        </section>

        <QuickActionsV4 onNavigate={navigate} t={t} />

        <WalletVaultV4
          balance={currentUser.balance || 0}
          lockedBalance={currentUser.lockedBalance || 0}
          onDeposit={handleDeposit}
          onWithdraw={handleWithdraw}
          onNavigate={navigate}
          t={t}
        />

        {matches.filter(m => m.status === 'live').length > 0 && (
          <section className="dashboard-section">
            <div className="section-header-v4">
              <h2 className="section-title-v4">Live Now</h2>
              <span className="live-pulse-badge"><span className="live-dot" /> {matches.filter(m => m.status === 'live').length} Active</span>
            </div>
            <div className="matches-stack-v4">
              {matches.filter(m => m.status === 'live').map(match => (
                <MatchCard key={match.id} match={match} compact />
              ))}
            </div>
          </section>
        )}

        <TopSquadsSectionV4 t={t} squads={squads} onNavigate={navigate} />
        <CommunityHubSectionV4 t={t} content={communityContent} onNavigate={navigate} />
        <StatsSectionV4 t={t} />
        <NewsSectionV4 t={t} />
      </div>
    </div>
  )
}