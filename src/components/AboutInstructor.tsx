import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Globe, Users } from "lucide-react";
import carlosCafe from "@/assets/carlos-cafe-new.jpg";

export const AboutInstructor = () => {
  const artists = [
    "Emicida", "Rael", "Seu Jorge", "Caetano Veloso", "Gilberto Gil", 
    "Vanessa da Mata", "Jair Rodrigues", "Royce do Cavaco", "Netinho de Paulo",
    "Almir Guineto", "Wilson Moreira", "Nei Lopes", "Paulo César Pinheiro",
    "Diogo Nogueira", "Neguinho da beija-flor"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Prazer, eu sou o <span className="text-primary">Carlos Café</span>...
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Photo and Stats */}
            <div className="space-y-6">
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-elegant">
                  <img 
                    src="/lovable-uploads/af580b9b-079a-4ff1-a29f-4bf86f845367.png" 
                    alt="Carlos Café" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 space-y-2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold shadow-lg">
                    <Star className="w-4 h-4 mr-1" />
                    25 Anos
                  </Badge>
                </div>
                
                <div className="absolute -bottom-4 -left-4 space-y-2">
                  <Badge className="bg-primary-glow text-primary-foreground px-4 py-2 text-sm font-semibold shadow-lg">
                    <Globe className="w-4 h-4 mr-1" />
                    Mundial
                  </Badge>
                </div>
              </div>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 text-center bg-gradient-card">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">1000+</div>
                  <div className="text-sm text-muted-foreground">Alunos</div>
                </Card>
                
                <Card className="p-4 text-center bg-gradient-card">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm text-muted-foreground">Países</div>
                </Card>
              </div>
            </div>
            
            {/* Right - Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Sou músico, pandeirista e percussionista, estou na música a aproximadamente <strong className="text-primary">25 anos</strong>.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Nascido e criado na cidade de São Paulo, sou criador de uma técnica que <strong className="text-primary">revolucionou a
                  forma de tocar o pandeiro</strong> no Brasil e no mundo.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Por essa técnica e meu estilo de tocar consegui viajar o mundo, ministrar workshops e tocar
                  com vários artistas, entre eles:
                </p>
              </div>
              
              {/* Artists Grid */}
              <Card className="p-6 bg-primary/5 border-primary/20">
                <h3 className="text-lg font-semibold mb-4 text-center">Artistas com quem já trabalhei:</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {artists.map((artist, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      {artist}
                    </Badge>
                  ))}
                </div>
              </Card>
              
              <div className="pt-4">
                <Card className="p-6 bg-gradient-primary text-primary-foreground">
                  <h3 className="text-xl font-bold mb-2">Se você tem alguma dúvida se realmente dá para aprender...</h3>
                  <p className="text-lg opacity-90">Veja o que os alunos tem a dizer!</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};