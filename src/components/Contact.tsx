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
          
          <div className="max-w-2xl">
            <Card className="p-8 bg-card shadow-card border border-border">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">Get In Touch</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just chatting about technology.
                </p>
                
                <div className="space-y-4 max-w-md">
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