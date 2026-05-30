import { useState, useEffect, useCallback, useRef } from 'react';

export function useDataSaver() {
  const [dataSaverMode, setDataSaverMode] = useState(false);
  const [isSlowConnection, setIsSlowConnection] = useState(false);
  const [isManualOverride, setIsManualOverride] = useState(false);
  const [effectiveType, setEffectiveType] = useState(null);
  const [downlink, setDownlink] = useState(null);
  const [rtt, setRtt] = useState(null);
  
  const debounceTimerRef = useRef(null);
  const hasConnectionAPIRef = useRef(false);

  // Check if Connection API is available
  useEffect(() => {
    hasConnectionAPIRef.current = 
      typeof navigator !== 'undefined' && 
      'connection' in navigator;
  }, []);

  // Evaluate network conditions and determine if data saver should be enabled
  const evaluateNetworkConditions = useCallback(() => {
    let shouldEnableSaver = false;
    let newEffectiveType = null;
    let newDownlink = null;
    let newRtt = null;

    // Get connection info from API
    if (hasConnectionAPIRef.current) {
      const connection = navigator.connection;
      
      newEffectiveType = connection.effectiveType || null;
      newDownlink = connection.downlink || null;
      newRtt = connection.rtt || null;

      // Check if connection is slow (2g or 3g)
      if (newEffectiveType === '2g' || newEffectiveType === '3g') {
        shouldEnableSaver = true;
      }

      // Check if downlink is very slow (< 1.5 Mbps)
      if (newDownlink && newDownlink < 1.5) {
        shouldEnableSaver = true;
      }

      // Check if browser has saveData enabled
      if (connection.saveData) {
        shouldEnableSaver = true;
      }
    }

    // Update state
    setEffectiveType(newEffectiveType);
    setDownlink(newDownlink);
    setRtt(newRtt);
    setIsSlowConnection(shouldEnableSaver);

    // Only update dataSaverMode if not manually overridden
    const manualOverride = localStorage.getItem('zeno-data-saver-override');
    if (manualOverride === null) {
      setDataSaverMode(shouldEnableSaver);
    }
  }, []);

  // Initialize on mount: check localStorage and evaluate network
  useEffect(() => {
    try {
      // Check if user manually set data saver
      const savedOverride = localStorage.getItem('zeno-data-saver-override');
      
      if (savedOverride !== null) {
        const isEnabled = savedOverride === 'true';
        setDataSaverMode(isEnabled);
        setIsManualOverride(true);
      } else {
        // Auto-detect based on network conditions
        evaluateNetworkConditions();
      }
    } catch (error) {
      console.warn('Failed to read data saver from localStorage:', error);
      evaluateNetworkConditions();
    }

    // Setup connection change listener
    if (hasConnectionAPIRef.current) {
      const connection = navigator.connection;
      
      const handleConnectionChange = () => {
        // Debounce to avoid rapid re-evaluations
        clearTimeout(debounceTimerRef.current);
        debounceTimerRef.current = setTimeout(() => {
          evaluateNetworkConditions();
        }, 300);
      };

      connection.addEventListener('change', handleConnectionChange);

      // Cleanup
      return () => {
        connection.removeEventListener('change', handleConnectionChange);
        clearTimeout(debounceTimerRef.current);
      };
    }

    return () => {
      clearTimeout(debounceTimerRef.current);
    };
  }, [evaluateNetworkConditions]);

  // Enable data saver (manual override)
  const enableDataSaver = useCallback(() => {
    try {
      localStorage.setItem('zeno-data-saver-override', 'true');
      setDataSaverMode(true);
      setIsManualOverride(true);
    } catch (error) {
      console.warn('Failed to save data saver preference:', error);
      setDataSaverMode(true);
      setIsManualOverride(true);
    }
  }, []);

  // Disable data saver (manual override)
  const disableDataSaver = useCallback(() => {
    try {
      localStorage.setItem('zeno-data-saver-override', 'false');
      setDataSaverMode(false);
      setIsManualOverride(true);
    } catch (error) {
      console.warn('Failed to save data saver preference:', error);
      setDataSaverMode(false);
      setIsManualOverride(true);
    }
  }, []);

  // Toggle data saver (manual override)
  const toggleDataSaver = useCallback(() => {
    if (dataSaverMode) {
      disableDataSaver();
    } else {
      enableDataSaver();
    }
  }, [dataSaverMode, enableDataSaver, disableDataSaver]);

  // Clear manual override and return to auto-detection
  const resetToAuto = useCallback(() => {
    try {
      localStorage.removeItem('zeno-data-saver-override');
      setIsManualOverride(false);
      evaluateNetworkConditions();
    } catch (error) {
      console.warn('Failed to reset data saver to auto mode:', error);
      evaluateNetworkConditions();
    }
  }, [evaluateNetworkConditions]);

  return {
    dataSaverMode,
    isSlowConnection,
    isManualOverride,
    effectiveType,
    downlink,
    rtt,
    toggleDataSaver,
    enableDataSaver,
    disableDataSaver,
    resetToAuto,
  };
}
