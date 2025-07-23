Objectif de la formation

Titre : Maîtriser l’Alignement Agentique pour la Productivité Développeur IA

Objectif Global :
Construire une formation immersive qui transforme la façon dont les développeurs interagissent avec les agents IA, en mettant l’accent sur l’alignement entre l’utilisateur humain et les systèmes agentiques. Contrairement à l'approche de "vibe coding" où l'on envoie des prompts au hasard, le codage agentique repose sur des approches structurées, des spécifications claires, des oracles de test et une répartition des rôles entre agents.

La formation permettra aux participants de passer du bricolage à l’ingénierie IA en suivant une méthodologie reproductible.

Structure de la formation
*pour chacune des section, tu dois aller voir les ressources détaillés dans: learn-to-flow/section, pour t'aider à remplir tes sections. 

Section 0-2 : Comprendre la nouvelle ère et le paradoxe IA

Introduction à l’époque agentique

Le paradoxe : adoptions massives mais gains limités

Problèmes courants : onboarding lent, burnout, fragmentation des outils

État du marché : freelance, small teams, agences techniques

Étude des données (StackOverflow, McKinsey, Bain)

Section 3-7 : Maîtriser l'alignement et les PRD

Qu'est-ce que l’alignement ?

Les composantes de l'alignement : intention, spécification, feedback

Écriture d’un bon PRD : structure, langage, exemples concrets

Analyse de PRD réels (ex. contextDev)

Atelier : écriture collaborative d’un PRD pour un projet AI-native

Section 8-9 : Contexte d'agents et oracles de vérification

Comprendre les agents et leurs rôles : builder, tester, reviewer, etc.

Comment structurer un contexte exécutable pour les agents (Claude.md, memory tokens, etc.)

Écriture de test oracles : JSON vérifiables, fonctions de scoring, validations conditionnelles

Atelier : simulation d’un projet avec test agents + oracles

Section 10-12 : Orchestration, MCP et RooCode en action

Introduction à l’orchestration : CrewAI, Autogen, MCP

Le protocole MCP : définition des tâches, partage du contexte, passage de message

RooCode : visualisation et exécution distribuée

Mise en place d’un pipeline complet : PRD → spec → tests → implémentation

Guides Configuration : Setup environnement développeur

Installer Claude-code, Autogen, CrewAI localement

Prompt engineering tools : Promptfoo, LangGraph, LangSmith

Gestion du contexte longue durée : vectordb, retrievers, metadata

Templates Claude.md + git workflows associés

Section 13-14 : Cas d’étude et roadmap d’implémentation

Cas d’étude : équipe de 2 devs = delivery x3 grâce aux agents

De la démo à l’industrialisation : comment passer à l’échelle

Modèle de roadmap 30/60/90 jours

Comment vendre une vision AI-first à ses clients / son équipe

Spécifications UX / UI pour chaque section

Utiliser des couleurs calme sur fond comme sur ai-consulting-website

Illustrations interactives (arborescence de rôles, diagrammes d’orchestration, timelines)

Boutons d’ancrage vers les guides techniques et les templates

Encadrés d’exemples de prompts / PRD / oracles

Appels à l’action ("Télécharger le template Claude.md", "Tester un agent"...)

Chaque module doit donner envie de passer au suivant : structure en "récit d’équipe technique qui gagne en puissance avec les agents".

# Thèmes majeurs de la formation:
Nous cherchons à révolutionner la façon dont les développeurs utilisent l'intelligence artificielle en passant du **"codage intuitif"** (vibe coding) au **"codage agentique"** (agentic coding). L'objectif est de transformer l'IA d'un simple assistant de codage en un système orchestré d'agents spécialisés qui travaillent ensemble de manière structurée et vérifiable.

### Le Paradoxe du Développement IA**
- **Problème identifié** : Moins de 20% de taux de succès pour les prompts uniques en production
- **Cause racine** : Les développeurs utilisent l'IA de manière "intuitive" sans structure ni vérification
- **Conséquence** : Perte de temps, dette technique, et perte de confiance dans l'IA

### Public Cible et Proposition de Valeur**
- **Qui nous servons** :
  - Développeurs freelance cherchant un avantage concurrentiel
  - CTOs de startups avec des ressources limitées
  - Équipes de développement nécessitant une intégration rapide
- **Promesse** : 3x plus rapide, 90% de réduction des bugs

### Évolution des Outils IA**
- **2022** : Assistants IA simples (ChatGPT, GitHub Copilot)
- **2023** : Outils spécialisés avec intégration IDE
- **2024** : Systèmes multi-agents orchestrés
- Montre la progression vers des systèmes plus sophistiqués

### Pourquoi les Prompts Uniques Échouent**
- **Problèmes du "codage intuitif"** :
  - Prompts ambigus
  - Contexte manquant
  - Absence de vérification
- **Statistiques** : Taux d'échec élevé comparé aux approches structurées

### La Solution d'Alignement**
- **Concept clé** : ALIGNEMENT constant entre l'IA et les résultats désirés
- **Le Problème Oracle** : Comment vérifier automatiquement la qualité du code généré
- **Solution** : Oracles automatisés et vérification multi-agents

### Choisir la Bonne IA**
- **Stratégie de sélection** selon le rôle :
  - Claude-4 Opus pour l'architecture
  - Claude-4 Sonnet pour le développement
  - Gemini-2.5 Pro pour le débogage
- **Optimisation coûts/qualité**

### **Diapositive 7 : Spécifications Lisibles par l'IA**
- **Meilleures pratiques** :
  - Objectifs mesurables
  - Structure hiérarchique
  - Critères de vérification
- **Méthodologie SPARC** : Specification → Pseudocode → Architecture → Refinement → Completion

### Contexte Agent Parfait**
- **Framework de définition** :
  - Clarification des objectifs
  - Identification des contraintes
  - Rôle de l'orchestrateur
- **Diagramme** montrant l'organisation hiérarchique du contexte

### Défi de Vérification**
- **Types d'oracles de test** :
  - Oracle spécifié
  - Oracle dérivé
  - Pseudo oracle
  - Oracle partiel
- **Implémentation agentique** : Vérification automatisée multi-agents

### Équipe de Développement IA**
- **Méthodologie SPARC** détaillée
- **Exemple Pheromind** : Système hiérarchique avec 30+ agents spécialisés
- **Architecture d'orchestration** avec boucles de rétroaction

### Capacités Étendues avec MCP**
- **Model Context Protocol** : Connexion standardisée aux outils externes
- **Serveurs MCP clés** : Perplexity, GitHub, bases de données
- **Création MCP personnalisés** pour besoins spécifiques

### RooCode en Action**
- **Modes spécialisés** :
  - Architecte, Codeur, Débogueur, Orchestrateur
- **Configuration pratique** et intégration avec d'autres outils
- **Métriques de performance** comparées
