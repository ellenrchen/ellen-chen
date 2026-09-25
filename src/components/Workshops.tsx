import SectionHeading from "./SectionHeading";

const workshops = [
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
];

const Workshops = () => (
  <section id="workshops" className="py-20 md:py-28">
    <div className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Workshops"
          title="Beginner web development series"
          subtitle="A three-part workshop series I designed and taught at UChicago."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {workshops.map((w, i) => (
            <div
              key={w.title}
              className="group border border-border bg-card p-8 flex flex-col justify-between transition-colors duration-300 hover:border-primary"
            >
              <div>
                <span className="block text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-8">
                  Part {i + 1} of 3
                </span>
                <h3 className="text-2xl font-medium text-foreground mb-4">{w.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-12">
                  {w.description}
                </p>
              </div>
              <div className="flex gap-6">
                {w.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold uppercase tracking-widest text-foreground border-b border-transparent pb-0.5 hover:border-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Workshops;
