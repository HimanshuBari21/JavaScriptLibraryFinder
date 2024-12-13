import { Library } from "@/utils/libraryData";
import React, { FC, HTMLAttributes } from "react";
import LibCard from "./LibCard";
import { useLocalStorage } from "@mantine/hooks";

export type ResultsProps = HTMLAttributes<HTMLDivElement> & {
  resultLibraries?: Library[];
};

const Results: FC<ResultsProps> = ({ resultLibraries }) => {
  const [favLibs, setFavLibs] = useLocalStorage({
    key: "fav-libs",
    defaultValue: [""],
  });

  const handleAddFav = (libName: string) => {
    if (favLibs.includes(libName)) {
      setFavLibs(favLibs.filter((l) => l !== libName));
    } else {
      setFavLibs([...favLibs, libName]);
    }
  };

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-4">
      {resultLibraries?.map((lib, i) => (
        <LibCard
          key={i}
          lib={lib}
          addFav={handleAddFav}
          isFaved={favLibs.includes(lib.name)}
        />
      ))}
    </div>
  );
};

export default Results;
