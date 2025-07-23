- Le problème avec Vibe coding
    
    Voici une version enrichie et sourcée de la section **🚫 La réalité "Vibe coder"**, avec des données concrètes pour appuyer chaque point :
    
    ---
    
    ## 🚫 La réalité "Vibe coder"
    
    La croyance selon laquelle les LLMs pourraient coder de manière totalement autonome est largement répandue… mais elle est **trompeuse et dangereuse**.
    
    ### 📉 Taux de réussite réel
    
    - Des études montrent que même les meilleurs LLMs atteignent environ 70–88 % de succès sur des tâches de codage benchmark, mais cela concerne des problèmes relativement simples et bien définis. Sur des tâches plus complexes (ou en usage réel), le taux chute bien en-dessous. Par exemple, StarCoder obtient moins de 35 % de pass@1 sur les benchmarks HumanEval/MBPP, contre 73 % pour ChatGPT (GPT‑3.5) et 88 % pour GPT‑4 ([maksimkrupenin.medium.com](https://maksimkrupenin.medium.com/genai-experiment-can-llms-generate-a-fully-functional-production-ready-application-ab645ed1e5ee?utm_source=chatgpt.com), [mapsworkshop.github.io](https://mapsworkshop.github.io/assets/LLM_Code_Error_Analysis_MAPS2023_camera-ready.pdf?utm_source=chatgpt.com)).
    - En situations "one-shot" sans suivi ou vérification, le code utilisable dès la première production est souvent sous les 20 % en production .
    
    ### 🐞 Erreurs courantes
    
    1. **Prompts flous ou hors contexte**
        - Sans contexte clair, les LLM écrivent un code "générique" qui ne correspond pas à l’architecture de votre projet ([medium.com](https://medium.com/%40adnanmasood/code-generation-with-llms-practical-challenges-gotchas-and-nuances-7b51d394f588?utm_source=chatgpt.com)).
    2. **Objectifs non définis ou incomplets**
        - Les LLM génèrent le code sur ce qu’ils "croient" devoir faire, souvent sans inclure les parties essentielles (cas d’usage, contrôles, tests…) .
    3. **Absence de vérification ou tests automatisés**
        - Jusqu’à 40 % des snippets générés par GitHub Copilot contiennent des vulnérabilités exploitables ([medium.com](https://medium.com/%40adnanmasood/code-generation-with-llms-practical-challenges-gotchas-and-nuances-7b51d394f588?utm_source=chatgpt.com)).
        - Une étude récente identifie des bugs typiques (pannes logiques, erreurs de syntaxe, cas limites non traités…) dans quasiment tous les extraits de code testés .
    
    ### ⚠️ Ce que cela signifie
    
    - Le code peut **compiler sans erreur**, mais **échouer silencieusement** ou provoquer des failles de sécurité .
    - Les LLM **hallucinent du code**, inventent des fonctions ou usages inexistants ([simonwillison.net](https://simonwillison.net/2025/Mar/2/hallucinations-in-code/?utm_source=chatgpt.com)).
    - La qualité varie énormément selon le prompt, le contexte et la rigueur de l’architecte humain pour guider l’agent ([confident-ai.com](https://www.confident-ai.com/blog/llm-evaluation-metrics-everything-you-need-for-llm-evaluation?utm_source=chatgpt.com)).
    
    ---
    
    ### ✅ Notre approche : remplacer le "vibe" par l’"agentic"
    
    - Nous montrons **comment structurer les prompts**, définir des **spécifications claires**, et mettre en place des **tests oracles** dès la première génération.
    - Nous introduisons l’**orchestration d’agents**, la **vérification continue**, la **mémoire de contexte**, et les **boucles de feedback** (test → debug automatique).
    - Bref : on ne se contente pas de "vibe", on **construit un système fiable, mesurable et évolutif**.
    
    Souhaites-tu que j’intègre ces points dans une proposition visuelle (schéma, slide) pour illustrer cette fracture ?
    

# **Problème à résoudre**

Les petites équipes techniques, les freelances et les agences sont aujourd’hui confrontés à un paradoxe :

> les outils d’IA promettent des gains de productivité majeurs, mais leur adoption est lente, fragmentée, et souvent décevante.
> 

### 1. Vibe coding n’arrive pas à satisfaire les attentes

- Les utilisateurs attendent des agents une autonomie complète sur des tâches complexes.
- En réalité, le taux de succès des prompts one-shot est très faible (<20%) pour du code exécutable en production.
- La cause : absence de structure, de vérification, de contexte.

### 2. Manque de connaissance sur comment définir le contexte des agents

- Les développeurs n’ont pas de méthode claire pour :
    - Définir les objectifs du projet
    - Spécifier les outputs attendus
    - Encadrer les agents avec des contraintes explicites (temps, format, validations)

### 3. Brouillard technologique

- Trop d'outils, trop vite : chaque mois une nouvelle plateforme ou technique IA.
- Difficulté à suivre les évolutions sans documentation claire.
- Frustration liée à des résultats inconstants, mal compris, difficilement réplicables.

### 4. Adoption chaotique de l’IA

- Testés : ChatGPT, Copilot, Claude...
- Mais toujours sans cadre, sans structure de prompt, sans vérification.
- Résultat : perte de temps, instabilité, méfiance envers l’IA.

### 5. Risque de se faire dépasser

- Les workflows stagnent pendant que les outils s’améliorent.
- Ceux qui n'adaptent pas leur façon de travailler deviennent moins compétitifs.
- Les équipes qui ne forment pas de "context-aware agents" seront dépassées par celles qui savent orchestrer et automatiser intelligemment.

---

## **Segment cible**

Notre offre s’adresse aux développeurs qui ont **déjà commencé à utiliser des outils d’IA** mais qui n’ont pas encore réussi à les transformer en véritable levier de croissance :

| Segment | Besoin principal |
| --- | --- |
| 👨‍💼 Freelance / Solo dev | Gagner du temps, livrer plus vite sans sacrifier la qualité. |
| 🤠 CTO de startup (1–5 devs) | Accélérer l'onboarding, scaler efficacement sans recruter davantage. |
| 🧠 Agence technique | Standardiser les livrables, optimiser la marge et améliorer la qualité globale. |
| 🏫 Groupe d’étudiants/écoles | Maîtriser les outils AI essentiels avant d'entrer sur le marché du travail. |
| 📚 Équipe de développeurs | Onboarding rapide, compréhension de codebase client, sprints plus prédictibles, sécurité accrue. |

---

## 💡 **Proposition de valeur**

**contextDev transforme votre stack de développement en machine de livraison AI-native. Nous ne développons pas le moteur, nous vous apprenons à comment conduire la voiture.**

> Nous installons, configurons et vous coachons sur les workflows IA les plus efficaces pour livrer plus vite, avec moins de fatigue, et sans embaucher plus.
> 

---

## 🛠️ Notre solution : transmettre les bons réflexes IA

Notre approche repose sur **la formation appliquée**, enrichie d’un accompagnement ponctuel et personnalisé. Nous ne déployons pas vos agents pour vous : nous vous enseignons à le faire vous-même, avec rigueur, autonomie et méthode.

### 🎯 Ce que nous faisons :

- **Analyse ciblée de vos opérations** : on s’assoit avec vous pour comprendre vos enjeux, vos outils et vos projets.
- **Évaluation du potentiel IA** : on identifie les points d'entrée les plus prometteurs pour l'automatisation ou l'orchestration.
- **Formation actionnable** : vous recevez nos frameworks, nos modèles de prompts, nos checklists de design, et nos meilleurs exemples de mise en place réussie.
- **Mise en situation guidée** : exemples concrets appliqués à vos cas réels, sans jamais toucher à votre infra.
- **Support asynchrone** : possibilité de nous recontacter plus tard pour débloquer des points spécifiques ou ajuster les pratiques.

### 🧩 Ce que nous ne faisons pas :

- Implémenter à votre place
- Dépendre d’une relation longue durée
- Prendre le contrôle de vos outils ou équipes

> Nous ne construisons pas vos agents, nous vous donnons le manuel, la méthode et les bons réflexes pour qu’ils vous obéissent vraiment.
> 

---

## 🚀 **Notre différenciation**

| contextDev | Alternatives actuelles |
| --- | --- |
| ✅ Implémentation sur-mesure, main dans la main | ❌ Plateformes de formation génériques |
| ✅ Résultats mesurables en 14–30 jours | ❌ Freelances ponctuels, pas de méthode globale |
| ✅ Spécialisé dev + agents AI + productivité | ❌ Consulting d’entreprise (trop cher / trop lent) |
| ✅ Outils continuellement mis à jours | ❌ Outils figés ou non adaptés aux petites équipes |

## ⚖️ **Pourquoi c’est le bon moment**

- L’adoption d’outils IA explose, **mais les bénéfices restent limités** car les devs sont livrés à eux-mêmes.
- Les leaders techniques savent que s’ils n’automatisent pas **maintenant**, ils prendront du retard.
- Les meilleures équipes de demain seront **“context-aware”** : rapides, coordonnées, outillées, augmentées.

---

## ⚛️ Évolution des outils IA

L'écosystème des outils IA a évolué rapidement, passant d'outils généralistes à des systèmes orchestrables et spécialisés. Comprendre cette évolution permet de situer la valeur de notre formation.

| Outil | Fonction principale | Points forts | Limites / Blind spots |
| --- | --- | --- | --- |
| ChatGPT | Assistant généraliste | Souple, conversationnel | Pas d’accès au codebase, pas de contexte persistant |
| Cursor | Éditeur IA contextuel | IDE + IA, context awareness | Pas d’orchestration, pas d'agents multiples |
| RooCode | IDE orchestrateur avec agents | Multi-modes, MCP, évolution constante | Complexité de configuration initiale |
| Claude-code | Exécuteur précis, orienté code | Structure logique, qualité de sortie | Plus cher, nécessite prompts experts |
| Claude-code + Orchestration d’agents | Système autonome et auto-améliorant | Fiabilité, coordination, productivité scalable | Requiert structuration claire du contexte, orchestration maîtrisée |

Cette évolution peut être illustrée par un **arbre de complexification** des outils, allant de l’assistant simple au système coordonné avec agents, context memory et tests oracles.

---

## 🚫 La réalité "Vibe coder"

Il existe une croyance largement répandue que les LLM peuvent coder seuls de manière autonome. C’est une **fausse conception**.

- **Taux de succès réel** : <20% des prompts one-shot donnent un résultat utilisable en production sans retouche.
- **Erreurs courantes** :
    - Prompt flou, non contextualisé
    - Objectifs non définis
    - Aucune vérification ou test des outputs

### 🏋️ Comparatif Vibe coder / Agentic coder

|  | Vibe Coder | Agentic Coder |
| --- | --- | --- |
| Usage | Prompt one-shot | Orchestration planifiée |
| Autonomie | Faible, piloté à la main | Elevée, agents guidés par des MCP |
| Résultats | Imprévisibles, variables | Prédictibles et mesurables |
| Évolutivité | Individuelle, éphémère | Systémique, cumulable |

---

## 👨‍💻 Le "Agentic Coder"

Le cœur de notre approche repose sur la **conception de prompts systémiques** et une **orchestration logique des agents**.

### Nos piliers :

- **Test Oracle** : l’agent peut-il vérifier lui-même la validité de sa sortie ?
- **Spécification claire** : objectifs, contraintes, métriques
- **Autonomie guidée via MCP** : assigner des rôles à chaque agent
- **Directive design** : prompts structurés et imbriqués

### 🧐 Quels Modèles LLM choisir?

| Rôle | Modèle | Avantages | Usage idéal |
| --- | --- | --- | --- |
| Planneur | Gemini 2.5 | Reasoning avancé, large context | Planification, spécification |
| Exécuteur | Claude-code | Code propre, rapide, langages variés | Implémentation, unit tests |
| Autres | Mix LLM | Mix Claude, GPT, Mixtral selon besoin | Orchestration adaptée aux cas d’usage |

### ❓ Comment choisir ?

- **Budget**
- **Capacité de raisonnement?**
- **Fenêtre de contexte?**
- **Déterministique ou créatif?** : projet exploratoire = température haute; projet critique = température basse, modèle cohérent

---

## 📄 Ce que nous proposons

> Nous ne construisons pas le moteur, nous vous apprenons à piloter la voiture.
> 
- Construire un **contexte exécutable** pour les agents (MCP)
- Écrire des **spécifications produit viables** pour LLMs
- Techniques d’**onboarding rapide sur un codebase** avec agents
- **Configuration d’environnement** : IDE, RooCode, MCP, paramètres optimisés
- Projets pratiques avec **design + prompt design + test oracles**
- Comprendre **comment les agents coordonnent, mémorisent, communiquent**
- S’assurer que la génération de code peut atteindre une qualité de production.
- Vous informer sur les “guardrails” nécessaires pour surveiller vos agents.
- **Aspects sécurité** : isolation, audit, logs, gouvernance

---

## 🔧 Stack et outils couverts

- **Orchestration d’agents :** Apprendre à concevoir des workflows multi-agents pour déboguer, coder et tester de manière collaborative, automatisée et itérative.
- **Exemples de spécifications produit (PRD) :** Construire des documents compréhensibles par des agents, pour garantir un alignement clair et exploitable.
- **Définition du contexte projet :** Formuler le cadre et les objectifs afin de réduire drastiquement le taux d’échec et aligner les agents sur les résultats attendus.
- **Spécifications techniques (SDD) :** Documenter les choix de design, d'architecture et les contraintes techniques dans un format structuré.
- **Agent Orchestration avancée :** Comprendre en profondeur la coordination des agents, leur gestion de mémoire et leur logique interne. Ne pas traiter l’IA comme une boîte noire.
- **MCP personnalisé :** Création et mise à jour d’un MCP selon les rôles, le contexte et les contraintes propres à votre projet.
- **Prise en main des outils :**
    - Cursor : éditeur IA augmenté avec des limites d’orchestration
    - Claude-code : moteur d’exécution fiable et structuré
    - RooCode : gestion multi-modes (chercheur, codeur, développeur, orchestrateur)
- **Et bien plus :** formation à la sécurité, architecture de projet, bonnes pratiques de gouvernance et déploiement.