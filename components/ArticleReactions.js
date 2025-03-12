import { useState, useEffect } from 'react'

const reactions = [
  { emoji: '❤️', label: 'Love', color: 'bg-red-100 hover:bg-red-200' },
  { emoji: '🤔', label: 'Interesting', color: 'bg-blue-100 hover:bg-blue-200' },
  { emoji: '😲', label: 'Mind Blown', color: 'bg-purple-100 hover:bg-purple-200' },
  { emoji: '👏', label: 'Awesome', color: 'bg-green-100 hover:bg-green-200' },
  { emoji: '😂', label: 'Funny', color: 'bg-yellow-100 hover:bg-yellow-200' }
]

export default function ArticleReactions({ slug }) {
  const [reactionCounts, setReactionCounts] = useState({})
  const [userReactions, setUserReactions] = useState({})
  const [isAnimating, setIsAnimating] = useState(null)

  useEffect(() => {
    // In a real app, fetch initial counts from your backend
    setReactionCounts({
      'Love': Math.floor(Math.random() * 50) + 10,
      'Interesting': Math.floor(Math.random() * 40) + 15,
      'Mind Blown': Math.floor(Math.random() * 30) + 5,
      'Awesome': Math.floor(Math.random() * 45) + 20,
      'Funny': Math.floor(Math.random() * 25) + 8
    })
  }, [])

  const handleReaction = (label) => {
    setIsAnimating(label)
    setTimeout(() => setIsAnimating(null), 700)

    setUserReactions(prev => {
      const newReactions = { ...prev }
      newReactions[label] = !prev[label]
      return newReactions
    })

    setReactionCounts(prev => {
      const newCounts = { ...prev }
      newCounts[label] = prev[label] + (userReactions[label] ? -1 : 1)
      return newCounts
    })

    // In a real app, send this to your backend
    console.log(`User ${userReactions[label] ? 'removed' : 'added'} ${label} reaction to article ${slug}`)
  }

  return (
    <div className="flex flex-col items-center space-y-6 my-8">
      <h3 className="text-lg font-semibold text-gray-900">How did this article make you feel?</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {reactions.map(({ emoji, label, color }) => (
          <button
            key={label}
            onClick={() => handleReaction(label)}
            className={`group relative flex flex-col items-center p-3 rounded-xl transition-all duration-200 transform ${
              userReactions[label] ? `${color} scale-110` : 'bg-gray-50 hover:scale-105'
            }`}
          >
            <span className={`text-3xl transition-transform duration-200 ${
              isAnimating === label ? 'animate-bounce' : 'group-hover:scale-110'
            }`}>
              {emoji}
            </span>
            <span className="mt-1 text-sm font-medium text-gray-700">{label}</span>
            <span className="mt-1 text-xs text-gray-500">{reactionCounts[label] || 0}</span>
            {userReactions[label] && (
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-indigo-500 rounded-full border-2 border-white" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
} 