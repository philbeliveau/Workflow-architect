# Guides Configuration : Setup Environnement Développeur

## 🚀 **VOTRE ENVIRONNEMENT DE DÉVELOPPEMENT AGENTIQUE COMPLET**

> *"La différence entre un développeur qui galère avec l'IA et un développeur qui la maîtrise ? La configuration de son environnement."*

**Ce guide pratique** vous accompagne step-by-step pour transformer votre setup de développement en machine de guerre agentique.

---

## 📋 **CHECKLIST DE SETUP COMPLÈTE**

```
✅ ÉTAPES DE CONFIGURATION :
├── 🔧 Claude-Code : Installation et configuration optimale
├── 💻 IDE Setup : VS Code vs autres options  
├── 🎯 RooCode : Interface multi-agents
├── ⚡ Claude-Flow : Orchestration avancée
├── 🔌 MCP Ecosystem : Protocoles et serveurs
├── 🧪 Tests et Validation : Vérification setup
├── 🚀 Optimisations Avancées : Performance maximale
└── 🎓 Troubleshooting : Solutions aux problèmes courants
```

---

## 🔧 **ÉTAPE 1 : CLAUDE-CODE - L'ASSISTANT IA RÉVOLUTIONNAIRE**

### Pourquoi Claude-Code vs Autres Providers ?

#### Comparaison Complète des Solutions

| Critère | 🏆 Claude-Code | Cursor | GitHub Copilot | JetBrains AI |
|---------|---------------|--------|---------------|--------------|
| **Intelligence** | Claude-3.5 Sonnet | GPT-4o + Claude | GPT-4 Turbo | GPT-4 + proprietary |
| **Context Window** | 200k tokens | 128k tokens | 8k tokens | 32k tokens |
| **Mode Agentique** | ✅ Natif | ⚠️ Basique | ❌ Non | ⚠️ Limité |
| **Multi-fichiers** | ✅ Excellent | ✅ Bon | ⚠️ Limité | ✅ Bon |
| **Prix/mois** | $20 | $20 | $10 | $8.33 |
| **Orchestration** | ✅ MCP/Agents | ❌ Non | ❌ Non | ❌ Non |
| **Sécurité** | ✅ Local + Enterprise | ⚠️ Cloud | ⚠️ Cloud | ⚠️ Cloud |
| **Performance** | 🏆 Excellent | ✅ Bon | ⚠️ Moyen | ✅ Bon |

#### Avantages Uniques Claude-Code

```markdown
🎯 POURQUOI CLAUDE-CODE DOMINE :

1. **Mode Agentique Natif**
   - Comprend les projets complets, pas juste les lignes
   - Peut exécuter des workflows complexes
   - Orchestration multi-agents intégrée

2. **Context Awareness Supérieur** 
   - 200k tokens vs 8k-128k concurrents
   - Mémoire persistante entre sessions
   - Compréhension architecturale globale

3. **Écosystème MCP**
   - 500+ serveurs MCP disponibles
   - Extensibilité infinie
   - Intégration avec tous vos outils

4. **Sécurité Enterprise**
   - Code reste local par défaut
   - Pas d'training sur vos données
   - Audit trails complets

5. **ROI Supérieur**
   - 5-8x gains productivité vs alternatives
   - Moins de corrections manuelles
   - Qualité code production-ready
```

### Installation Claude-Code (Toutes Plateformes)

#### macOS - Installation Recommandée

```bash
# Méthode 1 : Homebrew (Recommandé)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install claude

# Méthode 2 : Download direct
curl -O https://claude.ai/download/claude-macos.pkg
sudo installer -pkg claude-macos.pkg -target /

# Vérification installation
claude --version
claude --help
```

#### Windows - Setup Complet

```powershell
# PowerShell en mode Administrateur

# Méthode 1 : Winget (Windows 10/11)
winget install Anthropic.Claude

# Méthode 2 : Chocolatey  
Set-ExecutionPolicy Bypass -Scope Process -Force
iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
choco install claude

# Méthode 3 : MSI Download
# Télécharger depuis https://claude.ai/download/claude-windows.msi
# Double-clic pour installer

# Vérification
claude --version
```

#### Linux - Installation Universelle

```bash
# Ubuntu/Debian
curl -fsSL https://claude.ai/install/deb | sudo bash
sudo apt update && sudo apt install claude

# RHEL/CentOS/Fedora  
curl -fsSL https://claude.ai/install/rpm | sudo bash
sudo dnf install claude  # ou sudo yum install claude

# Arch Linux
yay -S claude-bin

# Installation universelle (toutes distributions)
curl -fsSL https://claude.ai/install | sh
source ~/.bashrc

# Vérification
which claude
claude --version
```

### Configuration Initiale Optimale

#### Setup Interactif Guidé

```bash
# Première configuration
claude setup --interactive

# Configuration manuelle avancée
claude config init --advanced

# Template de configuration recommandé
claude config template --type="enterprise-dev"

# Vérification configuration
claude config show
claude config validate
```

#### Configuration CLAUDE.md Enterprise

