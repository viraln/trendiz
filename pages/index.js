import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import CompactCard from '../components/CompactCard'
import GoogleAdsense from '../components/GoogleAdsense'

const TopicNav = () => {
  const topics = [
    // Technology
    { name: 'Latest', icon: '📰', count: '12' },
    { name: 'AI', icon: '🤖', count: '8', hot: true },
    { name: 'Tech', icon: '💻', count: '15', hot: true },
    { name: 'Blockchain', icon: '🔗', count: '5' },
    { name: 'Cloud', icon: '☁️', count: '7' },
    { name: 'Security', icon: '🔒', count: '6' },
    { name: 'Mobile', icon: '📱', count: '4' },
    { name: 'Data', icon: '📊', count: '9' },
    { name: 'DevOps', icon: '⚙️', count: '3' },
    { name: 'Gaming', icon: '🎮', count: '10', hot: true },
    
    // Business & Finance
    { name: 'Business', icon: '💼', count: '14', hot: true },
    { name: 'Startups', icon: '🚀', count: '11' },
    { name: 'Finance', icon: '💰', count: '13' },
    { name: 'Crypto', icon: '₿', count: '7' },
    { name: 'Markets', icon: '📈', count: '9' },
    { name: 'Economy', icon: '🏦', count: '8' },
    
    // Science & Health
    { name: 'Science', icon: '🔬', count: '12', hot: true },
    { name: 'Health', icon: '🏥', count: '15' },
    { name: 'Space', icon: '🚀', count: '6' },
    { name: 'Climate', icon: '🌍', count: '11', hot: true },
    { name: 'Biology', icon: '🧬', count: '7' },
    { name: 'Medicine', icon: '💊', count: '9' },
    
    // Entertainment & Media
    { name: 'Entertainment', icon: '🎬', count: '16', hot: true },
    { name: 'Movies', icon: '🎥', count: '12' },
    { name: 'Music', icon: '🎵', count: '10' },
    { name: 'TV', icon: '📺', count: '8' },
    { name: 'Streaming', icon: '🎯', count: '7' },
    { name: 'Social', icon: '👥', count: '13' },
    
    // Lifestyle & Culture
    { name: 'Lifestyle', icon: '🌟', count: '14' },
    { name: 'Food', icon: '🍳', count: '11', hot: true },
    { name: 'Travel', icon: '✈️', count: '9' },
    { name: 'Fashion', icon: '👗', count: '8' },
    { name: 'Sports', icon: '⚽', count: '12' },
    { name: 'Fitness', icon: '💪', count: '7' },
    
    // Education & Career
    { name: 'Education', icon: '📚', count: '10' },
    { name: 'Career', icon: '💼', count: '8' },
    { name: 'Skills', icon: '🎯', count: '6' },
    { name: 'Learning', icon: '🎓', count: '9' },
    
    // Arts & Design
    { name: 'Art', icon: '🎨', count: '7' },
    { name: 'Design', icon: '✏️', count: '9' },
    { name: 'Photography', icon: '📸', count: '6' },
    { name: 'Architecture', icon: '🏛️', count: '5' },
    
    // Society & Politics
    { name: 'Society', icon: '🌐', count: '11' },
    { name: 'Politics', icon: '🏛️', count: '13', hot: true },
    { name: 'Culture', icon: '🎭', count: '8' },
    { name: 'Environment', icon: '🌱', count: '10' },
    
    // Innovation & Future
    { name: 'Innovation', icon: '💡', count: '12', hot: true },
    { name: 'Future', icon: '🔮', count: '9' },
    { name: 'Trends', icon: '📈', count: '11' },
    { name: 'Research', icon: '🔍', count: '7' }
  ]

  return (
    <div className="w-full overflow-x-auto bg-white shadow-sm sticky top-0 z-50">
      <div className="flex space-x-4 px-4 py-3 min-w-max">
        {topics.map((topic) => (
          <Link
            key={topic.name}
            href={`/topics/${topic.name.toLowerCase()}`}
            className="group flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-full hover:bg-indigo-50 hover:scale-105 transform transition-all duration-200"
          >
            <span className="text-xl group-hover:scale-110 transition-transform duration-200">{topic.icon}</span>
            <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-600">{topic.name}</span>
            {topic.count && (
              <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full group-hover:bg-indigo-100 group-hover:text-indigo-600">
                {topic.count}
              </span>
            )}
            {topic.hot && (
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}

function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('subscribed')
    // Add actual newsletter subscription logic here
  }

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">The Newsletters</h3>
          <p className="text-sm text-gray-600">Join 50,000+ tech enthusiasts</p>
        </div>
        <div className="flex items-center text-indigo-600 hover:text-indigo-700 cursor-pointer">
          View all
          <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      <div className="mt-4 space-y-3">
        <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-medium text-gray-900">The Daily Tech</h4>
              <p className="text-sm text-gray-600">Start your day informed</p>
            </div>
            <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">25K+ readers</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-medium text-gray-900">AI Weekly</h4>
              <p className="text-sm text-gray-600">Latest in artificial intelligence</p>
            </div>
            <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">15K+ readers</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-medium text-gray-900">Tech Good News</h4>
              <p className="text-sm text-gray-600">Positive stories in tech</p>
            </div>
            <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">10K+ readers</span>
          </div>
        </div>
      </div>
      {status === 'subscribed' ? (
        <div className="mt-6 bg-green-50 text-green-700 p-4 rounded-lg text-center">
          <p className="font-medium">🎉 Welcome to the community!</p>
          <p className="text-sm mt-1">Check your inbox to confirm your subscription</p>
        </div>
      ) : (
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200 transform hover:scale-105"
            >
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">Join for free • Unsubscribe anytime</p>
        </form>
      )}
    </div>
  )
}

function QuizSection() {
  return (
    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-6 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='20' height='20' fill='none'/%3E%3Crect width='1' height='20' fill='white' fill-opacity='0.1'/%3E%3Crect width='20' height='1' fill='white' fill-opacity='0.1'/%3E%3C/svg%3E")`,
        opacity: 0.1
      }}></div>
      <div className="relative">
        <h3 className="text-xl font-bold mb-2">Picture This</h3>
        <p className="text-indigo-100 mb-4">Daily tech quiz with prizes</p>
        <div className="bg-white/10 rounded-lg p-4 mb-4">
          <p className="font-medium">Today's Prize</p>
          <p className="text-sm text-indigo-200">Win a Tesla Cybertruck</p>
        </div>
        <button className="w-full bg-white text-indigo-600 rounded-lg px-4 py-2 font-medium hover:bg-indigo-50 transition-all duration-200 transform hover:scale-105">
          Play Now →
        </button>
        <p className="text-xs mt-2 text-indigo-200">1,234 people played today</p>
      </div>
    </div>
  )
}

function WatchSection({ posts }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">The Watch</h2>
        <Link href="/watch" className="text-indigo-600 text-sm hover:text-indigo-700 flex items-center">
          View all
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
      <div className="space-y-4">
        {posts.slice(0, 3).map((post) => (
          <Link key={post.slug} href={`/posts/${post.slug}`} className="group block">
            <div className="relative h-40 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                className="object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="absolute bottom-0 p-3">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="bg-black/50 text-white text-xs px-2 py-1 rounded">
                    {post.duration || '4:20'}
                  </span>
                  {post.isNew && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">New</span>
                  )}
                </div>
                <h3 className="text-sm font-medium text-white line-clamp-2 group-hover:text-indigo-200 transition-colors duration-200">
                  {post.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

function NewArrivalsSection({ posts }) {
  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">✨</span>
          <h2 className="text-xl font-bold text-gray-900">New Arrivals</h2>
          <span className="animate-pulse flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        </div>
        <Link href="/new" className="text-green-600 text-sm hover:text-green-700 flex items-center">
          View all new articles
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post, index) => (
          <Link 
            key={post.slug} 
            href={`/posts/${post.slug}`}
            className="group relative bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative h-48">
              <Image
                src={post.image || defaultImages[0]}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute top-2 right-2">
                <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full font-medium">
                  New
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-200 line-clamp-2">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="text-gray-500">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                  })}
                </span>
                <span className="text-green-600 font-medium group-hover:text-green-700">Read more →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

const defaultImages = [
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=800&q=60'
];

// Client-side post enhancement
function enhancePost(post) {
  return {
    ...post,
    trending: Math.random() > 0.7,
    views: Math.floor(Math.random() * 1000) + 100
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Trendiz - Coming Soon</title>
        <meta name="description" content="Trendiz - Your source for the latest tech and lifestyle trends" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Trendiz
        </h1>
        
        <div className="text-center mb-8">
          <p className="text-xl text-gray-600">
            Your source for the latest tech and lifestyle trends
          </p>
          <p className="mt-4 text-gray-500">
            We're working on bringing you amazing content. Stay tuned!
          </p>
        </div>

        <div className="max-w-2xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center text-indigo-600">Coming Soon</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span>AI-powered article generation</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span>Dynamic image fetching</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span>Comment system with upvoting</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span>Article reactions and sharing</span>
            </div>
          </div>
        </div>

        <GoogleAdsense slot="5839017069" />
      </main>
    </div>
  )
} 