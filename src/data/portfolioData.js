export const personalDetails = {
  name: "Durai Pandi",
  title: ".NET Backend Software Engineer",
  experienceYears: "~4 Years",
  location: "Chennai, India",
  email: "erduraipandii@gmail.com",
  phone: "+91 8754179662",
  linkedin: "https://linkedin.com/in/duraipandi",
  github: "https://github.com/duraipandi",
  tagline: "Backend-focused .NET Software Engineer with ~4 years of experience building, integrating, deploying and maintaining C#/.NET applications and communication platforms.",
  summary: "Backend-focused .NET Software Engineer with around 4 years of experience building, integrating, deploying and maintaining C#/.NET applications and communication platforms. Strong hands-on experience with C#, .NET 8, ASP.NET Core Web API, Entity Framework/EF Core, SQL, REST APIs, third-party API integrations, production troubleshooting and Linux-based deployments. Experience with AWS (including EC2/Lambda), CI/CD exposure, SMTP/email systems and automation.",
  stats: [
    { label: "Years Experience", value: "~4 Years" },
    { label: "Major Platforms", value: "2" },
    { label: "API Integrations", value: "10+" },
    { label: "Uptime SLA", value: "99.9%" }
  ]
};

export const skillsCategories = [
  {
    category: "Languages",
    icon: "Code2",
    skills: ["C#", "Python", "SQL"]
  },
  {
    category: "Backend",
    icon: "Server",
    skills: [".NET 8", ".NET Core", "ASP.NET Core Web API", "ASP.NET Web API", "REST APIs", "OOP"]
  },
  {
    category: "Data Access",
    icon: "DatabaseZip",
    skills: ["Entity Framework / EF Core", "Dapper", "LINQ"]
  },
  {
    category: "Databases",
    icon: "Database",
    skills: ["Microsoft SQL Server", "MySQL", "Database Design", "Query Optimization"]
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    skills: ["AWS (EC2/Lambda)", "CI/CD Exposure", "Production Deployment", "Automation"]
  },
  {
    category: "Servers",
    icon: "HardDrive",
    skills: ["Linux Server", "IIS", "Windows Server", "Nginx Exposure"]
  },
  {
    category: "Messaging / Email",
    icon: "Mail",
    skills: ["SMTP", "MailKit", "EASendMail", "Email/SMS Communication Platforms"]
  },
  {
    category: "Integrations",
    icon: "Workflow",
    skills: ["KEEPA API", "Amazon SP-API", "Google Sheets API", "Third-Party Integrations"]
  },
  {
    category: "Engineering Practices",
    icon: "CheckCircle2",
    skills: ["Production Support", "Root-Cause Analysis (RCA)", "Debugging", "Agile/Scrum"]
  }
];

export const experiences = [
  {
    company: "Resulticks",
    role: "Software Engineer",
    period: "Nov 2024 – Present",
    location: "Chennai, India",
    product: "RESUL — Customer Engagement & Communication Platform",
    highlights: [
      "Build and maintain C#/.NET-based client communication workflows for transactional and marketing email/SMS delivery.",
      "Work with modern .NET application components, REST APIs, database integrations and production support activities.",
      "Migrated the application's mail-sending library from EASendMail to MailKit, improving email delivery success rate and sending speed on Linux-hosted production servers.",
      "Designed and developed SMTP domain automation to streamline domain configuration and reduce manual setup effort for outbound mail delivery.",
      "Investigate and resolve client-reported issues and production bugs using root-cause analysis, minimizing disruption to communication delivery and system uptime.",
      "Deploy code changes and application updates directly to Linux production servers, coordinating releases with minimal downtime."
    ],
    tech: ["C#", ".NET 8", "MailKit", "SMTP Domain Automation", "Linux Production Deployment", "REST APIs", "Root-Cause Analysis"]
  },
  {
    company: "Agilensmart Technology Solutions Pvt Ltd",
    role: "Software Engineer",
    period: "Oct 2022 – Oct 2024",
    location: "Chennai, India",
    product: "Amazon Seller Tools — KEEPA Integration, Competitor Intelligence, Analyzer Tools",
    highlights: [
      "Built C#/.NET tools for Amazon FBA and merchant-fulfilled sellers, integrating KEEPA API, Amazon SP-API and Google Sheets API to automate product research, pricing and inventory workflows.",
      "Developed product history tracking that retrieves JSON queries/ASINs from user input, pulls data through KEEPA API and stores results in Google Sheets for analysis and reporting.",
      "Built stock and price management functionality integrated with Amazon SP-API to refresh inventory, pricing and stock status from live product data and monitor competitor listings.",
      "Generated automated feed files for Amazon Seller Central uploads and developed wholesale bulk analysis software to help sellers identify profitable products."
    ],
    tech: ["C#", ".NET Core", "KEEPA API", "Amazon SP-API", "Google Sheets API", "Microsoft SQL Server", "Dapper", "Bulk Data Processing"]
  }
];

export const education = {
  degree: "B.E. in Computer Science and Engineering",
  institution: "Anna University",
  location: "Chennai, Tamil Nadu",
  completionDate: "April 2022",
  cgpa: "7.98 / 10",
  highlights: [
    "Specialized in Object-Oriented Software Design, Database Systems, Computer Networks, and Software Engineering Principles.",
    "Graduated with a CGPA of 7.98 out of 10."
  ]
};

export const projects = [
  {
    id: "smtp-automation",
    title: "SMTP Domain Automation Engine",
    subtitle: "Enterprise Mail Onboarding & MailKit Migration",
    description: "High-throughput email delivery service developed with C#/.NET 8 and MailKit. Features automated domain verification, SPF/DKIM DNS check pipeline, and Linux background queue processing.",
    category: "Backend & Messaging",
    highlights: [
      "Migrated legacy EASendMail code to async MailKit engine",
      "Automated domain DNS validation pipeline reducing setup time",
      "Deploys seamlessly on Linux servers with zero-downtime reloads"
    ],
    tech: ["C#", ".NET 8", "MailKit", "SMTP", "Linux Server", "REST APIs"]
  },
  {
    id: "amazon-seller-suite",
    title: "Amazon Seller Analytics & SP-API Suite",
    subtitle: "Competitor Intelligence & Stock Synchronization Engine",
    description: "Automated seller toolkit built with C#/.NET integrating KEEPA API and Amazon Selling Partner API. Pushes price/rank history to Google Sheets and manages automated stock feeds.",
    category: "API Integration & Data Pipelines",
    highlights: [
      "Tracks historical price and sales rank metrics via KEEPA API",
      "Real-time Google Sheets API streaming integration",
      "Automated bulk analysis and Seller Central feed generation"
    ],
    tech: ["C#", ".NET Core", "KEEPA API", "Amazon SP-API", "Google Sheets API", "SQL Server", "Dapper"]
  },
  {
    id: "resul-communication-engine",
    title: "Transactional Email & SMS Workflow Engine",
    subtitle: "High-Reliability Customer Engagement Platform Component",
    description: "Scalable backend service component within the RESUL customer engagement platform handling automated transactional SMS/Email dispatches with real-time logs and root-cause telemetry.",
    category: "Microservices & Cloud",
    highlights: [
      "Handles scalable high-volume marketing & transactional dispatches",
      "Custom root-cause diagnostic telemetry and error recovery",
      "Integrated with Linux-based AWS EC2 deployment pipelines"
    ],
    tech: ["ASP.NET Core Web API", "C#", "AWS EC2", "EF Core", "Linux Server"]
  }
];