```markdown
# CLAUDE.md - Configuration Entreprise Optimale

## 🎯 PROJECT CONTEXT
**Project Type:** [Full-Stack Web App / API / Mobile / Data Pipeline]
**Tech Stack:** [React/Vue/Angular + Node/Python/Java + DB]
**Team Size:** [2-15 developers]
**Timeline:** [2-12 weeks]

## 🛠️ DEVELOPMENT STANDARDS
### Code Quality
- **Linting:** ESLint + Prettier (auto-fix on save)
- **Testing:** Jest + React Testing Library (>90% coverage)
- **TypeScript:** Strict mode enabled
- **Security:** OWASP compliance + automated scans

### Architecture Patterns
- **Frontend:** Component-driven development + hooks
- **Backend:** Clean architecture + dependency injection
- **Database:** Normalized schema + query optimization
- **APIs:** RESTful design + OpenAPI documentation

## 🔧 CLAUDE-CODE CONFIGURATION
### Preferred Tools
- **File Operations:** Batch edits when possible
- **Testing:** Generate tests alongside implementation
- **Documentation:** Auto-generate README + API docs
- **Git:** Conventional commits + auto-PR creation

### Project-Specific Context
- **Important Files:** [src/config/, docs/, tests/]
- **Ignore Patterns:** [node_modules/, dist/, .env]
- **Dependencies:** [package.json, requirements.txt, pom.xml]
- **Scripts:** [npm run dev, npm test, npm build]

## 🚀 WORKFLOW AUTOMATION
### Common Commands
```bash
# Development
npm run dev          # Start development server
npm run test:watch   # Run tests in watch mode
npm run lint:fix     # Fix linting issues

# Deployment  
npm run build       # Production build
npm run deploy      # Deploy to staging
npm run deploy:prod # Deploy to production
```

### MCP Servers
- **Perplexity:** Web search and research
- **GitHub:** Repository management
- **Supabase:** Database operations
- **Vercel:** Deployment management

## 📋 TEAM PREFERENCES
- **Code Style:** [Company style guide URL]
- **Review Process:** [PR template requirements]
- **Testing Strategy:** [TDD preferred, E2E required]
- **Documentation:** [Inline comments + README updates]
```

#### Configuration Avancée Performance

```json
{
  "claude_config": {
    "performance": {
      "max_tokens": 4000,
      "temperature": 0.1,
      "timeout": 30000,
      "parallel_operations": true,
      "cache_enabled": true,
      "memory_limit": "2GB"
    },
    "ui": {
      "theme": "dark",
      "editor_integration": true,
      "auto_save": true,
      "show_reasoning": false,
      "compact_mode": false
    },
    "security": {
      "local_mode": true,
      "audit_logging": true,
      "sensitive_file_detection": true,
      "secure_memory": true
    },
    "integrations": {
      "git": {
        "auto_commit": false,
        "conventional_commits": true,
        "auto_pr": false
      },
      "testing": {
        "auto_generate": true,
        "coverage_threshold": 0.9,
        "run_on_change": true
      }
    }
  }
}
```

---

## 💻 **ÉTAPE 2 : CHOIX IDE - VS CODE VS ALTERNATIVES**

### VS Code - Le Choix Optimal pour Claude-Code

#### Pourquoi VS Code Domine ?

```markdown
🏆 AVANTAGES VS CODE + CLAUDE-CODE :

✅ **Intégration Native**
- Extension Claude-Code officielle
- Terminal intégré optimisé
- Workflow seamless

✅ **Écosystème Extensions**
- 50,000+ extensions disponibles
- Support multi-langages excellent  
- Debugger intégré puissant

✅ **Performance**
- Rapide et responsive
- Low memory footprint
- Hot reload efficace

✅ **Personnalisation**
- Thèmes et keybindings illimités
- Workspace configuration
- Settings sync cloud
```

#### Setup VS Code Optimal

```bash
# Installation VS Code
# macOS
brew install visual-studio-code

# Windows
winget install Microsoft.VisualStudioCode

# Linux
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/
sudo sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/trusted.gpg.d/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'
sudo apt update && sudo apt install code

# Extensions Essentielles pour Claude-Code
code --install-extension claude.claude-code
code --install-extension ms-vscode.vscode-typescript-next
code --install-extension bradlc.vscode-tailwindcss
code --install-extension ms-python.python
code --install-extension rust-lang.rust-analyzer
code --install-extension ms-vscode.docker
```

#### Configuration VS Code pour Claude-Code

```json
{
  "claude.enabled": true,
  "claude.autoSuggest": true,
  "claude.multiFile": true,
  "claude.contextWindow": 200000,
  "claude.temperature": 0.1,
  
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  },
  
  "terminal.integrated.defaultProfile.osx": "zsh",
  "terminal.integrated.fontSize": 14,
  "terminal.integrated.enableBell": false,
  
  "git.enableSmartCommit": true,
  "git.confirmSync": false,
  "git.autofetch": true,
  
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 1000,
  "files.exclude": {
    "**/node_modules": true,
    "**/dist": true,
    "**/.git": true
  }
}
```

### Alternatives IDE Évaluées

#### JetBrains IDEs (WebStorm, IntelliJ, PyCharm)

```markdown
🔶 JETBRAINS + CLAUDE-CODE :

✅ **Avantages**
- Refactoring tools exceptionnels
- Debugging advanced
- Built-in terminal puissant
- Git integration excellente

❌ **Inconvénients**  
- Intégration Claude-Code moins native
- Plus lourd en ressources
- License payante required
- Setup plus complexe

💡 **Verdict:** Bon choix si déjà utilisateur JetBrains,
   sinon VS Code recommandé pour Claude-Code
```

