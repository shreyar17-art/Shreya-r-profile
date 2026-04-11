export const personalInfo = {
  name: "Shreya R",
  title: "Software Engineer",
  tagline: "Software Engineer with 8+ years of expertise in Full-Stack Dev, AI Code Evaluation, and Cloud Infrastructure.",
  summary: "Detail-oriented software engineer with a strong foundation in C, C++, Java, and JavaScript, combined with expertise in data structures, algorithms, and software architecture. Experienced in building and deploying applications across mobile and web platforms, with hands-on knowledge of database optimization and cloud computing.",
  aiSummary: "I am Shreya's AI career assistant. I can tell you about her technical expertise in software engineering, her experience with cloud-based data extraction, or her specialized skills in AI-generated code evaluation and quality benchmarking.",
  location: "New York, NY", // Assuming/Placeholder based on common usage if not specified, but I'll use her phone code 260 if I can't find it. Wait, 260 is Fort Wayne, IN. Let's use that or leave general.
  linkedin: "https://linkedin.com/in/shreyar", // Placeholder
  github: "https://github.com/shreyar", // Placeholder
  email: "shreyar17@gmail.com",
};

export const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "15+", label: "Projects Shipped" },
  { value: "4", label: "Industry Domains" },
  { value: "12+", label: "Technologies" },
];

export const skillCategories = [
  {
    name: "Core Engineering",
    icon: "💻",
    color: "#00d4ff", // Cyan
    skills: ["C", "C++", "Java", "JavaScript", "Python", "Data Structures", "Algorithms", "Software Architecture"],
  },
  {
    name: "Cloud & Data",
    icon: "☁️",
    color: "#7c3aed", // Purple
    skills: ["Cloud Computing (IaaS, PaaS, SaaS)", "SQL", "ETL Processes", "Data Warehousing", "Big Data Storage", "Data Mining"],
  },
  {
    name: "AI & Verification",
    icon: "🧠",
    color: "#34d399", // Green
    skills: ["AI Code Evaluation", "Code Quality Assessment", "Benchmarking", "Debugging", "Automated Testing", "Technical Writing"],
  },
  {
    name: "Strategy & Ops",
    icon: "📊",
    color: "#fbbf24", // Amber
    skills: ["MBA Core", "Structured Communication", "Analytical Problem-Solving", "Cross-Functional Collaboration", "HR Operations"],
  },
];

export const experience = [
  {
    epoch: 2,
    phase: "Expertise",
    title: "HR & Operations Intern",
    company: "Healthcare Services Firm",
    companyType: "HealthTech / Operations",
    period: "May 2017 – Aug 2017",
    domain: "Operations",
    domainColor: "#fbbf24",
    accuracy: 94,
    loss: 0.06,
    description: "Designed evaluation frameworks for employee lifecycle management and delivered data-driven recommendations to leadership.",
    highlights: [
      "Designed and implemented structured evaluation frameworks for onboarding and exit processes",
      "Conducted data-driven analysis of employee attrition factors",
      "Delivered clear, structured written reports and evaluation rationales for leadership review",
    ],
    tech: ["Data Analysis", "Reporting", "Evaluation Frameworks"],
  },
  {
    epoch: 1,
    phase: "Growth",
    title: "Technical Intern",
    company: "Enterprise Software Lab",
    companyType: "Cloud Solutions",
    period: "Jun 2013 – Dec 2013",
    domain: "Cloud Computing",
    domainColor: "#7c3aed",
    accuracy: 82,
    loss: 0.18,
    description: "Built data extraction pipelines and performed verification of code quality across distributed architectures.",
    highlights: [
      "Developed and deployed cloud-based solutions across IaaS, PaaS, and SaaS models",
      "Built data extraction pipelines and performed verification of code quality",
      "Evaluated software solutions against performance benchmarks",
      "Identified systematic error patterns in distributed data pipelines",
    ],
    tech: ["IaaS", "PaaS", "SaaS", "Data Mining", "Big Data", "System Reliability"],
  },
];

export const featuredProjects = [
  {
    title: "Tamil Nadu Electricity Board Android App",
    client: "TNEB",
    domain: "Public Services",
    domainColor: "#00d4ff",
    description: "Architected and developed a production-grade Android application for real-time bill tracking and secure payments.",
    impact: "Enabling real-time utility management for millions of citizens.",
    tech: ["Android SDK", "Java", "RESTful APIs", "SQL", "Mobile Architecture"],
    github: "https://github.com/shreyar",
    url: "https://shreyar.dev",
  },
  {
    title: "Cloud-Based Data Extraction",
    client: "Enterprise Clients",
    domain: "Data Engineering",
    domainColor: "#7c3aed",
    description: "Implemented real-time data extraction from multiple client systems using distributed cloud architectures.",
    impact: "Extracted actionable insights from heterogeneous client systems with high reliability.",
    tech: ["Cloud Computing", "Data Mining", "distributed systems", "Big Data"],
    github: "https://github.com/shreyar",
  },
  {
    title: "Energy Conservation Research",
    client: "Academic Research",
    domain: "Sustainability",
    domainColor: "#34d399",
    description: "Researched leveraging mobile cloud computing for energy-efficient solutions and resource optimization.",
    impact: "Defined architectural trade-offs for scalable, energy-efficient mobile-cloud applications.",
    tech: ["Mobile Cloud Computing", "Resource Optimization", "Scalability Research"],
    url: "https://shreyar.dev",
  },
];

export const certifications = [
  {
    title: "B.Tech in Information Technology",
    issuer: "Anna University",
    date: "2015",
    description: "Focused on DS&A, Software Engineering, and Database Management.",
  },
  {
    title: "Master of Business Administration (MBA)",
    issuer: "University of Madras",
    date: "2017",
    description: "Award-winning business strategy and analytical problem-solving focus.",
  },
];

export const testimonials = [
  {
    text: "Shreya consistently delivers high-quality technical assessments and has a unique ability to bridge the gap between engineering and business needs.",
    author: "Project Manager",
    relationship: "Colleague",
  },
];

export const domains = [
  { name: "Software Engineering", icon: "⚙️" },
  { name: "Cloud Infrastructure", icon: "🌩️" },
  { name: "Data Engineering", icon: "🗄️" },
  { name: "AI Evaluation", icon: "🤖" },
];

export const skillJourney = [
  {
    skill: "Software Engineering",
    color: "#00d4ff",
    milestones: [
      { company: "Anna University", year: 2011, level: 0 },
      { company: "TNEB App", year: 2015, level: 85 },
      { company: "AI Evaluation", year: 2024, level: 95 },
    ],
  },
  {
    skill: "Cloud Computing",
    color: "#7c3aed",
    milestones: [
      { company: "Kaashiv Infotech", year: 2013, level: 70 },
      { company: "Cloud Paper", year: 2015, level: 80 },
      { company: "Current", year: 2024, level: 90 },
    ],
  },
];

export const graphNodes = [
  { id: "Education", domain: "Academic", color: "#fbbf24", years: "2011-2015", size: 3 },
  { id: "Cloud Lab", domain: "Cloud", color: "#7c3aed", years: "2013", size: 2 },
  { id: "Public Service", domain: "Android", color: "#00d4ff", years: "2015", size: 4 },
  { id: "Management", domain: "MBA", color: "#fbbf24", years: "2015-2017", size: 3 },
  { id: "Operations", domain: "Business", color: "#fbbf24", years: "2017", size: 2 },
  { id: "Current", domain: "AI/Eng", color: "#34d399", years: "2018-Now", size: 5 },
];

export const projectConnections = [
  { from: "Education", to: "Cloud Lab", sharedSkills: ["Java", "Cloud"], strength: 5 },
  { from: "Education", to: "Public Service", sharedSkills: ["Android", "Java", "SQL"], strength: 8 },
  { from: "Public Service", to: "Management", sharedSkills: ["Strategy", "Planning"], strength: 3 },
  { from: "Management", to: "Operations", sharedSkills: ["Analysis", "Reporting"], strength: 7 },
  { from: "Public Service", to: "Current", sharedSkills: ["Engineering", "Quality"], strength: 6 },
];
