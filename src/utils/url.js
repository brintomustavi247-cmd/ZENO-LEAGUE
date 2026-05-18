/**
 * Zeno League URL Utility
 * Generates environment-aware URLs for sharing
 * @version 1.0.0
 */

// ⚙️ CONFIGURATION: Change this to your production domain
const PRODUCTION_DOMAIN = 'https://zeno-league.vercel.app';

/**
 * Get base URL based on environment
 * - Production: Uses PRODUCTION_DOMAIN
 * - Development: Uses current browser origin (localhost:5173)
 * @returns {string} Base URL without trailing slash
 */
export function getBaseUrl() {
  // Check if running in production build
  if (import.meta.env.PROD) {
    return PRODUCTION_DOMAIN;
  }
  
  // Development mode - use actual origin for local testing
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  
  // Fallback for SSR
  return 'http://localhost:5173';
}

/**
 * Generate full URL for any path
 * @param {string} path - Path (e.g., '/match/m123')
 * @returns {string} Full URL like 'https://zeno-league.vercel.app/match/m123'
 */
export function getFullUrl(path) {
  const baseUrl = getBaseUrl();
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${normalizedPath}`;
}

/**
 * Generate match share URL
 * @param {string} matchId - Match ID (e.g., 'm1718864000000')
 * @returns {string} Full match URL
 */
export function getMatchUrl(matchId) {
  return getFullUrl(`/match/${matchId}`);
}

/**
 * Generate profile share URL
 * @param {string} username - Username
 * @returns {string} Full profile URL
 */
export function getProfileUrl(username) {
  return getFullUrl(`/profile/${username}`);
}

/**
 * Generate referral link
 * @param {string} referralCode - Referral code
 * @returns {string} Full referral URL
 */
export function getReferralUrl(referralCode) {
  return getFullUrl(`/register?ref=${referralCode}`);
}

/**
 * Check if currently in production environment
 * @returns {boolean}
 */
export function isProduction() {
  return import.meta.env.PROD || false;
}