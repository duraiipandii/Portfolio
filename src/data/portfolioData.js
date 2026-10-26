export const personalDetails = {
  name: "Durai Pandi",
  title: ".NET Developer",
  targetRoles: ".NET Developer / Software Engineer",
  experienceYears: "4 Years",
  location: "Chennai, India",
  preferredLocations: "Chennai, Bengaluru, Remote & Hybrid",
  email: "erduraipandii@gmail.com",
  phone: "+91 8754179662",
  linkedin: "https://linkedin.com/in/duraipandi",
  github: "https://github.com/duraipandi",
  tagline: ".NET Developer with 4 years of experience building C#/.NET backend systems for email/SMS communication and Amazon seller platforms. Seeking .NET Developer / Software Engineer roles.",
  summary: ".NET Developer with 4 years of experience building C#/.NET backend systems for email/SMS communication and Amazon seller platforms. Migrated a production mail-sending library to MailKit to improve delivery success and speed on Linux servers, and automated SMTP domain setup. Experienced in ASP.NET Core Web API, EF Core, SQL Server, third-party API integrations (KEEPA, Amazon SP-API, Google Sheets) and root-cause debugging of production issues. Seeking .NET Developer / Software Engineer roles.",
  stats: [
    { label: "Years Experience", value: "4 Years" },
    { label: "Target Roles", value: ".NET / Software Eng" },
    { label: "Production Platforms", value: "2 Enterprise" },
    { label: "Uptime SLA", value: "99.9%" }
  ]
};

export const jobPreferences = {
  status: "Actively Looking",
  statusBadge: "Available for .NET Developer & Software Engineer Roles",
  targetRoles: [
    ".NET Developer",
    "Software Engineer"
  ],
  locations: {
    primary: "Chennai, India",
    openTo: ["Chennai", "Bengaluru", "Remote", "Hybrid"]
  },
  experienceLevel: "4 Years (Backend Specialist)",
  pillars: [
    {
      title: "Core Backend & Web API",
      desc: "C#, .NET 9, ASP.NET Core Web API, OOP, RESTful microservices architecture.",
      highlight: ".NET 9 Web API"
    },
    {
      title: "High-Volume Messaging",
      desc: "MailKit async migration, SMTP domain DNS automation, transactional email/SMS.",
      highlight: "MailKit & SMTP"
    },
    {
      title: "Third-Party Integrations",
      desc: "Amazon SP-API pricing/inventory feeds, KEEPA historical ASIN analytics, Google Sheets API.",
      highlight: "Amazon SP-API & KEEPA"
    },
    {
      title: "Linux & Cloud Deployments",
      desc: "Deploying and managing production .NET services on Linux servers, AWS EC2/Lambda, zero-downtime releases.",
      highlight: "Linux Server & AWS"
    },
    {
      title: "Databases & Performance",
      desc: "SQL Server, MySQL, Redis, EF Core, Dapper, query optimization, high-throughput data processing.",
      highlight: "SQL Server & Redis"
    },
    {
      title: "Production Support & RCA",
      desc: "Rigorous root-cause analysis (RCA), debugging live production incidents, sustaining high SLA.",
      highlight: "RCA & Debugging"
    }
  ]
};

export const skillsCategories = [
  {
    category: "Core .NET & Languages",
    icon: "Code2",
    skills: ["C#", ".NET 9", ".NET Core", "ASP.NET Core Web API", "ASP.NET Web API", "REST APIs", "OOP"]
  },
  {
    category: "Data & Storage",
    icon: "Database",
    skills: ["Microsoft SQL Server", "MySQL", "Redis", "Entity Framework / EF Core", "Dapper", "LINQ", "SQL", "Query Optimization", "Database Design"]
  },
  {
    category: "Integrations & APIs",
    icon: "Workflow",
    skills: ["KEEPA API", "Amazon SP-API", "Google Sheets API", "SMTP", "MailKit", "Third-Party API Integration", "JSON"]
  },
  {
    category: "Cloud, Servers & DevOps",
    icon: "Cloud",
    skills: ["AWS (EC2, Lambda)", "Linux Server", "IIS", "Windows Server", "CI/CD (exposure)", "Production Deployment"]
  },
  {
    category: "Engineering & Reliability",
    icon: "CheckCircle2",
    skills: ["Production Support", "Root-Cause Analysis (RCA)", "Debugging", "High Availability", "SLA Maintenance"]
  }
];

