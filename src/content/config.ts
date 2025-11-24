// This is the config file for Astro's content module.

import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    description: z.string(),
    isPublish: z.boolean(),
    isDraft: z.boolean().default(false),
  }),
});

export const collections = { posts: postsCollection };
// This script enables us to use the getCollection function in other pages.
// This setup provides type safety and validation for the blog posts, making it harder to accidentally publish posts with missing or incorrect metadata.