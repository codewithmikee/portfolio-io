// Portfolio-specific type definitions

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  bio: string;
  avatar: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: any;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface DeveloperProfile {
  id: string;
  personalInfo: PersonalInfo;
  socialLinks: SocialLink[];
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  certifications: Award[];
}

export interface PortfolioTemplate {
  id: string;
  name: string;
  description: string;
  preview: string;
  category: "portfolio" | "cv";
  style: string;
}
