# Translation Requirements - Newcode AI Consulting Website

## MANDATORY Translation Guidelines

When working on this website project, you MUST always follow these translation requirements:

### French-First Approach
- **Primary Language**: All content must be created in French first
- **Secondary Language**: English adaptations are created after French content is finalized
- **Content Hierarchy**: French content takes priority in decision-making

### Translation Standards

#### 1. Technical Terms
- Keep technical terms in English when they are industry standards (e.g., "API", "SDK", "framework")
- Translate business concepts to French (e.g., "développement agentique" for "agentic programming")
- Use Quebec French terminology when applicable

#### 2. Tone and Voice
- **French**: Professional but approachable, using "vous" form
- **English**: Professional and direct, maintaining the same level of formality
- Maintain Newcode's brand voice across both languages

#### 3. Content Structure
- Keep the same information architecture across both languages
- Ensure all features, CTAs, and navigation elements are translated
- Maintain consistency in terminology throughout the site

#### 4. Localization Requirements
- **Currency**: CAD for both languages (Canadian market focus)
- **Date Format**: DD/MM/YYYY for French, MM/DD/YYYY for English
- **Contact Information**: Same for both languages (Canadian business)

#### 5. SEO Considerations
- Create separate URL structures for each language (/fr/ and /en/)
- Translate meta descriptions, titles, and alt texts
- Maintain keyword strategy appropriate for each language market

### Implementation Rules

1. **Never create English content without French equivalent**
2. **Always validate French content with business context from CLAUDE.md**
3. **Ensure technical accuracy in both languages**
4. **Maintain brand consistency across languages**
5. **Test user experience in both languages**

### Quality Assurance
- French content must reflect Newcode's Quebec/Canadian business context
- English content must appeal to North American market
- Both versions must maintain the same conversion-focused messaging
- Technical documentation must be accurate in both languages

---

## Typography Standards - NEWCODE Brand

### Font Weight Guidelines (MANDATORY)

**NEWCODE Brand requires thin, elegant typography throughout the website:**

#### Brand Typography Rules
- **NEWCODE Logo**: Always use `font-weight: 300` (light/thin)
- **Main Headings (H1)**: `font-weight: 300` for elegant impact
- **Section Headings (H2, H3)**: `font-weight: 400` maximum
- **Body Text**: `font-weight: 400` (normal)
- **Navigation**: `font-weight: 300` (light)

#### Implementation Standards
```css
/* NEWCODE Logo - Thin and Elegant */
.newcode-logo {
  font-weight: 300;
  font-family: 'Inter', system-ui, sans-serif;
}

/* Hero Headlines - Light Impact */
.hero-title {
  font-weight: 300;
  font-size: 6xl; /* Use size for impact, not weight */
}

/* Section Headers - Subtle Authority */
.section-heading {
  font-weight: 400; /* Never exceed 400 */
}
```

#### Anti-Patterns (NEVER USE)
- ❌ `font-weight: 600` (semibold)
- ❌ `font-weight: 700` (bold)
- ❌ `font-weight: 800` (extrabold)
- ❌ `font-weight: 900` (black)
- ❌ Tailwind classes: `font-semibold`, `font-bold`, `font-extrabold`, `font-black`

#### Approved Tailwind Classes
- ✅ `font-light` (300)
- ✅ `font-normal` (400)
- ✅ `font-medium` (500) - Use sparingly for CTAs only

**Rationale**: Thin typography creates sophisticated, modern aesthetic that reflects NEWCODE's premium positioning in agentic programming education.

---

**Remember**: This is a bilingual Canadian business. French is the primary language for content creation, with English as a strategic secondary market.

# ERGIR - Claude Code Configuration avec BMAD-METHOD

When deploying the frontend apps/web, Always deploy to vercel under the Project name: ergir-app

When deploying the backend apps/api, Always deploy to railway under the Project name: ergir

