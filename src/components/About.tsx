import SectionHeading from "./SectionHeading";
import { Instagram } from "lucide-react";
import runwayImg from "@/assets/runway.jpg";
import vogueImg from "@/assets/vogue-street.jpg";
import backstageImg from "@/assets/backstage.jpg";
import headshotImg from "@/assets/ellen-headshot.jpeg";

const baseLink =
  "font-medium underline decoration-border underline-offset-4 transition-colors";

const photoFrame =
  "absolute bg-white p-1.5 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:z-30 hover:scale-[1.03]";

const About = () => (
  <section id="about" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <SectionHeading eyebrow="About" title="About me" />
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm a software engineer at EliseAI, with experience at DoorDash
                and Microsoft previously, and a passion for turning complex,
                messy workflows into clean, user-friendly products.
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
                . I'm also a big Duke fan — goooo Blue Devils!!
              </p>
            </div>
          </div>

          {/* Collage: photos + Instagram card, casually stacked */}
          <div className="relative h-[440px] sm:h-[560px] lg:h-[660px]">
            <div className={`${photoFrame} left-0 top-0 w-[68%] -rotate-2 z-0`}>
              <img
                src={runwayImg}
                alt="Ellen walking a runway"
                className="w-full aspect-[3/4] object-cover"
                loading="lazy"
              />
            </div>
            <div className={`${photoFrame} right-0 top-10 w-[46%] rotate-[2.5deg] z-10`}>
              <img
                src={vogueImg}
                alt="Ellen in a sheer blue dress during a street-style shoot"
                className="w-full aspect-[3/4] object-cover"
                loading="lazy"
              />
            </div>
            <div className={`${photoFrame} left-[10%] bottom-[24%] w-[42%] rotate-[1.5deg] z-10`}>
              <img
                src={backstageImg}
                alt="Ellen backstage in a fur collar and pleated skirt"
                className="w-full aspect-[3/4] object-cover"
                loading="lazy"
              />
            </div>
            <a
              href="https://www.instagram.com/ellyeats_"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-0 bottom-0 z-20 w-[60%] -rotate-1 bg-card border border-border p-4 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:z-30 hover:scale-[1.03]"
              aria-label="Follow @ellyeats_ on Instagram"
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex-shrink-0 rounded-full p-[2px]"
                  style={{ background: "linear-gradient(45deg,#F58529,#DD2A7B,#8134AF)" }}
                >
                  <img
                    src={headshotImg}
                    alt="Ellen Chen"
                    className="h-9 w-9 rounded-full border-2 border-card object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">ellyeats_</p>
                  <p className="text-xs text-muted-foreground">Follow on Instagram</p>
                </div>
                <Instagram
                  className="ml-auto h-4 w-4 flex-shrink-0"
                  style={{ color: "#E1306C" }}
                  aria-hidden="true"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
