import { useState, useEffect } from 'react'
import Image from 'next/image'

function CommentForm({ onSubmit, placeholder = "Share your thoughts...", isReply = false }) {
  const [comment, setComment] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (comment.trim()) {
      onSubmit(comment)
      setComment('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`${isReply ? 'ml-12 mt-2' : 'mb-8'}`}>
      <div className="flex space-x-4">
        <div className="flex-shrink-0">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500" />
        </div>
        <div className="flex-grow">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder={placeholder}
            rows={isReply ? 2 : 3}
            className="w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
          />
          <div className="mt-2 flex justify-end">
            <button
              type="submit"
              disabled={!comment.trim()}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                comment.trim()
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              {isReply ? 'Reply' : 'Comment'}
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

function Comment({ comment, onReply, onUpvote }) {
  const [showReplyForm, setShowReplyForm] = useState(false)
  const [isUpvoted, setIsUpvoted] = useState(false)

  const handleUpvote = () => {
    setIsUpvoted(!isUpvoted)
    onUpvote(comment.id, !isUpvoted)
  }

  const handleReply = (replyText) => {
    onReply(comment.id, replyText)
    setShowReplyForm(false)
  }

  return (
    <div className="flex space-x-4 py-6">
      <div className="flex-shrink-0">
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500" />
      </div>
      <div className="flex-grow">
        <div className="flex items-center space-x-2">
          <span className="font-medium text-gray-900">{comment.author}</span>
          <span className="text-sm text-gray-500">
            {new Date(comment.timestamp).toLocaleDateString()}
          </span>
        </div>
        <p className="mt-1 text-gray-700">{comment.text}</p>
        <div className="mt-2 flex items-center space-x-4 text-sm">
          <button
            onClick={handleUpvote}
            className={`flex items-center space-x-1 transition-colors duration-200 ${
              isUpvoted ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
            <span>{comment.upvotes + (isUpvoted ? 1 : 0)}</span>
          </button>
          <button
            onClick={() => setShowReplyForm(!showReplyForm)}
            className="text-gray-500 hover:text-gray-700"
          >
            Reply
          </button>
        </div>

        {showReplyForm && (
          <CommentForm
            onSubmit={handleReply}
            placeholder="Write a reply..."
            isReply={true}
          />
        )}

        {comment.replies?.length > 0 && (
          <div className="mt-4 space-y-4 ml-8 border-l-2 border-gray-100 pl-4">
            {comment.replies.map((reply) => (
              <Comment
                key={reply.id}
                comment={reply}
                onReply={onReply}
                onUpvote={onUpvote}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function ArticleComments({ slug }) {
  const [comments, setComments] = useState([])
  const [sortBy, setSortBy] = useState('newest')

  useEffect(() => {
    // In a real app, fetch comments from your backend
    setComments([
      {
        id: 1,
        author: 'Sarah Chen',
        text: 'This article really opened my eyes to the therapeutic benefits of bonsai cultivation. I\'ve been looking for a mindful hobby, and this might be it!',
        timestamp: '2024-03-19T10:30:00Z',
        upvotes: 12,
        replies: [
          {
            id: 2,
            author: 'Mike Johnson',
            text: 'Totally agree! I\'ve been practicing bonsai for 2 years now and it\'s been amazing for stress relief.',
            timestamp: '2024-03-19T11:15:00Z',
            upvotes: 8,
          }
        ]
      },
      {
        id: 3,
        author: 'David Park',
        text: 'Great article! Would love to see more content about specific bonsai species and their care requirements.',
        timestamp: '2024-03-19T09:45:00Z',
        upvotes: 15,
      }
    ])
  }, [])

  const handleNewComment = (text) => {
    const newComment = {
      id: Date.now(),
      author: 'Guest User',
      text,
      timestamp: new Date().toISOString(),
      upvotes: 0,
      replies: []
    }
    setComments([newComment, ...comments])
  }

  const handleReply = (commentId, replyText) => {
    const newReply = {
      id: Date.now(),
      author: 'Guest User',
      text: replyText,
      timestamp: new Date().toISOString(),
      upvotes: 0
    }

    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...(comment.replies || []), newReply]
        }
      }
      return comment
    }))
  }

  const handleUpvote = (commentId, isUpvoting) => {
    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          upvotes: comment.upvotes + (isUpvoting ? 1 : -1)
        }
      }
      if (comment.replies) {
        return {
          ...comment,
          replies: comment.replies.map(reply => 
            reply.id === commentId
              ? { ...reply, upvotes: reply.upvotes + (isUpvoting ? 1 : -1) }
              : reply
          )
        }
      }
      return comment
    }))
  }

  const sortedComments = [...comments].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.timestamp) - new Date(a.timestamp)
    }
    return b.upvotes - a.upvotes
  })

  return (
    <div className="my-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">
          Comments ({comments.length})
        </h3>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3 py-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-400"
        >
          <option value="newest">Newest First</option>
          <option value="top">Top Comments</option>
        </select>
      </div>

      <CommentForm onSubmit={handleNewComment} />

      <div className="space-y-6">
        {sortedComments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            onReply={handleReply}
            onUpvote={handleUpvote}
          />
        ))}
      </div>
    </div>
  )
} 