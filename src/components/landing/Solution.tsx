import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen, Sparkles, Heart, Palette } from "lucide-react";

const features = [
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Um versículo bíblico",
    description: "Adaptado para que entendam com facilidade.",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "Uma reflexão",
    description: "Escrita para a idade e vivência deles.",
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Uma oração guiada",
    description: "Para aprenderem a falar com Jesus.",
  },
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "Uma atividade criativa",
    description: "Para aplicar o ensinamento de forma divertida.",
  },
];

export function Solution() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sua guia diária para fortalecer a fé</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Cada dia inclui tudo o que você precisa para criar um momento especial com seus filhos em apenas 10 minutos.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-4 mt-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                <CardDescription className="pt-2">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
