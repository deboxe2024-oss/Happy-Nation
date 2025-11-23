'use client'

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { adaptContentAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Wand2 } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full" variant="default">
      {pending ? (
        'Adaptando...'
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Adaptar para Crianças
        </>
      )}
    </Button>
  );
}

export function AiDemo() {
  const { toast } = useToast();
  const [state, formAction, isPending] = useActionState(adaptContentAction, null);

  useEffect(() => {
    if (state?.message && !state?.adaptedContent && state.errors) {
      toast({
        variant: "destructive",
        title: "Erro de Validação",
        description: state.message,
      });
    } else if (state?.message && !state?.adaptedContent) {
      toast({
        variant: "destructive",
        title: "Erro na Adaptação",
        description: state.message,
      });
    }
  }, [state, toast]);
  
  const defaultVerse = "Não andem ansiosos por coisa alguma, mas em tudo, pela oração e súplicas, e com ação de graças, apresentem seus pedidos a Deus. E a paz de Deus, que excede todo o entendimento, guardará o coração e a mente de vocês em Cristo Jesus.";
  const defaultReflection = "Este versículo de Filipenses 4:6-7 nos ensina sobre a importância de confiar em Deus através da oração, em vez de nos preocuparmos. A ansiedade é uma luta comum, mas a promessa divina é que a paz que transcende a compreensão humana pode ser nossa através da fé em Cristo, guardando-nos de perturbações emocionais e mentais.";

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Veja a Mágica Acontecer: Adaptação com IA</h2>
          <p className="max-w-[700px] mx-auto text-foreground/80 md:text-xl mt-4">
            Nosso devocional usa inteligência artificial para garantir que cada lição seja perfeitamente compreensível para as crianças. Veja como funciona!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Conteúdo Original</CardTitle>
              <CardDescription>Insira um versículo e reflexão para adultos.</CardDescription>
            </CardHeader>
            <CardContent>
              <form action={formAction} className="space-y-4">
                <div>
                  <Label htmlFor="bibleVerse">Versículo Bíblico</Label>
                  <Textarea
                    id="bibleVerse"
                    name="bibleVerse"
                    placeholder="Ex: João 3:16"
                    rows={4}
                    defaultValue={defaultVerse}
                    required
                  />
                  {state?.errors?.bibleVerse && <p className="text-sm text-destructive mt-1">{state.errors.bibleVerse[0]}</p>}
                </div>
                <div>
                  <Label htmlFor="reflection">Reflexão</Label>
                  <Textarea
                    id="reflection"
                    name="reflection"
                    placeholder="Reflexão para adultos sobre o versículo"
                    rows={6}
                    defaultValue={defaultReflection}
                    required
                  />
                  {state?.errors?.reflection && <p className="text-sm text-destructive mt-1">{state.errors.reflection[0]}</p>}
                </div>
                <SubmitButton />
              </form>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Conteúdo Adaptado para Crianças</CardTitle>
              <CardDescription>A versão simplificada e divertida gerada pela nossa IA.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {isPending && (
                <div className="space-y-4">
                  <div>
                    <Skeleton className="h-6 w-1/4 mb-2" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full mt-1" />
                    <Skeleton className="h-4 w-3/4 mt-1" />
                  </div>
                   <div>
                    <Skeleton className="h-6 w-1/4 mb-2" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full mt-1" />
                    <Skeleton className="h-4 w-5/6 mt-1" />
                  </div>
                </div>
              )}
              {!isPending && state?.adaptedContent && (
                <div className="space-y-4 text-sm">
                   {state.adaptedContent.needsAdaptation && (
                    <Alert variant="default" className="bg-primary/10 border-primary/50">
                        <Wand2 className="h-4 w-4" />
                        <AlertTitle>Conteúdo Adaptado!</AlertTitle>
                        <AlertDescription>
                            A IA simplificou o texto para ser mais fácil para as crianças.
                        </AlertDescription>
                    </Alert>
                   )}
                  <div>
                    <h3 className="font-bold text-lg mb-1">Versículo Adaptado</h3>
                    <p className="text-foreground/80 leading-relaxed">{state.adaptedContent.adaptedBibleVerse}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Reflexão Adaptada</h3>
                    <p className="text-foreground/80 leading-relaxed">{state.adaptedContent.adaptedReflection}</p>
                  </div>
                </div>
              )}
               {!isPending && !state?.adaptedContent && (
                 <div className="flex items-center justify-center h-48 bg-muted/50 rounded-lg">
                    <p className="text-muted-foreground">O conteúdo adaptado aparecerá aqui.</p>
                 </div>
               )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
