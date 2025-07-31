import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "DoorDash",
      position: "Full-Stack Software Engineer",
      location: "New York, NY",
      period: "April 2023 - Present",
      type: "Full-time",
      highlights: [
        "Implementing Smart Navigation for Agent Productivity (SNAP), a command center consolidating 7 disparate onboarding tools into a single Groq-powered, agentic-AI dashboard to streamline Premier Onboarding Partner (POP) workflows",
        "Driving cross-functional design/implementation of the Self Serve Merchant Onboarding (SSMO) flow for Alcohol SMBs, projected to cut onboarding time by ~6 days for inbound merchants (22% of CW past 2 quarters)",
        "Built in-portal referral flow (FE+BFF); drove +13% view-to-submission conversion and lifted referrals to 4.7% of all completed sign-ups (~42% YoY)",
        "Led cross-team experiment (SSMO × BizApps) mandating headers for Mx activation, yielded +1.7% site uptime and contributed to +7.8% growth in new-merchant TAM attainment",
        "Built React UI to support end-to-end self-serve onboarding of Flowers, delivered 128% of OTD plan, drove +50% inbound channel productivity and +55% QoQ completed sign-ups while cutting marketing spend 42%"
      ],
      technologies: ["React", "TypeScript", "Python", "GraphQL", "Microservices"]
    },
    {
      company: "Locavor",
      position: "Co-Founder and CTO",
      location: "Chicago, IL",
      period: "January 2023 - April 2023",
      type: "Startup",
      highlights: [
        "Co-founded and developed business concept of Locavor, a B2B marketplace that streamlines suppliers’ order management and gives restaurants faster access to fresher, lower-cost ingredients",
        "Designed and shipped iOS application using React-Native and Firebase, which reached 60 active users and raised $13k in pre-seed through Polsky LAUNCH Accelerator and LTF Ventures",
        "Selected as semi-finalist and invited to pitch at TCU Neely School of Business Values and Venture Competition"
      ],
      technologies: ["React Native", "Firebase", "iOS Development", "Startup"]
    },
    {
      company: "DoorDash",
      position: "Software Engineer, Intern",
      location: "San Francisco, CA", 
      period: "June 2022 - September 2022",
      type: "Internship",
      highlights: [
        "Built React UI to surface store menu audit logs to merchants and internal service teams to reduce operations overhead",
        "Connected front-end self-serve menu editor web app to GraphQL API in BFF to query menu audit history from Snowflake DB"
      ],
      technologies: ["React", "GraphQL", "Snowflake", "BFF"]
    },
    {
      company: "Microsoft", 
      position: "Explore (SWE & PM) Intern",
      location: "Redmond, WA",
      period: "June 2021 - September 2021", 
      type: "Internship",
      highlights: [
        "Rebuilt OneDrive settings in React-Native with left-nav layout to improve outdated UX and reduce operational costs",
        "Connected front-end TypeScript UI components with back-end C++ data layer to fetch/update live settings and user data",
        "Implemented right-to-left language compatibility and theming (Light, Dark, High Contrast modes) using React-Native to promote inclusivity via internationalization and accessibility features"
      ],
      technologies: ["React Native", "TypeScript", "C++", "Accessibility"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-foreground">Professional Experience</h2>
            <p className="text-xl text-muted-foreground">
              Building impactful solutions across different scales and industries
            </p>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 bg-background shadow-card border-0 hover:shadow-elegant transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold text-foreground">{exp.position}</h3>
                      <h4 className="text-xl text-primary font-medium">{exp.company}</h4>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <CalendarDays className="h-3 w-3" />
                        {exp.period}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 pt-4">
                      {exp.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;