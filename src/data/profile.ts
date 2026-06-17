// Single source of truth for personal/profile data shown across the site.
// Edit the values below — the components and layout read straight from here.

import type { Company } from "./companies";

export interface SocialLink {
  /** Used as the accessible label and visible text. */
  label: string;
  url: string;
  /** Optional handle shown alongside the label, e.g. "@tomdoestech". */
  handle?: string;
}

export interface WorkItem {
  company: Company;
  role: string;
  /** Free-form date range, e.g. "2022 — Present". */
  period: string;
  /** Bullet-point accomplishments shown under the role. */
  highlights?: string[];
}

export interface Profile {
  name: string;
  bio: {
    /** Short one-liner used for meta descriptions and the header. */
    tagline: string;
    /** Longer intro paragraph for the homepage hero. */
    intro: string;
  };
  socials: SocialLink[];
  workHistory: WorkItem[];
}

export const profile: Profile = {
  name: "Tom Nagle",
  bio: {
    tagline: "Senior software engineer.",
    intro:
      "I'm a senior software engineer who enjoys building pragmatic, " +
      "well-crafted software. Below are a few places you can find me, and " +
      "some writeups of projects I've worked on.",
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
  workHistory: [
    {
      company: "UPowr",
      role: "Senior Software Engineer",
      period: "Feb 2024 — Present",
      highlights: [
        "Lead the technical design and development of major features across the Node.js/TypeScript backend, Go services, and Flutter app.",
        "Lead architecture and technical design discussions.",
        "Work closely with product and design teams to deliver polished user experiences.",
        "Develop and maintain end-to-end tests with Playwright to keep the product working as expected.",
      ],
    },
    {
      company: "Localz (Descartes)",
      role: "Senior Software Engineer",
      period: "Sep 2019 — Feb 2024",
      highlights: [
        "Led a large project using Next.js, GraphQL, and TypeScript.",
        "Led the development of and contributed to several Go applications.",
        "Integrated with AWS services such as Athena, Glue, Snowflake, SQS, and DynamoDB.",
        "Designed and built RESTful and GraphQL APIs.",
        "Built and contributed to Node.js applications.",
        "Worked closely with the product team.",
        "Automated testing with Vitest, Jest, node-tap, and Cypress.",
      ],
    },
    {
      company: "Procurement Leaders",
      role: "Senior Full Stack Developer",
      period: "Feb 2016 — Jun 2019",
      highlights: [
        "Led and coached developers, owning technical solution design and code reviews.",
        "Developed GraphQL and REST APIs with Node.js, TypeScript, Apollo, Express, and MongoDB.",
        "Built React applications with Next.js, Redux, and Apollo GraphQL.",
        "Established CircleCI for CI/CD and configured Ubuntu/Nginx web servers.",
      ],
    },
    {
      company: "HoundHouse",
      role: "E-Commerce Manager",
      period: "May 2015 — Nov 2015",
    },
    {
      company: "AD Marketing",
      role: "Web Developer",
      period: "Apr 2015 — Nov 2015",
    },
    {
      company: "M&D Employment",
      role: "Web Developer",
      period: "Jun 2013 — Nov 2015",
    },
  ],
};
