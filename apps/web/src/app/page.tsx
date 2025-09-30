"use client";

import { Portfolio } from "@workspace/shared";
import { Button } from "@workspace/ui/components/button";
import {
  Navbar,
  HeroSection,
  AboutSection,
  mockProfiles,
  portfolioTemplates,
} from "@workspace/portfolio-ui";

export default function Page() {
  const typeCheck: Portfolio | undefined = undefined;
  const profile = mockProfiles[0]!;

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        profiles={mockProfiles}
        templates={portfolioTemplates}
        selectedProfile={profile.id}
        selectedTemplate="minimal-portfolio"
        theme="light"
        sections={[]}
        currentPath="/"
        onProfileChange={() => {}}
        onTemplateChange={() => {}}
        onThemeChange={() => {}}
        onSectionToggle={() => {}}
      />

      <div className="flex items-center justify-center min-h-svh">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-bold">Portfolio UI Package Demo</h1>
          <Button size="sm">Button from @workspace/ui</Button>
          <p>Type checking working with @workspace/shared</p>
          <p>Portfolio UI components loaded successfully!</p>
        </div>
      </div>
    </div>
  );
}