#### Autres Options

```markdown
⚠️ AUTRES IDES ÉVALUÉS :

**Sublime Text**
- Très rapide mais intégration Claude-Code limitée
- Recommandé: Non

**Vim/Neovim**  
- Configuration Claude-Code possible mais complexe
- Recommandé: Seulement si expert Vim

**Atom (Deprecated)**
- Plus maintenu par GitHub
- Recommandé: Non

**Eclipse**
- Principalement Java, intégration Claude-Code faible
- Recommandé: Non pour dev moderne
```

---

## 🎯 **ÉTAPE 3 : ROOCODE - INTERFACE MULTI-AGENTS**

### Qu'est-ce que RooCode ?

**RooCode** est une interface utilisateur avancée qui permet d'orchestrer Claude-Code avec des modes spécialisés et des agents multiples pour des workflows complexes.

#### Architecture RooCode

```
🎭 ROOCODE ARCHITECTURE :
├── 🧠 Orchestrator Central (Gemini Thinking)
├── 🎯 Modes Spécialisés (17 disponibles)
├── 🔗 MCP Integration (Tous serveurs)
├── 💾 Memory Persistence (Supabase)
├── 📊 Analytics & Metrics
└── 🎨 UI/UX Optimized
```

### Installation RooCode

#### Prerequisites

```bash
# Node.js 18+ requis
node --version  # Doit être >= 18.0.0

# Installation Node.js si nécessaire
# macOS
brew install node

# Windows  
winget install OpenJS.NodeJS

# Linux
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### Installation RooCode

```bash
# Clone du repository
git clone https://github.com/ruvnet/roocode.git
cd roocode

# Installation dependencies
npm install

# Configuration initiale
npm run setup

# Lancement en mode développement
npm run dev

# Accès interface : http://localhost:3000
```

### Configuration RooCode Complète

#### 1. Provider & API Keys Setup

```bash
# Configuration des providers IA
roocode config providers

# Ajout Claude API Key
roocode provider add claude --api-key="sk-ant-api03-..."

# Ajout Gemini API Key (recommandé pour orchestrateurs)
roocode provider add gemini --api-key="AIza..."

# Vérification configuration
roocode provider list
roocode provider test claude
roocode provider test gemini
```

#### 2. Configuration Température et Context

```json
{
  "model_config": {
    "claude_sonnet": {
      "temperature": 0.25,
      "context_length": 200000,
      "precision_difference": 0.8
    },
    "gemini_thinking": {
      "temperature": 0.7,
      "context_length": 1000000,
      "condensation": 0.6
    },
    "claude_instruct": {
      "temperature": 0.25,
      "context_length": 200000,
      "condensation": 0.4
    }
  },
  "file_processing": {
    "max_files_read": 50,
    "smart_condensation": true,
    "power_steering": true
  }
}
```

#### 3. Setup Supabase pour Mémoire Persistante

```bash
# Création projet Supabase
# 1. Aller sur https://supabase.com
# 2. Créer nouveau projet
# 3. Noter PROJECT_ID et API_KEY

# Configuration RooCode pour Supabase
roocode config database --provider=supabase \
  --project-id="your-project-id" \
  --api-key="your-supabase-key" \
  --url="https://your-project.supabase.co"

# Création des tables requises
roocode database init --tables=project_memories,user_preferences