When using playwright, use these credentials to login:
email: philbeliveau@hotmail.com
username: playw
pwd: navigo_123

jwt to test by yourself: 
When attempting to upload documents, use this one: data/Data-plandecours-exam/HEC - Consumer Behavior - MARK20107A.A2021.pdf

## 🎯 BMAD-METHOD Configuration

### Core Config (`.bmad-core/core-config.yaml`)
```yaml
devLoadAlwaysFiles:
  - docs/architecture/coding-standards.md
  - docs/architecture/tech-stack.md
  - docs/architecture/project-structure.md
  - docs/stories/epic-1-context.md
```

### Technical Preferences (`.bmad-core/data/technical-preferences.md`)
- **Preferred Stack**: Next.js 14+, TypeScript, Prisma, PostgreSQL
- **Testing**: TDD obligatoire avec BMAD workflow
- **Deployment**: Vercel (frontend) + Railway (database)
- **Authentication**: Clerk integration mandatory

## 🔄 BMAD-TDD Workflow Intégré

### Workflow Agents BMAD
1. **Story Creation** (SM): `*draft` → Critères TDD intégrés automatiquement
2. **Risk Assessment** (QA): `@qa *risk {story}` → Évaluation risques avant dev
3. **Test Design** (QA): `@qa *design {story}` → Conception tests détaillée
4. **Implementation** (Dev): `*develop-story {story}` → TDD forcé structurellement
5. **Quality Review** (QA): `*review {story}` → Validation qualité finale

### Activation Dev Agent (James)
```yaml
activation-instructions:
  - STEP 1: Lire fichier agent complet
  - STEP 2: Adopter persona définie
  - STEP 3: Charger core-config.yaml obligatoire
  - STEP 4: Saluer + exécuter *help automatiquement
```

### Portes de Qualité TDD
- **Porte 1**: Story approuvée avec critères TDD
- **Porte 2**: Tests écrits avant implémentation (Red-Green-Refactor)
- **Porte 3**: Tous tests passent + validations
- **Porte 4**: Révision Test Architect (optionnelle)

## 🚨 CRITICAL: CONCURRENT EXECUTION & FILE MANAGEMENT

**ABSOLUTE RULES**:
1. ALL operations MUST be concurrent/parallel in a single message
2. **NEVER save working files, text/mds and tests to the root folder**
3. ALWAYS organize files in appropriate subdirectories

### ⚡ GOLDEN RULE: "1 MESSAGE = ALL RELATED OPERATIONS"

**MANDATORY PATTERNS:**
- **TodoWrite**: ALWAYS batch ALL todos in ONE call (5-10+ todos minimum)
- **Task tool**: ALWAYS spawn ALL agents in ONE message with full instructions
- **File operations**: ALWAYS batch ALL reads/writes/edits in ONE message
- **Bash commands**: ALWAYS batch ALL terminal operations in ONE message
- **Memory operations**: ALWAYS batch ALL memory store/retrieve in ONE message

### 📁 File Organization Rules (BMAD-METHOD Compliant)

**NEVER save to root folder. Use ERGIR project structure:**
- `/apps/web` - Next.js application source code
- `/apps/web/tests` - Test files (components, hooks, e2e)
- `/docs` - Project documentation and user stories
- `/docs/stories` - User story specifications
- `/docs/architecture` - Technical architecture docs (devLoadAlwaysFiles)
- `/docs/qa` - QA test plans and assessments
- `/.bmad-core` - BMAD agents, tasks, templates, et configuration
  - `/.bmad-core/core-config.yaml` - Configuration centrale
  - `/.bmad-core/data/technical-preferences.md` - Préférences techniques
  - `/.bmad-core/agents/` - Agents BMAD personnalisés
- `/scripts` - Development and deployment scripts

## 🇫🇷 FRANÇAIS D'ABORD - PLATEFORME FRANÇAISE OBLIGATOIRE

