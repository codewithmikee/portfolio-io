"use client";
import { DefaultPortfolio } from "@workspace/ui/lib/mock-data";
import PortfolioPageView from "@/components/portfolio/portfolio-page-view";

export default function CVPage() {
  const { portfolio, defaultPortfolioTemplate, defaultCvTemplate } =
    DefaultPortfolio;
  return (
    <PortfolioPageView
      profile={portfolio}
      template={defaultPortfolioTemplate}
      cvTemplate={defaultCvTemplate}
    />
  );
}
