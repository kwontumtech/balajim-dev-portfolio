import type { Project, SkillGroup, Certification, ExperienceEntry, SocialLink } from '@/types'

export const meta = {
  name: 'Balaji M',
  title: 'Senior Data Engineer',
  subtitle: 'Full-Stack Freelancer',
  tagline: 'Building data platforms that scale — and products that ship.',
  email: 'balajimuthai@yahoo.com',
  location: 'Bangalore, India',
  linkedin: 'https://linkedin.com/in/balaji-m-422285167',
  domain: 'https://balajim.dev',
}

export const about = {
  summary: `Senior Data Engineer with 5+ years of experience designing, building, and migrating scalable data platforms across Azure, AWS, and Databricks. Led a full cloud migration from AWS to Azure Databricks, re-architecting multi-terabyte pipelines onto a Medallion Lakehouse. Drove major performance gains — cutting key pipeline runtimes by up to 30x and reducing manual finance processes from 5 days to 3 hours (95% reduction). Beyond data engineering, I take on full-stack freelance projects, turning product ideas into production-ready web applications.`,
  highlights: [
    '30x pipeline performance improvement via Databricks optimization',
    '95% reduction in finance processing time (5 days → 3 hours)',
    'Led cloud migration of TB-scale data platform from AWS to Azure',
    'Built end-to-end platforms for fleet operations and e-commerce',
  ],
}

export const projects: Project[] = [
  {
    id: 'maf-migration',
    title: 'AWS → Azure Databricks Migration',
    client: 'Majid Al Futtaim (UAE)',
    description: 'Led end-to-end migration of the Entertainment division\'s data platform from AWS to Azure Databricks, re-architecting multi-terabyte workloads onto a Medallion Lakehouse (Bronze/Silver/Gold). Achieved 30x pipeline performance improvement.',
    techStack: ['Azure Data Factory', 'ADLS Gen2', 'Azure Databricks', 'PySpark', 'Delta Lake', 'Unity Catalog', 'Databricks Workflows', 'Azure Key Vault'],
    featured: true,
    highlights: [
      'Re-architected TB-scale pipelines onto Medallion Lakehouse (Raw → Bronze → Silver → Gold)',
      'Reduced pipeline runtime from ~30 minutes to ~1 minute (30x improvement)',
      'Built competitor intelligence pipeline with 5-minute micro-batch processing',
      'Implemented Unity Catalog for governed, role-based access across the lakehouse',
    ],
  },
  {
    id: 'tmrw-platform',
    title: 'End-to-End Data Platform',
    client: 'TMRW / ABFRL (House of Brands)',
    description: 'Architected and implemented a scalable data platform centralizing ingestion, transformation, and reporting across 8+ e-commerce and ERP systems (Shopify, Amazon, Flipkart, Myntra, Nykaa, Google Ads, Meta, Dynamics 365). Reduced finance processing from 5 days to 3 hours.',
    techStack: ['AWS Lambda', 'S3', 'EventBridge', 'Databricks', 'PySpark', 'Delta Lake', 'PostgreSQL', 'BigQuery', 'Great Expectations', 'Dynamics 365', 'Python'],
    featured: true,
    highlights: [
      'Integrated 8+ e-commerce and ERP systems via custom Python API connectors',
      'Built bidirectional Microsoft Dynamics 365 ↔ Databricks integration',
      'Reduced month-end finance processing from 5 days to 3 hours (95% reduction)',
      'Implemented Great Expectations data quality framework at Silver layer',
    ],
  },
  {
    id: 'pharmeasy-segmentation',
    title: 'Customer Segmentation Data Model',
    client: 'Pharmeasy (India)',
    description: 'Designed and built a customer segmentation data model for a leading e-pharmacy. Developed incremental data loading algorithms, optimized Hive scripts, and automated ETL workflows with CI/CD practices.',
    techStack: ['AWS', 'Apache Hive', 'Apache Airflow', 'Redshift', 'Alteryx', 'S3', 'EMR', 'MicroStrategy', 'Python'],
    featured: false,
    highlights: [
      'Developed custom algorithm for efficient incremental data loading from S3',
      'Built optimized Hive scripts with partitioned tables for high-performance reads',
      'Automated ETL with Alteryx; CI/CD via GitHub; scheduled DAGs on Airflow',
    ],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: 'Cloud & Data Platforms',
    skills: [
      { name: 'Azure Databricks', level: 'expert' },
      { name: 'AWS (S3, Lambda, Glue, EMR, Redshift)', level: 'expert' },
      { name: 'Azure Data Factory', level: 'expert' },
      { name: 'ADLS Gen2', level: 'expert' },
      { name: 'GCP / BigQuery', level: 'proficient' },
      { name: 'Snowflake', level: 'proficient' },
    ],
  },
  {
    category: 'Data Engineering',
    skills: [
      { name: 'PySpark / Spark SQL', level: 'expert' },
      { name: 'Python', level: 'expert' },
      { name: 'SQL', level: 'expert' },
      { name: 'Delta Lake', level: 'expert' },
      { name: 'Apache Airflow', level: 'proficient' },
      { name: 'Great Expectations', level: 'proficient' },
      { name: 'Medallion Architecture', level: 'expert' },
      { name: 'dbt', level: 'familiar' },
    ],
  },
  {
    category: 'Full-Stack Development',
    skills: [
      { name: 'React / Next.js', level: 'proficient' },
      { name: 'TypeScript', level: 'proficient' },
      { name: 'Node.js', level: 'proficient' },
      { name: 'PostgreSQL / MySQL', level: 'proficient' },
      { name: 'REST APIs', level: 'expert' },
      { name: 'Docker', level: 'proficient' },
      { name: 'GitHub CI/CD', level: 'proficient' },
    ],
  },
]