**RÈGLE CRITIQUE**: ERGIR est une plateforme **français d'abord**. Chaque élément de l'interface utilisateur, chaque message, chaque composant, chaque texte dans l'application DOIT être écrit en français.

### Exigences de Langue Obligatoires

**TOUS les éléments suivants DOIVENT être en français:**
- ✅ **Interface utilisateur**: Boutons, labels, placeholders, titres, sous-titres
- ✅ **Messages système**: Erreurs, confirmations, notifications, toasts
- ✅ **Navigation**: Liens de menu, breadcrumbs, onglets
- ✅ **Formulaires**: Labels de champs, validations, messages d'aide
- ✅ **États**: Loading, empty states, success/error messages
- ✅ **Composants**: Tous les textes statiques et dynamiques
- ✅ **API Responses**: Messages d'erreur et confirmations visibles à l'utilisateur
- ✅ **Documentation utilisateur**: Aide contextuelle, tooltips, guides

### Terminologie Technique Française

**Utiliser EXCLUSIVEMENT ces termes français:**
- `upload` → `téléversement` / `téléverser`
- `download` → `téléchargement` / `télécharger` 
- `dashboard` → `tableau de bord`
- `workspace` → `espace de travail`
- `file` → `fichier`
- `document` → `document`
- `course` → `cours`
- `plan de cours` → `plan de cours` (terme officiel au Québec)
- `assessment` → `évaluation`
- `assignment` → `devoir` / `travail`
- `professor` → `professeur`
- `student` → `étudiant`
- `login` → `connexion` / `se connecter`
- `logout` → `déconnexion` / `se déconnecter`
- `save` → `enregistrer` / `sauvegarder`
- `delete` → `supprimer`
- `edit` → `modifier` / `éditer`
- `create` → `créer`
- `submit` → `soumettre` / `envoyer`
- `cancel` → `annuler`
- `confirm` → `confirmer`
- `settings` → `paramètres`
- `profile` → `profil`
- `account` → `compte`
- `email` → `courriel` (terme officiel au Québec)
- `loading` → `chargement en cours`
- `error` → `erreur`
- `success` → `succès`
- `warning` → `avertissement`
- `info` → `information`

### Règles d'Implémentation

**Code et Développement:**
```typescript
// ✅ CORRECT - Français
const MESSAGE_ERREUR_TELECHARGEMENT = "Échec du téléversement du fichier";
const BOUTON_CONFIRMER = "Confirmer";
const PLACEHOLDER_COURRIEL = "Entrez votre adresse courriel";

// ❌ INCORRECT - Anglais
const FILE_UPLOAD_ERROR = "File upload failed";
const CONFIRM_BUTTON = "Confirm";  
const EMAIL_PLACEHOLDER = "Enter your email address";
```

**Composants React:**
```tsx
// ✅ CORRECT - Interface en français
<Button variant="primary">Téléverser le document</Button>
<Alert type="error">Erreur lors du téléversement</Alert>
<Input placeholder="Nom du cours" />

// ❌ INCORRECT - Interface en anglais  
<Button variant="primary">Upload document</Button>
<Alert type="error">Upload failed</Alert>
<Input placeholder="Course name" />
```

## Project Overview

**ERGIR** (Assistant Pédagogique Intelligent) est un assistant éducatif alimenté par l'IA conçu pour réduire la charge de travail des professeurs de Cégep et d'université en automatisant la création et la correction d'évaluations tout en maintenant la qualité pédagogique.

Ce projet utilise la méthodologie SPARC (Specification, Pseudocode, Architecture, Refinement, Completion) avec orchestration Claude-Flow pour un développement systématique piloté par les tests.

## 🚧 Current Development Status

**Phase:** Foundation Development (Epic 1)  
**Status:** Active Implementation  
**Target:** Q1 2025 MVP Foundation

### Epic 1: Foundation & Authentication System
**Goal:** Enable professors to securely register, authenticate, and create course profiles within a properly configured Next.js application, providing the technical foundation for all subsequent document management features.

