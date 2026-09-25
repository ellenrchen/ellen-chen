import { Button } from "@/components/ui/button";
import { ArrowDown, Github, MapPin } from "lucide-react";
import heroImage from "@/assets/ellen-headshot-bw.jpg";

const Hero = () => {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative flex min-h-screen items-center bg-background pt-16">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-between gap-12 md:flex-row md:gap-24">
          <div className="order-2 flex-1 space-y-8 animate-fade-up md:order-1">
            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                Software Engineer @ EliseAI
              </p>
              <div className="space-y-1">
                <p className="text-lg font-light text-muted-foreground">Hi, I'm</p>
                <h1 className="-ml-1 font-serif text-7xl italic leading-none text-foreground md:text-9xl">
                  Ellen Chen
                </h1>
              </div>
            </div>

            <p className="max-w-md text-lg font-light leading-relaxed text-muted-foreground">
              I'm a passionate software engineer with over 3 years of experience building scalable products.
              I love turning complex problems into simple, beautiful solutions that users actually enjoy using.
            </p>

            <p className="flex items-center gap-2 text-sm tracking-wide text-muted-foreground">
              <MapPin className="h-4 w-4" strokeWidth={1.5} /> New York City
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="hero" size="lg" onClick={() => go("writing")}>
                See my work <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/ellenrchen" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://medium.com/@ellenrchen8" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="mr-2 h-4 w-4" aria-hidden="true">
                    <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>
                  Medium
                </a>
              </Button>
            </div>
          </div>

          <div className="order-1 w-full max-w-sm flex-1 animate-fade-in md:order-2 md:max-w-md">
            <img
              src={heroImage}
              alt="Ellen Chen, Software Engineer"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
