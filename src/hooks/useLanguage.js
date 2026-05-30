import { useState, useEffect, useCallback, useMemo } from 'react';
import bnTranslations from '../i18n/bn.json';

// English translations (same keys as bn.json)
const enTranslations = {
  // Brand
  'app.name': 'ZENO LEAGUE',
  'app.tagline': 'Free Fire Tournament Platform',

  // Navigation
  'nav.home': 'Home',
  'nav.matches': 'Matches',
  'nav.wallet': 'Wallet',
  'nav.rankings': 'Rankings',
  'nav.notifications': 'Notifications',
  'nav.profile': 'Profile',
  'nav.settings': 'Settings',
  'nav.logout': 'Logout',

  // Wallet Section
  'wallet.title': 'Wallet',
  'wallet.subtitle': 'Manage deposits, withdrawals and transactions',
  'wallet.total_balance': 'Total Balance',
  'wallet.real_balance': 'Main Balance',
  'wallet.locked_balance': 'Arena Credit',
  'wallet.deposit': 'Deposit',
  'wallet.withdraw': 'Withdraw',
  'wallet.total_winnings': 'Total Winnings',
  'wallet.pending': 'Pending',
  'wallet.total_spent': 'Total Spent',
  'wallet.total_added': 'Total Added',
  'wallet.recent_activity': 'Recent Activity',
  'wallet.free_tokens': 'Free Match Tokens',
  'wallet.view_all': 'View All',
  'wallet.load_more': 'Load More',

  // Matches/Tournaments
  'matches.title': 'Matches',
  'matches.subtitle': 'Join Free Fire Tournaments',
  'matches.join_match': 'Join Match',
  'matches.entry_fee': 'Entry Fee',
  'matches.prize_pool': 'Prize Pool',
  'matches.live_now': 'LIVE',
  'matches.upcoming': 'Upcoming',
  'matches.completed': 'Completed',
  'matches.slots_filled': 'Slots Filled',
  'matches.players_joined': 'Players Joined',
  'matches.no_refund': 'No Refund',
  'matches.per_kill': 'Per Kill',
  'matches.watch_live': 'Watch LIVE',
  'matches.room_id': 'Room ID',
  'matches.password': 'Password',
  'matches.copy_room': 'Copy Room',
  'matches.launch_ff': 'Launch Free Fire',
  'matches.starting_in': 'Starting In',
  'matches.time_left': 'Time Left',

  // Game Modes
  'mode.solo': 'Solo',
  'mode.duo': 'Duo',
  'mode.squad': 'Squad',
  'mode.clash_squad': 'Clash Squad',
  'mode.br': 'Battle Royale',
  'mode.cs': 'Clash Squad',

  // Maps
  'map.bermuda': 'Bermuda',
  'map.purgatory': 'Purgatory',
  'map.kalahari': 'Kalahari',
  'map.alpine': 'Alpine',

  // Game Types
  'game_type.br': 'BR (TPP)',
  'game_type.cs': 'CS (FPP)',

  // Auth & Profile
  'auth.sign_in': 'Sign In',
  'auth.sign_up': 'Sign Up',
  'auth.logout': 'Logout',
  'auth.phone': 'Phone Number',
  'auth.email': 'Email',
  'auth.password': 'Password',
  'auth.confirm_password': 'Confirm Password',
  'auth.forgot_password': 'Forgot Password?',
  'auth.login_with_phone': 'Login with Phone',
  'auth.login_with_google': 'Login with Google',

  'profile.title': 'Profile',
  'profile.edit': 'Edit Profile',
  'profile.stats': 'Statistics',
  'profile.matches_played': 'Matches Played',
  'profile.wins': 'Wins',
  'profile.win_rate': 'Win Rate',
  'profile.total_kills': 'Total Kills',
  'profile.level': 'Level',
  'profile.xp': 'XP',
  'profile.rank': 'Rank',
  'profile.change_avatar': 'Change Avatar',
  'profile.update_profile': 'Update Profile',

  // Notifications
  'notif.title': 'Notifications',
  'notif.new_match': 'New match available!',
  'notif.match_starting': 'Match starting!',
  'notif.payment_received': 'Payment received',
  'notif.withdrawal_approved': 'Withdrawal approved',
  'notif.friend_joined': 'Friend joined!',
  'notif.match_result': 'Match result!',
  'notif.rank_changed': 'Rank changed!',
  'notif.no_notifications': 'No notifications',
  'notif.mark_all_read': 'Mark all read',
  'notif.clear_all': 'Clear all',

  // Settings
  'settings.title': 'Settings',
  'settings.account': 'Account',
  'settings.language': 'Language',
  'settings.notifications': 'Notifications',
  'settings.sound': 'Sound',
  'settings.dark_mode': 'Dark Mode',
  'settings.data_saver': 'Data Saver',
  'settings.about': 'About ZENO LEAGUE',
  'settings.privacy': 'Privacy Policy',
  'settings.terms': 'Terms & Conditions',
  'settings.version': 'Version',
  'settings.app_info': 'App Info',
  'settings.contact': 'Contact Us',
  'settings.rate_us': 'Rate Us',
  'settings.share_app': 'Share App',
  'settings.logout_confirm': 'Are you sure you want to logout?',

  // Language
  'lang.bengali': 'বাংলা',
  'lang.english': 'English',
  'lang.current': 'Current Language:',

  // Payment
  'payment.title': 'Payment',
  'payment.bkash': 'bKash',
  'payment.nagad': 'Nagad',
  'payment.rocket': 'Rocket',
  'payment.deposit_title': 'Deposit Money',
  'payment.withdraw_title': 'Withdraw Money',
  'payment.amount': 'Amount (TK)',
  'payment.min_deposit': 'Minimum: 50 TK',
  'payment.min_withdraw': 'Minimum: 100 TK',
  'payment.enter_amount': 'Enter Amount',
  'payment.select_method': 'Select Payment Method',
  'payment.send_money': 'Money sent',
  'payment.waiting_confirmation': 'Waiting for confirmation...',
  'payment.success': 'Payment successful!',
  'payment.failed': 'Payment failed!',
  'payment.transaction_id': 'Transaction ID',

  // Common UI
  'common.loading': 'Loading...',
  'common.please_wait': 'Please wait...',
  'common.error': 'Error',
  'common.retry': 'Retry',
  'common.cancel': 'Cancel',
  'common.confirm': 'Confirm',
  'common.save': 'Save',
  'common.close': 'Close',
  'common.next': 'Next',
  'common.back': 'Back',
  'common.search': 'Search',
  'common.filter': 'Filter',
  'common.sort': 'Sort',
  'common.view_all': 'View All',
  'common.no_data': 'No data',
  'common.offline': 'You are offline',
  'common.online': 'Online',
  'common.yes': 'Yes',
  'common.no': 'No',
  'common.ok': 'OK',
  'common.welcome': 'Welcome!',
  'common.thanks': 'Thanks!',
  'common.sorry': 'Sorry!',
  'common.help': 'Help',
  'common.about': 'About',
  'common.info': 'Info',
  'common.copy': 'Copy',
  'common.copied': 'Copied!',
  'common.share': 'Share',
  'common.edit': 'Edit',
  'common.delete': 'Delete',
  'common.create': 'Create',
  'common.submit': 'Submit',
  'common.refresh': 'Refresh',
  'common.more': 'More',
  'common.less': 'Less',
  'common.new': 'New',
  'common.old': 'Old',
  'common.all': 'All',
  'common.none': 'None',
  'common.free': 'Free',
  'common.premium': 'Premium',
  'common.vip': 'VIP',
  'common.today': 'Today',
  'common.yesterday': 'Yesterday',
  'common.just_now': 'Just now',
  'common.minutes_ago': 'minutes ago',
  'common.hours_ago': 'hours ago',
  'common.days_ago': 'days ago',

  // Currency
  'currency.tk': 'TK',
  'currency.free': 'Free',
  'currency.thousands': 'K',

  // Status Messages
  'status.success': 'Success!',
  'status.success_desc': 'Operation completed successfully',
  'status.failed': 'Failed!',
  'status.pending': 'Pending',
  'status.processing': 'Processing...',
  'status.confirmed': 'Confirmed',
  'status.rejected': 'Rejected',
  'status.completed': 'Completed',
  'status.active': 'Active',
  'status.inactive': 'Inactive',

  // Errors
  'error.insufficient_balance': 'Insufficient balance!',
  'error.network_error': 'Network error! Check your connection.',
  'error.match_full': 'Match is full! Join another match.',
  'error.already_joined': 'You already joined!',
  'error.session_expired': 'Session expired! Sign in again.',
  'error.invalid_phone': 'Enter a valid phone number',
  'error.invalid_otp': 'Enter a valid OTP',
  'error.wrong_password': 'Wrong password!',
  'error.something_wrong': 'Something went wrong!',
  'error.try_again': 'Try again',

  // Success Messages
  'success.join_match': 'Successfully joined the match!',
  'success.payment_done': 'Payment successful!',
  'success.withdraw_requested': 'Withdrawal request sent!',
  'success.profile_updated': 'Profile updated!',
  'success.password_changed': 'Password changed!',
  'success.copied': 'Copied!',
  'success.shared': 'Shared!',
  'success.booyah': 'Booyah! 🎉',

  // Achievements
  'ach.title': 'Achievements',
  'ach.unlocked': 'Achievement unlocked!',
  'ach.new_badge': 'New badge earned!',
  'quest.daily': 'Daily Mission',
  'quest.weekly': 'Weekly Challenge',
  'level.up': 'Level Up!',
  'xp.earned': 'XP earned!',
  'streak.fire': 'Streak on! 🔥',

  // Ranks
  'rank.unranked': 'Unranked',
  'rank.bronze': 'Bronze',
  'rank.silver': 'Silver',
  'rank.gold': 'Gold',
  'rank.platinum': 'Platinum',
  'rank.diamond': 'Diamond',
  'rank.heroic': 'Heroic',
  'rank.grandmaster': 'Grandmaster',

  // Data Saver Mode
  'data_saver.title': 'Data Saver Mode',
  'data_saver.enabled': 'Data Saver is on',
  'data_saver.disabled': 'Data Saver is off',
  'data_saver.auto_detect': 'Auto-detect Slow Network',
  'data_saver.description': 'Images and animations will be disabled on slow networks',
  'data_saver.enable': 'Enable Data Saver',
  'data_saver.disable': 'Disable Data Saver',

  // Offline Mode
  'offline.title': 'You are offline',
  'offline.message': 'Check your internet connection',
  'offline.retry': 'Try again',
  'offline.queue_sync': 'Actions queued, will sync when online',
  'offline.actions_pending': 'actions pending',
};

