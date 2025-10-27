import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type FbqFunction = {
  (
    eventName: 'init' | 'track' | 'trackCustom',
    pixelId: string,
    params?: Record<string, unknown>
  ): void;
  (eventName: string, eventType: string, params?: Record<string, unknown>): void;
  push: (args: unknown[]) => void;
  loaded: boolean;
  version: string;
  queue: unknown[];
  callMethod: (...args: unknown[]) => void;
};

declare global {
  interface Window {
    fbq: FbqFunction;
    _fbq: FbqFunction;
  }
}

const FacebookPixel = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.fbq !== 'undefined') {
      window.fbq('track', 'PageView');
    }
  }, [location]);

  return null;
};

export default FacebookPixel;
