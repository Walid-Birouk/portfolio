import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    stack: z.string(),
    pageSlug: z.string(),
    date: z.date(),
    thumb: z.string(),
    images: z.array(z.string()).optional(),
  }),
});

export const collections = { projects };
