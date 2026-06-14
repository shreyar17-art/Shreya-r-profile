export const personalInfo = {
  name: "Shreya Rajasekar (Shreya R)",
  title: "Certified AI Code Reviewer & Software Engineering Evaluator",
  tagline: "Certified AI Code Reviewer & Software Engineering Evaluator specializing in LLM alignment, security auditing, and polyglot task engineering.",
  summary: "Detail-oriented software engineer and Certified AI Code Reviewer with a strong foundation in Python, Java, JavaScript/TypeScript, and C/C++, combined with expertise in data structures, algorithms, and software security. Experienced in evaluating code quality, debugging complex systems, and conducting Reinforcement Learning from Human Feedback (RLHF) and preference labeling assessments. Skilled in identifying OWASP Top 10 vulnerabilities in AI-generated code and writing structured, professional-grade evaluation rationales. Strong communicator with an MBA background, adept at collaborating with cross-functional teams to align LLMs for safety, helpfulness, and performance.",
  aiSummary: "I am Shreya's AI career assistant. I can tell you about her expertise as a Certified AI Code Reviewer, her RLHF evaluation work, security auditing, polyglot task engineering at CAUDAL, and her full-stack engineering background.",
  location: "United States",
  phone: "+1 (260) 802-1452",
  linkedin: "https://linkedin.com/in/shreyar",
  github: "https://github.com/shreyar",
  email: "shreyar17@gmail.com",
};

export const stats = [
  { value: "29+", label: "Production Tasks Authored" },
  { value: "9+", label: "Languages Evaluated" },
  { value: "OWASP", label: "Top 10 Security Audits" },
  { value: "150-300", label: "Word Justifications Authored" },
];

export const skillCategories = [
  {
    name: "AI & Code Evaluation",
    icon: "🧠",
    color: "#34d399",
    skills: [
      "RLHF & Preference Labeling",
      "Pairwise & Multi-Response Labeling",
      "150-300 Word Justification Writing",
      "AI-Generated Code Evaluation",
      "Constitutional AI & RLAIF",
      "Dataset Curation for Model Training",
      "Inter-rater Reliability Calibration",
    ],
  },
  {
    name: "Programming Stack",
    icon: "💻",
    color: "#00d4ff",
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "C",
      "C++",
      "Go",
      "Rust",
      "Ruby",
      "Bash",
      "SQL",
    ],
  },
  {
    name: "Security & Engineering",
    icon: "🛡️",
    color: "#fbbf24",
    skills: [
      "OWASP Top 10 Auditing",
      "SQLi, XSS, CSRF, SSRF, IDOR",
      "Secrets Management",
      "Code Review & Quality Assessment",
      "Big-O Algorithm Optimization",
      "Docker Sandbox Testing",
      "Git/GitHub PR Reviews",
    ],
  },
  {
    name: "Cloud & Data",
    icon: "☁️",
    color: "#7c3aed",
    skills: [
      "Cloud Models (IaaS, PaaS, SaaS)",
      "ETL & Star/Snowflake Schema",
      "OLAP/OLTP & Data Warehousing",
      "TCP/IP, DNS & IP Routing",
      "Big Data Storage & Data Mining",
      "Cisco Packet Tracer",
    ],
  },
];

