import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Product() {
  return (
    <section id="product" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="relative mx-auto w-full max-w-sm aspect-[3/4] rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <Image
              src="https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.2707656356410969.png"
              alt="Capa do livro Caminhando com Jesus"
              layout="fill"
              objectFit="cover"
              data-ai-hint="book cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-2">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
                Comece a jornada de fé da sua família hoje!
              </h2>
              <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto lg:mx-0">
                O guia completo de 30 dias para conectar seus filhos com Jesus de uma forma que eles vão amar.
              </p>
            </div>
            <Button size="lg" asChild className="mx-auto lg:mx-0 w-fit">
              <a href="#cta">Quero começar os 30 dias com Jesus</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
