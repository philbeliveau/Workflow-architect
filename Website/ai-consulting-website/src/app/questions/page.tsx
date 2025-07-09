'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Plus, MessageSquare, CheckCircle, Clock, X } from 'lucide-react'

interface Answer {
  id: string
  content: string
  isOfficial: boolean
  createdAt: string
}

interface Question {
  id: string
  title: string
  content: string
  status: 'OPEN' | 'ANSWERED' | 'CLOSED'
  createdAt: string
  updatedAt: string
  answers: Answer[]
  user: {
    name: string
    email: string
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'OPEN':
      return <Clock className="w-5 h-5 text-yellow-500" />
    case 'ANSWERED':
      return <CheckCircle className="w-5 h-5 text-green-500" />
    case 'CLOSED':
      return <X className="w-5 h-5 text-red-500" />
    default:
      return <Clock className="w-5 h-5 text-gray-500" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'OPEN':
      return 'text-yellow-500'
    case 'ANSWERED':
      return 'text-green-500'
    case 'CLOSED':
      return 'text-red-500'
    default:
      return 'text-gray-500'
  }
}

export default function QuestionsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(true)
  const [isCreating, setIsCreating] = useState(false)
  const [newQuestion, setNewQuestion] = useState({ title: '', content: '' })

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
    }
  }, [status, router])

  useEffect(() => {
    if (session) {
      fetchQuestions()
    }
  }, [session])

  const fetchQuestions = async () => {
    try {
      const response = await fetch('/api/questions')
      if (response.ok) {
        const data = await response.json()
        setQuestions(data)
      }
    } catch (error) {
      console.error('Error fetching questions:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCreateQuestion = async () => {
    if (!newQuestion.title || !newQuestion.content) return

    try {
      const response = await fetch('/api/questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newQuestion)
      })

      if (response.ok) {
        const question = await response.json()
        setQuestions([question, ...questions])
        setNewQuestion({ title: '', content: '' })
        setIsCreating(false)
      }
    } catch (error) {
      console.error('Error creating question:', error)
    }
  }


  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  if (!session) return null

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Questions & Answers</h1>
          <Button
            onClick={() => setIsCreating(true)}
            className="flex items-center gap-2"
          >
            <Plus size={20} />
            Ask Question
          </Button>
        </div>

        {/* Create Question Form */}
        {isCreating && (
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">Ask a Question</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsCreating(false)}
              >
                <X size={16} />
              </Button>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Question title..."
                value={newQuestion.title}
                onChange={(e) => setNewQuestion({ ...newQuestion, title: e.target.value })}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Describe your question in detail..."
                value={newQuestion.content}
                onChange={(e) => setNewQuestion({ ...newQuestion, content: e.target.value })}
                rows={6}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
              <div className="flex gap-2">
                <Button onClick={handleCreateQuestion}>
                  <MessageSquare size={16} className="mr-2" />
                  Ask Question
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsCreating(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Questions List */}
        <div className="space-y-4">
          {questions.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No questions yet</p>
              <p className="text-gray-500 mt-2">Ask your first question to get help!</p>
            </div>
          ) : (
            questions.map((question) => (
              <QuestionCard key={question.id} question={question} />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

function QuestionCard({ question }: { question: Question }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-semibold text-white">{question.title}</h3>
            <div className="flex items-center gap-2">
              {question.status && getStatusIcon(question.status)}
              <span className={`text-sm font-medium ${getStatusColor(question.status)}`}>
                {question.status}
              </span>
            </div>
          </div>
          <p className="text-gray-300 mb-4">{question.content}</p>
        </div>
      </div>

      {/* Answers Section */}
      {question.answers.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-700">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-lg font-semibold text-white">
              Answers ({question.answers.length})
            </h4>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Hide' : 'Show'} Answers
            </Button>
          </div>
          
          {isExpanded && (
            <div className="space-y-3">
              {question.answers.map((answer) => (
                <div key={answer.id} className="bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">
                      {new Date(answer.createdAt).toLocaleDateString()}
                    </span>
                    {answer.isOfficial && (
                      <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
                        Official Answer
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 whitespace-pre-wrap">{answer.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="flex justify-between items-center text-sm text-gray-400 mt-4">
        <span>Asked: {new Date(question.createdAt).toLocaleDateString()}</span>
        <span>By: {question.user.name}</span>
      </div>
    </div>
  )
}