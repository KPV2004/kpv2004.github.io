import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    date: z.string().optional(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    images: z.array(z.string()).optional(),
    github: z.string().optional(),
    demo: z.string().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

const competitions = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/competitions' }),
  schema: z.object({
    title: z.string(),
    award: z.string(),
    category: z.string(),
    date: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    image: z.string().optional(),
    images: z.array(z.string()).optional(),
  }),
});

const certificates = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/certificates' }),
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    date: z.string(),
    skills: z.array(z.string()),
    image: z.string().optional(),
  }),
});

export const collections = {
  projects,
  competitions,
  certificates,
};
