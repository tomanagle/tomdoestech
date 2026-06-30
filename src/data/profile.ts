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
      "Senior software engineer with a passion for building software that delights users. I enjoy getting into the technical details and working with product teams to solve real customer problems.",
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
    { category: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS"] },
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
            "Lead the technical design and development of major features across the Node.js/TypeScript backend, Go services, and Flutter app.",
            "Built a rules engine that lets non-developers automate the bill of materials for solar designs.",
            "Co-led a platform that merged products from multiple providers into a single catalog, replacing a manual process and enabling key third-party integrations.",
            "Lead architecture and technical design discussions, working closely with product and design teams.",
            "Built and maintain end-to-end tests with Playwright to keep the product working as expected.",
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
            "Led the design and build of a configurable, multilingual feedback platform used by major retail brands.",
            "Re-platformed the analytics pipeline onto Snowflake and dbt, cutting dashboard query times from minutes to seconds.",
            "Built a multi-tenant accounts and authentication service in Go with OAuth, across multiple regions with data-sovereignty requirements.",
            "Built a multi-tenant URL shortener that became the entry point for the Click and Collect services of two of Australia's largest retailers.",
            "Led a large customer-facing app in Next.js, GraphQL, and TypeScript, and designed REST and GraphQL APIs across several Go services.",
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
            "Led and coached developers, owning technical solution design and code reviews.",
            "Built an interactive event hub with Next.js, GraphQL, and MongoDB for Europe's largest procurement events, with live session feedback, networking, and content synced from Salesforce.",
            "Developed GraphQL and REST APIs with Node.js, TypeScript, Apollo, Express, and MongoDB.",
            "Built React applications with Next.js, Redux, and Apollo GraphQL.",
            "Established CircleCI for CI/CD and configured Ubuntu/Nginx web servers.",
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
