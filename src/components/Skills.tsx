import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Smartphone, Cloud, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "React Native", "Next.js"]
    },
    {
      icon: Database,
      title: "Backend & Databases", 
      skills: ["Node.js", "Python", "Java", "SQL", "GraphQL", "REST APIs", "Microservices"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS", "Firebase", "Docker", "CI/CD", "Git", "Snowflake"]
    },
    {
      icon: Wrench,
      title: "Tools & Frameworks",
      skills: ["Kotlin", "C++", "Stripe", "BFF", "Polsky LAUNCH", "LTF Ventures"]
    },
    {
      icon: Globe,
      title: "Specializations",
      skills: ["Full-Stack Development", "Mobile Development", "System Design", "Performance Optimization"]
    },
    {
      icon: Smartphone,
      title: "Personal",
      skills: ["Bilingual (Mandarin)", "Leadership", "Entrepreneurship", "Problem Solving"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-foreground">Skills & Technologies</h2>
            <p className="text-xl text-muted-foreground">
              Technologies I work with to bring ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 bg-gradient-card shadow-card border-0 hover:shadow-elegant transition-all duration-300 h-full">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Card className="p-8 bg-gradient-hero shadow-elegant border-0 max-w-2xl mx-auto">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">Ready to Collaborate?</h3>
                <p className="text-white/90 leading-relaxed">
                  I'm always excited to work on challenging projects and learn new technologies. 
                  Let's build something amazing together!
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;