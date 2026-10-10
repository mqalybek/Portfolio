import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { categories } from './site.config';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.number(),
    category: z.enum(categories),
    client: z.string().optional(),
    role: z.string().default('Concept · Prompting · Edit'),
    tools: z.array(z.string()).default([]),
    /** Show on the home page. */
    featured: z.boolean().default(false),
    /** Lower comes first. */
    order: z.number().default(100),
    /** Card shape in the grid. */
    size: z.enum(['normal', 'wide', 'tall', 'large']).default('normal'),
    cover: z.string(),
    /** Short silent loop played on hover. */
    preview: z.string().optional(),
    /** Main video: .mp4, Bunny .m3u8, YouTube or Vimeo link. */
    video: z
      .object({
        src: z.string(),
        poster: z.string().optional(),
        aspect: z.string().default('16 / 9'),
      })
      .optional(),
    gallery: z.array(z.object({ src: z.string(), alt: z.string().default('') })).default([]),
    prompt: z.string().optional(),
    negativePrompt: z.string().optional(),
    params: z.string().optional(),
    pipeline: z.array(z.object({ tool: z.string(), step: z.string() })).default([]),
    iterations: z
      .array(z.object({ label: z.string(), note: z.string(), image: z.string().optional() }))
      .default([]),
    results: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    /** Placeholder entry — shows a "Demo" badge. Delete the file when you add real work. */
    demo: z.boolean().default(false),
  }),
});

const prompts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/prompts' }),
  schema: z.object({
    title: z.string(),
    model: z.string(),
    kind: z.enum(['Image', 'Video', 'Text', 'System', 'Audio']),
    prompt: z.string(),
    note: z.string().optional(),
    order: z.number().default(100),
  }),
});

export const collections = { work, prompts };
