export interface Library {
  name: string;
  description: string;
  tasks: string[];
}

export const libraries: Library[] = [
  {
    name: "i18next",
    description: "Internationalization framework",
    tasks: ["localization", "translation"],
  },
  {
    name: "moment",
    description: "Parse, validate, manipulate, and display dates",
    tasks: ["date", "time"],
  },
  {
    name: "lodash",
    description: "Utility library for common programming tasks",
    tasks: ["array", "object", "string"],
  },
  {
    name: "axios",
    description: "Promise based HTTP client",
    tasks: ["http", "ajax", "request"],
  },
  {
    name: "react-query",
    description: "Hooks for fetching, caching and updating data",
    tasks: ["data fetching", "caching"],
  },
];

export function searchLibraries(query: string = ""): string[] {
  const lowercaseQuery = query.toLowerCase();
  return Array.from(
    new Set(
      libraries.flatMap((lib) =>
        lib.tasks.filter((task) => task.toLowerCase().includes(lowercaseQuery))
      )
    )
  );
}

export function getLibrariesByTask(task: string): Library[] {
  return libraries.filter((lib) =>
    lib.tasks.some((t) => t.toLowerCase() === task.toLowerCase())
  );
}
