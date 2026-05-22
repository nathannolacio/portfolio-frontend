export type Project = {
  id: number;

  // Core info
  title: string;
  shortDescription: string;
  fullDescription: string;

  // Visuals
  preview: string;
  images?: string[];

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
  status: "In Progress" | "Completed" | "MVP";

  // Links
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Dev Portfolio Hub",
    shortDescription: "A modern portfolio website with project filtering and smooth interactions.",
    fullDescription:
      "A responsive portfolio website built to showcase design work, web apps, and case studies with animated section transitions.",
    preview: "",
    images: ["/projects/portfolio-hero.png", "/projects/portfolio-cards.png"],
    type: "Real Project",
    category: "Portfolio",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Responsive layout with project filtering",
      "Animated section entrance and card hover effects",
      "Sticky navigation with active section highlight"
    ],
    status: "Completed",
    githubUrl: "https://github.com/your-username/dev-portfolio-hub",
    liveUrl: "https://your-portfolio-domain.com"
  },
  {
    id: 2,
    title: "Study Notes Manager",
    shortDescription: "A lightweight learning tracker for study notes and progress.",
    fullDescription:
      "A study-focused single-page application that lets users save notes, group topics, and mark study milestones.",
    preview: "",
    images: ["/projects/study-notes-list.png", "/projects/study-notes-detail.png"],
    type: "Study Project",
    category: "System",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    features: [
      "Note creation with rich text support",
      "Topic tagging and study status tracking",
      "Local storage persistence for quick prototyping"
    ],
    status: "MVP",
    githubUrl: "https://github.com/your-username/study-notes-manager",
    liveUrl: ""
  },
  {
    id: 3,
    title: "E-commerce Product Grid",
    shortDescription: "A landing page clone focused on product discovery and checkout flow.",
    fullDescription:
      "A product-first landing page that demonstrates responsive grid design, product cards, pricing details, and CTA interactions.",
    preview: "",
    images: ["/projects/ecommerce-landing.png"],
    type: "Study Project",
    category: "Landing Page",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    features: [
      "Responsive product grid with filters",
      "Highlights section for features and testimonials",
      "Styled CTAs and pricing component"
    ],
    status: "Completed",
    githubUrl: "https://github.com/your-username/ecommerce-product-grid",
    liveUrl: "https://ecommerce-ui-clone.example.com"
  },
  {
    id: 4,
    title: "Blog CMS Prototype",
    shortDescription: "A content publishing prototype with editor and preview workflows.",
    fullDescription:
      "A blog CMS prototype that includes post creation, markdown preview, and a simple post listing interface.",
    preview: "",
    images: ["/projects/blog-cms-editor.png", "/projects/blog-cms-posts.png"],
    type: "Study Project",
    category: "CMS",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    features: [
      "Markdown editor with live preview",
      "Post list and draft state management",
      "API-backed post persistence"
    ],
    status: "In Progress",
    githubUrl: "https://github.com/your-username/blog-cms-prototype",
    liveUrl: ""
  }
];