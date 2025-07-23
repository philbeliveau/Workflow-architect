# Section 3-7 : Maîtriser l'Alignement et les PRD

## 🎯 **L'ALIGNEMENT : PIERRE ANGULAIRE DU CODAGE AGENTIQUE**

> *"Le fossé entre ce que vous voulez et ce que l'IA comprend est l'ennemi #1 de votre productivité"*

**L'alignement n'est pas un concept vague - c'est une méthodologie précise avec 3 composantes mesurables :**

```
🎯 ALIGNEMENT PARFAIT = INTENTION + SPÉCIFICATION + FEEDBACK
│
├── 💭 INTENTION : Ce que vous voulez vraiment accomplir
├── 📋 SPÉCIFICATION : Comment l'IA doit le comprendre 
└── 🔄 FEEDBACK : Mécanisme de vérification et correction
```

## 📊 **LE COÛT DE L'ALIGNEMENT DÉFAILLANT**

### Statistiques Révélatrices 2024
```
💸 COÛT DU MAUVAIS ALIGNEMENT :
├── 73% : Temps perdu en corrections post-génération
├── 2.8x : Factor multiplication bugs en production
├── 45% : Abandon projets IA par les équipes
├── $127k : Coût moyen échec projet IA (étude MIT)
└── 89% : PRD réécrits au moins 3 fois

💰 GAINS ALIGNEMENT MAÎTRISÉ :
├── 84% : Réduction temps spécification → code
├── 91% : Taux succès première génération
├── 6.2x : ROI projets avec PRD structurés
├── 68% : Réduction cycles révision client
└── 94% : Satisfaction équipes développement
```

## 🧠 **COMPRENDRE L'ALIGNEMENT : LES 3 PILLIERS**

### 1. 💭 **INTENTION : Clarifier le "Pourquoi"**

#### Le Problème de l'Intention Floue
```
❌ INTENTION VAGUE :
"Je veux une API pour gérer les utilisateurs"

✅ INTENTION CLAIRE :
"Je veux une API REST sécurisée qui permet aux administrateurs 
d'une plateforme SaaS de gérer les comptes utilisateurs avec 
authentification JWT, roles RBAC, et audit trail complet pour 
respecter les exigences SOC2."
```

#### Framework de Clarification d'Intention

**Template SMART-AI (Spécifique, Mesurable, Aligné, Réaliste, Temporel - IA):**

```markdown
## Intention Project: [NOM_PROJET]

### Contexte Business
- **Problème résolu:** [Description du pain point]
- **Utilisateurs cibles:** [Qui utilise quoi et pourquoi]
- **Valeur créée:** [Impact mesurable attendu]
- **Contraintes:** [Budget, temps, compliance, technique]

### Objectif Principal
- **Quoi:** [Action ou système à créer]
- **Pourquoi:** [Justification business]
- **Pour qui:** [Utilisateurs finaux + stakeholders]
- **Quand:** [Timeline et milestones]

### Critères de Succès
- **Métriques techniques:** [Performance, disponibilité, sécurité]
- **Métriques business:** [Adoption, satisfaction, ROI]
- **Métriques utilisateur:** [UX, facilité d'usage, efficacité]

### Anti-Patterns à Éviter
- **Ce que ce N'EST PAS:** [Clarifier les limites]
- **Exclusions explicites:** [Features hors scope]
- **Risques identifiés:** [Technical debt, security, scalability]
```

### 2. 📋 **SPÉCIFICATION : Rendre l'IA "Readable"**

#### L'Art de la Spécification Lisible par l'IA

**Principe fondamental :** L'IA a besoin de structure, d'exemples concrets, et de critères de vérification automatisables.

#### Méthodologie SPEC-AI (Structure, Précision, Exemples, Critères - IA)

