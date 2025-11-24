'use client'

import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { useEffect, useState } from 'react';

const PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

const FacebookPixel = () => {
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (loaded) {
      window.fbq('track', 'PageView');
    }
  }, [pathname, loaded]);

  if (!PIXEL_ID) {
    return null;
  }

  return (
    <>
      <Script
        id="fb-pixel-base"
        src="https://connect.facebook.net/en_US/fbevents.js"
        strategy="afterInteractive"
        onLoad={() => {
          window.fbq=window.fbq||function(){(window.fbq.q=window.fbq.q||[]).push(arguments)};
          window.fbq.l=+new Date;
          window.fbq('init', PIXEL_ID);
          setLoaded(true);
        }}
      />
    </>
  );
};

export default FacebookPixel;
