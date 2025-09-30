"use client";
import {
  User,
  Layout,
  Settings,
  ChevronDown,
  Moon,
  Sun,
  Monitor,
  Download,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { Button } from "@workspace/ui/components/button";
import { Switch } from "@workspace/ui/components/switch";
import type {
  DeveloperProfile,
  PortfolioTemplate,
} from "@workspace/shared/types";

interface SectionConfig {
  id: string;
  name: string;
  enabled: boolean;
  order: number;
}

interface NavbarProps {
  profiles: DeveloperProfile[];
  templates: PortfolioTemplate[];
  selectedProfile: string;
  selectedTemplate: string;
  theme: string;
  sections: SectionConfig[];
  currentPath?: string;
  onProfileChange: (profileId: string) => void;
  onTemplateChange: (templateId: string) => void;
  onThemeChange: (theme: string) => void;
  onSectionToggle: (sectionId: string) => void;
  onExportPDF?: () => void;
}

export function Navbar({
  profiles,
  templates,
  selectedProfile,
  selectedTemplate,
  theme,
  sections,
  currentPath = "/",
  onProfileChange,
  onTemplateChange,
  onThemeChange,
  onSectionToggle,
  onExportPDF,
}: NavbarProps) {
  const isCV = currentPath === "/cv";

  const currentProfile =
    profiles.find((p) => p.id === selectedProfile) || profiles[0]!;
  const currentTemplate =
    templates.find((t) => t.id === selectedTemplate) || templates[0]!;

  // Filter templates based on current view
  const filteredTemplates = templates.filter((t) =>
    isCV ? t.category === "cv" : t.category === "portfolio"
  );

  const themes = [
    { id: "light", icon: <Sun className="w-4 h-4" />, label: "Light" },
    { id: "dark", icon: <Moon className="w-4 h-4" />, label: "Dark" },
    { id: "system", icon: <Monitor className="w-4 h-4" />, label: "System" },
  ];

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <h1 className="text-xl font-bold text-foreground">
              Portfolio Builder
            </h1>

            {/* View Toggle */}
            <div className="flex items-center gap-2 px-3 py-2 bg-muted rounded-lg">
              <button
                onClick={() => (window.location.href = "/")}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  !isCV
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Portfolio
              </button>
              <button
                onClick={() => (window.location.href = "/cv")}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  isCV
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                CV
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            {/* Profile Selector Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2 bg-transparent">
                  <User className="w-4 h-4" />
                  <span className="hidden sm:inline">
                    {currentProfile.personalInfo.name}
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Select Profile</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {profiles.map((profile) => (
                  <DropdownMenuItem
                    key={profile.id}
                    onClick={() => onProfileChange(profile.id)}
                    className={
                      selectedProfile === profile.id ? "bg-accent" : ""
                    }
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">
                        {profile.personalInfo.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {profile.personalInfo.title}
                      </span>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Template Selector Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2 bg-transparent">
                  <Layout className="w-4 h-4" />
                  <span className="hidden sm:inline">
                    {currentTemplate.name}
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-72 max-h-96 overflow-y-auto"
              >
                <DropdownMenuLabel>
                  {isCV ? "CV Templates" : "Portfolio Templates"}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {filteredTemplates.map((template) => (
                  <DropdownMenuItem
                    key={template.id}
                    onClick={() => onTemplateChange(template.id)}
                    className={
                      selectedTemplate === template.id ? "bg-accent" : ""
                    }
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{template.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {template.description}
                      </span>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Settings Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2 bg-transparent">
                  <Settings className="w-4 h-4" />
                  <span className="hidden sm:inline">Settings</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                <DropdownMenuLabel>Sections</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {sections
                  .sort((a, b) => a.order - b.order)
                  .map((section) => (
                    <DropdownMenuItem
                      key={section.id}
                      onClick={() => onSectionToggle(section.id)}
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <span>{section.name}</span>
                      <Switch
                        checked={section.enabled}
                        onCheckedChange={() => {}}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </DropdownMenuItem>
                  ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Selector Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-transparent"
                >
                  {theme === "light" && <Sun className="w-4 h-4" />}
                  {theme === "dark" && <Moon className="w-4 h-4" />}
                  {theme === "system" && <Monitor className="w-4 h-4" />}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Theme</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {themes.map((t) => (
                  <DropdownMenuItem
                    key={t.id}
                    onClick={() => onThemeChange(t.id)}
                    className={theme === t.id ? "bg-accent" : ""}
                  >
                    <div className="flex items-center gap-2">
                      {t.icon}
                      <span>{t.label}</span>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Export PDF Button - Only show on CV view */}
            {isCV && onExportPDF && (
              <Button onClick={onExportPDF} className="gap-2">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Export PDF</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
