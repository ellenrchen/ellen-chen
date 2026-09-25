import { Instagram } from "lucide-react";
import runwayImg from "@/assets/runway.jpg";
import foodProfileImg from "@/assets/food-profile.jpg";

const baseLink =
  "font-medium underline decoration-border underline-offset-4 transition-colors";

const About = () => (
  <section id="about" className="py-12 md:py-16 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 lg:items-center">
        {/* Left column: copy */}
        <div className="lg:col-span-5 relative z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            About
          </p>
          <h2 className="font-serif italic font-medium text-black leading-[0.9] tracking-tighter text-7xl md:text-8xl lg:text-[8rem] mb-10">
            About me
          </h2>
          <div className="space-y-6 max-w-md text-lg leading-relaxed text-muted-foreground">
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

        {/* Right column: photo with Instagram card at its corner */}
        <div className="lg:col-span-7 flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-[480px]">
            <div className="shadow-[0_30px_60px_-25px_rgba(0,0,0,0.35)]">
              <img
                src={runwayImg}
                alt="Ellen walking the runway"
                className="w-full aspect-[3/4] object-cover object-bottom"
                loading="lazy"
              />
            </div>
            <a
              href="https://www.instagram.com/ellyeats_"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-8 right-[-32px] md:right-[-40px] bg-card border border-border p-4 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] flex items-center gap-3 min-w-[230px] transition-all duration-300 hover:-translate-y-1"
              aria-label="Follow @ellyeats_ on Instagram"
            >
              <div
                className="flex-shrink-0 rounded-full p-[2px]"
                style={{ background: "linear-gradient(45deg,#F58529,#DD2A7B,#8134AF)" }}
              >
                <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-card">
                  <img
                    src={foodProfileImg}
                    alt="ellyeats_ profile"
                    className="h-full w-full scale-[1.8] object-cover object-[50%_30%]"
                  />
                </div>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-semibold text-foreground leading-tight">
                  ellyeats_
                </span>
                <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  Follow on Instagram
                </span>
              </div>
              <Instagram
                className="ml-auto h-5 w-5 flex-shrink-0"
                style={{ color: "#E1306C" }}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
