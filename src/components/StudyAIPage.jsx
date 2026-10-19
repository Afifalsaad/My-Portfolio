import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const StudyAIPage = () => {
  const navigate = useNavigate();
  const project = {
    title: "StudyAI — AI-Powered Study Assistant",
    description: "StudyAI makes studying smarter and easier with AI. It lets students create a personalized study plan by providing exam name, exam date, daily study time, current preparation level, subjects, weak topics, and study goal. Users can upload a syllabus PDF (or type it manually) and the AI extracts and analyzes it to build a structured multi-phase plan. The platform also offers PDF summarization with client-side text extraction, progress tracking through a summary history sidebar, and a chat-style inbox for follow-up messages.",
    goal: "To eliminate information overload and give every student a personalized, AI-driven roadmap to exam success.",
    category: "AI & EdTech",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&auto=format&fit=crop&q=80",
    github: "https://github.com/Afifalsaad/ai-study-plan",
    live: "https://studyaifrontend.netlify.app",
  };

  const features = [
    "Personalized AI study plan (phases: Foundation → Learning → Practice → Revision → Mock Test)",
    "Syllabus PDF upload with client-side text extraction via pdfjs-dist",
    "Weekly schedule with daily tasks and subject allocations",
    "AI-powered PDF summarization with structured Markdown output",
    "Summary history sidebar with chat-style inbox",
    "Email/Password, Google, and GitHub OAuth authentication",
    "Dark / Light theme with system preference detection",
    "Fully responsive layout with collapsible sidebar",
  ];

  const techStack = [
    "Next.js 16", "TypeScript", "Tailwind CSS v4", "Prisma ORM",
    "PostgreSQL", "Google Gemini AI", "NextAuth v4", "pdfjs-dist",
    "Radix UI", "Netlify",
  ];

  return (
    <motion.div
      className="min-h-screen bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-100 py-6 relative overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent via-background-light/80 to-background-light dark:via-background-dark/80 dark:to-background-dark"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              <span>Back to Projects</span>
            </button>
          </div>

          {/* Project Detail Content */}
          <motion.div
            className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-md rounded-3xl border border-gray-200 dark:border-gray-700 p-8 md:p-12 shadow-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Image and Project Info */}
              <div>
                <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 mb-8">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="flex flex-wrap gap-4 mb-8">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[150px] flex items-center justify-center gap-2 rounded-lg h-12 bg-primary text-[#122118] font-bold hover:bg-primary/90 transition-all"
                  >
                    <span className="material-symbols-outlined">captive_portal</span>
                    <span>Live Site</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[150px] flex items-center justify-center gap-2 rounded-lg h-12 bg-[#254632] text-white font-bold hover:bg-[#2f573f] transition-all"
                  >
                    <span className="material-symbols-outlined">code</span>
                    <span>GitHub</span>
                  </a>
                </div>

                <div className="bg-[#1a2e22] rounded-lg p-5 border border-[#254632]">
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider text-opacity-80 mb-4">Project Details</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">Category</p>
                      <p className="text-white text-sm">{project.category}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">Role</p>
                      <p className="text-white text-sm">Full-Stack Developer</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">Timeline</p>
                      <p className="text-white text-sm">2–3 Months</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">Team</p>
                      <p className="text-white text-sm">Solo Project</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Project Description */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  {project.title}
                </h1>

                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">info</span>
                    Project Overview
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Goal</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {project.goal}
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Key Features</h3>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                    {features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary mt-1 flex-shrink-0">check_circle</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default StudyAIPage;

