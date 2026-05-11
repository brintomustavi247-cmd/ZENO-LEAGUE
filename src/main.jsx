import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppProvider } from './context'
import App from './App'
import './App.css'

// 👇 ADD THESE 2 LINES FOR PWA SERVICE WORKER
import { registerSW } from 'virtual:pwa-register'
registerSW({ 
  immediate: true,
  onNeedRefresh() {
    // Optional: show "New version available" prompt
    console.log('[PWA] New content available, refresh needed')
  },
  onOfflineReady() {
    console.log('[PWA] App ready for offline use')
  }
})
// 👆 END PWA CODE

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
)