# Test connexion
roocode database test
```

#### SQL Schema pour Supabase

```sql
-- Table project_memories
CREATE TABLE project_memories (
  id SERIAL PRIMARY KEY,
  project_name VARCHAR(255) NOT NULL,
  memory_key VARCHAR(255) NOT NULL,
  memory_content TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Table user_preferences  
CREATE TABLE user_preferences (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR(255) NOT NULL,
  preference_key VARCHAR(255) NOT NULL,
  preference_value TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Indexes pour performance
CREATE INDEX idx_project_memories_project ON project_memories(project_name);
CREATE INDEX idx_project_memories_key ON project_memories(memory_key);
CREATE INDEX idx_user_preferences_user ON user_preferences(user_id);
```

### 4. Configuration des Modes RooCode

#### Installation des Modes Pheromind

```bash
# Téléchargement des modes community
curl -O https://insiders.pheromind.ai/downloads/roocode-modes.zip
unzip roocode-modes.zip

# Installation des modes
roocode modes install --from=./roocode-modes/

# Vérification installation
roocode modes list

# Test d'un mode
roocode mode test orchestrator-uber
```

#### Fichier `room` Configuration

```json
{
  "project_config": {
    "name": "MonProjet",
    "type": "full-stack-web",
    "modes": {
      "orchestrator-uber": {
        "model": "gemini-thinking",
        "temperature": 0.7,
        "role": "Project coordination and task delegation"
      },
      "orchestrator-state-scribe": {
        "model": "gemini-thinking", 
        "temperature": 0.7,
        "role": "Memory and state management"
      },
      "spec-writer-comprehensive": {
        "model": "claude-sonnet",
        "temperature": 0.25,
        "role": "Technical specification writing"
      },
      "coder": {
        "model": "claude-sonnet",
        "temperature": 0.1,
        "role": "Code implementation"
      },
      "tester-tdd-master": {
        "model": "claude-sonnet",
        "temperature": 0.2,
        "role": "Test driven development"
      },
      "debugger": {
        "model": "gemini-thinking",
        "temperature": 0.7,
        "role": "Problem diagnosis and solving"
      }
    }
  },
  "directories": {
    "docs": "./docs",
    "src": "./src", 
    "tests": "./tests",
    "remotes": "./remotes"
  }
}
```

#### 5. MCP Configuration dans RooCode

```bash
# Installation MCP servers essentiels
npm install -g @perplexity/mcp-server
npm install -g @supabase/mcp-server  
npm install -g @context7/mcp-server

# Configuration MCP dans RooCode
roocode mcp add perplexity --server="@perplexity/mcp-server"
roocode mcp add supabase --server="@supabase/mcp-server" \
  --config='{"project_url":"https://your-project.supabase.co"}'
roocode mcp add context7 --server="@context7/mcp-server"

# Test MCP servers
roocode mcp test perplexity
roocode mcp test supabase
roocode mcp test context7
```

### 6. Assignation Modèles aux Agents

```json
{
  "agent_model_assignment": {
    "orchestrators": {
      "uber-orchestrator": "gemini-thinking",
      "state-scribe": "gemini-thinking", 
      "sparc-orchestrators": "gemini-thinking"
    },
    "researchers": {
      "strategic-planner": "gemini-thinking",
      "high-level-test-researcher": "gemini-thinking"
    },
    "writers": {
      "spec-writer": "claude-sonnet",
      "test-acceptance-writer": "claude-sonnet",
      "pseudo-code-writer": "claude-sonnet",
      "doc-writer": "gemini-thinking"
    },
    "implementers": {
      "coder": "claude-sonnet",
      "tester": "claude-sonnet",
      "boilerplate": "claude-sonnet",
      "system-integrator": "claude-sonnet"
    },
    "evaluators": {
      "debugger": "gemini-thinking",
      "security-reviewer": "gemini-thinking",
      "devils-advocate": "gemini-thinking",
      "code-comprehension": "gemini-thinking"
    }
  }
}
```

---

## ⚡ **ÉTAPE 4 : CLAUDE-FLOW - ORCHESTRATION AVANCÉE**

### Installation Claude-Flow

```bash
# Installation NPM globale
npm install -g claude-flow

# Ou installation locale projet
npm install claude-flow

# Vérification installation
claude-flow --version
claude-flow --help

# Setup initial
claude-flow init --project-type="enterprise"
```

### Configuration Windows + Localisation Projets

#### Setup Windows Spécifique

```powershell
# PowerShell en mode Admin
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

# Installation via npm
npm install -g claude-flow

# Ou via Chocolatey
choco install claude-flow

# Configuration PATH Windows
$env:PATH += ";C:\Users\$env:USERNAME\AppData\Roaming\npm"

# Création répertoire projets
New-Item -ItemType Directory -Path "C:\Dev\claude-flow-projects"
Set-Location "C:\Dev\claude-flow-projects"

# Premier projet
claude-flow create mon-premier-projet --location="C:\Dev\claude-flow-projects"
```

#### Structure Fichiers Claude-Flow

```
📁 mon-projet-claude-flow/
├── 📄 .claude-flow/
│   ├── config.json           # Configuration projet
│   ├── swarm.json            # Configuration swarm  
│   ├── memory.db             # Base mémoire locale
│   └── hooks/                # Scripts automation
├── 📄 docs/
│   ├── prd.md               # Product Requirements Document
│   ├── architecture.md     # Documentation architecture
│   └── api-specs.json      # Spécifications API
├── 📄 src/                  # Code source
├── 📄 tests/                # Tests automatisés
├── 📄 .gitignore           # Git ignore patterns
├── 📄 package.json         # Dependencies Node.js
├── 📄 CLAUDE.md            # Configuration Claude
└── 📄 README.md            # Documentation projet
```

#### Explication des Fichiers Clés

**`.claude-flow/config.json`** - Configuration Centrale
```json
{
  "project": {
    "name": "MonProjet",
    "version": "1.0.0",
    "type": "full-stack-web"
  },
  "swarm": {
    "topology": "hierarchical",
    "max_agents": 8,
    "strategy": "adaptive"
  },
  "models": {
    "orchestrator": "claude-3-opus",
    "coder": "claude-3-sonnet", 
    "tester": "gemini-1.5-pro"
  },
  "integrations": {
    "git": true,
    "ci_cd": true,
    "monitoring": true
  }
}
```

**`.claude-flow/swarm.json`** - État du Swarm
```json
{
  "swarm_id": "swarm-1234567890",
  "agents": [
    {
      "id": "architect-1",
      "type": "architect",
      "status": "active",
      "capabilities": ["system_design", "api_design"]
    },
    {
      "id": "coder-1", 
      "type": "coder",
      "status": "active",
      "capabilities": ["javascript", "python", "react"]
    }
  ],
  "memory": {
    "shared": true,
    "persistence": "database",
    "ttl": 86400
  }
}
```

### Ajout de Serveurs MCP

```bash
# Ajout serveur MCP Perplexity
claude-flow mcp add perplexity \
  --command="npx @perplexity/mcp-server" \
  --auto-allow="search,research"

# Ajout serveur MCP GitHub
claude-flow mcp add github \
  --command="npx @github/mcp-server" \
  --token="ghp_your_token_here" \
  --auto-allow="repo_read,issue_create"

# Ajout serveur MCP Supabase
claude-flow mcp add supabase \
  --command="npx @supabase/mcp-server" \
  --url="https://your-project.supabase.co" \
  --key="your-supabase-anon-key"

# Vérification MCP servers
claude-flow mcp list
claude-flow mcp test perplexity
```

### Configuration CLAUDE.md pour Claude-Flow

```markdown
# CLAUDE.md - Configuration Claude-Flow

## 🚨 MANDATORY: Claude Flow AI-Driven Development

### Claude Code Handles:
- ✅ **ALL file operations** (Read, Write, Edit, MultiEdit)
- ✅ **ALL code generation** and development tasks
- ✅ **ALL bash commands** and system operations
- ✅ **ALL actual implementation** work

### Claude Flow MCP Tools Handle:
- 🧠 **Coordination only** - Orchestrating Claude Code's actions
- 💾 **Memory management** - Persistent state across sessions
- 🤖 **Neural features** - Cognitive patterns and learning
- 📊 **Performance tracking** - Monitoring and metrics
- 🐝 **Swarm orchestration** - Multi-agent coordination

## 🚨 CRITICAL: Parallel Execution & Batch Operations

### MANDATORY RULE: BATCH EVERYTHING
1. **NEVER** send multiple messages for related operations
2. **ALWAYS** combine multiple tool calls in ONE message
3. **PARALLEL** execution is MANDATORY, not optional

### PROJECT CONTEXT
- **Type:** [Your project type]
- **Tech Stack:** [Your technologies]
- **Architecture:** [Microservices/Monolith/Serverless]
- **Database:** [PostgreSQL/MongoDB/etc]

### CLAUDE-FLOW COMMANDS
```bash
# Start new swarm
claude-flow swarm init --topology=hierarchical --max-agents=8

# Spawn specialized agents
claude-flow agent spawn --type=architect --name="SystemDesigner"
claude-flow agent spawn --type=coder --name="BackendDev"
claude-flow agent spawn --type=tester --name="QAEngineer"

# Orchestrate complex tasks
claude-flow task orchestrate --task="Build authentication system" --strategy=parallel
```

### MEMORY COORDINATION
All agents must use memory for coordination:
```bash
# Store decisions
claude-flow memory store --key="project/decisions" --value="architecture choices"

# Search previous work
claude-flow memory search --pattern="authentication*"

# Sync across sessions
claude-flow memory sync --namespace="project"
```
```

### Démarrage Claude-Flow

```bash
# Commandes de base
claude-flow --help                    # Aide complète
claude-flow version                   # Version installée
claude-flow status                    # État système

# Initialisation nouveau projet
claude-flow init --project="MonAPI" --type="backend-api"

# Démarrage swarm
claude-flow swarm init --topology="mesh" --max-agents=6

# Feeding PRD au système
claude-flow prd import --file="./docs/requirements.md"
claude-flow prd analyze --generate-tasks

# Orchestration complète
claude-flow orchestrate --input="./docs/prd.md" --output="./src/" --auto-test
```

### Restart d'un Projet

```bash
# Reprendre session précédente
claude-flow resume --session-id="last"

# Ou reprendre projet spécifique
claude-flow resume --project="MonAPI" --from-checkpoint

# Vérifier état avant reprise
claude-flow status --project="MonAPI"
claude-flow memory list --namespace="MonAPI"

# Restaurer état complet
claude-flow restore --session="2024-07-10-15:30" --full-state
```

---

## 🔌 **ÉTAPE 5 : SERVEURS MCP ESSENTIELS**

### Liste des MCP Incontournables

#### 1. **Perplexity MCP** - Recherche Web Intelligente

```bash
# Installation
npm install -g @perplexity/mcp-server

# Configuration
claude-flow mcp add perplexity \
  --command="npx @perplexity/mcp-server" \
  --config='{"api_key":"your-perplexity-key"}' \
  --auto-allow='["search", "research", "summarize"]'

# Test
claude-flow mcp test perplexity --query="React best practices 2024"
```

#### 2. **GitHub MCP** - Gestion Repository

```bash
# Installation
npm install -g @github/mcp-server

# Configuration avec token
claude-flow mcp add github \
  --command="npx @github/mcp-server" \
  --config='{"token":"ghp_your_github_token"}' \
  --auto-allow='["repo_read", "issue_create", "pr_create"]'

# Test
claude-flow mcp test github --action="list_repos"
```

#### 3. **Supabase MCP** - Base de Données

```bash
# Installation
npm install -g @supabase/mcp-server

# Configuration
claude-flow mcp add supabase \
  --command="npx @supabase/mcp-server" \
  --config='{
    "url":"https://your-project.supabase.co",
    "anon_key":"your-anon-key",
    "service_role_key":"your-service-key"
  }' \
  --auto-allow='["query", "insert", "update", "schema"]'

# Test
claude-flow mcp test supabase --query="SELECT * FROM users LIMIT 5"
```

#### 4. **Files MCP** - Gestion Fichiers Avancée

```bash
# Installation
npm install -g @files/mcp-server

# Configuration
claude-flow mcp add files \
  --command="npx @files/mcp-server" \
  --config='{"allowed_paths":["/home/user/projects"]}' \
  --auto-allow='["read", "write", "search"]'
```

#### 5. **Memory MCP** - Mémoire Persistante

```bash
# Installation
npm install -g @memory/mcp-server

# Configuration
claude-flow mcp add memory \
  --command="npx @memory/mcp-server" \
  --config='{"storage":"./memory.db"}' \
  --auto-allow='["store", "retrieve", "search"]'
```

### Configuration MCP Centralisée

**Fichier `.claude-flow/mcp.json`**
```json
{
  "servers": {
    "perplexity": {
      "command": "npx @perplexity/mcp-server",
      "args": [],
      "env": {
        "PERPLEXITY_API_KEY": "your-key"
      },
      "auto_allow": ["search", "research"]
    },
    "github": {
      "command": "npx @github/mcp-server", 
      "env": {
        "GITHUB_TOKEN": "ghp_your_token"
      },
      "auto_allow": ["repo_read", "issue_create"]
    },
    "supabase": {
      "command": "npx @supabase/mcp-server",
      "env": {
        "SUPABASE_URL": "https://your-project.supabase.co",
        "SUPABASE_ANON_KEY": "your-anon-key"
      },
      "auto_allow": ["query", "insert"]
    }
  },
  "security": {
    "require_approval": false,
    "allowed_domains": ["github.com", "supabase.co"],
    "blocked_operations": ["delete_database"]
  }
}
```

---

## 🧪 **ÉTAPE 6 : TESTS ET VALIDATION**

### Test Complet de Configuration

#### 1. Test Claude-Code

```bash
# Test base Claude-Code
claude "Écris un script Python qui lit un fichier CSV et génère un graphique"

# Test avec contexte multi-fichiers
claude "Analyse ce projet React et suggest 3 améliorations de performance" --include-all

# Test avec orchestration
claude "Crée une API REST complète avec tests automatisés" --mode=orchestrated
```

#### 2. Test RooCode

```bash
# Lancement RooCode
npm run dev  # Dans le répertoire RooCode

# Test interface web (http://localhost:3000)
# 1. Créer nouveau projet
# 2. Sélectionner mode "orchestrator-uber"
# 3. Demander: "Analyze project requirements and create implementation plan"
# 4. Vérifier génération plan détaillé
```

#### 3. Test Claude-Flow

```bash
# Test swarm initialization
claude-flow swarm init --topology=mesh --max-agents=4

# Test agent spawning
claude-flow agent spawn --type=researcher --name="TechAnalyst"
claude-flow agent spawn --type=coder --name="BackendDev"

# Test task orchestration
claude-flow task orchestrate \
  --task="Create user authentication system" \
  --strategy=parallel \
  --agents="TechAnalyst,BackendDev"

# Vérifier résultats
claude-flow status
claude-flow metrics --period="last-hour"
```

#### 4. Test MCP Servers

```bash
# Test Perplexity
claude-flow mcp call perplexity search \
  --query="Best Node.js authentication libraries 2024"

# Test GitHub
claude-flow mcp call github list_repos \
  --user="your-username"

# Test Supabase
claude-flow mcp call supabase query \
  --sql="SELECT version()"

# Test performance globale
claude-flow mcp benchmark --all-servers
```

### Validation Setup Complet

#### Checklist Validation Finale

```markdown
✅ **CHECKLIST SETUP VALIDATION**

## Claude-Code
- [ ] Installation réussie (`claude --version`)
- [ ] Authentication configurée (`claude auth status`)
- [ ] CLAUDE.md configuré dans projet
- [ ] Test génération code basique réussi
- [ ] Test multi-fichiers réussi

## RooCode  
- [ ] Installation dependencies (`npm install`)
- [ ] Providers configurés (Claude + Gemini)
- [ ] Supabase database setup complet
- [ ] Modes Pheromind installés
- [ ] Interface web accessible
- [ ] Test orchestration basique réussi

## Claude-Flow
- [ ] Installation globale (`claude-flow --version`)
- [ ] Projet initialisé (`claude-flow init`)
- [ ] Configuration swarm opérationnelle
- [ ] Memory system fonctionnel
- [ ] Test task orchestration réussi

## MCP Ecosystem
- [ ] Minimum 3 serveurs installés
- [ ] Configuration sécurisée
- [ ] Tests connectivity réussis
- [ ] Performance acceptable (<2s)
- [ ] Logs propres (pas d'erreurs)

## Integration Tests
- [ ] Claude-Code + MCP workflow complet
- [ ] RooCode + Claude-Flow coordination
- [ ] Memory persistence across sessions
- [ ] Error handling et fallbacks
- [ ] Performance monitoring actif
```

---

## 🚀 **ÉTAPE 7 : OPTIMISATIONS AVANCÉES**

### Performance Maximale

#### 1. Configuration Système Optimale

```bash
# macOS - Optimisations système
sudo sysctl -w kern.maxfiles=65536
sudo sysctl -w kern.maxfilesperproc=32768

# Linux - Optimisations
echo 'fs.file-max = 65536' | sudo tee -a /etc/sysctl.conf
echo '* soft nofile 32768' | sudo tee -a /etc/security/limits.conf
echo '* hard nofile 65536' | sudo tee -a /etc/security/limits.conf

# Windows - PowerShell optimizations
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters" -Name "MaxUserPort" -Value 65534
```

#### 2. Cache et Mémoire

```json
{
  "performance_config": {
    "cache": {
      "enabled": true,
      "size": "1GB",
      "ttl": 3600,
      "compression": true
    },
    "memory": {
      "max_heap": "4GB",
      "gc_strategy": "concurrent",
      "buffer_size": "256MB"
    },
    "parallel": {
      "max_concurrent": 8,
      "chunk_size": 1000,
      "timeout": 30000
    }
  }
}
```

#### 3. Monitoring et Métriques

```bash
# Setup monitoring Claude-Flow
claude-flow monitoring enable \
  --metrics="performance,memory,network" \
  --dashboard="http://localhost:3001"

# Alertes performance
claude-flow alerts create \
  --type="performance" \
  --threshold="response_time>5s" \
  --action="slack_notify"

# Export métriques
claude-flow metrics export \
  --format="prometheus" \
  --endpoint="http://prometheus:9090/metrics"
```

### Techniques Avancées

#### 1. Setup Debugger RooCode Manuel

```javascript
// roocode-debugger.js
const { RooCodeDebugger } = require('roocode');

const debugger = new RooCodeDebugger({
  mode: 'manual',
  breakpoints: ['before_agent_call', 'after_response'],
  logging: {
    level: 'debug',
    output: './debug.log'
  }
});

// Intercepter les appels agents
debugger.intercept('agent_call', (context) => {
  console.log('Agent:', context.agent_type);
  console.log('Input:', context.input);
  console.log('Model:', context.model);
  
  // Permettre modification avant envoi
  return {
    ...context,
    temperature: 0.1  // Force température basse
  };
});

// Hook post-réponse
debugger.hook('response', (response) => {
  console.log('Response length:', response.length);
  console.log('Tokens used:', response.usage);
  
  // Validation automatique
  if (response.contains('ERROR')) {
    debugger.flag('error_in_response');
  }
});

module.exports = debugger;
```

#### 2. Pipeline Build/Deploy/Test Automatisé

```yaml
# .github/workflows/claude-flow-ci.yml
name: Claude-Flow CI/CD

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test-with-claude-flow:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install Claude-Flow
      run: npm install -g claude-flow
      
    - name: Configure Claude-Flow
      run: |
        claude-flow config set api_key ${{ secrets.CLAUDE_API_KEY }}
        claude-flow mcp add github --token ${{ secrets.GITHUB_TOKEN }}
        
    - name: Run Tests with AI
      run: |
        claude-flow swarm init --topology=mesh --max-agents=3
        claude-flow agent spawn --type=tester --name=QA
        claude-flow task orchestrate \
          --task="Run comprehensive test suite and fix any failures" \
          --auto-fix=true \
          --report-format=junit
          
    - name: Deploy if Tests Pass
      if: success()
      run: |
        claude-flow deploy --environment=staging \
          --health-check=true \
          --rollback-on-failure=true
```

#### 3. Error Monitoring et Iteration

```javascript
// error-monitor.js
const errorMonitor = {
  // Capturer erreurs console navigateur
  captureConsoleErrors: () => {
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (event) => {
        const errorInfo = {
          message: event.message,
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
          stack: event.error?.stack
        };
        
        // Envoyer à Claude-Flow pour analyse et correction
        claudeFlow.debugger.analyzeError(errorInfo)
          .then(suggestion => {
            console.log('AI Suggestion:', suggestion);
            claudeFlow.autoFix.apply(suggestion);
          });
      });
    }
  },
  
  // Monitoring performance
  monitorPerformance: () => {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.duration > 1000) {  // > 1s
          claudeFlow.performance.optimize({
            type: entry.entryType,
            name: entry.name,
            duration: entry.duration
          });
        }
      }
    });
    
    observer.observe({entryTypes: ['navigation', 'measure']});
  }
};

