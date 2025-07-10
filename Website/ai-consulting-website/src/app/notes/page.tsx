'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Plus, Edit, Trash2, Save, X, FileText, Calendar, Search, Filter, BookOpen } from 'lucide-react'
import AuthenticatedLayout from '@/components/layout/AuthenticatedLayout'

interface Note {
  id: string
  title: string
  content: string
  courseId?: string
  isPrivate: boolean
  createdAt: string
  updatedAt: string
}

export default function NotesPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [notes, setNotes] = useState<Note[]>([])
  const [loading, setLoading] = useState(true)
  const [isCreating, setIsCreating] = useState(false)
  const [editingNote, setEditingNote] = useState<string | null>(null)
  const [newNote, setNewNote] = useState({ title: '', content: '' })
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
    }
  }, [status, router])

  useEffect(() => {
    if (session) {
      fetchNotes()
    }
  }, [session])

  const fetchNotes = async () => {
    try {
      const response = await fetch('/api/notes')
      if (response.ok) {
        const data = await response.json()
        setNotes(data)
      }
    } catch (error) {
      console.error('Error fetching notes:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCreateNote = async () => {
    if (!newNote.title || !newNote.content) return

    try {
      const response = await fetch('/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: newNote.title,
          content: newNote.content,
          isPrivate: true
        })
      })

      if (response.ok) {
        const note = await response.json()
        setNotes([note, ...notes])
        setNewNote({ title: '', content: '' })
        setIsCreating(false)
      }
    } catch (error) {
      console.error('Error creating note:', error)
    }
  }

  const handleUpdateNote = async (noteId: string, updatedNote: { title: string; content: string }) => {
    try {
      const response = await fetch(`/api/notes/${noteId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedNote)
      })

      if (response.ok) {
        const updated = await response.json()
        setNotes(notes.map(note => note.id === noteId ? updated : note))
        setEditingNote(null)
      }
    } catch (error) {
      console.error('Error updating note:', error)
    }
  }

  const handleDeleteNote = async (noteId: string) => {
    if (!confirm('Are you sure you want to delete this note?')) return

    try {
      const response = await fetch(`/api/notes/${noteId}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        setNotes(notes.filter(note => note.id !== noteId))
      }
    } catch (error) {
      console.error('Error deleting note:', error)
    }
  }

  if (status === 'loading' || loading) {
    return (
      <AuthenticatedLayout title="Mes Notes" subtitle="Chargement de vos notes...">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-center">
          <div className="text-text-secondary">Chargement...</div>
        </div>
      </AuthenticatedLayout>
    )
  }

  if (!session) return null

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.content.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSearch
  })

  return (
    <AuthenticatedLayout 
      title="Mes Notes"
      subtitle="Organisez et gérez vos notes de formation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="bg-slate-800/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-500/20 p-6 hover:shadow-purple-500/10 hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent-purple/10 rounded-lg">
                  <FileText className="w-6 h-6 text-accent-purple" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">Centre de Notes</h2>
                  <p className="text-slate-300">{notes.length} note{notes.length !== 1 ? 's' : ''} au total</p>
                </div>
              </div>
              
              <Button
                onClick={() => setIsCreating(true)}
                className="flex items-center gap-2"
              >
                <Plus size={18} />
                Nouvelle Note
              </Button>
            </div>
            
            {/* Search and Filter */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher dans vos notes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Create Note Form */}
        <AnimatePresence>
          {isCreating && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-800/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-500/20 p-6 mb-8 hover:shadow-purple-500/10 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-white">Créer une Nouvelle Note</h2>
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
                  placeholder="Titre de la note..."
                  value={newNote.title}
                  onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                />
                <textarea
                  placeholder="Écrivez votre note ici..."
                  value={newNote.content}
                  onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                  rows={8}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none backdrop-blur-sm"
                />
                <div className="flex gap-3">
                  <Button onClick={handleCreateNote}>
                    <Save size={16} className="mr-2" />
                    Enregistrer
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

        {/* Notes List */}
        <div className="space-y-6">
          {filteredNotes.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="p-4 bg-slate-700/40 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-slate-600/30">
                <BookOpen className="w-8 h-8 text-slate-400" />
              </div>
              <p className="text-slate-300 text-lg mb-2">
                {searchTerm ? 'Aucune note trouvée' : 'Aucune note pour le moment'}
              </p>
              <p className="text-slate-400">
                {searchTerm ? 'Essayez avec d\'autres mots-clés' : 'Créez votre première note pour commencer !'}
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNotes.map((note, index) => (
                <NoteCard
                  key={note.id}
                  note={note}
                  index={index}
                  isEditing={editingNote === note.id}
                  onEdit={() => setEditingNote(note.id)}
                  onSave={(updatedNote) => handleUpdateNote(note.id, updatedNote)}
                  onCancel={() => setEditingNote(null)}
                  onDelete={() => handleDeleteNote(note.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </AuthenticatedLayout>
  )
}

function NoteCard({ 
  note, 
  index,
  isEditing, 
  onEdit, 
  onSave, 
  onCancel, 
  onDelete 
}: {
  note: Note
  index: number
  isEditing: boolean
  onEdit: () => void
  onSave: (note: { title: string; content: string }) => void
  onCancel: () => void
  onDelete: () => void
}) {
  const [editTitle, setEditTitle] = useState(note.title)
  const [editContent, setEditContent] = useState(note.content)

  if (isEditing) {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-slate-800/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-500/20 p-6 hover:shadow-purple-500/10 hover:shadow-2xl transition-all duration-300"
      >
        <div className="space-y-4">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent font-semibold backdrop-blur-sm"
          />
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            rows={8}
            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none backdrop-blur-sm"
          />
          <div className="flex gap-3">
            <Button onClick={() => onSave({ title: editTitle, content: editContent })}>
              <Save size={16} className="mr-2" />
              Enregistrer
            </Button>
            <Button variant="outline" onClick={onCancel}>
              Annuler
            </Button>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -2 }}
      className="bg-slate-800/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-500/20 p-6 cursor-pointer hover:shadow-purple-500/10 hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-white line-clamp-2 flex-1 mr-3">
          {note.title}
        </h3>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="outline" size="sm" onClick={onEdit}>
            <Edit size={14} />
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => {
              if (confirm('Êtes-vous sûr de vouloir supprimer cette note ?')) {
                onDelete()
              }
            }}
            className="text-red-600 hover:text-red-700 hover:border-red-300"
          >
            <Trash2 size={14} />
          </Button>
        </div>
      </div>
      
      <p className="text-slate-300 line-clamp-4 mb-4 whitespace-pre-wrap leading-relaxed">
        {note.content}
      </p>
      
      <div className="flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <Calendar size={12} />
          <span>Créé le {new Date(note.createdAt).toLocaleDateString('fr-FR')}</span>
        </div>
        {note.updatedAt !== note.createdAt && (
          <span>Modifié le {new Date(note.updatedAt).toLocaleDateString('fr-FR')}</span>
        )}
      </div>
    </motion.div>
  )
}