```json
{
  "prd_version": "2.1",
  "metadata": {
    "domaine": "API Authentication",
    "complexite": "Modérée",
    "modeles_cibles": ["Claude-3.5 Sonnet", "GPT-4o"],
    "date_creation": "2024-07-10"
  },
  "architecture_fonctionnelle": {
    "modules": {
      "auth_core": {
        "type": "sécurité",
        "priorité": "critique",
        "technologies": ["JWT", "bcrypt", "Redis"],
        "dependencies": ["user_management", "session_store"]
      },
      "user_management": {
        "type": "business_logic",
        "priorité": "haute",
        "technologies": ["PostgreSQL", "Prisma"],
        "dependencies": ["database_core"]
      }
    }
  }
}
```

#### Structure PRD Optimale pour IA

```markdown
# PRD: [NOM_SYSTÈME] v[VERSION]

## 🎯 RÉSUMÉ EXÉCUTIF (IA-Ready)

**Objectif Principal:** [Une phrase précise]
**Input Principal:** [Ce que l'IA reçoit]
**Output Principal:** [Ce que l'IA doit produire]
**Contraintes Critiques:** [Limitations à respecter absolument]

## 📋 SPÉCIFICATIONS FONCTIONNELLES

### Module: [NOM_MODULE]

#### REQ-[ID]: [Nom Fonctionnalité]

**Métadonnées:**
- **ID:** REQ-AUTH-001
- **Priorité:** Critique | Haute | Moyenne | Basse
- **Complexité:** Simple | Modérée | Complexe | Expert
- **Estimation:** [Story points ou heures]
- **Assignation IA:** [Quel type d'agent optimal]

**Spécification Structurée:**

```yaml
objectif: "Authentifier utilisateur via email/password"
type: "api_endpoint"

entrées:
  endpoint: "POST /api/v1/auth/login"
  headers:
    - "Content-Type: application/json"
  body:
    email: 
      type: "string"
      format: "email (RFC 5322)"
      constraints: "max 254 chars, lowercase forced"
      example: "user@example.com"
    password:
      type: "string"
      constraints: "min 8 chars, no whitespace"
      example: "SecurePass123!"
    remember_me:
      type: "boolean"
      default: false
      optional: true

sorties:
  success_200:
    token:
      type: "string (JWT)"
      format: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
      expires: "24h (remember_me=false) | 30d (remember_me=true)"
    user:
      type: "object"
      fields: ["id", "email", "name", "role", "last_login"]
  error_401:
    message: "Invalid credentials"
    code: "AUTH_INVALID"
    retry_after: "15min après 5 échecs"

logique_interne:
  étapes:
    1: "Validation format email (regex RFC 5322)"
    2: "Lookup utilisateur en base (index email)"
    3: "Vérification compte actif (status != disabled)"
    4: "Comparaison hash password (bcrypt.compare)"
    5: "Rate limiting check (Redis: auth_attempts:{email})"
    6: "Génération JWT avec claims"
    7: "Mise à jour last_login timestamp"
    8: "Log audit (IP, user_agent, success/failure)"

contraintes_techniques:
  performance: "< 200ms response time P95"
  sécurité: 
    - "bcrypt cost factor 12"
    - "JWT RSA256 signing"
    - "Rate limiting: 5/15min par email"
  base_données:
    - "Index: users(email) UNIQUE"
    - "Index: audit_logs(created_at, user_id)"

critères_acceptation:
  scenarios:
    1:
      nom: "Connexion valide"
      given: "Utilisateur actif avec credentials corrects"
      when: "POST /api/v1/auth/login avec données valides"
      then: "Retour 200 + JWT valide + user data"
    2:
      nom: "Credentials invalides"
      given: "Email existe mais password incorrect"
      when: "POST avec mauvais password"
      then: "Retour 401 + message générique + increment rate limit"
    3:
      nom: "Rate limiting déclenché"
      given: "5 échecs consécutifs sur même email"
      when: "6ème tentative dans les 15min"
      then: "Retour 429 + retry_after header"

dépendances:
  techniques:
    - "REQ-USER-001: Structure utilisateur"
    - "REQ-DB-001: Connexion PostgreSQL"
    - "REQ-REDIS-001: Cache session"
  business:
    - "REQ-AUDIT-001: Logging sécurisé"
    - "REQ-RBAC-001: Système de rôles"

