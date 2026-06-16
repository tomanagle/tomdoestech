// Single source of truth for personal/profile data shown across the site.
// Edit the values below — the components and layout read straight from here.

export interface SocialLink {
  /** Used as the accessible label and visible text. */
  label: string;
  url: string;
  /** Optional handle shown alongside the label, e.g. "@tomdoestech". */
  handle?: string;
}

export interface WorkItem {
  company: string;
  role: string;
  /** Free-form date range, e.g. "2022 — Present". */
  period: string;
  summary: string;
  url?: string;
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
      url: "https://www.linkedin.com/in/your-handle",
      handle: "in/your-handle",
    },
    {
      label: "YouTube",
      url: "https://www.youtube.com/@your-handle",
      handle: "@your-handle",
    },
    {
      label: "X",
      url: "https://x.com/your-handle",
      handle: "@your-handle",
    },
  ],
  workHistory: [
    {
      company: "Company Name",
      role: "Senior Software Engineer",
      period: "2022 — Present",
      summary:
        "One or two sentences on what you do here and the impact you've had.",
      url: "https://example.com",
    },
    {
      company: "Previous Company",
      role: "Software Engineer",
      period: "2019 — 2022",
      summary: "What you worked on and a notable outcome.",
    },
  ],
};
