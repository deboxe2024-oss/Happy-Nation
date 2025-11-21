import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Frown, Smile } from "lucide-react";

const beforeItems = [
  "Dias caóticos sem tempo para orar",
  "Filhos distraídos e desmotivados",
  "Pais com culpa espiritual",
];

const afterItems = [
  "Momentos diários com propósito e calma",
  "Crianças que aguardam o momento com Jesus",
  "Pais guiando com alegria e segurança",
];

export function Transformation() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">A transformação que você vai ver</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <Card className="border-destructive/50">
            <CardHeader className="flex-row items-center gap-4">
              <Frown className="h-8 w-8 text-destructive" />
              <CardTitle className="font-headline text-2xl text-destructive">Antes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-foreground/80">
                {beforeItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-destructive/50" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-green-500/50">
            <CardHeader className="flex-row items-center gap-4">
              <Smile className="h-8 w-8 text-green-600" />
              <CardTitle className="font-headline text-2xl text-green-600">Depois</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-foreground/90">
                {afterItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-500/50" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="relative h-80 w-full lg:h-[450px] rounded-xl overflow-hidden shadow-lg mt-12">
          <Image
            src="https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.7492676914349277.jpg"
            alt="Família feliz orando junta"
            layout="fill"
            objectFit="cover"
            data-ai-hint="happy family praying"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
           <div className="absolute bottom-6 left-6 text-white p-4">
            <p className="text-2xl font-bold font-headline">Momentos de paz e conexão espiritual.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
