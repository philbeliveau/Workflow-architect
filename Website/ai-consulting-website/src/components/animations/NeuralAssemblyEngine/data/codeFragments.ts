/**
 * Code Fragments Data
 * Text content for particles representing the transformation from chaos to mastery
 * French-first approach for Newcode's Quebec/Canadian market
 */

export const codeFragments = {
  chaos: [
    'function bugFix() {',
    '// TODO: fix later',
    'npm install --save-dev',
    'console.log("debug")',
    'git commit -m "fixes"',
    'Stack Overflow copy',
    'if (true) return false',
    '/* quick hack */',
    'var x = undefined;',
    'setTimeout(() => {}, 0)',
    'callback hell nested',
    'try { } catch(e) {}',
    'legacy code warning',
    'manual testing only',
    'no documentation',
    'hardcoded values',
    'copy-paste method',
    'technical debt grows',
    'endless refactoring',
    'breaking changes'
  ],

  recognition: [
    'AI agent pattern',
    'specification first',
    'structured approach',
    'automated testing',
    'code generation',
    'intelligent review',
    'systematic debugging',
    'documentation sync',
    'pattern recognition',
    'best practices',
    'architecture analysis',
    'quality metrics',
    'dependency mapping',
    'flow optimization',
    'error prediction',
    'performance tracking'
  ],

  learning: [
    'claude.orchestrate()',
    'agent.learn(context)',
    'swarm.coordinate()',
    'specification.validate()',
    'ai.generateCode()',
    'agent.review()',
    'flow.optimize()',
    'neural.connect()',
    'knowledge.transfer()',
    'pattern.apply()',
    'solution.adapt()',
    'context.understand()',
    'requirements.analyze()',
    'architecture.design()',
    'testing.automate()',
    'documentation.generate()'
  ],

  connection: [
    'swarm.coordinate()',
    'agents.collaborate()',
    'network.establish()',
    'data.synchronize()',
    'knowledge.share()',
    'patterns.recognize()',
    'solutions.emerge()',
    'efficiency.optimize()',
    'workflows.integrate()',
    'systems.connect()',
    'communication.establish()',
    'consensus.build()',
    'resources.allocate()',
    'tasks.distribute()',
    'feedback.process()',
    'adaptation.continuous()'
  ],

  mastery: [
    // French-first content for final mastery phase
    'Programmation Agentique',
    'Maîtrise Newcode',
    '3-5x Plus Rapide',
    'Flux IA-Natif',
    'Ingénierie Spécification',
    'Zéro Bug Atteint',
    'Documentation Parfaite',
    'Développement Autonome',
    'Équipes Transformées',
    'Productivité Maximale',
    'Innovation Continue',
    'Qualité Garantie',
    'Livraison Accélérée',
    'Architecture Optimale',
    'Tests Automatisés',
    'Maintenance Simplifiée'
  ]
};

// Additional fragments by category for more variety
export const codeFragmentsByCategory = {
  technical: {
    chaos: [
      'merge conflict hell',
      'undefined is not function',
      'memory leak detected',
      'race condition bug',
      'circular dependency',
      'npm security warning',
      'deprecated API usage',
      'browser compatibility',
      'production hot fix',
      'rollback procedure'
    ],

    recognition: [
      'design pattern identified',
      'SOLID principles',
      'clean architecture',
      'dependency injection',
      'separation of concerns',
      'single responsibility',
      'open-closed principle',
      'interface segregation',
      'inversion of control',
      'domain-driven design'
    ],

    learning: [
      'machine.learning.apply()',
      'neural.network.train()',
      'algorithm.optimize()',
      'data.structure.enhance()',
      'performance.measure()',
      'scalability.ensure()',
      'security.implement()',
      'accessibility.validate()',
      'SEO.optimize()',
      'PWA.configure()'
    ],

    connection: [
      'microservices.orchestrate()',
      'API.gateway.configure()',
      'database.synchronize()',
      'cache.invalidate()',
      'queue.process()',
      'webhook.trigger()',
      'event.stream()',
      'message.broker()',
      'load.balance()',
      'circuit.breaker()'
    ],

    mastery: [
      'Écosystème Maîtrisé',
      'Performance Optimale',
      'Sécurité Renforcée',
      'Scalabilité Assurée',
      'Maintenance Automatisée',
      'Monitoring Intelligent',
      'Déploiement Continue',
      'Qualité Mesurée'
    ]
  },

  business: {
    chaos: [
      'deadline pressure',
      'scope creep grows',
      'client expectations',
      'budget overrun',
      'team communication',
      'requirements unclear',
      'project delays',
      'resource conflicts',
      'priority changes',
      'manual processes'
    ],

    recognition: [
      'agile methodology',
      'sprint planning',
      'user stories',
      'acceptance criteria',
      'stakeholder alignment',
      'value proposition',
      'market research',
      'competitive analysis',
      'ROI calculation',
      'risk assessment'
    ],

    learning: [
      'process.standardize()',
      'workflow.automate()',
      'decision.datadriven()',
      'feedback.collect()',
      'metrics.track()',
      'improvement.continuous()',
      'training.provide()',
      'knowledge.document()',
      'best.practices()',
      'innovation.foster()'
    ],

    connection: [
      'team.synchronize()',
      'stakeholder.align()',
      'customer.satisfy()',
      'vendor.coordinate()',
      'partner.integrate()',
      'communication.streamline()',
      'collaboration.enhance()',
      'network.expand()',
      'relationship.build()',
      'ecosystem.create()'
    ],

    mastery: [
      'Équipes Alignées',
      'Clients Satisfaits',
      'Revenus Optimisés',
      'Coûts Maîtrisés',
      'Risques Minimisés',
      'Innovation Accélérée',
      'Marché Conquis',
      'Croissance Durable'
    ]
  }
};

