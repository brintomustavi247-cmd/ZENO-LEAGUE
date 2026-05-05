# Clutch Arena BD V6.0 - ARCHITECTURE DOMAIN LEAD BRIEFING

**Delivered:** 2026-05-02  
**Status:** ✅ COMPLETE - READY FOR IMPLEMENTATION PHASE  
**Lead:** Architecture Domain Lead  
**Team Scope:** All 6 domains (GameEconomy, UserProgression, SocialSystems, SeasonalContent, EngagementLoop + Infrastructure)

---

## 📋 EXECUTIVE BRIEF

I have completed the comprehensive architecture blueprint for Clutch Arena BD V6.0, transforming it from a transaction-focused platform to a **scalable game economy system** supporting 50,000+ concurrent users.

**Key Achievement:** Designed a domain-driven architecture that eliminates the current bottleneck (1000-line monolithic reducer) through 6 independent Redux slices with intelligent middleware orchestration.

---

## 📦 DELIVERABLES SUMMARY

### 1. **Architecture Decision Record (ADR)** ✅
**File:** `ARCHITECTURE_ADR_V6.0.md` (2,500+ lines)

A comprehensive technical document covering:
- **Executive Summary** - Goals, metrics, scope
- **Architecture Patterns** - DDD, Redux slices, DI container structure
- **Game Economy Architecture** - Tier progression, referral state machine, engagement loops, clan subsystem
- **Cloud Infrastructure** - 12 Firestore collections, security rules, 3 Cloud Functions with triggers
- **Error Resilience** - Transaction rollback, idempotency keys, compensation engine, migration versioning
- **API Contracts** - 40+ TypeScript interfaces (all domains)
- **Performance Strategy** - Caching, indexing, pagination, real-time optimization
- **Implementation Roadmap** - 12-week sprint breakdown

### 2. **Coder Handoff Document** ✅
**File:** `CODER_HANDOFF_V6.0.md` (detailed sprint planning)

- Sprint breakdown (4 sprints × 2 weeks)
- Task decomposition (9 domain services + 6 Redux slices)
- Dependency mapping
- Success metrics
- Communication protocol

---

## 🏗️ ARCHITECTURE OVERVIEW

### Bounded Contexts (Domain-Driven Design)

```
CLUTCH ARENA BD V6.0 - ARCHITECTURE
════════════════════════════════════

┌─────────────────────────────────────────────────────────┐
│  1. GAME ECONOMY                                        │
│  ├─ Match lifecycle (PENDING → ACTIVE → COMPLETED)     │
│  ├─ Atomic prize distribution                          │
│  ├─ Transaction journal (100% audit trail)             │
│  └─ Wallet management (balance + locked)               │
└─────────────────────────────────────────────────────────┘
           ↓ (XP awarded)
┌─────────────────────────────────────────────────────────┐
│  2. USER PROGRESSION                                    │
│  ├─ 11-tier system (Bronze → Immortal)                 │
│  ├─ XP-based advancement                               │
│  ├─ Tier-specific perks (5-50% bonuses)                │
│  └─ Achievement tracking                               │
└─────────────────────────────────────────────────────────┘
           ↓ (on tier up)
┌─────────────────────────────────────────────────────────┐
│  3. SOCIAL SYSTEMS                                      │
│  ├─ Referral v2.0 (5-step state machine)               │
│  │  INVITED → PENDING → MILESTONE_1 → MILESTONE_2 →   │
│  │  MILESTONE_3 → COMPLETE                             │
│  │                                                      │
│  │  Bonus unlock: 20 + 30 + 20 TK (70 total)           │
│  │                                                      │
│  ├─ Clan subsystem (members, treasury, perks)          │
│  ├─ Reputation system (1-5 score)                      │
│  └─ Social messaging                                   │
└─────────────────────────────────────────────────────────┘
           ↓ (monthly)
┌─────────────────────────────────────────────────────────┐
│  4. SEASONAL CONTENT                                    │
│  ├─ Monthly seasons (auto-rollover 1st of month)       │
│  ├─ Leaderboard rankings (top 100)                     │
│  ├─ Seasonal reward distribution (1000 TK top 10)      │
│  └─ Historical archival                                │
└─────────────────────────────────────────────────────────┘
           ↑ (coordinates)
┌─────────────────────────────────────────────────────────┐
│  5. ENGAGEMENT LOOP ORCHESTRATOR (Central)              │
│  ├─ Daily reset (04:00 UTC)                            │
│  │  └─ Reset streaks, generate quests, reset ads       │
│  ├─ Match completion trigger                           │
│  │  └─ Referral milestones, tier checks, quest progress│
│  ├─ Monthly orchestration                              │
│  │  └─ Season rollover, reward distribution            │
│  └─ Cross-domain coordination (middleware)             │
└─────────────────────────────────────────────────────────┘
```

