import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import RouteTransition from './components/RouteTransition';
import './App.css';

const DEFAULT_SETTINGS = {
  dynamicBackgroundEnabled: true,
};

function shouldUseLiteEffects() {
  if (typeof navigator === 'undefined') {
    return false;
  }

  const userAgent = navigator.userAgent;

  return /Chrome|Chromium|Edg\//.test(userAgent) && !/OPR\//.test(userAgent);
}

function App() {
  const [useLiteEffects] = useState(() => shouldUseLiteEffects());
  const [settings, setSettings] = useState(() => {
    if (typeof window === 'undefined') {
      return DEFAULT_SETTINGS;
    }

    const storedSettings = window.localStorage.getItem('portfolio-settings');

    if (!storedSettings) {
      return DEFAULT_SETTINGS;
    }

    try {
      return {
        ...DEFAULT_SETTINGS,
        ...JSON.parse(storedSettings),
      };
    } catch (error) {
      return DEFAULT_SETTINGS;
    }
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem('portfolio-settings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return undefined;
    }

    document.body.dataset.performanceMode = useLiteEffects ? 'lite' : 'standard';

    return () => {
      delete document.body.dataset.performanceMode;
    };
  }, [useLiteEffects]);

  const toggleDynamicBackground = () => {
    setSettings((currentSettings) => ({
      ...currentSettings,
      dynamicBackgroundEnabled: !currentSettings.dynamicBackgroundEnabled,
    }));
  };

  return (
    <div className="App appShell">
      {settings.dynamicBackgroundEnabled ? (
        <AnimatedBackground performanceMode={useLiteEffects} />
      ) : null}
      <BrowserRouter>
        <RouteTransition />
        <Navbar
          settings={settings}
          onToggleDynamicBackground={toggleDynamicBackground}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
