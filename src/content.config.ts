import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const rooms = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/rooms' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    images: z.array(z.string()),
    amenities: z.array(z.string()),
    capacity: z.number(),
    size: z.string(),
    order: z.number(),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    time: z.string().optional(),
    venue: z.enum(['speakeasy', 'rooftop', 'general']),
    image: z.string(),
    rsvpLink: z.string().optional(),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    author: z.string().optional(),
    image: z.string(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()),
  }),
});

const packages = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/packages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    features: z.array(z.string()),
    price: z.string().optional(),
    image: z.string(),
    order: z.number(),
  }),
});

const destinations = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/destinations' }),
  schema: z.object({
    city: z.string(),
    heroImage: z.string(),
    properties: z.array(z.object({
      name: z.string(),
      image: z.string(),
      link: z.string(),
      comingSoon: z.boolean().optional(),
    })),
  }),
});

export const collections = { rooms, events, articles, packages, destinations };
