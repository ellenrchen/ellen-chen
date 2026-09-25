import SectionHeading from "./SectionHeading";
import { Instagram } from "lucide-react";

const baseLink =
  "font-medium underline decoration-border underline-offset-4 transition-colors";

const About = () => (
  <section id="about" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading eyebrow="About" title="About me" />
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            I'm a software engineer at{" "}
            <span className="font-medium" style={{ color: "#4353FF" }}>
              EliseAI
            </span>
            , with experience at{" "}
            <span className="font-medium" style={{ color: "#FF3008" }}>
              DoorDash
            </span>{" "}
            and{" "}
            <span className="font-medium" style={{ color: "#0078D4" }}>
              Microsoft
            </span>{" "}
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
              className={`${baseLink} inline-flex items-center gap-1 hover:decoration-current`}
              style={{ color: "#E1306C" }}
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
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
            <span className="font-medium" style={{ color: "#012169" }}>
              Duke
            </span>{" "}
            fan.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
