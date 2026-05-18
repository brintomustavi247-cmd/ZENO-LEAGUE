// Quick Update Guide: Using OptimizedImage Component
// ===================================================

// BEFORE: (Old way - loads large PNG)
import React from 'react';

function Login() {
  return (
    <div>
      <img src="/logo.png" alt="Logo" style={{ width: 80, height: 80 }} />
      {/* This loads 1.2 MB every time! */}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════

// AFTER: (New way - automatic WebP + fallback)
import React from 'react';
import OptimizedImage from '../components/common/OptimizedImage';

function Login() {
  return (
    <div>
      <OptimizedImage 
        src="/logo.png" 
        alt="Logo" 
        width={80}
        height={80}
        lazy
      />
      {/* This loads 219 KB (82% smaller)! */}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════

// FILES TO UPDATE (Recommended):

// 1. src/App.jsx (line 80) - Premium Loading Screen
//    OLD: <img src="/logo.png" alt="ZENO LEAGUE" style={{...}} />
//    NEW: <OptimizedImage src="/logo.png" alt="ZENO LEAGUE" width={100} height={100} priority />

// 2. src/views/Login.jsx (line 367) - Login Page Logo
//    OLD: <img src="/logo.png" alt="ZENO LEAGUE" style={{...}} />
//    NEW: <OptimizedImage src="/logo.png" alt="ZENO LEAGUE" width={80} height={80} priority />

// 3. src/views/Settings.jsx (line 376) - Settings Page Logo
//    OLD: <img src="/logo.png" alt="ZENO LEAGUE" style={{...}} />
//    NEW: <OptimizedImage src="/logo.png" alt="ZENO LEAGUE" width={60} height={60} lazy />

// 4. src/components/Sidebar.jsx (line 32) - Sidebar Logo
//    OLD: <img src="/logo.png" alt="ZL" style={{...}} />
//    NEW: <OptimizedImage src="/logo.png" alt="ZL" width={40} height={40} priority />

// ═══════════════════════════════════════════════════════════

// PROP REFERENCE:

/*
OptimizedImage Props:
- src (required)        : Image path ("/logo.png")
- alt (required)        : Alt text for accessibility
- width (optional)      : Image width in px (default: "auto")
- height (optional)     : Image height in px (default: "auto")
- className (optional)  : CSS classes to apply (default: "")
- lazy (optional)       : Enable lazy loading (default: true)
- priority (optional)   : Load immediately (above-fold images)
- onLoad (optional)     : Callback when image loads
- onError (optional)    : Callback on load error
- style (optional)      : Inline styles object

Example with all props:
<OptimizedImage
  src="/logo.png"
  alt="Logo"
  width={150}
  height={50}
  className="my-logo"
  lazy={true}
  priority={false}
  onLoad={() => console.log('Loaded!')}
  style={{ borderRadius: '8px' }}
/>
*/

// ═══════════════════════════════════════════════════════════

// PWA ICONS AUTOMATICALLY OPTIMIZED:
// - The manifest now includes both PNG and WebP icon variants
// - Browsers that support WebP get the 92-95% smaller versions
// - Legacy browsers fall back to PNG automatically
// - No changes needed to manifest.json or package.json

// ═══════════════════════════════════════════════════════════

// HOW IT WORKS UNDER THE HOOD:

/*
1. OptimizedImage component renders a <picture> element
2. <picture> element offers multiple image sources:
   - WebP (modern browsers - 82-95% smaller)
   - PNG/JPG (fallback - original format)
3. Browser automatically selects best format
4. Lazy loading defers off-screen images
5. Priority loading preloads above-fold images

Result: Users get smallest possible images automatically!
*/
