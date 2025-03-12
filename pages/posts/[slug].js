import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import Image from 'next/image'
import Head from 'next/head'
import Header from '../../components/Header'
import Link from 'next/link'
import ArticleReactions from '../../components/ArticleReactions'
import ArticleComments from '../../components/ArticleComments'
import { getRelativeTime } from '../../utils/dateUtils'
import { useEffect, useState } from 'react'

export default function Post({ post }) {
  const [relativeTime, setRelativeTime] = useState('')

  useEffect(() => {
    // Update relative time initially and every minute
    const updateRelativeTime = () => {
      setRelativeTime(getRelativeTime(post.date))
    }
    updateRelativeTime()
    const interval = setInterval(updateRelativeTime, 60000)
    return () => clearInterval(interval)
  }, [post.date])

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": "Trendiz",
      "url": "https://trendiz.ai"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Trendiz",
      "logo": {
        "@type": "ImageObject",
        "url": "https://trendiz.ai/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://trendiz.ai/posts/${post.slug}`
    }
  }

  return (
    <>
      <Head>
        <title>{post.title} | Trendiz - AI-Curated Tech Insights</title>
        <meta name="description" content={post.excerpt || `Read about ${post.title} on Trendiz. Stay ahead with AI-curated insights on emerging technologies and trends.`} />
        <meta name="keywords" content={`${post.title.toLowerCase()}, ${post.category || 'tech'}, tech trends, technology insights, future technology, AI analysis`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${post.title} | Trendiz`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={`https://trendiz.ai/posts/${post.slug}`} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content="https://trendiz.ai" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} | Trendiz`} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://trendiz.ai/posts/${post.slug}`} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Header />
        <main>
          {/* Article Hero */}
          <div className="relative overflow-hidden bg-black/5 backdrop-blur-md border-b border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10" />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <nav className="mb-8" aria-label="Breadcrumb">
                <Link 
                  href="/" 
                  className="inline-flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L4.414 9H17a1 1 0 110 2H4.414l5.293 5.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  <span>Back to Latest</span>
                </Link>
              </nav>

              <article className="relative">
                <div className="text-center mb-8">
                  <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4 leading-tight">
                    {post.title}
                  </h1>
                  <div className="flex items-center justify-center space-x-4 text-gray-600 mb-8">
                    <time dateTime={post.date} className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {relativeTime}
                    </time>
                    <span>•</span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      {post.readingTime} min read
                    </span>
                  </div>
                </div>

                {post.image && (
                  <div className="relative mb-12">
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur-xl opacity-20"></div>
                    <div className="relative rounded-xl overflow-hidden shadow-2xl">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={1200}
                        height={600}
                        className="w-full object-cover"
                        priority
                      />
                    </div>
                  </div>
                )}
              </article>
            </div>
          </div>

          {/* Article Content */}
          <article className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="prose prose-lg max-w-none prose-headings:text-transparent prose-headings:bg-clip-text prose-headings:bg-gradient-to-r prose-headings:from-purple-600 prose-headings:to-blue-600 prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:rounded-xl prose-img:shadow-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Article Reactions */}
            <ArticleReactions slug={post.slug} />
            
            {/* Article Comments */}
            <ArticleComments slug={post.slug} />
            
            {/* Discussion Link */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-gray-600">
                  Share your thoughts and join the discussion
                </div>
                <a
                  href={`https://github.com/viraln/trendyz/issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg shadow-blue-500/30 transition-all duration-200"
                >
                  Join the Discussion
                </a>
              </div>
            </div>
          </article>
        </main>

        {/* Footer */}
        <footer className="bg-black/5 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                © {new Date().getFullYear()} Trendiz. Powered by AI. Built for the future.
              </p>
              <div className="flex justify-center space-x-6">
                <a href="https://github.com/viraln/trendyz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                  GitHub
                </a>
                <a href="https://github.com/viraln/trendyz/issues" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                  Feedback
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'content/articles')
  const filenames = fs.readdirSync(postsDirectory)

  const paths = filenames.map((filename) => ({
    params: {
      slug: filename.replace(/\.md$/, ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'content/articles', `${params.slug}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content, excerpt } = matter(fileContents, { excerpt: true })

  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  // Calculate reading time
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/g).length
  const readingTime = Math.ceil(wordCount / wordsPerMinute)

  // Ensure date is properly formatted as ISO string
  const date = typeof data.date === 'string' ? data.date : 
               data.date instanceof Date ? data.date.toISOString() :
               new Date().toISOString()

  // Default image if none is provided
  const defaultImage = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60'
  const image = data.image || data.images?.[0] || defaultImage

  return {
    props: {
      post: {
        slug: params.slug,
        title: data.title,
        date,
        image,
        content: contentHtml,
        excerpt: excerpt || '',
        readingTime,
        category: data.category || 'Technology',
      },
    },
    revalidate: 3600, // Revalidate every hour
  }
} 