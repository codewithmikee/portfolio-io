"use client";
import { DefaultPortfolio } from "@workspace/ui/lib/mock-data";
import PortfolioPageView from "@/components/portfolio/portfolio-page-view";
import { CVTemplate } from "@workspace/ui/components/portfolios/cv-template";

export default function CVPage() {
  const { portfolio, defaultPortfolioTemplate, defaultCvTemplate } =
    DefaultPortfolio;
  return <CVTemplate profile={portfolio} style={defaultCvTemplate.style} />;
}
