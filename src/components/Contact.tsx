import SectionHeading from "./SectionHeading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, MapPin, Calendar, GraduationCap } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeading eyebrow="Contact" title="Let's connect" subtitle="Open to conversations about engineering, developer relations, and teaching." />

          <div className="mx-auto max-w-2xl text-center">
            <Card className="p-8 bg-card shadow-card border border-border">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground">Get in touch</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just chatting about technology.
                </p>
                
                <div className="space-y-4 max-w-md mx-auto">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full justify-center"
                    onClick={() => window.open('mailto:ellenrchen8@gmail.com', '_blank')}
                  >
                    <Mail className="mr-3 h-5 w-5" />
                    ellenrchen8@gmail.com
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full justify-center"
                    onClick={() => window.open('https://github.com/ellenrchen', '_blank')}
                  >
                    <Github className="mr-3 h-5 w-5" />
                    github.com/ellenrchen
                  </Button>

                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full justify-center"
                    onClick={() => window.open('https://x.com/ellenchen108', '_blank')}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="mr-3 h-4 w-4" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    x.com/ellenchen108
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;