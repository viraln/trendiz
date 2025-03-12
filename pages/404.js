import Head from 'next/head'
import Link from 'next/link'

export default function Custom404() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Head>
        <title>404 - Page Not Found | Trendiz</title>
        <meta name="description" content="Page not found" />
      </Head>

      <div className="text-center">
        <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <Link href="/" className="text-indigo-600 hover:text-indigo-800 font-medium">
          Return Home →
        </Link>
      </div>
    </div>
  )
} 