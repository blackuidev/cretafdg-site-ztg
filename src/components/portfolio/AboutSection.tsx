import React from 'react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download } from 'lucide-react';

const AboutSection: React.FC = () => {
  const designer = {
    name: 'Jane Doe',
    title: 'Lead UI/UX Designer',
    bioParagraphs: [
      "Hello! I'm Jane Doe, a passionate UI/UX designer with over 10 years of experience crafting intuitive and engaging digital experiences. My journey in design is driven by a deep understanding of user psychology and a commitment to creating elegant solutions that bridge the gap between user needs and business goals.",
      "My philosophy revolves around human-centered design, where every pixel and interaction is intentionally placed to enhance usability and delight. I thrive in collaborative environments, working closely with cross-functional teams to bring innovative ideas to life, from initial concept to final product launch.",
      "I specialize in user research, wireframing, prototyping, interaction design, and visual design across various platforms including web, mobile, and enterprise applications. I am always eager to learn new technologies and methodologies to push the boundaries of what's possible in digital product design.",
    ],
    profileImage: 'https://firebasestorage.googleapis.com/v0/b/codewithmuhilandb.appspot.com/o/uploads%2Fimage-placeholder.png?alt=media&token=e91a629b-7347-4931-b844-486187243c2c', // Placeholder image
    cvLink: '#',
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      id="about"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-gray-50 dark:from-background dark:to-gray-950"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          variants={itemVariants}
        >
          About Me
        </motion.h1>

        <Card className="w-full max-w-4xl mx-auto p-6 md:p-10 shadow-lg dark:shadow-2xl dark:shadow-primarylw/20 bg-card border-gray-200 dark:border-[#1a1b1b]">
          <CardHeader className="flex flex-col items-center text-center p-0 mb-8">
            <motion.div variants={itemVariants} className="mb-6">
              <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-primarylw shadow-lg">
                <AvatarImage src={designer.profileImage} alt={designer.name} />
                <AvatarFallback className="text-5xl bg-primarylw text-white dark:bg-primarylw dark:text-white">
                  {designer.name.split(' ').map((n) => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            </motion.div>
            <motion.div variants={itemVariants}>
              <CardTitle className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
                {designer.name}
              </CardTitle>
              <CardDescription className="text-lg md:text-xl text-primarylw font-medium">
                {designer.title}
              </CardDescription>
            </motion.div>
          </CardHeader>

          <CardContent className="space-y-6 text-center text-gray-700 dark:text-gray-300 p-0">
            {designer.bioParagraphs.map((paragraph, index) => (
              <motion.p key={index} variants={itemVariants} className="text-base md:text-lg leading-relaxed">
                {paragraph}
              </motion.p>
            ))}
            <motion.div variants={itemVariants} className="pt-8">
              <Button
                asChild
                className="inline-flex items-center gap-2 px-8 py-3 text-lg font-semibold rounded-full bg-primarylw text-white hover:bg-primarylw/90 transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primarylw focus:ring-offset-2 dark:focus:ring-offset-gray-950"
              >
                <a href={designer.cvLink} download>
                  <Download className="h-5 w-5" /> Download CV
                </a>
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
};

export default AboutSection;
