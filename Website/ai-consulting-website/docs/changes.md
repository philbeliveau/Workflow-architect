# Newcode Website Enhancement Requirements

> **Status**: ✅ **COMPLETED** - This document has been processed into comprehensive PRD and User Stories
> 
> **Generated Documents**:
> - [📋 Product Requirements Document (PRD)](./prd.md) - Complete business requirements and technical specifications
> - [📝 User Stories](./user-stories.md) - 11 user stories across 4 epics with implementation roadmap
>
> **Next Steps**: Review PRD and User Stories documents for implementation guidance

---

## Original Requirements (For Reference)

## 1. Language & Navigation Changes

### Change: Default Language Redirect
**Current**: Website defaults to English version "https://new-code.ca/en"
**Required**: Website should default to French version at "https://new-code.ca"

**Implementation Notes**: 
- Update routing configuration to serve French content by default
- Maintain /en URL structure for English version
- Ensure proper language detection and user preference handling

---

## 2. Training Program Restructure

### Change: Formation Débutant Rebranding
**Current**: "Formation Débutant - De zéro à votre première application"
**New**: "Formation Kickstart – Créez votre premier site ou app avec l'IA en quelques heures"

**Pricing**: 280€ (payable en 3x)
**Call-to-Action**: "Passez à l'action et créez votre site web, logiciel fonctionnel en quelques heures"

### New Page Required: Formation Kickstart Details (/formation-kickstart)
When users click on Formation Kickstart, redirect to dedicated page with complete curriculum:

#### Formation Kickstart Curriculum:

**Module 1 - Bases du web (30min)**

