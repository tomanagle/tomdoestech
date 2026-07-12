// Single source of truth for the technologies a project can be tagged with.
// Used by the projects content schema (`tech` enum) and the projects-page
// filters. Add new entries here before tagging a project with them - the
// content build will fail on any value not in this list.
export const TECHNOLOGIES = [
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Bun",
  "Go",
  "React.js",
  "Next.js",
  "GraphQL",
  "REST",
  "OAuth 2.0",
  "PostgreSQL",
  "MongoDB",
  "DynamoDB",
  "Snowflake",
  "AWS",
  "S3",
  "SQS",
  "Kinesis Firehose",
  "AWS Glue",
  "Athena",
  "dbt",
  "Kafka",
  "GitHub Actions",
  "Docker",
  "Playwright",
  // Cloudflare
  "Cloudflare",
  "Workers",
  "D1",
  "KV",
  "Queues",
  "Tailwind CSS",
  "Drupal",
  "Fastify",
  "PHP",
  "CSS",
  "Tanstack router",
  "Tanstack query",
] as const;

export type Technology = (typeof TECHNOLOGIES)[number];
