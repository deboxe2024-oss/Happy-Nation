'use server'

import { z } from "zod";

const schema = z.object({
  bibleVerse: z.string().min(10, 'Por favor, insira um versículo com pelo menos 10 caracteres.'),
  reflection: z.string().min(10, 'Por favor, insira uma reflexão com pelo menos 10 caracteres.'),
});

type State = {
  message?: string;
  adaptedContent?: {
    adaptedBibleVerse: string;
    adaptedReflection: string;
    needsAdaptation: boolean;
  }
  errors?: {
    bibleVerse?: string[];
    reflection?: string[];
  }
} | null;

// Mocked adapted content
const adaptedContent = {
    adaptedBibleVerse: "Não se preocupem com nada, mas em todas as situações, conversem com Deus. Peçam o que vocês precisam e sempre agradeçam. E a paz de Deus, que é tão maravilhosa que a gente nem consegue entender, vai cuidar do coração e da mente de vocês em Cristo Jesus.",
    adaptedReflection: "Este versículo nos ensina que, em vez de ficarmos ansiosos, podemos contar a Deus o que nos preocupa. É como conversar com um amigo que pode resolver tudo! Quando confiamos em Deus, Ele nos dá uma paz especial que guarda nosso coração, nos deixando calmos e seguros.",
    needsAdaptation: true,
};

export async function adaptContentAction(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = schema.safeParse({
    bibleVerse: formData.get('bibleVerse'),
    reflection: formData.get('reflection'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Campos inválidos. Por favor, corrija os erros e tente novamente.',
    }
  }

  // Simulate a network delay for a better user experience
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return { adaptedContent, message: 'Conteúdo adaptado com sucesso!' };
}