tests_automatisés:
  unit_tests:
    - "Validation email format"
    - "Hash password verification"
    - "JWT generation/validation"
  integration_tests:
    - "Database user lookup"
    - "Redis rate limiting"
    - "Audit log creation"
  e2e_tests:
    - "Full login flow"
    - "Rate limiting behavior"
    - "Session management"
```

### 3. 🔄 **FEEDBACK : Mécanismes de Vérification**

#### Le Problème Oracle Résolu

**Question :** Comment l'IA sait-elle que son code fonctionne selon vos attentes ?

**Réponse :** Oracles automatisés intégrés dans les spécifications.

```markdown
## ORACLE FRAMEWORK

### Types d'Oracles pour IA

#### 1. Oracle Spécifié (Gold Standard)
```javascript
// Défini dans le PRD
function validateLoginResponse(response, input) {
  return {
    status_correct: response.status === 200,
    jwt_valid: isValidJWT(response.data.token),
    user_data_complete: hasRequiredFields(response.data.user, 
      ['id', 'email', 'name', 'role']),
    token_expiry_correct: validateTokenExpiry(
      response.data.token, 
      input.remember_me
    )
  }
}
```

#### 2. Oracle Dérivé (Cross-Validation)
```javascript
// L'IA génère 2 implémentations, on compare
function crossValidateAuth(impl1, impl2, testCases) {
  testCases.forEach(testCase => {
    const result1 = impl1.authenticate(testCase.input);
    const result2 = impl2.authenticate(testCase.input);
    assert.deepEqual(result1, result2, 
      `Mismatch on ${testCase.name}`);
  });
}
```

#### 3. Oracle Pseudo (IA-Generated + Validated)
```javascript
// L'IA génère les tests, humain valide le logic
const aiGeneratedTests = [
  {
    name: "Valid login with remember_me=true",
    input: { email: "user@test.com", password: "valid123", remember_me: true },
    expected: { status: 200, token_expires_in: "30d" }
  },
  // ... plus de tests générés par IA
];
```

#### 4. Oracle Partiel (Property-Based)
```javascript
// Propriétés qui doivent TOUJOURS être vraies
function authenticationProperties(input, output) {
  return [
    // Propriété sécurité
    property("No password in response", 
      !JSON.stringify(output).includes(input.password)),
    
    // Propriété cohérence
    property("JWT contains user ID", 
      output.status === 200 → 
      decodeJWT(output.token).sub === output.user.id),
    
    // Propriété performance
    property("Response time acceptable",
      output.response_time < 200)
  ];
}
```

## 🏗️ **ARCHITECTURE PRD : TEMPLATES PAR DOMAINE**

### Template API/Backend

```markdown
# API-PRD-TEMPLATE

## Endpoint: [METHOD] [PATH]

**Résumé IA:**
- **Fonction:** [Action en une phrase]
- **Complexité:** [Simple/Modérée/Complexe/Expert]
- **Agent Recommandé:** [Architect/Coder/Specialist]

**Spécification OpenAPI:**
```yaml
/api/v1/users/{id}:
  get:
    summary: "Récupérer profil utilisateur"
    parameters:
      - name: id
        in: path
        required: true
        schema:
          type: string
          format: uuid
        example: "123e4567-e89b-12d3-a456-426614174000"
    responses:
      '200':
        description: "Profil utilisateur"
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/User'
            example:
              id: "123e4567-e89b-12d3-a456-426614174000"
              email: "john.doe@example.com"
              name: "John Doe"
              role: "user"
              created_at: "2024-01-15T10:30:00Z"
      '404':
        description: "Utilisateur non trouvé"
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Error'
```

**Business Logic (Step-by-Step):**
```
1. VALIDATE: UUID format (regex validation)
2. AUTHORIZE: Vérifier permission (self or admin)
3. QUERY: SELECT user WHERE id = ? AND status = 'active'
4. TRANSFORM: Remove sensitive fields (password_hash, etc.)
5. ENRICH: Add computed fields (profile_completion_percent)
6. SERIALIZE: JSON response avec status 200
7. LOG: Access log (user_id, ip, timestamp)
```

**Oracle de Test:**
```javascript
const userProfileOracle = {
  name: "GET /api/v1/users/{id}",
  scenarios: [
    {
      given: "Utilisateur actif existant",
      when: "GET avec UUID valide et auth appropriée",
      then: "200 + user object sans champs sensibles"
    }
  ],
  properties: [
    "Response time < 100ms",
    "No password_hash in response",
    "All required fields present"
  ]
}
```
```

