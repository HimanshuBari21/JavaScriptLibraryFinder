export type TaskTag =
  | "3D rendering"
  | "ajax"
  | "alert"
  | "animation"
  | "api"
  | "app-form"
  | "array"
  | "async"
  | "authentication"
  | "automation"
  | "backend"
  | "blockchain"
  | "canvas"
  | "carousel"
  | "caching"
  | "className"
  | "charts"
  | "combobox"
  | "components"
  | "css"
  | "css-effects"
  | "crop"
  | "data"
  | "database"
  | "data fetching"
  | "data visualization"
  | "date"
  | "declarative"
  | "dropdown"
  | "drag-and-drop"
  | "editing"
  | "effects"
  | "emails"
  | "encoding"
  | "ethereum"
  | "facebook"
  | "framework"
  | "forms"
  | "geo"
  | "hero"
  | "hooks"
  | "http"
  | "icons"
  | "image"
  | "interactions"
  | "lists"
  | "location"
  | "localization"
  | "manipulation"
  | "maps"
  | "material"
  | "media"
  | "message"
  | "MongoDB"
  | "navigation"
  | "notify"
  | "object"
  | "ODM"
  | "OAuth"
  | "ORM"
  | "parallax-scroll"
  | "playback"
  | "promise"
  | "query"
  | "react"
  | "reactive"
  | "real-time"
  | "redux"
  | "reusablity"
  | "route"
  | "routing"
  | "request"
  | "sanitization"
  | "schemas"
  | "search-box"
  | "security"
  | "select"
  | "shared-state"
  | "slider"
  | "SMTP"
  | "state management"
  | "string"
  | "strings"
  | "styling"
  | "svg"
  | "table"
  | "time"
  | "toast"
  | "translation"
  | "ui"
  | "UI components"
  | "url"
  | "utility"
  | "validation"
  | "video"
  | "visualization"
  | "web scraping"
  | "web-security"
  | "web server"
  | "web3"
  | "websockets";

