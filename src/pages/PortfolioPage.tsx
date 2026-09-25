import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Writing from "@/components/Writing";
import Workshops from "@/components/Workshops";

const sections = [
  { id: "writing", label: "Writing" },
  { id: "workshops", label: "Workshops" },
];

const PortfolioPage = () => {
  const [active, setActive] = useState("writing");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
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
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Layout>
      <div className="container mx-auto px-6">
        {/* Gutter nav — sits in the left margin, content column stays centered */}
        <nav className="hidden xl:block fixed top-32 left-6 w-32 z-10">
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

        {/* Mobile/tablet section pills */}
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
          <Writing />
          <Workshops />
        </div>
      </div>
    </Layout>
  );
};

export default PortfolioPage;
