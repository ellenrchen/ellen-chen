import SectionHeading from "./SectionHeading";
import { Instagram } from "lucide-react";
import runwayImg from "@/assets/runway.jpg";

const baseLink =
  "font-medium underline decoration-border underline-offset-4 transition-colors";

const About = () => (
  <section id="about" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="About" title="About me" />
        <div className="grid md:grid-cols-5 gap-10 md:gap-14 items-start mt-10">
          <div className="md:col-span-3 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a software engineer at EliseAI, with experience at DoorDash
              and Microsoft previously. At EliseAI, I work on workflows for
              property management companies; at DoorDash, I worked on merchant
              onboarding; and at Microsoft, I worked on OneDrive settings.
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
              . I'm also a big Duke fan.
            </p>
          </div>
          <div className="md:col-span-2">
            <img
              src={runwayImg}
              alt="Ellen walking a runway"
              className="w-full aspect-[3/4] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
