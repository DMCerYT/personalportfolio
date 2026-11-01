import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AppRoutes from '../routing/AppRoutes';
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
      <AppRoutes location={displayLocation} />
    </div>
  );
}
