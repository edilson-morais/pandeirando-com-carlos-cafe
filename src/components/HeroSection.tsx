import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import pandeiroHero from "@/assets/pandeiro-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-50">
        <img 
          src="/lovable-uploads/68dfbc40-4a6c-45d0-b440-a567ba8febbe.png" 
          alt="Pandeiro" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Aprenda a tocar <span className="text-primary-glow">pandeiro</span> como um <span className="text-primary-glow">Profissional</span>
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed">
              Assista o vídeo ao lado e descubra como você pode aprender a tocar pandeiro nas rodas de
              samba e pagode mantendo o ritmo do inicio ao fim sem se cansar ou pagar mico.
            </p>
            
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.open('https://pay.hotmart.com/L56769807K?checkoutMode=10&bid=1752167369218&utm_source=cafe&utm_medium=pv&utm_campaign=pandeirando+com+carlos+cafe&utm_id=carlos+cafe', '_blank')}
            >
              Sim, QUERO APRENDER PANDEIRO!
            </Button>
            
            {/* Stats */}
            <div className="flex items-center gap-8 pt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-white font-semibold">
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-white">
                <p className="text-2xl font-bold">+ 1.2K alunos</p>
                <p className="text-primary-glow">dominando o pandeiro</p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Video */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-elegant">
              <iframe
                src="https://www.youtube.com/embed/ryskM4LGrtk"
                title="Aprenda a tocar pandeiro - Carlos Café"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};