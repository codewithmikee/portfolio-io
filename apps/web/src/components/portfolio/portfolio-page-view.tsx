"use client";
import { DeveloperProfile, PortfolioTemplate } from "@workspace/shared/types";
import React, { useMemo, useCallback, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import PortfolioPageNavbar from "./portfolio-page-navbar";
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ExperienceSection,
  EducationSection,
  CertificationsSection,
} from "@workspace/ui/components/portfolios/portfolio-sections";
import { CVTemplate } from "@workspace/ui/components/portfolios/cv-template";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

export interface PortfolioPageViewProps {
  profile: DeveloperProfile;
  template: PortfolioTemplate;
  cvTemplate: PortfolioTemplate;
}
function PortfolioPageView(props: PortfolioPageViewProps) {
  const { profile, template, cvTemplate } = props;
  const pathname = usePathname();
  const isCV = pathname === "/cv";
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light");

  const enabledSections = useMemo(
    () => [
      { id: "hero", name: "Hero", enabled: true, order: 0 },
      { id: "about", name: "About", enabled: true, order: 1 },
      { id: "skills", name: "Skills", enabled: true, order: 2 },
      { id: "projects", name: "Projects", enabled: true, order: 3 },
      { id: "experience", name: "Experience", enabled: true, order: 4 },
      { id: "education", name: "Education", enabled: true, order: 5 },
      {
        id: "certifications",
        name: "Certifications & Awards",
        enabled: true,
        order: 6,
      },
    ],
    []
  );

  const handleExportPDF = useCallback(() => {
    // Basic export using browser print-to-PDF for now
    if (typeof window !== "undefined") {
      window.print();
    }
  }, []);

  const handleThemeChange = useCallback((newTheme: string) => {
    setTheme(newTheme as "light" | "dark" | "system");
  }, []);

  useEffect(() => {
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      document.documentElement.classList.toggle("dark", systemTheme === "dark");
    } else {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme]);

  const renderSection = (sectionId: string) => {
    switch (sectionId) {
      case "hero":
        return (
          <HeroSection key="hero" profile={profile} style={template.style} />
        );
      case "about":
        return <AboutSection key="about" profile={profile} />;
      case "skills":
        return <SkillsSection key="skills" profile={profile} />;
      case "projects":
        return <ProjectsSection key="projects" profile={profile} />;
      case "experience":
        return <ExperienceSection key="experience" profile={profile} />;
      case "education":
        return <EducationSection key="education" profile={profile} />;
      case "certifications":
        return <CertificationsSection key="certifications" profile={profile} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <PortfolioPageNavbar
        {...props}
        onExportPDF={handleExportPDF}
        theme={theme}
        onThemeChange={handleThemeChange}
      />

      <div className="w-full">
        <div className="w-full">
          <div className="bg-white shadow-lg">
            {isCV ? (
              <CVTemplate profile={profile} style={cvTemplate.style} />
            ) : (
              enabledSections
                .filter((s) => s.enabled)
                .sort((a, b) => a.order - b.order)
                .map((s) => renderSection(s.id))
            )}
          </div>
        </div>
      </div>

      <div className="fixed z-50 bottom-0 left-0 right-0">
        <Card>
          <CardHeader>
            <CardTitle>Debug</CardTitle>
          </CardHeader>

          <CardContent>
            <p>
              Selected template: {template.name}
              Selected cv: {cvTemplate.name}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default PortfolioPageView;
