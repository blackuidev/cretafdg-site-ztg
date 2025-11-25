import { LucideIcon, Figma, GitBranch, LayoutGrid, Search, Users, Code, Monitor, Palette } from "lucide-react";

// --- Interfaces ---

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Lucide icon name or path to SVG
}

export interface DesignerInfo {
  name: string;
  title: string;
  bio: string;
  profilePicture: string;
  socialLinks: SocialLink[];
}

export interface Skill {
  name: string;
  icon?: string; // Lucide icon name or path to SVG
  level: number; // 1-100 percentage or 1-5 rating
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientTitle: string;
  testimonial: string;
  clientAvatar: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  heroImage: string; // Main image for the project card/hero section
  categories: string[];
  technologies: string[];
  projectLink?: string; // Optional link to live project
  caseStudyLink?: string; // Optional link to detailed case study
  galleryImages: string[]; // Additional images for a project detail page
  animationType: "parallax" | "fade-in" | "slide-up" | "zoom-in" | "none";
  featured: boolean;
}

// --- Mock Data ---

export const designerData: DesignerInfo = {
  name: "Alice Wonderland",
  title: "UI/UX Experience Designer",
  bio:
    "Passionate UI/UX Designer with over 8 years of experience crafting intuitive, engaging, and visually stunning digital experiences. I specialize in turning complex problems into elegant solutions, focusing on user-centered design principles and modern aesthetic trends. My work spans across web, mobile, and interactive installations, always aiming to push the boundaries of design and technology.",
  profilePicture:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  socialLinks: [
    { platform: "LinkedIn", url: "#", icon: "Linkedin" },
    { platform: "Dribbble", url: "#", icon: "Dribbble" },
    { platform: "GitHub", url: "#", icon: "Github" },
    { platform: "Behance", url: "#", icon: "Behance" },
  ],
};