### Redux State Management (From Monolithic to Sliced)

**Before (V5.0 - Problematic):**
```
reducer(state, action) {
  // 1000+ lines of:
  // - if (action.type === 'X') { update A, B, C, D... }
  // - Tight coupling between match → wallet → referral
  // - Cascade updates causing race conditions
  // - Difficult to test individual features
}
```

**After (V6.0 - Clean):**
```
Redux Store
├─ auth (identity, login/logout)
├─ matches (match lifecycle, filtering)
├─ wallet (balance, transactions, withdrawals)
├─ gamification (tiers, XP, streaks, quests)
├─ social (referrals, clans, reputation)
└─ seasonal (current season, rankings, leaderboards)

+ Middleware Layer
├─ GameEconomyMiddleware (listens for cross-slice updates)
└─ OrchestratorMiddleware (coordinates: tier up → quest progress → referral check)
```

**Benefits:**
- Each slice <200 lines (testable)
- Zero coupling between slices
- Middleware handles orchestration
- 100% type-safe with Redux Toolkit

---

## 🗄️ FIRESTORE SCHEMA (12 Collections)

### Collection Design

```
FIRESTORE DATABASE SCHEMA
═════════════════════════

users/
├─ uid (PK)
├─ profile: { ign, displayName, avatar }
├─ wallet: { balance, lockedBalance, totalEarnings }
├─ progression: { xp, tier, achievements, milestones }
├─ engagement: { dailyQuests[], streakData, adCooldown, canSpin }
├─ social: { referralStats, clanId, reputation, followers }
└─ platform: { role, status, createdAt, lastLogin }

matches/
├─ matchId (PK)
├─ players: [ { uid, ign, kills, earnings } ]
├─ winner: { uid, prize, xpReward }
├─ status: PENDING | ACTIVE | COMPLETED | CANCELLED
└─ createdAt, completedAt (ISO8601)

transactions/
├─ txId (PK) = idempotencyKey (unique constraint)
├─ userId
├─ type: MATCH_WIN | AD_REWARD | QUEST_COMPLETE | REFERRAL_UNLOCK | CLAN_DEPOSIT
├─ amount, xp (if applicable)
├─ status: PENDING | COMPLETED | FAILED | ROLLED_BACK
└─ timestamp (index for sorting)

referrals/
├─ refId (PK)
├─ referrerUID, refereeUID
├─ status: PENDING | MILESTONE_1 | MILESTONE_2 | MILESTONE_3 | COMPLETE | COMPENSATED
├─ lockedBalance, unlockedBalance
├─ milestones: { milestone1, milestone2, milestone3 }
└─ createdAt

clans/
├─ clanId (PK)
├─ name, tag, leaderId
├─ members: [ { uid, role, joinedAt, totalContribution } ]
├─ treasury: { balance, totalDeposits, totalWithdrawals, history[] }
├─ seasonStats: { totalWins, totalKills, totalEarnings, leaderboardPosition }
├─ perks: { xpBonus, matchBonus, treasurySlots }
└─ createdAt

seasons/
├─ seasonId (PK)
├─ number, status: ACTIVE | COMPLETED | ARCHIVED
├─ startDate, endDate
├─ leaderboard: [ { uid, username, tier, wins, earnings, position } ]
└─ rewards: { top10: 1000, top50: 500, top100: 250 }

dailyQuests/
├─ questId (PK)
├─ userId (index), dateStr (index)
├─ type: WINS | KILLS | MATCHES | EARNINGS | HEADSHOTS
├─ target, current, reward
├─ claimed
└─ createdAt

reputation/
├─ uid (PK)
├─ score: 1-5
├─ reasons: [ { category, value, timestamp } ]
├─ reports: [ { reportedBy, reason, timestamp } ]
└─ lastUpdated

profitLogs/
├─ logId (PK)
├─ userId (owner only)
├─ date, totalMatches, totalPrizeDistributed, totalRevenue, netProfit
└─ timestamp

activityLog/
├─ logId (PK)
├─ userId (index), action
├─ metadata, timestamp (index)
└─ ttl: 90 days (auto-delete)

addMoneyRequests/
├─ requestId (PK)
├─ userId, amount, method: BKASH | NAGAD | ROCKET
├─ status: PENDING | APPROVED | REJECTED
└─ timestamp

withdrawals/
├─ withdrawalId (PK)
├─ userId, amount, method, accountNumber (encrypted)
├─ status: PENDING | APPROVED | REJECTED | COMPLETED
└─ timestamp
```

