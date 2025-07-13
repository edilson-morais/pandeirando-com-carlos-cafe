import { Card } from "@/components/ui/card";
import { Music, Hand, FileText } from "lucide-react";
import pandeiroHands from "@/assets/pandeiro-fundamentals-new.jpg";
import carlosPerformance from "@/assets/carlos-pandeiro-performance.jpg";
export const Fundamentals = () => {
  const fundamentals = [{
    icon: Music,
    title: "Sons do Pandeiro",
    description: "Cada lugar do pandeiro é responsável por um som, um mais grave, um mais agudo, um abafado e tem toda a questão da afinação. Você precisa conhecer bem para que o som saia perfeito."
  }, {
    icon: Hand,
    title: "Golpes no Pandeiro",
    description: "Para que o som saia, você precisa dar 'golpes' no pandeiro, você precisa dominar os movimentos para que o som saia cada vez mais limpo e de forma que agrade os ouvidos."
  }, {
    icon: FileText,
    title: "Leitura de Partitura",
    description: "Saber o que você está fazendo é fundamental para que não fique tudo bagunçado. Saber ler cada nota e saber onde você deve fazer o movimento no pandeiro é o que vai te diferenciar dos outros."
  }];
  return <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Não é somente pegar o pandeiro e sair <span className="text-primary">"tocando"</span>...
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-elegant">
              <img 
                src={carlosPerformance} 
                alt="Carlos Café tocando pandeiro em performance ao vivo"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-glow">
              <div className="text-center">
                <div className="text-3xl font-bold">25</div>
                <div className="text-sm opacity-90">Anos de experiência</div>
              </div>
            </div>
          </div>
          
          {/* Right - Fundamentals */}
          <div className="space-y-6">
            {fundamentals.map((item, index) => <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 border-l-4 border-l-primary">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};