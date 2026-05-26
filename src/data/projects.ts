export type Project = {
  id: number;

  // Core info
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

  // Modal details
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
    title: "My Balance",
    shortDescription: "Personal finance management backend API built with Spring Boot.",
    fullDescription: "My Balance is a backend application designed to help users manage personal finances through transaction tracking, balance calculation, account management, and financial organization. The project was built using Spring Boot and follows a layered architecture focused on scalability, maintainability, and clean backend development practices.",
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
      "Transaction management",
      "Balance calculation",
      "User management",
      "Bank account management",
      "REST API architecture",
      "Environment-based configuration",
      "Layered backend architecture",
      "JWT authentication structure",
      "CI workflow integration"
    ],
    status: "In Progress",
    githubUrl: "https://github.com/meu-saldo",
  },
  {
    id: 2,
    title: "Lottus",
    shortDescription: "Academic library management platform built with Clean Architecture, Redis caching, and asynchronous processing.",
    fullDescription: "Lottus is a fullstack academic library management platform developed with a scalable backend architecture focused on performance, maintainability, and separation of concerns. The backend follows Clean Architecture principles and integrates Redis caching, RabbitMQ asynchronous processing, JWT authentication, and Dockerized infrastructure to support modern enterprise-like workflows.",
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
      "Clean Architecture",
      "Redis cache layer",
      "JWT authentication",
      "Asynchronous file processing",
      "RabbitMQ message broker integration",
      "Dockerized infrastructure",
      "Swagger API documentation",
      "REST API architecture",
      "Library loan management",
      "Digital catalog system",
      "Student and class management"
    ],
    githubUrl: "https://github.com/Lottus-Solutions",
    status: "Completed"
  },
  {
    id: 3,
    title: "Lottus Mobile",
    shortDescription: "Mobile-oriented reading management platform for parents and students.",
    fullDescription: "Lottus Mobile is a fullstack mobile platform designed to help parents track and manage their children's school reading activities. The ecosystem includes a secure backend API built with Spring Boot and a mobile application developed with React Native, focusing on authentication security, modular architecture, and scalable mobile-first experiences.",
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
      "Mobile application for parents",
      "JWT authentication",
      "Google OAuth2 login",
      "Refresh token rotation",
      "Loan management",
      "Student enrollment validation",
      "Swagger API documentation",
      "Flyway database migrations",
      "Modular architecture by feature",
      "Secure token storage",
      "Dockerized database setup",
      "Mobile-first user experience"
    ],
    githubUrl: "https://github.com/Lottus-Solutions",
    status: "In Progress"
  },
  {
    id: 4,
    title: "Kingdom Roster",
    shortDescription: "Church ministry scheduling system focused on organization, planning, and team management.",
    fullDescription: "Escala do Reino is a personal project created to help churches organize ministry schedules and manage volunteer teams more efficiently. The system is being developed with a scalable backend architecture, focusing on authentication, role-based access control, schedule management, and long-term architectural evolution using modern Spring Boot practices.",
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
      "JWT authentication",
      "Role-based access control",
      "Church ministry scheduling",
      "Member and team management",
      "Calendar visualization",
      "Dashboard overview",
      "REST API architecture",
      "Flyway database migrations",
      "Dockerized database setup",
      "Swagger API documentation",
      "Layered architecture",
      "Scalable backend foundation"
    ],
    githubUrl: "https://github.com/your-user/escala-do-reino",
    status: "In Progress"
  },
  {
  id: 5,
  title: "Portfolio",
  shortDescription: "Fullstack developer portfolio featuring a modular Spring Boot backend CMS and a modern frontend built with Next.js and React.",
  fullDescription: "This project was designed to showcase real-world fullstack development practices through a scalable portfolio platform. The frontend focuses on reusable UI components, responsive design, and modern user experience principles using Next.js and React. The backend is being developed with a modular monolith architecture using Spring Boot, providing a custom CMS experience for dynamically managing portfolio content, authentication, and contact email communication. The project emphasizes scalability, maintainability, clean organization, and real-world application architecture.",
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
    "Responsive landing page",
    "Reusable UI components",
    "Projects showcase section",
    "About section",
    "Contact section",
    "Modular monolith backend architecture",
    "RESTful API structure",
    "JWT authentication and authorization",
    "Protected admin routes",
    "Contact email service",
    "Portfolio CMS management",
    "Dynamic portfolio content management",
    "Environment-based configuration",
    "Dockerized application setup",
    "Scalable frontend and backend structure"
  ],
  githubUrl: "https://github.com/nathannolacio/portfolio-backend",
  status: "In Progress"
}
];