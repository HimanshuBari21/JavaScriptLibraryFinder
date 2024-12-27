import "@/styles/globals.css";
import "@mantine/core/styles.css";
import "@mantine/nprogress/styles.css";

import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { NavigationProgress } from "@mantine/nprogress";
import AppShellLayout from "@/components/AppShellLayout";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <AppShellLayout>
        <NavigationProgress />
        <Component {...pageProps} />
        <Analytics />
        <SpeedInsights />
      </AppShellLayout>
    </MantineProvider>
  );
}