// Memoize translation objects to prevent recreation
const translationMap = {
  bn: bnTranslations,
  en: enTranslations,
};

export function useLanguage() {
  const [lang, setLangState] = useState(() => {
    try {
      const savedLang = localStorage.getItem('zeno-lang');
      return savedLang && ['bn', 'en'].includes(savedLang) ? savedLang : 'bn';
    } catch {
      return 'bn';
    }
  });

  // Broadcast language changes to all tabs/components
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === 'zeno-lang' && e.newValue) {
        setLangState(e.newValue);
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  // Smart key-to-text converter (converts "matches.search_tournaments" → "Search Tournaments")
  const keyToReadableText = useCallback((key) => {
    return key
      .replace(/^.*\./, '')                    // Remove namespace prefix
      .replace(/_/g, ' ')                      // Replace underscores with spaces
      .replace(/\b\w/g, (char) =>              // Capitalize first letter of each word
        char.toUpperCase()
      );
  }, []);

  // Translation function with smart fallback
  const t = useCallback(
    (key) => {
      const currentTranslations = translationMap[lang];
      
      // 1. Try current language first
      if (currentTranslations && currentTranslations[key]) {
        return currentTranslations[key];
      }

      // 2. Fallback to English if not current language
      if (lang !== 'en' && enTranslations[key]) {
        return enTranslations[key];
      }

      // 3. Smart key-to-text converter as last resort
      // This ensures users never see raw keys like "matches.search_tournaments"
      return keyToReadableText(key);
    },
    [lang, keyToReadableText]
  );

  // Set language and persist to localStorage
  const setLang = useCallback((newLang) => {
    if (!['bn', 'en'].includes(newLang)) {
      console.warn(`Invalid language: ${newLang}. Must be 'bn' or 'en'.`);
      return;
    }
    
    setLangState(newLang);
    try {
      localStorage.setItem('zeno-lang', newLang);
    } catch (error) {
      console.warn('Failed to save language to localStorage:', error);
    }
  }, []);

  // Quick toggle between Bengali and English
  const toggleLang = useCallback(() => {
    const newLang = lang === 'bn' ? 'en' : 'bn';
    setLang(newLang);
  }, [lang, setLang]);

  // Return hook interface
  return {
    lang,
    setLang,
    toggleLang,
    t,
    isBengali: lang === 'bn',
  };
}
