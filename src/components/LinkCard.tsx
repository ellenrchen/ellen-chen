import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export interface CardLink {
  label: string;
  href: string;
}

interface LinkCardProps {
  meta?: ReactNode;
  title: string;
  description: string;
  links: CardLink[];
  featured?: boolean;
}

const LinkCard = ({ meta, title, description, links, featured }: LinkCardProps) => (
  <Card
    className={`flex h-full flex-col p-6 border bg-card shadow-card transition-shadow duration-300 hover:shadow-elegant ${
      featured ? "border-primary/20" : "border-border"
    }`}
  >
    {meta && <div className="mb-3 text-sm text-muted-foreground">{meta}</div>}
    <h3 className="text-lg font-semibold leading-snug text-foreground">{title}</h3>
    <p className="mt-2 flex-1 text-base leading-relaxed text-muted-foreground">{description}</p>
    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4"
        >
          {link.label}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      ))}
    </div>
  </Card>
);

export default LinkCard;
