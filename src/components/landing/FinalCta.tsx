import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function FinalCta() {
  return (
    <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-card relative overflow-hidden">
       <Image
          src="https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.7492676914349277.jpg"
          alt="Família cristã unida orando"
          layout="fill"
          objectFit="cover"
          className="opacity-10"
          data-ai-hint="christian family praying"
        />
      <div className="container mx-auto max-w-4xl px-4 md:px-6 text-center relative z-10">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Plante hoje uma semente de fé no coração deles
        </h2>
        <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl my-6">
          Comece 30 dias que podem transformar sua família. Clique agora e tenha acesso ao devocional completo por apenas R$ 49,90.
        </p>
        <div className="flex flex-col items-center gap-4">
          <Button size="lg" asChild variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
            <a href="https://pay.kirvano.com/f07f15f9-4161-4482-a8f7-e05a89087f08">Começar agora — Quero o devocional</a>
          </Button>
          <Badge variant="secondary">Entrega imediata + Bônus incluídos</Badge>
        </div>
      </div>
    </section>
  );
}
