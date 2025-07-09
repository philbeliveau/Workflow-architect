'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Plus, Edit, Trash2, Save, X } from 'lucide-react'

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
          <h1 className="text-3xl font-bold text-white">My Notes</h1>
          <Button
            onClick={() => setIsCreating(true)}
            className="flex items-center gap-2"
          >
            <Plus size={20} />
            New Note
          </Button>
        </div>

        {/* Create Note Form */}
        {isCreating && (
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">Create New Note</h2>
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
                placeholder="Note title..."
                value={newNote.title}
                onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Write your note here..."
                value={newNote.content}
                onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                rows={6}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
              <div className="flex gap-2">
                <Button onClick={handleCreateNote}>
                  <Save size={16} className="mr-2" />
                  Save Note
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

        {/* Notes List */}
        <div className="space-y-4">
          {notes.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No notes yet</p>
              <p className="text-gray-500 mt-2">Create your first note to get started!</p>
            </div>
          ) : (
            notes.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                isEditing={editingNote === note.id}
                onEdit={() => setEditingNote(note.id)}
                onSave={(updatedNote) => handleUpdateNote(note.id, updatedNote)}
                onCancel={() => setEditingNote(null)}
                onDelete={() => handleDeleteNote(note.id)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

function NoteCard({ 
  note, 
  isEditing, 
  onEdit, 
  onSave, 
  onCancel, 
  onDelete 
}: {
  note: Note
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
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="space-y-4">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            rows={6}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
          <div className="flex gap-2">
            <Button onClick={() => onSave({ title: editTitle, content: editContent })}>
              <Save size={16} className="mr-2" />
              Save
            </Button>
            <Button variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-white">{note.title}</h3>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={onEdit}>
            <Edit size={16} />
          </Button>
          <Button variant="outline" size="sm" onClick={onDelete}>
            <Trash2 size={16} />
          </Button>
        </div>
      </div>
      <p className="text-gray-300 whitespace-pre-wrap mb-4">{note.content}</p>
      <div className="flex justify-between items-center text-sm text-gray-400">
        <span>Created: {new Date(note.createdAt).toLocaleDateString()}</span>
        <span>Updated: {new Date(note.updatedAt).toLocaleDateString()}</span>
      </div>
    </div>
  )
}