import { useState } from "react";

/**
 * A tiny interactive island used to demonstrate that React components embedded
 * in MDX hydrate correctly. Replace with real, project-specific demos.
 */
export default function CounterDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="not-prose my-6 flex items-center gap-4 rounded-lg border border-border bg-surface-2 p-4">
      <button
        type="button"
        onClick={() => setCount((c) => c - 1)}
        className="h-9 w-9 rounded-md border border-border text-lg leading-none transition-colors hover:bg-surface"
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
        className="h-9 w-9 rounded-md border border-border text-lg leading-none transition-colors hover:bg-surface"
        aria-label="Increment"
      >
        +
      </button>
      <span className="text-sm text-fg">
        Interactive island — hydrated with <code>client:visible</code>
      </span>
    </div>
  );
}