### Template UI/Frontend

```markdown
# UI-PRD-TEMPLATE

## Composant: [ComponentName]

**Résumé IA:**
- **Type:** [Page/Component/Widget/Modal]
- **Framework:** [React/Vue/Angular/Vanilla]
- **Complexité:** [Simple/Modérée/Complexe]

**Props Interface:**
```typescript
interface LoginFormProps {
  onSubmit: (credentials: LoginCredentials) => Promise<AuthResult>;
  onForgotPassword?: () => void;
  initialEmail?: string;
  isLoading?: boolean;
  error?: string | null;
  showRememberMe?: boolean;
}

interface LoginCredentials {
  email: string;
  password: string;
  remember_me?: boolean;
}

interface AuthResult {
  success: boolean;
  token?: string;
  user?: User;
  error?: string;
}
```

**State Management:**
```typescript
const useLoginForm = () => {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: '',
    remember_me: false
  });
  
  const [validation, setValidation] = useState<ValidationState>({
    email: { isValid: true, message: '' },
    password: { isValid: true, message: '' }
  });

  const [formState, setFormState] = useState<FormState>('idle');
  // 'idle' | 'submitting' | 'success' | 'error'
}
```

**Comportements Interactifs:**
```yaml
interactions:
  email_input:
    on_blur: "Validate email format (RFC 5322)"
    on_change: "Clear previous error state"
    validation: 
      - "Required field"
      - "Valid email format"
      - "Max 254 characters"
  
  password_input:
    on_blur: "Validate password strength"
    on_change: "Update strength indicator"
    validation:
      - "Required field"
      - "Min 8 characters"
      - "No leading/trailing whitespace"
  
  submit_button:
    on_click: "Call onSubmit with form data"
    disabled_when: "isLoading || !isFormValid"
    loading_state: "Show spinner + disable"

  forgot_password_link:
    on_click: "Call onForgotPassword callback"
    conditional_display: "Only if onForgotPassword provided"
```

**Accessibilité (A11Y):**
```yaml
accessibility:
  form:
    role: "form"
    aria_label: "User Login Form"
  
  email_input:
    aria_label: "Email address"
    aria_describedby: "email-error"
    aria_invalid: "true (if validation error)"
  
  password_input:
    aria_label: "Password"
    aria_describedby: "password-error password-requirements"
  
  submit_button:
    aria_label: "Sign in to your account"
    aria_busy: "true (during submission)"
  
  error_messages:
    role: "alert"
    aria_live: "polite"
```

**Oracle de Test UI:**
```javascript
const loginFormOracle = {
  name: "LoginForm Component",
  scenarios: [
    {
      given: "Form avec champs vides",
      when: "User clique submit",
      then: "Validation errors displayed + no API call"
    },
    {
      given: "Credentials valides",
      when: "Form submission",
      then: "onSubmit called + loading state + success handling"
    }
  ],
  properties: [
    "No password visible in DOM",
    "Form accessible via keyboard",
    "Validation triggered appropriately"
  ]
}
```
```

## 🎨 **EXEMPLES CONCRETS : ANALYSE CONTEXTDEV**

### Cas d'Étude : ContextDev PRD

**Contexte :** ContextDev est un outil qui aide les développeurs à maintenir le contexte de leur codebase lors des interactions avec l'IA.

#### PRD Original vs PRD Agentique

