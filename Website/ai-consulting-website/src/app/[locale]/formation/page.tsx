'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  CheckCircle, 
  Clock, 
  Users, 
  MessageSquare, 
  FileText,
  Play,
  ArrowRight,
  Target,
  TrendingUp,
  Award,
  Zap
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import AuthenticatedLayout from '@/components/layout/AuthenticatedLayout'
import Link from 'next/link'

const trainingParcours = [
  {
    id: 'section-0-2',
    title: 'Section 0-2 : Comprendre la nouvelle ère et le paradoxe IA',
    description: 'Découvrez les fondements de l\'IA moderne et les défis actuels du développement agentique',
    sections: ['L\'urgence révolutionnaire', 'Le paradoxe en chiffres', 'Vibe vs Agentic coding', 'Architecture 4 piliers', 'Sélection stratégique modèles'],
    duration: '2-3 heures',
    level: 'Débutant',
    status: 'available',
    completed: true,
    progress: 100
  },
  {
    id: 'section-3-7',
    title: 'Section 3-7 : Maîtriser l\'alignement et les PRD',
    description: 'Maîtrisez l\'art des PRD lisibles par l\'IA et l\'alignement parfait avec vos agents',
    sections: ['Les 3 piliers alignement', 'Spécifications IA-ready', 'Framework Oracle', 'Templates domaines', 'Atelier PRD collaboratif'],
    duration: '4-5 heures',
    level: 'Intermédiaire',
    status: 'available',
    completed: true,
    progress: 100
  },
  {
    id: 'section-8-9',
    title: 'Section 8-9 : Contexte d\'agents et oracles de vérification',
    description: 'Résolvez le problème Oracle et structurez des contextes exécutables pour vos agents',
    sections: ['Le problème Oracle', 'Architecture agents spécialisés', 'CLAUDE.md optimisé', 'Test oracles automatisés', 'Simulation projet'],
    duration: '3-4 heures',
    level: 'Intermédiaire',
    status: 'available',
    completed: true,
    progress: 100
  },
  {
    id: 'section-10-12',
    title: 'Section 10-12 : Orchestration, MCP et RooCode en action',
    description: 'Orchestration complète : CrewAI, AutoGen, MCP et RooCode pour des pipelines industriels',
    sections: ['Orchestration expliquée', 'Systèmes multi-agents', 'Protocole MCP', 'Évolution SPARC', 'RooCode modes', 'Pipeline PRD→Code'],
    duration: '5-6 heures',
    level: 'Avancé',
    status: 'available',
    completed: true,
    progress: 100
  },
  {
    id: 'guides-config',
    title: 'Guides Configuration : Setup environnement développeur',
    description: 'Configuration complète : Claude-Code, RooCode, Claude-Flow, MCP et optimisations avancées',
    sections: ['Claude-Code setup', 'IDE optimal', 'RooCode interface', 'Claude-Flow orchestration', 'MCP écosystème', 'Tests validation', 'Troubleshooting'],
    duration: '2-3 heures',
    level: 'Tous niveaux',
    status: 'available',
    completed: true,
    progress: 100
  },
  {
    id: 'section-13-14',
    title: 'Section 13-14 : Cas d\'étude et roadmap d\'implémentation',
    description: 'Transformations réelles : équipe 2 devs = output 6 devs, roadmap 30/60/90 jours',
    sections: ['Cas DevCorp SaaS', 'Agence TechCraft', 'Roadmap 30/60/90j', 'Vendre vision AI-first', 'Checklist transformation'],
    duration: '3-4 heures',
    level: 'Avancé',
    status: 'available',
    completed: true,
    progress: 100
  }
]

