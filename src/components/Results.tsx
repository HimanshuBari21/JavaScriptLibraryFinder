import { getLibrariesByTask } from "@/utils/libraryData";
import React, { FC, HTMLAttributes, useMemo } from "react";

export type ResultsProps = HTMLAttributes<HTMLDivElement> & {
  selectedOption?: string;
};

const Results: FC<ResultsProps> = ({ selectedOption = "" }) => {
  const resultLibraries = useMemo(
    () => getLibrariesByTask(selectedOption),
    [selectedOption]
  );

  return (
    <div>
      {resultLibraries.map((lib) => (
        <>{lib.name}</>
      ))}
    </div>
  );
};

export default Results;
