import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Menu, X } from "lucide-react";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "writing", label: "Writing" },
  { id: "workshops", label: "Workshops" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <nav className="flex h-16 items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-lg font-semibold tracking-tight text-foreground">
            Ellen Chen
          </button>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button key={l.id} onClick={() => go(l.id)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" aria-label="GitHub" asChild>
              <a href="https://github.com/ellenrchen" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>
        {open && (
          <div className="md:hidden flex flex-col pb-4">
            {links.map((l) => (
              <button key={l.id} onClick={() => go(l.id)} className="py-2 text-left text-muted-foreground hover:text-foreground">
                {l.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
