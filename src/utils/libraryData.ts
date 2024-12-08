export interface Library {
  name: string;
  description: string;
  tasks: string[];
  stars: number; // Number of GitHub stars
  repository: string; // Repository URL
}

export const libraries: Library[] = [
  {
    name: "i18next",
    description: "Internationalization framework",
    tasks: ["localization", "translation"],
    stars: 7000,
    repository: "https://github.com/i18next/i18next",
  },
  {
    name: "moment",
    description: "Parse, validate, manipulate, and display dates",
    tasks: ["date", "time"],
    stars: 47000,
    repository: "https://github.com/moment/moment",
  },
  {
    name: "lodash",
    description: "Utility library for common programming tasks",
    tasks: ["array", "object", "string"],
    stars: 56000,
    repository: "https://github.com/lodash/lodash",
  },
  {
    name: "axios",
    description: "Promise-based HTTP client",
    tasks: ["http", "ajax", "request"],
    stars: 100000,
    repository: "https://github.com/axios/axios",
  },
  {
    name: "react-query",
    description: "Hooks for fetching, caching, and updating data",
    tasks: ["data fetching", "caching"],
    stars: 35000,
    repository: "https://github.com/TanStack/query",
  },
  {
    name: "dayjs",
    description: "2KB immutable date library alternative to Moment.js",
    tasks: ["date", "time", "manipulation"],
    stars: 45000,
    repository: "https://github.com/iamkun/dayjs",
  },
  {
    name: "date-fns",
    description: "Modern JavaScript date utility library",
    tasks: ["date", "time", "utility"],
    stars: 33000,
    repository: "https://github.com/date-fns/date-fns",
  },
  {
    name: "formik",
    description: "Build forms in React, without the tears",
    tasks: ["forms", "validation"],
    stars: 33000,
    repository: "https://github.com/jaredpalmer/formik",
  },
  {
    name: "yup",
    description: "JavaScript schema builder for value parsing and validation",
    tasks: ["validation", "schemas"],
    stars: 22000,
    repository: "https://github.com/jquense/yup",
  },
  {
    name: "zustand",
    description: "Small, fast, and scalable state-management library",
    tasks: ["state management", "react"],
    stars: 35000,
    repository: "https://github.com/pmndrs/zustand",
  },
  {
    name: "redux",
    description: "Predictable state container for JavaScript apps",
    tasks: ["state management", "redux"],
    stars: 60000,
    repository: "https://github.com/reduxjs/redux",
  },
  {
    name: "chart.js",
    description: "Simple yet flexible JavaScript charting library",
    tasks: ["charts", "data visualization"],
    stars: 62000,
    repository: "https://github.com/chartjs/Chart.js",
  },
  {
    name: "d3",
    description: "Bring data to life with SVG, Canvas, and HTML",
    tasks: ["data visualization", "charts"],
    stars: 105000,
    repository: "https://github.com/d3/d3",
  },
  {
    name: "three.js",
    description: "JavaScript 3D library",
    tasks: ["3D rendering", "visualization"],
    stars: 95000,
    repository: "https://github.com/mrdoob/three.js",
  },
  {
    name: "socket.io",
    description: "Bidirectional and low-latency communication for web apps",
    tasks: ["websockets", "real-time"],
    stars: 59000,
    repository: "https://github.com/socketio/socket.io",
  },
  {
    name: "tailwindcss",
    description: "A utility-first CSS framework",
    tasks: ["CSS", "styling"],
    stars: 74000,
    repository: "https://github.com/tailwindlabs/tailwindcss",
  },
  {
    name: "bootstrap",
    description: "Popular front-end open-source toolkit",
    tasks: ["CSS", "UI components"],
    stars: 165000,
    repository: "https://github.com/twbs/bootstrap",
  },
  {
    name: "react-router",
    description: "Declarative routing for React",
    tasks: ["routing", "navigation"],
    stars: 50000,
    repository: "https://github.com/remix-run/react-router",
  },
  {
    name: "next-auth",
    description: "Authentication for Next.js",
    tasks: ["authentication", "OAuth"],
    stars: 19000,
    repository: "https://github.com/nextauthjs/next-auth",
  },
  {
    name: "express",
    description: "Fast, unopinionated, minimalist web framework for Node.js",
    tasks: ["web server", "routing"],
    stars: 62000,
    repository: "https://github.com/expressjs/express",
  },
  {
    name: "nestjs",
    description: "Progressive Node.js framework for building efficient apps",
    tasks: ["backend", "framework"],
    stars: 63000,
    repository: "https://github.com/nestjs/nest",
  },
  {
    name: "mongoose",
    description: "Elegant MongoDB object modeling for Node.js",
    tasks: ["MongoDB", "ODM"],
    stars: 26000,
    repository: "https://github.com/Automattic/mongoose",
  },
  {
    name: "prisma",
    description: "Next-generation ORM for Node.js & TypeScript",
    tasks: ["ORM", "database"],
    stars: 35000,
    repository: "https://github.com/prisma/prisma",
  },
  {
    name: "nodemailer",
    description: "Send e-mails with Node.js",
    tasks: ["emails", "SMTP"],
    stars: 16000,
    repository: "https://github.com/nodemailer/nodemailer",
  },
  {
    name: "puppeteer",
    description: "Headless Chrome Node.js API",
    tasks: ["web scraping", "automation"],
    stars: 85000,
    repository: "https://github.com/puppeteer/puppeteer",
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
