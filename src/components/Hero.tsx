import { Button } from "@/components/ui/button";
import { ArrowDown, Github, MapPin } from "lucide-react";
import heroImage from "@/assets/ellen-headshot.jpeg";

const Hero = () => {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative flex min-h-screen items-center bg-gradient-subtle pt-16">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-5">
              <p className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-primary">
                Software Engineer @ EliseAI
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-foreground">
                Hi, I'm <span className="bg-gradient-hero bg-clip-text text-transparent">Ellen Chen</span>
              </h1>
              <p className="max-w-xl text-lg md:text-xl leading-relaxed text-muted-foreground">
                I'm a passionate software engineer with over 3 years of experience building scalable products.
                I love turning complex problems into simple, beautiful solutions that users actually enjoy using.
              </p>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" /> New York City
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button variant="hero" size="lg" onClick={() => go("writing")}>
                See my work <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/ellenrchen" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href="https://medium.com/@ellenrchen8" target="_blank" rel="noopener noreferrer">
                  Medium
                </a>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none animate-fade-in">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-hero opacity-10" />
            <div className="relative overflow-hidden rounded-2xl bg-card p-2 shadow-card">
              <img
                src={heroImage}
                alt="Ellen Chen, Software Engineer"
                className="h-[420px] w-full rounded-xl object-cover lg:h-[520px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
