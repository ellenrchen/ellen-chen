import { Card } from "@/components/ui/card";
import { Camera, Dumbbell, GraduationCap } from "lucide-react";

const About = () => {
  const interests = [
    {
      icon: Dumbbell,
      title: "Fitness",
      description: "Always trying to hit a new PR at the gym"
    },
    {
      icon: Camera,
      title: "Photography", 
      description: "Behind and in front of the camera - capturing moments and modeling"
    },
    {
      icon: GraduationCap,
      title: "Duke Basketball",
      description: "Goooo Blue Devils!! 🏀"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-foreground">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get to know the person behind the code
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-8 bg-gradient-card shadow-card border-0">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-foreground">My Journey</h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      I'm a passionate software engineer with over 3 years of experience building 
                      scalable products. I love turning complex problems into simple, 
                      beautiful solutions that users actually enjoy using.
                    </p>
                    <p>
                      My experience spans across full-stack development, from building React-based 
                      user interfaces to designing robust backend systems. I've had the privilege 
                      of working at companies like DoorDash, Microsoft, and co-founding Locavor, 
                      where I've contributed to products that serve millions of users.
                    </p>
                    <p>
                     When I'm not coding, you'll find me at the gym trying to hit a new PR, walking the runway, 
                      or shouting at the TV during a Duke basketball game (goooo Blue Devils!!).
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">When I'm Not Coding</h3>
              {interests.map((interest, index) => (
                <Card key={index} className="p-6 bg-gradient-card shadow-card border-0 hover:shadow-elegant transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <interest.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">{interest.title}</h4>
                      <p className="text-sm text-muted-foreground">{interest.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;