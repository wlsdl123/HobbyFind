"use client";

import Script from "next/script";
import React from "react";

export const ADSENSE_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-4594302000032785';
const LOAD_ADSENSE = process.env.NEXT_PUBLIC_LOAD_ADSENSE === 'true';

export default function AdSense() {
  if (process.env.NODE_ENV !== 'production' && !LOAD_ADSENSE) return null;

  return (
    <>
      <Script
        id="adsense-sdk"
        strategy="afterInteractive"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
        crossOrigin="anonymous"
      />
    </>
  );
}

export function AdSenseAd({ slot, style = {} }: { slot: string; style?: React.CSSProperties }) {
  if (process.env.NODE_ENV !== 'production' && !LOAD_ADSENSE) return null;

  return (
    <div style={{ display: 'block', textAlign: 'center', ...style }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <Script id={`adsense-ad-${slot}`} strategy="afterInteractive">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
    </div>
  );
}
