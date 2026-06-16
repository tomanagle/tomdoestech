import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Used on cards and as the page meta description.
      description: z.string(),
      role: z.string().optional(),
      tech: z.array(z.string()).default([]),
      // Free-form, e.g. "2024" or "Mar–Jun 2024".
      period: z.string().optional(),
      links: z
        .object({
          repo: z.string().url().optional(),
          live: z.string().url().optional(),
        })
        .optional(),
      cover: image().optional(),
      // Surface near the top of the projects list.
      featured: z.boolean().default(false),
      // Lower numbers sort first within each group.
      order: z.number().default(0),
      // Hidden from production builds while in progress.
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
