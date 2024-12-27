import { Html, Head, Main, NextScript } from "next/document";
import { ColorSchemeScript } from "@mantine/core";

const metaDescription =
  "JavaScriptLibraryFinder is a free tool to find software, libraries, frameworks, applications, websites and more as per your task and requirements.";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicon/android-chrome-512x512.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/favicon/site.webmanifest" /> */}

        {/* Common Meta Tags */}
        <meta
          name="title"
          content="JavaScriptLibraryFinder - There is JavaScript Library for that"
        />
        <meta name="description" content={metaDescription} />
        <meta
          name="keywords"
          content="JSLibraryFinder, developers, free resources, finder, tools, software, libraries, frameworks, applications, websites, task, requirements, tech resources"
        />
        <meta name="author" content="Himanshu Bari" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:url"
          content="https://js-library-finder.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="JavaScriptLibraryFinder: There is a JavaScript library for that!"
        />
        <meta property="og:description" content={metaDescription} />
        <meta
          property="og:image"
          content={"https://js-library-finder.vercel.app/og-image.png"}
        />
        <meta property="og:site_name" content="JavaScriptLibraryFinder" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://js-library-finder.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="JavaScriptLibraryFinder: There is a JavaScript library for that!"
        />
        <meta property="twitter:description" content={metaDescription} />
        <meta
          property="twitter:image"
          content={"https://js-library-finder.vercel.app/og-image.png"}
        />
        <meta name="twitter:site" content="@himanshuCodes21" />

        {/* Discord Meta Tags */}
        {/* <meta property="discord:server" content="1064977356198006805" />
        <meta
          property="discord:invite"
          content="https://discord.com/invite/NvK67YnJX5"
        /> */}

        <ColorSchemeScript defaultColorScheme="auto" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