module.exports = errorMonitor;
```

---

## 🚀 **DIFFÉRENCES CLAUDE-FLOW 1.0 vs 2.0**

### Evolution Majeure

| Aspect | Claude-Flow 1.0 | Claude-Flow 2.0 |
|--------|----------------|------------------|
| **Intelligence** | Agents basiques | Hive-Mind Intelligence |
| **MCP Tools** | 25 outils | 87 outils |
| **Neural Networks** | Aucun | 27+ modèles |
| **Memory System** | Session locale | Persistante multi-sessions |
| **Performance** | 2-3x baseline | 6-8x baseline |
| **Topologies** | Hiérarchique uniquement | 4 topologies (mesh/ring/star/hierarchical) |
| **Auto-Optimization** | Manuel | Automatique |
| **Learning** | Aucun | Adaptive learning |

### Nouveautés 2.0

#### 🧠 **Hive-Mind Intelligence**
```bash
# Mode Queen + Workers
claude-flow hive-mind init --queen-type=strategic --workers=8

# Consensus automatique
claude-flow consensus vote --proposal="architecture_change" --threshold=0.7

# Intelligence collective
claude-flow swarm-think --problem="performance_optimization" --collective=true
```

#### ⚡ **Performance Drastique**
```
📊 AMÉLIORATION PERFORMANCE 2.0 :

