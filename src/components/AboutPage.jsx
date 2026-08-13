import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="min-h-screen bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-100 pt-24 pb-16 relative overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent via-background-light/80 to-background-light dark:via-background-dark/80 dark:to-background-dark"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
              <span>Back</span>
            </button>
          </div>

          {/* About Content */}
          <motion.div
            className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-md rounded-3xl border border-gray-200 dark:border-gray-700 p-8 md:p-12 shadow-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                About <span className="text-primary">Me</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Get to know more about my background, skills, and what drives me
                as a developer.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Profile Section */}
              <div className="lg:col-span-1">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full bg-primary/10 mb-6 overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
                    <img
                      src="/hero-image.png"
                      alt="Afif Al Saad"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Afif Al Saad
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Web Developer
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="mailto:afifalsaad01@gmail.com"
                      className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-sm">
                        mail
                      </span>
                    </a>
                    <a
                      href="https://wa.me/8801720085585"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-sm">
                        chat
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:col-span-2">
                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">
                        person
                      </span>
                      Who I Am
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      I'm a passionate full-stack developer with expertise in
                      creating modern web applications. With a strong foundation
                      in both frontend and backend technologies, I build
                      solutions that are not only visually appealing but also
                      highly functional and scalable.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">
                        work
                      </span>
                      Experience
                    </h2>
                    <div className="space-y-4">
                      <div className="border-l-4 border-primary pl-4 py-1">
                        <h3 className="font-bold text-gray-900 dark:text-white">
                          Web Developer
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          2022 - Present
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">
                          Developed and maintained various web applications
                          using modern technologies.
                        </p>
                      </div>
                      <div className="border-l-4 border-primary pl-4 py-1">
                        <h3 className="font-bold text-gray-900 dark:text-white">
                          Frontend Developer
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          2021 - 2022
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">
                          Focused on creating responsive and interactive user
                          interfaces.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">
                        school
                      </span>
                      Education
                    </h2>
                    <div className="space-y-4">
                      <div className="border-l-4 border-primary pl-4 py-1">
                        <h3 className="font-bold text-gray-900 dark:text-white">
                          Bachelor of Science in Computer Science
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          University Name
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">
                          Graduated with a focus on software engineering and web
                          development.
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
