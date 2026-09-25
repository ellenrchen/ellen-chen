import { Card } from "@/components/ui/card";
import { Camera, Dumbbell, GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";

const interests = [
  { icon: Dumbbell, title: "Fitness", description: "Always chasing a new PR at the gym." },
  { icon: Camera, title: "Photography", description: "Behind and in front of the camera — shooting and modeling." },
  { icon: GraduationCap, title: "Duke Basketball", description: "Go Blue Devils." },
];

const About = () => (
  <section id="about" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="About" title="A software engineer who teaches" />
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a Software Engineer at EliseAI in New York City, with over 3 years of experience building
              scalable products at companies like DoorDash and Microsoft, and as co-founder of Locavor.
            </p>
            <p>
              Alongside building, I love explaining. I write about AI agents and developer tools on Medium, and I
              designed and taught a beginner web-development workshop series at UChicago.
            </p>
            <p>I care about turning complex problems into simple, clear solutions — in code and in teaching.</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Outside of work</h3>
            {interests.map((i) => (
              <Card key={i.title} className="flex items-start gap-4 border border-border p-4 shadow-none">
                <div className="rounded-md bg-primary/10 p-2">
                  <i.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{i.title}</h4>
                  <p className="text-sm text-muted-foreground">{i.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
