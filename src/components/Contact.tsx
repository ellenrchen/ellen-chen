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
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="p-8 bg-background shadow-card border-0">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-foreground">Get In Touch</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm always open to discussing new opportunities, interesting projects, 
                    or just chatting about technology. Whether you're looking to hire, 
                    collaborate, or connect, I'd love to hear from you!
                  </p>
                  
                  <div className="space-y-4">
                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="w-full justify-start"
                      onClick={() => window.open('mailto:ellenrchen8@gmail.com', '_blank')}
                    >
                      <Mail className="mr-3 h-5 w-5" />
                      ellenrchen8@gmail.com
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full justify-start"
                      onClick={() => window.open('https://github.com/ellenrchen', '_blank')}
                    >
                      <Github className="mr-3 h-5 w-5" />
                      github.com/ellenrchen
                    </Button>
                  </div>
                </div>
              </Card>
              
              <Card className="p-8 bg-background shadow-card border-0">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-foreground">Quick Facts</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Currently in New York, NY</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">University of Chicago Graduate</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">3+ Years Experience</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="space-y-8">
              <Card className="p-8 bg-gradient-card shadow-card border-0">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-foreground">What I'm Looking For</h3>
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <Badge variant="secondary" className="inline-block">Software Engineering Roles</Badge>
                      <p className="text-sm text-muted-foreground">
                        Full-stack positions where I can build impactful products and grow my technical expertise
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <Badge variant="secondary" className="inline-block">Startup Opportunities</Badge>
                      <p className="text-sm text-muted-foreground">
                        Early-stage companies where I can make a significant impact and wear multiple hats
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <Badge variant="secondary" className="inline-block">Technical Collaborations</Badge>
                      <p className="text-sm text-muted-foreground">
                        Open source projects or side projects that solve interesting problems
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-8 bg-primary text-white shadow-elegant border-0">
                <div className="space-y-4 text-center">
                  <h3 className="text-xl font-semibold">Ready to Work Together?</h3>
                  <p className="text-white/90">
                    Let's discuss how we can create something amazing together.
                  </p>
                  <Button 
                    variant="secondary" 
                    size="lg"
                    onClick={() => window.open('mailto:ellenrchen8@gmail.com?subject=Let\'s%20Connect!', '_blank')}
                  >
                    Start a Conversation
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;