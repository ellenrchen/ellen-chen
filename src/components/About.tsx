import { Card } from "@/components/ui/card";
import { Camera, PenLine, UtensilsCrossed } from "lucide-react";
import SectionHeading from "./SectionHeading";

const interests = [
  { icon: Camera, title: "Modeling", description: "4 seasons at New York Fashion Week; published in Vogue Thailand, Elle Thailand, Vogue Portugal, and more.", href: undefined },
  { icon: UtensilsCrossed, title: "Food", description: "Running my food account @ellyeats_ — follow along for what I'm eating in NYC.", href: "https://www.instagram.com/ellyeats_" },
  { icon: PenLine, title: "Writing", description: "Technical content on AI agents and developer tools, published on Medium.", href: "https://medium.com/@ellenrchen8" },
];

const About = () => (
  <section id="about" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="About" title="About me" />
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a passionate software engineer with over 3 years of experience building scalable products.
              I love turning complex problems into simple, beautiful solutions that users actually enjoy using.
            </p>
            <p>
              Outside of work, I'm a model, I run a food account on Instagram, and I write technical content.
              You'll also find me at the gym chasing a new PR or following Duke basketball (goooo Blue Devils!!).
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Outside of work</h3>
            {interests.map((i) => {
              const content = (
                <>
                  <div className="rounded-md bg-primary/10 p-2">
                    <i.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{i.title}</h4>
                    <p className="text-sm text-muted-foreground">{i.description}</p>
                  </div>
                </>
              );
              const className = "flex items-start gap-4 border border-border p-4 shadow-none";
              return i.href ? (
                <a key={i.title} href={i.href} target="_blank" rel="noopener noreferrer" className="block transition-transform hover:-translate-y-0.5">
                  <Card className={className}>{content}</Card>
                </a>
              ) : (
                <Card key={i.title} className={className}>{content}</Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
