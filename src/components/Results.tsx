import { getLibrariesByTask } from "@/utils/libraryData";
import { StarIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
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
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-4">
      {resultLibraries.map((lib, i) => (
        <article
          key={i}
          className="border px-4 p-2 rounded-md  hover:shadow-md"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-semibold">
              <Link href={lib.repository} target="_blank" rel="noreferrer">
                {lib.name}
              </Link>
            </h3>
            <span className="flex gap-1 px-2 text-xs border rounded-full items-center h-6">
              <StarIcon width={12} />
              {lib.stars}
            </span>
          </div>
          <p className="text-gray-800 text-sm pt-3">{lib.description}</p>
          <p className="italic text-sm text-gray-700 pt-3">
            search keywords: {lib.tasks}
          </p>
        </article>
      ))}
    </div>
  );
};

export default Results;
