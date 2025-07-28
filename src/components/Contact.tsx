import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, MapPin, Calendar, GraduationCap } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-foreground">Let's Connect</h2>
            <p className="text-xl text-muted-foreground">
              Ready to collaborate or just want to say hello?
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 bg-background shadow-card border-0">
              <div className="space-y-6 text-center">
                <h3 className="text-2xl font-semibold text-foreground">Get In Touch</h3>
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