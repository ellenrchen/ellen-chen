import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Built with <Heart className="h-4 w-4 text-red-500 fill-current" /> using React & TypeScript
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 Ellen Chen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;