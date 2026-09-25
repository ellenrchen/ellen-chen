import SectionHeading from "./SectionHeading";

interface Workshop {
  title: string;
  description: string;
  links: { label: string; href: string }[];
}

interface Series {
  name: string;
  venue: string;
  workshops: Workshop[];
}

// New series can simply be appended to this list — each renders as its own group.
const seriesList: Series[] = [
  {
    name: "Beginner web development series",
    venue: "The University of Chicago",
    workshops: [
      {
        title: "Intro to HTML",
        description: "Build a personal website from scratch.",
        links: [
          { label: "Repo", href: "https://github.com/ellenrchen/intro-html-workshop" },
          { label: "Demo", href: "https://ellenrchen.github.io/intro-html-workshop/" },
        ],
      },
      {
        title: "Intro to CSS",
        description: "Style that website — the sequel to the HTML workshop.",
        links: [
          { label: "Repo", href: "https://github.com/ellenrchen/intro-css-workshop" },
          { label: "Demo", href: "https://ellenrchen.github.io/intro-css-workshop/" },
        ],
      },
      {
        title: "Intro to JavaScript",
        description: "Build a to-do list app.",
        links: [{ label: "Repo", href: "https://github.com/ellenrchen/intro-js-workshop" }],
      },
    ],
  },
];

const Workshops = () => (
  <section id="workshops" className="py-20 md:py-28">
    <div className="max-w-5xl mx-auto">
      <SectionHeading eyebrow="Workshops" title="Workshops" />

      <div className="space-y-20">
        {seriesList.map((series) => (
          <div key={series.name}>
            {/* Series group header */}
            <header className="border-b border-border pb-6 mb-2 flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
              <h3 className="font-serif italic text-2xl md:text-3xl text-foreground">
                {series.name}
              </h3>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                {series.venue}
              </span>
            </header>

            {/* Workshop rows */}
            <div className="divide-y divide-border">
              {series.workshops.map((w, i) => (
                <div
                  key={w.title}
                  className="group py-8 md:py-10 flex flex-col md:flex-row md:items-start gap-4 md:gap-12"
                >
                  <div className="w-12 shrink-0 text-sm tabular-nums text-muted-foreground pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-medium text-foreground mb-2">{w.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mb-5">
                      {w.description}
                    </p>
                    <div className="flex gap-6">
                      {w.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold uppercase tracking-widest text-foreground border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Workshops;
