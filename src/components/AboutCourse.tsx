import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Target, Trophy } from "lucide-react";

export const AboutCourse = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold">
            O que é o <span className="text-primary">Pandeirando com Carlos Café</span>?
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Com certeza não é só mais um curso como qualquer outro disponível por ai.
          </p>
          
          <div className="bg-gradient-primary text-primary-foreground rounded-3xl p-8 shadow-elegant">
            <p className="text-lg leading-relaxed mb-6 opacity-90">
              Todo o ensinamento foi desenvolvido através de um método <strong className="text-white">100% testado e aprovado</strong> para
              que qualquer aluno chegue em seu objetivo sabendo estrategicamente cada movimento
              realizado no pandeiro.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center space-y-2">
                <Target className="w-12 h-12 text-primary-foreground mx-auto" />
                <h3 className="font-semibold text-primary-foreground">Ritmo Gradativo</h3>
                <p className="text-sm opacity-80">Aumente sua velocidade progressivamente</p>
              </div>
              
              <div className="text-center space-y-2">
                <CheckCircle className="w-12 h-12 text-primary-foreground mx-auto" />
                <h3 className="font-semibold text-primary-foreground">Resistência</h3>
                <p className="text-sm opacity-80">Desenvolva força e coordenação</p>
              </div>
              
              <div className="text-center space-y-2">
                <Trophy className="w-12 h-12 text-primary-foreground mx-auto" />
                <h3 className="font-semibold text-primary-foreground">Recursos Avançados</h3>
                <p className="text-sm opacity-80">Domine técnicas profissionais</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg">
              Se quer realmente aprender a tocar o pandeiro, este curso é perfeito para você.
            </p>
            
            <Card className="p-6 bg-primary/5 border-primary/20">
              <p className="text-lg font-medium">
                Se você já tentou inúmeras vezes aprender a tocar e acha que não é
                capaz ou não tem o dom... <span className="text-primary font-bold">você está no lugar certo!</span>
              </p>
            </Card>
            
            <p className="text-lg leading-relaxed">
              Eu vou te guiar com o passo a passo para que você aprenda de uma vez por todas. São <strong className="text-primary">25
              anos de carreira</strong>, estudos e pesquisas que vão te fazer sair do iniciante e chegar ao
              avançado, adquirir resistência, acompanhar as suas músicas preferidas do início ao fim,
              fazer recursos ou firulas, além de ler partituras.
            </p>
            
            <div className="pt-6">
              <Button variant="cta" size="lg">
                QUERO COMEÇAR AGORA
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};