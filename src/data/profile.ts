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
      "Tom Nagle is a senior fullstack software engineer building cloud APIs, " +
      "event-driven systems and data pipelines in Noosa, Queensland.",
    intro:
      "I'm a senior software engineer with 10+ years of experience, including seven years in startup and scale-up environments. I specialise in Go, TypeScript, API development and event-driven systems, and I've led products and platform capabilities from early discovery through to production. I enjoy working with product, design and engineering teams to turn ambiguous problems into scalable, secure and maintainable software.",
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
            "Lead the design and delivery of backend and platform capabilities across Go services, Node.js/TypeScript APIs and a Flutter application, from discovery through production",
            "Designed an external SDK and plugin architecture supporting platform integrations and extensibility",
            "Co-led a file-driven ingestion platform that unified 50,000+ products from two providers and enabled integrations with solar design and rebate platforms",
            "Built a guardrailed rules engine used for hundreds of production rules and thousands of customer quotes, with no production incidents to date",
            "Design and maintain business-critical Camunda workflows, participate in on-call, and support production incidents",
            "Strengthen delivery and security with Playwright E2E tests, secure authentication and webhook validation",
            "Work with product, design, subject-matter experts and engineers to turn ambiguous requirements into maintainable technical designs",
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
            "Designed and built multi-tenant microservices in Go and Node.js/TypeScript on a Kafka- and AWS-based event-driven architecture",
            "Built the multi-region authentication and authorisation service in Go with OAuth 2.0, working within data-sovereignty requirements",
            "Built a Fastify and DynamoDB URL shortener that became the entry point for Click and Collect services at two of Australia's largest retailers",
            "Added PII redaction and re-platformed a Kafka-to-S3 analytics pipeline from AWS Glue and Athena to Snowflake and dbt, cutting dashboard queries from 60-120 seconds to seconds",
            "Led the design and delivery of a configurable feedback platform handling more than one million submissions per year, with results streamed through Kafka for real-time action and analytics",
            "Led delivery of a large customer-facing Next.js, GraphQL and TypeScript application",
            "Automated testing with Vitest, Jest, node-tap and Cypress",
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
            "Led and coached developers, owning solution design, implementation decisions and code reviews",
            "Designed and built GraphQL and REST APIs with Node.js, TypeScript, Apollo, Express, and MongoDB",
            "Built an interactive Next.js and GraphQL event platform used by thousands of delegates, with live feedback, networking and content synced from Salesforce",
            "Established CircleCI-based CI/CD and configured Ubuntu/Nginx production servers",
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
