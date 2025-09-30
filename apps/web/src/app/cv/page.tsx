"use client";

import { useState, useRef, useEffect } from "react";
import { CVTemplate } from "@workspace/ui/components/portfolios/cv-template";
import { mockProfiles, portfolioTemplates } from "@workspace/ui/lib/mock-data";
import { PortfolioNavbar } from "@/components/portfolio-navbar";

interface SectionConfig {
  id: string;
  name: string;
  enabled: boolean;
  order: number;
}

export default function CVPage() {
  const [selectedProfile, setSelectedProfile] = useState(mockProfiles[0]!.id);
  const [selectedTemplate, setSelectedTemplate] = useState("modern-cv");
  const [theme, setTheme] = useState("light");
  const [sections, setSections] = useState<SectionConfig[]>([
    { id: "header", name: "Header", enabled: true, order: 0 },
    { id: "about", name: "About", enabled: true, order: 1 },
    { id: "experience", name: "Experience", enabled: true, order: 2 },
    { id: "education", name: "Education", enabled: true, order: 3 },
    { id: "skills", name: "Skills", enabled: true, order: 4 },
    {
      id: "certifications",
      name: "Certifications & Awards",
      enabled: true,
      order: 5,
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

  const handleExportPDF = async () => {
    if (!previewRef.current) return;

    try {
      const printWindow = window.open("", "_blank");
      if (!printWindow) {
        alert("Please allow popups to export PDF");
        return;
      }

      const content = previewRef.current.innerHTML;

      const styles = Array.from(document.styleSheets)
        .map((styleSheet) => {
          try {
            return Array.from(styleSheet.cssRules)
              .map((rule) => rule.cssText)
              .join("\n");
          } catch (e) {
            return "";
          }
        })
        .join("\n");

      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>${currentProfile.personalInfo.name} - ${currentTemplate.name}</title>
            <style>
              ${styles}
              
              @media print {
                body {
                  margin: 0;
                  padding: 0;
                  background: white !important;
                }
                
                * {
                  --background: rgb(255, 255, 255) !important;
                  --foreground: rgb(23, 23, 23) !important;
                  --card: rgb(255, 255, 255) !important;
                  --card-foreground: rgb(23, 23, 23) !important;
                  --primary: rgb(37, 37, 37) !important;
                  --primary-foreground: rgb(250, 250, 250) !important;
                  --secondary: rgb(245, 245, 245) !important;
                  --muted: rgb(245, 245, 245) !important;
                  --muted-foreground: rgb(115, 115, 115) !important;
                  --border: rgb(229, 229, 229) !important;
                }
                
                section {
                  page-break-inside: avoid;
                }
              }
            </style>
          </head>
          <body>
            ${content}
          </body>
        </html>
      `);

      printWindow.document.close();

      printWindow.onload = () => {
        setTimeout(() => {
          printWindow.print();
          setTimeout(() => {
            printWindow.close();
          }, 100);
        }, 250);
      };
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert(
        `Failed to generate PDF: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

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
        onExportPDF={handleExportPDF}
      />

      <div className="w-full">
        <div ref={previewRef} className="w-full">
          <div className="bg-white shadow-lg">
            <CVTemplate
              profile={currentProfile}
              style={currentTemplate.style}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
