import SectionHeading from "./SectionHeading";
import LinkCard from "./LinkCard";

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
  <section id="workshops" className="py-20 md:py-28 bg-muted/30">
    <div className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Workshops"
          title="Beginner web development series"
          subtitle="A three-part workshop series I designed and taught at UChicago."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {workshops.map((w, i) => (
            <LinkCard
              key={w.title}
              meta={<span className="font-medium text-primary">Part {i + 1} of 3</span>}
              title={w.title}
              description={w.description}
              links={w.links}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Workshops;