### Firestore Indexes
- (users, role, status)
- (referrals, referrerUID, status)
- (matches, status, createdAt desc)
- (dailyQuests, userId, dateStr desc)
- (transactions, userId, type, timestamp desc)
- (seasons, status)
- (activityLog, userId, timestamp desc)

---

## ☁️ CLOUD FUNCTIONS (Event-Driven)

### Function 1: Daily Reset
**Trigger:** Pubsub schedule `0 4 * * *` (04:00 UTC daily)

```
On Daily Reset:
  FOR EACH user:
    1. Reset streak (if >24h since last claim)
       └─ streakData.currentStreak = 1
       └─ streakData.lastClaimDate = today
    
    2. Generate daily quests (deterministic)
       └─ Seed = parseInt(dateStr.replace(/-/g, ''), 10)
       └─ Seeded RNG ensures same quests for all users on same date
       └─ Quest templates: WINS(2), KILLS(10), MATCHES(5)
    
    3. Reset ad cooldown
       └─ adCooldown = 0
```

### Function 2: Referral Milestone Processing
**Trigger:** Firestore `matches` collection write

```
On Match Completed:
  1. Get winner's referral info
  2. Check milestone progress:
     ├─ 1st match → unlock 30 TK (now 50 total locked)
     ├─ 3rd match → unlock 20 TK (now 70 total locked)
     └─ 5th match → status = MILESTONE_3 (ready for final unlock)
  
  3. Update referral document
  4. When referrer plays next match:
     └─ Unlock ALL locked balance to referrer wallet
```

### Function 3: Season Rollover
**Trigger:** Pubsub schedule `0 0 1 * *` (1st of month, 00:00 UTC)

```
On Season Rollover:
  1. Finalize current season
     └─ Status: ACTIVE → COMPLETED
  
  2. Distribute seasonal rewards
     ├─ Top 10: 1,000 TK each
     ├─ Top 50 (11-50): 500 TK each
     └─ Top 100 (51-100): 250 TK each
  
  3. Archive current season
  
  4. Create new season
     └─ Auto-start (no manual intervention)
```

---

## 🔒 SECURITY & ERROR RESILIENCE

### Transaction Atomicity Strategy

All multi-step operations use Firestore transactions:

```typescript
runTransaction(db, async (transaction) => {
  1. GET user document (lock acquired)
  2. VALIDATE balance/XP
  3. UPDATE user (balance + XP)
  4. WRITE transaction log (audit trail)
  5. UPDATE match status
  
  // ALL or NOTHING - no intermediate states
  // If ANY step fails → entire transaction rolls back
})
```

**Operations using atomic transactions:**
- Prize distribution (match → balance + XP + log)
- Referral unlock (referrer → balance update + referral mark complete)
- Quest claim (quest → XP update + log)
- Clan deposit (user balance → clan treasury)

### Idempotency Keys (Duplicate Prevention)

```
Format: ${operationType}#${userId}#${resourceId}#${timestamp}

Examples:
├─ MATCH_WIN#user123#match456#1714700000000
├─ QUEST_CLAIM#user789#quest_2026_05_02_1#1714700100000
└─ REFERRAL_UNLOCK#user456#user123#1714700200000

On retry:
1. Check if transaction with this key exists
2. If COMPLETED → return cached result
3. If PENDING → wait for in-flight operation
4. If FAILED → attempt retry
```

### Compensation Engine

```
If referral unlock fails:
  1. Return locked balance to referrer's wallet
  2. Mark referral as COMPENSATED
  3. Log compensation transaction

If quest claim fails:
  1. Return XP reward to user
  2. Leave quest unclaimed
  3. Log compensation

If clan deposit fails:
  1. Return balance to user
  2. Leave treasury unchanged
  3. Allow retry
```