export const experience = [
  {
    epoch: 4,
    phase: "Task Engineering",
    title: "AI Task Author & Software Engineering Evaluator",
    company: "CAUDAL",
    companyType: "LLM Benchmark Engineering (Contract)",
    period: "May 2026 - Present",
    domain: "LLM Benchmarking",
    domainColor: "#34d399",
    accuracy: 97,
    loss: 0.03,
    description: "Authored and optimized production-grade terminal-based programming tasks across multiple languages to benchmark state-of-the-art LLM capabilities.",
    highlights: [
      "Authored and optimized 29+ production-grade terminal-based programming tasks in C++, Rust, Go, Ruby, and Bash",
      "Engineered robust local sandbox environments using Docker and WSL2 to execute reproducible oracle solutions under strict offline conditions",
      "Developed comprehensive integration testing suites (pytest and Bash) to validate task constraints and formulate granular multipoint grading rubrics",
      "Benchmarked tasks via Snorkel stb CLI with multi-trial reference agent runs (GPT-5.2 and Claude Opus 4.6), ensuring ≤20% model success rate",
      "Managed full submission pipelines through static code analysis, instruction checks, and packaging scripts synced with PostgreSQL data pipelines",
    ],
    tech: ["C++", "Rust", "Go", "Ruby", "Bash", "Docker", "WSL2", "pytest", "Snorkel", "PostgreSQL"],
  },
  {
    epoch: 3,
    phase: "AI Alignment",
    title: "Certified AI Code Reviewer",
    company: "IntelliForge AI Team",
    companyType: "AI Quality Assurance",
    period: "2026",
    domain: "AI Evaluation & Alignment",
    domainColor: "#00d4ff",
    accuracy: 96,
    loss: 0.04,
    description: "Completed intensive certification covering LLM code evaluation, debugging, and reinforcement learning alignment methodologies.",
    highlights: [
      "Executed RLHF simulation workflows, ranking 3-4 candidate LLM responses against safety, helpfulness, and correctness rubrics",
      "Authored structured 150-300 word professional evaluations explaining preference decisions and recommending improvements",
      "Reviewed AI-generated code for OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF, SSRF, IDOR, secrets) across Python, Java, and JS/TS",
      "Performed systematic code correction, edge-case analysis, and Big-O performance optimizations for model outputs",
    ],
    tech: ["RLHF", "Preference Modeling", "OWASP Top 10", "Python", "Java", "JS/TS", "Debugging", "Big-O"],
  },
  {
    epoch: 2,
    phase: "Operations",
    title: "HR & Operations Intern",
    company: "Ecare India Pvt Ltd",
    companyType: "Corporate Operations",
    period: "2017",
    domain: "Operations",
    domainColor: "#fbbf24",
    accuracy: 92,
    loss: 0.08,
    description: "Designed and implemented structured evaluation frameworks for employee onboarding and exit processes.",
    highlights: [
      "Designed and implemented structured evaluation frameworks for employee onboarding and exit processes",
      "Conducted data-driven analysis of employee attrition factors and delivered actionable, well-documented recommendations",
      "Developed clear, structured written reports and evaluation rationales for leadership review",
    ],
    tech: ["Operations", "Process Management", "HR Analytics"],
  },
  {
    epoch: 1,
    phase: "Cloud",
    title: "Technical Intern",
    company: "Kaashiv Infotech",
    companyType: "Cloud Solutions",
    period: "2013",
    domain: "Cloud Computing",
    domainColor: "#7c3aed",
    accuracy: 90,
    loss: 0.10,
    description: "Developed and deployed cloud-based solutions across IaaS, PaaS, and SaaS models for enterprise client systems.",
    highlights: [
      "Developed and deployed cloud-based solutions across IaaS, PaaS, and SaaS models for enterprise client systems",
      "Built data extraction pipelines and performed verification of code quality across distributed architectures",
      "Evaluated software solutions against performance benchmarks and identified systematic error patterns",
      "Collaborated with cross-functional engineering teams on production deployment and system reliability",
    ],
    tech: ["Cloud (IaaS/PaaS/SaaS)", "Big Data", "Data Mining", "Distributed Pipelines"],
  },
];

export const featuredProjects: Array<{
  title: string;
  client: string;
  domain: string;
  domainColor: string;
  description: string;
  impact: string;
  tech: string[];
  github?: string;
  url?: string;
}> = [
  {
    title: "AI Code Reviewer & RLHF Evaluation",
    client: "IntelliForge AI Certification",
    domain: "AI Alignment",
    domainColor: "#34d399",
    description: "Executed RLHF workflows evaluating and ranking 3-4 candidate LLM responses against safety, helpfulness, and correctness rubrics, and audited AI-generated code for OWASP Top 10 vulnerabilities.",
    impact: "Formulated robust preference models and identified security vulnerabilities across Python, Java, and JavaScript/TypeScript model outputs.",
    tech: ["RLHF", "OWASP Top 10", "Preference Labeling", "Justification Writing"],
  },
  {
    title: "Tamil Nadu Electricity Board Android App",
    client: "TNEB",
    domain: "Mobile Dev",
    domainColor: "#00d4ff",
    description: "Architected and developed a production-grade Android application enabling real-time bill tracking, secure payment integration, and customer support functionality.",
    impact: "Delivered scalable mobile architecture with database schema, API layer, and end-to-end QA prior to deployment.",
    tech: ["Android SDK", "Java", "Mobile Architecture", "QA Testing"],
    github: "https://github.com/shreyar",
  },
  {
    title: "Cloud-Based Data Extraction & Deployment",
    client: "Kaashiv Infotech",
    domain: "Cloud Computing",
    domainColor: "#7c3aed",
    description: "Participated in the deployment of cloud solutions (IaaS, PaaS, SaaS) for real-time data extraction from heterogeneous client systems and applied data mining techniques.",
    impact: "Evaluated system performance and identified error patterns across distributed data pipelines.",
    tech: ["Cloud (IaaS/PaaS/SaaS)", "Big Data", "Data Mining", "ETL"],
  },
  {
    title: "Mobile Cloud Solution for Energy Conservation",
    client: "Technical Paper",
    domain: "Research",
    domainColor: "#fbbf24",
    description: "Researched and presented a technical paper on leveraging mobile cloud computing for energy-efficient solutions, analyzing trade-offs in architecture design and scalability.",
    impact: "Analyzed resource optimization and scalability trade-offs for cloud-based mobile applications.",
    tech: ["Mobile Cloud Computing", "Architecture Design", "Resource Optimization"],
  },
];

