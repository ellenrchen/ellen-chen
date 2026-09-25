import SectionHeading from "./SectionHeading";

const linkClass =
  "font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground";

const About = () => (
  <section id="about" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading eyebrow="About" title="About me" />
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            I'm a software engineer at{" "}
            <a href="https://www.eliseai.com" target="_blank" rel="noopener noreferrer" className={linkClass}>
              EliseAI
            </a>
            , with experience at{" "}
            <a href="https://www.doordash.com" target="_blank" rel="noopener noreferrer" className={linkClass}>
              DoorDash
            </a>{" "}
            and{" "}
            <a href="https://www.microsoft.com" target="_blank" rel="noopener noreferrer" className={linkClass}>
              Microsoft
            </a>{" "}
            previously. I love turning complex problems into simple, beautiful solutions that users actually enjoy using.
          </p>
          <p>
            Outside of work, you may find me at a photo shoot or on a runway, capturing content for a new local
            restaurant (follow me on{" "}
            <a href="https://www.instagram.com/ellyeats_" target="_blank" rel="noopener noreferrer" className={linkClass}>
              Instagram
            </a>
            ), or drafting up a new blog for technical content on{" "}
            <a href="https://medium.com/@ellenrchen8" target="_blank" rel="noopener noreferrer" className={linkClass}>
              Medium
            </a>
            . I'm also a big Duke fan.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
