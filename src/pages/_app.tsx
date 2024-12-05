import "@/styles/globals.css";
import "@mantine/core/styles.css";
import "@mantine/nprogress/styles.css";

import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { NavigationProgress } from "@mantine/nprogress";
import { useDisclosure } from "@mantine/hooks";

import { AppShell, Burger } from "@mantine/core";
import NavBar from "@/components/Navbar";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  const [opened, { toggle }] = useDisclosure();
  return (
    <MantineProvider>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header className="flex items-center ml-4">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <NavBar heading="JavaScriptLibraryFinder" />
        </AppShell.Header>

        <AppShell.Navbar p="md">
          <Link href={"/"}>Search</Link>
          <Link href={"/my-fav"}>My Favourites</Link>
        </AppShell.Navbar>

        <AppShell.Main>
          <NavigationProgress />
          <Component {...pageProps} />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
