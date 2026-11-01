import { useEffect, useRef, useState } from 'react';

/** Coordinate menu animation and settings dismissal for both navigation layouts. */
export default function useNavigationState() {
  const [menuState, setMenuState] = useState('closed');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const desktopSettingsRef = useRef(null);
  const mobileSettingsRef = useRef(null);

  const isMenuMounted = menuState !== 'closed';
  const isMenuOpen = menuState === 'open';

  useEffect(() => {
    if (menuState !== 'closing') {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setMenuState('closed');
    }, 220);

    return () => window.clearTimeout(timeoutId);
  }, [menuState]);

  useEffect(() => {
    if (!isSettingsOpen) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      const clickedDesktopSettings = desktopSettingsRef.current?.contains(event.target);
      const clickedMobileSettings = mobileSettingsRef.current?.contains(event.target);

      if (!clickedDesktopSettings && !clickedMobileSettings) {
        setIsSettingsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsSettingsOpen(false);
      }
    };

    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isSettingsOpen]);

  const openMenu = () => {
    setMenuState('open');
  };

  const closeMenu = () => {
    setMenuState((currentState) => {
      if (currentState === 'closed') {
        return currentState;
      }

      return 'closing';
    });
  };

  const toggleMenu = () => {
    if (menuState === 'open') {
      closeMenu();
      return;
    }

    closeSettings();
    openMenu();
  };

  const toggleSettings = () => {
    setIsSettingsOpen((currentState) => !currentState);
  };

  const closeSettings = () => {
    setIsSettingsOpen(false);
  };

  const handleMobileSettingsClick = () => {
    closeMenu();
    setIsSettingsOpen(true);
  };

  return { menuState, isMenuMounted, isMenuOpen, isSettingsOpen, desktopSettingsRef, mobileSettingsRef, closeMenu, toggleMenu, toggleSettings, closeSettings, handleMobileSettingsClick };
}
