import { HeartIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, HTMLAttributes, ReactNode } from "react";

type NavBarProps = HTMLAttributes<HTMLElement> & {
  heading: string | ReactNode;
  subHeading?: string;
};

const NavBar: FC<NavBarProps> = (props) => {
  const {
    heading = "JavaScriptLibraryFinder",
    subHeading = "",
    className,
    ...rest
  } = props;

  const { pathname } = useRouter();

  return (
    <nav className={clsx("container mx-auto", className)} {...rest}>
      <div className="flex gap-4 items-center justify-between px-4 md:px-2">
        <div>
          <Link href={"/"} title="Search Libraries">
            <h1 className="text-lg md:text-3xl font-bold text-white">
              {heading}
            </h1>
          </Link>
          <h2 className="hidden md:block">{subHeading}</h2>
        </div>
        <div className="flex">
          <Link
            href={"https://github.com/HimanshuBari21/JavaScriptLibraryFinder"}
            target="_blank"
            className="px-2"
            title="Contribute to Open Source"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="text-white h-6 w-6"
              width={28}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 0C5.37197 0 0 5.37197 0 12C0 17.301 3.43734 21.7995 8.20654 23.3876C8.8069 23.4959 9.02346 23.1265 9.02346 22.8089C9.02346 22.5238 9.01384 21.7682 9.01023 20.7684C5.67155 21.4927 4.96651 19.1586 4.96651 19.1586C4.4227 17.7726 3.63465 17.4032 3.63465 17.4032C2.54582 16.6585 3.71767 16.6754 3.71767 16.6754C4.9232 16.7596 5.55484 17.9122 5.55484 17.9122C6.62563 19.7457 8.36535 19.2164 9.04632 18.9096C9.1558 18.1335 9.46862 17.6042 9.81031 17.3046C7.14658 17.0026 4.3457 15.9727 4.3457 11.3732C4.3457 10.0654 4.81372 8.99218 5.5777 8.1548C5.45619 7.85041 5.04111 6.62924 5.69681 4.97854C5.69681 4.97854 6.70383 4.6549 8.99579 6.20694C9.97465 5.94065 10.9844 5.80473 11.9988 5.80269C13.0133 5.80433 14.023 5.94026 15.0018 6.20694C17.295 4.6537 18.3008 4.97854 18.3008 4.97854C18.9565 6.62924 18.545 7.85041 18.4199 8.1548C19.1899 8.99218 19.6519 10.0642 19.6519 11.3732C19.6519 15.9848 16.8486 16.9978 14.1753 17.295C14.6024 17.6655 14.9874 18.397 14.9874 19.5159C14.9874 21.1209 14.9729 22.4155 14.9729 22.8089C14.9729 23.1301 15.1871 23.5031 15.7995 23.3852C20.5663 21.7947 24 17.2998 24 12C24 5.37197 18.628 0 12 0Z"
                fill="currentColor"
              ></path>
            </svg>
          </Link>
          <Link href={"/my-fav"} className="px-2" title="My Favourites">
            <HeartIcon
              stroke="white"
              color={pathname === "/my-fav" ? "red" : "white"}
              width={28}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
