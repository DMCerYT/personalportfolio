import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import NotFound from './NotFound';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import ProjectDetail from '../pages/ProjectDetail';
import TestPage from '../pages/Test';
import About from '../pages/About';

const TRANSITION_DURATION_MS = 260;

export default function RouteTransition() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('pageFadeIn');

  useEffect(() => {
    if (location.pathname === displayLocation.pathname) {
      return;
    }

    setTransitionStage('pageFadeOut');
  }, [displayLocation.pathname, location.pathname]);

  useEffect(() => {
    if (transitionStage !== 'pageFadeOut') {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setDisplayLocation(location);
      setTransitionStage('pageFadeIn');
    }, TRANSITION_DURATION_MS);

    return () => window.clearTimeout(timeoutId);
  }, [location, transitionStage]);

  return (
    <div className={`pageTransition ${transitionStage}`}>
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gtlife" element={<Home />} />
        <Route path="/superdupertestpageletsgo" element={<TestPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