```markdown
❌ PRD ORIGINAL (Vibe Style):
"Créer un outil qui aide les développeurs à garder le contexte 
de leur code quand ils parlent à l'IA"

✅ PRD AGENTIQUE (Structured):

# PRD: ContextDev v1.0

## Résumé Exécutif (IA-Ready)
**Objectif:** CLI tool qui analyse automatiquement un projet de code et génère un contexte structuré pour optimiser les interactions avec les LLMs de développement.

**Input Principal:** Codebase directory + configuration options
**Output Principal:** Contexte structuré (markdown + metadata) optimisé pour LLM consumption
**Contraintes Critiques:** < 200k tokens output, support multi-languages, respect .gitignore

## Module: Code Analysis Engine

### REQ-ANALYSIS-001: File Discovery & Filtering

**Spécification:**
```yaml
objectif: "Découvrir et filtrer les fichiers pertinents du projet"
type: "file_system_operation"

entrées:
  root_path: 
    type: "string (absolute path)"
    example: "/Users/dev/my-project"
  config:
    type: "object"
    fields:
      max_file_size: "default 1MB"
      ignore_patterns: "default .gitignore + ['node_modules', '.git']"
      include_extensions: "default ['js', 'ts', 'py', 'java', 'go']"

sorties:
  file_list:
    type: "array[FileMetadata]"
    structure:
      path: "relative path from root"
      size: "bytes"
      language: "detected programming language"
      modified: "last modification timestamp"
      importance_score: "1-10 based on heuristics"

logique_interne:
  étapes:
    1: "Walk directory tree (recursive)"
    2: "Apply .gitignore rules (parse + match)"
    3: "Filter by file size (skip if > max_file_size)"
    4: "Detect language (file extension + content analysis)"
    5: "Calculate importance score (file size, dependencies, recent changes)"
    6: "Sort by importance score (descending)"

contraintes_techniques:
  performance: "< 5 seconds for projects up to 100k files"
  memory: "< 500MB memory usage regardless of project size"

critères_acceptation:
  scenarios:
    1:
      nom: "Large JavaScript project"
      given: "React project with 5k files + node_modules"
      when: "Run analysis with default config"
      then: "Returns filtered list excluding node_modules, ordered by importance"
```

### REQ-CONTEXT-002: Smart Context Generation

```yaml
objectif: "Générer contexte optimisé pour LLM consumption"
type: "text_processing"

entrées:
  files: "array[FileMetadata] from REQ-ANALYSIS-001"
  target_tokens: "number (default 150k)"
  focus_query: "string (optional user query for context focus)"

sorties:
  context_document:
    type: "markdown string"
    structure: |
      # Project: {project_name}
      
      ## Architecture Overview
      {auto_generated_summary}
      
      ## Key Files Analysis
      {file_by_file_analysis}
      
      ## Dependencies & Relationships
      {dependency_graph}
      
      ## Recent Changes Context
      {git_diff_summary}

logique_interne:
  étapes:
    1: "Generate project overview (analyze package.json, README, etc.)"
    2: "Create dependency graph (imports/exports analysis)"
    3: "Summarize key files (prioritize by importance_score)"
    4: "Extract recent changes (git log --since='7 days')"
    5: "Apply focus query filter (if provided)"
    6: "Optimize for token limit (truncate/summarize if needed)"

contraintes_techniques:
  token_management: "Never exceed target_tokens limit"
  quality: "Maintain code relationships accuracy"
  freshness: "Include git changes from last 7 days"

critères_acceptation:
  scenarios:
    1:
      nom: "Context generation with focus"
      given: "React project + focus_query='authentication'"
      when: "Generate context"
      then: "Prioritize auth-related files + dependencies in output"
```

## 🛠️ **ATELIER PRATIQUE : ÉCRITURE PRD COLLABORATIF**

### Exercice : Projet AI-Native "SmartTasker"

**Brief Client :**
*"Je veux une app mobile qui utilise l'IA pour organiser mes tâches automatiquement. L'IA doit comprendre mes habitudes et suggérer des priorités intelligentes."*

#### Phase 1 : Clarification d'Intention (10 min)

**Votre mission :** Transformer ce brief vague en intention claire avec le framework SMART-AI.

**Template à compléter :**
```markdown
## Intention Projet: SmartTasker

