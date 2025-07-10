'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { 
  Plus, 
  MessageSquare, 
  CheckCircle, 
  Clock, 
  X, 
  Search, 
  Filter,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Calendar,
  User,
  Badge
} from 'lucide-react'
import AuthenticatedLayout from '@/components/layout/AuthenticatedLayout'

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
      return <AlertCircle className="w-5 h-5 text-red-500" />
    default:
      return <Clock className="w-5 h-5 text-gray-500" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'OPEN':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200'
    case 'ANSWERED':
      return 'bg-green-100 text-green-800 border-green-200'
    case 'CLOSED':
      return 'bg-red-100 text-red-800 border-red-200'
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200'
  }
}

const getStatusText = (status: string) => {
  switch (status) {
    case 'OPEN':
      return 'Ouverte'
    case 'ANSWERED':
      return 'Répondue'
    case 'CLOSED':
      return 'Fermée'
    default:
      return status
  }
}

export default function QuestionsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(true)
  const [isCreating, setIsCreating] = useState(false)
  const [newQuestion, setNewQuestion] = useState({ title: '', content: '' })
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

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
      <AuthenticatedLayout title="Forum Q&A" subtitle="Chargement des questions...">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-center">
          <div className="text-text-secondary">Chargement...</div>
        </div>
      </AuthenticatedLayout>
    )
  }

  if (!session) return null

  const filteredQuestions = questions.filter(question => {
    const matchesSearch = question.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         question.content.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || question.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <AuthenticatedLayout 
      title="Forum Q&A"
      subtitle="Posez vos questions et obtenez de l'aide de la communauté"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="bg-primary-900/40 backdrop-blur-xl rounded-xl shadow-lg border border-accent-gray/20 p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent-purple/10 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-accent-purple" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-text-primary">Forum Questions & Réponses</h2>
                  <p className="text-text-secondary">{questions.length} question{questions.length !== 1 ? 's' : ''} au total</p>
                </div>
              </div>
              
              <Button
                onClick={() => setIsCreating(true)}
                className="flex items-center gap-2"
              >
                <Plus size={18} />
                Poser une Question
              </Button>
            </div>
            
            {/* Search and Filter */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher dans les questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Tous les statuts</option>
                <option value="OPEN">Ouvertes</option>
                <option value="ANSWERED">Répondues</option>
                <option value="CLOSED">Fermées</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Create Question Form */}
        <AnimatePresence>
          {isCreating && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-primary-900/40 backdrop-blur-xl rounded-xl shadow-lg border border-accent-gray/20 p-6 mb-8"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-text-primary">Poser une Question</h2>
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
                  placeholder="Titre de votre question..."
                  value={newQuestion.title}
                  onChange={(e) => setNewQuestion({ ...newQuestion, title: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Décrivez votre question en détail..."
                  value={newQuestion.content}
                  onChange={(e) => setNewQuestion({ ...newQuestion, content: e.target.value })}
                  rows={8}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
                <div className="flex gap-3">
                  <Button onClick={handleCreateQuestion}>
                    <MessageSquare size={16} className="mr-2" />
                    Publier la Question
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setIsCreating(false)}
                  >
                    Annuler
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Questions List */}
        <div className="space-y-6">
          {filteredQuestions.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="p-4 bg-gray-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-text-secondary text-lg mb-2">
                {searchTerm || statusFilter !== 'all' ? 'Aucune question trouvée' : 'Aucune question pour le moment'}
              </p>
              <p className="text-gray-500">
                {searchTerm || statusFilter !== 'all' ? 'Essayez d\'ajuster vos filtres' : 'Soyez le premier à poser une question !'}
              </p>
            </motion.div>
          ) : (
            filteredQuestions.map((question, index) => (
              <QuestionCard key={question.id} question={question} index={index} />
            ))
          )}
        </div>
      </div>
    </AuthenticatedLayout>
  )
}

function QuestionCard({ question, index }: { question: Question, index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-primary-900/40 backdrop-blur-xl rounded-xl shadow-lg border border-accent-gray/20 p-6 hover:shadow-md transition-shadow"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-semibold text-text-primary flex-1 mr-4">{question.title}</h3>
            <div className={`px-3 py-1 rounded-full border text-sm font-medium ${getStatusColor(question.status)}`}>
              <div className="flex items-center gap-2">
                {getStatusIcon(question.status)}
                {getStatusText(question.status)}
              </div>
            </div>
          </div>
          <p className="text-text-secondary leading-relaxed mb-4">{question.content}</p>
        </div>
      </div>

      {/* Question Meta */}
      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <User size={14} />
            <span>{question.user.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={14} />
            <span>{new Date(question.createdAt).toLocaleDateString('fr-FR')}</span>
          </div>
        </div>
        {question.answers.length > 0 && (
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
            {question.answers.length} réponse{question.answers.length !== 1 ? 's' : ''}
          </span>
        )}
      </div>

      {/* Answers Section */}
      {question.answers.length > 0 && (
        <div className="border-t border-gray-200 pt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="mb-4 flex items-center gap-2"
          >
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            {isExpanded ? 'Masquer' : 'Voir'} les réponses ({question.answers.length})
          </Button>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-4"
              >
                {question.answers.map((answer, answerIndex) => (
                  <motion.div
                    key={answer.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: answerIndex * 0.1 }}
                    className={`rounded-lg p-4 border-l-4 ${
                      answer.isOfficial 
                        ? 'bg-blue-50 border-blue-500' 
                        : 'bg-gray-50 border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-500">
                        {new Date(answer.createdAt).toLocaleDateString('fr-FR')}
                      </span>
                      {answer.isOfficial && (
                        <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                          <Badge size={12} />
                          Réponse Officielle
                        </span>
                      )}
                    </div>
                    <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{answer.content}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  )
}