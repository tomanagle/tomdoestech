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
      "Tom Nagle is a senior software engineer building backends, data " +
      "pipelines, and products, based on the Sunshine Coast, QLD.",
    intro:
      "I'm a senior software engineer with 10+ years of experience, the last seven at startups. I work across the full stack and I've led products from concept to delivery. I like getting involved early, working with product managers and designers to understand the problem before deciding what to build. Outside of work I teach software engineering on YouTube as tomdoestech.",
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
    { category: "Languages", items: ["TypeScript", "JavaScript", "Go"] },
    { category: "Backend", items: ["Node.js", "Fastify", "GraphQL", "REST"] },
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
    {
      category: "Data",
      items: ["PostgreSQL", "MongoDB", "Kafka", "Snowflake", "dbt"],
    },
    {
      category: "Cloud & DevOps",
      items: [
        "AWS",
        "DynamoDB",
        "SQS",
        "Cloudflare",
        "Workers",
        "D1",
        "KV",
        "Queues",
        "Docker",
        "GitHub Actions",
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
            "Led the technical design and development of major features across the Node.js/TypeScript backend, Go services and a Flutter app",
            "Led the design of an external SDK, plugin system and key platform integrations",
            "Led technical discussions and architectural designs",
            "Designed, implemented and maintained complex workflows in Camunda",
            "Develop and maintain E2E tests with Playwright",
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
            "Designed and built multi-tenant microservices in Go and Node.js/TypeScript on an event-driven architecture",
            "Led a large customer-facing app in Next.js, GraphQL, and TypeScript",
            "Re-platformed the Kafka-to-S3 analytics pipeline from Athena onto Snowflake and dbt",
            "Built platform authentication in Go with OAuth 2.0",
            "Led the design and implementation of a high-volume survey platform",
          ],
        },
      ],
    },
    {
      company: "Procurement Leaders",
      location: "London, United Kingdom",
      // Promotions over ~3.5 years, most recent first.
      roles: [
        {
          title: "Development Lead",
          period: "Jan 2019 - Jun 2019",
          highlights: [
            "Led and coached developers, owning solution design and code reviews",
            "Designed and built GraphQL and REST APIs with Node.js, TypeScript, Apollo, Express, and MongoDB",
            "Built React applications with Next.js, Redux, and Apollo GraphQL",
            "Built an interactive event platform with a Salesforce integration",
            "Established CI/CD with CircleCI and configured Ubuntu/Nginx servers",
          ],
        },
        {
          title: "Senior Full Stack Developer",
          period: "Jan 2018 - Jan 2019",
        },
        {
          title: "Full Stack Developer",
          period: "Jan 2017 - Jan 2018",
        },
        {
          title: "Web Developer",
          period: "Feb 2016 - Jan 2017",
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
            "Designed, developed, and deployed e-commerce websites selling premium pet products worldwide.",
            "Configured LAMP-stack servers, significantly reducing hosting costs while improving site performance.",
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
            "Worked in a team of marketers and developers building websites and online marketing strategies for clients.",
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
            "Designed and developed e-commerce websites with Drupal Commerce and WooCommerce in a small team.",
            "Configured AWS instances and deployed sites on LAMP-stack servers.",
          ],
        },
      ],
    },
  ],
};
