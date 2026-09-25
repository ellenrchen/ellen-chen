import SectionHeading from "./SectionHeading";
import { ArrowUpRight, BookOpen, Clapperboard } from "lucide-react";

const MediumLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

const articles = [
  {
    title: "Jev: Less Talking, More Doing",
    date: "Sep 2026",
    readTime: "6 min read",
    description:
      "An explainer on TypeSafe AI's Jev, a \"System One\" model that returns structured answers instead of generating tokens — speed, cost, a skeptical look at vendor benchmarks, and real use cases.",
    href: "https://medium.com/@ellenrchen8/jev-your-llm-is-too-slow-bdb07c328eac",
  },
  {
    title: "Building My First AI Agent",
    date: "Jun 2025",
    readTime: "8 min read",
    description:
      "A hands-on build log of a Python news-digest agent built with Cursor + Claude-4-Sonnet, with real code, architecture, and token cost analysis.",
    href: "https://medium.com/@ellenrchen8/building-my-first-ai-agent-b97d0c1b1509",
  },
  {
    title: "AI Agents and MCP — An Introduction",
    date: "Jun 2025",
    readTime: "5 min read",
    description: "A primer on AI agents vs. bots, agentic workflows, and the Model Context Protocol.",
    href: "https://medium.com/@ellenrchen8/ai-agents-and-mcp-an-introduction-13d739a2c5a1",
  },
  {
    title: "The World of AI",
    date: "Aug 2025",
    readTime: "7 min read",
    description: "LLMs, RAG, and prompt engineering, explained.",
    href: "https://medium.com/@ellenrchen8/the-world-of-ai-8b921ec2a30d",
  },
  {
    title: "System Design: APIs",
    date: "Aug 2025",
    readTime: "6 min read",
    description: "REST vs. RPC vs. GraphQL, explained through restaurant analogies.",
    href: "https://medium.com/@ellenrchen8/system-design-apis-7c836b17a83d",
  },
  {
    title: "System Design: Databases",
    date: "Aug 2025",
    readTime: "6 min read",
    description: "SQL vs. NoSQL for system design interviews.",
    href: "https://medium.com/@ellenrchen8/system-design-databases-f028d42840b4",
  },
];

const Writing = () => (
  <section id="writing" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Writing"
          title="Articles on AI agents & developer tools"
          subtitle="Explainers and build logs I publish on Medium."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <a
              key={a.href}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Medium-style author header */}
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  EC
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">Ellen Chen</p>
                  <p className="text-xs text-muted-foreground">
                    {a.date} · {a.readTime}
                  </p>
                </div>
                <MediumLogo className="ml-auto h-5 w-5 shrink-0 text-muted-foreground" />
              </div>

              <h3 className="text-lg font-bold leading-snug text-foreground group-hover:text-primary transition-colors">
                {a.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                {a.description}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <BookOpen className="h-3.5 w-3.5" /> Read on Medium
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </div>
            </a>
          ))}
        </div>

        <a
          href="https://medium.com/@ellenrchen8"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
        >
          <MediumLogo className="h-4 w-4" /> All articles on Medium <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
);

export default Writing;
