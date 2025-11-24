'use client'

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

const FacebookPixel = () => {
  const pathname = usePathname();

  useEffect(() => {
    // This hook is for tracking SPA route changes.
    // The initial PageView is fired in layout.tsx.
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }
  }, [pathname]);


  return null;
};

export default FacebookPixel;
