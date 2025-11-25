import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-center justify-center space-y-4 text-center lg:items-start lg:text-left">
            <div className="w-full max-w-md bg-muted rounded-lg overflow-hidden mb-6 shadow-inner">
              <video
                src="https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.9390433012946207.mp4"
                controls
                className="w-full"
              />
            </div>

            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Transforme 10 minutos por dia em um encontro com Jesus
            </h1>
            <p className="max-w-[700px] text-foreground/80 md:text-xl">
              Devocional ilustrado de 30 dias para fortalecer a fé em família, com reflexões curtas, orações e atividades divertidas.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
               <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <a href="https://pay.kirvano.com/f07f15f9-4161-4482-a8f7-e05a89087f08">
                  <Download className="mr-2 h-5 w-5" />
                  Baixar agora — Apenas R$ 49,90
                </a>
              </Button>
            </div>
             <div className="flex flex-col items-center sm:items-start gap-2 text-sm text-muted-foreground mt-4">
                <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-green-600" />
                    <span>Compra segura pela Kirvano. Acesso imediato.</span>
                </div>
                <span>Bônus de lançamento disponíveis por tempo limitado.</span>
            </div>
          </div>
          <div className="relative h-[300px] w-full lg:h-auto rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.5996308446213416.png"
              alt="Capa do devocional infantil 'Caminhando com Jesus'"
              layout="fill"
              objectFit="cover"
              data-ai-hint="devotional cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