export const experiences = [
  {
    company: "Resulticks",
    role: "Software Engineer",
    period: "Nov 2024 – Present",
    location: "Chennai, India",
    product: "RESUL – Customer Engagement & Communication Platform",
    summary: "Building and deploying high-scale transactional and marketing communication backends on Linux servers.",
    highlights: [
      "Migrated the mail-sending library from EASendMail to MailKit, improving email delivery success rate and sending speed on Linux-hosted production servers.",
      "Designed and built SMTP domain automation that streamlines domain configuration and reduces manual setup effort for outbound mail delivery.",
      "Develop and maintain C#/.NET workflows, REST APIs and database integrations that deliver transactional and marketing email and SMS for client campaigns.",
      "Diagnose and resolve client-reported issues and production bugs through root-cause analysis, minimizing disruption to message delivery and system uptime.",
      "Deploy code changes and application updates to Linux production servers, coordinating releases to keep downtime minimal."
    ],
    tech: ["C#", ".NET", "REST APIs", "MailKit", "SMTP", "Linux", "ASP.NET Core Web API", "SQL Server"]
  },
  {
    company: "Agilensmart Technology Solutions Pvt Ltd",
    role: "Software Engineer",
    period: "Oct 2022 – Oct 2024",
    location: "Chennai, India",
    product: "Amazon Seller Tools – KEEPA Integration, Competitor Intelligence, Analyzer Tools",
    summary: "Architected automated C#/.NET tools for Amazon marketplace analytics, product tracking, and inventory synchronization.",
    highlights: [
      "Built C#/.NET tools for Amazon FBA and merchant-fulfilled sellers, integrating KEEPA API, Amazon SP-API and Google Sheets API to automate product research, pricing and inventory workflows.",
      "Developed a product history tracker that accepts JSON queries and ASINs, retrieves data through KEEPA API and stores results in Google Sheets for analysis and reporting.",
      "Implemented stock and price management with Amazon SP-API, refreshing inventory, pricing and stock status from live product data and monitoring competitor listings.",
      "Automated the generation of feed files for Amazon Seller Central uploads.",
      "Created wholesale bulk analysis software that helps sellers identify profitable products."
    ],
    tech: ["C#", ".NET", "KEEPA API", "Amazon SP-API", "Google Sheets API", "JSON", "SQL Server", "Dapper"]
  }
];

export const education = {
  degree: "B.E. in Computer Science and Engineering",
  institution: "Anna University",
  location: "Chennai, Tamil Nadu",
  completionDate: "April 2022",
  cgpa: "7.98 / 10",
  highlights: [
    "Comprehensive engineering curriculum covering Object-Oriented Software Design, Relational Database Management Systems (RDBMS), Data Structures, and Computer Networking.",
    "Graduated with a strong academic CGPA of 7.98 / 10 from Anna University."
  ]
};

