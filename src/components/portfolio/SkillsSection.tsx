import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface SkillItem {
  name: string;
  level?: number; // Optional for tools that don't have a percentage level
}

interface SkillCategory {
  category: string;
  items: SkillItem[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Core UI/UX Skills",
    items: [
      { name: "UI Design", level: 95 },
      { name: "UX Research", level: 90 },
      { name: "Prototyping & Wireframing", level: 92 },
      { name: "User Testing & Interviews", level: 88 },
      { name: "Information Architecture", level: 85 },
      { name: "Interaction Design", level: 93 },
      { name: "Responsive Design", level: 91 },
      { name: "Design Systems", level: 87 },
    ],
  },
  {
    category: "Tools & Software",
    items: [
      { name: "Figma" },
      { name: "Sketch" },
      { name: "Adobe XD" },
      { name: "Miro" },
      { name: "Maze" },
      { name: "UserZoom" },
      { name: "Photoshop" },
      { name: "Illustrator" },
      { name: "After Effects" },
      { name: "HTML/CSS" },
      { name: "JavaScript/TypeScript" },
      { name: "React" },
      { name: "Next.js" },
    ],
  },
];

// Component for an animated skill progress bar
const SkillProgressBar: React.FC<{ name: string; level: number }> = ({ name, level }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-1">
        <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{name}</span>
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="bg-primarylw h-2.5 rounded-full shadow-md"
        ></motion.div>
      </div>
    </motion.div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          My <span className="text-primarylw">Skills</span> & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Core UI/UX Skills Category */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800"
          >
            <h3 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white">{skillsData[0].category}</h3>
            {
              skillsData[0].items.map((skill, index) => (
                skill.level !== undefined && (
                  <SkillProgressBar key={index} name={skill.name} level={skill.level} />
                )
              ))
            }
          </motion.div>

          {/* Tools & Software Category */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800"
          >
            <h3 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white">{skillsData[1].category}</h3>
            <div className="flex flex-wrap gap-3">
              {
                skillsData[1].items.map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Badge variant="default" className="px-4 py-2 text-md rounded-full shadow-sm bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100 hover:bg-primarylw hover:text-white dark:hover:bg-primarylw transition-colors duration-300 cursor-pointer">
                      {tool.name}
                    </Badge>
                  </motion.div>
                ))
              }
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
