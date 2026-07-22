"use client";

import Script from "next/script";
import React from "react";

export const ADSENSE_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-4594302000032785';
const LOAD_ADSENSE = process.env.NEXT_PUBLIC_LOAD_ADSENSE === 'true';

export default function AdSense() {
  if (process.env.NODE_ENV !== 'production' && !LOAD_ADSENSE) return null;

  // 프로덕션 환경에서는 head에 스크립트를 삽입하도록 beforeInteractive로 설정하여
  // AdSense 콘솔의 "애드센스 코드 스니펫" 검증 요구사항을 충족시킵니다.
  const strategy = process.env.NODE_ENV === 'production' || LOAD_ADSENSE ? 'beforeInteractive' : 'afterInteractive';

  return (
    <>
      <Script
        id="adsense-sdk"
        strategy={strategy}
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