### Contexte Business
- **Problème résolu:** [À compléter]
- **Utilisateurs cibles:** [À compléter]
- **Valeur créée:** [À compléter]
- **Contraintes:** [À compléter]

### Objectif Principal
- **Quoi:** [À compléter]
- **Pourquoi:** [À compléter]
- **Pour qui:** [À compléter]
- **Quand:** [À compléter]

### Critères de Succès
- **Métriques techniques:** [À compléter]
- **Métriques business:** [À compléter]
- **Métriques utilisateur:** [À compléter]
```

#### Phase 2 : Spécification Structurée (20 min)

**Votre mission :** Créer le PRD pour la fonctionnalité "AI Task Prioritization"

**Template PRD à compléter :**
```yaml
objectif: "[À compléter]"
type: "[À compléter]"

entrées:
  user_tasks:
    type: "array[Task]"
    structure: "[À définir]"
  user_context:
    type: "object"
    fields: "[À définir]"
  historical_data:
    type: "object"
    fields: "[À définir]"

sorties:
  prioritized_tasks:
    type: "[À compléter]"
    structure: "[À définir]"

logique_interne:
  étapes: [À compléter]

contraintes_techniques: [À compléter]

critères_acceptation: [À compléter]
```

#### Phase 3 : Oracle Design (15 min)

**Votre mission :** Créer les oracles de vérification pour valider que l'IA génère bien le code attendu.

```javascript
// Oracle Spécifié
function validateTaskPrioritization(input, output) {
  return {
    // À compléter
  }
}

// Oracle Pseudo (Property-Based)
const taskPrioritizationProperties = [
  // À compléter
];
```

### Solutions & Bonnes Pratiques

#### Solution Phase 1 : Intention Claire

```markdown
## Intention Projet: SmartTasker

### Contexte Business
- **Problème résolu:** Les professionnels perdent 21% de leur temps à reprioriser manuellement leurs tâches quotidiennes
- **Utilisateurs cibles:** Knowledge workers (consultants, managers, freelancers) qui gèrent 20+ tâches/jour
- **Valeur créée:** Réduction 40% temps planification + amélioration 25% productivité via priorisation IA
- **Contraintes:** Budget 150k€, launch Q1 2025, conformité RGPD données personnelles

### Objectif Principal
- **Quoi:** App mobile native (iOS/Android) avec IA qui apprend patterns utilisateur pour auto-prioriser tâches
- **Pourquoi:** Libérer mental load planification pour focus sur exécution high-value tasks
- **Pour qui:** Professionnels 25-45 ans gérant projets multiples avec deadlines variables
- **Quand:** MVP en 3 mois, v1.0 complète en 6 mois

### Critères de Succès
- **Métriques techniques:** < 2s response time priorisation, 99.5% uptime, support offline 24h
- **Métriques business:** 10k+ users beta, $50k MRR année 1, NPS > 70
- **Métriques utilisateur:** 65% adoption suggestions IA, 40% réduction temps planification
```

#### Solution Phase 2 : PRD Structuré

```yaml
objectif: "Analyser tâches utilisateur et générer priorisation intelligente basée sur contexte + historique"
type: "ml_inference_service"

entrées:
  user_tasks:
    type: "array[Task]"
    structure:
      id: "uuid"
      title: "string (max 200 chars)"
      description: "string (optional, max 1000 chars)"
      due_date: "ISO 8601 (optional)"
      estimated_duration: "minutes (optional)"
      category: "enum[work, personal, urgent, project]"
      created_at: "ISO 8601"
  user_context:
    type: "object"
    fields:
      current_time: "ISO 8601"
      calendar_events: "array[CalendarEvent]"
      energy_level: "enum[low, medium, high] (user input or inferred)"
      location: "enum[home, office, traveling] (optional)"
      focus_mode: "boolean (deep work session active)"
  historical_data:
    type: "object"
    fields:
      completed_tasks_last_30d: "array[CompletedTask]"
      productivity_patterns: "object (time_of_day performance)"
      priority_preferences: "object (user corrections to AI suggestions)"

