import SectionHeading from "./SectionHeading";
import LinkCard from "./LinkCard";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    title: "Jev: Less Talking, More Doing",
    date: "Sep 2026",
    description:
      "An explainer on TypeSafe AI's Jev, a \"System One\" model that returns structured answers instead of generating tokens — speed, cost, a skeptical look at vendor benchmarks, and real use cases.",
    href: "https://medium.com/@ellenrchen8/jev-your-llm-is-too-slow-bdb07c328eac",
  },
  {
    title: "Building My First AI Agent",
    date: "Jun 2025",
    description:
      "A hands-on build log of a Python news-digest agent built with Cursor + Claude-4-Sonnet, with real code, architecture, and token cost analysis.",
    href: "https://medium.com/@ellenrchen8/building-my-first-ai-agent-b97d0c1b1509",
  },
  {
    title: "AI Agents and MCP — An Introduction",
    date: "Jun 2025",
    description: "A primer on AI agents vs. bots, agentic workflows, and the Model Context Protocol.",
    href: "https://medium.com/@ellenrchen8/ai-agents-and-mcp-an-introduction-13d739a2c5a1",
  },
  {
    title: "The World of AI",
    date: "Aug 2025",
    description: "LLMs, RAG, and prompt engineering, explained.",
    href: "https://medium.com/@ellenrchen8/the-world-of-ai-8b921ec2a30d",
  },
  {
    title: "System Design: APIs",
    date: "Aug 2025",
    description: "REST vs. RPC vs. GraphQL, explained through restaurant analogies.",
    href: "https://medium.com/@ellenrchen8/system-design-apis-7c836b17a83d",
  },
  {
    title: "System Design: Databases",
    date: "Aug 2025",
    description: "SQL vs. NoSQL for system design interviews.",
    href: "https://medium.com/@ellenrchen8/system-design-databases-f028d42840b4",
  },
];

const Writing = () => {
  const featured = articles.slice(0, 3);
  const rest = articles.slice(3);

  return (
    <section id="writing" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Writing"
            title="Articles on AI agents & developer tools"
            subtitle="Explainers and build logs I publish on Medium."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((a) => (
              <LinkCard
                key={a.href}
                featured
                meta={a.date}
                title={a.title}
                description={a.description}
                links={[{ label: "Read on Medium", href: a.href }]}
              />
            ))}
          </div>

          <ul className="mt-10 divide-y divide-border border-y border-border">
            {rest.map((a) => (
              <li key={a.href}>
                <a
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <span className="w-20 shrink-0 text-sm text-muted-foreground">{a.date}</span>
                  <span className="flex-1">
                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {a.title}
                    </span>
                    <span className="block text-muted-foreground">{a.description}</span>
                  </span>
                  <ArrowUpRight className="hidden h-4 w-4 text-muted-foreground group-hover:text-primary sm:block" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://medium.com/@ellenrchen8"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4"
          >
            All articles on Medium <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Writing;