/**
 * Get fragments for a specific phase
 */
export const getFragmentsForPhase = (phase: number): string[] => {
  switch (phase) {
    case 0: return codeFragments.chaos;
    case 1: return codeFragments.recognition;
    case 2: return codeFragments.learning;
    case 3: return codeFragments.connection;
    case 4: return codeFragments.mastery;
    default: return codeFragments.chaos;
  }
};

/**
 * Get fragments by category and phase
 */
export const getFragmentsByCategory = (
  phase: number,
  category: 'technical' | 'business'
): string[] => {
  const phaseNames = ['chaos', 'recognition', 'learning', 'connection', 'mastery'];
  const phaseName = phaseNames[Math.min(Math.max(phase, 0), phaseNames.length - 1)] as keyof typeof codeFragmentsByCategory.technical;

  return codeFragmentsByCategory[category][phaseName] || [];
};

/**
 * Get mixed fragments (combining general and category-specific)
 */
export const getMixedFragments = (
  phase: number,
  category?: 'technical' | 'business',
  ratio: number = 0.5 // Ratio of category-specific to general fragments
): string[] => {
  const generalFragments = getFragmentsForPhase(phase);

  if (!category) return generalFragments;

  const categoryFragments = getFragmentsByCategory(phase, category);

  // Mix fragments based on ratio
  const generalCount = Math.floor(generalFragments.length * (1 - ratio));
  const categoryCount = Math.floor(categoryFragments.length * ratio);

  return [
    ...generalFragments.slice(0, generalCount),
    ...categoryFragments.slice(0, categoryCount)
  ];
};

/**
 * Get random fragment for phase
 */
export const getRandomFragment = (phase: number, category?: 'technical' | 'business'): string => {
  const fragments = category ? getMixedFragments(phase, category) : getFragmentsForPhase(phase);
  return fragments[Math.floor(Math.random() * fragments.length)];
};

/**
 * Get progressive fragments (showing evolution through phases)
 */
export const getProgressiveFragments = (
  currentPhase: number,
  includeHistory: boolean = true
): string[] => {
  if (!includeHistory) {
    return getFragmentsForPhase(currentPhase);
  }

  // Include fragments from all phases up to current
  const allFragments: string[] = [];
  for (let i = 0; i <= currentPhase; i++) {
    allFragments.push(...getFragmentsForPhase(i));
  }

  return allFragments;
};

/**
 * Get localized fragments (French vs English)
 */
export const getLocalizedFragments = (
  phase: number,
  locale: 'fr' | 'en' = 'fr'
): string[] => {
  const fragments = getFragmentsForPhase(phase);

  // Phase 4 (mastery) already has French content as primary
  if (phase === 4 && locale === 'fr') {
    return fragments;
  }

  // For other phases or English locale, return standard fragments
  if (locale === 'en' || phase < 4) {
    return fragments;
  }

  // Future enhancement: add French translations for other phases
  return fragments;
};

/**
 * Fragment metadata for advanced features
 */
export const fragmentMetadata = {
  maxLength: Math.max(...Object.values(codeFragments).flat().map(f => f.length)),
  minLength: Math.min(...Object.values(codeFragments).flat().map(f => f.length)),
  avgLength: Object.values(codeFragments).flat().reduce((sum, f, _, arr) => sum + f.length / arr.length, 0),
  totalFragments: Object.values(codeFragments).flat().length,
  phaseDistribution: Object.entries(codeFragments).map(([phase, fragments]) => ({
    phase,
    count: fragments.length,
    avgLength: fragments.reduce((sum, f, _, arr) => sum + f.length / arr.length, 0)
  }))
};