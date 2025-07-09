'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { BookOpen, CheckCircle, Clock, Users, MessageSquare, FileText } from 'lucide-react'
import Link from 'next/link'

const trainingParcours = [
  {
    id: 'section-0-2',
    title: 'Section 0-2 : Comprendre la nouvelle ère et le paradoxe IA',
    description: 'Découvrez les fondements de l\'IA moderne et les défis actuels',
    sections: ['Introduction à l\'IA', 'Le paradoxe de l\'IA', 'Nouveaux paradigmes'],
    duration: '2-3 heures',
    level: 'Débutant',
    status: 'available'
  },
  {
    id: 'section-3-7',
    title: 'Section 3-7 : Maîtriser l\'alignement et les PRD',
    description: 'Apprenez à aligner vos agents IA et créer des PRD efficaces',
    sections: ['Alignement IA', 'Product Requirements Document', 'Stratégies d\'alignement', 'Cas pratiques', 'Validation'],
    duration: '4-5 heures',
    level: 'Intermédiaire',
    status: 'available'
  },
  {
    id: 'section-8-9',
    title: 'Section 8-9 : Contexte d\'agents et oracles de vérification',
    description: 'Maîtrisez le contexte des agents et les systèmes de vérification',
    sections: ['Contexte d\'agents', 'Oracles de vérification'],
    duration: '3-4 heures',
    level: 'Intermédiaire',
    status: 'available'
  },
  {
    id: 'section-10-12',
    title: 'Section 10-12 : Orchestration, MCP et RooCode en action',
    description: 'Orchestrez vos agents avec MCP et implémentez RooCode',
    sections: ['Orchestration d\'agents', 'Model Context Protocol (MCP)', 'RooCode en pratique'],
    duration: '5-6 heures',
    level: 'Avancé',
    status: 'available'
  },
  {
    id: 'guides-config',
    title: 'Guides Configuration : Setup environnement développeur',
    description: 'Configurez votre environnement de développement pour les agents IA',
    sections: ['Installation', 'Configuration IDE', 'Outils essentiels', 'Débogage'],
    duration: '2-3 heures',
    level: 'Tous niveaux',
    status: 'available'
  },
  {
    id: 'section-13-14',
    title: 'Section 13-14 : Cas d\'étude et roadmap d\'implémentation',
    description: 'Cas d\'étude concrets et roadmap pour vos projets',
    sections: ['Cas d\'étude réels', 'Roadmap d\'implémentation'],
    duration: '3-4 heures',
    level: 'Avancé',
    status: 'available'
  }
]

export default function FormationPage() {
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

  if (!session) return null

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-6xl mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Formation : Maîtriser les Outils Agentiques IA
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Un guide complet pour utiliser les outils agentiques IA de manière efficace. 
            Apprenez à travers des exemples pratiques, des explications détaillées et des cas d'usage concrets.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <BookOpen className="w-12 h-12 text-blue-500 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-white mb-2">6 Parcours</h3>
            <p className="text-gray-400">Sections complètes</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <Clock className="w-12 h-12 text-green-500 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-white mb-2">20+ Heures</h3>
            <p className="text-gray-400">Contenu de formation</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <Users className="w-12 h-12 text-purple-500 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-white mb-2">Forum Actif</h3>
            <p className="text-gray-400">Discussions & entraide</p>
          </div>
        </div>

        {/* Parcours Recommandé */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Parcours Recommandé
          </h2>
          <div className="space-y-6">
            {trainingParcours.map((parcours, index) => (
              <ParcoursCard key={parcours.id} parcours={parcours} index={index} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Prêt à commencer votre formation ?
          </h2>
          <p className="text-gray-100 mb-6">
            Accédez à tous les outils nécessaires pour maîtriser l'IA agentique
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/notes" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <FileText className="w-5 h-5 mr-2" />
              Mes Notes
            </Button>
            <Button href="/questions" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <MessageSquare className="w-5 h-5 mr-2" />
              Forum Q&A
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ParcoursCard({ parcours, index }: { parcours: typeof trainingParcours[0]; index: number }) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Débutant':
        return 'bg-green-600'
      case 'Intermédiaire':
        return 'bg-yellow-600'
      case 'Avancé':
        return 'bg-red-600'
      default:
        return 'bg-blue-600'
    }
  }

  return (
    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
            {index + 1}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">{parcours.title}</h3>
            <p className="text-gray-400 mb-3">{parcours.description}</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className={`${getLevelColor(parcours.level)} text-white px-3 py-1 rounded text-sm`}>
            {parcours.level}
          </span>
          <span className="text-sm text-gray-400">{parcours.duration}</span>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-300 mb-2">Contenu de cette section :</h4>
        <div className="flex flex-wrap gap-2">
          {parcours.sections.map((section: string, idx: number) => (
            <span key={idx} className="bg-gray-700 text-gray-300 px-3 py-1 rounded text-sm">
              {section}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span className="text-sm text-gray-400">Disponible</span>
        </div>
        <Link href={`/formation/${parcours.id}`}>
          <Button size="sm">
            Commencer
          </Button>
        </Link>
      </div>
    </div>
  )
}