---

## 📊 PERFORMANCE OPTIMIZATION

### Caching Strategy
| Component | Cache | TTL | Hit Rate |
|-----------|-------|-----|----------|
| Tier calculation | TierCacheService | 5 min | 95% |
| User progression | Redux (in-memory) | session | 99% |
| Leaderboard | Batch update | monthly | 100% |

### Query Optimization
| Query | Latency Target | Strategy |
|-------|----------------|----------|
| User data | <100ms | Firestore indexes + field selection |
| Referral progress | <150ms | Index on (referrerUID, status) |
| Daily quests | <50ms | Index on (userId, dateStr) |
| Leaderboard (paginated) | <300ms | Batch queries + 50 items/page |
| Real-time listeners | <500ms | Debounce 100ms + selective queries |

### Pagination
```
Leaderboard:
├─ Page 1: positions 1-50
├─ Page 2: positions 51-100
├─ Page 3: positions 101-150
└─ Typical user views 1-2 pages only

Daily Quests:
├─ 3 quests per user (no pagination needed)

Clans:
├─ Load 25 members at a time
└─ Lazy load additional members on scroll
```

---

## 🎯 TIER PROGRESSION SYSTEM

### 11-Tier Hierarchy with Perks

```
Tier      XP Range    Color        Perks (% bonus)
────────────────────────────────────────────────────
1 Bronze    0-500      #CD7F32      none
2 Silver    500-1500   #C0C0C0      +5% match, +5% quest
3 Gold      1500-3000  #FFD700      +10% match, +10% quest, +5% referral
4 Platinum  3000-5500  #E5E4E2      +15% match, +15% quest, +10% referral, +5% streak
5 Diamond   5500-8500  #B9F2FF      +20% match, +20% quest, +15% referral, +10% streak
6 Ruby      8500-12k   #E0115F      +25% match, +25% quest, +20% referral, +15% streak
7 Emerald   12k-16k    #50C878      +30% match, +30% quest, +25% referral, +20% streak
8 Sapphire  16k-21k    #0F52BA      +35% match, +35% quest, +30% referral, +25% streak
9 Mythic    21k-27k    #9933FF      +40% match, +40% quest, +35% referral, +30% streak
10 Celestial 27k-35k   #FFE200      +45% match, +45% quest, +40% referral, +35% streak
11 Immortal 35k+       #FF4500      +50% match, +50% quest, +50% referral, +50% streak
```

**XP Sources:**
- Match win: 25-75 XP (+ tier bonus)
- Quest complete: 50-100 XP (+ tier bonus)
- Referral unlock: 10 XP (+ tier bonus)
- Daily streak: 5-100 XP (3x multiplier on day 7)

---

## 🎰 REFERRAL STATE MACHINE (5-Step Flow)

```
User A (Referrer) creates referral code → "USER123A"

                    ↓

User B receives code, joins as INVITED

                    ↓

User B plays 1st match (Referee milestone 1)
  Action: Referrer gets 20 TK locked
  State: PENDING → MILESTONE_1
  TK: 20 locked

                    ↓

User B plays 3rd match (Referee milestone 2)
  Action: Referrer gets +30 TK locked
  State: MILESTONE_1 → MILESTONE_2
  TK: 50 locked (20 + 30)

                    ↓

User B plays 5th match (Referee milestone 3)
  Action: Referrer gets +20 TK locked
  State: MILESTONE_2 → MILESTONE_3
  TK: 70 locked (20 + 30 + 20)

                    ↓

User A (Referrer) plays their next match
  Action: ALL locked TK → balance (atomic)
  State: MILESTONE_3 → COMPLETE
  TK: 0 locked, 70 in balance ✓

Benefits:
├─ Referrer: 70 TK profit
├─ Referee: Engaged with 5 matches
└─ Platform: User retention + 5 additional matches
```

---

## 🏛️ CLAN SUBSYSTEM