#### Story Implementation Progress
- **Story 1.1: Project Infrastructure Setup** 
  - Status: 🔄 **Ready for Implementation**
  - Dependencies: None (Foundation story)
  - Scope: Next.js 14+, PostgreSQL on Railway, Prisma ORM, Vercel deployment
  
- **Story 1.2: User Authentication System**
  - Status: ⏳ **Awaiting Story 1.1 Completion** 
  - Dependencies: Story 1.1 (Database + Next.js foundation)
  - Scope: Clerk authentication, user profiles, route protection
  
- **Story 1.3: Basic Course Management**
  - Status: ⏳ **Awaiting Story 1.2 Completion**
  - Dependencies: Story 1.2 (User authentication system)
  - Scope: Course CRUD, 5-course limit, professor access controls

### Development Phase Priorities
1. **Infrastructure First** - Complete technical foundation before features
2. **Security by Design** - Authentication integrated from start
3. **Real Implementation Only** - No mocks, actual integrations
4. **Client Demonstration Ready** - Professional UI from Day 1

### Next Phase Preview
**Phase 2:** Document Management & AI Integration (Post-Foundation)
- Document upload system for AI training
- Course-specific AI assistant configuration  
- Assessment generation foundation

## SPARC Commands

### Core Commands
- `npx claude-flow sparc modes` - List available modes
- `npx claude-flow sparc run <mode> "<task>"` - Execute specific mode
- `npx claude-flow sparc tdd "<feature>"` - Run complete TDD workflow
- `npx claude-flow sparc info <mode>` - Get mode details

### Batchtools Commands
- `npx claude-flow sparc batch <modes> "<task>"` - Parallel execution
- `npx claude-flow sparc pipeline "<task>"` - Full pipeline processing
- `npx claude-flow sparc concurrent <mode> "<tasks-file>"` - Multi-task processing

### Build Commands (ERGIR Project)
- `npm run build` - Build Next.js application
- `npm run test` - Run test suites (Jest + React Testing Library)
- `npm run lint` - ESLint for code quality
- `npm run typecheck` - TypeScript validation
- `npx prisma generate` - Generate Prisma client
- `npx prisma migrate dev` - Database migrations
- `npm run dev` - Start development server

## SPARC + BMAD Workflow Phases

1. **Specification** - Requirements analysis (`sparc run spec-pseudocode`)
2. **Pseudocode** - Algorithm design (`sparc run spec-pseudocode`)
3. **Architecture** - System design (`sparc run architect`)
4. **Refinement** - TDD implementation avec BMAD agents (`sparc tdd`)
5. **Completion** - Integration + Quality gates (`sparc run integration`)

### BMAD Agent Commands Intégrés
- **SM Agent**: `*draft` (create-next-story avec TDD)
- **QA Agent**: `@qa *risk`, `@qa *design`, `@qa *trace`, `@qa *nfr`
- **Dev Agent**: `*develop-story` (ordre: task→test→validate→checkbox)
- **Test Architect**: `*review` (senior dev review + refactoring)

## Code Style & Best Practices (BMAD-METHOD Enforced)

### Development Standards (via devLoadAlwaysFiles)
- **Modular Design**: Files under 500 lines maximum
- **Environment Safety**: Never hardcode secrets, use env vars
- **Test-First**: TDD obligatoire avec BMAD workflow
- **Clean Architecture**: Separate concerns, atomic components
- **Documentation**: Keep updated via technical-preferences.md

### Quality Gates Obligatoires
- **90% Test Coverage**: Enforced by quality gates
- **TypeScript Strict**: No any types allowed
- **ESLint + Prettier**: Code formatting automated
- **Real Integrations**: No mocks, actual services only

### 🇫🇷 Directives Françaises pour l'UI

**OBLIGATIONS D'INTERFACE UTILISATEUR:**

