import { useEffect, useState } from "react";

export interface ProjectSummary {
  id: string;
  title: string;
  description: string;
  company?: string;
  tech: string[];
  period?: string;
}

interface Props {
  /** Pre-sorted list of published projects. */
  projects: ProjectSummary[];
}

interface Filters {
  companies: string[];
  tech: string[];
}

const EMPTY: Filters = { companies: [], tech: [] };

function readFilters(): Filters {
  const params = new URLSearchParams(window.location.search);
  return { companies: params.getAll("company"), tech: params.getAll("tech") };
}

function writeFilters(filters: Filters) {
  const params = new URLSearchParams();
  for (const company of filters.companies) params.append("company", company);
  for (const tech of filters.tech) params.append("tech", tech);
  const query = params.toString();
  window.history.replaceState(
    null,
    "",
    query ? `?${query}` : window.location.pathname,
  );
}

function toggle(list: string[], value: string): string[] {
  return list.includes(value)
    ? list.filter((item) => item !== value)
    : [...list, value];
}

export default function ProjectsExplorer({ projects }: Props) {
  const [filters, setFilters] = useState<Filters>(EMPTY);

  // Read filters from the URL after hydration (keeps SSR markup stable, so the
  // timeline can deep-link with `?company=…&tech=…`).
  useEffect(() => {
    setFilters(readFilters());
  }, []);

  const update = (next: Filters) => {
    setFilters(next);
    writeFilters(next);
  };

  const availableCompanies = Array.from(
    new Set(projects.flatMap((p) => (p.company ? [p.company] : []))),
  ).toSorted();
  const availableTech = Array.from(
    new Set(projects.flatMap((p) => p.tech)),
  ).toSorted();

  const filtered = projects.filter(
    (p) =>
      (filters.companies.length === 0 ||
        (p.company !== undefined && filters.companies.includes(p.company))) &&
      (filters.tech.length === 0 ||
        filters.tech.some((t) => p.tech.includes(t))),
  );

  const hasFilters = filters.companies.length > 0 || filters.tech.length > 0;

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        {availableCompanies.length > 0 && (
          <FilterGroup
            label="Company"
            options={availableCompanies}
            selected={filters.companies}
            onToggle={(value) =>
              update({
                ...filters,
                companies: toggle(filters.companies, value),
              })
            }
          />
        )}
        {availableTech.length > 0 && (
          <FilterGroup
            label="Technology"
            options={availableTech}
            selected={filters.tech}
            onToggle={(value) =>
              update({ ...filters, tech: toggle(filters.tech, value) })
            }
          />
        )}

        <p className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
          <span>
            {filtered.length} project{filtered.length === 1 ? "" : "s"}
          </span>
          {hasFilters && (
            <button
              type="button"
              onClick={() => update(EMPTY)}
              className="text-accent-600 hover:underline dark:text-accent-400"
            >
              Clear filters
            </button>
          )}
        </p>
      </div>

      {filtered.length === 0 ? (
        <p className="text-zinc-500 dark:text-zinc-400">
          No projects match these filters.
        </p>
      ) : (
        <div className="grid gap-4">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}

interface FilterGroupProps {
  label: string;
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
}

function FilterGroup({ label, options, selected, onToggle }: FilterGroupProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-sm font-medium text-zinc-500 dark:text-zinc-400">
        {label}
      </span>
      {options.map((option) => {
        const active = selected.includes(option);
        return (
          <button
            key={option}
            type="button"
            aria-pressed={active}
            onClick={() => onToggle(option)}
            className={
              active
                ? "rounded-full border border-accent-500 bg-accent-500 px-3 py-1 text-sm text-white transition-colors"
                : "rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600 transition-colors hover:border-accent-500 hover:text-accent-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-accent-400 dark:hover:text-accent-400"
            }
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

function ProjectCard({ project }: { project: ProjectSummary }) {
  return (
    <article className="group relative rounded-xl border border-zinc-200 p-5 transition-colors hover:border-accent-500 dark:border-zinc-800 dark:hover:border-accent-400">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="text-lg font-semibold tracking-tight">
          <a
            href={`/projects/${project.id}`}
            className="after:absolute after:inset-0"
          >
            {project.title}
          </a>
        </h2>
        {project.period && (
          <span className="shrink-0 font-mono text-xs text-zinc-500 dark:text-zinc-400">
            {project.period}
          </span>
        )}
      </div>

      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>

      {project.tech.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {t}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
