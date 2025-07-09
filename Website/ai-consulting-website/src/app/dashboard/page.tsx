'use client'

import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  FileText, 
  MessageSquare, 
  TrendingUp, 
  Clock, 
  Award,
  Target,
  BarChart3,
  Calendar,
  Zap,
  CheckCircle2,
  ArrowRight,
  Users,
  Play
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import AuthenticatedLayout from '@/components/layout/AuthenticatedLayout'
import Link from 'next/link'

interface DashboardStats {
  totalSections: number
  completedSections: number
  totalNotes: number
  totalQuestions: number
  studyStreak: number
  lastActivity: string
}

export default function Dashboard() {
  const { data: session } = useSession()
  const [stats, setStats] = useState<DashboardStats>({
    totalSections: 6,
    completedSections: 2,
    totalNotes: 12,
    totalQuestions: 5,
    studyStreak: 7,
    lastActivity: 'Il y a 2 heures'
  })

  const [recentActivity, setRecentActivity] = useState([
    {
      id: 1,
      type: 'section',
      title: 'Section 3-7: Alignement & PRD',
      action: 'Terminé',
      time: 'Il y a 2 heures',
      icon: CheckCircle2,
      color: 'text-green-600'
    },
    {
      id: 2,
      type: 'note',
      title: 'Notes sur l\'orchestration MCP',
      action: 'Créé',
      time: 'Il y a 4 heures',
      icon: FileText,
      color: 'text-blue-600'
    },
    {
      id: 3,
      type: 'question',
      title: 'Question sur les agents contextuels',
      action: 'Posé',
      time: 'Hier',
      icon: MessageSquare,
      color: 'text-purple-600'
    }
  ])

  const quickActions = [
    {
      title: 'Continuer la Formation',
      description: 'Section 8-9: Contexte d\'agents',
      icon: Play,
      color: 'from-blue-500 to-blue-600',
      href: '/formation/section-8-9'
    },
    {
      title: 'Prendre des Notes',
      description: 'Créer une nouvelle note',
      icon: FileText,
      color: 'from-green-500 to-green-600',
      href: '/notes'
    },
    {
      title: 'Poser une Question',
      description: 'Demander de l\'aide',
      icon: MessageSquare,
      color: 'from-purple-500 to-purple-600',
      href: '/questions'
    },
    {
      title: 'Voir ma Progression',
      description: 'Analyser mes résultats',
      icon: BarChart3,
      color: 'from-orange-500 to-orange-600',
      href: '/progress'
    }
  ]

  const progressPercentage = (stats.completedSections / stats.totalSections) * 100

  return (
    <AuthenticatedLayout 
      title={`Bonjour, ${session?.user.name} !`}
      subtitle="Continuez votre apprentissage de l'IA agentique"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Progression Globale"
            value={`${Math.round(progressPercentage)}%`}
            subtitle={`${stats.completedSections}/${stats.totalSections} sections`}
            icon={Target}
            color="text-blue-600"
            bgColor="bg-blue-50"
          />
          <StatsCard
            title="Notes Créées"
            value={stats.totalNotes.toString()}
            subtitle="Notes personnelles"
            icon={FileText}
            color="text-green-600"
            bgColor="bg-green-50"
          />
          <StatsCard
            title="Questions Posées"
            value={stats.totalQuestions.toString()}
            subtitle="Dans le forum"
            icon={MessageSquare}
            color="text-purple-600"
            bgColor="bg-purple-50"
          />
          <StatsCard
            title="Série d'Étude"
            value={`${stats.studyStreak} jours`}
            subtitle="Activité continue"
            icon={Zap}
            color="text-orange-600"
            bgColor="bg-orange-50"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Progress Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Ma Progression</h3>
                <Link href="/progress">
                  <Button variant="outline" size="sm">
                    Voir Détails
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    Progression Générale
                  </span>
                  <span className="text-sm text-gray-500">
                    {stats.completedSections}/{stats.totalSections} sections
                  </span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{stats.completedSections}</div>
                    <div className="text-sm text-gray-600">Sections Terminées</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{stats.totalSections - stats.completedSections}</div>
                    <div className="text-sm text-gray-600">Sections Restantes</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Actions Rapides</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <QuickActionCard key={index} action={action} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Activité Récente</h3>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg bg-gray-50 ${activity.color}`}>
                      <activity.icon size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {activity.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        {activity.action} • {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Learning Streak */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl shadow-sm p-6 text-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Zap size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Série d'Étude</h3>
                  <p className="text-orange-100">Continuez sur votre lancée !</p>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{stats.studyStreak}</div>
                <div className="text-orange-100">jours consécutifs</div>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Réalisations</h3>
              <div className="space-y-3">
                <AchievementBadge
                  title="Premier Pas"
                  description="Première section terminée"
                  earned={true}
                />
                <AchievementBadge
                  title="Noteur Actif"
                  description="10+ notes créées"
                  earned={true}
                />
                <AchievementBadge
                  title="Expert"
                  description="Toutes les sections terminées"
                  earned={false}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}

function StatsCard({ title, value, subtitle, icon: Icon, color, bgColor }: {
  title: string
  value: string
  subtitle: string
  icon: any
  color: string
  bgColor: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
    >
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-lg ${bgColor}`}>
          <Icon size={24} className={color} />
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-900">{value}</div>
          <div className="text-sm font-medium text-gray-700">{title}</div>
          <div className="text-xs text-gray-500">{subtitle}</div>
        </div>
      </div>
    </motion.div>
  )
}

function QuickActionCard({ action }: { action: any }) {
  return (
    <Link href={action.href}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`bg-gradient-to-r ${action.color} rounded-xl p-4 text-white cursor-pointer`}
      >
        <div className="flex items-center gap-3 mb-2">
          <action.icon size={20} />
          <span className="font-semibold">{action.title}</span>
        </div>
        <p className="text-sm opacity-90">{action.description}</p>
      </motion.div>
    </Link>
  )
}

function AchievementBadge({ title, description, earned }: {
  title: string
  description: string
  earned: boolean
}) {
  return (
    <div className={`flex items-center gap-3 p-3 rounded-lg ${
      earned ? 'bg-yellow-50 border border-yellow-200' : 'bg-gray-50'
    }`}>
      <div className={`p-2 rounded-full ${
        earned ? 'bg-yellow-500 text-white' : 'bg-gray-300 text-gray-500'
      }`}>
        <Award size={16} />
      </div>
      <div>
        <div className={`text-sm font-medium ${
          earned ? 'text-yellow-800' : 'text-gray-500'
        }`}>
          {title}
        </div>
        <div className={`text-xs ${
          earned ? 'text-yellow-700' : 'text-gray-400'
        }`}>
          {description}
        </div>
      </div>
    </div>
  )
}