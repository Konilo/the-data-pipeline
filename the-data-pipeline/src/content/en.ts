export const content = {
  landing: {
    title: "Understanding Data Professions",
    subtitle: "A comprehensive guide to roles and operations in the data sector",
    description: "This website explains the purpose of Data as a professional sector and describes the key roles that exist in this field: Data Engineer, Analytics Engineer, Data Analyst, and Data Scientist.",
    cta: "Start Learning",
  },
  intro: {
    title: "Introduction",
    content: `We produce numeric data whenever we use a numeric device either as a by-product of our actions – since they are tracked – or as their primary product – when I type those characters, or when a salesperson logs some information in a customer relationship management system.

This information is collected to provide value, in some way or another, to ourselves, another individual, or an organization that will consume it. This resource is valuable because it allows us to make informed decisions.`,
    schemaPlaceholder: "[TODO: Decision Making Cycle Schema]",
    content2: `Organizations (private companies, public institutions, or non-profit organizations), are major consumers of numeric information, especially technology-oriented organizations whose business is centered on numeric devices. The data they collect is essential for them to be able to make sensible decisions. Organizations are looking to draw as much value as possible from data: this requires collecting it and turning it into actionable insights for the organization and/or its customers to use. The growing (i) amount of data that gets collected and (ii) complexity of the processing required to turn it into user-friendly information is what gives rise to Data as a distinct professional field.`,
    examplesTitle: "Some examples of the questions the Data team in an organization may answer:",
    examples: [
      "What was the YoY progression of the number of active users on our app last month?",
      "Does this change in our product (e.g., a new feature) increase user satisfaction?",
      "Why is our B2B revenue growth plateauing?",
      "Which customers are likely to churn in the next 6 months and would need more attention from their account manager?",
    ],
  },
  pipeline: {
    title: "Discovering the Data Pipeline",
    intro: `The purpose of **Data Professionals** is to collect data, process it to extract its value, and, most importantly, communicate the resulting information in an efficient way to end users.

Those operations are conducted throughout what is called the **Data Pipeline**. The Data Pipeline is made of conduits, processing plants, and storage facilities which organize the **Data Flow** – the movement of data along the pipeline.`,
    schemaPlaceholder: "[TODO: Data Pipeline Schema]",
  },
  engineers: {
    title: "The Source of the Data Flow",
    subtitle: "Data Engineers",
    summary: {
      role: "Collect raw data that is useful for insights generation (after downstream processing) from a diversity of sources; setup the technical infrastructure used by the Data team",
      tools: "Scripting programming languages such as Python used to build the data ingestion pipelines",
    },
    intro: `Organizations wish to leverage any data relevant to their activities. Therefore, the flow of data Data Professionals deal with originates from various sources. Depending on the organization, the source systems can be:`,
    sources: [
      "The software the organization owns, develops, and distributes to clients whose actions on the software may be tracked (e.g. YouTube for Google);",
      "Software used by the organization, internally, to conduct its operations such as a customer relationship management system (e.g., Pipedrive), where the interactions between a company and its customers are logged, or an emailing platform (e.g., Mailjet) which sends emails and measures their effectiveness",
      "Third-party sources systems providing information which is valuable to the organization such as weather forecasts for organizations whose operations are affected by the climate (e.g., agri-food), or financial data for organizations which are affected by financial markets because they buy and/or sell commodities, for instance.",
    ],
    content: `The collection of data from source systems is the realm of **Data Engineers**.

They develop the software necessary to collect this data in a timely and reliable manner – this is the first "conduit" of the Data Pipeline.

Each source system differs from the others in a dimension or another. Those dimensions are:`,
    dimensions: [
      "The authentication necessary to get the source system's trust and gain access to the data,",
      "The format of the data,",
      "The speed and frequency with which the data can be collected,",
      "The way the data can be read e.g., is it possible to read only some records of interest or is it only possible to download a dataset, which may be huge, completely?",
      "The fact that the data's structure can change over time whereas downstream operators of the Data Pipeline need consistency,",
      "Etc.",
    ],
    conclusion: `Data Engineers need to navigate this.

They then load the raw, unprocessed data as tables into a database centralizing all the data the organization wants to extract value from. Several designs of central databases exist with each their specificities but a common variant is the Data Warehouse. This is the main "storage facility" of the Data Pipeline. Data engineers are also responsible for the setup (choice of the database technology and deployment of the necessary infrastructure) and performance (reading and writing speeds) of this database.`,
  },
  analytics: {
    title: "Turning Bronze into Gold",
    subtitle: "Analytics Engineers",
    summary: {
      role: "Clean, re-organize, and document the data and compute key metrics (specific to the downstream needs) so that Data Analysts, Data Scientists, and other end users can analyze it efficiently",
      tools: "A data manipulation programming language such as SQL",
    },
    intro: `As is, raw data is not ready to yield actionable insights. **Analytics Engineers** are responsible for turning it into cleaned, remodeled, documented data sets ready to be used by Data Analysts and other downstream end users.

The tables stored in a Data Warehouse are often grouped into successive layers. The first is called bronze and holds the raw data provided by Data Engineers.

The data is then processed between each layer in order to progressively reach the state where it is ready for use: it is a progressive refinement process where tables in the bronze layer are transformed into tables of the silver layers which, in turn, are further processed to yield the tables of the gold layer, the final product of the data warehouse.

This process is called data transformation. It consists of several operations.`,
    dataModeling: {
      title: "Data Modeling",
      content: `Raw data comes from various unrelated source systems each with its own rules and idiosyncrasies. Hence, some reshaping of the data is necessary to obtain a set of tables that, despite their sheer number, remains practical for Data Analysts and other end users downstream to work with: all tables are remodeled using a unified paradigm of structuration (defining what each table represents and how it relates to others) and their contents are aligned (units, currencies, entity identifiers, etc. are unified). This design process is called **data modeling**.

It is important because`,
      reasons: [
        "(i) it greatly improves the legibility of the data and facilitates the interconnections between the source systems and their tables, from which much value comes from,",
        "(ii) it allows the data warehouse to grow in a healthy manner i.e., more source systems and tables can be integrated rapidly",
        "(iii) it is designed based on discussions with Data Analysts, Data Scientists, and other end users in order to allow them to answer as many of their questions as possible easily, that is without the need to go back to the raw data and, as much as possible, without the need for deep technical data manipulation skills.",
      ],
    },
    dataValidation: {
      title: "Data Validation",
      content: `Raw data contains invalid information which needs to be detected and filtered out before it reaches end users. Those can be caused by human errors, by bugs somewhere in the source system or in the Data Pipeline, or by some deliberate fraudulent behavior carried out in one the source systems. Those invalidities take the form of duplicated records, typos, or wrong values, for example. Analytics Engineers put in place data transformations to automatically handle known issues and they deploy data validation tests in order to detect as many of the remaining issues.`,
    },
    analyticalTransformations: {
      title: "Analytical Transformations",
      intro: `On top of remodeling and cleaning the data, it is also the role of Analytics Engineers to carry out a set of analytical data transformations where atomic units of information (e.g., user X carried out action Y on date Z) is processed into more valuable information. Examples:`,
      examples: [
        "Determining what set of attributes were effective for each user at any point in the past based on atomic attribute change logs;",
        "Identifying in-app user activity sessions based on atomic user action logs;",
        "More broadly, computing a given key performance indicator used by the organization.",
      ],
      conclusion: `The goal here is to carry out any frequent, important analytical transformation (e.g., metric computation) once in a rigorous way, so that downstream users can simply use a single source of truth instead of carrying out that transformation in a less performant and reliable manner, and potentially in multiple places which introduces parallel realities where a given metric is not measured same way from an end user to the next.`,
    },
  },
  analysts: {
    title: "Providing Actionable Insights",
    subtitle: "Data Analysts",
    summary: {
      role: "Deliver actionable insights specific to the end users' current needs using the data processed upstream",
      tools: "A business intelligence tool such as Tableau, to make dashboards",
    },
    content: `**Data Analysts**

* Discuss with end users looking for insights to understand their needs and translate them into a rigorous analysis.
* They draw data from the gold layer and carry out manipulations specific to the question they are answering.
* Finally, they communicate the insights they obtain, usually via dashboards or ad-hoc reports & presentations.

With Data Scientists, they are responsible for one of the last "conduits" of the Data Pipeline – the communication of actionable insights that bring value to the organization. Most commonly, they bring value by reducing uncertainty for decision-makers.

Unlike Data Engineers, Analytics Engineers, and Data Scientists, their work is often situational: their analyses are frequently one-offs that follow the current needs of the organization.`,
  },
  scientists: {
    title: "Making Predictions",
    subtitle: "Data Scientists",
    summary: {
      role: "Automate decisions on a large scale using artificial intelligence",
      tools: "A scripting language such as Python",
    },
    content: `**Data Scientists** are responsible for the furniture of a specific type of insights: statistical predictions obtained using artificial intelligence techniques.

Their role is to:

* Understand the phenomenon they are trying to predict – especially the variables that affect the outcome (e.g., the retention of a customer for the next 6 months);
* Employ the best statistical techniques to predict the outcome and create a prediction system. This prediction system is then used to automate decision making on a large scale using data from the gold layer.

Making statistical predictions is complex and costly, so it only makes sense when what is at stake is worth it and decisions must be made on a large scale (e.g., for millions of users).

Hence, not all organizations have the need for Data Science.`,
  },
};
