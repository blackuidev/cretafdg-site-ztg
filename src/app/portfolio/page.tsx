"use client";

import React from "react";
import { motion } from "framer-motion";

// These components would typically be imported from a dedicated folder,
// e.g., './components/HeroSection', once they are created.
// For now, inline placeholders are used to demonstrate the structure.

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const PortfolioPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground dark:bg-gray-950">
      {/* Hero Section */}
      <motion.section
        id="hero"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="relative flex items-center justify-center min-h-[calc(100vh-80px)] p-8 overflow-hidden"
      >
        {/* Animated background elements could go here, e.g., particles, gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-black opacity-30 animate-pulse-slow"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 dark:from-blue-400 dark:to-cyan-300">
            Hi, I&apos;m [Designer Name]
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            UI/UX Designer | Crafting intuitive and delightful experiences with a touch of magic
          </p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform-gpu"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="py-20 px-8 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I am a passionate UI/UX designer with [X] years of experience in
            creating user-centered designs that solve complex problems and
            deliver exceptional user experiences. My expertise spans across
            user research, wireframing, prototyping, and visual design, always
            with a focus on accessibility and usability. I thrive on bringing ideas to life
            through thoughtful design and meticulous execution, ensuring every interaction is meaningful.
          </p>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="py-20 px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
            My Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                UI Design
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Figma, Sketch, Adobe XD, Photoshop, Illustrator
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                UX Research
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                User Interviews, Surveys, Usability Testing, Personas
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Prototyping
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Figma, InVision, ProtoPie, Principle, Axure
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Front-end Basics
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                HTML, CSS, Basic JavaScript, React Concepts, Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="py-20 px-8 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder Project Card 1 */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="https://via.placeholder.com/400x250/007bff/ffffff?text=Project+1"
                alt="Project 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Project Title One
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  A brief description of project one, highlighting the role and key achievements, showcasing design process and impact.
                </p>
                <button className="mt-4 text-blue-500 hover:underline text-base font-medium">
                  View Details
                </button>
              </div>
            </motion.div>
            {/* Placeholder Project Card 2 */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="https://via.placeholder.com/400x250/28a745/ffffff?text=Project+2"
                alt="Project 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Project Title Two
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  A brief description of project two, highlighting the role and key achievements, showcasing design process and impact.
                </p>
                <button className="mt-4 text-green-500 hover:underline text-base font-medium">
                  View Details
                </button>
              </div>
            </motion.div>
            {/* Placeholder Project Card 3 */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="https://via.placeholder.com/400x250/ffc107/ffffff?text=Project+3"
                alt="Project 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Project Title Three
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  A brief description of project three, highlighting the role and key achievements, showcasing design process and impact.
                </p>
                <button className="mt-4 text-yellow-500 hover:underline text-base font-medium">
                  View Details
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        id="testimonials"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="py-20 px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
            What Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial Card 1 */}
            <motion.div
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-lg italic mb-4 text-gray-700 dark:text-gray-300">
                &quot;[Designer Name] transformed our vision into a beautiful and
                highly functional product. Their attention to detail and user-centric
                approach was outstanding, leading to measurable improvements in user engagement.&quot;
              </p>
              <p className="font-semibold text-gray-900 dark:text-white">
                - Client Name 1, CEO at Company A
              </p>
            </motion.div>
            {/* Testimonial Card 2 */}
            <motion.div
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-lg italic mb-4 text-gray-700 dark:text-gray-300">
                &quot;Working with [Designer Name] was a fantastic experience.
                They brought fresh ideas and delivered designs that exceeded
                our expectations, making the entire collaboration seamless and productive.&quot;
              </p>
              <p className="font-semibold text-gray-900 dark:text-white">
                - Client Name 2, Product Manager at Company B
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="py-20 px-8 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Have a project in mind or just want to say hello? Feel free to
            reach out! I&apos;m always open to new opportunities and collaborations.
          </p>
          <motion.a
            href="mailto:your.email@example.com"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform-gpu"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            Say Hello!
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

export default PortfolioPage;
