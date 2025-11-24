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
    if (!PIXEL_ID) {
        console.warn('Facebook Pixel ID is not set.');
        return;
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded || !PIXEL_ID) {
      return;
    }
    // O evento PageView inicial já é disparado pelo script de inicialização.
    // Este useEffect dispara eventos PageView adicionais em mudanças de rota.
    // Para evitar duplicidade na primeira carga, podemos verificar se o fbq já foi chamado antes.
    // No entanto, o comportamento padrão do script já faz isso.
    // A chamada 'ViewContent' pode ser mais apropriada para navegações SPA.
    window.fbq('track', 'PageView');
    window.fbq('track', 'ViewContent');

  }, [pathname, loaded]);
  
  if (!PIXEL_ID || !loaded) {
    return null;
  }

  return (
    <>
      <Script
        id="fb-pixel"
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
