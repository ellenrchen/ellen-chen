import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-gradient-subtle">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Ellen Chen
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground">
                Software Engineer
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Passionate about building scalable products with over 3 years of experience. 
                I love turning complex problems into simple, beautiful solutions that users actually enjoy using.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('about')}
                className="text-lg px-8 py-6"
              >
                Learn More About Me
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://github.com/ellenrchen', '_blank')}
                className="text-lg px-8 py-6"
              >
                <Github className="mr-2 h-5 w-5" />
                View My Work
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="Ellen Chen - Software Engineer"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;