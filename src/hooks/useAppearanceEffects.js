import { useEffect, useState } from 'react';

function shouldUseLiteEffects() {
  if (typeof navigator === 'undefined') return false;
  return /Chrome|Chromium|Edg\//.test(navigator.userAgent) && !/OPR\//.test(navigator.userAgent);
}

/** Apply the body's CSS contract and preserve the existing browser effect policy. */
export default function useAppearanceEffects(settings) {
  const [useLiteEffects] = useState(shouldUseLiteEffects);

  useEffect(() => {
    document.body.dataset.performanceMode = useLiteEffects ? 'lite' : 'standard';
    document.body.dataset.theme = settings.theme;
    document.body.dataset.motion = settings.dynamicBackgroundEnabled ? 'enabled' : 'reduced';
    return () => {
      delete document.body.dataset.performanceMode;
      delete document.body.dataset.theme;
      delete document.body.dataset.motion;
    };
  }, [useLiteEffects, settings.theme, settings.dynamicBackgroundEnabled]);

  return useLiteEffects;
}
