import { useEffect, useRef, useState } from "react";
import Layout from "@/components/Layout";
import Experience from "@/components/Experience";

const sections = [
  { id: "eliseai", label: "EliseAI" },
  { id: "doordash", label: "DoorDash" },
  { id: "locavor", label: "Locavor" },
  { id: "doordash-intern", label: "DoorDash Intern" },
  { id: "microsoft", label: "Microsoft" },
];

const ExperiencePage = () => {
  const [active, setActive] = useState("eliseai");
  const lockRef = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (lockRef.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setActive(id);
    if (lockRef.current) window.clearTimeout(lockRef.current);
    lockRef.current = window.setTimeout(() => {
      lockRef.current = null;
    }, 1000);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Layout>
      <div className="container mx-auto px-6">
        {/* Gutter nav — company names in the left margin */}
        <nav className="hidden xl:block fixed top-32 left-6 w-36 z-10">
          <div className="flex flex-col gap-1">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`text-left text-sm transition-colors border-l-2 pl-4 py-2 ${
                  active === s.id
                    ? "border-primary text-foreground font-medium"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Mobile/tablet company pills */}
        <div className="xl:hidden flex flex-wrap justify-center gap-2 pt-8">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                active === s.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="min-w-0">
          <Experience />
        </div>
      </div>
    </Layout>
  );
};

export default ExperiencePage;
