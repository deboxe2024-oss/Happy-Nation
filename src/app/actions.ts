'use server'

import { adaptDevotionalContent } from "@/ai/flows/adapt-devotional-content-for-kids";
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
}

export async function adaptContentAction(prevState: State | null, formData: FormData): Promise<State> {
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

  try {
    const result = await adaptDevotionalContent({
      bibleVerse: validatedFields.data.bibleVerse,
      reflection: validatedFields.data.reflection,
    });
    return { adaptedContent: result, message: 'Conteúdo adaptado com sucesso!' };
  } catch (error) {
    console.error(error);
    return { message: 'Ocorreu um erro inesperado ao adaptar o conteúdo. Tente novamente mais tarde.' };
  }
}