export interface Library {
  name: string;
  description: string;
  tasks: TaskTag[];
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
    tasks: ["css", "styling", "ui"],
    stars: 74000,
    repository: "https://github.com/tailwindlabs/tailwindcss",
  },
  {
    name: "bootstrap",
    description: "Popular front-end open-source toolkit",
    tasks: ["css", "UI components"],
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
  {
    name: "mantine-ui",
    description: "A fully featured React components library",
    tasks: ["ui", "components", "hooks"],
    stars: 27000,
    repository: "https://github.com/mantinedev/mantine",
  },
  {
    name: "material-ui",
    description:
      "Material UI: Comprehensive React component library that implements Google's Material Design.",
    tasks: ["ui", "components", "hooks", "material"],
    stars: 32000,
    repository: "https://github.com/mui/material-ui",
  },
  {
    name: "isomorphic-dompurify",
    description:
      "The library makes it possible to seamlessly use DOMPurify on server and client in the same way",
    tasks: ["sanitization", "security", "web-security"],
    repository: "https://github.com/kkomelin/isomorphic-dompurify",
    stars: 429,
  },
  {
    name: "parallaxjs",
    description:
      "Simple parallax scrolling effect inspired by Spotify.com implemented as a jQuery plugin",
    tasks: ["parallax-scroll", "animation", "css-effects"],
    repository: "https://github.com/pixelcog/parallax.js",
    stars: 3538,
  },
  {
    name: "react-hook-form",
    description:
      " React Hooks for form state management and validation (Web + React Native)",
    tasks: ["forms", "validation", "app-form"],
    stars: 41000,
    repository: "https://github.com/jaredpalmer/formik",
  },
  {
    name: "downshift",
    description:
      "A set of primitives to build simple, flexible, WAI-ARIA compliant React autocomplete, combobox or select dropdown components.",
    tasks: ["combobox", "search-box", "dropdown", "ui"],
    repository: "https://github.com/downshift-js/downshift",
    stars: 12100,
  },
  {
    name: "swiper",
    description:
      "Most modern mobile touch slider with hardware accelerated transitions",
    repository:
      "Most modern mobile touch slider with hardware accelerated transitions",
    tasks: ["carousel", "ui", "hero", "slider"],
    stars: 40000,
  },
  {
    name: "react-player",
    description:
      "A React component for playing a variety of URLs, including file paths, YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia and DailyMotion",
    tasks: ["video", "playback", "media"],
    stars: 9469,
    repository: "https://github.com/cookpete/react-player",
  },
  {
    name: "clsx",
    description:
      "A tiny (239B) utility for constructing `className` strings conditionally.",
    tasks: ["className", "strings", "reusablity"],
    stars: 8446,
    repository: "https://github.com/lukeed/clsx",
  },
  {
    name: "qs",
    description: "A querystring parser with nesting support",
    tasks: ["encoding", "url", "query", "route", "api"],
    stars: 8595,
    repository: "https://github.com/ljharb/qs",
  },
  {
    name: "react-toastify",
    description: "React notification made easy 🚀 !",
    tasks: ["toast", "ui", "alert", "notify", "message"],
    stars: 12815,
    repository: "https://github.com/fkhadra/react-toastify",
  },
  {
    name: "constate",
    description: "React Context + State",
    tasks: ["state management", "shared-state"],
    stars: 3952,
    repository: "https://github.com/diegohaz/constate",
  },
  {
    name: "tui.image-editor",
    description:
      "Full-featured photo image editor using canvas. It is really easy, and it comes with great filters.",
    tasks: ["image", "media", "crop", "editing"],
    stars: 7100,
    repository: "https://github.com/nhn/tui.image-editor",
  },
  {
    name: "react-swift-reveal",
    description:
      "React-swift-reveal is a React component library and animation framework for animating elements as they enter the viewport and onscroll",
    tasks: ["animation", "effects", "ui"],
    stars: 48,
    repository: "https://github.com/Mutesa-Cedric/react-swift-reveal",
  },
  {
    name: "react-leaflet",
    description: "React components for Leaflet maps",
    tasks: ["maps", "geo", "location"],
    stars: 7000,
    repository: "https://github.com/PaulLeCam/react-leaflet",
  },
  {
    name: "react-icons",
    description: "SVG React icons of popular icon packs",
    tasks: ["icons", "svg", "ui"],
    stars: 15000,
    repository: "https://github.com/react-icons/react-icons",
  },
  {
    name: "heroicons",
    description:
      "A set of free MIT-licensed high-quality SVG icons for you to use in your web projects.",
    tasks: ["icons", "svg", "ui"],
    stars: 15000,
    repository: "https://github.com/tailwindlabs/heroicons",
  },
  {
    name: "react-select",
    description: "The Select control for React.",
    tasks: ["dropdown", "select", "ui"],
    stars: 22000,
    repository: "https://github.com/JedWatson/react-select",
  },
  {
    name: "react-beautiful-dnd",
    description: "Beautiful and accessible drag and drop for lists with React",
    tasks: ["drag-and-drop", "ui", "lists"],
    stars: 22000,
    repository: "https://github.com/atlassian/react-beautiful-dnd",
  },
  {
    name: "react-feather",
    description: "Simply beautiful open source icons",
    tasks: ["icons", "svg", "ui"],
    stars: 20000,
    repository: "https://github.com/feathericons/react-feather",
  },
  {
    name: "emotion",
    description: "The Next Generation of CSS-in-JS",
    tasks: ["styling", "css"],
    stars: 14000,
    repository: "https://github.com/emotion-js/emotion",
  },
  {
    name: "web3.js",
    description: "Ethereum JavaScript API",
    tasks: ["blockchain", "ethereum", "web3"],
    stars: 14000,
    repository: "https://github.com/web3/web3.js",
  },
  {
    name: "TanStack-virtual",
    description:
      "Headless UI for Virtualizing Large Element Lists in JS/TS, React, Solid, Vue and Svelte",
    tasks: ["reactive", "declarative", "ui"],
    stars: 5700,
    repository: "https://github.com/TanStack/virtual",
  },
  {
    name: "TanStack-table",
    description:
      "Headless UI for building powerful tables & datagrids for TS/JS - React-Table, Vue-Table, Solid-Table, Svelte-Table",
    tasks: ["table", "data", "ui"],
    stars: 25000,
    repository: "https://github.com/TanStack/table",
  },
  {
    name: "react-window",
    description:
      "React components for efficiently rendering large lists and tabular data",
    tasks: ["lists", "data", "ui"],
    stars: 10000,
    repository: "https://github.com/bvaughn/react-window",
  },
  {
    name: "react-dnd",
    description: "Drag and Drop for React",
    tasks: ["drag-and-drop", "ui", "interactions"],
    stars: 14000,
    repository: "https://github.com/react-dnd/react-dnd/",
  },
  {
    name: "GSAP",
    description:
      "A robust JavaScript library for high-performance animations, including timelines and tweens.",
    tasks: ["animation", "css-effects", "parallax-scroll"],
    stars: 88000,
    repository: "https://github.com/greensock/GSAP",
  },
  {
    name: "Anime.js",
    description:
      "A lightweight JavaScript animation library for creating complex animations with ease.",
    tasks: ["animation", "css-effects", "ui", "effects"],
    stars: 48000,
    repository: "https://github.com/juliangarnier/anime",
  },
  {
    name: "Framer Motion",
    description:
      "A production-ready React animation library for declarative animations and interactions.",
    tasks: ["animation", "react", "declarative", "ui"],
    stars: 20000,
    repository: "https://github.com/framer/motion",
  },
  {
    name: "Lottie",
    description:
      "A library for rendering Adobe After Effects animations as JSON with high performance on web and mobile.",
    tasks: ["animation", "ui", "media", "css-effects"],
    stars: 46000,
    repository: "https://github.com/airbnb/lottie-web",
  },
  {
    name: "React-Spring",
    description:
      "A spring-physics-based animation library for React for creating smooth animations.",
    tasks: ["animation", "react", "ui", "declarative", "css-effects"],
    stars: 26000,
    repository: "https://github.com/pmndrs/react-spring",
  },
  {
    name: "React-Use",
    description:
      "A collection of essential React hooks for state management, lifecycles, and side effects.",
    tasks: ["hooks", "utility", "state management", "shared-state"],
    stars: 39000,
    repository: "https://github.com/streamich/react-use",
  },
  {
    name: "React Query",
    description:
      "A powerful data-fetching library for managing server-state with hooks.",
    tasks: ["hooks", "data fetching", "caching", "state management"],
    stars: 36000,
    repository: "https://github.com/TanStack/query",
  },
  {
    name: "Redux Toolkit",
    description:
      "An opinionated toolkit for efficient Redux development with React, including hooks.",
    tasks: ["redux", "state management", "hooks", "utility"],
    stars: 10000,
    repository: "https://github.com/reduxjs/redux-toolkit",
  },
  {
    name: "Recoil",
    description:
      "A state management library for React applications with an emphasis on scalability.",
    tasks: ["state management", "react", "hooks", "shared-state"],
    stars: 20000,
    repository: "https://github.com/facebookexperimental/Recoil",
  },
  {
    name: "SWR",
    description:
      "A React hooks library for remote data fetching and caching, built by Vercel.",
    tasks: ["hooks", "data fetching", "caching", "utility", "http"],
    stars: 28000,
    repository: "https://github.com/vercel/swr",
  },
  {
    name: "D3.js",
    description:
      "A JavaScript library for producing dynamic, interactive data visualizations in web browsers using SVG, Canvas, and HTML.",
    tasks: ["data visualization", "charts", "svg", "effects", "ui"],
    stars: 106000,
    repository: "https://github.com/d3/d3",
  },
  {
    name: "Chart.js",
    description:
      "A simple yet flexible JavaScript library for creating responsive and interactive charts.",
    tasks: ["charts", "data visualization", "canvas", "ui"],
    stars: 62000,
    repository: "https://github.com/chartjs/Chart.js",
  },
  {
    name: "Recharts",
    description:
      "A composable charting library built on React components for data visualization.",
    tasks: ["charts", "react", "data visualization", "UI components"],
    stars: 21000,
    repository: "https://github.com/recharts/recharts",
  },
  {
    name: "Victory",
    description:
      "A React-based library for building modular and reusable charts and data visualizations.",
    tasks: ["charts", "react", "data visualization", "ui"],
    stars: 10000,
    repository: "https://github.com/FormidableLabs/victory",
  },
  {
    name: "ECharts",
    description:
      "A powerful, highly customizable, and cross-platform charting library based on JavaScript.",
    tasks: ["charts", "data visualization", "ui"],
    stars: 56000,
    repository: "https://github.com/apache/echarts",
  },
  {
    name: "use-async-modal",
    description: "Wait for your Modal as Promise",
    tasks: ["UI components", "async", "promise"],
    stars: 5,
    repository: "https://github.com/Harasz/use-async-modal",
  },
  {
    name: "Sweet Alert",
    description:
      "A beautiful, responsive, highly customizable and accessible (WAI-ARIA) replacement for JavaScript's popup boxes. Zero dependencies",
    repository: "https://github.com/sweetalert2/sweetalert2",
    tasks: ["UI components", "async", "promise"],
    stars: 17000,
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

export function getLibrariesByTask(task: string = ""): Library[] {
  if (!task.length) {
    return libraries;
  }

  return libraries.filter((lib) =>
    lib.tasks.some((t) => t.toLowerCase() === task.toLowerCase())
  );
}
