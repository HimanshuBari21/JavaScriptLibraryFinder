import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

type NavBarProps = HTMLAttributes<HTMLElement> & {
  heading: string;
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
    <nav className={clsx("", className)} {...rest}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <h1 className="text-lg md:text-3xl px-2 md:px-0">{heading}</h1>
          <h2 className="hidden md:block">{subHeading}</h2>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