export const skillsData: SkillCategory[] = [
  {
    category: "Design Tools",
    skills: [
      { name: "Figma", icon: "Figma", level: 95 },
      { name: "Sketch", icon: "Sketch", level: 85 },
      { name: "Adobe XD", icon: "AdobeXd", level: 80 },
      { name: "Photoshop", icon: "Image", level: 70 },
      { name: "Illustrator", icon: "PenTool", level: 65 },
    ],
  },
  {
    category: "UX Methodologies",
    skills: [
      { name: "User Research", icon: "Search", level: 90 },
      { name: "Wireframing & Prototyping", icon: "Layers", level: 92 },
      { name: "Usability Testing", icon: "Users", level: 88 },
      { name: "Information Architecture", icon: "LayoutGrid", level: 85 },
      { name: "Design Systems", icon: "Component", level: 90 },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML/CSS", icon: "Code", level: 75 },
      { name: "Tailwind CSS", icon: "SwatchBook", level: 80 },
      { name: "React", icon: "Atom", level: 60 },
    ],
  },
  {
    category: "Other Skills",
    skills: [
      { name: "Branding", icon: "Palette", level: 78 },
      { name: "Motion Design", icon: "Sparkles", level: 70 },
      { name: "Project Management", icon: "ClipboardCheck", level: 80 },
    ],
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    clientName: "Jane Doe",
    clientTitle: "CEO, Tech Solutions Inc.",
    testimonial:
      "Alice transformed our product's user experience. Her attention to detail and ability to understand complex user needs is unparalleled. The new interface is not only beautiful but incredibly intuitive, leading to a significant increase in user engagement.",
    clientAvatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    clientName: "John Smith",
    clientTitle: "Product Manager, Global Ventures",
    testimonial:
      "Working with Alice was a game-changer for our mobile app. Her design process is thorough, collaborative, and incredibly efficient. She delivered a sleek, modern UI that perfectly captured our brand vision and resonated with our target audience.",
    clientAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    clientName: "Emily White",
    clientTitle: "Founder, Innovate Labs",
    testimonial:
      "Alice possesses a rare combination of artistic talent and strategic thinking. She took our vague ideas and turned them into a concrete, user-friendly product. Her insights into user behavior were invaluable, and the final design exceeded all our expectations.",
    clientAvatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29329?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "1",
    title: "Harmony Health Dashboard",
    shortDescription:
      "A comprehensive redesign of a healthcare management dashboard, focusing on data visualization and intuitive navigation.",
    longDescription:
      "Redesigned the entire user interface and experience for Harmony Health's SaaS platform, targeting medical professionals. The project involved extensive user research, persona development, wireframing, and high-fidelity prototyping. Key features include a customizable dashboard, interactive data charts, and streamlined patient management workflows. The goal was to reduce cognitive load and improve efficiency for healthcare providers.",
    heroImage:
      "https://images.unsplash.com/photo-1587370390642-a8412803855a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categories: ["UI/UX Design", "SaaS", "Healthcare"],
    technologies: ["Figma", "Adobe Illustrator", "User Research"],
    projectLink: "#",
    caseStudyLink: "#",
    galleryImages: [
      "https://images.unsplash.com/photo-1520006403001-9c62989020b5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1547658718-1cdaa0851675?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    animationType: "parallax",
    featured: true,
  },
  {
    id: "2",
    title: "EcoConnect Mobile App",
    shortDescription:
      "Designing a community-driven mobile application for sustainable living and local environmental initiatives.",
    longDescription:
      "Developed the complete UI/UX for EcoConnect, a mobile app aimed at connecting environmentally conscious individuals with local green initiatives. The project encompassed ideation, user flows, low-to-high fidelity prototypes, and interaction design. Features include event discovery, volunteer sign-ups, impact tracking, and a social feed. The design focused on creating an engaging and motivating experience to foster community involvement.",
    heroImage:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categories: ["Mobile App", "Community", "Sustainability"],
    technologies: ["Figma", "Prototyping", "User Testing"],
    projectLink: "#",
    galleryImages: [
      "https://images.unsplash.com/photo-1510915228340-ff8b067a99b4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1542744094-cb22a5789139?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1551288259-cd10c14902cd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    animationType: "fade-in",
    featured: true,
  },
  {
    id: "3",
    title: "Quantum Analytics Web Platform",
    shortDescription:
      "Building a sophisticated data analytics platform with a focus on powerful visualizations and interactive reporting.",
    longDescription:
      "Led the UI/UX efforts for Quantum Analytics, a web-based platform for advanced business intelligence. The project involved designing complex dashboards, interactive charts, and custom report generation tools. Emphasized clarity in data presentation and ease of customization for enterprise users. Collaborated closely with data scientists and frontend developers to ensure technical feasibility and optimal performance.",
    heroImage:
      "https://images.unsplash.com/photo-1551288259-cd10c14902cd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categories: ["Web Platform", "Data Analytics", "Enterprise"],
    technologies: ["Sketch", "D3.js Concepts", "Information Design"],
    projectLink: "#",
    caseStudyLink: "#",
    galleryImages: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1542744094-cb22a5789139?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1520006403001-9c62989020b5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    animationType: "slide-up",
    featured: true,
  },
  {
    id: "4",
    title: "Aura E-commerce Redesign",
    shortDescription:
      "Revamping an online fashion retailer's website to enhance user experience and boost conversion rates.",
    longDescription:
      "Undertook a complete redesign of Aura Fashion's e-commerce website, focusing on improving the user journey from product discovery to checkout. Conducted A/B testing, heat mapping analysis, and user interviews to identify pain points. Implemented a refreshed visual design, intuitive navigation, and optimized product pages, resulting in a measurable increase in conversion rates and customer satisfaction.",
    heroImage:
      "https://images.unsplash.com/photo-1441986345917-66a097c77946?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categories: ["E-commerce", "Web Design", "Retail"],
    technologies: ["Figma", "Google Analytics", "Conversion Optimization"],
    projectLink: "#",
    galleryImages: [
      "https://images.unsplash.com/photo-1528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1510915228340-ff8b067a99b4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1542744094-cb22a5789139?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    animationType: "zoom-in",
    featured: false,
  },
  {
    id: "5",
    title: "Horizon VR Experience",
    shortDescription:
      "Designing an immersive virtual reality application for educational purposes, focusing on interactive learning modules.",
    longDescription:
      "Pioneered the UI/UX design for Horizon VR, an educational virtual reality application. This project involved designing 3D user interfaces, spatial interactions, and intuitive navigation within a virtual environment. Focused on creating an immersive yet comfortable experience for users, minimizing motion sickness, and maximizing engagement with educational content. Involved extensive prototyping in VR and user testing with various headsets.",
    heroImage:
      "https://images.unsplash.com/photo-1511210131498-f5421c618c4b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categories: ["VR/AR", "Education", "Immersive Design"],
    technologies: ["Unity (UI/UX)", "Prototyping", "Spatial Design"],
    projectLink: "#",
    caseStudyLink: "#",
    galleryImages: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1542744094-cb22a5789139?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1520006403001-9c62989020b5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    animationType: "none",
    featured: false,
  },
  {
    id: "6",
    title: "CityScape Smart City Interface",
    shortDescription:
      "Developing a futuristic interface for managing urban services and smart infrastructure.",
    longDescription:
      "Designed the central control interface for CityScape, a smart city management system. This involved creating dashboards for traffic management, public safety, environmental monitoring, and utility control. The design prioritized clarity, real-time data display, and quick access to critical information for city administrators. Utilized advanced data visualization techniques and responsive design for large-format displays.",
    heroImage:
      "https://images.unsplash.com/photo-1519757916298-953e3713837b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categories: ["Smart City", "Dashboard", "Government"],
    technologies: ["Figma", "GIS Integration (UI)", "Data Visualization"],
    projectLink: "#",
    galleryImages: [
      "https://images.unsplash.com/photo-1528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1510915228340-ff8b067a99b4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1542744094-cb22a5789139?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    animationType: "parallax",
    featured: false,
  },
];