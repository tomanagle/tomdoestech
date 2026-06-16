import { useState } from "react";

/**
 * A tiny interactive island used to demonstrate that React components embedded
 * in MDX hydrate correctly. Replace with real, project-specific demos.
 */
export default function CounterDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="not-prose my-6 flex items-center gap-4 rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
      <button
        type="button"
        onClick={() => setCount((c) => c - 1)}
        className="h-9 w-9 rounded-md border border-zinc-300 text-lg leading-none transition-colors hover:bg-zinc-200 dark:border-zinc-700 dark:hover:bg-zinc-800"
        aria-label="Decrement"
      >
        −
      </button>
      <span className="min-w-[3ch] text-center font-mono text-lg tabular-nums">
        {count}
      </span>
      <button
        type="button"
        onClick={() => setCount((c) => c + 1)}
        className="h-9 w-9 rounded-md border border-zinc-300 text-lg leading-none transition-colors hover:bg-zinc-200 dark:border-zinc-700 dark:hover:bg-zinc-800"
        aria-label="Increment"
      >
        +
      </button>
      <span className="text-sm text-zinc-500 dark:text-zinc-400">
        Interactive island — hydrated with <code>client:visible</code>
      </span>
    </div>
  );
}
