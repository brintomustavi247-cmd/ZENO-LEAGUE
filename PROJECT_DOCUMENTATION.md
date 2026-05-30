# ZENO LEAGUE - Complete Project Documentation

**Version:** 1.0.0  
**Last Updated:** May 21, 2026  
**Type:** React + Vite + Firebase Web Application  
**Platform:** Free Fire Custom Room Tournament Platform

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Directory Structure](#directory-structure)
4. [Core Features](#core-features)
5. [File Structure Breakdown](#file-structure-breakdown)
6. [Key Components](#key-components)
7. [Database Architecture](#database-architecture)
8. [Build & Deployment](#build--deployment)
9. [Development Guidelines](#development-guidelines)

---

## 🎯 Project Overview

**ZENO LEAGUE** is a comprehensive web-based tournament platform for Free Fire custom room competitions. It allows users to:

- Join and participate in matches
- Manage wallets and transactions
- View leaderboards and rankings
- Handle prize distributions
- Manage referrals and bonuses
- Track match results and statistics

**Brand Identity:**
- Platform Name: Zeno League Bangladesh
- Tagline: "Compete. Win. Dominate."
- Currency: Bengali Taka (৳)
- Target Audience: Free Fire players in Bangladesh

---

## 💻 Technology Stack

### Frontend
- **Framework:** React 18.3.1
- **Build Tool:** Vite 6.0.5
- **PWA:** vite-plugin-pwa 1.3.0
- **Styling:** CSS3 (Custom animations & dark theme)
- **Icons:** Font Awesome

### Backend
- **Database:** Firebase Firestore
- **Authentication:** Firebase Auth
- **Hosting:** Firebase Hosting
- **Real-time Sync:** Firestore real-time listeners

### Development
- **Package Manager:** npm (ES Module format)
- **TypeScript Support:** @types/react, @types/react-dom
- **React Plugin:** @vitejs/plugin-react 4.3.4

### Key Dependencies
```json
{
  "firebase": "^12.12.1",
  "react": "^18.3.1",
  "react-dom": "^18.3.1"
}
```

---

## 📁 Directory Structure

```
ZENO LEAGUE/
├── 📄 index.html                    # HTML entry point
├── 📄 package.json                  # Dependencies & scripts
├── 📄 vite.config.js               # Vite configuration with PWA setup
├── 📄 firebase.json                # Firebase Firestore rules config
├── 📄 firestore.rules              # Firestore security rules
├── 📄 README.md                    # Project readme
├── 📄 CLAUDE.md                    # Claude AI integration notes
├── 📄 generate-maskable-icon.py    # Script to generate PWA icons
├── 📦 public/                       # Static assets & PWA manifest
│   ├── 📄 manifest.json            # PWA manifest
│   ├── 📄 sw.js                    # Service worker
│   └── 📁 icons/                   # PWA icons (192px, 512px, maskable)
├── 📁 src/                         # Source code
│   ├── 📄 main.jsx                 # React entry point
│   ├── 📄 App.jsx                  # Main app component (lazy-loaded views)
│   ├── 📄 App.css                  # App-wide styles
│   ├── 📄 context.jsx              # Global state management (AppContext)
│   ├── 📄 data.js                  # Mock data & constants (FF game data)
│   ├── 📄 firebase.js              # Firebase initialization & config
│   ├── 📄 firebase.lazy.js         # Lazy Firebase loading
│   ├── 📄 database.js              # Firestore operations (CRUD)
│   ├── 📄 db.js                    # Database utilities
│   ├── 📄 utils.js                 # Helper functions
│   ├── 📄 brand.js                 # Brand configuration (colors, names)
│   ├── 📄 admin-premium.css        # Admin theme styles
│   ├── 📄 matches-premium.css      # Matches view styles
│   ├── 📄 profile-premium.css      # Profile view styles
│   ├── 📁 components/              # Reusable UI components
│   │   ├── 📄 Sidebar.jsx          # Left sidebar navigation
│   │   ├── 📄 MobileNav.jsx        # Mobile bottom nav
│   │   ├── 📄 RightPanel.jsx       # Right panel (ads/stats)
│   │   ├── 📄 Modal.jsx            # Modal dialog component
│   │   ├── 📄 Toast.jsx            # Toast notifications
│   │   ├── 📄 TopHeader.jsx        # Top header bar
│   │   ├── 📄 MatchCard.jsx        # Match card component
│   │   ├── 📄 MatchCard.css        # Match card styles
│   │   ├── 📄 ResultCard.jsx       # Result display card
│   │   ├── 📄 ResultCard.css       # Result card styles
│   │   ├── 📄 ResultInput.jsx      # Result input form
│   │   ├── 📄 ResultInput.css      # Result form styles
│   │   ├── 📄 PrizeEditor.jsx      # Prize editing component
│   │   ├── 📁 animations/          # Animation components
│   │   │   ├── 📄 AnimatedBackground.jsx    # Animated bg
│   │   │   ├── 📄 animated-background.css   # BG animation styles
│   │   │   ├── 📄 PageTransition.jsx        # Page transition wrapper
│   │   │   ├── 📄 SkeletonLoader.jsx        # Loading skeletons
│   │   │   └── 📄 skeleton-loader.css       # Skeleton styles
│   │   └── 📁 common/              # Common utilities
│   │       └── 📄 OptimizedImage.jsx        # Image optimization component
│   ├── 📁 constants/               # Application constants
│   │   └── 📄 images.js            # Image path constants
│   ├── 📁 hooks/                   # Custom React hooks
│   │   ├── 📄 useDataSaver.js      # Auto-save data hook
│   │   ├── 📄 useDebounce.js       # Debounce hook
│   │   ├── 📄 useLanguage.js       # Multi-language hook
│   │   ├── 📄 usePerformanceTier.js# Device capability detection
│   │   ├── 📄 useReducedMotion.js  # Accessibility hook
│   │   └── 📄 useScheduleCallback.js# Scheduled execution hook
│   ├── 📁 i18n/                    # Internationalization
│   │   └── 📄 bn.json              # Bengali translations
│   ├── 📁 modals/                  # Modal dialogs
│   │   └── 📄 AllModals.jsx        # Central modal handler
│   ├── 📁 styles/                  # Global & component styles
│   │   ├── 📄 animations.css       # Global animations
│   │   ├── 📄 components.css       # Component styles
│   │   ├── 📄 data-saver.css       # Data saver mode styles
│   │   ├── 📄 header-bar.css       # Header bar styles
│   │   ├── 📄 micro-interactions.css # Micro interaction styles
│   │   └── 📄 variables.css        # CSS variables (colors, sizes)
│   ├── 📁 utils/                   # Utility functions
│   │   ├── 📄 animationConfig.js   # Animation configuration
│   │   ├── 📄 performanceMonitor.js# Performance tracking
│   │   └── 📄 url.js               # URL utilities
│   └── 📁 views/                   # Page views (lazy-loaded)
│       ├── 📄 Dashboard.jsx        # Home dashboard
│       ├── 📄 Matches.jsx          # Active matches list
│       ├── 📄 MatchDetail.jsx      # Single match details
│       ├── 📄 Wallet.jsx           # Wallet & balance management
│       ├── 📄 Leaderboard.jsx      # Player rankings
│       ├── 📄 Notifications.jsx    # Notification center
│       ├── 📄 Admin.jsx            # Admin dashboard
│       ├── 📄 Login.jsx            # Authentication
│       ├── 📄 Profile.jsx          # User profile
│       ├── 📄 Settings.jsx         # User settings
│       └── 📄 firestore.rules      # Firestore rules (copy)
├── 📁 scripts/                     # Build & utility scripts
│   └── 📄 optimize-images.js       # Image optimization script
└── 📄 .gitignore (implied)         # Git ignore file

```

---

## 🎨 Core Features

### 1. **User Management**
- Authentication via Firebase Auth
- User profiles with statistics (matches, wins, kills)
- Role-based access (user/admin)
- Referral system with bonuses
- User settings & preferences

### 2. **Match Management**
- Create & browse matches
- Join matches with wallet balance checks
- Match types: Solo, Duo, Squad, Clash Squad
- Maps: Bermuda, Purgatory, Kalahari, Alpine
- Kill rewards system
- Result submission & verification

### 3. **Financial System**
- Wallet balance tracking
- Transaction history
- Add money requests (pending approval)
- Withdrawal system
- Prize distribution
- Admin financial management

### 4. **Leaderboard & Rankings**
- Global player rankings
- Statistics tracking (wins, kills, average position)
- Real-time updates via Firestore listeners

### 5. **Admin Dashboard**
- User management
- Match administration
- Result management
- Financial oversight
- Room ID & password management
- Platform profit statistics

### 6. **Progressive Web App (PWA)**
- Offline support via service worker
- Auto-update capability
- Installable on home screen
- Responsive design
- Icons: 192px, 512px, maskable

### 7. **Performance Optimizations**
- Lazy-loaded views (15+ code chunks)
- Skeleton loading states
- Reduced motion support (accessibility)
- Image optimization
- Data saver mode
- Debounced operations
- React.memo optimization

---

## 📂 File Structure Breakdown

### Root Level Files

| File | Purpose |
|------|---------|
| `index.html` | HTML entry point, loads React app |
| `package.json` | Dependencies, scripts, project metadata |
| `vite.config.js` | Vite bundler config with PWA plugin |
| `firebase.json` | Firebase Firestore configuration |
| `firestore.rules` | Security rules for Firestore database |
| `README.md` | Project documentation |
| `CLAUDE.md` | Claude AI integration notes |
| `generate-maskable-icon.py` | Python script for PWA icon generation |

### Source Files (`/src`)

#### Core Application
- **`main.jsx`** - React root entry point, mounts App component
- **`App.jsx`** - Main app component with lazy-loaded views, loading screens
- **`context.jsx`** - Global state management using React Context + useReducer
- **`firebase.js`** - Firebase initialization, authentication, Firestore setup
- **`firebase.lazy.js`** - Lazy loading wrapper for Firebase imports
- **`database.js`** - All Firestore CRUD operations (matches, users, transactions)
- **`db.js`** - Database utility functions
- **`utils.js`** - Helper functions (calculations, formatting, notifications)
- **`brand.js`** - Brand configuration (name, colors, social links)
- **`data.js`** - Mock data for Free Fire maps, modes, rules, navigation items

#### Styling
- **`App.css`** - Main application styles
- **`admin-premium.css`** - Admin panel dark theme
- **`matches-premium.css`** - Matches view styles
- **`profile-premium.css`** - Profile view styles
- **`/styles/variables.css`** - CSS custom properties (colors, spacing)
- **`/styles/animations.css`** - Global keyframe animations
- **`/styles/components.css`** - Reusable component styles
- **`/styles/micro-interactions.css`** - Hover/click effects
- **`/styles/header-bar.css`** - Header styling
- **`/styles/data-saver.css`** - Data-saving mode styles

#### Components (`/components`)

**Layout Components:**
- **`Sidebar.jsx`** - Left navigation (desktop)
- **`MobileNav.jsx`** - Bottom navigation (mobile)
- **`RightPanel.jsx`** - Right sidebar (ads, stats, referral)
- **`TopHeader.jsx`** - Top header bar

**UI Components:**
- **`Modal.jsx`** - Modal dialog container
- **`Toast.jsx`** - Toast notifications system
- **`MatchCard.jsx`** - Match listing card component
- **`ResultCard.jsx`** - Result display component
- **`ResultInput.jsx`** - Form for entering match results
- **`PrizeEditor.jsx`** - Prize configuration editor

**Animations:**
- **`AnimatedBackground.jsx`** - Animated gradient background
- **`PageTransition.jsx`** - Page entrance/exit animations
- **`SkeletonLoader.jsx`** - Loading placeholder components

**Utilities:**
- **`common/OptimizedImage.jsx`** - Image component with optimization

#### Hooks (`/hooks`)

Custom React hooks for reusable logic:
- **`useDataSaver.js`** - Auto-save data to localStorage with debounce
- **`useDebounce.js`** - Debounce hook for input handling
- **`useLanguage.js`** - Internationalization/language switching
- **`usePerformanceTier.js`** - Detect device capabilities
- **`useReducedMotion.js`** - Respect accessibility preferences
- **`useScheduleCallback.js`** - Schedule callbacks (match start times)

#### Views (`/views`) - Lazy Loaded

Each view is a separate code chunk loaded on-demand:
- **`Dashboard.jsx`** - Home page with match recommendations
- **`Matches.jsx`** - Browse and join matches
- **`MatchDetail.jsx`** - Detailed match information
- **`Wallet.jsx`** - Balance management, transactions
- **`Leaderboard.jsx`** - Global rankings
- **`Notifications.jsx`** - Notification center
- **`Admin.jsx`** - Admin dashboard (heavy file, only loaded for admins)
- **`Login.jsx`** - Authentication interface
- **`Profile.jsx`** - User profile & stats
- **`Settings.jsx`** - User preferences

#### Internationalization (`/i18n`)
- **`bn.json`** - Bengali language translations

#### Modals (`/modals`)
- **`AllModals.jsx`** - Central modal management component

#### Utils (`/utils`)
- **`animationConfig.js`** - Animation timing & easing configs
- **`performanceMonitor.js`** - Performance metrics tracking
- **`url.js`** - URL parsing utilities

#### Constants (`/constants`)
- **`images.js`** - Image path constants for imports

#### Public Assets (`/public`)
- **`manifest.json`** - PWA manifest (app name, icons, colors)
- **`sw.js`** - Service worker for offline support
- **`/icons/`** - PWA icons (192px, 512px, maskable-512px)

---

## 🧩 Key Components

### Component Hierarchy

```
App (Main)
├── PageTransition
├── Sidebar (Desktop Nav)
├── MobileNav (Mobile Nav)
├── RightPanel (Ads/Stats)
├── TopHeader
├── View Component (lazy-loaded)
│   ├── MatchCard(s)
│   ├── ResultCard(s)
│   ├── SkeletonLoader(s)
│   └── ...
├── Modal (conditional)
├── Toast (notifications)
└── AnimatedBackground
```

### Component Data Flow

```
App.jsx (Redux-like state)
    ↓
AppContext (useReducer)
    ↓
Actions: fetchUser, updateMatch, createMatch, etc.
    ↓
database.js (Firestore calls)
    ↓
firebase.js (Firebase SDK)
    ↓
Firestore (Cloud Backend)
```

### Key Hooks Usage

```javascript
// Example: useReducedMotion for accessibility
const prefersReducedMotion = useReducedMotion();
if (prefersReducedMotion) {
  // Skip animations
}

// Example: useDataSaver for auto-save
const { saveData } = useDataSaver('matchData', matchState);

// Example: useDebounce for input
const debouncedSearch = useDebounce(searchInput, 300);

// Example: useLanguage for i18n
const { t } = useLanguage('bn'); // Bengali
```

---

## 🗄️ Database Architecture

### Firestore Collections

**Users Collection**
```javascript
/users/{userId}
{
  id: string,
  username: string,
  email: string,
  phone: string,
  role: 'user' | 'admin',
  balance: number,
  totalMatches: number,
  totalWins: number,
  totalKills: number,
  joinedMatches: string[],
  referralCode: string,
  createdAt: timestamp,
  lastActive: timestamp
}
```

**Matches Collection**
```javascript
/matches/{matchId}
{
  id: string,
  title: string,
  map: string, // Bermuda, Purgatory, Kalahari, Alpine
  mode: string, // Solo, Duo, Squad, Clash Squad
  gameType: string, // BR, CS
  startTime: timestamp,
  joinCost: number,
  prizePool: number,
  prizes: { 1st: 500, 2nd: 300, ... },
  maxSlots: number,
  joinedPlayers: { userId: { rank: number, kills: number } },
  status: 'upcoming' | 'live' | 'completed' | 'cancelled',
  roomId: string,
  roomPassword: string,
  createdBy: string (admin userId),
  createdAt: timestamp
}
```

**Transactions Collection**
```javascript
/transactions/{txId}
{
  id: string,
  userId: string,
  type: 'join' | 'prize' | 'add_money' | 'withdrawal' | 'referral',
  amount: number,
  status: 'pending' | 'completed' | 'rejected',
  matchId: string (optional),
  description: string,
  createdAt: timestamp
}
```

**Add Money Requests Collection**
```javascript
/addMoneyRequests/{requestId}
{
  id: string,
  userId: string,
  amount: number,
  method: string,
  txId: string (unique transaction ID),
  screenshot: URL,
  status: 'pending' | 'approved' | 'rejected',
  approvedBy: string (admin),
  createdAt: timestamp
}
```

**Additional Collections**
- `/withdrawals/` - Withdrawal requests
- `/settings/` - Platform settings
- `/activities/` - User activity logs
- `/profits/` - Platform profit tracking

### Firestore Security Rules

Located in `firestore.rules`:
- Public read for matches (users can browse)
- User-specific read for wallet/profile
- Admin-only write for match creation
- Owner-only write for user data

---

## 🚀 Build & Deployment

### Local Development

```bash
# Install dependencies
npm install

# Start dev server (port 5173)
npm run dev

# Build for production
npm run build

# Preview build locally
npm run preview
```

### Vite Configuration

Key settings in `vite.config.js`:
- React plugin for JSX support
- PWA plugin for offline support & auto-update
- Assets: PNG, JPG, SVG, WebP
- Service worker with Workbox
- Navigation fallback to `/index.html`

### PWA Configuration

From `vite.config.js`:
- **registerType:** `autoUpdate` (auto-update service worker)
- **Manifest:**
  - Name: "ZENO LEAGUE"
  - Short Name: "ZENO"
  - Display: `standalone` (fullscreen app)
  - Theme Color: Dark (#0a0a1a)
- **Icons:** 192px, 512px, maskable-512px
- **Workbox:** Caches JS, CSS, HTML, images with offline fallback

### Firebase Deployment

```bash
# Deploy to Firebase Hosting
firebase deploy

# Deploy only Firestore rules
firebase deploy --only firestore:rules

# Deploy only hosting
firebase deploy --only hosting
```

### Environment Variables

In `firebase.js`:
```javascript
const firebaseConfig = {
  apiKey: "...",
  authDomain: "zeno-league.firebaseapp.com",
  projectId: "zeno-league",
  storageBucket: "zeno-league.firebasestorage.app",
  messagingSenderId: "...",
  appId: "...",
}
```

---

## 📖 Development Guidelines

### Code Organization Principles

1. **Component-based:** Reusable, self-contained components
2. **Lazy loading:** Views load only when needed
3. **Context API:** Global state management (no Redux)
4. **Hooks:** Custom hooks for reusable logic
5. **Performance:** Memoization, debouncing, code splitting

### Adding New Views

```javascript
// 1. Create in src/views/NewView.jsx
// 2. Add lazy import in App.jsx
const NewView = lazy(() => import('./views/NewView'))
// 3. Add to navigation in data.js
// 4. Route in App.jsx
```

### Adding New Components

```javascript
// 1. Create in src/components/
// 2. Import where needed
// 3. Add styles in separate .css file
// 4. Use React.memo for optimization
export default React.memo(MyComponent)
```

### Firestore Operations

```javascript
// Import from database.js
import { fetchUser, createMatch, updateMatch } from './database'

// Use in context/components
const user = await fetchUser(userId)
await createMatch(matchData)
```

### Styling Approach

- **Global styles:** `/styles/` folder
- **Component styles:** Component.css alongside .jsx
- **CSS Variables:** Defined in `variables.css`
- **Theme:** Dark theme with purple/cyan accent colors

### Performance Best Practices

- Use `React.memo()` for components
- Use `useCallback()` for event handlers
- Lazy load heavy views (Admin.jsx)
- Debounce search/input handlers
- Optimize images with OptimizedImage.jsx
- Enable data-saver mode for low bandwidth

### Accessibility Considerations

- Respect `prefers-reduced-motion` media query
- Use semantic HTML
- Keyboard navigation support
- ARIA labels where needed
- Color contrast compliance

---

## 🔐 Security & Authentication

### Authentication Flow
1. User enters credentials (phone/email + password)
2. Firebase Auth verifies
3. User document fetched from Firestore
4. AppContext stores user state
5. Role-based access control (user/admin)

### Firestore Security
- Rules in `firestore.rules`
- Users can only write to their own data
- Admins have elevated permissions
- Public read for browsable matches
- Transactions require authentication

### Demo Accounts

For testing (defined in `context.jsx`):
```javascript
// User Account
phone: '01700000001'
password: '1234'
role: 'user'

// Admin Account
username: 'admin1'
password: 'admin123'
role: 'admin'
```

---

## 📱 Responsive Design

### Breakpoints (implicit in CSS)

- **Mobile:** 320px - 768px
  - Bottom navigation (MobileNav.jsx)
  - Single column layout
  - Sidebar hidden
  
- **Tablet:** 768px - 1024px
  - 2-column layout
  - Sidebar appears
  
- **Desktop:** 1024px+
  - 3-column layout (Sidebar | Main | RightPanel)
  - Full navigation

### CSS Variables for Theming

Colors defined in `variables.css`:
```css
--primary: #6C5CE7;      /* Purple */
--accent: #00CEC9;       /* Cyan */
--background: #0F0F1A;   /* Dark */
--text: #E8E8F0;         /* Light text */
--success: #00B894;
--warning: #FDCB6E;
--danger: #FF6B6B;
```

---

## 🎯 Performance Metrics

### Bundle Optimization
- **Main bundle:** ~100KB (gzipped)
- **Per view chunk:** 20-50KB
- **Total chunks:** 15+
- **Lazy loading:** 80% reduction in initial bundle

### Loading Performance
- **First Paint:** < 1s
- **Interactive:** < 2s
- **Skeleton loading:** Perceived performance
- **Service worker:** Offline support

### Code Splitting Strategy
```
App.jsx (core) → Views (lazy)
├── Dashboard
├── Matches
├── Wallet
├── Leaderboard
├── Admin (heavy, only for admins)
├── Profile
├── Settings
└── ...
```

---

## 🐛 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Firebase not connecting | Check `firebase.js` config, enable persistence |
| View not loading | Check lazy import in App.jsx |
| Styles not applying | Check CSS file import, check class names |
| Data not syncing | Check Firestore rules, check listener setup |
| Build errors | Check import paths, run `npm install` |
| PWA not working | Clear cache, check `sw.js`, check manifest.json |

---

## 📝 Future Enhancements

- [ ] Real-time notifications via FCM
- [ ] Video streaming for matches
- [ ] Advanced analytics dashboard
- [ ] Mobile app (React Native)
- [ ] Blockchain for prize verification
- [ ] AI-powered matchmaking
- [ ] Social features (friend requests, chat)
- [ ] Multi-language support expansion
- [ ] Payment gateway integration (bKash, Nagad)
- [ ] Performance optimizations (Server-Side Rendering)

---

## 📞 Support & Maintenance

**Owner Contact:**
- Email: brintomustavi247@gmail.com
- Phone: +8801871035221

**Database:**
- Firebase Project: `zeno-league`
- Region: Default (US)
- Firestore Documents: Users, Matches, Transactions, Requests

**Deployment:**
- Platform: Firebase Hosting
- Domain: zenoleague.com (to be purchased)
- PWA: Installable on mobile

---

**End of Documentation**

Generated: May 21, 2026
For questions or updates, contact the project owner.