export const projects = [
  {
    id: "resul-mailkit-engine",
    title: "MailKit Communication & SMTP Domain Automation",
    subtitle: "Enterprise Mail Pipeline & Linux Production Migration (RESUL)",
    description: "High-throughput asynchronous email dispatch engine built with C#/.NET. Migrated core delivery from EASendMail to MailKit on Linux servers, achieving superior delivery success and reduced latency. Features automated SMTP domain setup and DNS verification.",
    category: "Messaging & Linux Systems",
    highlights: [
      "Migrated production mail-sending engine to MailKit for Linux servers",
      "Designed SMTP domain automation eliminating manual DNS onboarding effort",
      "Handles high-concurrency transactional and marketing campaigns"
    ],
    tech: ["C#", ".NET 9", "MailKit", "SMTP", "Linux Server", "REST APIs", "RCA"]
  },
  {
    id: "amazon-seller-automation",
    title: "Amazon SP-API & KEEPA Intelligence Suite",
    subtitle: "Automated Marketplace Pricing & Inventory Analytics (Agilensmart)",
    description: "Comprehensive C#/.NET automation suite for Amazon FBA and merchant-fulfilled sellers. Features real-time stock and price synchronization via Amazon SP-API, ASIN history tracking via KEEPA API, and automated Google Sheets reporting feeds.",
    category: "Marketplace Automation & APIs",
    highlights: [
      "KEEPA API integration for deep historical price and sales rank analysis",
      "Live Amazon SP-API inventory and price synchronization engine",
      "Automated bulk analysis and Seller Central feed file generation"
    ],
    tech: ["C#", ".NET Core", "KEEPA API", "Amazon SP-API", "Google Sheets API", "SQL Server", "Dapper"]
  },
  {
    id: "dotnet8-webapi-architecture",
    title: "ASP.NET Core Web API & Linux Microservices",
    subtitle: "Scalable REST APIs, Redis Caching & SQL Server Optimization",
    description: "Enterprise backend architecture implementing clean separation of concerns, Entity Framework Core / Dapper data access, Redis caching, and resilient database indexing for sub-second query execution and 99.9% uptime SLA.",
    category: "Backend Architecture & Data",
    highlights: [
      "ASP.NET Core Web API with structured error handling & dependency injection",
      "Hybrid EF Core & Dapper architecture for optimal query performance",
      "Production deployment to Linux servers with root-cause diagnostic telemetry"
    ],
    tech: ["ASP.NET Core Web API", "C#", "EF Core", "Dapper", "SQL Server", "Redis", "Linux"]
  }
];

export const architectureBlueprints = [
  {
    id: "resul-flow",
    title: "RESUL Communication Platform Engine",
    role: "Resulticks (Nov 2024 – Present)",
    badge: "Production Linux Architecture",
    description: "End-to-end transactional and marketing email/SMS pipeline with MailKit engine, automated SMTP domain setup, and zero-downtime Linux deployment.",
    steps: [
      { step: "01", name: "Campaign Ingestion", detail: "REST APIs receive bulk transactional & marketing payloads from client campaigns" },
      { step: "02", name: "Domain Automation", detail: "Automated SMTP domain verification and DNS validation pipeline" },
      { step: "03", name: "MailKit Engine", detail: "Async MailKit service dispatches high-volume messages on Linux servers" },
      { step: "04", name: "Monitoring & RCA", detail: "Real-time delivery telemetry, bounce tracking, and root-cause analysis" }
    ]
  },
  {
    id: "amazon-flow",
    title: "Amazon Seller Automation & Intelligence Suite",
    role: "Agilensmart (Oct 2022 – Oct 2024)",
    badge: "E-Commerce Pipeline",
    description: "High-volume marketplace pricing, inventory tracking, and ASIN intelligence syncing with KEEPA, Amazon SP-API, and Google Sheets.",
    steps: [
      { step: "01", name: "ASIN Query Tracker", detail: "Accepts JSON queries and ASINs from user input and scheduled workers" },
      { step: "02", name: "KEEPA API Pipeline", detail: "Extracts historical price trends, sales rank, and competitor data" },
      { step: "03", name: "Amazon SP-API Sync", detail: "Live stock & price management refreshing directly from Amazon marketplace" },
      { step: "04", name: "Automated Exports", detail: "Streams reports into Google Sheets & generates Seller Central feed files" }
    ]
  }
];
