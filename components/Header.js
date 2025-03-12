import Link from 'next/link'

export default function Header() {
  const topics = [
    'Technology', 'Lifestyle', 'Gaming', 'Fashion', 'Food', 
    'Travel', 'Health', 'Business', 'Entertainment', 'Science'
  ];

  return (
    <header className="bg-white shadow-sm">
      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold gradient-text">
            Trendiz
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-indigo-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {/* Topic Navigation */}
      <div className="border-t">
        <div className="container mx-auto">
          <nav className="topic-nav">
            {topics.map((topic) => (
              <Link
                key={topic}
                href={`/topic/${topic.toLowerCase()}`}
                className="px-4 py-2 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all duration-200"
              >
                {topic}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
} 