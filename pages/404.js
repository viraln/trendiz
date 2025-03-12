import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/Header'

export default function Custom404() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>404 - Page Not Found | Trendiz</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
        <Link 
          href="/"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg shadow-blue-500/30 transition-all duration-200"
        >
          Go back home
        </Link>
      </main>
    </div>
  )
} 