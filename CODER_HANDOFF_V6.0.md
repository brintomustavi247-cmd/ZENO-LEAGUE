# ARCHITECTURE → CODER HANDOFF

**From:** Architecture Domain Lead  
**To:** Coder Agent  
**Date:** 2026-05-02  
**Status:** READY FOR IMPLEMENTATION  

---

## MISSION BRIEF

Implement Clutch Arena BD V6.0 game economy architecture following the ADR blueprint. Transform the current 1000-line context reducer into a scalable, domain-driven system supporting 50K+ concurrent users.

**Success Criteria:**
- ✅ All domain services implemented (TierService, ReferralService, ClanService, QuestService, EngagementOrchestrator)
- ✅ Redux slice refactoring complete (6 slices, 0 coupling)
- ✅ Firestore schema deployed (12 collections with indexes)
- ✅ Cloud Functions deployed (3 triggers: daily reset, referral milestone, season rollover)
- ✅ End-to-end test coverage >85%

---

## ARCHITECTURE OVERVIEW

**File Location:** `ARCHITECTURE_ADR_V6.0.md` (comprehensive reference)

### Bounded Contexts
```
GameEconomy (matches, transactions, wallet)
    ↓
UserProgression (tier system, XP, achievements)
    ↓
SocialSystems (referrals, clans, reputation)
    ↓
SeasonalContent (seasons, leaderboards)
    ↓
EngagementLoop (orchestrator connecting all)
```

### Key Design Decisions
1. **DDD with Redux Slices**: Replace monolithic reducer with 6 independent slices
2. **Dependency Injection**: ServiceContainer for loose coupling
3. **Transaction Atomicity**: Firestore transactions + idempotency keys
4. **Cloud Functions**: Event-driven for daily resets and seasonal transitions
5. **Error Resilience**: Compensation engine for failed operations

---

## SPRINT 1: FOUNDATION (Week 1-2)

### Task 1.1: Domain Services Implementation
**File:** `src/services/` (create directory)

**Subtasks:**
1. `TierService.ts` - Tier progression calculation
   - `getTierFromXP(xp)` - O(1) binary search
   - `getTierProgress(xp)` - Percentage to next tier
   - `calculateXPReward(baseXP, tier, source)` - Apply bonuses

2. `ReferralService.ts` - Referral state machine
   - `createReferralLink(referrerUID)` - Generate code
   - `processReferralCode(code, refereeUID)` - Validate & lock balance
   - `progressReferralMilestone(code, matchCount)` - Unlock on milestones
   - `unlockReferralBalance(referrerUID)` - Batch unlock

3. `QuestService.ts` - Daily quest lifecycle
   - `generateDeterministicQuests(dateStr)` - Seeded RNG
   - `progressQuest(userId, questId, type, value)` - Update progress
   - `claimQuestReward(userId, questId)` - Atomic claim

4. `ClanService.ts` - Clan membership & treasury
   - `createClan(leaderId, name, tag)` - Initialize
   - `joinClan(clanId, userId, username)` - Add member & perks
   - `depositToTreasury(clanId, userId, amount)` - Atomic transaction

**File Structure:**
```
src/services/
├── TierService.ts
├── ReferralService.ts
├── QuestService.ts
├── ClanService.ts
├── EngagementLoopOrchestrator.ts
├── TransactionOrchestrator.ts
├── CompensationEngine.ts
├── CacheService.ts
├── LeaderboardService.ts
└── container.ts (DI container)
```

**TypeScript Interfaces:** Use interfaces from ADR section 6 (API_CONTRACTS)

### Task 1.2: Redux Slice Refactoring
**File:** `src/store/slices/`

**Subtasks:**
1. `authSlice.ts` - Login, logout, identity
2. `matchesSlice.ts` - Match CRUD, filtering
3. `walletSlice.ts` - Balance, transactions, withdrawals
4. `gamificationSlice.ts` - Tiers, XP, streaks, quests, achievements
5. `socialSlice.ts` - Referrals, clans, reputation
6. `seasonalSlice.ts` - Current season, rankings, leaderboards

**Middleware:**
- `createGameEconomyMiddleware()` - Listen for cross-slice events
- `createOrchestratorMiddleware()` - Coordinate domain operations

### Task 1.3: Firestore Schema & Migration
**File:** `src/services/MigrationManager.ts`

**Subtasks:**
1. Create 12 collections:
   - users, matches, transactions, referrals
   - clans, seasons, dailyQuests, reputation
   - profitLogs, activityLog, addMoneyRequests, withdrawals

