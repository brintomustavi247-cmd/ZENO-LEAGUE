import { useState } from 'react'
import { useApp } from '../context'
import { useLanguage } from '../hooks/useLanguage'
import MatchCard from '../components/MatchCard'
import ResultCard from '../components/ResultCard'
import { MATCH_RULES } from '../data'
import '../matches-premium.css'

export default function Matches() {
  const { state, dispatch } = useApp()
  const { t } = useLanguage()
  const { matches, matchFilter } = state
  const [search, setSearch] = useState('')
  const [showRules, setShowRules] = useState(false)
  const [mainTab, setMainTab] = useState('upcoming')
  const [viewingResult, setViewingResult] = useState(null)

  const filters = [
    { key: 'all', label: t('matches.all_matches'), icon: 'fa-solid fa-gamepad' },
    { key: 'Solo', label: 'Solo', icon: 'fa-solid fa-user' },
    { key: 'Duo', label: 'Duo', icon: 'fa-solid fa-user-group' },
    { key: 'Squad', label: 'Squad', icon: 'fa-solid fa-shield-halved' },
    { key: 'Clash Squad', label: t('matches.cs_4v4'), icon: 'fa-solid fa-crosshairs' },
  ]

  const filtered = matches.filter(m => {
    const modeMatch = matchFilter === 'all' || m.mode === matchFilter
    const q = search.toLowerCase()
    const searchMatch = !q || m.title.toLowerCase().includes(q) || m.map.toLowerCase().includes(q)
    return modeMatch && searchMatch
  })

  const live = filtered.filter(m => m.status === 'live')
  const upcoming = filtered
    .filter(m => m.status === 'upcoming')
    .sort((a, b) => new Date(a.startTime.replace(' ', 'T')).getTime() - new Date(b.startTime.replace(' ', 'T')).getTime())
  const completed = filtered.filter(m => m.status === 'completed')

  return (
    <div className="matches-premium">
      {/* ═══ BACKGROUND FX ═══ */}
      <div className="mt-bg-glow" aria-hidden="true" />
      <div className="mt-noise" aria-hidden="true" />

      {/* ═══ RESULT OVERLAY ═══ */}
      {viewingResult && (
        <div className="mt-result-overlay" onClick={() => setViewingResult(null)}>
          <div className="mt-result-modal" onClick={e => e.stopPropagation()}>
            <button className="mt-result-back" onClick={() => setViewingResult(null)}>
              <i className="fa-solid fa-arrow-left" />
              {t('matches.back_to_matches')}
            </button>
            <ResultCard result={viewingResult} />
          </div>
        </div>
      )}

      <div className="mt-content">
        {/* ═══ HERO HEADER ═══ */}
        <div className="mt-hero">
          <div className="mt-hero-badge">
            <i className="fa-solid fa-gamepad" />
            <span>Match Arena</span>
          </div>
          <h1 className="mt-hero-title">{t('matches.match_arena')}</h1>
          <p className="mt-hero-subtitle">{t('matches.subtitle')}</p>
        </div>

        {/* ═══ SEARCH ═══ */}
        <div className="mt-search-wrap">
          <i className="fa-solid fa-magnifying-glass mt-search-icon" />
          <input
            type="text"
            className="mt-search-input"
            placeholder={t('matches.search_tournaments')}
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className="mt-search-glow" />
          {search && (
            <button className="mt-search-clear" onClick={() => setSearch('')}>
              <i className="fa-solid fa-xmark" />
            </button>
          )}
        </div>

        {/* ═══ FILTER PILLS ═══ */}
        <div className="mt-filters-scroll">
          <div className="mt-filters">
            {filters.map(f => {
              const active = matchFilter === f.key
              return (
                <button
                  key={f.key}
                  className={`mt-filter-pill ${active ? 'active' : ''}`}
                  onClick={() => dispatch({ type: 'SET_FILTER', payload: f.key })}
                >
                  <i className={f.icon} />
                  {f.label}
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-divider" />

        {/* ═══ RULES TOGGLE ═══ */}
        <button
          className={`mt-rules-toggle ${showRules ? 'open' : ''}`}
          onClick={() => setShowRules(!showRules)}
        >
          <i className={`fa-solid ${showRules ? 'fa-xmark' : 'fa-scroll'}`} />
          <span>{showRules ? t('matches.hide_rules') : t('matches.rules_regulations')}</span>
          <i className={`fa-solid fa-chevron-${showRules ? 'up' : 'down'} mt-rules-chevron`} />
        </button>

        {showRules && (
          <div className="mt-rules-panel">
            <div className="mt-section-header">
              <div className="mt-section-bar" />
              <span className="mt-section-label">{t('matches.read_carefully')}</span>
            </div>
            <div className="mt-rules-list">
              {MATCH_RULES.map((rule, i) => (
                <div key={i} className="mt-rule-item">
                  <span className="mt-rule-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="mt-rule-text">{rule}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ═══ MAIN TABS ═══ */}
        <div className="mt-main-tabs">
          {[
            { key: 'upcoming', label: t('matches.upcoming_tab'), icon: 'fa-solid fa-clock', count: live.length + upcoming.length },
            { key: 'results', label: t('matches.results_tab'), icon: 'fa-solid fa-trophy', count: completed.length },
          ].map(tab => {
            const active = mainTab === tab.key
            return (
              <button
                key={tab.key}
                className={`mt-main-tab ${active ? 'active' : ''}`}
                onClick={() => setMainTab(tab.key)}
              >
                <i className={tab.icon} />
                {tab.label}
                <span className="mt-tab-count">{tab.count}</span>
              </button>
            )
          })}
        </div>

        {/* ════════════════════════════════════════════════════════
            UPCOMING TAB
            ════════════════════════════════════════════════════════ */}
        {mainTab === 'upcoming' && (
          <>
            {live.length > 0 && (
              <section className="mt-section">
                <div className="mt-section-header">
                  <span className="mt-live-dot" />
                  <div className="mt-section-bar" />
                  <span className="mt-section-label">{t('matches.live_now')}</span>
                  <span className="mt-section-count" style={{ color: '#4ade80' }}>{live.length}</span>
                </div>
                <div className="mt-match-stack">
                  {live.map(m => <MatchCard key={m.id} match={m} />)}
                </div>
              </section>
            )}

            {upcoming.length > 0 && (
              <section className="mt-section">
                <div className="mt-section-header">
                  <div className="mt-section-bar" />
                  <span className="mt-section-label">{t('matches.upcoming')}</span>
                  <span className="mt-section-count" style={{ color: 'var(--pr-violet-bright)' }}>{upcoming.length}</span>
                </div>
                <div className="mt-match-stack">
                  {upcoming.map(m => <MatchCard key={m.id} match={m} animated />)}
                </div>
              </section>
            )}

            {live.length === 0 && upcoming.length === 0 && (
              <div className="mt-empty-state">
                <i className="fa-solid fa-calendar-xmark" />
                <p className="mt-empty-title">{t('matches.no_upcoming')}</p>
                <p className="mt-empty-subtitle">{t('matches.tournaments_will_appear')}</p>
              </div>
            )}
          </>
        )}

        {/* ════════════════════════════════════════════════════════
            RESULTS TAB
            ════════════════════════════════════════════════════════ */}
        {mainTab === 'results' && (
          <>
            {completed.length > 0 ? (
              <div className="mt-match-stack">
                {completed.map(m => (
                  <div key={m.id} className="mt-result-wrap">
                    <MatchCard match={m} />
                    {m.result ? (
                      <button
                        className="mt-result-btn"
                        onClick={() => setViewingResult(m.result)}
                      >
                        <i className="fa-solid fa-trophy" />
                        {t('matches.result')}
                      </button>
                    ) : (
                      <div className="mt-pending-badge">
                        <i className="fa-solid fa-hourglass-half" />
                        {t('status.pending')}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-empty-state">
                <i className="fa-solid fa-trophy" />
                <p className="mt-empty-title">{t('matches.no_results')}</p>
                <p className="mt-empty-subtitle">{t('matches.results_will_appear')}</p>
              </div>
            )}
          </>
        )}

        {/* ═══ FOOTER ═══ */}
        {filtered.length > 0 && (
          <div className="mt-footer">
            <span>
              {mainTab === 'upcoming'
                ? `Showing ${live.length + upcoming.length} match${(live.length + upcoming.length) !== 1 ? 'es' : ''}`
                : `Showing ${completed.length} result${completed.length !== 1 ? 's' : ''}`
              }
            </span>
          </div>
        )}
      </div>
    </div>
  )
}