Développement Feature Complexe :
├── v1.0 : 2-3 jours
├── v2.0 : 4-6 heures (-75%)
└── Qualité : +40% (moins bugs)

Orchestration Multi-Agents :
├── v1.0 : Sequential (lent)
├── v2.0 : Parallel + Neural optimization
└── Speed : 6x plus rapide

Memory & Context :
├── v1.0 : 50k tokens max
├── v2.0 : 1M+ tokens avec compression
└── Persistance : Cross-session + learning
```

#### 🔗 **87 Outils MCP Intégrés**
```bash
# Nouveaux outils 2.0
claude-flow tools list --category=neural
claude-flow tools list --category=github
claude-flow tools list --category=performance

# Auto-suggestion outils
claude-flow analyze --suggest-tools --project-type="e-commerce"
```

---

## 🎓 **TROUBLESHOOTING : SOLUTIONS AUX PROBLÈMES COURANTS**

### Problème #1 : Installation Claude-Code Échec

```bash
# Diagnostic
claude --version  # Command not found

# Solutions par ordre de priorité
# 1. Vérifier PATH
echo $PATH | grep claude

# 2. Réinstallation forcée
brew uninstall claude && brew install claude  # macOS
npm uninstall -g claude && npm install -g claude  # NPM

# 3. Installation alternative
curl -fsSL https://claude.ai/install.sh | bash
source ~/.bashrc

