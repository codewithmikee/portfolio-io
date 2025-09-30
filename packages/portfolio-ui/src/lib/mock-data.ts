import { Github, Linkedin, Twitter } from "lucide-react";
import type {
  PersonalInfo,
  SocialLink,
  Skill,
  Project,
  Experience,
  Education,
  Award,
  DeveloperProfile,
  PortfolioTemplate,
} from "@workspace/shared/types";

export const mockProfiles: DeveloperProfile[] = [
  {
    id: "profile-1",
    personalInfo: {
      name: "Alex Johnson",
      title: "Full Stack Developer",
      email: "alex.johnson@email.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      website: "https://alexjohnson.dev",
      bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications. I love creating elegant solutions to complex problems and staying up-to-date with the latest technologies.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    socialLinks: [
      {
        platform: "GitHub",
        url: "https://github.com/alexjohnson",
        icon: Github,
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/alexjohnson",
        icon: Linkedin,
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/alexjohnson",
        icon: Twitter,
      },
    ],
    skills: [
      { name: "JavaScript", level: 95, category: "Frontend" },
      { name: "React", level: 90, category: "Frontend" },
      { name: "TypeScript", level: 88, category: "Frontend" },
      { name: "Next.js", level: 85, category: "Frontend" },
      { name: "Node.js", level: 85, category: "Backend" },
      { name: "Python", level: 80, category: "Backend" },
      { name: "PostgreSQL", level: 75, category: "Database" },
      { name: "MongoDB", level: 70, category: "Database" },
      { name: "AWS", level: 70, category: "DevOps" },
      { name: "Docker", level: 65, category: "DevOps" },
    ],
    projects: [
      {
        id: "project-1",
        title: "E-Commerce Platform",
        description:
          "A full-featured e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
        liveUrl: "https://ecommerce-demo.com",
        githubUrl: "https://github.com/alexjohnson/ecommerce",
        featured: true,
      },
      {
        id: "project-2",
        title: "Task Management App",
        description:
          "A collaborative task management application with real-time updates, team collaboration features, and analytics dashboard.",
        image:
          "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
        technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
        liveUrl: "https://taskapp-demo.com",
        githubUrl: "https://github.com/alexjohnson/taskapp",
        featured: true,
      },
      {
        id: "project-3",
        title: "AI Content Generator",
        description:
          "An AI-powered content generation tool using OpenAI API. Helps users create blog posts, social media content, and marketing copy.",
        image:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
        technologies: ["React", "OpenAI", "Node.js", "MongoDB"],
        liveUrl: "https://ai-content-demo.com",
        githubUrl: "https://github.com/alexjohnson/ai-content",
        featured: false,
      },
      {
        id: "project-4",
        title: "Weather Dashboard",
        description:
          "Real-time weather dashboard with forecasts, maps, and historical data visualization.",
        image:
          "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
        technologies: ["Vue.js", "D3.js", "Weather API"],
        liveUrl: "https://weather-demo.com",
        githubUrl: "https://github.com/alexjohnson/weather",
        featured: false,
      },
    ],
    experience: [
      {
        id: "exp-1",
        company: "TechCorp Solutions",
        position: "Senior Full Stack Developer",
        startDate: "2022-01",
        endDate: "Present",
        description:
          "Lead development of microservices architecture serving 100k+ users. Mentored junior developers and conducted code reviews.",
        technologies: ["React", "Node.js", "AWS", "Docker"],
      },
      {
        id: "exp-2",
        company: "StartupXYZ",
        position: "Full Stack Developer",
        startDate: "2020-03",
        endDate: "2021-12",
        description:
          "Built MVP from scratch using React and Node.js. Implemented real-time features using WebSockets.",
        technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      },
      {
        id: "exp-3",
        company: "Digital Agency Co",
        position: "Frontend Developer",
        startDate: "2018-06",
        endDate: "2020-02",
        description:
          "Developed responsive websites and web applications for various clients. Collaborated with designers and backend developers.",
        technologies: ["JavaScript", "React", "SASS", "WordPress"],
      },
    ],
    education: [
      {
        id: "edu-1",
        institution: "University of California, Berkeley",
        degree: "Bachelor of Science",
        field: "Computer Science",
        startDate: "2014-09",
        endDate: "2018-05",
        gpa: "3.8",
      },
    ],
    certifications: [
      {
        id: "award-1",
        title: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2023-06",
        description:
          "Professional level certification for designing distributed systems on AWS",
      },
      {
        id: "award-2",
        title: "Hackathon Winner",
        issuer: "TechCrunch Disrupt",
        date: "2022-09",
        description:
          "First place for building an innovative AI-powered productivity tool",
      },
    ],
  },
  {
    id: "profile-2",
    personalInfo: {
      name: "Sarah Chen",
      title: "Frontend Developer & UI/UX Designer",
      email: "sarah.chen@email.com",
      phone: "+1 (555) 987-6543",
      location: "New York, NY",
      website: "https://sarahchen.design",
      bio: "Creative frontend developer and UI/UX designer with a passion for creating beautiful, user-centered digital experiences. I bridge the gap between design and development.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    },
    socialLinks: [
      { platform: "GitHub", url: "https://github.com/sarahchen", icon: Github },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/sarahchen",
        icon: Linkedin,
      },
    ],
    skills: [
      { name: "React", level: 95, category: "Frontend" },
      { name: "TypeScript", level: 90, category: "Frontend" },
      { name: "Figma", level: 95, category: "Design" },
      { name: "CSS/SCSS", level: 90, category: "Frontend" },
      { name: "Vue.js", level: 80, category: "Frontend" },
      { name: "Adobe XD", level: 85, category: "Design" },
    ],
    projects: [
      {
        id: "project-3",
        title: "Design System",
        description:
          "A comprehensive design system with React components, design tokens, and documentation site.",
        image:
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
        technologies: ["React", "Storybook", "Figma", "TypeScript"],
        liveUrl: "https://designsystem-demo.com",
        githubUrl: "https://github.com/sarahchen/designsystem",
        featured: true,
      },
      {
        id: "project-4",
        title: "Portfolio Website Builder",
        description:
          "A drag-and-drop portfolio website builder for creatives with customizable templates.",
        image:
          "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
        technologies: ["React", "Next.js", "Tailwind CSS"],
        liveUrl: "https://portfolio-builder-demo.com",
        githubUrl: "https://github.com/sarahchen/portfolio-builder",
        featured: true,
      },
    ],
    experience: [
      {
        id: "exp-3",
        company: "Design Studio Inc",
        position: "Senior Frontend Developer",
        startDate: "2021-06",
        endDate: "Present",
        description:
          "Lead frontend development for client projects. Created reusable component libraries and design systems.",
        technologies: ["React", "Vue.js", "Figma", "TypeScript"],
      },
      {
        id: "exp-4",
        company: "Creative Agency",
        position: "UI/UX Designer & Developer",
        startDate: "2019-03",
        endDate: "2021-05",
        description:
          "Designed and developed user interfaces for web and mobile applications.",
        technologies: ["Figma", "React", "CSS", "JavaScript"],
      },
    ],
    education: [
      {
        id: "edu-2",
        institution: "Parsons School of Design",
        degree: "Bachelor of Fine Arts",
        field: "Digital Design",
        startDate: "2016-09",
        endDate: "2020-05",
        gpa: "3.9",
      },
    ],
    certifications: [],
  },
];

export const portfolioTemplates: PortfolioTemplate[] = [
  {
    id: "minimal-portfolio",
    name: "Minimal Portfolio",
    description: "Clean and simple design focusing on content",
    preview:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
    category: "portfolio",
    style: "minimal",
  },
  {
    id: "creative-portfolio",
    name: "Creative Portfolio",
    description: "Bold and artistic design with animations",
    preview:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop",
    category: "portfolio",
    style: "creative",
  },
  {
    id: "professional-portfolio",
    name: "Professional Portfolio",
    description: "Corporate-friendly design for business use",
    preview:
      "https://images.unsplash.com/photo-1486312338219-ce68e2c6b686?w=400&h=300&fit=crop",
    category: "portfolio",
    style: "professional",
  },
  {
    id: "technical-portfolio",
    name: "Technical Portfolio",
    description: "Developer-focused with code snippets and technical details",
    preview:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    category: "portfolio",
    style: "technical",
  },
  {
    id: "colorful-portfolio",
    name: "Colorful Portfolio",
    description: "Vibrant and energetic design with bold colors",
    preview:
      "https://images.unsplash.com/photo-1541462608143-632531db7ed4?w=400&h=300&fit=crop",
    category: "portfolio",
    style: "colorful",
  },
  {
    id: "classic-cv",
    name: "Classic CV",
    description: "Traditional single-column resume format",
    preview:
      "https://images.unsplash.com/photo-1586281380349-6326b3ff858d?w=400&h=300&fit=crop",
    category: "cv",
    style: "classic",
  },
  {
    id: "modern-cv",
    name: "Modern Two-Column CV",
    description: "Contemporary two-column layout with visual elements",
    preview:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
    category: "cv",
    style: "modern",
  },
  {
    id: "minimalist-cv",
    name: "Minimalist CV",
    description: "Ultra-clean design with plenty of white space",
    preview:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
    category: "cv",
    style: "minimal",
  },
  {
    id: "ats-cv",
    name: "ATS-Friendly CV",
    description: "Optimized for Applicant Tracking Systems",
    preview:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    category: "cv",
    style: "ats-friendly",
  },
  {
    id: "creative-cv",
    name: "Creative CV",
    description: "Artistic design for creative professionals",
    preview:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
    category: "cv",
    style: "creative",
  },
];
