import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import TestPage from './pages/Test';
import About from './pages/About';
import NotFound from './components/NotFound';

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gtlife" element={<Home />} /> 
          <Route path="/superdupertestpageletsgo" element={<TestPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Navbar
          settings={settings}
          onToggleDynamicBackground={toggleDynamicBackground}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
