import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.string(),
    category: z.enum(['api', 'db', 'devops', 'fullstack']),
    techs: z.array(z.string()),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number(),
  }),
});

export const collections = { projects };