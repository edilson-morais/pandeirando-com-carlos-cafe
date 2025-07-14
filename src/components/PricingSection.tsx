import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Clock, ArrowRight, Star } from "lucide-react";
export const PricingSection = () => {
  const features = ["Método testado e aprovado para chegar no seu objetivo final", "Curso Completo com 15 módulos do iniciante ao avançado", "02 anos de acesso ao curso com direito às atualizações", "Bônus #01 - Mini-Curso Dicafé", "Bônus #02 - Lives Exclusivas", "Bônus #03 - Desconto nos Produtos Carlos Café", "Bônus #04 - Grupo Exclusivo para Alunos"];
  return <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Promotional Banner */}
        <div className="text-center mb-12">
          <img 
            src="/lovable-uploads/c622f8b2-40bf-4938-83fe-32f2d9459ca7.png" 
            alt="Pandeirando com Carlos Café - Promoção" 
            className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
          />
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            QUANTO CUSTA PARA FAZER PARTE DO <span className="text-primary">PANDEIRANDO COM CARLOS CAFÉ</span>?
          </h2>
          <p className="text-xl text-muted-foreground">
            Saiba tudo que você vai receber ao se inscrever:
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Pricing Card */}
          <Card className="p-8 bg-gradient-card border-2 border-primary/20 relative overflow-hidden mb-8">
            {/* Popular Badge */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-primary text-primary-foreground px-6 py-2 text-sm font-bold shadow-lg">
                <Star className="w-4 h-4 mr-1" />
                MAIS POPULAR
              </Badge>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left - Features */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Tudo que está incluído:</h3>
                  <div className="space-y-3">
                    {features.map((feature, index) => <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>)}
                  </div>
                </div>
              </div>

              {/* Right - Price and CTA */}
              <div className="text-center space-y-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">De R$ 327 por apenas</div>
                  <div className="text-6xl font-bold text-primary mb-2">R$ 147</div>
                  <div className="text-sm text-muted-foreground">ou 12 x de R$ 15,20 </div>
                </div>

                <Button variant="cta" size="lg" className="w-full group text-lg py-6" onClick={() => window.open('https://pay.hotmart.com/L56769807K?checkoutMode=10&bid=1752167369218&utm_source=cafe&utm_medium=pv&utm_campaign=pandeirando+com+carlos+cafe&utm_id=carlos+cafe', '_blank')}>
                  SIM, QUERO COMEÇAR AGORA
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>Acesso imediato após o pagamento</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Guarantee */}
          <Card className="p-6 bg-primary/5 border-primary/20 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold">Garantia de 7 dias</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              De acordo com o Art. 49 da Lei do Consumidor, você tem 7 dias de garantia.
              Se por algum motivo você não quiser continuar com o Curso, você terá seu dinheiro de
              volta, sem burocracia, basta pedir o reembolso!
            </p>
          </Card>

          {/* Final CTA */}
          <div className="text-center mt-8">
            <Button variant="hero" size="lg" className="group text-xl px-12 py-6" onClick={() => window.open('https://pay.hotmart.com/L56769807K?checkoutMode=10&bid=1752167369218&utm_source=cafe&utm_medium=pv&utm_campaign=pandeirando+com+carlos+cafe&utm_id=carlos+cafe', '_blank')}>
              sim, quero fazer parte!
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Preview CTA */}
          <div className="text-center mt-12 space-y-4">
            <h3 className="text-2xl font-bold">AINDA ESTÁ COM DÚVIDAS?</h3>
            <p className="text-muted-foreground mb-6">
              Conheça a plataforma por dentro e veja o que você vai aprender:
            </p>
            <Button variant="outline" size="lg" onClick={() => window.open('https://pay.hotmart.com/L56769807K?checkoutMode=10&bid=1752167369218&utm_source=cafe&utm_medium=pv&utm_campaign=pandeirando+com+carlos+cafe&utm_id=carlos+cafe', '_blank')}>
              quero tocar pandeiro
            </Button>
          </div>
        </div>
      </div>
    </section>;
};