sorties:
  prioritized_tasks:
    type: "array[PrioritizedTask]"
    structure:
      task_id: "uuid"
      priority_score: "float (0-1)"
      priority_rank: "integer (1-N)"
      reasoning: "string (explanation for user)"
      optimal_time_slot: "ISO 8601 range (suggested execution time)"
      confidence: "float (0-1, AI confidence in suggestion)"

logique_interne:
  étapes:
    1: "Feature extraction (due_date urgency, duration, category weights)"
    2: "Context analysis (calendar conflicts, energy alignment, location suitability)"
    3: "Historical pattern matching (similar tasks completion time/success rate)"
    4: "ML model inference (gradient boosting trained on user feedback)"
    5: "Post-processing (ensure no conflicts, respect user constraints)"
    6: "Explainability generation (reason for each priority decision)"

contraintes_techniques:
  performance: "< 2s response time for up to 100 tasks"
  memory: "< 50MB model size for mobile deployment"
  offline: "Core prioritization works offline with cached model"
  privacy: "No raw task data leaves device, only anonymized patterns"

critères_acceptation:
  scenarios:
    1:
      nom: "Urgent deadline prioritization"
      given: "5 tasks with 1 due tomorrow, others due next week"
      when: "Run prioritization at 9am"
      then: "Urgent task ranked #1 with high confidence + clear reasoning"
    2:
      nom: "Energy level consideration"
      given: "Mix of creative and administrative tasks + user energy=low"
      when: "Prioritization requested"
      then: "Administrative tasks ranked higher, creative tasks suggested for later"
    3:
      nom: "Historical pattern application"
      given: "Similar task previously took 2x longer than estimated"
      when: "New similar task prioritization"
      then: "Adjusted time estimation reflected in priority + reasoning"
```

#### Solution Phase 3 : Oracles Complets

```javascript
// Oracle Spécifié
function validateTaskPrioritization(input, output) {
  return {
    output_structure_valid: validatePrioritizedTaskStructure(output),
    priority_scores_valid: output.every(t => t.priority_score >= 0 && t.priority_score <= 1),
    rankings_sequential: validateSequentialRanking(output.map(t => t.priority_rank)),
    urgent_tasks_prioritized: validateUrgentTaskHandling(input.user_tasks, output),
    reasoning_provided: output.every(t => t.reasoning && t.reasoning.length > 10),
    confidence_realistic: output.every(t => t.confidence >= 0 && t.confidence <= 1),
    time_slots_feasible: validateTimeSlotFeasibility(output, input.user_context),
    no_duplicates: new Set(output.map(t => t.task_id)).size === output.length
  }
}

// Oracle Dérivé (Comparaison algorithmes)
function crossValidatePrioritization(baselineAlgo, mlAlgo, testCases) {
  testCases.forEach(testCase => {
    const baseResult = baselineAlgo.prioritize(testCase.input);
    const mlResult = mlAlgo.prioritize(testCase.input);
    
    // Les tâches urgentes doivent être top 3 dans les deux algos
    const urgentTasks = testCase.input.user_tasks.filter(isUrgent);
    urgentTasks.forEach(urgentTask => {
      const baseRank = baseResult.find(t => t.task_id === urgentTask.id).priority_rank;
      const mlRank = mlResult.find(t => t.task_id === urgentTask.id).priority_rank;
      assert(baseRank <= 3 && mlRank <= 3, `Urgent task not prioritized: ${urgentTask.title}`);
    });
  });
}