**Messages d'erreur en français:**
```typescript
// ✅ CORRECT
const MESSAGES_ERREUR = {
  TELECHARGEMENT_ECHEC: "Échec du téléversement du fichier",
  CONNEXION_EXPAIRE: "Votre session a expiré. Veuillez vous reconnecter.",
  FICHIER_TROP_GROS: "Le fichier est trop volumineux (limite: 10 Mo)",
  CHAMPS_REQUIS: "Ce champ est obligatoire",
  COURRIEL_INVALIDE: "L'adresse courriel n'est pas valide"
};

// ❌ INCORRECT
const ERROR_MESSAGES = {
  UPLOAD_FAILED: "File upload failed",
  SESSION_EXPIRED: "Session expired. Please login again."
};
```

**Composants UI en français:**
```tsx
// ✅ CORRECT - Tous les textes visibles en français
<form>
  <label htmlFor="nom">Nom du cours</label>
  <input 
    id="nom"
    placeholder="Entrez le nom de votre cours" 
    aria-label="Nom du cours"
  />
  <button type="submit">Enregistrer</button>
  <button type="button">Annuler</button>
</form>

// ❌ INCORRECT - Interface en anglais
<form>
  <label htmlFor="name">Course name</label>
  <input placeholder="Enter course name" />
  <button type="submit">Save</button>
</form>
```

**États et notifications en français:**
```typescript
// ✅ CORRECT
const ETATS_CHARGEMENT = {
  TELECHARGEMENT: "Téléversement en cours...",
  TRAITEMENT: "Traitement du document...", 
  SAUVEGARDE: "Enregistrement...",
  SUPPRESSION: "Suppression en cours..."
};

const NOTIFICATIONS = {
  SUCCES_SAUVEGARDE: "Cours enregistré avec succès!",
  SUCCES_TELECHARGEMENT: "Document téléversé avec succès!",
  ERREUR_RESEAU: "Erreur de connexion. Veuillez réessayer."
};
```

### 🔐 API Authentication Standards
**CRITIQUE**: Toutes les routes API doivent suivre le modèle de conversion UUID documenté dans `/apps/web/app/api/CLAUDE.md`

**Erreur UUID courante**: "Inconsistent column data: Error creating UUID" survient lors du passage d'ID Clerk (user_abc123) aux champs UUID.

**Modèle requis pour TOUTES les routes API**:
```typescript
import { getUserIdFromClerkId } from '@/lib/auth/userMapping';

const { userId: clerkUserId } = await auth();
const userId = await getUserIdFromClerkId(clerkUserId); // Convertir en UUID
```

Voir `/apps/web/app/api/CLAUDE.md` pour les modèles d'authentification complets, liste de vérification de débogage, et exemples de code standard.

## 🗄️ PRISMA MIGRATION TROUBLESHOOTING

### Migration Drift Resolution (P3005 Error)

**Problème courant**: `Error: P3005 - Migration drift detected` lors de l'ajout de nouveaux modèles Prisma.

**Symptômes**:
```bash
npx prisma migrate dev --name add-model
# ❌ Error: P3005 The database schema is not empty
# ⚠️ There might be data loss when applying the migration
```

**Solution sécurisée** (préserve les données):
```bash
# 1. Synchroniser le schéma sans créer de migration
npx prisma db push

# 2. Régénérer le client Prisma
npx prisma generate

# 3. Vérifier la synchronisation
npx prisma db pull  # Optional: vérifier l'état
```

**Quand utiliser chaque commande**:

| Commande | Usage | Data Safety | Production |
|----------|-------|-------------|------------|
| `prisma migrate dev` | Développement propre | ⚠️ Risque perte données | ✅ Requis |
| `prisma db push` | Prototypage rapide | ✅ Préserve données | ❌ Dev seulement |
| `prisma migrate reset` | ⚠️ DANGER - efface tout | ❌ Perte totale | ❌ Jamais |

