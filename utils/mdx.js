// This code runs only on the server side
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Mark this function as server-side only
export const getAllPosts = () => {
  // Use try-catch to handle potential file system errors
  try {
    const postsDirectory = path.join(process.cwd(), 'content/articles')
    const filenames = fs.readdirSync(postsDirectory)

    const posts = filenames.map((filename) => {
      const filePath = path.join(postsDirectory, filename)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content, excerpt } = matter(fileContents, { excerpt: true })

      // Calculate reading time
      const wordsPerMinute = 200
      const wordCount = content.split(/\s+/g).length
      const readingTime = Math.ceil(wordCount / wordsPerMinute)

      // Ensure date is properly formatted as ISO string
      const date = typeof data.date === 'string' ? data.date : 
                  data.date instanceof Date ? data.date.toISOString() :
                  new Date().toISOString()

      // Use a specific Unsplash photo if no image is provided
      const defaultImage = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60'

      // Calculate if the post is new (less than 7 days old)
      const isNew = (new Date() - new Date(date)) < 7 * 24 * 60 * 60 * 1000

      return {
        slug: filename.replace(/\.md$/, ''),
        title: data.title,
        date,
        image: data.image || data.images?.[0] || defaultImage,
        excerpt: excerpt || '',
        readingTime,
        category: data.category || 'Tech',
        isNew,
        status: isNew ? 'new' : 'published',
      }
    })

    // Sort posts by date (newest first)
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
  } catch (error) {
    console.error('Error loading blog posts:', error)
    return []
  }
} 