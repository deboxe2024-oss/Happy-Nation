'use client'

import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';

const PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

const FacebookPixel = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (!PIXEL_ID) return;
    // This is to ensure the fbq function is available for subsequent page views
    // after the initial script load.
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [pathname]);

  if (!PIXEL_ID) {
    return null;
  }

  return (
    <>
      <Script
        id="fb-pixel-sdk"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
    </>
  );
};

export default FacebookPixel;
