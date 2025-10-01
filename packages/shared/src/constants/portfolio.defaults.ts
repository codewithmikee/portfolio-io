import {
  PortfolioUiPreference,
  ThemePreference,
} from "../types/portfolio-ui-config.types";

export const ThemeOptions: ThemePreference[] = ["light", "dark", "system"];

export const DefaultPortfolioUiPreference: PortfolioUiPreference = {
  defaultTheme: "dark",
  allowThemeChange: true,
  allowThemeChangeOnCv: true,
  portfolioTemplateId: "modern-portfolio",
  cvTemplateId: "ats-cv",
  portfolioSections: [
    "hero",
    "about",
    "skills",
    "projects",
    "experience",
    "education",
    "certifications",
  ],
  cvSections: [
    "hero",
    "about",
    "skills",
    "experience",
    "education",
    "certifications",
  ],
  mainSkills: [
    { name: "Laravel", level: 95, category: "Backend" },
    { name: "Next.js", level: 90, category: "Frontend" },
  ],
};

// Reusable defaults that other profiles can reference or extend later
export const DefaultSkills = {
  backend: [
    { name: "Laravel", level: 95, category: "Backend" },
    { name: "Node.js", level: 85, category: "Backend" },
  ],
  frontend: [
    { name: "Next.js", level: 90, category: "Frontend" },
    { name: "React", level: 90, category: "Frontend" },
  ],
  devops: [{ name: "Docker", level: 80, category: "DevOps" }],
};
