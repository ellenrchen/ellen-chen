import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
}

const SectionHeading = ({ eyebrow, title, subtitle }: SectionHeadingProps) => (
  <div className="mb-12 md:mb-16 max-w-2xl space-y-3">
    {eyebrow && (
      <p className="text-sm font-medium uppercase tracking-widest text-primary">{eyebrow}</p>
    )}
    <h2 className="font-serif italic text-4xl md:text-5xl tracking-tight text-foreground">{title}</h2>
    {subtitle && <p className="text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
  </div>
);

export default SectionHeading;
