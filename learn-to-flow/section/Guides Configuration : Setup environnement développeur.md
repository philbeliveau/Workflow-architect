

[Configuration d’environnements](https://www.notion.so/Configuration-d-environnements-22ba468eb4cc80eea867ed32278f51e2?pvs=21)

- [ ]  [How to set up claude-code and why use claude-code over other provider](https://youtu.be/6eBSHbLKuN0?list=TLGGtXuEst2cv6MwOTA3MjAyNQ)
    - [ ]  Difference in price
    - [ ]  Capability of claude-code over other model
    - [ ]  How to set up an efficient [CLAUDE.md](http://CLAUDE.md)
    - Resume de comment utiliser claude-code
        
        Pour utiliser Claude Code le plus efficacement possible, il est recommandé de suivre plusieurs pratiques et d'exploiter ses fonctionnalités clés. Voici un guide détaillé avec des exemples, basé sur les sources que vous avez fournies :
        
        **Comprendre Claude Code : Un assistant IA agential**
        
        Claude Code est un nouvel assistant IA conçu pour le développement de logiciels. Contrairement aux assistants qui complètent une ligne ou quelques lignes de code à la fois, Claude Code est **entièrement agential**. Il est destiné à :
        
        - 
        
        Construire des fonctionnalités entières.
        
        - 
        
        Écrire des fonctions ou des fichiers complets.
        
        - 
        
        Corriger des bogues entiers.
        
        Il s'intègre à tous vos outils existants (IDE comme VS Code, Xcode, JetBrains, Vim, Emacs) et fonctionne localement, via SSH distant ou Tmux, sans nécessiter de changement de flux de travail.
        
        **Configuration initiale et premières étapes**
        
        Lorsque vous ouvrez Claude Code pour la première fois, il est recommandé de suivre ces étapes pour configurer votre environnement :
        
        - 
        
        **Exécutez terminal setup** : Cela vous donnera Shift + Enter pour les nouvelles lignes, rendant l'utilisation plus agréable.
        
        - 
        
        **Utilisez theme** : Pour définir le mode clair ou sombre, ou les thèmes daltoniens.
        
        - 
        
        **Installez l'application GitHub** : En exécutant /install github app, vous pourrez mentionner Claude dans n'importe quel problème ou demande de tirage (pull request) GitHub.
        
        - 
        
        **Personnalisez les outils autorisés** : Cela vous évitera d'être invité à chaque fois à les approuver.
        
        - 
        
        **Utilisez la dictée pour les invites** : Si vous êtes sur macOS, activez la dictée dans les réglages système (Accessibilité > Dictée). Cela vous permet de parler vos invites, ce qui est très utile pour des invites spécifiques.
        
        Pour les nouveaux utilisateurs, **la meilleure façon de commencer est le Q&A basé sur le code**. Cela permet d'apprendre à formuler des invites et de comprendre les capacités de Claude Code. L'intégration de Claude Code pour le Q&A a permis de réduire le temps d'intégration technique chez Anthropic de deux à trois semaines à deux à trois jours.
        
        **Le Q&A basé sur le code : Explorer votre base de code**
        
        C'est la fonctionnalité la plus recommandée pour commencer avec Claude Code.
        
        - 
        
        **Posez des questions sur le code** :
        
        ◦
        
        *Exemple* : **« Comment cette pièce de code est-elle utilisée ? »**.
        
        ◦
        
        *Exemple* : **« Comment puis-je instancier cette chose ? »**. Claude Code ne se contentera pas d'une simple recherche textuelle ; il ira plus loin en trouvant des exemples d'instanciation ou d'utilisation, fournissant des réponses plus profondes qu'une simple documentation.
        
        - 
        
        **Interrogez l'historique Git** :
        
        ◦
        
        *Exemple* : **« Pourquoi cette fonction a-t-elle 15 arguments et pourquoi les arguments sont-ils nommés de cette manière étrange ? »**. Claude Code peut analyser l'historique Git pour comprendre l'introduction des arguments, qui les a introduits, et les problèmes liés aux commits. Vous n'avez qu'à demander : **« Cherche dans l'historique Git »** et il saura quoi faire.
        
        - 
        
        **Consultez les problèmes GitHub** : Claude Code peut utiliser web fetch pour récupérer le contexte des problèmes GitHub.
        
        - 
        
        **Faites un suivi de vos contributions** :
        
        ◦
        
        *Exemple* : **« Qu'ai-je livré cette semaine ? »**. Claude Code examinera le journal Git, identifiera votre nom d'utilisateur et vous fournira un récapitulatif de tout ce que vous avez livré.
        
        Il est important de noter que votre code reste local et n'est pas utilisé pour entraîner les modèles génératifs. Il n'y a pas d'indexation ou de base de données à distance, ce qui signifie qu'il n'y a **aucune configuration requise** : vous pouvez l'utiliser immédiatement après l'installation.
        
        **Modifier le code et l'approche agentiale**
        
        Une fois que vous êtes à l'aise avec le Q&A, vous pouvez passer à l'édition de code.
        
        - 
        
        **Les outils de Claude Code** : Il dispose d'un petit ensemble d'outils pour modifier des fichiers, exécuter des commandes bash et rechercher des fichiers. Il les enchaîne pour explorer le code, réfléchir et effectuer des modifications. Vous n'avez pas besoin de spécifier quel outil utiliser ; dites simplement ce que vous voulez faire, et il s'en chargera.
        
        - 
        
        **Commencez par la planification** : Pour des fonctionnalités importantes, il est fortement recommandé de **demander à Claude Code de réfléchir ou de faire un plan** avant d'écrire le code.
        
        ◦
        
        *Exemple* : **« Avant d'écrire du code, fais un plan »**. Cela évite qu'il ne construise quelque chose de complètement différent de ce que vous vouliez.
        
        - 
        
        **L'incantation commit push** : Claude Code est suffisamment intelligent pour interpréter cette commande et effectuera les actions suivantes :
        
        ◦
        
        Faire un commit.
        
        ◦
        
        Pousser sur la branche.
        
        ◦
        
        Créer une demande de tirage (pull request) sur GitHub. Il déterminera le format de commit et le fera correctement sans explications supplémentaires.
        
        - 
        
        **Faire itérer Claude Code avec des tests** : Pour obtenir les meilleurs résultats, **donnez à Claude Code un moyen de vérifier son travail**.
        
        ◦
        
        *Exemples* : Écrire des tests unitaires, prendre des captures d'écran avec Puppeteer ou l'émulateur iOS.
        
        ◦
        
        Si Claude Code peut itérer, il peut passer d'un "assez bon" résultat à un résultat presque parfait. Fournissez-lui un outil de rétroaction pour qu'il puisse voir son résultat et s'améliorer.
        
        **Optimiser avec le contexte et la personnalisation**
        
        Plus vous donnez de contexte à Claude Code, plus ses décisions seront intelligentes.
        
        - 
        
        **quad.md** : C'est le moyen le plus simple d'ajouter du contexte.
        
        ◦
        
        Créez un fichier nommé quad.md dans le répertoire racine de votre projet ; il sera automatiquement lu au début de chaque session.
        
        ◦
        
        **Contenu recommandé** : Commandes bash courantes, outils MCP, décisions architecturales, fichiers importants, guides de style.
        
        ◦
        
        **Gardez-le court** pour éviter de consommer trop de contexte.
        
        ◦
        
        **Partagez-le avec votre équipe** en le plaçant sous contrôle de version.
        
        ◦
        
        Vous pouvez avoir des quad.md locaux (non versionnés) pour vos préférences personnelles.
        
        ◦
        
        Des quad.md imbriqués dans les sous-répertoires seront automatiquement chargés lorsque Claude Code y travaillera.
        
        ◦
        
        Pour les entreprises, un quad.md peut être placé au niveau de la racine de l'entreprise pour un contexte partagé.
        
        - 
        
        **/commands** : Utilisez des commandes slash définies dans un fichier /commands (dans votre répertoire personnel ou versionné dans le projet) pour des flux de travail automatisés.
        
        ◦
        
        *Exemple* : label github issues peut étiqueter automatiquement les problèmes GitHub.
        
        - 
        
        **@mention des fichiers** : Mentionnez directement des fichiers ou des dossiers pour les intégrer au contexte.
        
        - 
        
        **Hiérarchie de configuration** : Au-delà de quad.md, vous pouvez utiliser des configurations de projet (spécifiques au dépôt Git), des configurations globales (pour tous vos projets) ou des politiques d'entreprise (déployées pour tous les employés).
        
        ◦
        
        Cela permet de **définir des permissions** (par exemple, autoriser automatiquement certaines commandes ou bloquer des URL spécifiques pour la sécurité).
        
        ◦
        
        Les **serveurs MCP** (Managed Chat Protocol) peuvent être configurés via un fichier mcp.json versionné pour partager des outils avec l'équipe (par exemple, un serveur Puppeteer pour les tests end-to-end).
        
        - 
        
        **Optimisez la configuration du contexte** : Prenez le temps de configurer quad.md, les serveurs MCP et d'autres éléments que votre équipe utilise. Configurez-les une seule fois et partagez-les pour un **effet de réseau** où tout le monde en bénéficie.
        
        ◦
        
        Utilisez la commande memory pour voir quels fichiers de mémoire sont chargés.
        
        ◦
        
        Utilisez # (dièse) pour demander à Claude Code de se souvenir de quelque chose, ce qui sera automatiquement incorporé dans quad.md.
        
        **Raccourcis clavier et flux de travail avancés**
        
        - 
        
        **Shift + Tab** : Accepte les modifications et active le mode d'acceptation automatique des modifications (les commandes bash nécessitent toujours une approbation). Utile quand Claude Code est sur la bonne voie ou lors d'itérations sur des tests unitaires.
        
        - 
        
        **Escape** : Arrête en toute sécurité ce que Claude Code est en train de faire. Vous pouvez l'utiliser pour affiner une modification suggérée.
        
        - 
        
        **Escape deux fois** : Revenir en arrière dans l'historique.
        
        - 
        
        **! (point d'exclamation)** : Exécuter une commande bash. La commande et sa sortie sont ajoutées à la fenêtre de contexte de Claude Code pour le tour suivant.
        
        - 
        
        **Ctrl + R** : Afficher la sortie complète ou la fenêtre de contexte.
        
        - 
        
        **Reprendre une session** : Démarrez Claude Code avec resume pour reprendre une session précédente.
        
        - 
        
        **Le SDK Claude Code (claude -p)** : Permet de construire des outils personnalisés, d'intégrer Claude Code dans des pipelines CI, des réponses aux incidents, etc. Il agit comme un "utilitaire Unix super intelligent" et peut être utilisé pour lire des journaux géants, traiter des données, etc..
        
        - 
        
        **Travail en parallèle** : Exécutez plusieurs sessions Claude Code simultanément ou utilisez des git worktrees pour isoler les tâches.
        
        **Fonctionnalités multimodales**
        
        Claude Code est **entièrement multimodal**. Bien que ce soit un outil en ligne de commande, vous pouvez :
        
        - 
        
        **Glisser-déposer des images**.
        
        - 
        
        Fournir un **chemin de fichier d'image**.
        
        - 
        
        **Copier-coller des images** directement. Ceci est utile pour donner des maquettes à Claude Code et lui demander de les implémenter, en le laissant itérer avec un serveur Puppeteer pour affiner le résultat.
        
        **Pourquoi un outil CLI ?**
        
        Le choix d'un outil CLI (interface en ligne de commande) plutôt qu'un IDE est dû à deux raisons principales :
        
        1.
        
        **Compatibilité universelle** : Chez Anthropic, les ingénieurs utilisent un large éventail d'IDE (VS Code, Zed, Xcode, Vim, Emacs), et le terminal est le dénominateur commun.
        
        2.
        
        **Anticipation de l'évolution des modèles** : La progression rapide des modèles IA suggère qu'à l'avenir, le besoin d'interfaces utilisateur complexes pourrait diminuer. Anthropic veut être prêt pour ce futur et éviter de surinvestir dans des couches d'interface utilisateur qui pourraient rapidement devenir obsolètes.
        
        En suivant ces conseils, vous pourrez maximiser l'efficacité de votre utilisation de Claude Code et l'intégrer profondément dans votre flux de travail de développement.
        
- [ ]  Quel ide on est le mieux de choisir ? VS code (contre jetbrain, cursor etc)
- [ ]  Roo-code
    - [ ]  Work with claude-code within Roocode
    - [ ]  Set up your provider & API key
    - [ ]  Set up: temperature + Context length + Number of file to read + Indexation of the code base + Gemini API
    - [ ]  Set up the MCP in roocode
    - [ ]  Set up the modes (file from [pheromind](https://www.youtube.com/watch?v=gthEtjZLQls&ab_channel=Pheromind))
        - set up details
            
            **Configuration des fichiers du projet** :
            
            ◦
            
            Dans vos projets, vous aurez besoin d'un **fichier room**.
            
            ◦
            
            Copiez le contenu fourni par la communauté Pheromind (vos room modes) dans ce fichier.
            
            ◦
            
            Créez un dossier docs. Le système peut le créer pour vous, mais il est recommandé de le faire manuellement.
            
            ◦
            
            Créez un dossier remotes dans votre projet.
            
            - 
            
            **Installation des outils MCP (Micro-Control Plane)** :
            
            ◦
            
            Vous aurez besoin de **Perplexity MCP**.
            
            ◦
            
            Vous aurez besoin de **Superbase MCP**. Superbase gère le système de mémoire actuellement.
            
            ◦
            
            Vous aurez besoin de l'outil **Context 7 MCP**.
            
            - 
            
            **Configuration de Superbase** :
            
            ◦
            
            Rendez-vous sur Superbase et **créez un projet**.
            
            ◦
            
            Identifiez l'ID de votre projet Superbase et **remplacez tous les ID de projet** correspondants dans votre fichier remote par cet ID.
            
            ◦
            
            Vous devrez avoir des tables : une table **project memories** et une table **user preferences**.
            
            ◦
            
            Pour gérer plusieurs projets sans frais supplémentaires (car un nouveau projet de base de données Superbase coûte 10 $), vous pouvez **changer les noms de vos tables** au lieu de l'ID du projet. Par exemple, nommez-les project_votre_projet et créez de nouvelles tables pour chaque projet (ex: project_mon_nouveau_projet, user_preferences_mon_nouveau_projet).
            
            - 
            
            **Configuration des modèles d'IA (Claude Max et Gemini)** :
            
            ◦
            
            **Abonnement Claude Max** : Vous pouvez utiliser votre abonnement Claude Max (Sonnet, Opus) pour les "workers" qui seraient normalement en "mode instruct".
            
            ◦
            
            **Gemini** : Il est recommandé d'utiliser Gemini (qui a une fenêtre contextuelle d'un million) pour vos **orchestrateurs et vos orchestrations**.
            
            ◦
            
            **Paramètres de température et de précision** :
            
            ▪
            
            Les modèles d'instruction Claude doivent être réglés à **0.25 de température** avec **80% de précision de différence**.
            
            ▪
            
            La réflexion Gemini est réglée à **0.7 de température**.
            
            ◦
            
            **Limites de lecture de fichiers contextuels** : Pheromind peut lire **jusqu'à 50 fichiers à la fois**.
            
            ◦
            
            **Condensation intelligente du contexte** :
            
            ▪
            
            En mode "thinking", le réglage est à **60%**.
            
            ▪
            
            En mode "instruct 2.5", il est à **40%**.
            
            ▪
            
            Pour Sonnet, il est à **60%** pour condenser la fenêtre contextuelle. Il est crucial de noter que dépasser la limite de 200 000 contextes avec Sonnet peut faire planter le modèle et arrêter l'automatisation.
            
            ◦
            
            **Mode "Power Steering"** : Assurez-vous qu'il est activé.
            
            - 
            
            **Indexation de la base de code (facultatif mais puissant)** :
            
            ◦
            
            Vous pouvez vectoriser votre base de code en utilisant **QR et OpenAI**.
            
            ◦
            
            C'est particulièrement utile si vous utilisez davantage Claude Max et que vous avez une fenêtre contextuelle plus petite.
            
            - 
            
            **Assignation des modèles aux composants de Pheromind** :
            
            ◦
            
            **Scribe** : Gemini thinking
            
            ◦
            
            **Orchestrators** : Gemini thinking (tous les orchestrateurs)
            
            ◦
            
            **Researcher** : Gemini thinking
            
            ◦
            
            **Spec Writer** : Claude
            
            ◦
            
            **High-level Test Researcher** : Gemini thinking
            
            ◦
            
            **Test Acceptance Writer** : Claude
            
            ◦
            
            **Pseudo Code Writer** : Claude
            
            ◦
            
            **Inspected Test Plan Converter** : Claude
            
            ◦
            
            **Tester** : Claude
            
            ◦
            
            **Coder** : Claude
            
            ◦
            
            **Debugger** : Gemini thinking
            
            ◦
            
            **Code Comprehension Agent** : Gemini thinking
            
            ◦
            
            **Security Reviewer and Optimizer** : Gemini thinking
            
            ◦
            
            **Doc Writer** : Gemini thinking
            
            ◦
            
            **Boilerplate** : Claude
            
            ◦
            
            **System Integrator** : Claude
            
            ◦
            
            **Devil's Advocate** : Gemini thinking
            
            ◦
            
            **Final Infrastructure Generator** : Claude
            
            ◦
            
            **Final Test Writer** : Claude
            
            ◦
            
            **Neo4j Knowledge Graphing Ingest** : Gemini thinking (vous pouvez aussi essayer Claude en le "promptant" correctement)
            
            - 
            
            **Démarrage du projet (Architecture Spark)** :
            
            ◦
            
            Le système suit une architecture Spark.
            
            ◦
            
            Commencez par un **Scribe** qui gère les mémoires et la documentation.
            
            ◦
            
            Il est recommandé de commencer un projet en **demandant au Scribe d'ingérer les informations** et de les écrire dans la base de données Superbase.
            
            ◦
            
            Ensuite, l'**Uber Orchestrator** commencera à orchestrer votre projet.
            
- [ ]  Example: Pheromind set up
    - [ ]  Recreer quelque chose comme ca: https://storage.googleapis.com/revex-communities-production/k2eR6uNDBQHbt3gKlRDJ/684cce10f1b44410c15e6f26/others/comm-media__23941813_Pheromind%20Setup%20Guide.pdf
    - [ ]  Recreer un post, fichier comme ca
        
        ![Capture d’écran, le 2025-07-09 à 17.00.58.png](attachment:3ae18737-4c22-4b45-84e4-53bf09fdd092:Capture_decran_le_2025-07-09_a_17.00.58.png)
        
    - [ ]  Avec des files à télécharger: https://insiders.pheromind.ai/communities/groups/pheromind/channels/Announcements-7vFuRC/posts/685a0c263f6144c9f8bc1fa6
    - [ ]  Et les exemples de PRD
- [ ]  How to set-up Claude-flow
    - [ ]  Setup windows + choose location to lunch a project
    - [ ]  Explication of each of the files in it:
        
        ![Capture d’écran, le 2025-07-09 à 17.05.46.png](attachment:118b65b9-6051-4df6-bb19-fb906e96aa60:Capture_decran_le_2025-07-09_a_17.05.46.png)
        
    - [ ]  How to add MCP
    - [ ]  How to set up your [CLAUDE.md](http://CLAUDE.md)
    - [ ]  How to start claude-flow
        - [ ]  claude-flow —help, etc
        - [ ]  Feeding PRD to claudeflow
    - [ ]  How to REstart a project
- [ ]  Which MCP to add
    - [ ]  Just show how to add the mcp
- [ ]  Test to make sure everything works
- [ ]  Diffrerence flowcode  1.0 2.0
- [ ]  Advanced technics
    - [ ]  manually setup a roodcode bugger to test code
    - [ ]  steps to build an app, deploy, (+check error in consol navigator, copy the error and iterate)