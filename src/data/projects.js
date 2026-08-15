export const projects = [
  {
    slug: "pureyuna",
    title: "PureYuna — Full-Stack Skincare E-Commerce Platform",
    category: "Full-Stack Developer",
    img: "/projects/pureyuna.png",
    description:
      "Modern clean botanical skincare store with dynamic curated multi-step routine packages, proportional pricing engine, and role-based admin controls.",
    features: [
      "36-Product Multi-Category Catalog",
      "Curated Multi-Step Routine Packages",
      "Smart Cart Drawer & Pricing Engine",
      "Admin Management Suite",
      "Personalized Product Discovery",
      "Role-Based Admin & Auth",
      "RESTful API Architecture",
      "Responsive UI",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Neon DB",
      "Render",
      "Vercel",
    ],
    liveUrl: "https://pure-yuna-client.vercel.app/",
    link: "https://pure-yuna-client.vercel.app/",
    githubUrl: "https://github.com/itzSumma/PureYuna_Client",
    githubFrontend: "https://github.com/itzSumma/PureYuna_Client",
    githubBackend: "https://github.com/itzSumma/PureYuna",
    challenges: [
      {
        title: "Relational Data Modeling & Multi-table Relations",
        problem:
          "Structuring complex e-commerce entity relationships (Users, Orders, OrderItems, Products, Categories, Packages, Wishlists) while preventing data inconsistency and slow query performance.",
        solution:
          "Designed a normalized PostgreSQL schema using Prisma ORM with strict foreign key constraints, cascading rules, and indexed search attributes to ensure fast and consistent data retrieval.",
      },
      {
        title: "Secure Checkout, Stock & Serverless Connection Management",
        problem:
          "Preventing invalid quantities, pricing mismatches, and stock inconsistencies during checkout, alongside handling database connection pool exhaustion on cloud-hosted serverless PostgreSQL.",
        solution:
          "Moved critical checkout validation to the backend, verified stock using Prisma transactions, and integrated Neon PostgreSQL connection pooling to maintain low latency under concurrent traffic spikes.",
      },
      {
        title: "Role-Based Admin & Production Deployment Pipeline",
        problem:
          "Protecting administrative routes from unauthorized access and managing automated database migrations with CORS handshake policies during live deployment on Render.",
        solution:
          "Implemented JWT-based authentication with strict role authorization, automated build-time Prisma migrations on Render, and configured centralized production CORS headers.",
      },
    ],
    futureImprovements: [
      "Personalized skincare recommendations based on user skin profiles",
      "Online payment gateway integration (Stripe / SSLCommerz)",
      "Customer review and product rating system",
      "Advanced admin analytics and real-time sales dashboard",
      "Redis caching layer for top-selling products and frequent queries",
      "Real-time stock inventory tracking & webhook notifications",
      "AI-powered skincare assistant",
    ],
  },
  {
    slug: "devarchify",
    title: "DEVARCHIFY",
    category: "Full Stack AI Platform",
    img: "/devarchify.png",
    description:
      "An AI-powered platform designed for developers to instantly generate project blueprints, database schemas, and folder structures, featuring a context-aware AI assistant.",
    features: [
      "AI Powered",
      "Context Chat",
      "Role Based Auth",
      "REST API",
      "Responsive",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "OpenRouter",
    ],
    liveUrl: "https://devarchify.vercel.app/",
    link: "https://devarchify.vercel.app/",
    githubUrl: "https://github.com/itzSumma/DevArchify",
    githubFrontend: "https://github.com/itzSumma/DevArchify",
    githubBackend: "https://github.com/itzSumma/DevArchify-Server",
    challenges: [
      {
        title: "Context-Aware AI Chat",
        problem:
          "Making the AI understand each user's previously saved blueprint and provide relevant responses.",
        solution:
          "Retrieved blueprint data from MongoDB and passed it to OpenRouter as contextual input, enabling personalized AI conversations.",
      },
      {
        title: "Role-Based Authentication",
        problem:
          "Securing dashboards and restricting access for users and administrators.",
        solution:
          "Implemented protected routes and role-based authorization to ensure users could only access permitted resources.",
      },
      {
        title: "Production Deployment",
        problem:
          "Frontend and backend communication failed after deployment due to CORS and environment configuration.",
        solution:
          "Configured production environment variables, updated CORS policies, and verified secure API communication.",
      },
    ],
    futureImprovements: [
      "AI-powered recommendations for blueprint refinement",
      "Performance optimization for larger user projects",
      "Notification system for AI responses and updates",
      "Dark mode refinements for better readability",
      "Multi-language support for global users",
    ],
  },
  {
    slug: "verdict-hub",
    title: "VERDICT HUB",
    category: "Full Stack Legal Service Platform",
    img: "/verdicthub.png",
    description:
      "A full-stack legal services platform that connects clients with verified lawyers. Users can search, hire, and securely pay lawyers, while role-based dashboards streamline workflows for clients, lawyers, and administrators.",
    features: [
      "Role-Based Authentication",
      "Verified Lawyer Profiles",
      "Secure Stripe Payments",
      "Hire Request Management",
      "Real-Time Status Updates",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "ImageBB",
    ],
    liveUrl: "https://verdict-hub-client.vercel.app/",
    link: "https://verdict-hub-client.vercel.app/",
    githubUrl: "https://github.com/itzSumma/VerdictHub-Client",
    githubFrontend: "https://github.com/itzSumma/VerdictHub-Client",
    githubBackend: "https://github.com/itzSumma/VerdictHub-Server",
    challenges: [
      {
        title: "Role-Based Authorization",
        problem:
          "Managing secure access and permissions across four different user roles: Client, User, Lawyer, and Admin.",
        solution:
          "Implemented protected routes and role-based authorization on both the frontend and backend to ensure users could only access features relevant to their role.",
      },
      {
        title: "Hiring & Payment Workflow",
        problem:
          "Synchronizing lawyer approval, hiring requests, and Stripe payments while preventing invalid payment attempts.",
        solution:
          "Built a controlled workflow where Stripe payments become available only after a lawyer accepts the request, ensuring a secure and reliable hiring process.",
      },
      {
        title: "Image Upload Management",
        problem:
          "Handling profile image uploads efficiently while keeping the application lightweight.",
        solution:
          "Integrated ImageBB for image hosting and implemented server-side validation to ensure reliable uploads and optimized storage.",
      },
    ],
    futureImprovements: [
      "Advanced lawyer filtering and search ranking",
      "Admin analytics dashboard for platform insights",
      "In-app notifications for status changes",
      "Better payment retry and refund handling",
      "Improved profile verification workflow",
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
