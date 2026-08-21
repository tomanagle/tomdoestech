// Single source of truth for personal/profile data shown across the site.
// Edit the values below - the components and layout read straight from here.

import type { Company } from "./companies";
import type { Technology } from "./technologies";

export interface SocialLink {
  /** Used as the accessible label and visible text. */
  label: string;
  url: string;
  /** Optional handle shown alongside the label, e.g. "@tomdoestech". */
  handle?: string;
}

export interface Role {
  title: string;
  /** Free-form date range, e.g. "Jan 2019 - Jun 2019". */
  period: string;
  /** Bullet-point accomplishments shown under the role. */
  highlights?: string[];
}

export interface WorkItem {
  company: Company;
  /** e.g. "Remote", "London, United Kingdom". */
  location?: string;
  /** Roles held here, most recent first. More than one represents promotions. */
  roles: Role[];
}

export interface TechGroup {
  category: string;
  items: Technology[];
}

export interface Profile {
  name: string;
  /** Contact address used by the "Get in touch" button. */
  email: string;
  bio: {
    /** Short one-liner used for meta descriptions and the header. */
    tagline: string;
    /** Longer intro paragraph for the homepage hero. */
    intro: string;
  };
  socials: SocialLink[];
  /** Grouped technologies shown in the hero; each links to the filter. */
  techStack: TechGroup[];
  workHistory: WorkItem[];
}

export const profile: Profile = {
  name: "Tom Nagle",
  email: "tomanagle@gmail.com",
  bio: {
    tagline:
      "Tom Nagle is a senior full-stack software engineer based in Noosa, Queensland.",
    intro:
      "Senior software engineer with 10+ years of experience in B2B SaaS. I work across the full stack and product lifecycle, from early ideas through to production and ongoing maintenance. I enjoy owning complex problems, making pragmatic technical decisions and shipping reliable software.",
  },
  socials: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/tomanagle/",
      handle: "in/tomanagle",
    },
    {
      label: "GitHub",
      url: "https://github.com/tomanagle",
      handle: "tomanagle",
    },
    {
      label: "YouTube",
      url: "https://www.youtube.com/tomdoestech",
      handle: "tomdoestech",
    },
  ],
  techStack: [
    { category: "Languages", items: ["Go", "TypeScript", "JavaScript"] },
    {
      category: "Backend",
      items: ["Node.js", "Fastify", "REST", "GraphQL", "OAuth 2.0"],
    },
    {
      category: "Data & Messaging",
      items: [
        "Kafka",
        "SQS",
        "Kinesis Firehose",
        "PostgreSQL",
        "DynamoDB",
        "MongoDB",
        "Snowflake",
        "dbt",
      ],
    },
    {
      category: "Cloud & Delivery",
      items: [
        "AWS",
        "S3",
        "Cloudflare",
        "Workers",
        "D1",
        "KV",
        "Queues",
        "Docker",
        "GitHub Actions",
        "Playwright",
      ],
    },
    {
      category: "Frontend",
      items: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Tanstack query",
        "Tanstack router",
      ],
    },
  ],
  workHistory: [
    {
      company: "UPowr",
      location: "Remote",
      roles: [
        {
          title: "Senior Software Engineer",
          period: "Feb 2024 - Present",
          highlights: [
            "Lead technical discussions and design decisions for cross-cutting platform capabilities, including authentication, integrations, SDKs and API design",
            "Build and ship Go and TypeScript services, REST and GraphQL APIs, and customer-facing applications from discovery through to production",
            "Design and implement durable workflows with Camunda and Temporal",
            "Own production reliability through end-to-end testing, observability, on-call and incident response",
            "Build shared technical ownership through design discussions, code reviews and documentation across platform-critical areas",
            "Prototype and evaluate AI-assisted workflows, with a focus on reliability, guardrails and safe production use",
          ],
        },
      ],
    },
    {
      company: "Localz (Descartes)",
      location: "Melbourne & remote",
      roles: [
        {
          title: "Senior Software Engineer",
          period: "Sep 2019 - Feb 2024",
          highlights: [
            "Led technical design and delivery across customer-facing applications and backend services, helping shape architecture, patterns and implementation decisions",
            "Built and maintained production systems across TypeScript, Go, Next.js, GraphQL, Kafka and AWS in a multi-tenant, event-driven architecture",
            "Led the design and delivery of production systems at scale, handling millions of customer interactions",
          ],
        },
      ],
    },
    {
      company: "Procurement Leaders",
      location: "London, United Kingdom",
      roles: [
        {
          title: "Full-Stack Developer to Development Lead",
          period: "Feb 2016 - Jun 2019",
          highlights: [
            "Led the development team, coaching engineers and owning key technical decisions, solution design and code reviews",
            "Shipped full-stack products across TypeScript, Node.js, React, Next.js, GraphQL and REST APIs",
            "Owned parts of the delivery infrastructure, including CI/CD, Linux/Nginx hosting and production deployments",
          ],
        },
      ],
    },
    {
      company: "HoundHouse",
      location: "Queensland, Australia",
      roles: [
        {
          title: "Ecommerce Manager",
          period: "May 2015 - Nov 2015",
          highlights: [
            "Designed, developed and deployed e-commerce websites selling premium pet products worldwide",
            "Configured LAMP stack servers, reducing hosting costs and improving site performance",
          ],
        },
      ],
    },
    {
      company: "AD Marketing",
      location: "Queensland, Australia",
      roles: [
        {
          title: "Web Developer",
          period: "Apr 2015 - Nov 2015",
          highlights: [
            "Worked with marketers and developers to build websites and online marketing strategies for clients",
          ],
        },
      ],
    },
    {
      company: "M&D Employment",
      location: "Queensland, Australia",
      roles: [
        {
          title: "Web Developer & SEO",
          period: "Jun 2013 - Nov 2015",
          highlights: [
            "Designed and developed e-commerce websites with Drupal Commerce and WooCommerce in a small team",
            "Configured AWS instances and deployed sites on LAMP stack servers",
          ],
        },
      ],
    },
  ],
};
