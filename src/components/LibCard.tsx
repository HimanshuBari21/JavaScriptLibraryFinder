import { type Library } from "@/utils/libraryData";
import { StarIcon, HeartIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import Link from "next/link";
import type { FC, HTMLAttributes } from "react";

export type LibCardProps = HTMLAttributes<HTMLElement> & {
  lib: Library;
  addFav: (libName: string) => void;
  isFaved: boolean;
};

const LibCard: FC<LibCardProps> = ({ lib, addFav, isFaved, className }) => {
  return (
    <article
      className={clsx(
        "border px-4 p-2 rounded-md  hover:shadow-md relative transition-all",
        className
      )}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-start gap-2">
          <button
            onClick={() => addFav(lib.name)}
            className="-mb-1.5"
            title={isFaved ? "Remove Fav" : "Add Fav"}
          >
            <HeartIcon
              width={20}
              color={isFaved ? "" : "white"}
              stroke="black"
              className="hover:stroke-jet-red transition-all"
            />
          </button>
          <h3 className="text-2xl font-semibold hover:text-jet-red underline">
            <Link href={lib.repository} target="_blank" rel="noreferrer">
              {lib.name}
            </Link>
          </h3>
        </div>
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
  );
};

export default LibCard;
