'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter, useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ArrowLeft, BookOpen, MessageSquare, FileText, ChevronRight, CheckCircle, Clock, Award } from 'lucide-react'
import AuthenticatedLayout from '@/components/layout/AuthenticatedLayout'
import Link from 'next/link'

const sectionContent = {
  'section-0-2': {
    title: 'Section 0-2 : Comprendre la nouvelle ère et le paradoxe IA',
    description: 'Découvrez les fondements de l\'IA moderne et les défis actuels',
    level: 'Débutant',
    duration: '2-3 heures',
    content: [
      {
        title: 'Introduction à l\'IA Moderne',
        content: `
# Introduction à l'IA Moderne

L'intelligence artificielle traverse une révolution sans précédent. Nous assistons à l'émergence d'une nouvelle ère où les agents IA deviennent des partenaires de travail essentiels.

## Les Fondements

### 1. L'évolution rapide
- **Modèles de langage** : GPT, Claude, Gemini
- **Agents autonomes** : Capacité de raisonnement et d'action
- **Orchestration** : Coordination de multiples agents

### 2. Nouveaux paradigmes
- **Programmation déclarative** : Décrire ce qu'on veut, pas comment
- **Contexte dynamique** : Adaptation en temps réel
- **Collaboration homme-machine** : Partenariat naturel

### Exemple Pratique

Considérez cette interaction avec un agent :
\`\`\`
User: "Crée-moi une API REST pour gérer des utilisateurs"
Agent: "Je vais créer une API avec authentification JWT, validation des données et tests automatisés"
\`\`\`

L'agent comprend l'intention et orchestre la création complète.
        `,
        examples: [
          'Interaction avec Claude Code',
          'Orchestration d\'agents multiples',
          'Génération de code contextuel'
        ],
        useCases: [
          'Développement assisté par IA',
          'Automatisation de tâches complexes',
          'Création de systèmes intelligents'
        ]
      },
      {
        title: 'Le Paradoxe de l\'IA',
        content: `
# Le Paradoxe de l'IA

Plus l'IA devient puissante, plus elle révèle la complexité de nos besoins et intentions.

## Le Défi de l'Alignement

### 1. Intention vs Instruction
- **Ce qu'on dit** : "Fais-moi un site web"
- **Ce qu'on veut** : Un système complet, sécurisé, maintenable
- **Le gap** : Spécification incomplète

### 2. Contexte implicite
Les humains communiquent avec beaucoup de contexte implicite :
- Conventions du domaine
- Contraintes non exprimées
- Objectifs à long terme

### Solutions Pratiques

#### Spécification contextuelle
\`\`\`
Contexte: Application e-commerce B2B
Contraintes: GDPR, haute disponibilité
Objectifs: Conversion, expérience utilisateur
\`\`\`

#### Validation itérative
1. Génération initiale
2. Validation par l'expert
3. Raffinement et ajustement
4. Test en conditions réelles
        `,
        examples: [
          'Spécification de requirements',
          'Validation avec feedback loops',
          'Itération basée sur les résultats'
        ],
        useCases: [
          'Développement de produits',
          'Automatisation métier',
          'Systèmes critiques'
        ]
      }
    ]
  },
  'section-3-7': {
    title: 'Section 3-7 : Maîtriser l\'alignement et les PRD',
    description: 'Apprenez à aligner vos agents IA et créer des PRD efficaces',
    level: 'Intermédiaire',
    duration: '4-5 heures',
    content: [
      {
        title: 'Alignement des Agents IA',
        content: `
# Alignement des Agents IA

L'alignement est l'art de faire comprendre à un agent IA vos véritables intentions et contraintes.

## Principes Fondamentaux

### 1. Clarté des Objectifs
- **Objectif principal** : Que doit accomplir l'agent ?
- **Contraintes** : Quelles sont les limites ?
- **Critères de succès** : Comment mesurer la réussite ?

### 2. Contexte Complet
\`\`\`
Agent Setup:
- Domaine: Développement web
- Niveau: Senior developer
- Contraintes: Best practices, sécurité
- Style: Code clean, documentation
\`\`\`

### 3. Feedback Loops
- Validation continue
- Correction en temps réel
- Apprentissage adaptatif

## Techniques d'Alignement

### Chain of Thought
Guidez l'agent à travers son raisonnement :
\`\`\`
1. Analyser le problème
2. Identifier les solutions possibles
3. Évaluer les contraintes
4. Choisir la meilleure approche
5. Implémenter et tester
\`\`\`

### Exemples Pratiques
- Configuration d'un agent développeur
- Alignement pour la documentation
- Optimisation des performances
        `,
        examples: [
          'Configuration d\'agents spécialisés',
          'Prompts d\'alignement',
          'Validation de comportements'
        ],
        useCases: [
          'Développement assisté',
          'Génération de documentation',
          'Review de code automatique'
        ]
      }
    ]
  },
  'section-8-9': {
    title: 'Section 8-9 : Contexte d\'agents et oracles de vérification',
    description: 'Maîtrisez le contexte des agents et les systèmes de vérification',
    level: 'Intermédiaire',
    duration: '3-4 heures',
    content: [
      {
        title: 'Contexte d\'Agents',
        content: `
# Contexte d'Agents

Le contexte est l'élément clé qui permet aux agents de comprendre votre environnement et vos besoins.

## Types de Contexte

### 1. Contexte Technique
- **Codebase** : Structure et conventions
- **Architecture** : Patterns utilisés
- **Dépendances** : Libraries et frameworks

### 2. Contexte Métier
- **Domaine** : Secteur d'activité
- **Utilisateurs** : Personas et besoins
- **Objectifs** : Business goals

### 3. Contexte Opérationnel
- **Environnement** : Dev, staging, prod
- **Contraintes** : Performance, sécurité
- **Processus** : Workflow et validations

## Gestion du Contexte

### Hiérarchie de Contexte
\`\`\`
Global Context (Projet)
├── Module Context (Fonctionnalité)
│   ├── Component Context (Composant)
│   └── Function Context (Fonction)
└── Session Context (Interaction)
\`\`\`

### Outils de Contexte
- **CLAUDE.md** : Configuration persistante
- **Context Windows** : Mémoire de travail
- **Knowledge Base** : Documentation structurée
        `,
        examples: [
          'Configuration CLAUDE.md',
          'Context injection',
          'Memory management'
        ],
        useCases: [
          'Développement multi-modules',
          'Maintenance de projets',
          'Collaboration équipe'
        ]
      }
    ]
  },
  'section-10-12': {
    title: 'Section 10-12 : Orchestration, MCP et RooCode en action',
    description: 'Orchestrez vos agents avec MCP et implémentez RooCode',
    level: 'Avancé',
    duration: '5-6 heures',
    content: [
      {
        title: 'Orchestration d\'Agents',
        content: `
# Orchestration d'Agents

L'orchestration permet de coordonner plusieurs agents pour accomplir des tâches complexes.

## Patterns d'Orchestration

### 1. Pipeline Séquentiel
\`\`\`
Agent 1 (Analyse) → Agent 2 (Design) → Agent 3 (Code) → Agent 4 (Test)
\`\`\`

### 2. Parallélisation
\`\`\`
Agent Frontend ┐
               ├→ Agent Intégration
Agent Backend  ┘
\`\`\`

### 3. Hiérarchie
\`\`\`
Agent Coordinator
├── Agent Specialist A
├── Agent Specialist B
└── Agent Validator
\`\`\`

## Model Context Protocol (MCP)

### Concepts Clés
- **Servers** : Fournisseurs de services
- **Clients** : Consommateurs de services
- **Resources** : Données et fonctionnalités
- **Tools** : Actions disponibles

### Configuration MCP
\`\`\`json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-filesystem", "/path/to/project"]
    },
    "postgres": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-postgres", "postgresql://..."]
    }
  }
}
\`\`\`

### Exemples d'Usage
- Accès aux fichiers
- Connexions base de données
- APIs externes
- Outils de développement
        `,
        examples: [
          'Configuration MCP servers',
          'Orchestration multi-agents',
          'Workflows complexes'
        ],
        useCases: [
          'Développement full-stack',
          'Automatisation DevOps',
          'Systèmes distribués'
        ]
      }
    ]
  },
  'guides-config': {
    title: 'Guides Configuration : Setup environnement développeur',
    description: 'Configurez votre environnement de développement pour les agents IA',
    level: 'Tous niveaux',
    duration: '2-3 heures',
    content: [
      {
        title: 'Setup Environnement Développeur',
        content: `
# Setup Environnement Développeur

Un environnement bien configuré est essentiel pour tirer parti des agents IA.

## Installation de Base

### 1. Claude Code
\`\`\`bash
# Installation via npm
npm install -g @anthropic/claude-code

# Vérification
claude --version
\`\`\`

### 2. Configuration Initiale
\`\`\`bash
# Authentification
claude auth login

# Configuration du projet
claude init
\`\`\`

### 3. CLAUDE.md
Créez un fichier CLAUDE.md dans votre projet :
\`\`\`markdown
# Configuration Claude

## Contexte Projet
- **Type** : Application web
- **Stack** : React, Node.js, PostgreSQL
- **Style** : Clean code, TypeScript

## Conventions
- Tests unitaires obligatoires
- Documentation JSDoc
- Commits conventionnels

## Contraintes
- Sécurité OWASP
- Performance optimisée
- Accessibilité WCAG
\`\`\`

## Outils Essentiels

### IDE Configuration
- **VSCode** : Extensions recommandées
- **Neovim** : Configuration Lua
- **JetBrains** : Plugins IA

### Outils de Développement
- **Git** : Hooks et workflows
- **Docker** : Containerisation
- **Testing** : Frameworks et outils

### MCP Servers
\`\`\`json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-filesystem", "."]
    },
    "git": {
      "command": "npx", 
      "args": ["@modelcontextprotocol/server-git", "."]
    }
  }
}
\`\`\`
        `,
        examples: [
          'Configuration complète',
          'Workflows automatisés',
          'Intégration continue'
        ],
        useCases: [
          'Nouveau projet',
          'Optimisation existante',
          'Standardisation équipe'
        ]
      }
    ]
  },
  'section-13-14': {
    title: 'Section 13-14 : Cas d\'étude et roadmap d\'implémentation',
    description: 'Cas d\'étude concrets et roadmap pour vos projets',
    level: 'Avancé',
    duration: '3-4 heures',
    content: [
      {
        title: 'Cas d\'Étude : Plateforme E-commerce',
        content: `
# Cas d'Étude : Plateforme E-commerce

Découvrez comment nous avons développé une plateforme e-commerce complète avec des agents IA.

## Contexte du Projet

### Objectifs
- **Marketplace** : Multi-vendeurs
- **Performance** : 10000+ produits
- **Sécurité** : Paiements sécurisés
- **UX** : Expérience fluide

### Contraintes
- **Délai** : 3 mois
- **Budget** : Limité
- **Équipe** : 2 développeurs + agents IA

## Architecture Proposée

### Stack Technologique
\`\`\`
Frontend: Next.js + TypeScript
Backend: Node.js + Express
Database: PostgreSQL + Redis
Payment: Stripe
Hosting: Vercel + Railway
\`\`\`

### Agents Utilisés
1. **Agent Architect** : Conception système
2. **Agent Frontend** : Interface utilisateur
3. **Agent Backend** : APIs et logique métier
4. **Agent Database** : Schémas et migrations
5. **Agent Security** : Audit et sécurité

## Processus de Développement

### Phase 1 : Analyse et Design (1 semaine)
\`\`\`
Agent Architect:
- Analyse des requirements
- Design de l'architecture
- Choix technologiques
- Définition des APIs
\`\`\`

### Phase 2 : Développement Core (6 semaines)
\`\`\`
Parallel Development:
Agent Frontend: Interface utilisateur
Agent Backend: APIs REST
Agent Database: Modèles de données
Agent Security: Authentification
\`\`\`

### Phase 3 : Intégration et Tests (3 semaines)
\`\`\`
Integration Testing:
- Tests end-to-end
- Performance testing
- Security audit
- User acceptance testing
\`\`\`

### Phase 4 : Déploiement (2 semaines)
\`\`\`
Deployment Pipeline:
- CI/CD setup
- Monitoring
- Documentation
- Formation utilisateurs
\`\`\`

## Résultats

### Métriques
- **Temps de développement** : 67% plus rapide
- **Qualité du code** : 95% couverture de tests
- **Performance** : <200ms temps de réponse
- **Sécurité** : Audit AAA+

### Leçons Apprises
1. **Contexte est roi** : Plus le contexte est précis, meilleur est le résultat
2. **Itération rapide** : Feedback loops courts améliorent la qualité
3. **Spécialisation** : Agents spécialisés > Agent généraliste
4. **Validation humaine** : Toujours valider les décisions critiques

## Roadmap d'Implémentation

### Semaine 1-2 : Foundation
- [ ] Setup environnement
- [ ] Configuration agents
- [ ] Architecture de base
- [ ] Prototype fonctionnel

### Semaine 3-8 : Development
- [ ] Développement features
- [ ] Intégration continue
- [ ] Tests automatisés
- [ ] Optimisations

### Semaine 9-12 : Finalization
- [ ] Tests complets
- [ ] Documentation
- [ ] Déploiement production
- [ ] Monitoring et maintenance
        `,
        examples: [
          'Projet e-commerce complet',
          'Orchestration multi-agents',
          'Pipeline de développement'
        ],
        useCases: [
          'Projets complexes',
          'Développement rapide',
          'Équipes distribuées'
        ]
      }
    ]
  }
}