- Qu’est-ce qu’un site web ? (statique vs dynamique).
- Front-end (HTML/CSS/JS) vs Back-end.
- Hébergement et nom de domaine (adresse et maison).
- Les 3 briques fondamentales : HTML (structure), CSS (style), JS (interaction).
- Petit atelier : ouvrir la console du navigateur, modifier un texte en live.
    
    [**Bases du web (30 à 40 min)**](https://www.notion.so/Bases-du-web-30-40-min-271b37f31d088159a0b2c5e3ea5e5303?pvs=21)
    

Module 2 – Comprendre la révolution agentique (30 min)

- Définition et différences avec le no-code et le code classique.
- Pourquoi l’agentique permet aux non-devs de créer.
- Les opportunités concrètes (rapidité, accessibilité, coût).
- Définition d’un agent
- Comment y accéder: Environnement de code, pas de coûts, ni maintenance, facile d’accès
- Les outils des agents→ MCP
    - Acceder à internet, faire de la recherche, connecter à vos gmails, vos fichiers personnels
- Les rendre autonome
- Leurs rôles
    - Exemple: Orchids (ne pas présenter Orchid)
        - Un UX designer crée une LP, un general purpose crée un LP
        - Montrer clairement que leurs instructions leurs fait poser les bonnes questions.
    - Couvrir le cycle de développement : Graphique de sub-agent, rôles spécifiques couvrant différentes fonctionnalités pour générer des projets plus complexes?

Module 3 – Le vibe coding (30h)

- Installation et découverte (Lovable, bolt, Cursor).
    - Différences
        
        ## Synthèse comparative
        
        | Critère | Lovable | Bolt (.new) |
        | --- | --- | --- |
        | **Public cible** | Non-tech / fondateurs / équipes produit | Développeurs / équipes techniques |
        | **Interface** | Chat-based, aucun code directement édité | Environnement de développement dans le navigateur |
        | **Vitesse d’itération** | Moins rapide, planification plus poussée | Très rapide grâce aux diffs de code |
        | **Déploiement** | Intégré, un clic | Intégré (Netlify, etc.), plus de contrôle |
        | **Personnalisation** | Limitée ; modifications via Git externes | Édition fine dans la plateforme |
        | **Interopérabilité** | Supabase, Stripe, GitHub, collaboration interne | GitHub, Netlify, Firebase, mode collaboratif direct |
        | **Niveau d’expertise requis** | Faible à modéré | Moyen à élevé |
- Navigation et interface.
- Premier “Hello World” généré avec un agent. ou premier site web
- les limites (bug, ajustements fastidieux, développement long-terme) —> donc la communication

Module 4 – Du besoin à la spécification (1h)

- Comment transformer une idée en projet concret.
- Parler le langage d’un agent pour avoir les meilleurs résultats : Écrire une spécification claire et compréhensible par un agent.
- Enforcer les bonnes pratiques, s’assurer que le code écrit est fiable, standardisé, respectant les contraintes.
- Atelier guidé : rédiger la spec de son premier projet.
- Comment parler à l’IA .
- L’importance du contexte.  Pourquoi ? i.e Réduire les hallucinations
- Exemples de prompt. (Un bon, un mauvais)
- PRD
- Développer des spécifications : Exemple d’agent du type BMAD: Analyst, PM, PO, SM…

Module 5 – Générer son premier projet avec un agent (1h)

- Passer de la spécification à un site/app généré.
- Interaction : corriger, relancer, affiner.
- ~~Débug simple avec l’agent.~~
- Résultat : un projet fonctionnel de base.

Module 6 – Améliorer ses projets et ajouter des fonctionnalités (30h)

- Orchids
- Modifier le design, couleurs, textes.
- Ajouter une première fonctionnalité simple (formulaire, bouton, menu).
- Exemple concret d’ajout d’une fonctionnalité simple.
- Quelques principes simples de lisibilité et d’ergonomie (UI/UX…)
- Connexion et authentification
- Déconstruction des tâches complexes

Module 7 – Mettre en ligne son projet (30min)

- Héberger facilement son projet (Netlify, Vercel, etc.).
- Relier à un nom de domaine si souhaité.
- Exemple d’un projet mis en ligne en live.
- Sécurité et RGPD (juste pour expliquer que mise en ligne = règles (mentions légales, collecte d’emails, données))
- achat nom de domaine et personalisation

Module 8 – Erreurs fréquentes et bonnes pratiques (30 min)

- Les pièges à éviter (spécifications floues, trop de délégation, manque de test).
- Bonnes pratiques pour itérer rapidement.
- Comment progresser après la formation.

Module 9 – Projet final (30min)

- Vidéo challenge : réalisation d’un mini-site/app en autonomie (guidée).
- Exemple complet réalisé par nous, étape par étape. —> projet de plateforme de subvention + projet PDF fill
- Conclusion : mise en ligne + prochaines étapes vers l’intermédiaire/expert.

Module 10 : Pour aller plus loin, la suite (30min)

- Aperçu pour aller plus loin : Utilisation incontournable de Vs Code ou Cursor (avec Claude code) , sub agent (piège de over engineer)
    - Graphique de sub-agent, rôles spécifiques couvrant différentes fonctionnalités pour générer des projets plus complexes?
- outils d’autom peuvent etre vos alliés

---

## 3. Formation Architecte Restructure

### Change: Formation Avancée Rebranding
**Current**: "Formation 2 : Formation Architecte – maîtriser vos agents IA et bâtissez vos projets logiciels avancés"
**New**: "Formation Architecte :   : La vision d'un entrepreneur, la puissance d'un lead tech"

**Pricing Update**: Change from 300€ to 700€

### New Page Required: Formation Architecte Details (/formation-architecte)
When users click on Formation Architecte, redirect to dedicated page with complete curriculum:

#### Formation Architecte Curriculum: 
**Module 1 : pourquoi vous ne pouvez pas ignorer l’IA agentique**

Alternative : Pourquoi l’IA agentique va façonner le code et les pratiques de demain

*—> idée : mega simple. accrocher tout les non-tech*

- Video Newcode
- vulgarisation, prise de conscience du changement, démo (CF, Orchids) + stat des dev (Cri d’alerte)
    - “le % de code créer par IA, permet de coder plus complexe. non pas sans enjeux, alignement, pertinence et sécurité. Les emplois du dev logiciel vont grandement changer”
    - exemples Claude Flow, orchids

---

**Module 2: Au-delà de chatGPT: Qu’est-ce qu’un agent?** 

- Définition d’un agent
- Comment y accéder: Environnement de code, pas de coûts, ni maintenance, facile d’accès
- Les outils des agents→ MCP
    - Acceder à internet, faire de la recherche, connecter à vos gmails, vos fichiers personnels
- Les rendre autonome
- Leurs rôles
    - Exemple: Orchids (ne pas présenter Orchid)
        - Un UX designer crée une LP, un general purpose crée un LP
        - Montrer clairement que leurs instructions leurs fait poser les bonnes questions.
    - Couvrir le cycle de développement : Graphique de sub-agent, rôles spécifiques couvrant différentes fonctionnalités pour générer des projets plus complexes?
- À quoi s’attendre, les agents rates, ils mentent, ne sont pas toujours fiable.
    - C’est pour ca qu’il faut apprendre à leur parler, à bien définir le contexte, les contraintes, vérifiés leurs résultats.

**Module 3 : Setup de vos agents - Partie 1**

- Setup roocode, (modes, indexation, MCP)
- orchstration tache complexe

**Module 4 : Setup de vos agents  - Partie 2**

- utiliser Cursor / Vs code
- Setup Claude code
    - Agents spécialisés

**Module 5 :** théorie, enjeux  **les clés à maitriser** 

- —> les limites du develeppement (pb vibe coding, le hype, aligmenent
- SPARC
- Claude-flow
- Science du prompt (ultrathink)
- Déconstruction des tâches complexes
- Méthodes pour aligner (TDD, PRD, modes, subagent) évaluation qualité
- Comment debugger
- Créer votre UI (magic MCP)
- tips & tricks (notebookLM, saisie vocale, Manus/Genspark, Orchids)

 **Module 6 :  BMAD  :  Les pièces manquantes** 

- **Couvrir le cycle de développement &fiabilisez votre développement logiciel**
- MCP utiles & populaires (ex : pousser avec JIRA)
- **Déployer votre app**
    - Clerk, Prisma, postgres, Railway, Vercel, Netlify
- Exemple de bonnes spécifications (comment structurer notre demande, i.e définir ce qui est fonctionnel, donner les clés d’API)
- Ajuster à votre workflow
    - Définir vos propres agents

*—> paramètre ses agent, avoir le setup pour X, déployer et mettre en prod votre saas ou produit avec des agents, cutting edge tech - pointe de la technologie, change de rôle dans ton organisation, décuple ta production logiciel , avoir les talent logiciel de demain, on se laisse pas dépasser, on continue de la maitriser*

*—> Collaborer, projet bien structuré. pas complexifier la chose, avoir son project management system pour agent IA (dans ton terminal)* 

---

## 4. Navigation & User Journey Enhancements

### New Feature: Parcours Overview Page
**Requirement**: Create a new "Parcours" page that provides an overview of both training programs
**Content**: 
- Brief description of each formation
- Clear progression path from Kickstart to Architecte
- Links to detailed pages: /formation-kickstart and /formation-architecte

### Navigation Update
**Requirement**: Update main navigation to include "Parcours" tab
**Functionality**: Dropdown or direct link to overview page with quick access to both formations

---

## 5. Payment Integration & Promotional Campaign

### Stripe Payment Links Integration
**Implementation Locations**: 
- Formation Kickstart page (/formation-kickstart)
- Formation Architecte page (/formation-architecte)
- Hero section for "Notre guide"

**Stripe URLs**:
- Formation Kickstart: https://buy.stripe.com/dRmcN6bZl7Gg21X3PceEo04
-  Formation Architecte https://buy.stripe.com/00wfZiaVhgcM5e91H4eEo05
- Guide: https://buy.stripe.com/00w9AU6F1d0A36185seEo03

### Launch Promotion Campaign
**Offer**: 40% discount on all formations
**Deadline**: September 5th at midnight
**Implementation**: 
- Add countdown timer
- Display promotional pricing
- Include discount code field
- Prominent banner/notification

### Payment Options
**Multiple Payment Plans**: "Pour les paiements en plusieurs fois : nous contacter"
**Implementation**: Contact form or direct contact information for installment plans

---

## Implementation Priority

1. **High Priority** (Must launch before September 5th):
   - Default French language redirect
   - Training program rebranding
   - Stripe payment integration
   - Promotional campaign setup

2. **Medium Priority** (Can launch shortly after):
   - Detailed curriculum pages
   - Parcours navigation structure
   - Payment plan contact system

3. **Low Priority** (Enhancement phase):
   - Advanced user journey optimization
   - Additional payment method integrations