### Clan Structure
```
Clan (e.g., "Elite Gaming")
├─ Leader (1)
│  └─ Can disband, set perks, withdraw treasury
├─ Officers (0-5)
│  └─ Can approve members, manage quests
├─ Members (0-50)
│  └─ Can contribute to treasury, view stats
│
├─ Treasury (Shared Pool)
│  ├─ Current balance
│  ├─ Total deposits (cumulative)
│  ├─ Transaction history
│  └─ Auto-withdrawal for monthly costs
│
└─ Perks (Based on Size)
   ├─ 1-10 members: +5% XP
   ├─ 11-25 members: +10% XP, +5% match bonus
   ├─ 26-50 members: +15% XP, +10% match bonus
   └─ Treasury slots scale with size
```

### Clan Progression
```
Month 1: 10 members earn 1000 XP each + clan perks
  → Treasury: 0 (members keep earnings)
  → Leaderboard: Clan rank #45

Month 2: 20 members, some deposit to treasury
  → Treasury: 500 TK + perks upgrade (+10% XP)
  → Leaderboard: Clan rank #32

Month 3: 50 members, coordinated strategy
  → Treasury: 2000 TK + max perks (+15% XP)
  → Leaderboard: Clan rank #8
  → Seasonal reward: Clan gets reward pool share
```

---

## 📈 IMPLEMENTATION ROADMAP

### Sprint 1: Foundation (Weeks 1-2)
**Goal:** Domain services + state management ready

Tasks:
- [ ] TierService (tier calculation, caching)
- [ ] ReferralService (state machine, milestone tracking)
- [ ] QuestService (daily generation, progress)
- [ ] ClanService (membership, treasury)
- [ ] EngagementLoopOrchestrator (cross-domain coordination)
- [ ] Redux slices (6 slices with middleware)
- [ ] Firestore migrations (V5.0 → V6.0 auto-upgrade)

### Sprint 2: Infrastructure (Weeks 3-4)
**Goal:** Cloud Functions + security deployed

Tasks:
- [ ] Daily Reset Cloud Function
- [ ] Referral Milestone Cloud Function
- [ ] Season Rollover Cloud Function
- [ ] Firestore Security Rules
- [ ] Error handling + compensation logic
- [ ] Transaction logging

### Sprint 3: Features (Weeks 5-6)
**Goal:** UI components + integration tests

Tasks:
- [ ] TierProgressCard component
- [ ] ReferralDashboard component
- [ ] QuestTracker component
- [ ] ClanPanel component
- [ ] SeasonLeaderboard component
- [ ] Integration tests for all features

### Sprint 4: Optimization & Launch (Weeks 7-8)
**Goal:** Performance + production ready

Tasks:
- [ ] Performance benchmarking
- [ ] E2E test suite (>85% coverage)
- [ ] Load testing (5K concurrent users)
- [ ] Security audit
- [ ] Staging deployment
- [ ] Production rollout

---

## ✅ SUCCESS METRICS

| Metric | Target | Validation |
|--------|--------|-----------|
| Domain service test coverage | >90% | Jest coverage report |
| Redux slice test coverage | 100% | All reducers, actions, selectors |
| Cloud Function latency | <500ms | CloudWatch logs |
| Firestore query latency (p99) | <150ms | Firestore metrics |
| E2E test pass rate | 100% | Playwright/Cypress results |
| Type safety (TypeScript) | 0 `any` types | `tsc --strict` |
| Security rule coverage | 100% | Rule tests pass |
| Referral state machine | All transitions tested | State machine test matrix |

---

## 📚 DOCUMENTATION FILES

All files created and ready in workspace root:

1. **ARCHITECTURE_ADR_V6.0.md** (2,500 lines)
   - Complete technical reference
   - Rationale for all decisions
   - Alternatives considered

2. **CODER_HANDOFF_V6.0.md** (500 lines)
   - Sprint breakdown
   - Task assignments
   - Dependencies

3. **This file** - Executive summary

**TypeScript Interfaces:** Copy section 6 from ADR to `src/types/domain.ts`

---

## 🚀 READY FOR IMPLEMENTATION

**Architecture Phase: COMPLETE ✅**

**Next Phase: Implementation (Coder Agent)**

The coder team should:
1. Review ARCHITECTURE_ADR_V6.0.md fully
2. Begin Sprint 1, Task 1.1 (TierService)
3. Follow sprint breakdown in CODER_HANDOFF_V6.0.md
4. Daily check-ins with Architecture lead
5. Code reviews per specifications

**Approval Status:** Pending technical review

---

**Questions? Review the ADR or check session memory at `/memories/session/research-handoff.md`**
