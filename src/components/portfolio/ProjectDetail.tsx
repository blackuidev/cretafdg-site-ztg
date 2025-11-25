import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../ui/badge';
import { ScrollReveal } from '../ui/scroll-reveal';
import { ThreeDCarousel } from '../ui/3d-carousel';

interface ProjectVisual {
  src: string;
  alt: string;
  type: 'image' | 'video';
}

interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  process: string[];
  visuals: ProjectVisual[];
  technologies: string[];
  outcomes: string[];
  liveLink?: string;
  caseStudyLink?: string;
}

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  if (!project) {
    return <div className="text-center py-10 text-gray-700 dark:text-gray-300">Project not found.</div>;
  }

  const carouselItems = project.visuals.map((visual, index) => ({
    id: String(index),
    image: visual.type === 'image' ? visual.src : undefined,
    video: visual.type === 'video' ? visual.src : undefined,
    alt: visual.alt,
    title: visual.alt, // Reusing alt as title for carousel
  }));

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <ScrollReveal delay={0.1}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-center mb-4 leading-tight text-gray-900 dark:text-white"
        >
          {project.title}
        </motion.h1>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12"
        >
          {project.tagline}
        </motion.p>
      </ScrollReveal>

      {/* Main Description */}
      <section className="mb-16">
        <ScrollReveal delay={0.3}>
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-900 dark:text-white">Overview</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {project.description}
          </p>
        </ScrollReveal>
      </section>

      {/* 3D Carousel for Visuals */}
      {project.visuals && project.visuals.length > 0 && (
        <section className="mb-16">
          <ScrollReveal delay={0.4}>
            <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900 dark:text-white">Visual Showcase</h2>
            <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
              <ThreeDCarousel items={carouselItems} />
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* Problem and Solution */}
      <section className="grid md:grid-cols-2 gap-12 mb-16">
        <ScrollReveal delay={0.5}>
          <div className="bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-300 mb-4">The Problem</h3>
            <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
              {project.problem}
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.6}>
          <div className="bg-gradient-to-br from-green-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-4">The Solution</h3>
            <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Design Process */}
      {project.process && project.process.length > 0 && (
        <section className="mb-16">
          <ScrollReveal delay={0.7}>
            <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900 dark:text-white">Design Process & UX Insights</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.process.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Step {index + 1}</h4>
                  <p className="text-gray-700 dark:text-gray-300">{step}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* Technologies Used */}
      {project.technologies && project.technologies.length > 0 && (
        <section className="mb-16">
          <ScrollReveal delay={0.8}>
            <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900 dark:text-white">Technologies Used</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {project.technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-4 py-2 text-md border-blue-500 dark:border-blue-300 text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* Outcomes/Learnings */}
      {project.outcomes && project.outcomes.length > 0 && (
        <section className="mb-16">
          <ScrollReveal delay={0.9}>
            <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900 dark:text-white">Key Outcomes & Learnings</h2>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              {project.outcomes.map((outcome, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {outcome}
                </motion.li>
              ))}
            </ul>
          </ScrollReveal>
        </section>
      )}

      {/* Call to Action */}
      <section className="text-center">
        <ScrollReveal delay={1.0}>
          <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">Explore More</h2>
          <div className="flex justify-center gap-4">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 shadow-lg"
              >
                View Live Project
                <span className="ml-2">&rarr;</span>
              </a>
            )}
            {project.caseStudyLink && (
              <a
                href={project.caseStudyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border border-indigo-600 text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition-colors duration-300 shadow-lg dark:bg-gray-800 dark:text-indigo-300 dark:border-indigo-300 dark:hover:bg-gray-700"
              >
                Read Full Case Study
                <span className="ml-2">&rarr;</span>
              </a>
            )}
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default ProjectDetail;
