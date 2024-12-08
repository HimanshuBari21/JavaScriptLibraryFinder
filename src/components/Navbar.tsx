import clsx from "clsx";
import Link from "next/link";
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

  return (
    <nav className={clsx("container mx-auto", className)} {...rest}>
      <div className="flex gap-4 items-center justify-between">
        <div>
          <Link href={"/"}>
            <h1 className="text-lg md:text-3xl px-2 font-bold text-orange-600">
              {heading}
            </h1>
          </Link>
          <h2 className="hidden md:block">{subHeading}</h2>
        </div>
        <div>
          <Link href={"/my-fav"} className="px-2">
            {"FAV"}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
