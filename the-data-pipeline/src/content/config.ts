import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    summaryRole: z.string().optional(),
    summaryTools: z.string().optional(),
    prevPage: z.object({
      title: z.string(),
      url: z.string(),
    }).optional(),
    nextPage: z.object({
      title: z.string(),
      url: z.string(),
    }).optional(),
  }),
});

export const collections = {
  pages: pagesCollection,
};
