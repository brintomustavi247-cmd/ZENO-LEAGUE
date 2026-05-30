import { useState } from 'react'
import { useApp } from '../context'
import { useLanguage } from '../hooks/useLanguage'
import { formatTK } from '../utils'
import '../styles/wallet-premium.css'

export default function Wallet() {
  const { state, dispatch } = useApp()
  const { t } = useLanguage()
  const { currentUser, transactions } = state

  if (!currentUser) return null

  // ═══ V6.0: SPLIT BALANCES ═══
  const realBalance = Number(currentUser.balance) || 0
  const lockedBalance = Number(currentUser.lockedBalance) || 0
  const totalBalance = realBalance + lockedBalance
  const freeMatches = currentUser.tokens?.freeMatch || 0

  // Existing Stats (Preserved exactly)
  const totalWon = transactions
    .filter(tx => tx.type === 'win' && tx.status !== 'rejected')
    .reduce((s, tx) => s + (Number(tx.amount) || 0), 0)
  const totalPending = transactions
    .filter(tx => tx.status === 'pending')
    .reduce((s, tx) => s + (Number(tx.amount) || 0), 0)
  const totalSpent = transactions
    .filter(tx => tx.type === 'join' && tx.status !== 'rejected')
    .reduce((s, tx) => s + (Number(tx.amount) || 0), 0)
  const totalAdded = transactions
    .filter(tx => tx.type === 'add' && tx.status === 'completed')
    .reduce((s, tx) => s + (Number(tx.amount) || 0), 0)
  const pendingCount = transactions.filter(tx => tx.status === 'pending').length

  // ═══ V6.0: UPGRADED TRANSACTION ICONS ═══
  const txIcon = (type) => {
    switch (type) {
      case 'add': return { icon: 'fa-solid fa-plus', bg: 'rgba(186,195,255,0.12)', color: '#bac3ff' }
      case 'win': return { icon: 'fa-solid fa-trophy', bg: 'rgba(186,195,255,0.12)', color: '#bac3ff' }
      case 'join': return { icon: 'fa-solid fa-crosshairs', bg: '#2a2a2c', color: '#889299' }
      case 'withdraw': return { icon: 'fa-solid fa-arrow-up-from-bracket', bg: '#2a2a2c', color: '#889299' }
      case 'refund': return { icon: 'fa-solid fa-rotate-left', bg: 'rgba(74,222,128,0.12)', color: '#4ade80' }
      case 'referral_unlock': return { icon: 'fa-solid fa-lock-open', bg: 'rgba(168,85,247,0.12)', color: '#a855f7' }
      case 'referral_bonus': return { icon: 'fa-solid fa-gift', bg: 'rgba(168,85,247,0.12)', color: '#a855f7' }
      case 'referral_earn': return { icon: 'fa-solid fa-user-plus', bg: 'rgba(168,85,247,0.12)', color: '#a855f7' }
      case 'spin_reward': return { icon: 'fa-solid fa-dharmachakra', bg: 'rgba(236,72,153,0.12)', color: '#ec4899' }
      case 'ad_reward': return { icon: 'fa-solid fa-clapperboard', bg: 'rgba(34,211,238,0.12)', color: '#22d3ee' }
      case 'share_reward': return { icon: 'fa-solid fa-share-nodes', bg: 'rgba(6,182,212,0.12)', color: '#06b6d4' }
      case 'adjust_add': return { icon: 'fa-solid fa-wand-magic-sparkles', bg: 'rgba(251,191,36,0.12)', color: '#fbbf24' }
      case 'adjust_deduct': return { icon: 'fa-solid fa-eraser', bg: 'rgba(248,113,113,0.12)', color: '#f87171' }
      default: return { icon: 'fa-solid fa-arrow-right-arrow-left', bg: '#2a2c', color: '#889299' }
    }
  }

  // Preserved Status logic
  const txStatus = (status) => {
    switch (status) {
      case 'completed': return { label: 'Completed', color: '#4ade80', bg: 'rgba(74,222,128,0.1)' }
      case 'pending': return { label: 'Pending', color: '#fbbf24', bg: 'rgba(251,191,36,0.1)' }
      case 'rejected': return { label: 'Rejected', color: '#f87171', bg: 'rgba(248,113,113,0.1)' }
      default: return null
    }
  }

  return (
    <div className="wallet-premium">

      {/* ═══ PAGE HEADER ═══ */}
      <header className="w-header">
        <h1 className="w-title">{t('wallet.title') || 'Wallet'}</h1>
        <p className="w-subtitle">{t('wallet.subtitle') || 'Manage your funds & transaction history'}</p>
      </header>

      {/* ═══ BALANCE HERO CARD ═══ */}
      <section className="w-hero-card">
        <div className="w-hero-glow" />
        <div className="w-hero-content">
          <span className="w-label">{t('wallet.total_balance') || 'Total Balance'}</span>

          <div className="w-balance-main">
            <span className="w-balance-num">{formatTK(totalBalance)}</span>
          </div>

          {/* V6.0: Real vs Locked Split */}
          <div className="w-split">
            <div className="w-split-item">
              <div className="w-split-label">
                <i className="fa-solid fa-check-circle" style={{ fontSize: 9 }} />
                {t('wallet.real_balance') || 'Available'}
              </div>
              <div className="w-split-num">{formatTK(realBalance)}</div>
            </div>
            <div className="w-split-divider" />
            <div className="w-split-item">
              <div className="w-split-label">
                <i className="fa-solid fa-lock" style={{ fontSize: 9 }} />
                {t('wallet.locked_balance') || 'Locked'}
              </div>
              <div className="w-split-num">{formatTK(lockedBalance)}</div>
            </div>
          </div>

          {/* V6.0: Free Match Token Indicator */}
          {freeMatches > 0 && (
            <div className="w-free-matches">
              <i className="fa-solid fa-ticket" />
              <span>
                {freeMatches} Free Match Token{freeMatches > 1 ? 's' : ''} Available!
              </span>
            </div>
          )}

          <div className="w-actions">
            <button
              className="w-btn w-btn-deposit"
              onClick={(e) => { e.stopPropagation(); dispatch({ type: 'SHOW_MODAL', payload: { type: 'add-money' } }) }}
            >
              <i className="fa-solid fa-plus-circle" style={{ fontSize: 13 }} />
              {t('wallet.deposit') || 'Deposit'}
            </button>
            <button
              className="w-btn w-btn-withdraw"
              onClick={(e) => { e.stopPropagation(); dispatch({ type: 'SHOW_MODAL', payload: { type: 'withdraw' } }) }}
            >
              <i className="fa-solid fa-arrow-up-from-bracket" style={{ fontSize: 13 }} />
              {t('wallet.withdraw') || 'Withdraw'}
            </button>
          </div>
        </div>
      </section>

      {/* ═══ CLUTCH PASS PROMO BANNER ═══ */}
      <div
        className="w-promo"
        onClick={() => dispatch({ type: 'SHOW_MODAL', payload: { type: 'clutch-pass' } })}
      >
        <div className="w-promo-icon">
          <i className="fa-solid fa-crown" />
        </div>
        <div className="w-promo-body">
          <div className="w-promo-title">
            Clutch Pass <span className="w-promo-badge">99 TK/mo</span>
          </div>
          <div className="w-promo-desc">
            Get 2x XP, exclusive badges & priority queue access!
          </div>
        </div>
        <i className="fa-solid fa-chevron-right w-promo-arrow" />
      </div>

      {/* ═══ QUICK STATS — 2x2 Grid ═══ */}
      <section className="w-stats">
        {/* Total Winnings */}
        <div className="w-stat">
          <span className="w-stat-label">{t('wallet.total_winnings') || 'Total Winnings'}</span>
          <span className="w-stat-value">{formatTK(totalWon)}</span>
        </div>

        {/* Pending */}
        <div className={`w-stat ${pendingCount > 0 ? 'w-stat-pending' : ''}`}>
          <div className="w-stat-header">
            <span className="w-stat-label">{t('wallet.pending') || 'Pending'}</span>
            {pendingCount > 0 && (
              <span className="w-stat-badge">
                {pendingCount} {pendingCount === 1 ? 'REQUEST' : 'REQUESTS'}
              </span>
            )}
          </div>
          <span className="w-stat-value">{formatTK(totalPending)}</span>
          {pendingCount > 0 && (
            <span className="w-stat-note">Awaiting admin approval</span>
          )}
        </div>

        {/* Total Spent */}
        <div className="w-stat">
          <span className="w-stat-label">{t('wallet.total_spent') || 'Total Spent'}</span>
          <span className="w-stat-value">{formatTK(totalSpent)}</span>
        </div>

        {/* Total Added */}
        <div className="w-stat">
          <span className="w-stat-label">{t('wallet.total_added') || 'Total Added'}</span>
          <span className="w-stat-value">{formatTK(totalAdded)}</span>
        </div>
      </section>

      {/* ═══ RECENT ACTIVITY ═══ */}
      <section className="w-activity">
        <div className="w-activity-header">
          <h3 className="w-section-title">{t('wallet.recent_activity') || 'Recent Activity'}</h3>
          <span className="w-view-all">{t('wallet.view_all') || 'View All'}</span>
        </div>

        <div className="w-tx-list">
          {transactions.slice(0, 10).map(tx => {
            const isPositive = (
              tx.type === 'win' || tx.type === 'add' || tx.type === 'referral_bonus' ||
              tx.type === 'referral_unlock' || tx.type === 'spin_reward' ||
              tx.type === 'ad_reward' || tx.type === 'share_reward' || tx.type === 'adjust_add'
            ) && tx.status !== 'rejected'
            const isPending = tx.status === 'pending'
            const isRejected = tx.status === 'rejected'
            const icon = txIcon(tx.type)
            const statusInfo = txStatus(tx.status)

            let amtColor = '#F0F0F5'
            if (isRejected) amtColor = '#EF4444'
            else if (isPending && isPositive) amtColor = '#A1A1AA'
            else if (!isPositive) amtColor = '#EF4444'

            const prefix = isPositive ? '+ ' : '- '

            return (
              <div
                key={tx.id}
                className={`w-tx-item ${isPending ? 'w-tx-pending' : ''} ${isRejected ? 'w-tx-rejected' : ''} ${isPositive ? 'w-tx-positive' : ''}`}
              >
                <div
                  className="w-tx-icon"
                  style={{
                    background: isPending ? 'rgba(245,158,11,0.08)' : isRejected ? 'rgba(239,68,68,0.08)' : icon.bg
                  }}
                >
                  <i
                    className={icon.icon}
                    style={{
                      fontSize: 15,
                      color: isPending ? '#F59E0B' : isRejected ? '#EF4444' : icon.color
                    }}
                  />
                </div>

                <div className="w-tx-info">
                  <div className="w-tx-desc">{tx.desc}</div>
                  <div className="w-tx-meta">
                    <span>{tx.date || 'Just now'}</span>
                    {tx.locked && <span className="w-tx-locked">LOCKED</span>}
                    {statusInfo && (
                      <span
                        className="w-tx-status"
                        style={{ color: statusInfo.color, background: statusInfo.bg }}
                      >
                        {statusInfo.label}
                      </span>
                    )}
                  </div>
                </div>

                <div className="w-tx-amount">
                  <div
                    className="w-tx-amt"
                    style={{
                      color: amtColor,
                      textDecoration: isRejected ? 'line-through' : 'none',
                      opacity: isPending && isPositive ? 0.6 : 1
                    }}
                  >
                    {prefix}{formatTK(tx.amount)}
                  </div>
                  {isPending && isPositive && (
                    <div className="w-tx-processing">⏳ Processing</div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="w-load-more">
          <span>Load More</span>
        </div>
      </section>
    </div>
  )
}