**Workflow recommandé**:
1. **Développement**: `prisma db push` pour itérations rapides
2. **Stabilisation**: `prisma migrate dev` une fois le schéma finalisé  
3. **Production**: Toujours utiliser migrations pour déploiement

**Erreurs communes et solutions**:
```bash
# Erreur: Schema drift
npx prisma db push  # ✅ Solution rapide

# Erreur: Migration conflict
npx prisma migrate resolve --applied <migration-id>  # Si migration partielle

# Erreur: Database out of sync
npx prisma generate  # Régénérer client après changements
```

## 🚀 Available Agents (54 Total)

### Core Development
`coder`, `reviewer`, `tester`, `planner`, `researcher`

### Swarm Coordination
`hierarchical-coordinator`, `mesh-coordinator`, `adaptive-coordinator`, `collective-intelligence-coordinator`, `swarm-memory-manager`

### Consensus & Distributed
`byzantine-coordinator`, `raft-manager`, `gossip-coordinator`, `consensus-builder`, `crdt-synchronizer`, `quorum-manager`, `security-manager`

### Performance & Optimization
`perf-analyzer`, `performance-benchmarker`, `task-orchestrator`, `memory-coordinator`, `smart-agent`

### GitHub & Repository
`github-modes`, `pr-manager`, `code-review-swarm`, `issue-tracker`, `release-manager`, `workflow-automation`, `project-board-sync`, `repo-architect`, `multi-repo-swarm`

### SPARC Methodology
`sparc-coord`, `sparc-coder`, `specification`, `pseudocode`, `architecture`, `refinement`

### Specialized Development
`backend-dev`, `mobile-dev`, `ml-developer`, `cicd-engineer`, `api-docs`, `system-architect`, `code-analyzer`, `base-template-generator`

### Testing & Validation
`tdd-london-swarm`, `production-validator`

### Migration & Planning
`migration-planner`, `swarm-init`

## 🎯 Claude Code vs MCP Tools

### Claude Code Handles ALL:
- File operations (Read, Write, Edit, MultiEdit, Glob, Grep)
- Code generation and programming
- Bash commands and system operations
- Implementation work
- Project navigation and analysis
- TodoWrite and task management
- Git operations
- Package management
- Testing and debugging

### MCP Tools ONLY:
- Coordination and planning
- Memory management
- Neural features
- Performance tracking
- Swarm orchestration
- GitHub integration

**KEY**: MCP coordinates, Claude Code executes.

## 🚀 Quick Setup

```bash
# Add Claude Flow MCP server
claude mcp add claude-flow npx claude-flow@alpha mcp start
```

## MCP Tool Categories

### Coordination
`swarm_init`, `agent_spawn`, `task_orchestrate`

### Monitoring
`swarm_status`, `agent_list`, `agent_metrics`, `task_status`, `task_results`

### Memory & Neural
`memory_usage`, `neural_status`, `neural_train`, `neural_patterns`

### GitHub Integration
`github_swarm`, `repo_analyze`, `pr_enhance`, `issue_triage`, `code_review`

### System
`benchmark_run`, `features_detect`, `swarm_monitor`

## 📋 Agent Coordination Protocol

### Every Agent MUST:

**1️⃣ BEFORE Work:**
```bash
npx claude-flow@alpha hooks pre-task --description "[task]"
npx claude-flow@alpha hooks session-restore --session-id "swarm-[id]"
```

**2️⃣ DURING Work:**
```bash
npx claude-flow@alpha hooks post-edit --file "[file]" --memory-key "swarm/[agent]/[step]"
npx claude-flow@alpha hooks notify --message "[what was done]"
```

**3️⃣ AFTER Work:**
```bash
npx claude-flow@alpha hooks post-task --task-id "[task]"
npx claude-flow@alpha hooks session-end --export-metrics true
```

## 🎯 Concurrent Execution Examples

