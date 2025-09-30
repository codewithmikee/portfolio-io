# @workspace/portfolio-ui

A reusable UI package for portfolio and CV components, built on top of the workspace UI system.

## Features

- **Portfolio Components**: Ready-to-use portfolio section components
- **CV Templates**: Professional CV/resume templates
- **Theme Support**: Built-in theme provider for light/dark modes
- **TypeScript**: Fully typed with shared type definitions
- **Standalone**: Can be used by any app in the workspace

## Installation

This package is part of the workspace and is automatically available to other packages.

## Usage

### Basic Import

```typescript
import {
  Navbar,
  HeroSection,
  AboutSection,
  SkillsSection,
  CVTemplate,
} from "@workspace/portfolio-ui";
```

### Portfolio Components

```typescript
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ExperienceSection,
  EducationSection,
  CertificationsSection
} from "@workspace/portfolio-ui";

// Use in your portfolio page
<HeroSection profile={profile} style="minimal" />
<AboutSection profile={profile} />
<SkillsSection profile={profile} />
```

### CV Template

```typescript
import { CVTemplate } from "@workspace/portfolio-ui";

<CVTemplate
  profile={profile}
  style="modern" // or "classic", "ats-friendly"
/>
```

### Navigation

```typescript
import { Navbar } from "@workspace/portfolio-ui";

<Navbar
  profiles={profiles}
  templates={templates}
  selectedProfile={selectedProfile}
  selectedTemplate={selectedTemplate}
  theme={theme}
  sections={sections}
  currentPath="/portfolio" // Required for navigation state
  onProfileChange={setSelectedProfile}
  onTemplateChange={setSelectedTemplate}
  onThemeChange={setTheme}
  onSectionToggle={handleSectionToggle}
  onExportPDF={handleExportPDF} // Optional, for CV view
/>
```

### Theme Provider

```typescript
import { ThemeProvider } from "@workspace/portfolio-ui";

<ThemeProvider
  attribute="class"
  defaultTheme="light"
  enableSystem
>
  {children}
</ThemeProvider>
```

## Dependencies

This package uses:

- `@workspace/ui` - For shadcn/ui components and utilities
- `@workspace/shared` - For shared type definitions
- `lucide-react` - For icons
- `react` & `react-dom` - For React components

## Styling

The package includes its own global CSS file that can be imported:

```typescript
import "@workspace/portfolio-ui/styles";
```

## Type Definitions

All components are fully typed. Key types include:

- `DeveloperProfile` - Main profile data structure
- `PersonalInfo` - Personal information
- `Project` - Project data
- `Experience` - Work experience
- `Education` - Education history
- `Skill` - Skills with proficiency levels

## Building

```bash
pnpm build
```

## Development

```bash
pnpm dev
```

## Structure

```
src/
├── components/          # React components
│   ├── navbar.tsx      # Navigation component
│   ├── portfolio-sections.tsx  # Portfolio sections
│   ├── cv-template.tsx # CV template
│   └── theme-provider.tsx # Theme provider
├── lib/                # Utilities and data
│   ├── mock-data.ts    # Sample data
│   └── utils.ts        # Utility functions
├── styles/             # Styles
│   └── globals.css     # Global CSS
└── index.ts           # Main exports
```
