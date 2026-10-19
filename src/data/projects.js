/**
 * Shared project definitions used by both the route-level detail pages and
 * the animated tabs in the Works component.
 */

export const projectsData = [
  {
    id: 1,
    slug: "garments-master",
    title: "Garments Master",
    label: "Garments Master",
    description:
      "Garments Order & Production Tracker System is a web-based management platform built to help small and medium-sized garment factories efficiently handle their production workflow. The system enables factories to track buyer orders, manage different production stages such as cutting, sewing, and finishing, and monitor inventory levels to ensure smooth operations and timely delivery. The platform allows users to add, view, sell, and update product information with ease.",
    goal: "To simplify garment production management, improve workflow transparency, and ensure timely delivery.",
    category: "Production Management",
    image: "/Garments Master.png",
    github: "https://github.com/Afifalsaad/garments-master",
    live: "https://assignment11-196f4.web.app",
    timeline: "2-4 Months",
    team: "Solo Project",
    features: [
      "Order tracking and management system",
      "Production stage monitoring",
      "Inventory management",
      "User-friendly interface for garment factories",
    ],
    techStack: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    id: 2,
    slug: "earth-clean",
    title: "Earth Clean",
    label: "Earth Clean",
    description:
      "This project is a web-based Issue Tracking and Collaboration platform designed to help users report, manage, and collaborate on issues in a transparent and organized way. Users can create and manage their own issues, contribute to others' issues through comments and updates, and work together to resolve problems efficiently.",
    goal: "To improve communication, accountability, and collaborative problem solving.",
    category: "Productivity & Collaboration",
    image: "/Earth Clean.png",
    github: "https://github.com/Afifalsaad/earth-clean",
    live: "https://assignment-10communitycleaning.web.app/",
    timeline: "2-4 Months",
    team: "Solo Project",
    features: [
      "Issue tracking and management system",
      "Collaboration tools for problem solving",
      "Transparent reporting system",
      "User contribution and updates",
    ],
    techStack: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    id: 3,
    slug: "study-ai",
    title: "StudyAI — AI-Powered Study Assistant",
    label: "StudyAI",
    description:
      "StudyAI makes studying smarter and easier with AI. It lets students create a personalized study plan by providing exam name, exam date, daily study time, current preparation level, subjects, weak topics, and study goal. Users can upload a syllabus PDF (or type it manually) and the AI extracts and analyzes it to build a structured multi-phase plan. The platform also offers PDF summarization with client-side text extraction, progress tracking through a summary history sidebar, and a chat-style inbox for follow-up messages.",
    goal: "To eliminate information overload and give every student a personalized, AI-driven roadmap to exam success.",
    category: "AI & EdTech",
    image: "/Screenshot (188).png",
    github: "https://github.com/Afifalsaad/ai-study-plan",
    live: "https://study-ai-plan.netlify.app/",
    timeline: "2–3 Months",
    team: "Solo Project",
    features: [
      "Personalized AI study plan (phases: Foundation → Learning → Practice → Revision → Mock Test)",
      "Syllabus PDF upload with client-side text extraction via pdfjs-dist",
      "Weekly schedule with daily tasks and subject allocations",
      "AI-powered PDF summarization with structured Markdown output",
      "Summary history sidebar with chat-style inbox",
      "Email/Password, Google, and GitHub OAuth authentication",
      "Dark / Light theme with system preference detection",
      "Fully responsive layout with collapsible sidebar",
    ],
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS v4",
      "Prisma ORM",
      "PostgreSQL",
      "Google Gemini AI",
      "NextAuth v4",
      "pdfjs-dist",
      "Radix UI",
      "Netlify",
    ],
  },
];

export const getProjectBySlug = (slug) =>
  projectsData.find((project) => project.slug === slug);

export default projectsData;