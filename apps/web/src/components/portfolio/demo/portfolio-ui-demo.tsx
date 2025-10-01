"use client";

import { useState, useRef, useEffect } from "react";
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ExperienceSection,
  EducationSection,
  CertificationsSection,
} from "@workspace/ui/components/portfolios/portfolio-sections";
import { mockProfiles, portfolioTemplates } from "@workspace/ui/lib/mock-data";
import { PortfolioNavbar } from "./portfolio-demo-navbar";

interface SectionConfig {
  id: string;
  name: string;
  enabled: boolean;
  order: number;
}

export default function PortfolioUiDemo() {
  const [selectedProfile, setSelectedProfile] = useState(mockProfiles[0]!.id);
  const [selectedTemplate, setSelectedTemplate] = useState("minimal-portfolio");
  const [theme, setTheme] = useState("light");
  const [sections, setSections] = useState<SectionConfig[]>([
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
  ]);

  const previewRef = useRef<HTMLDivElement>(null);

  const currentProfile =
    mockProfiles.find((p) => p.id === selectedProfile) || mockProfiles[0]!;
  const currentTemplate =
    portfolioTemplates.find((t) => t.id === selectedTemplate) ||
    portfolioTemplates[0]!;

  const handleSectionToggle = (sectionId: string) => {
    setSections((prev) =>
      prev.map((s) => (s.id === sectionId ? { ...s, enabled: !s.enabled } : s))
    );
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const enabledSections = sections
    .filter((s) => s.enabled)
    .sort((a, b) => a.order - b.order);

  const renderSection = (sectionId: string) => {
    switch (sectionId) {
      case "hero":
        return (
          <HeroSection
            key="hero"
            profile={currentProfile}
            style={currentTemplate.style}
          />
        );
      case "about":
        return <AboutSection key="about" profile={currentProfile} />;
      case "skills":
        return <SkillsSection key="skills" profile={currentProfile} />;
      case "projects":
        return <ProjectsSection key="projects" profile={currentProfile} />;
      case "experience":
        return <ExperienceSection key="experience" profile={currentProfile} />;
      case "education":
        return <EducationSection key="education" profile={currentProfile} />;
      case "certifications":
        return (
          <CertificationsSection
            key="certifications"
            profile={currentProfile}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <PortfolioNavbar
        profiles={mockProfiles}
        templates={portfolioTemplates}
        selectedProfile={selectedProfile}
        selectedTemplate={selectedTemplate}
        theme={theme}
        sections={sections}
        onProfileChange={setSelectedProfile}
        onTemplateChange={setSelectedTemplate}
        onThemeChange={setTheme}
        onSectionToggle={handleSectionToggle}
      />

      <div className="w-full">
        <div ref={previewRef} className="w-full">
          <div className="bg-white shadow-lg">
            {enabledSections.map((section) => renderSection(section.id))}
          </div>
        </div>
      </div>
    </div>
  );
}
