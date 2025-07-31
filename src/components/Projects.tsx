import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Cook My Fridge",
      description: "Full-stack recipe generator that calls GPT-3.5-Turbo to suggest meals from on-hand ingredients with secure server-side API-key management and streaming responses",
      technologies: ["React", "Tailwind", "Express", "GPT-3.5-Turbo", "Node.js"]
    },
    {
      title: "Tech News Agent",
      description: "Engineered a Python workflow that pulls articles from 8 tech RSS feeds, ranks them, and uses GPT-3.5-Turbo generated summaries to create daily CLI/email digest",
      technologies: ["Python", "GPT-3.5-Turbo", "RSS", "CLI", "Email API"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-foreground">Side Projects</h2>
            <p className="text-xl text-muted-foreground">
              Personal projects built to solve real problems
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gradient-card shadow-card border-0 hover:shadow-elegant transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center justify-between">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;