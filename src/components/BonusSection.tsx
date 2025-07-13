import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Gift, 
  Video, 
  Users, 
  ShoppingCart, 
  MessageCircle, 
  ArrowRight 
} from "lucide-react";

export const BonusSection = () => {
  const bonuses = [
    {
      number: "01",
      title: "Dicafé",
      description: "É um mini-curso com quatro aulas especiais sobre a diferença entre o pandeiro de couro e o pandeiro de nylon, resistência, suor nas mãos e sound filter.",
      icon: Video,
      value: "R$ 197"
    },
    {
      number: "02",
      title: "Lives Exclusivas",
      description: "Funciona como um aulão online onde vou poder acompanhar a sua evolução, tirar as suas dúvidas e também bater um papo de samba com você!",
      icon: Video,
      value: "R$ 297"
    },
    {
      number: "03",
      title: "Desconto nos Produtos",
      description: "Além de entrar pro melhor curso de pandeiro do Brasil, você vai ganhar desconto em todos os Produtos Carlos Café.",
      icon: ShoppingCart,
      value: "R$ 150"
    },
    {
      number: "04",
      title: "Grupo Exclusivo Para Alunos",
      description: "Para aprender ainda mais, nada melhor do que conversar com pessoas que tem o mesmo objetivo e trocar experiências, dúvidas e ter um acompanhamento de perto comigo!",
      icon: Users,
      value: "Sem preço"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            BÔNUS QUE VÃO AJUDAR AINDA MAIS O SEU <span className="text-primary">APRENDIZADO</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {bonuses.map((bonus, index) => (
            <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 relative overflow-hidden">
              {/* Bonus Badge */}
              <div className="absolute -top-2 -right-2">
                <Badge className="bg-primary text-primary-foreground px-3 py-1 rounded-full shadow-lg">
                  <Gift className="w-4 h-4 mr-1" />
                  BÔNUS
                </Badge>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <bonus.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Bônus #{bonus.number}</div>
                    <h3 className="text-xl font-semibold">{bonus.title}</h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {bonus.description}
                </p>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Valor</div>
                    <div className="text-lg font-bold text-primary">{bonus.value}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Special Highlight */}
        <Card className="p-8 bg-gradient-primary text-primary-foreground text-center mb-8">
          <div className="space-y-4">
            <MessageCircle className="w-16 h-16 mx-auto opacity-80" />
            <h3 className="text-2xl font-bold">
              IMAGINA VOCÊ PARTICIPAR DE UM GRUPO COMIGO E ME PERGUNTAR O QUE QUISER
            </h3>
            <p className="text-lg opacity-90">
              Bônus #04 - Grupo Exclusivo Para Alunos
            </p>
            <p className="opacity-80">
              Para aprender ainda mais, nada melhor do que conversar com pessoas que tem o mesmo 
              objetivo e trocar experiências, dúvidas e ter um acompanhamento de perto comigo!
            </p>
          </div>
        </Card>

        <div className="text-center">
          <Button variant="cta" size="lg" className="group">
            SIM, QUERO COMEÇAR AGORA
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};