export const certifications: Certification[] = [
  { name: 'Databricks Certified Data Engineer Professional', issuer: 'Databricks' },
  { name: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services' },
  { name: 'SnowPro Core Certification', issuer: 'Snowflake', year: '2025' },
  { name: 'DP-203: Data Engineering on Microsoft Azure', issuer: 'Microsoft / Koenig' },
]

export const experience: ExperienceEntry[] = [
  {
    id: 'ada-asia',
    company: 'ADA-Asia',
    role: 'Senior Data Engineer',
    period: 'March 2021 – Present',
    location: 'Bangalore, India',
    projects: [
      {
        name: 'AWS → Azure Databricks Migration & Lakehouse Modernization',
        client: 'Majid Al Futtaim – Entertainment Division, UAE',
        techStack: ['ADF', 'ADLS Gen2', 'Azure Databricks', 'PySpark', 'Delta Lake', 'Unity Catalog'],
        bullets: [
          'Led end-to-end migration of the Entertainment division\'s data platform from AWS to Azure Databricks',
          'Re-architected workloads onto Medallion Lakehouse (Raw → Bronze → Silver → Gold) processing TBs of data',
          'Optimized pipelines via partitioning and cluster tuning — reduced runtime from ~30 min to ~1 min (30x)',
          'Engineered competitor intelligence pipeline with 5-min micro-batch for near real-time market monitoring',
          'Applied Unity Catalog for governed, role-based access; secured credentials via Azure Key Vault',
        ],
      },
      {
        name: 'End-to-End Data Platform',
        client: 'TMRW / ABFRL – House of Brands, India',
        techStack: ['AWS Lambda', 'S3', 'EventBridge', 'Databricks', 'PySpark', 'PostgreSQL', 'BigQuery', 'Great Expectations'],
        bullets: [
          'Architected scalable data platform centralizing ingestion and reporting across 8+ e-commerce and ERP systems',
          'Built custom Python API connectors for Shopify, Amazon, Flipkart, Myntra, Nykaa, Google Ads, Meta',
          'Engineered bidirectional Dynamics 365 ERP ↔ Databricks integration',
          'Reduced month-end finance processing from 5 days to 3 hours (95% reduction)',
          'Led the Data Engineering team with end-to-end technical ownership and mentored junior engineers',
        ],
      },
      {
        name: 'Customer Segmentation Data Model',
        client: 'Pharmeasy – Leading E-Pharmacy, India',
        techStack: ['AWS', 'Hive', 'Airflow', 'Redshift', 'Alteryx', 'EMR'],
        bullets: [
          'Developed custom algorithm for incremental data loading from AWS S3',
          'Built optimized Hive scripts with partitioned tables for high-performance reads across large datasets',
          'Automated ETL with Alteryx; implemented CI/CD via GitHub; scheduled DAGs on Apache Airflow',
        ],
      },
    ],
  },
  {
    id: 'happay',
    company: 'Happay Business Expense Solutions',
    role: 'Operations Executive',
    period: 'June 2019 – December 2019',
    location: 'Bangalore, India',
    projects: [
      {
        name: 'Business Operations',
        techStack: [],
        bullets: [
          'Managed business operations and expense workflows',
          'Developed foundational analytical and process optimization skills',
        ],
      },
    ],
  },
]

export const education = {
  degree: 'B.E in Engineering',
  institution: 'Sathyabama University',
  location: 'Chennai',
  year: '2018',
}

export const socialLinks: SocialLink[] = [
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/balaji-m-422285167' },
  { platform: 'Email', url: 'mailto:balajimuthai@yahoo.com' },
  { platform: 'GitHub', url: 'https://github.com/balajim' },
]