export const certifications = [
  {
    title: "Certified AI Code Reviewer",
    issuer: "IntelliForge AI Team",
    date: "Issued April 2026",
    description: "Completed intensive program covering LLM code evaluation, debugging, and reinforcement learning alignment methodologies. Verified Link: https://certs.intelliforge.tech/certificate/eyJjIjoiQUkgQ29kZSBSZXZpZXdlciBDb3Vyc2UiLCJkIjoiMjAyNi0wNC0xNiIsImkiOiJJbnRlbGForgeSBBSSBUZWFtIiwibiI6IlNIUkVZQSBSRUpBU0VLQVIifQ.a1fd0006fe3b2623c1b403c0905ff7d0e8452b9c04f4901f46ad9e6bcffc5fee",
  },
  {
    title: "Master of Business Administration",
    issuer: "University of Madras",
    date: "2017",
    description: "Advanced analytical problem-solving, structured communication, and cross-functional collaboration.",
  },
  {
    title: "Bachelor of Technology (Information Technology)",
    issuer: "Anna University",
    date: "2015",
    description: "Focused on data structures, algorithms, software engineering, database management, and cloud computing. Capstone: full-stack Android application.",
  },
];

export const testimonials = [
  {
    text: "Shreya demonstrates an exceptional eye for detail when reviewing code. Her evaluations are always structured, thorough, and highly actionable.",
    author: "Evaluation Lead",
    relationship: "Colleague",
  },
];

export const domains = [
  { name: "AI Alignment", icon: "🧠" },
  { name: "Benchmarking", icon: "📊" },
  { name: "Software Eng", icon: "💻" },
  { name: "Cloud & Net", icon: "☁️" },
];

export const skillJourney = [
  {
    skill: "Software Engineering",
    color: "#00d4ff",
    milestones: [
      { company: "Anna University", year: 2011, level: 0 },
      { company: "TNEB App", year: 2015, level: 75 },
      { company: "CAUDAL", year: 2026, level: 97 },
    ],
  },
  {
    skill: "AI & Code Quality",
    color: "#34d399",
    milestones: [
      { company: "Kaashiv Infotech", year: 2013, level: 30 },
      { company: "AI Review Cert", year: 2026, level: 90 },
      { company: "CAUDAL", year: 2026, level: 98 },
    ],
  },
];

export const graphNodes = [
  { id: "B.Tech IT", domain: "Academic", color: "#00d4ff", years: "2011-2015", size: 3 },
  { id: "Cloud Lab", domain: "Cloud", color: "#7c3aed", years: "2013", size: 2 },
  { id: "TNEB App", domain: "Android", color: "#00d4ff", years: "2015", size: 4 },
  { id: "MBA", domain: "Academic", color: "#fbbf24", years: "2015-2017", size: 3 },
  { id: "HR Intern", domain: "Operations", color: "#fbbf24", years: "2017", size: 2 },
  { id: "AI Review Cert", domain: "AI Review", color: "#00d4ff", years: "2026", size: 4 },
  { id: "CAUDAL", domain: "Benchmarking", color: "#34d399", years: "2026-Now", size: 5 },
];

export const projectConnections = [
  { from: "B.Tech IT", to: "Cloud Lab", sharedSkills: ["IT", "Cloud"], strength: 5 },
  { from: "B.Tech IT", to: "TNEB App", sharedSkills: ["Java", "Eng"], strength: 8 },
  { from: "B.Tech IT", to: "MBA", sharedSkills: ["Management", "Learning"], strength: 3 },
  { from: "MBA", to: "HR Intern", sharedSkills: ["Operations", "Reporting"], strength: 6 },
  { from: "B.Tech IT", to: "AI Review Cert", sharedSkills: ["Programming", "Security"], strength: 7 },
  { from: "AI Review Cert", to: "CAUDAL", sharedSkills: ["AI Evaluation", "Languages"], strength: 9 },
];