export default function SectionPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const params = useParams()
  const sectionId = params.section as string
  
  const [activeContent, setActiveContent] = useState(0)
  const [completedContent, setCompletedContent] = useState<number[]>([])

  const section = sectionContent[sectionId as keyof typeof sectionContent]

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-gray-600">Chargement...</div>
      </div>
    )
  }

  if (!session || !section) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-gray-600">Section introuvable</div>
      </div>
    )
  }

  const markAsCompleted = (index: number) => {
    if (!completedContent.includes(index)) {
      setCompletedContent([...completedContent, index])
    }
  }

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
    <AuthenticatedLayout 
      title={section.title}
      subtitle={section.description}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link href="/formation">
            <Button variant="outline" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à la formation
            </Button>
          </Link>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className={`${getLevelColor(section.level)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {section.level}
                  </span>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock size={16} />
                    <span className="text-sm">{section.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <BookOpen size={16} />
                    <span className="text-sm">{section.content.length} modules</span>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Progression</span>
                    <span className="text-sm text-gray-500">
                      {completedContent.length}/{section.content.length} terminés
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(completedContent.length / section.content.length) * 100}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Link href="/notes">
                  <Button variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    Notes
                  </Button>
                </Link>
                <Link href="/questions">
                  <Button variant="outline">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Questions
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Modules du Cours</h3>
              <nav className="space-y-3">
                {section.content.map((item, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveContent(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      activeContent === index
                        ? 'bg-blue-50 border-2 border-blue-200 shadow-sm'
                        : 'hover:bg-gray-50 border-2 border-transparent'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-sm font-medium ${
                        activeContent === index ? 'text-blue-700' : 'text-gray-900'
                      }`}>
                        Module {index + 1}
                      </span>
                      {completedContent.includes(index) && (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      )}
                    </div>
                    <p className={`text-sm ${
                      activeContent === index ? 'text-blue-600' : 'text-gray-600'
                    }`}>
                      {item.title}
                    </p>
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-8"
            >
              {section.content[activeContent] && (
                <ContentRenderer
                  content={section.content[activeContent]}
                  onComplete={() => markAsCompleted(activeContent)}
                  isCompleted={completedContent.includes(activeContent)}
                />
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}

interface ContentItem {
  title: string
  content: string
  examples?: string[]
  useCases?: string[]
}

function ContentRenderer({ content, onComplete, isCompleted }: {
  content: ContentItem
  onComplete: () => void
  isCompleted: boolean
}) {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">{content.title}</h2>
        <Button
          onClick={onComplete}
          disabled={isCompleted}
          variant={isCompleted ? "outline" : "primary"}
        >
          {isCompleted ? (
            <>
              <CheckCircle className="w-4 h-4 mr-2" />
              Terminé
            </>
          ) : (
            'Marquer comme terminé'
          )}
        </Button>
      </div>

      <div className="prose prose-gray max-w-none">
        <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
          {content.content}
        </div>
      </div>

      {content.examples && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            Exemples Pratiques
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.examples.map((example: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="bg-blue-50 border border-blue-200 p-4 rounded-lg hover:shadow-sm transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{example}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {content.useCases && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-green-600" />
            Cas d'Usage
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.useCases.map((useCase: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="bg-green-50 border border-green-200 p-4 rounded-lg hover:shadow-sm transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <ChevronRight className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{useCase}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}