# 4. Permissions (Linux/macOS)
sudo chown -R $(whoami) ~/.claude
chmod +x ~/.claude/bin/claude
```

### Problème #2 : MCP Servers Non Fonctionnels

```bash
# Diagnostic MCP
claude-flow mcp list --status
claude-flow mcp logs perplexity --tail=50

# Solutions communes
# 1. Vérifier Node.js version
node --version  # Doit être >= 18

# 2. Réinstaller serveur problématique
npm uninstall -g @perplexity/mcp-server
npm install -g @perplexity/mcp-server

# 3. Test isolation
claude-flow mcp test perplexity --verbose --timeout=10

# 4. Reset configuration
claude-flow mcp remove perplexity
claude-flow mcp add perplexity --command="npx @perplexity/mcp-server"
```

### Problème #3 : Performance Dégradée

```bash
# Diagnostic performance
claude-flow metrics --period=1h --format=detailed
claude-flow benchmark --compare-baseline

# Solutions optimisation
# 1. Cache cleanup
claude-flow cache clear --all
claude-flow memory optimize --compress

# 2. Réduction agents
claude-flow swarm scale --target-size=4  # Au lieu de 8

# 3. Model optimization
claude-flow config model --prefer-speed-over-quality

# 4. Network optimization
claude-flow config network --timeout=5000 --retry=3
```

### Problème #4 : Erreurs de Mémoire

```bash
# Diagnostic mémoire
claude-flow memory status --detailed
claude-flow memory check --repair

