import React, { FC } from "react";
import { AppShell, AppShellProps } from "@mantine/core";
import NavBar from "@/components/Navbar";

const AppShellLayout: FC<AppShellProps> = ({ children, ...rest }) => {
  return (
    <AppShell header={{ height: 80 }} padding="md" {...rest}>
      <AppShell.Header className="flex items-center !bg-jet-red">
        <NavBar heading="JavaScriptLibraryFinder" subHeading="" />
      </AppShell.Header>

      {/* <AppShell.Navbar p="md">
        <Link href={"/"}>Search</Link>
        <Link href={"/my-fav"}>My Favourites</Link>
      </AppShell.Navbar> */}

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default AppShellLayout;
