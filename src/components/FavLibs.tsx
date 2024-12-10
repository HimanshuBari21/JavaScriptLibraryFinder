import { getLibrariesByTask, Library } from "@/utils/libraryData";
import React, { FC, HTMLAttributes, useMemo } from "react";
import Results from "./Results";

export type FavLibsProps = HTMLAttributes<HTMLDivElement> & {
  favLibs: string[];
};

const FavLibs: FC<FavLibsProps> = ({ favLibs = [] }) => {
  const resultLibraries = useMemo(() => {
    // no tasks gets u all the libraries
    const allLibraries = getLibrariesByTask();
    const _favLibs: (Library | null)[] = [];
    favLibs.forEach((lib) => {
      _favLibs.push(allLibraries.find((_lib) => _lib.name === lib) ?? null);
    });

    return _favLibs.filter((x) => x !== null);
  }, [favLibs]);

  return <Results resultLibraries={resultLibraries} />;
};

export default FavLibs;