# Solutions
# 1. Nettoyage mémoire
claude-flow memory cleanup --older-than=7d
claude-flow memory compress --ratio=0.8

# 2. Vérification Supabase
claude-flow database test --connection
claude-flow database repair --auto-fix

# 3. Reset complet mémoire (dernière option)
claude-flow memory reset --backup-first
```

### Problème #5 : RooCode Interface Non Accessible

```bash
# Diagnostic RooCode
npm run dev  # Vérifier erreurs console
curl http://localhost:3000  # Test connectivité

# Solutions
# 1. Port déjà utilisé
lsof -i :3000  # Voir qui utilise le port
npm run dev -- --port=3001  # Utiliser port différent

# 2. Dependencies manquantes
rm -rf node_modules package-lock.json
npm install

# 3. Build problème
npm run build
npm run start

# 4. Permissions (Linux/macOS)
sudo chown -R $(whoami) ./roocode
chmod -R 755 ./roocode
```

### Configuration Support 24/7

```json
{
  "support_config": {
    "auto_diagnostics": true,
    "error_reporting": {
      "enabled": true,
      "endpoint": "https://support.claude-flow.ai/api/errors",
      "include_context": true
    },
    "monitoring": {
      "health_check_interval": 300,
      "performance_alerts": true,
      "auto_recovery": true
    },
    "backup": {
      "auto_backup": true,
      "frequency": "daily",
      "retention": "30d"
    }
  }
}
```

---

## 🎯 **NEXT STEPS : MAÎTRISE COMPLÈTE**

**Votre environnement agentique est maintenant opérationnel !**

### Validation Finale

```bash
# Test intégration complète
claude "Utilise le swarm Claude-Flow pour créer une API REST avec authentification JWT, 
tests automatisés, documentation OpenAPI, et déploiement automatisé" --orchestrated

# Si ce test fonctionne parfaitement, vous êtes prêt pour la production !
```

### Prochaines Étapes Recommandées

1. **🎯 Premier Projet Réel** : Appliquez sur projet existant
2. **📊 Métriques Baseline** : Mesurez gains vs méthode traditionnelle  
3. **👥 Formation Équipe** : Partagez configuration avec collègues
4. **🚀 Scaling** : Augmentez progressivement complexité projets
5. **🎓 Communauté** : Rejoignez forums Claude-Flow pour partage expériences

### Ressources Continues

- **Documentation Live** : https://docs.claude-flow.ai
- **Community Discord** : https://discord.gg/claude-flow
- **GitHub Repository** : https://github.com/ruvnet/claude-flow  
- **Video Tutorials** : https://youtube.com/@claude-flow-official

**Votre transformation vers le développement agentique commence maintenant !** 🚀