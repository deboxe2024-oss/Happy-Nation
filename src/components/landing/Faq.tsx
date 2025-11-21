import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Quanto tempo leva cada dia?",
    answer: "Cada devocional é projetado para durar cerca de 10 minutos, tornando-o perfeito para encaixar na rotina agitada da família, seja de manhã ou antes de dormir.",
  },
  {
    question: "Funciona para crianças pequenas?",
    answer: "Sim! O conteúdo, incluindo os versículos e reflexões, é adaptado com a ajuda de inteligência artificial para ser simples, envolvente e fácil de entender por crianças de várias idades.",
  },
  {
    question: "Preciso ter experiência prévia?",
    answer: "Absolutamente não. O guia é completo e fácil de seguir, mesmo para pais que não têm experiência em liderar devocionais. É uma ferramenta para todos.",
  },
  {
    question: "Em qual formato o conteúdo vem?",
    answer: "O devocional é entregue em formato PDF digital. Após a compra, você recebe acesso imediato para baixar e começar a usar no seu computador, tablet ou celular.",
  },
  {
    question: "Posso compartilhar com outras pessoas?",
    answer: "A licença do devocional é para uso pessoal e familiar. Não é permitido o compartilhamento ou distribuição do material com outras pessoas.",
  },
];

export function Faq() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Perguntas Frequentes</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-semibold text-left">{item.question}</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
