import React from 'react';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { cn } from '@/components/lib/utils'; // Assuming cn utility is available
import { LayoutDashboard, Palette, Code, Lightbulb, PenTool, Search } from 'lucide-react'; // Using lucide-react for icons

// Define interface for a single project
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  icon?: React.ReactNode;
  className?: string; // For BentoGridItem sizing and custom styles
  link?: string; // Optional link for the project
}

// ProjectCard component designed to fit within BentoGridItem
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <BentoGridItem
      key={project.id}
      className={cn(
        "flex flex-col justify-between space-y-4 p-4 cursor-pointer hover:shadow-lg transition-shadow duration-300",
        project.className
      )}
      title={project.title}
      description={project.description}
      header={<ProjectImage image={project.image} title={project.title} />}
      icon={project.icon}
      onClick={() => project.link && window.open(project.link, '_blank')}
    >
      {/* Additional content could go here if needed */}
    </BentoGridItem>
  );
};

// Simple image component for the header of each ProjectCard
const ProjectImage: React.FC<{ image: string; title: string }> = ({ image, title }) => (
  <div className="flex flex-1 w-full h-full min-h-[8rem] md:min-h-[10rem] rounded-xl overflow-hidden relative">
    <img 
      src={image} 
      alt={title} 
      className="object-cover w-full h-full rounded-xl transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
    <p className="absolute bottom-4 left-4 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {title}
    </p>
  </div>
);

// Dummy project data for demonstration
const projects: Project[] = [
  {
    id: '1',
    title: 'Dashboard Redesign',
    description: 'A complete overhaul of an existing analytics dashboard for better usability and modern aesthetics.',
    image: 'https://images.unsplash.com/photo-1628126079947-f3c5f2d0f0d2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: <LayoutDashboard className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />,
    className: "md:col-span-2", // Example of spanning multiple columns
    link: "https://dribbble.com/shots/1234567-Dashboard-Concept" // Example link
  },
  {
    id: '2',
    title: 'Mobile App Concept',
    description: 'Designed a new mobile application focusing on intuitive user experience and seamless interactions.',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: <Palette className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />,
    link: "https://www.behance.net/gallery/7890123-Mobile-App-Design"
  },
  {
    id: '3',
    title: 'E-commerce Platform UI',
    description: 'Developed a scalable and visually appealing UI for a high-traffic e-commerce website, enhancing conversion rates.',
    image: 'https://images.unsplash.com/photo-1563200746-d2417719f9f8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: <Code className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />,
    link: "https://www.awwwards.com/sites/ecommerce-showcase"
  },
  {
    id: '4',
    title: 'Interactive Portfolio Site',
    description: 'A personal portfolio site with engaging animations, modern design elements, and a focus on storytelling.',
    image: 'https://images.unsplash.com/photo-1620283300585-78e8c8a1e8e2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: <Lightbulb className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />,
    className: "md:col-span-1",
    link: "https://yourportfolio.com/project/interactive-site"
  },
  {
    id: '5',
    title: 'Brand Identity Design',
    description: 'Crafted a new visual identity for a tech startup, including logo, typography, color palette, and brand guidelines.',
    image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=2866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: <PenTool className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />,
    className: "md:col-span-1",
    link: "https://www.behance.net/gallery/9876543-Brand-Identity"
  },
  {
    id: '6',
    title: 'User Research & Testing',
    description: 'Conducted extensive user research, interviews, and usability testing to validate design decisions and improve product features.',
    image: 'https://images.unsplash.com/photo-1520607162513-77446169a5e5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: <Search className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />,
    className: "md:col-span-2",
    link: "https://medium.com/@yourusername/user-research-case-study"
  },
];

export const ProjectsGrid: React.FC = () => {
  return (
    <div className="py-10 px-4 md:px-0">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 dark:from-blue-300 dark:to-teal-200">
        Our Latest Creations
      </h2>
      <BentoGrid className="max-w-5xl mx-auto grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </BentoGrid>
      <div className="text-center mt-12 text-neutral-600 dark:text-neutral-400 text-lg">
        {/* Placeholder for infinite scroll / lazy loading */}
        {/* For a real application, you would implement an IntersectionObserver or a dedicated library here */}
        <p>Explore more captivating projects below...</p>
        {/* Example: <button className="mt-4 px-6 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors">Load More</button> */}
      </div>
    </div>
  );
};
