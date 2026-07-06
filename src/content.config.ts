import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

import { COMPANIES } from "./data/companies";
import { TECHNOLOGIES } from "./data/technologies";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Used on cards and as the page meta description.
      description: z.string(),
      role: z.string().optional(),
      // Company this was built for (see src/data/companies.ts). Shared with the
      // work-history timeline so a project cross-links to the matching job.
      company: z.enum(COMPANIES).optional(),
      // Constrained to the shared list so projects and filters stay in sync.
      tech: z.array(z.enum(TECHNOLOGIES)).default([]),
      // Free-form, e.g. "2024" or "Mar–Jun 2024".
      period: z.string().optional(),
      cover: image().optional(),
      // Surface near the top of the projects list.
      featured: z.boolean().default(false),
      // Lower numbers sort first within each group.
      order: z.number().default(0),
      // Hidden from production builds while in progress.
      draft: z.boolean().default(false),
    }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Used on cards and as the page meta description.
      description: z.string(),
      // Publish date, e.g. "2026-06-30".
      date: z.coerce.date(),
      // Optional last-updated date.
      updated: z.coerce.date().optional(),
      // Free-form topic tags.
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      // Hidden from production builds while in progress.
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects, blog };
