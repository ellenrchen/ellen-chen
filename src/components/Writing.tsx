import SectionHeading from "./SectionHeading";
import { ArrowUpRight, Bookmark, MoreHorizontal } from "lucide-react";

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
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          eyebrow="Writing"
          title="Articles on AI agents & developer tools"
          subtitle="Explainers and build logs I publish on Medium."
        />

        {/* Medium profile embed lookalike */}
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
          {/* Medium-style profile header */}
          <div className="flex items-center gap-4 border-b border-border px-6 py-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-base font-semibold text-primary">
              EC
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-foreground">Ellen Chen</p>
              <p className="text-sm text-muted-foreground">@ellenrchen8 · Software Engineer @ EliseAI</p>
            </div>
            <a
              href="https://medium.com/@ellenrchen8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary px-4 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Follow
            </a>
          </div>

          {/* Article rows, Medium reading-list style */}
          <div className="divide-y divide-border">
            {articles.map((a) => (
              <a
                key={a.href}
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block px-6 py-6 transition-colors hover:bg-muted/40"
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MediumLogo className="h-3.5 w-3.5" />
                  <span>Ellen Chen</span>
                  <span>·</span>
                  <span>{a.date}</span>
                </div>
                <h3 className="mt-2 text-xl font-bold leading-snug tracking-tight text-foreground group-hover:underline underline-offset-4">
                  {a.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {a.description}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{a.readTime}</span>
                  <span className="flex items-center gap-3 text-muted-foreground">
                    <Bookmark className="h-4 w-4" />
                    <MoreHorizontal className="h-4 w-4" />
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Footer bar */}
          <a
            href="https://medium.com/@ellenrchen8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border-t border-border bg-muted/30 px-6 py-3.5 text-sm font-medium text-primary transition-colors hover:bg-muted/60"
          >
            <MediumLogo className="h-4 w-4" /> Read all articles on Medium <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Writing;
