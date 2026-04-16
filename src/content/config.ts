import { defineCollection, z } from 'astro:content';

const practiceAreas = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    listHeading: z.string().optional(),
    listItems: z.array(z.string()).optional(),
  }),
});

const caseResults = defineCollection({
  type: 'data',
  schema: z.object({
    items: z.array(
      z.object({
        title: z.string(),
        category: z.string(),
        situation: z.string(),
        outcome: z.string(),
      }),
    ),
  }),
});

export const collections = {
  practiceAreas,
  caseResults,
};
