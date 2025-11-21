import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria C.",
    quote: "Finalmente encontramos algo que as crianças gostam. Mudou nossas noites!",
  },
  {
    name: "Carlos R.",
    quote: "As atividades são simples e lindas. Meus filhos já oram sozinhos.",
  },
  {
    name: "Ana G.",
    quote: "Eu procurava algo assim há meses. É exatamente o que precisávamos para nos conectar como família.",
  },
];

export function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Milhares de famílias já estão transformando seus dias</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col justify-between shadow-lg">
              <CardHeader>
                <div className="flex gap-0.5 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg font-semibold leading-snug">
                  “{testimonial.quote}”
                </blockquote>
              </CardContent>
              <CardFooter>
                <p className="font-semibold">— {testimonial.name}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
