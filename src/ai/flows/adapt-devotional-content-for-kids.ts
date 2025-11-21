'use server';

/**
 * @fileOverview Adapts Bible verses and reflections for children's understanding.
 *
 * - adaptDevotionalContent - A function that adapts devotional content for kids.
 * - AdaptDevotionalContentInput - The input type for the adaptDevotionalContent function.
 * - AdaptDevotionalContentOutput - The return type for the adaptDevotionalContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AdaptDevotionalContentInputSchema = z.object({
  bibleVerse: z.string().describe('The original Bible verse.'),
  reflection: z.string().describe('The original reflection text.'),
});
export type AdaptDevotionalContentInput = z.infer<typeof AdaptDevotionalContentInputSchema>;

const AdaptDevotionalContentOutputSchema = z.object({
  adaptedBibleVerse: z.string().describe('The adapted Bible verse for children.'),
  adaptedReflection: z.string().describe('The adapted reflection text for children.'),
  needsAdaptation: z.boolean().describe('Indicates if the content was adapted or not.'),
});
export type AdaptDevotionalContentOutput = z.infer<typeof AdaptDevotionalContentOutputSchema>;

export async function adaptDevotionalContent(input: AdaptDevotionalContentInput): Promise<AdaptDevotionalContentOutput> {
  return adaptDevotionalContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'adaptDevotionalContentPrompt',
  input: {schema: AdaptDevotionalContentInputSchema},
  output: {schema: AdaptDevotionalContentOutputSchema},
  prompt: `You are a helpful assistant that adapts Bible verses and reflections to be age-appropriate for children.

  Evaluate if the original Bible verse and reflection are easy to understand for children. If not, adapt them to be simpler and more engaging.
  If adaptation is not required, return the original content in the adapted fields and set "needsAdaptation" to false. Otherwise, set "needsAdaptation" to true.

  Original Bible Verse: {{{bibleVerse}}}
  Original Reflection: {{{reflection}}}
  `,
});

const adaptDevotionalContentFlow = ai.defineFlow(
  {
    name: 'adaptDevotionalContentFlow',
    inputSchema: AdaptDevotionalContentInputSchema,
    outputSchema: AdaptDevotionalContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
