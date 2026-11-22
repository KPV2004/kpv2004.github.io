// Each collection holds one folder per locale (en/, th/) with matching slugs.
// Entry ids look like "en/tiawpao"; see src/utils/content.ts for locale helpers.

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '{en,th}/**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    date: z.string().optional(),
    tags: z.array(z.string()),
    image: image().optional(),
    images: z.array(image()).optional(),
    github: z.string().optional(),
    demo: z.string().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

const competitions = defineCollection({
  loader: glob({ pattern: '{en,th}/**/*.{md,mdx}', base: './src/content/competitions' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    award: z.string(),
    category: z.string(),
    date: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    image: image().optional(),
    images: z.array(image()).optional(),
  }),
});

const certificates = defineCollection({
  loader: glob({ pattern: '{en,th}/**/*.{md,mdx}', base: './src/content/certificates' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    issuer: z.string(),
    date: z.string(),
    skills: z.array(z.string()),
    image: image().optional(),
  }),
});

export const collections = {
  projects,
  competitions,
  certificates,
};
