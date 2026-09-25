import SectionHeading from "./SectionHeading";
import LinkCard from "./LinkCard";

const projects = [
  {
    title: "tech-news-agent",
    meta: "Python · OpenAI",
    description: "An AI agent that fetches tech news from RSS feeds, summarizes it with OpenAI, and emails a digest.",
    links: [{ label: "GitHub", href: "https://github.com/ellenrchen/tech-news-agent" }],
  },
  {
    title: "cook-my-fridge",
    meta: "TypeScript · AI",
    description: "An AI app that turns leftover ingredients into recipe ideas.",
    links: [
      { label: "GitHub", href: "https://github.com/ellenrchen/cook-my-fridge" },
      { label: "Live site", href: "https://cook-my-fridge.lovable.app/" },
    ],
  },
];

const Projects = () => (
  <section id="projects" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="Projects" title="Side projects" subtitle="Things I've built to explore AI tooling." />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <LinkCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
