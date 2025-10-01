import { Skill } from "./portfolio.types";

export type ThemePreference = "light" | "dark" | "system";

export type PortfolioSection =
  | "hero"
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "education"
  | "certifications"
  | "blogs";

export interface PortfolioUiPreference {
  // Theme preference
  defaultTheme: ThemePreference;
  allowThemeChange?: boolean;
  allowThemeChangeOnCv?: boolean;
  // Sections preference
  portfolioTemplateId: string;
  cvTemplateId: string;

  // sections preference
  portfolioSections?: PortfolioSection[];
  cvSections?: PortfolioSection[];

  // skills
  mainSkills?: Skill[];
}

export interface PortfolioTemplate {
  id: string;
  name: string;
  description: string;
  preview: string;
  style: string;
}

export interface CvTemplate {
  id: string;
  name: string;
  description: string;
  preview: string;
  style: string;
}