2. Add Firestore indexes (from ADR section 7.2)

3. Implement migration from V5.0 → V6.0:
   - Auto-add V6.0 fields to existing users
   - Preserve V5.0 data (ad rewards, spin wheel, transactions)

---

## SPRINT 2: INFRASTRUCTURE (Week 3-4)

### Task 2.1: Cloud Functions Deployment
**Directory:** `functions/`

**Functions to Deploy:**
1. `daily-reset.ts` - Pubsub trigger (04:00 UTC)
   - Reset streaks
   - Generate daily quests
   - Reset ad cooldown

2. `referral-milestone.ts` - Firestore trigger (on matches write)
   - Process milestone unlocks
   - Update locked balance

3. `season-rollover.ts` - Pubsub trigger (1st month, 00:00 UTC)
   - Finalize leaderboard
   - Distribute seasonal rewards
   - Create new season

### Task 2.2: Security Rules & Error Handling
**File:** `firestore.rules`

**Rules to Implement:**
- User can only read/write own data
- Admin can read all + write audit logs
- Transactions are admin-only writes
- Referrals are read-only for participants
- Clans: members can deposit, only leader can withdraw

---

## SPRINT 3: FEATURES (Week 5-6)

### Task 3.1: UI Components for V6.0 Systems
- TierProgressCard (display current tier & XP progress)
- ReferralDashboard (code, locked/unlocked balance, milestones)
- QuestTracker (daily quests with progress bars)
- ClanPanel (members, treasury, perks)
- SeasonLeaderboard (pagination, user rank)

### Task 3.2: Integration Tests
- Tier calculation accuracy
- Referral state machine (all transitions)
- Quest progress & claim atomicity
- Clan operations (join, deposit, leave)

---

## SPRINT 4: OPTIMIZATION & LAUNCH (Week 7-8)

### Task 4.1: Performance
- [ ] Implement TierCacheService (5-min TTL)
- [ ] Add Firestore indexes
- [ ] Debounce real-time listeners (100ms)
- [ ] Leaderboard pagination (50 items/page)
- [ ] Query optimization (field selection)

### Task 4.2: Testing & Deployment
- [ ] E2E tests (>85% coverage)
- [ ] Load testing (5K concurrent users)
- [ ] Staging deployment
- [ ] Production rollout (blue-green)

---

## DEPENDENCIES & CONSTRAINTS

### Required Libraries
- `firebase` (Firestore, Auth, Functions)
- `@reduxjs/toolkit` (for Redux slices)
- `typescript` (strict mode)
- `jest` (testing)

### Database Schema
- See ADR section 4.1 for full schema
- Use provided migrations to upgrade from V5.0

### Security Rules
- See ADR section 4.2 for complete rules

### Error Handling
- All operations must use idempotency keys
- Implement compensation for failed operations
- Log all failures to activityLog

---

## COMMUNICATION PROTOCOL

**Daily Standups:**
- Report progress on assigned tasks
- Flag blockers immediately
- Coordinate with other agents if needed

**Code Reviews:**
- TierService → Architecture (verify algorithm)
- Redux slices → Reviewer (lint, types)
- Cloud Functions → Security Architect (rule validation)
- E2E tests → QA (coverage verification)

**Escalation Path:**
1. Task blocker → Ask Architecture for clarification
2. Security concern → Alert Security Architect
3. Database issue → Coordinate with DBA

---

## KEY FILES TO REFERENCE

- **Architecture Blueprint:** `ARCHITECTURE_ADR_V6.0.md`
- **Type Definitions:** Section 6 of ADR (copy to `src/types/domain.ts`)
- **Current Codebase:** `src/context.jsx`, `src/database.js`
- **Backup:** `src/views/Dashboard.jsx.v6` (reference implementation)

---

## SUCCESS METRICS

| Metric | Target |
|--------|--------|
| Domain service test coverage | >90% |
| Redux slice reducer tests | 100% |
| Cloud Function latency | <500ms |
| Firestore query latency | <150ms |
| E2E test pass rate | 100% |
| Type safety (TypeScript) | 0 `any` types |

---

## NEXT STEPS

1. **Acknowledge receipt** of this handoff
2. **Review ADR** (ARCHITECTURE_ADR_V6.0.md) for full context
3. **Create project structure** (services/, store/slices/, types/)
4. **Begin Sprint 1, Task 1.1** (TierService implementation)
5. **Daily check-ins** with Architecture lead

---

**Ready to begin? Message back with confirmation + ETA for first task completion.**
