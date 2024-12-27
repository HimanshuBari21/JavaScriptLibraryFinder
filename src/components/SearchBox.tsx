import { searchLibraries } from "@/utils/libraryData";
import { Autocomplete, AutocompleteProps } from "@mantine/core";
import { FC } from "react";

export type SearchBoxProps = AutocompleteProps & {
  query?: string;
  setQuery?: (query: string) => void;
};

const SearchBox: FC<SearchBoxProps> = ({ query, ...rest }) => {
  const suggestions = searchLibraries(query);

  return (
    <Autocomplete
      label="I am looking for "
      placeholder="data fetching, localization, animation etc"
      data={suggestions.sort()}
      className="max-w-[600px] mx-auto flex flex-col md:flex-row md:items-center justify-center"
      classNames={{
        input:
          "!h-8 !border-b-black !text-xl !border-x-0 !border-t-0 !rounded-none !pl-0 md:ml-2 font-semibold",
        label: "py-4 !text-xl",
      }}
      {...rest}
    />
  );
};

export default SearchBox;
