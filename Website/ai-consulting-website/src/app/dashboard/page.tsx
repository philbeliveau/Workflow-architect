'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Button } from '@/components/ui/Button'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-700 rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold text-white">
                  Welcome back, {session.user.name}!
                </h1>
                <p className="text-gray-400 mt-1">
                  Email: {session.user.email}
                </p>
                <p className="text-gray-400">
                  Role: {session.user.role} | Subscription: {session.user.subscription}
                </p>
              </div>
              <Button
                onClick={() => signOut({ callbackUrl: '/' })}
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              >
                Sign Out
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Formation IA Agentique
                </h3>
                <p className="text-gray-400 mb-4">
                  Guide complet pour maîtriser les outils agentiques
                </p>
                <Button className="w-full" href="/formation">
                  Accéder à la Formation
                </Button>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">
                  My Notes
                </h3>
                <p className="text-gray-400 mb-4">
                  Review your course notes
                </p>
                <Button className="w-full" href="/notes">
                  View Notes
                </Button>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Ask Questions
                </h3>
                <p className="text-gray-400 mb-4">
                  Get help from instructors
                </p>
                <Button className="w-full" href="/questions">
                  View Q&A
                </Button>
              </div>
            </div>

            <div className="mt-8 bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-4">
                Recent Activity
              </h3>
              <div className="space-y-2">
                <div className="text-gray-400">
                  • Welcome to your AI training dashboard!
                </div>
                <div className="text-gray-400">
                  • Complete your profile to get started
                </div>
                <div className="text-gray-400">
                  • Explore available courses
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}