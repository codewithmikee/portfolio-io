"use client";

import React, { useState } from "react";
import { Button } from "@workspace/ui/components/button";
import {
  Navbar,
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ExperienceSection,
  EducationSection,
  CertificationsSection,
  CVTemplate,
  mockProfiles,
  portfolioTemplates,
} from "@workspace/portfolio-ui";
import type {
  DeveloperProfile,
  PortfolioTemplate,
} from "@workspace/shared/types";

export const PortfolioUiDemo = () => {
  const [selectedProfile, setSelectedProfile] = useState(mockProfiles[0]!.id);
  const [selectedTemplate, setSelectedTemplate] = useState("minimal-portfolio");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isCV, setIsCV] = useState(false);
  const [sections, setSections] = useState([
    { id: "hero", name: "Hero", enabled: true, order: 1 },
    { id: "about", name: "About", enabled: true, order: 2 },
    { id: "skills", name: "Skills", enabled: true, order: 3 },
    { id: "projects", name: "Projects", enabled: true, order: 4 },
    { id: "experience", name: "Experience", enabled: true, order: 5 },
    { id: "education", name: "Education", enabled: true, order: 6 },
    { id: "certifications", name: "Certifications", enabled: true, order: 7 },
  ]);

  const currentProfile =
    mockProfiles.find((p) => p.id === selectedProfile) || mockProfiles[0]!;

  const handleProfileChange = (profileId: string) => {
    setSelectedProfile(profileId);
  };

  const handleTemplateChange = (templateId: string) => {
    setSelectedTemplate(templateId);
  };

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme as "light" | "dark");
  };

  const handleSectionToggle = (sectionId: string) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? { ...section, enabled: !section.enabled }
          : section
      )
    );
  };

  const enabledSections = sections.filter((s) => s.enabled);

  return (
    <div className={`min-h-screen ${theme === "dark" ? "dark" : ""}`}>
      <div className="bg-background text-foreground">
        <Navbar
          profiles={mockProfiles}
          templates={portfolioTemplates}
          selectedProfile={selectedProfile}
          selectedTemplate={selectedTemplate}
          theme={theme}
          sections={sections}
          currentPath={isCV ? "/cv" : "/"}
          onProfileChange={handleProfileChange}
          onTemplateChange={handleTemplateChange}
          onThemeChange={handleThemeChange}
          onSectionToggle={handleSectionToggle}
        />

        {isCV ? (
          <div className="max-w-4xl mx-auto p-6">
            <CVTemplate
              profile={currentProfile}
              style={selectedTemplate
                .replace("-portfolio", "")
                .replace("-cv", "")}
            />
          </div>
        ) : (
          <div className="space-y-16">
            {enabledSections.some((s) => s.id === "hero") && (
              <HeroSection
                profile={currentProfile}
                style={selectedTemplate.replace("-portfolio", "")}
              />
            )}

            {enabledSections.some((s) => s.id === "about") && (
              <AboutSection profile={currentProfile} />
            )}

            {enabledSections.some((s) => s.id === "skills") && (
              <SkillsSection profile={currentProfile} />
            )}

            {enabledSections.some((s) => s.id === "projects") && (
              <ProjectsSection profile={currentProfile} />
            )}

            {enabledSections.some((s) => s.id === "experience") && (
              <ExperienceSection profile={currentProfile} />
            )}

            {enabledSections.some((s) => s.id === "education") && (
              <EducationSection profile={currentProfile} />
            )}

            {enabledSections.some((s) => s.id === "certifications") && (
              <CertificationsSection profile={currentProfile} />
            )}
          </div>
        )}

        {/* Demo Controls */}
        <div className="fixed bottom-4 right-4 bg-card border rounded-lg p-4 shadow-lg">
          <div className="space-y-2">
            <h3 className="font-semibold text-sm">Demo Controls</h3>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant={isCV ? "default" : "outline"}
                onClick={() => setIsCV(false)}
              >
                Portfolio
              </Button>
              <Button
                size="sm"
                variant={isCV ? "outline" : "default"}
                onClick={() => setIsCV(true)}
              >
                CV
              </Button>
            </div>
            <div className="text-xs text-muted-foreground">
              Profile: {currentProfile.personalInfo.name}
            </div>
            <div className="text-xs text-muted-foreground">
              Template: {selectedTemplate}
            </div>
            <div className="text-xs text-muted-foreground">Theme: {theme}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
