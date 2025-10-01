"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Layout,
  Download,
  Moon,
  Sun,
  Monitor,
  ChevronDown,
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
import { PortfolioPageViewProps } from "./portfolio-page-view";

type NavbarProps = PortfolioPageViewProps & {
  onExportPDF?: () => void;
  theme?: string;
  onThemeChange?: (theme: string) => void;
};

function PortfolioPageNavbar({
  profile,
  template,
  cvTemplate,
  onExportPDF,
  theme = "light",
  onThemeChange,
}: NavbarProps) {
  const pathname = usePathname();
  const isCV = pathname === "/cv";

  const themes = [
    { id: "light", icon: <Sun className="w-4 h-4" />, label: "Light" },
    { id: "dark", icon: <Moon className="w-4 h-4" />, label: "Dark" },
    { id: "system", icon: <Monitor className="w-4 h-4" />, label: "System" },
  ];

  // Create short header text
  const shortTitle = `${profile.personalInfo.name} - ${profile.personalInfo.title}`;

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <h1 className="text-xl font-bold text-foreground truncate max-w-md">
              {shortTitle}
            </h1>

            {/* View Toggle */}
            <div className="flex items-center gap-2 px-3 py-2 bg-muted rounded-lg">
              <Link
                href="/"
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  !isCV
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Portfolio
              </Link>
              <Link
                href="/cv"
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  isCV
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                CV
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Download CV Button - Only show on CV view */}
            {isCV && (
              <Button className="gap-2" onClick={onExportPDF}>
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download CV</span>
              </Button>
            )}

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
                    onClick={() => onThemeChange?.(t.id)}
                    className={`flex items-center gap-2 ${
                      theme === t.id ? "bg-accent" : ""
                    }`}
                  >
                    {t.icon}
                    <span>{t.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}

export default PortfolioPageNavbar;
