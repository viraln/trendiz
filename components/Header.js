import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-black/5 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <span className="text-3xl font-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:opacity-0 transition-opacity duration-200">
                  Trendiz
                </span>
                <span className="text-3xl font-black bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 transform hover:scale-110">
                  Trendiz
                </span>
              </div>
              <div className="ml-2 hidden sm:block">
                <span className="text-xs uppercase tracking-widest text-gray-600 font-medium">
                  Future • Now
                </span>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/" 
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-full hover:bg-white/50 transition-all duration-200"
            >
              Latest
            </Link>
            <Link 
              href="/topics" 
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-full hover:bg-white/50 transition-all duration-200"
            >
              Topics
            </Link>
            <a 
              href="https://github.com/viraln/trendiz/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg shadow-blue-500/30 transition-all duration-200"
            >
              Join Discussion
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
} 