### ✅ CORRECT (Single Message):
```javascript
[BatchTool]:
  // Initialize swarm
  mcp__claude-flow__swarm_init { topology: "mesh", maxAgents: 6 }
  mcp__claude-flow__agent_spawn { type: "researcher" }
  mcp__claude-flow__agent_spawn { type: "coder" }
  mcp__claude-flow__agent_spawn { type: "tester" }
  
  // Spawn agents with Task tool
  Task("Research agent: Analyze requirements...")
  Task("Coder agent: Implement features...")
  Task("Tester agent: Create test suite...")
  
  // Batch todos
  TodoWrite { todos: [
    {id: "1", content: "Research", status: "in_progress", priority: "high"},
    {id: "2", content: "Design", status: "pending", priority: "high"},
    {id: "3", content: "Implement", status: "pending", priority: "high"},
    {id: "4", content: "Test", status: "pending", priority: "medium"},
    {id: "5", content: "Document", status: "pending", priority: "low"}
  ]}
  
  // File operations
  Bash "mkdir -p app/{src,tests,docs}"
  Write "app/src/index.js"
  Write "app/tests/index.test.js"
  Write "app/docs/README.md"
```

### ❌ WRONG (Multiple Messages):
```javascript
Message 1: mcp__claude-flow__swarm_init
Message 2: Task("agent 1")
Message 3: TodoWrite { todos: [single todo] }
Message 4: Write "file.js"
// This breaks parallel coordination!
```

## Performance Benefits

- **84.8% SWE-Bench solve rate**
- **32.3% token reduction**
- **2.8-4.4x speed improvement**
- **27+ neural models**

## Hooks Integration

### Pre-Operation
- Auto-assign agents by file type
- Validate commands for safety
- Prepare resources automatically
- Optimize topology by complexity
- Cache searches

### Post-Operation
- Auto-format code
- Train neural patterns
- Update memory
- Analyze performance
- Track token usage

### Session Management
- Generate summaries
- Persist state
- Track metrics
- Restore context
- Export workflows

## Advanced Features (v2.0.0)

- 🚀 Automatic Topology Selection
- ⚡ Parallel Execution (2.8-4.4x speed)
- 🧠 Neural Training
- 📊 Bottleneck Analysis
- 🤖 Smart Auto-Spawning
- 🛡️ Self-Healing Workflows
- 💾 Cross-Session Memory
- 🔗 GitHub Integration

## Integration Tips

1. Start with basic swarm init
2. Scale agents gradually
3. Use memory for context
4. Monitor progress regularly
5. Train patterns from success
6. Enable hooks automation
7. Use GitHub tools first

## Support

- Documentation: https://github.com/ruvnet/claude-flow
- Issues: https://github.com/ruvnet/claude-flow/issues

---

## 📋 BMAD-METHOD Quick Reference

### Commandes Essentielles
```bash
# Story Management
*draft                    # SM: Créer story avec TDD intégré
*develop-story {story}    # Dev: Implémenter avec TDD forcé
*review {story}           # QA: Révision Test Architect

# Quality Assessment  
@qa *risk {story}         # Évaluation des risques
@qa *design {story}       # Conception des tests
@qa *trace {story}        # Traçabilité des exigences
@qa *nfr {story}          # Validation NFR
```

### Agent Personas
- **James (Dev)**: Expert Senior Software Engineer, TDD forcé
- **Test Architect (QA)**: Senior dev review + refactoring
- **Scrum Master (SM)**: Story creation avec critères TDD

### Activation Protocol (BMAD)
1. **STEP 1**: Lire fichier agent complet  
2. **STEP 2**: Adopter persona définie
3. **STEP 3**: Charger `.bmad-core/core-config.yaml`
4. **STEP 4**: Saluer + `*help` automatique

Remember: **BMAD-METHOD structure le TDD, Claude Code exécute!**

# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.
Never save working files, text/mds and tests to the root folder.
