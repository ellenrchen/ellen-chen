import SectionHeading from "./SectionHeading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "EliseAI",
      position: "Full-Stack Senior Software Engineer",
      location: "New York, NY",
      period: "September 2025 - Present",
      type: "Full-time",
      highlights: [
        "Developed affordable-housing application and certification workflows across React interfaces and Python backend services, including program eligibility, document generation, and compliance review",
        "Built move-out workflows across React and Python, including financial previews, audited charge adjustments, SODA document generation, and deposit-insurance claim tasks with payment recording and ledger updates",
        "Built bank-reconciliation and banking interfaces in React, supporting transaction review, categorization, bulk actions, and account onboarding; implemented Python services for AI-powered statement ingestion and partial-payment reconciliation",
        "Developed accounting interfaces for payment reporting, chart-of-accounts management, and journal workflows, including consolidated payment reports, CSV exports, and financial-report drilldowns"
      ],
      technologies: ["React", "TypeScript", "Python", "AI/LLMs"]
    },
    {
      company: "DoorDash",
      position: "Full-Stack Software Engineer",
      location: "New York, NY",
      period: "April 2023 - September 2025",
      type: "Full-time",
      highlights: [
        "Drove cross-functional design/implementation of the Self Serve Merchant Onboarding (SSMO) flow for Alcohol SMBs, reduced time-to-live by ~6 days and averted ~$54M in foregone GMV from activation delays",
        "Built in-portal referral flow (FE+BFF); drove +13% view-to-submission conversion and lifted referrals to 4.7% of all completed sign-ups (+42% YoY)",
        "Led cross-team experiment (SSMO × BizApps) mandating headers for merchant activation, yielded +1.7% site uptime and contributed to +7.8% growth in new-merchant TAM attainment",
        "Built React interface to support self-serve onboarding of Flowers, delivered 128% of QTD plan, drove +50% inbound channel productivity and +55% QoQ completed sign-ups while cutting marketing spend 42%"
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
        "Co-founded and developed Locavor, a B2B marketplace that streamlines suppliers’ order management and gives restaurants faster access to fresher, lower-cost ingredients",
        "Designed and shipped iOS application using React-Native and Firebase, which reached 60 active users and raised $13k in pre-seed through Polsky LAUNCH Accelerator and LTF Ventures"
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
    <section id="experience" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeading eyebrow="Experience" title="Where I've worked" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6 md:p-8 bg-card shadow-card border border-border">
                <div className="space-y-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">{exp.position}</h3>
                      <h4 className="text-base text-primary font-medium">{exp.company}</h4>
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
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
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