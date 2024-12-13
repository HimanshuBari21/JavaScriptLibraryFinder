import React, { FC } from "react";
import { AppShell, AppShellProps } from "@mantine/core";
import NavBar from "@/components/Navbar";
import { HeartIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

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

      <AppShell.Main className="mb-4">{children}</AppShell.Main>
      <AppShell.Footer>
        <p className="text-center w-full flex justify-center gap-1 py-2">
          {"Made with "}
          <span className="mt-1">
            <HeartIcon fill="red" width={20} />
          </span>
          {" by "}
          <Link target="_blank" href="https://github.com/HimanshuBari21">
            {" Himanshu Bari "}
          </Link>
          {"and "}
          <Link
            target="_blank"
            href="https://github.com/HimanshuBari21/JavaScriptLibraryFinder"
          >
            {"Open Source community."}
          </Link>
        </p>
      </AppShell.Footer>
    </AppShell>
  );
};

export default AppShellLayout;
