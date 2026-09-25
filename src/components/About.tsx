import SectionHeading from "./SectionHeading";

const baseLink =
  "font-medium underline decoration-border underline-offset-4 transition-colors";

const brandLink = (color: string) => `${baseLink} hover:decoration-current`;
const brandStyle = (color: string) => ({ color });

const About = () => (
  <section id="about" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading eyebrow="About" title="About me" />
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            I'm a software engineer at{" "}
            <a
              href="https://www.eliseai.com"
              target="_blank"
              rel="noopener noreferrer"
              className={brandLink("#4353FF")}
              style={brandStyle("#4353FF")}
            >
              EliseAI
            </a>
            , with experience at{" "}
            <a
              href="https://www.doordash.com"
              target="_blank"
              rel="noopener noreferrer"
              className={brandLink("#FF3008")}
              style={brandStyle("#FF3008")}
            >
              DoorDash
            </a>{" "}
            and{" "}
            <a
              href="https://www.microsoft.com"
              target="_blank"
              rel="noopener noreferrer"
              className={brandLink("#0078D4")}
              style={brandStyle("#0078D4")}
            >
              Microsoft
            </a>{" "}
            previously. Much of my work has been taking messy, high-stakes
            workflows and shaping them into products people actually enjoy
            using.
          </p>
          <p>
            Outside of work, you may find me at a photo shoot or on a runway,
            capturing content for a new local restaurant (follow me on{" "}
            <a
              href="https://www.instagram.com/ellyeats_"
              target="_blank"
              rel="noopener noreferrer"
              className={brandLink("#E1306C")}
              style={brandStyle("#E1306C")}
            >
              Instagram
            </a>
            ), or drafting up a new blog for technical content on{" "}
            <a
              href="https://medium.com/@ellenrchen8"
              target="_blank"
              rel="noopener noreferrer"
              className={baseLink}
            >
              Medium
            </a>
            . I'm also a big{" "}
            <a
              href="https://goduke.com"
              target="_blank"
              rel="noopener noreferrer"
              className={brandLink("#012169")}
              style={brandStyle("#012169")}
            >
              Duke
            </a>{" "}
            fan.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
