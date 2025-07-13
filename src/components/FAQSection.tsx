import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Consigo iniciar sem saber nada?",
      answer: "Sim! O curso foi desenvolvido para ensinar desde o básico, começando pela forma correta de segurar o pandeiro até técnicas avançadas."
    },
    {
      question: "Em quanto tempo vou aprender a tocar?",
      answer: "O tempo varia de acordo com sua dedicação. Se praticar de 10 a 60 minutos por dia, em poucos dias já conseguirá tocar. Quanto mais se dedicar, mais rápido verá os resultados. Em aproximadamente 60 a 90 dias, o aluno estará tocando razoavelmente bem."
    },
    {
      question: "Consigo fazer o curso sem ter um pandeiro?",
      answer: "Sim! Você pode utilizar um objeto que simule um pandeiro para praticar os movimentos iniciais. No entanto, o ideal é adquirir um pandeiro para um melhor aprendizado."
    },
    {
      question: "Vou ter acompanhamento do Carlos Café?",
      answer: "Sim! Você pode tirar dúvidas diretamente com o Carlos Café no nosso grupo de alunos do whatsapp e acompanhar sua evolução de perto."
    },
    {
      question: "As aulas são todas online?",
      answer: "Sim, todas as aulas são gravadas e ficam disponíveis para acesso a qualquer momento."
    },
    {
      question: "Por onde vou receber o meu acesso?",
      answer: "Após a confirmação do pagamento, você receberá um e-mail com todas as instruções para acessar o curso."
    },
    {
      question: "O curso oferece certificado de conclusão?",
      answer: "Sim! Ao concluir todas as aulas e módulos, você receberá um certificado de conclusão."
    },
    {
      question: "Preciso saber ler partituras para aprender pandeiro?",
      answer: "Não! O curso ensina a leitura de partituras desde o básico, mas não é um requisito para começar a tocar."
    },
    {
      question: "O curso ensina a tocar outros ritmos além do samba?",
      answer: "Sim! Além do samba, o curso ensina partido alto, variações rítmicas e técnicas avançadas que podem ser aplicadas em outros estilos musicais."
    },
    {
      question: "Posso assistir às aulas quantas vezes quiser?",
      answer: "Sim! O acesso ao curso é válido por dois anos, e você pode assistir às aulas quantas vezes quiser nesse período."
    },
    {
      question: "O curso ensina técnicas avançadas como rulo e rufo?",
      answer: "Sim! Há módulos específicos para técnicas como rulo, rufo e sextinas, fundamentais para um toque mais avançado no pandeiro."
    },
    {
      question: "Quais são os bônus inclusos no curso?",
      answer: "Os bônus incluem o mini-curso Dicafé, lives exclusivas, descontos em produtos Carlos Café e acesso a um grupo exclusivo para alunos."
    },
    {
      question: "O curso tem garantia de satisfação?",
      answer: "Sim! Você tem 7 dias para testar o curso. Se não estiver satisfeito, pode solicitar o reembolso sem burocracia."
    },
    {
      question: "É possível parcelar o pagamento do curso?",
      answer: "Sim! O pagamento pode ser parcelado, dependendo da plataforma de pagamento utilizada."
    },
    {
      question: "O curso é recomendado para crianças ou apenas para adultos?",
      answer: "O curso pode ser feito por qualquer pessoa, independente da idade. Crianças podem aprender desde que tenham disciplina para seguir as aulas."
    },
    {
      question: "Quais são as formas de pagamento aceitas?",
      answer: "O curso aceita diferentes formas de pagamento, como cartão de crédito, boleto e PIX, dependendo da plataforma utilizada para a compra."
    },
    {
      question: "Qual a diferença entre pandeiro de couro e de nylon?",
      answer: "O pandeiro de couro tem um som mais grave e tradicional, enquanto o de nylon tem um som mais agudo e brilhante. O mini-curso Dicafé explica essas diferenças em detalhes."
    },
    {
      question: "Há suporte para dúvidas durante o curso?",
      answer: "Sim! Além do acompanhamento do Carlos Café, você poderá tirar dúvidas no grupo exclusivo para alunos."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-primary">PERGUNTAS FREQUENTES</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Esclarecemos as principais dúvidas sobre o curso
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-6">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </div>
    </section>
  );
};