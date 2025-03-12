import { useEffect } from 'react';
import Script from 'next/script';
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Trendiz - AI-Curated Tech Insights</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp 