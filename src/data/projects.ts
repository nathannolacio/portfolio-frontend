export type Project = {
  id: number;

  // Core info (translation keys)
  title: string;
  shortDescription: string;
  fullDescription: string;

  // Visuals
  preview: string;
  images?: { id: number; src: string }[];

  // Classification
  type: "Real Project" | "Study Project";
  category:
    | "System"
    | "CMS"
    | "Landing Page"
    | "Portfolio"
    | "Dashboard"
    | "API"
    | "Mobile App";

  // Stack
  technologies: string[];

  // Modal details (translation keys)
  features?: string[];

  // Status
  status: "In Progress" | "Completed";

  // Links
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "myBalance.title",
    shortDescription: "myBalance.shortDescription",
    fullDescription: "myBalance.fullDescription",
    preview: "/projects/meu-saldo/preview.png",
    type: "Study Project",
    category: "API",
    technologies: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "MySQL",
      "Maven",
      "React",
      "JavaScript",
      "Tailwind CSS"
    ],
    features: [
      "myBalance.features.transactionManagement",
      "myBalance.features.balanceCalculation",
      "myBalance.features.userManagement",
      "myBalance.features.bankAccountManagement",
      "myBalance.features.restApiArchitecture",
      "myBalance.features.environmentBasedConfiguration",
      "myBalance.features.layeredBackendArchitecture",
      "myBalance.features.jwtAuthenticationStructure",
      "myBalance.features.ciWorkflowIntegration"
    ],
    status: "In Progress",
    githubUrl: "https://github.com/meu-saldo",
  },
  {
    id: 2,
    title: "lottus.title",
    shortDescription: "lottus.shortDescription",
    fullDescription: "lottus.fullDescription",
    preview: "/projects/lottus/lottus-preview.png",
    type: "Study Project",
    category: "System",
    technologies: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
      "Redis",
      "RabbitMQ",
      "Docker",
      "Spring Data JPA",
      "React",
      "TailwindCSS"
    ],
    features: [
      "lottus.features.cleanArchitecture",
      "lottus.features.redisCacheLayer",
      "lottus.features.jwtAuthentication",
      "lottus.features.asynchronousFileProcessing",
      "lottus.features.rabbitMqIntegration",
      "lottus.features.dockerizedInfrastructure",
      "lottus.features.swaggerApiDocumentation",
      "lottus.features.restApiArchitecture",
      "lottus.features.libraryLoanManagement",
      "lottus.features.digitalCatalogSystem",
      "lottus.features.studentClassManagement"
    ],
    githubUrl: "https://github.com/Lottus-Solutions",
    status: "Completed"
  },
  {
    id: 3,
    title: "lottusMobile.title",
    shortDescription: "lottusMobile.shortDescription",
    fullDescription: "lottusMobile.fullDescription",
    preview: "/projects/lottus/lottus-preview.png",
    type: "Study Project",
    category: "Mobile App",
    technologies: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "OAuth2",
      "Google OIDC",
      "MySQL",
      "Flyway",
      "Swagger",
      "Docker",
      "React Native",
      "TailwindCSS"
    ],
    features: [
      "lottusMobile.features.mobileApplicationForParents",
      "lottusMobile.features.jwtAuthentication",
      "lottusMobile.features.googleOauth2Login",
      "lottusMobile.features.refreshTokenRotation",
      "lottusMobile.features.loanManagement",
      "lottusMobile.features.studentEnrollmentValidation",
      "lottusMobile.features.swaggerApiDocumentation",
      "lottusMobile.features.flywayDatabaseMigrations",
      "lottusMobile.features.modularArchitectureByFeature",
      "lottusMobile.features.secureTokenStorage",
      "lottusMobile.features.dockerizedDatabaseSetup",
      "lottusMobile.features.mobileFirstUserExperience"
    ],
    githubUrl: "https://github.com/Lottus-Solutions",
    status: "In Progress"
  },
  {
    id: 4,
    title: "kingdomRoster.title",
    shortDescription: "kingdomRoster.shortDescription",
    fullDescription: "kingdomRoster.fullDescription",
    preview: "/projects/escala-do-reino/escala-do-reino-preview.png",
    type: "Real Project",
    category: "System",
    technologies: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "JPA",
      "Hibernate",
      "Flyway",
      "Docker",
      "Docker Compose",
      "H2",
      "Swagger"
    ],
    features: [
      "kingdomRoster.features.jwtAuthentication",
      "kingdomRoster.features.roleBasedAccessControl",
      "kingdomRoster.features.churchMinistryScheduling",
      "kingdomRoster.features.memberTeamManagement",
      "kingdomRoster.features.calendarVisualization",
      "kingdomRoster.features.dashboardOverview",
      "kingdomRoster.features.restApiArchitecture",
      "kingdomRoster.features.flywayDatabaseMigrations",
      "kingdomRoster.features.dockerizedDatabaseSetup",
      "kingdomRoster.features.swaggerApiDocumentation",
      "kingdomRoster.features.layeredArchitecture",
      "kingdomRoster.features.scalableBackendFoundation"
    ],
    githubUrl: "https://github.com/your-user/escala-do-reino",
    status: "In Progress"
  },
  {
    id: 5,
    title: "portfolio.title",
    shortDescription: "portfolio.shortDescription",
    fullDescription: "portfolio.fullDescription",
    preview: "/projects/portfolio/portfolio-preview.png",
    type: "Real Project",
    category: "Portfolio",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT Authentication",
      "PostgreSQL",
      "Docker",
      "Maven",
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS"
    ],
    features: [
      "portfolio.features.responsiveLandingPage",
      "portfolio.features.reusableUiComponents",
      "portfolio.features.projectsShowcaseSection",
      "portfolio.features.aboutSection",
      "portfolio.features.contactSection",
      "portfolio.features.modularMonolithBackendArchitecture",
      "portfolio.features.restfulApiStructure",
      "portfolio.features.jwtAuthenticationAndAuthorization",
      "portfolio.features.protectedAdminRoutes",
      "portfolio.features.contactEmailService",
      "portfolio.features.portfolioCmsManagement",
      "portfolio.features.dynamicPortfolioContentManagement",
      "portfolio.features.environmentBasedConfiguration",
      "portfolio.features.dockerizedApplicationSetup",
      "portfolio.features.scalableFrontendBackendStructure"
    ],
    githubUrl: "https://github.com/nathannolacio/portfolio-backend",
    status: "In Progress"
  }
];