export default function FormationPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [stats, setStats] = useState({
    totalProgress: 100,
    completedSections: 6,
    totalSections: 6,
    studyTime: 24
  })

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-text-secondary">Chargement...</div>
      </div>
    )
  }

  if (!session) return null

  const currentSection = trainingParcours.find(p => p.status === 'current')

  return (
    <AuthenticatedLayout 
      title="Formation IA Agentique"
      subtitle="Maîtrisez les outils agentiques IA avec notre guide complet"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-accent-purple to-accent-purple-light rounded-xl p-6 text-white"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Votre Progression</h2>
                  <p className="text-white/80">Continuez votre apprentissage</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">{stats.totalProgress}%</div>
                  <div className="text-white/80">Complété</div>
                </div>
              </div>
              
              <div className="w-full bg-white/20 rounded-full h-3 mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${stats.totalProgress}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="bg-white h-3 rounded-full"
                />
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold">{stats.completedSections}</div>
                  <div className="text-white/80 text-sm">Sections terminées</div>
                </div>
                <div>
                  <div className="text-xl font-bold">{stats.totalSections - stats.completedSections}</div>
                  <div className="text-white/80 text-sm">Sections restantes</div>
                </div>
                <div>
                  <div className="text-xl font-bold">{stats.studyTime}h</div>
                  <div className="text-white/80 text-sm">Temps d'étude</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-primary-900/40 backdrop-blur-xl rounded-xl shadow-lg border border-accent-gray/20 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-50 rounded-lg">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">Objectif Quotidien</h3>
                  <p className="text-sm text-text-secondary">30 min d'étude</p>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">22/30 minutes aujourd'hui</p>
            </motion.div>

            {currentSection && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-primary-900/40 backdrop-blur-xl rounded-xl shadow-lg border border-accent-gray/20 p-6"
              >
                <h3 className="font-semibold text-text-primary mb-2">Section Actuelle</h3>
                <p className="text-sm text-text-secondary mb-3">{currentSection.title}</p>
                <Link href={`/formation/${currentSection.id}`}>
                  <Button className="w-full">
                    <Play size={16} className="mr-2" />
                    Continuer
                  </Button>
                </Link>
              </motion.div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-primary-900/40 backdrop-blur-xl rounded-xl shadow-lg border border-accent-gray/20 p-6 mb-8"
        >
          <h3 className="text-lg font-semibold text-text-primary mb-6">Actions Rapides</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <QuickActionCard
              title="Mes Notes"
              description="Consulter mes notes"
              icon={FileText}
              color="from-blue-500 to-blue-600"
              href="/notes"
            />
            <QuickActionCard
              title="Forum Q&A"
              description="Poser une question"
              icon={MessageSquare}
              color="from-purple-500 to-purple-600"
              href="/questions"
            />
            <QuickActionCard
              title="Ma Progression"
              description="Voir mes statistiques"
              icon={TrendingUp}
              color="from-green-500 to-green-600"
              href="/progress"
            />
          </div>
        </motion.div>

        {/* Parcours de Formation */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-2">Parcours de Formation</h2>
              <p className="text-text-secondary">Suivez le parcours recommandé pour une progression optimale</p>
            </div>
          </div>

          <div className="space-y-6">
            {trainingParcours.map((parcours, index) => (
              <ParcoursCard key={parcours.id} parcours={parcours} index={index} />
            ))}
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}

interface QuickActionCardProps {
  title: string
  description: string
  icon: React.ComponentType<{ size?: number }>
  color: string
  href: string
}

function QuickActionCard({ title, description, icon: Icon, color, href }: QuickActionCardProps) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`bg-gradient-to-r ${color} rounded-xl p-4 text-white cursor-pointer`}
      >
        <div className="flex items-center gap-3 mb-2">
          <Icon size={20} />
          <span className="font-semibold">{title}</span>
        </div>
        <p className="text-sm opacity-90">{description}</p>
      </motion.div>
    </Link>
  )
}

function ParcoursCard({ parcours, index }: { 
  parcours: typeof trainingParcours[0]
  index: number 
}) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Débutant':
        return 'bg-green-100 text-green-800'
      case 'Intermédiaire':
        return 'bg-yellow-100 text-yellow-800'
      case 'Avancé':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-blue-100 text-blue-800'
    }
  }

  const getStatusIcon = () => {
    switch (parcours.status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-500" />
      case 'current':
        return <Play className="w-6 h-6 text-blue-500" />
      case 'locked':
        return <Clock className="w-6 h-6 text-gray-400" />
      default:
        return <BookOpen className="w-6 h-6 text-gray-400" />
    }
  }

  const isAccessible = parcours.status !== 'locked'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`bg-primary-900/40 backdrop-blur-xl rounded-xl shadow-lg border border-accent-gray/20 p-6 transition-all ${
        isAccessible ? 'hover:shadow-md' : 'opacity-60'
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4 flex-1">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl">
            <span className="text-lg font-bold text-blue-600">{index + 1}</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold text-text-primary">{parcours.title}</h3>
              {getStatusIcon()}
            </div>
            <p className="text-text-secondary mb-3">{parcours.description}</p>
            <div className="flex items-center gap-4 text-sm">
              <span className={`px-2 py-1 rounded-full ${getLevelColor(parcours.level)}`}>
                {parcours.level}
              </span>
              <span className="text-gray-500">{parcours.duration}</span>
              <span className="text-gray-500">{parcours.sections.length} modules</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      {parcours.progress > 0 && (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Progression</span>
            <span className="text-sm text-gray-500">{parcours.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${parcours.progress}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
            />
          </div>
        </div>
      )}

      {/* Modules */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Modules inclus :</h4>
        <div className="flex flex-wrap gap-2">
          {parcours.sections.map((section, idx) => (
            <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              {section}
            </span>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {parcours.completed && (
            <div className="flex items-center gap-1 text-green-600">
              <CheckCircle size={16} />
              <span className="text-sm font-medium">Terminé</span>
            </div>
          )}
          {parcours.status === 'current' && (
            <div className="flex items-center gap-1 text-blue-600">
              <Play size={16} />
              <span className="text-sm font-medium">En cours</span>
            </div>
          )}
          {parcours.status === 'locked' && (
            <div className="flex items-center gap-1 text-gray-400">
              <Clock size={16} />
              <span className="text-sm">Bientôt disponible</span>
            </div>
          )}
        </div>
        
        {isAccessible && (
          <Link href={`/formation/${parcours.id}`}>
            <Button variant={parcours.status === 'current' ? 'primary' : 'outline'}>
              {parcours.completed ? 'Revoir' : parcours.status === 'current' ? 'Continuer' : 'Commencer'}
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        )}
      </div>
    </motion.div>
  )
}