// Oracle Pseudo (Property-Based)
const taskPrioritizationProperties = [
  property("Urgent tasks always in top 20%", 
    (input, output) => {
      const urgentTasks = input.user_tasks.filter(t => isUrgent(t, input.user_context));
      const totalTasks = output.length;
      const top20Percent = Math.ceil(totalTasks * 0.2);
      return urgentTasks.every(urgentTask => 
        output.find(t => t.task_id === urgentTask.id).priority_rank <= top20Percent
      );
    }),
  
  property("Priority scores correlate with ranks", 
    (input, output) => {
      const sorted = output.sort((a, b) => a.priority_rank - b.priority_rank);
      for (let i = 1; i < sorted.length; i++) {
        if (sorted[i].priority_score > sorted[i-1].priority_score) {
          return false; // Violation: lower rank should have lower score
        }
      }
      return true;
    }),
  
  property("Time slots respect calendar conflicts", 
    (input, output) => {
      return output.every(task => {
        if (!task.optimal_time_slot) return true;
        return !hasCalendarConflict(task.optimal_time_slot, input.user_context.calendar_events);
      });
    }),
  
  property("Total estimated time <= available time", 
    (input, output) => {
      const totalTaskTime = output.reduce((sum, task) => {
        const originalTask = input.user_tasks.find(t => t.id === task.task_id);
        return sum + (originalTask.estimated_duration || 0);
      }, 0);
      const availableTime = calculateAvailableTime(input.user_context);
      return totalTaskTime <= availableTime * 1.2; // 20% buffer for estimation errors
    })
];

// Oracle Partiel (Invariants)
const taskPrioritizationInvariants = [
  invariant("Same number of tasks in/out", 
    (input, output) => input.user_tasks.length === output.length),
  
  invariant("All input task IDs present in output", 
    (input, output) => {
      const inputIds = new Set(input.user_tasks.map(t => t.id));
      const outputIds = new Set(output.map(t => t.task_id));
      return inputIds.size === outputIds.size && 
             [...inputIds].every(id => outputIds.has(id));
    }),
  
  invariant("Rankings are 1-indexed and complete", 
    (input, output) => {
      const ranks = output.map(t => t.priority_rank).sort((a, b) => a - b);
      const expectedRanks = Array.from({length: output.length}, (_, i) => i + 1);
      return JSON.stringify(ranks) === JSON.stringify(expectedRanks);
    })
];
```

## 🎓 **BONNES PRATIQUES PRD : CHECKLIST MAÎTRE**

### ✅ Pre-Writing Checklist

```markdown
□ Intention claire selon framework SMART-AI
□ Stakeholders identifiés et leurs besoins mappés
□ Contraintes techniques, business et temporelles définies
□ Métriques de succès quantifiables établies
□ Anti-patterns et exclusions explicitement listés
```

### ✅ Structure PRD Checklist

```markdown
□ Métadonnées complètes (version, domaines, complexité)
□ Architecture fonctionnelle avec dépendances
□ Chaque exigence a un ID unique et priorité
□ Spécifications en format YAML/JSON quand possible
□ Exemples concrets pour chaque input/output
□ Logique interne décomposée en étapes claires
□ Contraintes techniques quantifiées
□ Critères d'acceptation testables automatiquement
```

### ✅ Quality Assurance Checklist

```markdown
□ Oracles de vérification définis (minimum 2 types)
□ Properties invariants documentées
□ Scénarios de test edge cases inclus
□ Métriques de performance spécifiées
□ Considérations sécurité intégrées
□ Plan de fallback en cas d'échec IA
```

### ✅ AI-Readiness Checklist

```markdown
□ Aucune ambiguïté dans les spécifications
□ Exemples concrets pour chaque concept abstrait
□ Structure hiérarchique claire (modules → exigences)
□ Vocabulaire technique précis et consistant
□ Dépendances inter-exigences explicitement mappées
□ Format compatible avec parsing automatique
```

## 🎯 **NEXT STEPS : DE PRD À IMPLÉMENTATION**

**Vous avez maintenant maîtrisé l'art du PRD agentique !** 

### Transition vers Section 8-9

La prochaine étape critique : **comprendre comment structurer le contexte pour vos agents et construire les oracles de vérification qui garantissent la qualité**.

**Section 8-9** vous révélera :
- 🤖 Comment définir des rôles d'agents spécialisés
- 📝 Structurer des contextes exécutables (Claude.md optimisé)
- 🧪 Créer des test oracles automatisés  
- ⚡ Simuler des projets avec agents + oracles en action

**Le voyage continue : de la spécification parfaite à l'exécution agentique maîtrisée.** 