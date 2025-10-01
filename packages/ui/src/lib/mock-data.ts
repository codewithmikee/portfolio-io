import { DeveloperProfile, PortfolioTemplate } from "@workspace/shared/types";
import { Github, Linkedin, Twitter } from "lucide-react";

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
      { name: "Docker", level: 85, category: "Tools" },
      { name: "Git", level: 90, category: "Tools" },
      { name: "VS Code", level: 95, category: "Tools" },
      { name: "Figma", level: 80, category: "Tools" },
      { name: "Communication", level: 90, category: "Soft Skills" },
      { name: "Problem Solving", level: 95, category: "Soft Skills" },
      { name: "Team Leadership", level: 85, category: "Soft Skills" },
      { name: "Time Management", level: 88, category: "Soft Skills" },
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
      { name: "Figma", level: 95, category: "Tools" },
      { name: "Adobe XD", level: 85, category: "Tools" },
      { name: "Sketch", level: 80, category: "Tools" },
      { name: "InVision", level: 75, category: "Tools" },
      { name: "Zeplin", level: 70, category: "Tools" },
      { name: "Creative Thinking", level: 95, category: "Soft Skills" },
      { name: "User Empathy", level: 90, category: "Soft Skills" },
      { name: "Collaboration", level: 88, category: "Soft Skills" },
      { name: "Presentation", level: 85, category: "Soft Skills" },
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
  {
    id: "profile-3",
    personalInfo: {
      name: "Mikiyas Birhanu",
      title: "Senior Laravel & Next.js Developer",
      email: "mkbirhanu@gmail.com",
      phone: "+251923213768",
      location: "Addis Ababa, Ethiopia",
      website: "https://codewithmikee.github.io",
      bio: "Senior Full-Stack Developer with 5+ years of expertise in building and leading the development of scalable web applications using Laravel and Next.js. Proven track record in payment integrations, real-time systems, and cloud deployment (AWS, Azure) as a Lead Developer at Migranium. Specialized in microservices architecture, RESTful APIs, and cross-platform mobile applications with a focus on performance optimization and team leadership.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    socialLinks: [
      {
        platform: "GitHub",
        url: "https://github.com/codewithmikee",
        icon: Github,
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/mikiyas-birhanu-957b71131",
        icon: Linkedin,
      },
      {
        platform: "Twitter",
        url: "https://dev.to/codewithmikee",
        icon: Twitter,
      },
    ],
    skills: [
      { name: "Laravel", level: 95, category: "Backend" },
      { name: "Next.js", level: 90, category: "Frontend" },
      { name: "TypeScript", level: 90, category: "Frontend" },
      { name: "React", level: 90, category: "Frontend" },
      { name: "PostgreSQL", level: 85, category: "Database" },
      { name: "MySQL", level: 85, category: "Database" },
      { name: "Flutter", level: 80, category: "Mobile" },
      { name: "Docker", level: 80, category: "DevOps" },
      { name: "AWS", level: 75, category: "DevOps" },
      { name: "Redis", level: 75, category: "Database" },
      { name: "Prisma ORM", level: 80, category: "Database" },
      { name: "Twilio", level: 75, category: "Integrations" },
      { name: "Mailtrap", level: 75, category: "Integrations" },
      { name: "Pusher", level: 75, category: "Integrations" },
      { name: "Google APIs", level: 70, category: "Integrations" },
      { name: "Microsoft Graph", level: 70, category: "Integrations" },
      { name: "Azure", level: 70, category: "DevOps" },
      { name: "Docker", level: 80, category: "Tools" },
      { name: "Git", level: 90, category: "Tools" },
      { name: "VS Code", level: 95, category: "Tools" },
      { name: "Postman", level: 85, category: "Tools" },
      { name: "Insomnia", level: 80, category: "Tools" },
      { name: "Leadership", level: 90, category: "Soft Skills" },
      { name: "Mentoring", level: 85, category: "Soft Skills" },
      { name: "Strategic Thinking", level: 88, category: "Soft Skills" },
      { name: "Adaptability", level: 92, category: "Soft Skills" },
    ],
    projects: [
      {
        id: "project-migranium",
        title: "Migranium Healthcare Platform",
        description:
          "Comprehensive multi-tenant SaaS healthcare platform using Laravel 12 microservices architecture with event-driven communication via RabbitMQ. Features advanced patient scheduling, real-time notifications, automation workflows, and dynamic form management.",
        image:
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
        technologies: [
          "Laravel",
          "Next.js",
          "PostgreSQL",
          "RabbitMQ",
          "Pusher",
          "Docker",
        ],
        liveUrl: "https://migranium.com",
        githubUrl: "https://github.com/codewithmikee/migranium-platform",
        featured: true,
        keyFeatures: [
          "Multi-tenant SaaS architecture with isolated data",
          "Real-time patient scheduling with hierarchical business structure",
          "Advanced automation workflow engine with 7+ action types",
          "Dynamic form management with conditional logic",
          "Comprehensive security system with JWT, 2FA, and SSO",
          "Multi-storage file management with Azure Blob and S3",
        ],
        keyAchievements: [
          "Reduced API response times by 35% through optimization",
          "Successfully implemented microservices architecture",
          "Built system supporting 100k+ users",
          "Led development team using Agile methodologies",
        ],
      },
      {
        id: "project-dental-clinic",
        title: "Dental Clinic Management System",
        description:
          "Comprehensive clinic management platform for multiple dental practices with patient records, appointment scheduling, and payment processing. Reduced administrative tasks by 70% for clinic staff.",
        image:
          "https://images.unsplash.com/photo-1606811841689-23e56c2c5b0c?w=600&h=400&fit=crop",
        technologies: ["Laravel", "Next.js", "MySQL", "TypeScript"],
        liveUrl: "https://dental-clinic-demo.com",
        githubUrl: "https://github.com/codewithmikee/dental-clinic-system",
        featured: true,
        keyFeatures: [
          "Patient records management with comprehensive medical history",
          "Advanced appointment scheduling with calendar integration",
          "Payment processing with multiple payment methods",
          "Custom reporting and analytics dashboard",
          "Multi-location support for dental practice chains",
        ],
        keyAchievements: [
          "Reduced administrative tasks by 70% for clinic staff",
          "Successfully deployed across multiple dental practices",
          "Implemented secure patient data management system",
          "Created intuitive user interface for non-technical staff",
        ],
      },
      {
        id: "project-inventory",
        title: "Inventory Management System",
        description:
          "Custom inventory solution for local retail businesses with real-time stock tracking, low inventory alerts, and advanced reporting. Deployed to 10+ local businesses with customized configurations.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        technologies: ["Laravel", "React", "MySQL", "JavaScript"],
        liveUrl: "https://inventory-demo.com",
        githubUrl: "https://github.com/codewithmikee/inventory-management",
        featured: false,
        keyFeatures: [
          "Real-time stock tracking with automated alerts",
          "Advanced reporting and sales analytics dashboard",
          "Multi-location inventory management",
          "Customizable configurations for different business types",
          "Low inventory alerts and reorder suggestions",
        ],
        keyAchievements: [
          "Successfully deployed to 10+ local businesses",
          "Reduced inventory management time by 60%",
          "Implemented real-time tracking system",
          "Created customizable reporting system for different business needs",
        ],
      },
      {
        id: "project-dubbz",
        title: "Food Delivery Mobile App (Dubbz)",
        description:
          "Cross-platform food delivery application for Indian market with real-time order tracking, notification system, integrated payment processing, and rating system. Supported 1000+ daily active users.",
        image:
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
        technologies: ["Flutter", "Dart", "Laravel API"],
        liveUrl: "https://dubbz-app.com",
        githubUrl: "https://github.com/codewithmikee/dubbz-mobile",
        featured: true,
        keyFeatures: [
          "Cross-platform mobile app for Android and iOS",
          "Real-time order tracking with GPS integration",
          "Integrated payment processing system",
          "User rating and review system",
          "Push notifications for order updates",
          "Restaurant and menu management",
        ],
        keyAchievements: [
          "Supported 1000+ daily active users",
          "Achieved 4.5+ app store rating",
          "Reduced app load times by 30% through optimization",
          "Successfully integrated with Laravel backend APIs",
          "Implemented real-time tracking with 99.9% uptime",
        ],
      },
      {
        id: "project-github-ai",
        title: "GitHub AI Assistant with Mastra.ai",
        description:
          "AI-powered GitHub assistant using Mastra.ai framework for intelligent code analysis, automated pull request reviews, and smart repository management.",
        image:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
        technologies: ["Mastra.ai", "TypeScript", "GitHub API", "AI Agents"],
        liveUrl: "https://github-ai-demo.com",
        githubUrl:
          "https://github.com/codewithmikee/github-partner-ai-agent-with-mastra-ai",
        featured: true,
        keyFeatures: [
          "AI-powered code analysis and suggestions",
          "Automated pull request reviews",
          "Smart repository management",
          "Integration with GitHub API",
          "Intelligent code quality assessment",
        ],
        keyAchievements: [
          "Built AI assistant using cutting-edge Mastra.ai framework",
          "Implemented automated code review system",
          "Created intelligent repository management features",
        ],
      },
      {
        id: "project-packarma",
        title: "Packarma.com Platform (Freelance)",
        description:
          "Freelance project for Packarma.com involving complete frontend migration from React to Next.js with TypeScript, API optimization, and real-time feature implementation. Successfully improved SEO ranking by 40% and reduced server response time by 50%.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        technologies: ["Laravel", "Next.js", "TypeScript", "React", "MySQL"],
        liveUrl: "https://packarma.com",
        githubUrl: "https://github.com/codewithmikee/packarma-platform",
        featured: true,
        keyFeatures: [
          "Complete React to Next.js migration with TypeScript",
          "Optimized Laravel API endpoints for better performance",
          "Real-time features using Laravel Echo and WebSockets",
          "Enhanced user authentication with role-based access control",
          "Advanced admin dashboard with analytics and reporting",
          "SEO optimization and performance improvements",
        ],
        keyAchievements: [
          "Improved SEO ranking by 40% through Next.js migration",
          "Reduced server response time by 50% through API optimization",
          "Successfully implemented real-time features with WebSockets",
          "Enhanced user experience with modern frontend architecture",
          "Delivered project on time and within budget as freelance contractor",
        ],
      },
    ],
    experience: [
      {
        id: "exp-migranium",
        company: "Migranium.com",
        position: "Lead Developer",
        startDate: "2023-10",
        endDate: "Present",
        description:
          "Architected and developed comprehensive multi-tenant SaaS healthcare platform using Laravel 12 microservices architecture. Built advanced patient scheduling system, real-time notification system, automation workflow engine, and dynamic form management system.",
        technologies: [
          "Laravel",
          "Next.js",
          "PostgreSQL",
          "RabbitMQ",
          "Pusher",
          "Docker",
          "AWS",
        ],
        employmentType: "full-time",
        keyAchievements: [
          "Led development of microservices architecture serving 100k+ users",
          "Mentored junior developers and conducted code reviews",
          "Optimized database performance reducing API response times by 35%",
          "Implemented comprehensive security system with JWT, 2FA, and SSO",
          "Built real-time notification system supporting 500+ concurrent users",
          "Created dynamic form management system with 10+ field types",
        ],
      },
      {
        id: "exp-dubbz",
        company: "Dubbz (formerly Homie)",
        position: "Mobile Developer",
        startDate: "2021-03",
        endDate: "2023-03",
        description:
          "Developed cross-platform Flutter applications for food delivery platform. Integrated with Laravel backend APIs for order management and real-time tracking. Optimized application performance reducing load times by 30%.",
        technologies: ["Flutter", "Dart", "Laravel API", "WebSockets"],
        employmentType: "full-time",
        keyAchievements: [
          "Developed complete Flutter application serving 1000+ daily active users",
          "Integrated with Django REST backend APIs reducing API response time by 30%",
          "Implemented real-time order tracking with 99.9% uptime",
          "Built responsive UI supporting both Android and iOS with 4.5+ app store rating",
          "Collaborated with remote teams using Agile methodologies",
        ],
      },
      {
        id: "exp-farka",
        company: "Farka ICT Solutions",
        position: "Full-Stack Developer",
        startDate: "2018-09",
        endDate: "2019-12",
        description:
          "Developed university management system using Laravel backend and React frontend. Created school inspection management system deployed across 50+ institutions with complex reporting features and data visualization dashboards.",
        technologies: ["Laravel", "React", "MySQL", "JavaScript", "Bootstrap"],
        employmentType: "full-time",
        keyAchievements: [
          "Developed comprehensive university management system using Laravel backend and React frontend",
          "Created school inspection management system deployed across 50+ institutions",
          "Implemented complex reporting features with data visualization dashboards",
          "Designed database schemas and optimized SQL queries for performance",
          "Collaborated with cross-functional teams to deliver projects on schedule",
          "Built scalable solutions for educational institutions",
        ],
      },
    ],
    education: [
      {
        id: "edu-aait",
        institution: "Addis Ababa Institute of Technology",
        degree: "Bachelor of Science",
        field: "Software Engineering",
        startDate: "2014-09",
        endDate: "2018-06",
      },
    ],
    certifications: [
      {
        id: "cert-react-ssr",
        title: "React Server-Side Rendering Certification",
        issuer: "React Training",
        date: "2023-08",
        description:
          "Advanced certification in React SSR and Next.js optimization techniques",
      },
      {
        id: "cert-ibm-mobile-explorer",
        title: "IBM Mobile Application Developer - Explorer Award",
        issuer: "IBM",
        date: "2016-12",
        description:
          "Recognition for mobile application development excellence",
      },
      {
        id: "cert-ibm-mobile-mastery",
        title: "IBM Mobile Application Developer - Mastery Award",
        issuer: "IBM",
        date: "2016-12",
        description:
          "Mastery level certification in mobile application development",
      },
      {
        id: "cert-blockchain",
        title: "Blockchain Basics Certification",
        issuer: "Coursera",
        date: "2022-03",
        description: "Fundamentals of blockchain technology and cryptocurrency",
      },
    ],
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
