import { Html, Head, Main, NextScript } from "next/document";
import { ColorSchemeScript } from "@mantine/core";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta name="title" content="JavaScriptLibraryFinder" />
        <meta
          name="description"
          content="There is a JS library for that - Find JS library for tasks"
        />
        <meta
          name="keywords"
          content="jstools, javascript, devtools,javascrio tools"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="2 days" />
        <meta name="author" content="Himanshu Bari" />

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
