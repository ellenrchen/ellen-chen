import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Mail, Sparkles, Code2, Zap } from "lucide-react";
import heroImage from "/lovable-uploads/19e48d04-2ef1-4eee-b675-710737d4d097.png";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-subtle">
        <div className="absolute inset-0">
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-primary/20 rounded-lg rotate-45 animate-bounce"></div>
          <div className="absolute bottom-32 left-20 w-12 h-12 bg-primary/15 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-primary/25 rounded-full animate-bounce delay-500"></div>
          <div className="absolute bottom-40 right-1/3 w-6 h-6 bg-primary/30 rounded-full animate-pulse delay-700"></div>
          
          {/* Gradient orbs */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-radial from-primary/20 to-transparent rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-radial from-primary-glow/15 to-transparent rounded-full animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-6">
              {/* Creative badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium animate-fade-in">
                <Sparkles className="h-4 w-4" />
                Full-Stack Developer
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent relative">
                  Ellen Chen
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary/60 rounded-full animate-pulse"></div>
                </span>
              </h1>
              
              <div className="flex items-center gap-4 text-2xl lg:text-3xl text-muted-foreground">
                <Code2 className="h-8 w-8 text-primary animate-pulse" />
                <span className="font-medium">Software Engineer</span>
                <Zap className="h-6 w-6 text-primary animate-bounce" />
              </div>
              
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                Passionate about building <span className="text-primary font-semibold">scalable products</span> with over 3 years of experience. 
                I love turning complex problems into simple, beautiful solutions that users actually enjoy using.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('about')}
                className="text-lg px-8 py-6 group relative overflow-hidden"
              >
                <span className="relative z-10">Learn More About Me</span>
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://github.com/ellenrchen', '_blank')}
                className="text-lg px-8 py-6 hover-scale border-2 border-primary/20 hover:border-primary/50"
              >
                <Github className="mr-2 h-5 w-5" />
                View My Work
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4</div>
                <div className="text-sm text-muted-foreground">Major Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground">Problems Solved</div>
              </div>
            </div>
          </div>
          
          {/* Creative image section */}
          <div className="relative animate-fade-in">
            <div className="relative group">
              {/* Background decoration - toned down */}
              <div className="absolute -inset-3 bg-gradient-hero rounded-3xl opacity-10 group-hover:opacity-15 transition-opacity duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl blur-sm"></div>
              
              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-card bg-white p-2">
                <div className="relative rounded-xl overflow-hidden">
                  <img 
                    src={heroImage} 
                    alt="Ellen Chen - Software Engineer"
                    className="w-full h-[500px] lg:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Location badge only */}
                  <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-elegant">
                    <div className="text-sm font-medium text-foreground">NYC Based</div>
                  </div>
                  
                  {/* Tech stack floating elements */}
                  <div className="absolute top-1/3 -left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium animate-bounce delay-300">
                    React
                  </div>
                  <div className="absolute bottom-1/3 -right-4 bg-primary-glow text-white px-3 py-1 rounded-full text-xs font-medium animate-bounce delay-700">
                    TypeScript
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 border-4 border-primary/30 rounded-full animate-spin"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary/20 rounded-lg rotate-45 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown className="h-6 w-6" />
          <span className="text-xs">Scroll to explore</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;