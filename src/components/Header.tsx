import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";

export const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Music className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <div className="font-bold text-lg">Pandeirando</div>
              <div className="text-xs text-muted-foreground">com Carlos Café</div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Sobre o Curso
            </button>
            <button 
              onClick={() => scrollToSection('modules')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Módulos
            </button>
            <button 
              onClick={() => scrollToSection('bonus')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Bônus
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Preços
            </button>
          </nav>

          {/* CTA Button */}
          <Button variant="default" size="sm">
            Começar Agora
          </Button>
        </div>
      </div>
    </header>
  );
};