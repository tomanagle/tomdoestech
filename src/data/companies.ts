// Single source of truth for the companies referenced across the site.
// Used both by the projects content schema (`company` enum) and by the
// work-history timeline, so a project's `company` can always be matched to a
// job - they cannot drift apart.
export const COMPANIES = [
  "UPowr",
  "Localz (Descartes)",
  "Procurement Leaders",
  "HoundHouse",
  "AD Marketing",
  "M&D Employment",
] as const;

export type Company = (typeof COMPANIES)[number];
