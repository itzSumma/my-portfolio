export const projects = [
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
  {
    slug: "keen-keeper",
    title: "KEEN KEEPER",
    category: "React Web Application",
    img: "/keen-keeper.png",
    description:
      "A responsive React application designed to help users organize and manage their friends efficiently. It provides an intuitive interface for adding, tracking, and visualizing friend-related data through interactive charts.",
    features: [
      "Friend Management",
      "Interactive Charts",
      "Responsive Design",
      "CRUD Operations",
      "Modern UI",
    ],
    tech: [
      "React 19",
      "React Router 7",
      "Tailwind CSS 4",
      "DaisyUI",
      "Recharts",
    ],
    liveUrl: "https://keen-keeper-friendzone.netlify.app/",
    link: "https://keen-keeper-friendzone.netlify.app/",
    githubUrl: "https://github.com/itzSumma/Keen-Keeper",
    githubFrontend: "https://github.com/itzSumma/Keen-Keeper",
    challenges: [
      {
        title: "Interactive Data Visualization",
        problem:
          "Presenting friend statistics in a clear and responsive way without affecting the user experience.",
        solution:
          "Integrated Recharts to build dynamic, responsive charts and optimized component rendering for smooth interactions.",
      },
      {
        title: "State Management",
        problem:
          "Keeping the UI synchronized when users add, update, or remove friend information.",
        solution:
          "Managed application state efficiently with React hooks to ensure instant UI updates and a seamless user experience.",
      },
    ],
    futureImprovements: [
      "Search and filter for friend records",
      "Exporting charts and data summaries",
      "Calendar-based activity tracking",
      "Progress insights for long-term engagement",
      "Improved offline support for mobile use",
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
