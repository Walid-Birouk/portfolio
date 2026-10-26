import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    stack: z.string(),
    pageSlug: z.string(),
    date: z.date().optional(),
    order: z.number(),
    description: z.string().optional(),
    flow: z.array(z.string()).min(2).max(4),
    images: z.array(z.string()).optional(),
    repoUrl: z.string().url().optional(),
    repoLabel: z.string().optional(),
    liveUrl: z.string().optional(),
  }),
});

export const collections = { projects };
