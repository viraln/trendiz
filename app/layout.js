import GoogleAdsense from '../components/GoogleAdsense'

export const metadata = {
  title: 'Trendiz - Tech Trends and Digital Innovation',
  description: 'Stay ahead of the curve with Trendiz - Your source for the latest in technology trends, digital innovation, and tech culture.',
  metadataBase: new URL('https://trendiz.vercel.app'),
  openGraph: {
    title: 'Trendiz - Tech Trends and Digital Innovation',
    description: 'Stay ahead of the curve with Trendiz - Your source for the latest in technology trends, digital innovation, and tech culture.',
    url: 'https://trendiz.vercel.app',
    siteName: 'Trendiz',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <GoogleAdsense />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
} 