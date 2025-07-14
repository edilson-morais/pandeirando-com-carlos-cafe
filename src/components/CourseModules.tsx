import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Play, 
  Music, 
  Clock, 
  Target, 
  TrendingUp, 
  Headphones, 
  BarChart3, 
  Zap, 
  Star, 
  Crown, 
  Sparkles, 
  Award,
  FileText,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export const CourseModules = () => {
  const modules = [
    {
      number: "01",
      title: "Apresentação",
      description: "Receba as boas vindas e todas as instruções sobre o suporte e como seguir o curso para ter o máximo de aproveitamento possível.",
      icon: Play,
      level: "Início"
    },
    {
      number: "02",
      title: "Noções Básicas do Pandeiro",
      description: "Um dos módulos mais importantes do curso. Aqui você terá toda a base prática de como executar os principais movimentos no pandeiro e fazer a leitura de partitura.",
      icon: Music,
      level: "Básico"
    },
    {
      number: "03",
      title: "Usando o Metrônomo",
      description: "Poucos sabem, mas todo músico profissional utiliza! Você vai aprender a usar o metrônomo para estar sempre no ritmo da música e dentro das notas.",
      icon: Clock,
      level: "Básico"
    },
    {
      number: "04",
      title: "Iniciante - Bases de Samba",
      description: "Aqui já vamos por a mão na massa, ou melhor, no pandeiro! Onde vamos tocar as primeiras bases básicas de samba.",
      icon: Target,
      level: "Iniciante"
    },
    {
      number: "05",
      title: "Iniciante - Bases de Samba com Variações",
      description: "A primeira evolução como iniciante acontece aqui. Vamos adicionar algumas variações para a base ter mais swing.",
      icon: TrendingUp,
      level: "Iniciante"
    },
    {
      number: "06",
      title: "Aulas com Ganza",
      description: "Você vai entender o que é a semicolcheia utilizando o Ganza.",
      icon: Headphones,
      level: "Iniciante"
    },
    {
      number: "07",
      title: "Intermediário - Bases de Samba",
      description: "Vamos evoluir? É a hora de aprender novas bases de samba, com mais notas e novos movimentos.",
      icon: BarChart3,
      level: "Intermediário"
    },
    {
      number: "08",
      title: "Intermediário - Bases de Samba com Variações",
      description: "Daqui pra frente você já será capaz de acompanhar a sua música preferida, com novas variações para fazer dentro das bases aprendidas.",
      icon: Zap,
      level: "Intermediário"
    },
    {
      number: "09",
      title: "Intermediário - Bases de Partido Alto",
      description: "Alô, alô, bora de partido alto? Você vai aprender as principais bases de um partido alto totalmente raiz!",
      icon: Star,
      level: "Intermediário"
    },
    {
      number: "10",
      title: "Técnicas de Rulo",
      description: "Aqui é onde está a grande magia para quem gosta de fazer algo diferenciado no pandeiro. Técnica avançada, muito utilizada!",
      icon: Crown,
      level: "Avançado"
    },
    {
      number: "11",
      title: "Técnicas de Sextinas",
      description: "Com essas notas você vai deixar o pandeiro com muito mais swing!",
      icon: Sparkles,
      level: "Avançado"
    },
    {
      number: "12",
      title: "Combinações de Sextinas",
      description: "As combinações vem para complementar as sextinas, deixando o pandeiro com ainda mais gingado.",
      icon: Sparkles,
      level: "Avançado"
    },
    {
      number: "13",
      title: "Técnicas de Rufo",
      description: "O sonho de muito pandeirista está aqui! Faça o Rufo perfeitamente com os exercícios e técnicas exclusivas aqui ensinadas.",
      icon: Crown,
      level: "Avançado"
    },
    {
      number: "14",
      title: "Fita no Pandeiro",
      description: "Entenda a necessidade de quando e porque colocar fitas no pandeiro.",
      icon: FileText,
      level: "Técnico"
    },
    {
      number: "15",
      title: "Tocando Bases do Músicas",
      description: "É hora de pegar todas as bases que você aprendeu e acompanhar comigo algumas músicas. Tenho certeza que aqui, você já será considerado um Pandeirista!",
      icon: Award,
      level: "Prática"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Início":
        return "bg-gray-100 text-gray-800";
      case "Básico":
        return "bg-blue-100 text-blue-800";
      case "Iniciante":
        return "bg-green-100 text-green-800";
      case "Intermediário":
        return "bg-yellow-100 text-yellow-800";
      case "Avançado":
        return "bg-orange-100 text-orange-800";
      case "Técnico":
        return "bg-purple-100 text-purple-800";
      case "Prática":
        return "bg-primary/10 text-primary";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            O QUE VOCÊ VAI APRENDER NO <span className="text-primary">CURSO</span>:
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            15 módulos completos que vão te levar do absoluto zero ao nível profissional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {modules.map((module, index) => (
            <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <module.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary/20">
                      {module.number}
                    </div>
                  </div>
                  <Badge className={getLevelColor(module.level)}>
                    {module.level}
                  </Badge>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                    Módulo {module.number} - {module.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                    {module.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Certificate */}
        <Card className="p-8 bg-gradient-primary text-primary-foreground text-center mb-12">
          <div className="space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold">Certificado de Conclusão</h3>
            <p className="text-lg opacity-90">
              Parabéns! Você seguiu todas as aulas como deveria e se tornou um pandeirista profissional!
            </p>
          </div>
        </Card>

        <div className="text-center">
          <Button 
            variant="cta" 
            size="lg" 
            className="group"
            onClick={() => window.open('https://pay.hotmart.com/L56769807K?checkoutMode=10&bid=1752167369218&utm_source=cafe&utm_medium=pv&utm_campaign=pandeirando+com+carlos+cafe&utm_id=carlos+cafe', '_blank')}
          >
            SIM, QUERO COMEÇAR AGORA
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};