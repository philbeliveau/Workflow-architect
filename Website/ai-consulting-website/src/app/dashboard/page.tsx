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
      color: 'text-success-green'
    },
    {
      id: 2,
      type: 'note',
      title: 'Notes sur l\'orchestration MCP',
      action: 'Créé',
      time: 'Il y a 4 heures',
      icon: FileText,
      color: 'text-accent-purple'
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
            color="text-accent-purple"
            bgColor="bg-accent-purple/10"
          />
          <StatsCard
            title="Notes Créées"
            value={stats.totalNotes.toString()}
            subtitle="Notes personnelles"
            icon={FileText}
            color="text-success-green"
            bgColor="bg-success-green/10"
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
            color="text-warning-orange"
            bgColor="bg-warning-orange/10"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Progress Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-800/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-500/20 p-6 hover:shadow-purple-500/10 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Ma Progression</h3>
                <Link href="/progress">
                  <Button variant="outline" size="sm">
                    Voir Détails
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-300">
                    Progression Générale
                  </span>
                  <span className="text-sm text-slate-400">
                    {stats.completedSections}/{stats.totalSections} sections
                  </span>
                </div>
                
                <div className="w-full bg-slate-700/50 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full shadow-lg"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-green-500/20 backdrop-blur-sm rounded-lg border border-green-400/30">
                    <div className="text-2xl font-bold text-green-300">{stats.completedSections}</div>
                    <div className="text-sm text-slate-300">Sections Terminées</div>
                  </div>
                  <div className="text-center p-4 bg-purple-500/20 backdrop-blur-sm rounded-lg border border-purple-400/30">
                    <div className="text-2xl font-bold text-purple-300">{stats.totalSections - stats.completedSections}</div>
                    <div className="text-sm text-slate-300">Sections Restantes</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-slate-800/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-500/20 p-6 hover:shadow-purple-500/10 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-6">Actions Rapides</h3>
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
              className="bg-slate-800/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-500/20 p-6 hover:shadow-purple-500/10 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Activité Récente</h3>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg bg-slate-700/40 border border-purple-500/20 ${activity.color}`}>
                      <activity.icon size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">
                        {activity.title}
                      </p>
                      <p className="text-xs text-slate-400">
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
              className="bg-gradient-to-br from-purple-600/80 to-purple-700/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-400/30 p-6 text-white relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Zap size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Série d'Étude</h3>
                  <p className="text-white/80">Continuez sur votre lancée !</p>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{stats.studyStreak}</div>
                <div className="text-white/80">jours consécutifs</div>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-slate-800/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-500/20 p-6 hover:shadow-purple-500/10 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Réalisations</h3>
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

interface StatsCardProps {
  title: string
  value: string
  subtitle: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  color: string
  bgColor: string
}

function StatsCard({ title, value, subtitle, icon: Icon, color, bgColor }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-800/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-500/20 p-6 hover:shadow-purple-500/10 hover:shadow-2xl transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-lg ${bgColor}`}>
          <Icon size={24} className={color} />
        </div>
        <div>
          <div className="text-2xl font-bold text-white">{value}</div>
          <div className="text-sm font-medium text-slate-300">{title}</div>
          <div className="text-xs text-slate-400">{subtitle}</div>
        </div>
      </div>
    </motion.div>
  )
}

interface QuickAction {
  title: string
  description: string
  icon: React.ComponentType<{ size?: number }>
  color: string
  href: string
}

function QuickActionCard({ action }: { action: QuickAction }) {
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
      earned ? 'bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30' : 'bg-slate-700/40 border border-slate-600/30'
    }`}>
      <div className={`p-2 rounded-full ${
        earned ? 'bg-yellow-500 text-white' : 'bg-slate-600 text-slate-400'
      }`}>
        <Award size={16} />
      </div>
      <div>
        <div className={`text-sm font-medium ${
          earned ? 'text-yellow-200' : 'text-slate-300'
        }`}>
          {title}
        </div>
        <div className={`text-xs ${
          earned ? 'text-yellow-300' : 'text-slate-400'
        }`}>
          {description}
        </div>
      </div>
    </div>
  )
}