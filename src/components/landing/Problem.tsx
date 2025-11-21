import Image from "next/image";
import { Card } from "@/components/ui/card";
import { XCircle } from "lucide-react";

export function Problem() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-80 w-full lg:h-[400px] rounded-xl overflow-hidden shadow-lg">
             <Image
              src="https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.038391626302673676.jpg"
              alt="Mãe preocupada vendo filhos distraídos"
              layout="fill"
              objectFit="cover"
              data-ai-hint="concerned mother children screens"
            />
          </div>
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Você se sente assim?</h2>
            <ul className="space-y-4 text-lg text-foreground/80">
              <li className="flex items-start gap-3">
                <XCircle className="mt-1 h-5 w-5 shrink-0 text-destructive" />
                <span>Você sabe que a fé é o mais importante, mas entre trabalho, escola e celulares… o tempo com Jesus simplesmente desaparece.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="mt-1 h-5 w-5 shrink-0 text-destructive" />
                <span>Você gostaria de ensinar sobre Deus, mas não sabe por onde começar nem como manter a atenção deles.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="mt-1 h-5 w-5 shrink-0 text-destructive" />
                <span>Você não precisa de mais tempo. Precisa apenas de um guia claro, curto e cheio de alegria.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
