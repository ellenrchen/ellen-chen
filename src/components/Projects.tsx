import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import SectionHeading from "./SectionHeading";

const ProjectLink = ({ href, children }: { href: string; children: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-current"
  >
    {children}
    <ArrowUpRight className="h-4 w-4" />
  </a>
);

const Pipeline = ({ steps }: { steps: string[] }) => (
  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground">
    {steps.map((step, index) => (
      <div key={step} className="contents">
        <span className="border border-border bg-background px-3 py-2">{step}</span>
        {index < steps.length - 1 && <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />}
      </div>
    ))}
  </div>
);

const Projects = () => (
  <section id="projects" className="bg-background py-20 md:py-28">
    <div className="container mx-auto px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Projects" title="Selected builds" />

        <div className="space-y-6">
          <Card className="border border-border bg-card p-6 shadow-card md:p-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Featured project</p>
                <h3 className="mt-3 font-serif text-3xl italic text-foreground md:text-4xl">tech-news-agent</h3>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
                  A working news-digest pipeline that pulls from six RSS sources, creates concise summaries with GPT-4 Turbo, and delivers the result to the terminal, a file, or email. The repository includes CLI controls, scheduling, tests, and graceful handling for network and API failures.
                </p>

                <dl className="mt-6 grid gap-4 border-y border-border py-5 sm:grid-cols-3">
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">Input</dt>
                    <dd className="mt-1 text-sm font-medium text-foreground">Six configurable RSS feeds</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">Model</dt>
                    <dd className="mt-1 text-sm font-medium text-foreground">OpenAI GPT-4 Turbo</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">Delivery</dt>
                    <dd className="mt-1 text-sm font-medium text-foreground">Terminal, file, or email</dd>
                  </div>
                </dl>

                <div className="mt-6">
                  <Pipeline steps={["RSS feeds", "fetcher.py", "GPT-4 Turbo / summarizer.py", "digest.py", "terminal · file · email"]} />
                </div>

                <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                  <ProjectLink href="https://github.com/ellenrchen/tech-news-agent">View repository</ProjectLink>
                  <ProjectLink href="https://medium.com/@ellenrchen8/building-my-first-ai-agent-b97d0c1b1509">Read build log</ProjectLink>
                </div>
              </div>

              <div className="w-full shrink-0 border border-border bg-primary p-5 text-primary-foreground lg:w-[22rem]">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/60">README · Sample output</p>
                <pre className="mt-5 whitespace-pre-wrap font-mono text-xs leading-7 text-primary-foreground">{`TECH NEWS DIGEST — 2024-01-15 09:00

TECHCRUNCH (3 articles)
...
THE VERGE (2 articles)
...
Digest complete — 12 articles processed`}</pre>
              </div>
            </div>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="flex h-full flex-col border border-border bg-card p-6 shadow-card md:p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">In progress · Claude Agent SDK</p>
              <h3 className="mt-3 font-serif text-2xl italic text-foreground">ticket-triage-agent</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                A support-ticket triage benchmark in development. The project plan pairs a labeled synthetic dataset with classification, draft-reply, and human-escalation tools, then evaluates accuracy, escalation quality, latency, and cost. Results will be published only after the runs are complete.
              </p>
              <p className="mt-5 border-y border-border py-3 text-xs font-medium text-foreground">Building in public · in progress</p>
              <div className="mt-5">
                <Pipeline steps={["Labeled tickets", "Claude agent", "Evaluation harness"]} />
              </div>
              <div className="mt-6">
                <ProjectLink href="https://github.com/ellenrchen/ticket-triage-agent">View repository</ProjectLink>
              </div>
            </Card>

            <Card className="flex h-full flex-col border border-border bg-card p-6 shadow-card md:p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">OpenAI application</p>
              <h3 className="mt-3 font-serif text-2xl italic text-foreground">cook-my-fridge</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                An ingredient-to-recipe app with a React and TypeScript frontend, an Express backend, and server-side OpenAI GPT-4 integration so the API key stays out of the browser.
              </p>
              <div className="mt-6 border-t border-border pt-5">
                <Pipeline steps={["Ingredients", "Express API", "GPT-4 recipes"]} />
              </div>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                <ProjectLink href="https://github.com/ellenrchen/cook-my-fridge">View repository</ProjectLink>
                <ProjectLink href="https://cook-my-fridge.lovable.app/">Open live app</ProjectLink>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;