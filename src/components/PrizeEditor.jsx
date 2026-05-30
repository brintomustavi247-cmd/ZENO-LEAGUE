import { useState, useEffect, useMemo } from 'react'
import { 
  calculateMatchEconomicsV2, 
  calculatePrizesV2,
  generatePrizePreview,
  validateManualPrizes,
  formatTK,
  roundToNearest,
  FF_MODES,
  FF_GAME_TYPES
} from '../utils'

/**
 * PrizeEditor Component V11.0
 * 
 * Full-featured admin interface for managing tournament prize money
 * 
 * FEATURES:
 * ✅ Toggle between Auto-calculate vs Manual entry mode
 * ✅ Auto Mode: Admin % slider, leftover policy, rounding options
 * ✅ Manual Mode: Per-rank input fields with add/remove rows
 * ✅ Live financial preview panel (real-time updates)
 * ✅ Color-coded verification status (green=balanced, red=error)
 * ✅ Warning/recommendation messages
 * ✅ Sponsor/external funding support
 * ✅ Beautiful dark UI matching ZENO theme
 */

export default function PrizeEditor({ 
  tournament = {}, 
  onSave, 
  onCancel,
  readOnly = false 
}) {
  // ═══ MODE STATE ═══
  const [mode, setMode] = useState('auto') // 'auto' | 'manual'
  
  // ═══ AUTO MODE STATE ═══
  const [adminPercent, setAdminPercent] = useState(20)
  const [leftoverPolicy, setLeftoverPolicy] = useState('admin')
  const [roundingGranularity, setRoundingGranularity] = useState(10)
  
  // ═══ MANUAL MODE STATE ═══
  const [customAdminProfit, setCustomAdminProfit] = useState(0)
  const [customPrizePool, setCustomPrizePool] = useState(0)
  const [isExternallyFunded, setIsExternallyFunded] = useState(false)
  const [manualPrizes, setManualPrizes] = useState([
    { rank: '1st', amount: 0 },
    { rank: '2nd', amount: 0 },
    { rank: '3rd', amount: 0 }
  ])
  
  // ═══ DERIVED TOURNAMENT DATA ═══
  const entryFee = Number(tournament.entryFee) || 0
  const slots = Number(tournament.maxSlots) || 0
  const gameType = tournament.gameType || 'BR'
  const totalCollection = entryFee * slots
  
  // ═══ LIVE PREVIEW CALCULATION ═══
  const preview = useMemo(() => {
    if (mode === 'auto') {
      return generatePrizePreview({
        entryFee,
        slots,
        gameType,
        include4th: true,
        include5th: true,
        adminPercent: adminPercent,
        leftoverPolicy,
        roundingGranularity
      })
    } else {
      // Manual mode validation
      const validation = validateManualPrizes(manualPrizes, customPrizePool)
      
      return {
        totalCollection,
        adminProfit: customAdminProfit,
        adminPercent: totalCollection > 0 ? (customAdminProfit / totalCollection) * 100 : 0,
        prizePool: customPrizePool,
        prizes: manualPrizes.map(p => ({ ...p, isRounded: true })),
        totalDistributed: validation.total,
        leftover: customPrizePool - validation.total,
        leftoverPolicy,
        roundingApplied: true,
        roundingGranularity,
        isExternallyFunded,
        manualOverride: true,
        isBalanced: validation.isValid,
        verificationHash: `manual_${Date.now()}`,
        recommendations: [
          ...validation.warnings.map(w => ({ type: 'warning', message: w })),
          ...validation.errors.map(e => ({ type: 'error', message: e }))
        ],
        isValid: validation.isValid
      }
    }
  }, [mode, adminPercent, leftoverPolicy, roundingGranularity, 
      customAdminProfit, customPrizePool, manualPrizes, 
      isExternallyFunded, entryFee, slots, gameType])

  // ═══ INITIALIZE FROM EXISTING TOURNAMENT DATA ═══
  useEffect(() => {
    if (tournament.economics?.manualOverride) {
      // Load existing manual override data
      setMode('manual')
      setCustomAdminProfit(tournament.economics.adminProfit || 0)
      setCustomPrizePool(tournament.economics.prizePool || 0)
      setIsExternallyFunded(tournament.economics.isExternallyFunded || false)
      if (tournament.prizeBreakdown?.length > 0) {
        setManualPrizes(tournament.prizeBreakdown.map(p => ({
          rank: p.rank,
          amount: p.amount
        })))
      }
    } else if (tournament.economics) {
      // Load existing auto-calculated data
      setMode('auto')
      setAdminPercent(tournament.economics.adminPercent || 20)
      setLeftoverPolicy(tournament.economics.leftoverPolicy || 'admin')
      setRoundingGranularity(tournament.economics.roundingGranularity || 10)
    } else {
      // Initialize defaults based on tournament
      setMode('auto')
      const defaultEconomics = calculateMatchEconomicsV2({
        entryFee,
        slots,
        gameType
      })
      if (defaultEconomics.adminPercent) {
        setAdminPercent(defaultEconomics.adminPercent)
      }
    }
  }, [tournament.id]) // Only run on mount or when tournament changes

  // ═══ HANDLERS ═══
  
  const handleAddPrizeRow = () => {
    const nextRank = manualPrizes.length + 1
    const ordinal = nextRank === 1 ? 'st' : nextRank === 2 ? 'nd' : nextRank === 3 ? 'rd' : 'th'
    setManualPrizes([...manualPrizes, { rank: `${nextRank}${ordinal}`, amount: 0 }])
  }

  const handleRemovePrizeRow = (index) => {
    if (manualPrizes.length <= 1) return // Keep at least one row
    setManualPrizes(manualPrizes.filter((_, i) => i !== index))
  }

  const handleManualPrizeChange = (index, value) => {
    const updated = [...manualPrizes]
    updated[index].amount = Math.max(0, Number(value) || 0)
    setManualPrizes(updated)
  }

  const handleSave = () => {
    if (!preview.isValid && mode === 'manual') {
      alert('Please fix validation errors before saving')
      return
    }
    
    const saveData = {
      economics: {
        totalCollection: preview.totalCollection,
        adminProfit: preview.adminProfit,
        adminPercent: preview.adminPercent,
        prizePool: preview.prizePool,
        roundingApplied: preview.roundingApplied,
        roundingGranularity: preview.roundingGranularity,
        leftoverAmount: preview.leftover,
        leftoverPolicy: preview.leftoverPolicy,
        isExternallyFunded: preview.isExternallyFunded,
        manualOverride: mode === 'manual',
        verificationHash: preview.verificationHash
      },
      prizeBreakdown: preview.prizes.map(p => ({
        rank: p.rank,
        amount: p.amount,
        isRounded: p.isRounded,
        bonus: p.bonus || 0
      }))
    }
    
    onSave?.(saveData)
  }

  // ═══ RENDER HELPERS ═══
  
  const VerificationBadge = () => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '10px 16px',
      borderRadius: 10,
      background: preview.isBalanced 
        ? 'rgba(74, 222, 128, 0.1)' 
        : 'rgba(239, 68, 68, 0.1)',
      border: `1px solid ${
        preview.isBalanced 
          ? 'rgba(74, 222, 128, 0.25)' 
          : 'rgba(239, 68, 68, 0.25)'
      }`,
      marginBottom: 20
    }}>
      <i className={`fa-solid ${preview.isBalanced ? 'fa-circle-check' : 'fa-triangle-exclamation'}`}
         style={{
           fontSize: 18,
           color: preview.isBalanced ? '#4ade80' : '#ef4444'
         }} />
      <div>
        <div style={{
          fontWeight: 700,
          fontSize: 13,
          color: preview.isBalanced ? '#4ade80' : '#ef4444'
        }}>
          {preview.isBalanced ? '✓ Balanced' : '⚠ Unbalanced'}
        </div>
        <div style={{
          fontSize: 11,
          color: '#9ca3af',
          marginTop: 2
        }}>
          {preview.isBalanced 
            ? 'All finances accounted for'
            : `${Math.abs(preview.leftover)} TK unallocated`}
        </div>
      </div>
    </div>
  )

  const RecommendationList = () => (
    preview.recommendations.length > 0 && (
      <div style={{ marginBottom: 20 }}>
        {preview.recommendations.map((rec, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 10,
            padding: '10px 14px',
            marginBottom: 8,
            borderRadius: 8,
            background: rec.type === 'error' 
              ? 'rgba(239, 68, 68, 0.08)' 
              : rec.type === 'warning'
                ? 'rgba(251, 191, 36, 0.08)'
                : 'rgba(74, 222, 128, 0.08)',
            borderLeft: `3px solid ${
              rec.type === 'error' 
                ? '#ef4444' 
                : rec.type === 'warning'
                  ? '#fbbf24'
                  : '#4ade80'
            }`
          }}>
            <i className={`fa-solid ${
              rec.type === 'error' 
                ? 'fa-circle-xmark' 
                : rec.type === 'warning'
                  ? 'fa-circle-exclamation'
                  : 'fa-circle-info'
            }`} style={{
              marginTop: 2,
              fontSize: 12,
              color: rec.type === 'error' 
                ? '#ef4444' 
                : rec.type === 'warning'
                  ? '#fbbf24'
                  : '#4ade80'
            }} />
            <span style={{
              fontSize: 12,
              color: '#d1d5db',
              lineHeight: 1.5
            }}>
              {rec.message}
            </span>
          </div>
        ))}
      </div>
    )
  )

  // ═══ MAIN RENDER ═══
  return (
    <div style={{
      background: '#14141a',
      borderRadius: 16,
      border: '1px solid rgba(255,255,255,0.08)',
      padding: 24,
      maxWidth: 700,
      margin: '0 auto'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 24,
        paddingBottom: 16,
        borderBottom: '1px solid rgba(255,255,255,0.06)'
      }}>
        <div>
          <h2 style={{
            fontFamily: "'Lexend', sans-serif",
            fontSize: 20,
            fontWeight: 800,
            color: '#fff',
            margin: 0,
            letterSpacing: '-0.02em'
          }}>
            💰 Prize Editor
          </h2>
          <p style={{
            fontSize: 12,
            color: '#6b7280',
            margin: '4px 0 0',
            fontFamily: "'Plus Jakarta Sans', sans-serif"
          }}>
            Configure tournament economics & prize distribution
          </p>
        </div>
        
        {!readOnly && (
          <div style={{ display: 'flex', gap: 10 }}>
            <button
              onClick={onCancel}
              style={{
                padding: '10px 20px',
                borderRadius: 10,
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'transparent',
                color: '#9ca3af',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={!preview.isValid}
              style={{
                padding: '10px 24px',
                borderRadius: 10,
                border: 'none',
                background: preview.isValid 
                  ? 'linear-gradient(135deg, #8b5cf6, #06b6d4)' 
                  : '#374151',
                color: '#fff',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 13,
                fontWeight: 700,
                cursor: preview.isValid ? 'pointer' : 'not-allowed',
                opacity: preview.isValid ? 1 : 0.5,
                transition: 'all 0.2s',
                boxShadow: preview.isValid 
                  ? '0 4px 20px rgba(139, 92, 246, 0.3)' 
                  : 'none'
              }}
            >
              Save Configuration
            </button>
          </div>
        )}
      </div>

      {/* Tournament Info Summary */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 12,
        marginBottom: 24,
        padding: 16,
        background: '#1c1b1d',
        borderRadius: 12,
        border: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div>
          <div style={{ fontSize: 10, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>
            Collection
          </div>
          <div style={{ fontSize: 18, fontWeight: 800, color: '#fff', fontFamily: "'Inter', sans-serif" }}>
            {formatTK(totalCollection)}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 10, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>
            Entry × Slots
          </div>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#9ca3af' }}>
            {formatTK(entryFee)} × {slots} players
          </div>
        </div>
        <div>
          <div style={{ fontSize: 10, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>
            Game Type
          </div>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#61cdff' }}>
            {gameType === 'BR' ? 'Battle Royale' : 'Clash Squad'}
          </div>
        </div>
      </div>

      {/* Mode Toggle */}
      <div style={{ marginBottom: 24 }}>
        <label style={{
          display: 'block',
          fontSize: 11,
          fontWeight: 700,
          color: '#9ca3af',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: 10
        }}>
          Calculation Mode
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 12
        }}>
          {[
            { key: 'auto', label: 'Auto Calculate', icon: 'fa-wand-magic-sparkles', desc: 'System calculates optimal prizes' },
            { key: 'manual', label: 'Manual Entry', icon: 'fa-keyboard', desc: 'Set exact amounts yourself' }
          ].map(opt => (
            <button
              key={opt.key}
              onClick={() => !readOnly && setMode(opt.key)}
              disabled={readOnly}
              style={{
                padding: 16,
                borderRadius: 12,
                border: `2px solid ${mode === opt.key ? '#8b5cf6' : 'rgba(255,255,255,0.08)'}`,
                background: mode === opt.key 
                  ? 'rgba(139, 92, 246, 0.1)' 
                  : 'transparent',
                cursor: readOnly ? 'not-allowed' : 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s'
              }}
            >
              <i className={`fa-solid ${opt.icon}`} style={{
                fontSize: 18,
                color: mode === opt.key ? '#8b5cf6' : '#6b7280',
                marginBottom: 8,
                display: 'block'
              }} />
              <div style={{
                fontSize: 13,
                fontWeight: 700,
                color: mode === opt.key ? '#fff' : '#9ca3af',
                marginBottom: 4
              }}>
                {opt.label}
              </div>
              <div style={{
                fontSize: 11,
                color: '#555555'
              }}>
                {opt.desc}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ═══ AUTO MODE OPTIONS ═══ */}
      {mode === 'auto' && (
        <>
          {/* Admin Percentage Slider */}
          <div style={{ marginBottom: 20 }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 10
            }}>
              <label style={{
                fontSize: 11,
                fontWeight: 700,
                color: '#9ca3af',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                Platform Commission (Admin Cut)
              </label>
              <span style={{
                fontSize: 16,
                fontWeight: 800,
                color: '#f59e0b',
                fontFamily: "'Inter', sans-serif"
              }}>
                {adminPercent}%
              </span>
            </div>
            
            <input
              type="range"
              min="5"
              max="50"
              step="1"
              value={adminPercent}
              onChange={(e) => setAdminPercent(Number(e.target.value))}
              disabled={readOnly}
              style={{
                width: '100%',
                height: 6,
                borderRadius: 3,
                appearance: 'none',
                background: `linear-gradient(to right, #8b5cf6 0%, #8b5cf6 ${(adminPercent-5)/45*100}%, #27273a ${(adminPercent-5)/45*100}%, #27273a 100%)`,
                outline: 'none',
                cursor: readOnly ? 'not-allowed' : 'pointer'
              }}
            />
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: 6,
              fontSize: 10,
              color: '#555555'
            }}>
              <span>5% (Minimal)</span>
              <span>20% (Standard)</span>
              <span>50% (Maximum)</span>
            </div>
          </div>

          {/* Leftover Policy Selector */}
          <div style={{ marginBottom: 20 }}>
            <label style={{
              display: 'block',
              fontSize: 11,
              fontWeight: 700,
              color: '#9ca3af',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: 10
            }}>
              Rounding Leftover Policy
            </label>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 8
            }}>
              {[
                { key: 'admin', label: 'To Platform', icon: 'fa-building', desc: 'Adds to admin profit' },
                { key: '1st', label: 'To Winner', icon: 'fa-trophy', desc: 'Bonus for 1st place' },
                { key: 'equal_split', label: 'Split Evenly', icon: 'fa-equals', desc: 'All winners share' },
                { key: 'pool', label: 'Keep in Pool', icon: 'fa-database', desc: 'For future use' }
              ].map(policy => (
                <button
                  key={policy.key}
                  onClick={() => !readOnly && setLeftoverPolicy(policy.key)}
                  disabled={readOnly}
                  style={{
                    padding: '12px 14px',
                    borderRadius: 10,
                    border: `1px solid ${leftoverPolicy === policy.key ? '#8b5cf6' : 'rgba(255,255,255,0.06)'}`,
                    background: leftoverPolicy === policy.key 
                      ? 'rgba(139, 92, 246, 0.08)' 
                      : 'transparent',
                    cursor: readOnly ? 'not-allowed' : 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s'
                  }}
                >
                  <i className={`fa-solid ${policy.icon}`} style={{
                    fontSize: 13,
                    color: leftoverPolicy === policy.key ? '#8b5cf6' : '#6b7280',
                    marginRight: 8
                  }} />
                  <span style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: leftoverPolicy === policy.key ? '#fff' : '#9ca3af'
                  }}>
                    {policy.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Rounding Granularity */}
          <div style={{ marginBottom: 20 }}>
            <label style={{
              display: 'block',
              fontSize: 11,
              fontWeight: 700,
              color: '#9ca3af',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: 10
            }}>
              Round Numbers To Nearest
            </label>
            <div style={{ display: 'flex', gap: 8 }}>
              {[5, 10, 50, 100].map(val => (
                <button
                  key={val}
                  onClick={() => !readOnly && setRoundingGranularity(val)}
                  disabled={readOnly}
                  style={{
                    flex: 1,
                    padding: '10px',
                    borderRadius: 8,
                    border: `1px solid ${roundingGranularity === val ? '#06b6d4' : 'rgba(255,255,255,0.06)'}`,
                    background: roundingGranularity === val 
                      ? 'rgba(6, 182, 212, 0.1)' 
                      : 'transparent',
                    color: roundingGranularity === val ? '#06b6d4' : '#9ca3af',
                    fontWeight: 700,
                    fontSize: 13,
                    cursor: readOnly ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {val} TK
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* ═══ MANUAL MODE OPTIONS - ENHANCED WITH EASY CONTROLS ═══ */}
{mode === 'manual' && (
  <>
    {/* Custom Admin Profit - WITH BIG +/- BUTTONS */}
    <div style={{ marginBottom: 20 }}>
      <label style={{
        display: 'block',
        fontSize: 11,
        fontWeight: 700,
        color: '#9ca3af',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        marginBottom: 8
      }}>
        💰 Platform Profit (Admin Cut)
      </label>
      
      <div style={{ position: 'relative' }}>
        <span style={{
          position: 'absolute',
          left: 14,
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#22c55e',
          fontWeight: 800,
          fontSize: 16
        }}>৳</span>
        
        {/* ★ BIG +/- CONTROLS FOR ADMIN */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button
            onClick={() => !readOnly && setCustomAdminProfit(Math.max(0, customAdminProfit - 10))}
            disabled={readOnly || customAdminProfit <= 0}
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              border: '2px solid rgba(239,68,68,0.3)',
              background: customAdminProfit > 0 ? 'rgba(239,68,68,0.1)' : 'rgba(255,255,255,0.03)',
              color: customAdminProfit > 0 ? '#ef4444' : '#555555',
              fontSize: 20,
              fontWeight: 800,
              cursor: (readOnly || customAdminProfit <= 0) ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.15s',
              flexShrink: 0
            }}
          >
            −
          </button>
          
          <input
            type="number"
            value={customAdminProfit}
            onChange={(e) => setCustomAdminProfit(Math.max(0, Number(e.target.value)))}
            disabled={readOnly}
            placeholder="0"
            style={{
              flex: 1,
              padding: '14px 14px 14px 36px',
              borderRadius: 12,
              border: '2px solid rgba(34,197,94,0.2)',
              background: 'rgba(0,0,0,0.3)',
              color: '#fff',
              fontSize: 22,
              fontWeight: 900,
              outline: 'none',
              boxSizing: 'border-box',
              fontFamily: "'Inter', monospace",
              textAlign: 'center',
              MozAppearance: 'textfield'
            }}
          />
          
          <button
            onClick={() => !readOnly && setCustomAdminProfit(customAdminProfit + 10)}
            disabled={readOnly}
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              border: '2px solid rgba(34,197,94,0.3)',
              background: 'rgba(34,197,94,0.1)',
              color: '#22c55e',
              fontSize: 20,
              fontWeight: 800,
              cursor: readOnly ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.15s',
              flexShrink: 0
            }}
          >
            +
          </button>
        </div>
        
        {/* Percentage display */}
        <div style={{
          marginTop: 6,
          textAlign: 'center',
          fontSize: 11,
          color: '#64748b',
          fontWeight: 600
        }}>
          {totalCollection > 0 
            ? ((customAdminProfit / totalCollection) * 100).toFixed(1) + '% of collection'
            : '—'}
        </div>
      </div>
    </div>

    {/* ★ QUICK ACTION TEMPLATES (One-Tap Setup!) */}
    <div style={{ marginBottom: 24 }}>
      <label style={{
        display: 'block',
        fontSize: 11,
        fontWeight: 700,
        color: '#9ca3af',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        marginBottom: 10
      }}>
        ⚡ Quick Templates (Auto-Fill Prizes)
      </label>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 8
      }}>
        {/* Template 1: Standard Esports Split */}
        <button
          onClick={() => {
            if (readOnly) return
            const pool = Math.max(0, totalCollection - customAdminProfit)
            if (pool <= 0) return alert('Not enough collection after admin cut')
            
            const weights = [40, 22, 15, 10, 5].slice(0, manualPrizes.length)
            const totalWeight = weights.reduce((s, w) => s + w, 0)
            let distributed = 0
            
            setManualPrizes(weights.map((w, i) => {
              const isLast = i === weights.length - 1
              const amount = isLast 
                ? Math.max(0, pool - distributed)
                : Math.round((pool * w) / totalWeight)
              distributed += amount
              // Round UP to nearest 5
              const roundedUp = Math.ceil(amount / 5) * 5
              return { 
                rank: manualPrizes[i]?.rank || `${i+1}st`, 
                amount: roundedUp 
              }
            }))
          }}
          disabled={readOnly}
          style={{
            padding: '12px',
            borderRadius: 10,
            border: '1px solid rgba(99,102,241,0.25)',
            background: 'rgba(99,102,241,0.08)',
            color: '#818cf8',
            fontSize: 12,
            fontWeight: 700,
            cursor: readOnly ? 'not-allowed' : 'pointer',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            transition: 'all 0.2s'
          }}
        >
          <span style={{ fontSize: 16 }}>📊</span>
          <div>
            <div>Standard Split</div>
            <div style={{ fontSize: 9, opacity: 0.7, fontWeight: 500 }}>40/22/15/10/5%</div>
          </div>
        </button>
        
        {/* Template 2: Equal Distribution */}
        <button
          onClick={() => {
            if (readOnly) return
            const pool = Math.max(0, totalCollection - customAdminProfit)
            if (pool <= 0) return
            
            const perPrize = Math.floor(pool / manualPrizes.length)
            const remainder = pool - (perPrize * manualPrizes.length)
            
            setManualPrizes(manualPrizes.map((p, i) => ({
              ...p,
              amount: perPrize + (i === 0 ? remainder : 0)
            })))
          }}
          disabled={readOnly}
          style={{
            padding: '12px',
            borderRadius: 10,
            border: '1px solid rgba(34,197,94,0.25)',
            background: 'rgba(34,197,94,0.08)',
            color: '#22c55e',
            fontSize: 12,
            fontWeight: 700,
            cursor: readOnly ? 'not-allowed' : 'pointer',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            transition: 'all 0.2s'
          }}
        >
          <span style={{ fontSize: 16 }}>⚖️</span>
          <div>
            <div>Equal Split</div>
            <div style={{ fontSize: 9, opacity: 0.7, fontWeight: 500 }}>Divide evenly</div>
          </div>
        </button>
        
        {/* Template 3: Winner Takes All */}
        <button
          onClick={() => {
            if (readOnly) return
            const pool = Math.max(0, totalCollection - customAdminProfit)
            if (pool <= 0) return
            
            setManualPrizes(manualPrizes.map((p, i) => ({
              ...p,
              amount: i === 0 ? Math.ceil(pool / 5) * 5 : 0  // Round up
            })))
          }}
          disabled={readOnly}
          style={{
            padding: '12px',
            borderRadius: 10,
            border: '1px solid rgba(251,191,36,0.25)',
            background: 'rgba(251,191,36,0.08)',
            color: '#fbbf24',
            fontSize: 12,
            fontWeight: 700,
            cursor: readOnly ? 'not-allowed' : 'pointer',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            transition: 'all 0.2s'
          }}
        >
          <span style={{ fontSize: 16 }}>👑</span>
          <div>
            <div>Winner Takes All</div>
            <div style={{ fontSize: 9, opacity: 0.7, fontWeight: 500 }}>1st gets everything</div>
          </div>
        </button>
        
        {/* Template 4: Round All Up (Clean Numbers Only) */}
        <button
          onClick={() => {
            if (readOnly) return
            setManualPrizes(manualPrizes.map(p => ({
              ...p,
              amount: Math.ceil((p.amount || 0) / 5) * 5  // Round UP to nearest 5
            })))
          }}
          disabled={readOnly}
          style={{
            padding: '12px',
            borderRadius: 10,
            border: '1px solid rgba(168,85,247,0.25)',
            background: 'rgba(168,85,247,0.08)',
            color: '#a78bfa',
            fontSize: 12,
            fontWeight: 700,
            cursor: readOnly ? 'not-allowed' : 'pointer',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            transition: 'all 0.2s'
          }}
        >
          <span style={{ fontSize: 16 }}>✨</span>
          <div>
            <div>Round All Up</div>
            <div style={{ fontSize: 9, opacity: 0.7, fontWeight: 500 }}>Clean figures only</div>
          </div>
        </button>
      </div>
      
      {/* Hint text */}
      <div style={{
        fontSize: 10,
        color: '#555555',
        fontStyle: 'italic',
        marginTop: 6,
        textAlign: 'center'
      }}>
        Click a template to auto-fill prizes, then adjust with +/- buttons below
      </div>
    </div>

    {/* External Funding Toggle - KEEP YOUR EXISTING CODE */}
    <div style={{ marginBottom: 20 }}>
      <label style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '14px 16px',
        borderRadius: 10,
        border: `1px solid ${isExternallyFunded ? 'rgba(139, 92, 246, 0.3)' : 'rgba(255,255,255,0.08)'}`,
        background: isExternallyFunded ? 'rgba(139, 92, 246, 0.08)' : 'transparent',
        cursor: readOnly ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s'
      }}
      onClick={() => !readOnly && setIsExternallyFunded(!isExternallyFunded)}
      >
        <div style={{
          width: 44,
          height: 24,
          borderRadius: 12,
          background: isExternallyFunded ? '#8b5cf6' : '#374151',
          position: 'relative',
          transition: 'background 0.2s',
          flexShrink: 0
        }}>
          <div style={{
            width: 20,
            height: 20,
            borderRadius: '50%',
            background: '#fff',
            position: 'absolute',
            top: 2,
            left: isExternallyFunded ? 22 : 2,
            transition: 'left 0.2s',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }} />
        </div>
        <div>
          <div style={{
            fontSize: 13,
            fontWeight: 700,
            color: isExternallyFunded ? '#c084fc' : '#9ca3af'
          }}>
            💰 Externally Funded (Sponsor Money)?
          </div>
          <div style={{
            fontSize: 11,
            color: '#555555',
            marginTop: 2
          }}>
            Mark if sponsor added extra prize money beyond player entries
          </div>
        </div>
      </label>
    </div>

    {/* ★ MANUAL PRIZE ROWS WITH EASY +/- CONTROLS ★ */}
    <div style={{ marginBottom: 20 }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12
      }}>
        <label style={{
          fontSize: 11,
          fontWeight: 700,
          color: '#9ca3af',
          textTransform: 'uppercase',
          letterSpacing: '0.1em'
        }}>
          🏆 Prize Breakdown ({manualPrizes.length} positions)
        </label>
        
        {!readOnly && (
          <div style={{ display: 'flex', gap: 6 }}>
            <button
              onClick={() => {
                const nextRank = manualPrizes.length + 1
                const ordinal = nextRank === 1 ? 'st' : nextRank === 2 ? 'nd' : nextRank === 3 ? 'rd' : 'th'
                setManualPrizes([...manualPrizes, { rank: `${nextRank}${ordinal}`, amount: 0 }])
              }}
              style={{
                padding: '6px 12px',
                borderRadius: 6,
                border: '1px dashed rgba(34,197,94,0.3)',
                background: 'transparent',
                color: '#22c55e',
                fontSize: 11,
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 4
              }}
            >
              <i className="fa-solid fa-plus" style={{ fontSize: 9 }} /> Add Rank
            </button>
            
            {manualPrizes.length > 1 && (
              <button
                onClick={() => setManualPrizes(manualPrizes.slice(0, -1))}
                style={{
                  padding: '6px 12px',
                  borderRadius: 6,
                  border: '1px dashed rgba(239,68,68,0.3)',
                  background: 'transparent',
                  color: '#ef4444',
                  fontSize: 11,
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4
                }}
              >
                <i className="fa-solid fa-minus" style={{ fontSize: 9 }} /> Remove
              </button>
            )}
          </div>
        )}
      </div>

      {/* Render each prize row with EASY +/- BUTTONS */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {manualPrizes.map((prize, idx) => {
          const medals = ['🥇', '🥈', '🥉']
          const colors = ['#fbbf24', '#d1d5db', '#cd7f32']
          
          return (
            <div key={idx} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '14px 16px',
              background: idx % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.01)',
              borderRadius: 12,
              border: `1px solid ${idx === 0 ? 'rgba(251,191,36,0.15)' : 'rgba(255,255,255,0.06)'}`,
              marginBottom: 4
            }}>
              {/* Rank Badge */}
              <div style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: `linear-gradient(135deg, ${colors[idx] || '#64748b'}30, ${colors[idx] || '#64748b'}10)`,
                border: `1px solid ${colors[idx] || '#64748b'}25`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 18,
                flexShrink: 0,
                fontWeight: 800
              }}>
                {medals[idx] || `#${idx + 1}`}
              </div>
              
              {/* Rank Label */}
              <div style={{ minWidth: 55, flexShrink: 0 }}>
                <div style={{ 
                  fontSize: 14, 
                  fontWeight: 800, 
                  color: '#fff',
                  marginBottom: 2 
                }}>
                  {prize.rank}
                </div>
                <div style={{ 
                  fontSize: 10, 
                  color: '#64748b',
                  fontWeight: 600 
                }}>
                  Position #{idx + 1}
                </div>
              </div>
              
              {/* ★ BIG +/- CONTROLS FOR EACH PRIZE ★ */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 8, 
                flex: 1,
                justifyContent: 'flex-end'
              }}>
                {/* Minus Button (-5 TK) */}
                <button
                  onClick={() => !readOnly && handleManualPrizeChange(idx, Math.max(0, (prize.amount || 0) - 5))}
                  disabled={readOnly || (prize.amount || 0) <= 0}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    border: '2px solid rgba(239,68,68,0.3)',
                    background: (prize.amount || 0) > 0 ? 'rgba(239,68,68,0.1)' : 'rgba(255,255,255,0.03)',
                    color: (prize.amount || 0) > 0 ? '#ef4444' : '#555555',
                    fontSize: 18,
                    fontWeight: 800,
                    cursor: ((readOnly || (prize.amount || 0) <= 0)) ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.15s',
                    flexShrink: 0
                  }}
                >
                  −
                </button>
                
                {/* Amount Display (Big & Clear!) */}
                <div style={{ textAlign: 'center', minWidth: 75 }}>
                  <input
                    type="number"
                    value={prize.amount || ''}
                    onChange={(e) => handleManualPrizeChange(idx, e.target.value)}
                    disabled={readOnly}
                    placeholder="0"
                    style={{
                      width: '100%',
                      padding: '10px 6px',
                      borderRadius: 8,
                      border: '2px solid rgba(255,255,255,0.1)',
                      background: 'rgba(0,0,0,0.3)',
                      color: '#fff',
                      fontSize: 18,
                      fontWeight: 900,
                      textAlign: 'center',
                      outline: 'none',
                      fontFamily: "'Inter', monospace",
                      MozAppearance: 'textfield'
                    }}
                  />
                  <div style={{ 
                    fontSize: 10, 
                    color: '#64748b', 
                    marginTop: 2,
                    fontWeight: 600 
                  }}>
                    TK
                  </div>
                </div>
                
                {/* Plus Button (+5 TK) */}
                <button
                  onClick={() => !readOnly && handleManualPrizeChange(idx, (prize.amount || 0) + 5)}
                  disabled={readOnly}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    border: '2px solid rgba(34,197,94,0.3)',
                    background: 'rgba(34,197,94,0.1)',
                    color: '#22c55e',
                    fontSize: 18,
                    fontWeight: 800,
                    cursor: readOnly ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.15s',
                    flexShrink: 0
                  }}
                >
                  +
                </button>
                
                {/* Fine Tune (+1/-1) */}
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: 3,
                  flexShrink: 0 
                }}>
                  <button
                    onClick={() => !readOnly && handleManualPrizeChange(idx, (prize.amount || 0) + 1)}
                    disabled={readOnly}
                    style={{
                      width: 30,
                      height: 26,
                      borderRadius: 6,
                      border: '1px solid rgba(34,197,94,0.2)',
                      background: 'rgba(34,197,94,0.05)',
                      color: '#22c55e',
                      fontSize: 12,
                      fontWeight: 700,
                      cursor: readOnly ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    ▲
                  </button>
                  <button
                    onClick={() => !readOnly && handleManualPrizeChange(idx, Math.max(0, (prize.amount || 0) - 1))}
                    disabled={readOnly || (prize.amount || 0) <= 0}
                    style={{
                      width: 30,
                      height: 26,
                      borderRadius: 6,
                      border: '1px solid rgba(239,68,68,0.2)',
                      background: 'rgba(239,68,68,0.05)',
                      color: '#ef4444',
                      fontSize: 12,
                      fontWeight: 700,
                      cursor: ((readOnly || (prize.amount || 0) <= 0)) ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    ▼
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </>
)}
      {/* ═══ LIVE PREVIEW PANEL ═══ */}
      <div style={{
        background: '#0a0a0f',
        borderRadius: 12,
        border: '1px solid rgba(255,255,255,0.06)',
        padding: 20,
        marginTop: 24
      }}>
        <h3 style={{
          fontFamily: "'Lexend', sans-serif",
          fontSize: 14,
          fontWeight: 800,
          color: '#fff',
          margin: '0 0 16px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          📊 Live Financial Preview
        </h3>

        <VerificationBadge />
        <RecommendationList />

        {/* Summary Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 12,
          marginBottom: 20
        }}>
          <div style={{
            padding: 14,
            background: '#1c1b1d',
            borderRadius: 10,
            border: '1px solid rgba(255,255,255,0.04)'
          }}>
            <div style={{ fontSize: 10, color: '#6b7280', textTransform: 'uppercase', marginBottom: 4 }}>
              Platform Profit
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#4ade80', fontFamily: "'Inter', sans-serif" }}>
              {formatTK(preview.adminProfit)}
            </div>
            <div style={{ fontSize: 11, color: '#555555', marginTop: 2 }}>
              ({preview.adminPercent.toFixed(1)}% of collection)
            </div>
          </div>

          <div style={{
            padding: 14,
            background: '#1c1b1d',
            borderRadius: 10,
            border: '1px solid rgba(255,255,255,0.04)'
          }}>
            <div style={{ fontSize: 10, color: '#6b7280', textTransform: 'uppercase', marginBottom: 4 }}>
              Prize Pool
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#f59e0b', fontFamily: "'Inter', sans-serif" }}>
              {formatTK(preview.prizePool)}
            </div>
            <div style={{ fontSize: 11, color: '#555555', marginTop: 2 }}>
              ({preview.prizes.length} prize positions)
            </div>
          </div>
        </div>

        {/* Prize Breakdown List */}
        <div style={{
          background: '#1c1b1d',
          borderRadius: 10,
          border: '1px solid rgba(255,255,255,0.04)',
          overflow: 'hidden'
        }}>
          <div style={{
            padding: '10px 14px',
            background: 'rgba(255,255,255,0.02)',
            borderBottom: '1px solid rgba(255,255,255,0.04)',
            fontSize: 11,
            fontWeight: 700,
            color: '#6b7280',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            Prize Distribution
          </div>
          
          {preview.prizes.map((prize, idx) => (
            <div key={idx} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 14px',
              borderBottom: idx < preview.prizes.length - 1 ? '1px solid rgba(255,255,255,0.03)' : 'none'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{
                  width: 28,
                  height: 28,
                  borderRadius: 8,
                  background: idx === 0 
                    ? 'linear-gradient(135deg, #fbbf24, #f59e0b)' 
                    : idx === 1 
                      ? 'linear-gradient(135deg, #d1d5db, #9ca3af)' 
                      : 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 12,
                  fontWeight: 800,
                  color: idx < 2 ? '#000' : '#9ca3af'
                }}>
                  {idx + 1}
                </span>
                <span style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: '#fff'
                }}>
                  {prize.rank}
                </span>
              </div>
              
              <span style={{
                fontSize: 16,
                fontWeight: 800,
                color: idx === 0 ? '#fbbf24' : '#e5e7eb',
                fontFamily: "'Inter', sans-serif"
              }}>
                {formatTK(prize.amount)}
              </span>
            </div>
          ))}
        </div>

        {/* Total Verification */}
        <div style={{
          marginTop: 16,
          padding: '14px',
          background: preview.isBalanced 
            ? 'rgba(74, 222, 128, 0.05)' 
            : 'rgba(239, 68, 68, 0.05)',
          borderRadius: 8,
          border: `1px solid ${
            preview.isBalanced 
              ? 'rgba(74, 222, 128, 0.15)' 
              : 'rgba(239, 68, 68, 0.15)'
          }`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: '#9ca3af' }}>
            Total Accounted For:
          </span>
          <span style={{
            fontSize: 16,
            fontWeight: 800,
            color: preview.isBalanced ? '#4ade80' : '#ef4444',
            fontFamily: "'Inter', sans-serif"
          }}>
            {formatTK(preview.adminProfit + preview.totalDistributed + preview.leftover)} 
            <span style={{ fontSize: 12, color: '#6b7280', marginLeft: 8 }}>
              of {formatTK(totalCollection)} collection
            </span>
          </span>
        </div>
      </div>

      {/* Hash for verification (hidden but present) */}
      <div style={{
        marginTop: 16,
        padding: '10px 14px',
        background: '#0a0a0f',
        borderRadius: 8,
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10,
        color: '#374151',
        textAlign: 'center'
      }}>
        Verification Hash: {preview.verificationHash}
      </div>
    </div>
  )
}