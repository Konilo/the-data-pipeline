export const content = {
  landing: {
    title: "Comprendre les Métiers de la Data",
    subtitle: "Un guide sur les rôles et les opérations du secteur des données",
    description: "Ce site explique le rôle du secteur professionnel de la Data et décrit les principaux métiers qui existent dans ce domaine : Data Engineer, Analytics Engineer, Data Analyst et Data Scientist.",
    cta: "Commencer",
  },
  intro: {
    title: "Introduction",
    content: `Nous produisons des données numériques chaque fois que nous utilisons un appareil numérique, soit comme sous-produit de nos actions – puisqu'elles sont suivies – soit comme produit principal – lorsque je tape ces caractères, ou lorsqu'un commercial enregistre des informations dans un système de gestion de la relation client.

Ces informations sont collectées pour apporter de la valeur, d'une manière ou d'une autre, à nous-mêmes, à un autre individu ou à une organisation qui les consommera. Cette ressource est précieuse car elle nous permet de prendre des décisions éclairées.`,
    schemaPlaceholder: "[TODO : Schéma du Cycle de Décision]",
    content2: `Les organisations (entreprises privées, institutions publiques ou organisations à but non lucratif) sont les principaux consommateurs d'informations numériques, en particulier les organisations technologiques dont l'activité est centrée sur les appareils numériques. Les données qu'elles collectent sont essentielles pour leur permettre de prendre des décisions sensées. Les organisations cherchent à tirer le maximum de valeur des données : cela nécessite de les collecter et de les transformer en informations exploitables pour l'organisation et/ou ses clients. La croissance (i) de la quantité de données collectées et (ii) de la complexité du traitement nécessaire pour les transformer en informations conviviales est ce qui fait naître la Data en tant que domaine professionnel distinct.`,
    examplesTitle: "Quelques exemples de questions auxquelles l'équipe Data d'une organisation peut répondre :",
    examples: [
      "Quelle a été la progression annuelle du nombre d'utilisateurs actifs sur notre application le mois dernier ?",
      "Ce changement dans notre produit (par exemple, une nouvelle fonctionnalité) augmente-t-il la satisfaction des utilisateurs ?",
      "Pourquoi la croissance de nos revenus B2B stagne-t-elle ?",
      "Quels clients sont susceptibles de partir dans les 6 prochains mois et auraient besoin de plus d'attention de la part de leur gestionnaire de compte ?",
    ],
  },
  pipeline: {
    title: "Découvrir le Pipeline de Données",
    intro: `Le but des **Professionnels de la Data** est de collecter les données, de les traiter pour en extraire la valeur et, surtout, de communiquer les informations résultantes de manière efficace aux utilisateurs finaux.

Ces opérations sont menées tout au long de ce que l'on appelle le **Pipeline de Données**. Le Pipeline de Données est constitué de conduits, d'usines de traitement et d'installations de stockage qui organisent le **Flux de Données** – le mouvement des données le long du pipeline.`,
    schemaPlaceholder: "[TODO : Schéma du Pipeline de Données]",
  },
  engineers: {
    title: "La Source du Flux de Données",
    subtitle: "Data Engineers",
    summary: {
      role: "Collecter les données brutes utiles pour la génération d'informations (après traitement en aval) à partir de diverses sources ; mettre en place l'infrastructure technique utilisée par l'équipe Data",
      tools: "Langages de programmation de script tels que Python utilisés pour construire les pipelines d'ingestion de données",
    },
    intro: `Les organisations souhaitent exploiter toutes les données pertinentes pour leurs activités. Par conséquent, le flux de données avec lequel les Professionnels de la Data travaillent provient de diverses sources. Selon l'organisation, les systèmes sources peuvent être :`,
    sources: [
      "Le logiciel que l'organisation possède, développe et distribue aux clients dont les actions sur le logiciel peuvent être suivies (par exemple YouTube pour Google) ;",
      "Les logiciels utilisés par l'organisation, en interne, pour mener ses opérations tels qu'un système de gestion de la relation client (par exemple, Pipedrive), où les interactions entre une entreprise et ses clients sont enregistrées, ou une plateforme d'emailing (par exemple, Mailjet) qui envoie des e-mails et mesure leur efficacité",
      "Des systèmes sources tiers fournissant des informations précieuses pour l'organisation telles que les prévisions météorologiques pour les organisations dont les opérations sont affectées par le climat (par exemple, l'agroalimentaire), ou les données financières pour les organisations affectées par les marchés financiers car elles achètent et/ou vendent des matières premières, par exemple.",
    ],
    content: `La collecte de données à partir des systèmes sources est le domaine des **Data Engineers**.

Ils développent le logiciel nécessaire pour collecter ces données de manière opportune et fiable – c'est le premier « conduit » du Pipeline de Données.

Chaque système source diffère des autres dans une dimension ou une autre. Ces dimensions sont :`,
    dimensions: [
      "L'authentification nécessaire pour obtenir la confiance du système source et accéder aux données,",
      "Le format des données,",
      "La vitesse et la fréquence à laquelle les données peuvent être collectées,",
      "La façon dont les données peuvent être lues, par exemple, est-il possible de lire uniquement certains enregistrements d'intérêt ou est-il seulement possible de télécharger un ensemble de données, qui peut être énorme, complètement ?",
      "Le fait que la structure des données peut changer au fil du temps alors que les opérateurs en aval du Pipeline de Données ont besoin de cohérence,",
      "Etc.",
    ],
    conclusion: `Les Data Engineers doivent naviguer dans tout cela.

Ils chargent ensuite les données brutes et non traitées sous forme de tables dans une base de données centralisant toutes les données dont l'organisation souhaite extraire de la valeur. Plusieurs conceptions de bases de données centrales existent, chacune avec ses spécificités, mais une variante courante est le Data Warehouse. Il s'agit de la principale « installation de stockage » du Pipeline de Données. Les Data Engineers sont également responsables de la configuration (choix de la technologie de base de données et déploiement de l'infrastructure nécessaire) et des performances (vitesses de lecture et d'écriture) de cette base de données.`,
  },
  analytics: {
    title: "Transformer le Bronze en Or",
    subtitle: "Analytics Engineers",
    summary: {
      role: "Nettoyer, réorganiser et documenter les données et calculer les indicateurs clés (spécifiques aux besoins en aval) afin que les Data Analysts, Data Scientists et autres utilisateurs finaux puissent les analyser efficacement",
      tools: "Un langage de programmation de manipulation de données tel que SQL",
    },
    intro: `En l'état, les données brutes ne sont pas prêtes à produire des informations exploitables. Les **Analytics Engineers** sont responsables de les transformer en ensembles de données nettoyés, remodelés et documentés, prêts à être utilisés par les Data Analysts et autres utilisateurs finaux en aval.

Les tables stockées dans un Data Warehouse sont souvent regroupées en couches successives. La première est appelée bronze et contient les données brutes fournies par les Data Engineers.

Les données sont ensuite traitées entre chaque couche afin d'atteindre progressivement l'état où elles sont prêtes à l'emploi : c'est un processus de raffinement progressif où les tables de la couche bronze sont transformées en tables des couches silver qui, à leur tour, sont encore traitées pour produire les tables de la couche gold, le produit final du data warehouse.

Ce processus est appelé transformation de données. Il se compose de plusieurs opérations.`,
    dataModeling: {
      title: "Modélisation des Données",
      content: `Les données brutes proviennent de divers systèmes sources non liés, chacun avec ses propres règles et idiosyncrasies. Par conséquent, un certain remodelage des données est nécessaire pour obtenir un ensemble de tables qui, malgré leur grand nombre, reste pratique pour les Data Analysts et autres utilisateurs finaux en aval : toutes les tables sont remodelées en utilisant un paradigme de structuration unifié (définissant ce que chaque table représente et comment elle se rapporte aux autres) et leurs contenus sont alignés (unités, devises, identifiants d'entité, etc. sont unifiés). Ce processus de conception est appelé **modélisation des données**.

C'est important car`,
      reasons: [
        "(i) cela améliore grandement la lisibilité des données et facilite les interconnexions entre les systèmes sources et leurs tables, d'où provient une grande partie de la valeur,",
        "(ii) cela permet au data warehouse de croître de manière saine, c'est-à-dire que davantage de systèmes sources et de tables peuvent être intégrés rapidement",
        "(iii) il est conçu sur la base de discussions avec les Data Analysts, Data Scientists et autres utilisateurs finaux afin de leur permettre de répondre au plus grand nombre possible de leurs questions facilement, c'est-à-dire sans avoir besoin de revenir aux données brutes et, dans la mesure du possible, sans avoir besoin de compétences techniques approfondies en manipulation de données.",
      ],
    },
    dataValidation: {
      title: "Validation des Données",
      content: `Les données brutes contiennent des informations invalides qui doivent être détectées et filtrées avant d'atteindre les utilisateurs finaux. Celles-ci peuvent être causées par des erreurs humaines, par des bugs quelque part dans le système source ou dans le Pipeline de Données, ou par un comportement frauduleux délibéré effectué dans l'un des systèmes sources. Ces invalidités prennent la forme d'enregistrements dupliqués, de fautes de frappe ou de valeurs incorrectes, par exemple. Les Analytics Engineers mettent en place des transformations de données pour gérer automatiquement les problèmes connus et ils déploient des tests de validation de données afin de détecter autant de problèmes restants que possible.`,
    },
    analyticalTransformations: {
      title: "Transformations Analytiques",
      intro: `En plus de remodeler et de nettoyer les données, il appartient également aux Analytics Engineers de réaliser un ensemble de transformations de données analytiques où des unités atomiques d'information (par exemple, l'utilisateur X a effectué l'action Y à la date Z) sont traitées en informations plus précieuses. Exemples :`,
      examples: [
        "Déterminer quel ensemble d'attributs était effectif pour chaque utilisateur à tout moment dans le passé en fonction des journaux de changement d'attributs atomiques ;",
        "Identifier les sessions d'activité des utilisateurs dans l'application en fonction des journaux d'actions utilisateur atomiques ;",
        "Plus largement, calculer un indicateur de performance clé donné utilisé par l'organisation.",
      ],
      conclusion: `L'objectif ici est d'effectuer toute transformation analytique fréquente et importante (par exemple, le calcul de métriques) une fois de manière rigoureuse, afin que les utilisateurs en aval puissent simplement utiliser une source unique de vérité au lieu d'effectuer cette transformation de manière moins performante et fiable, et potentiellement à plusieurs endroits, ce qui introduit des réalités parallèles où une métrique donnée n'est pas mesurée de la même manière d'un utilisateur final à l'autre.`,
    },
  },
  analysts: {
    title: "Fournir des Informations Exploitables",
    subtitle: "Data Analysts",
    summary: {
      role: "Fournir des informations exploitables spécifiques aux besoins actuels des utilisateurs finaux en utilisant les données traitées en amont",
      tools: "Un outil de business intelligence tel que Tableau, pour créer des tableaux de bord",
    },
    content: `Les **Data Analysts**

* Discutent avec les utilisateurs finaux à la recherche d'informations pour comprendre leurs besoins et les traduire en une analyse rigoureuse.
* Ils extraient des données de la couche gold et effectuent des manipulations spécifiques à la question à laquelle ils répondent.
* Enfin, ils communiquent les informations qu'ils obtiennent, généralement via des tableaux de bord ou des rapports et présentations ad hoc.

Avec les Data Scientists, ils sont responsables de l'un des derniers « conduits » du Pipeline de Données – la communication d'informations exploitables qui apportent de la valeur à l'organisation. Le plus souvent, ils apportent de la valeur en réduisant l'incertitude pour les décideurs.

Contrairement aux Data Engineers, Analytics Engineers et Data Scientists, leur travail est souvent situationnel : leurs analyses sont fréquemment ponctuelles et suivent les besoins actuels de l'organisation.`,
  },
  scientists: {
    title: "Faire des Prédictions",
    subtitle: "Data Scientists",
    summary: {
      role: "Automatiser les décisions à grande échelle en utilisant l'intelligence artificielle",
      tools: "Un langage de script tel que Python",
    },
    content: `Les **Data Scientists** sont responsables de la fourniture d'un type spécifique d'informations : des prédictions statistiques obtenues à l'aide de techniques d'intelligence artificielle.

Leur rôle est de :

* Comprendre le phénomène qu'ils essaient de prédire – en particulier les variables qui affectent le résultat (par exemple, la rétention d'un client pendant les 6 prochains mois) ;
* Employer les meilleures techniques statistiques pour prédire le résultat et créer un système de prédiction. Ce système de prédiction est ensuite utilisé pour automatiser la prise de décision à grande échelle en utilisant les données de la couche gold.

Faire des prédictions statistiques est complexe et coûteux, donc cela n'a de sens que lorsque l'enjeu en vaut la peine et que des décisions doivent être prises à grande échelle (par exemple, pour des millions d'utilisateurs).

Par conséquent, toutes les organisations n'ont pas besoin de Data Science.`,
  },
};
