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
      label="Search for feature"
      placeholder="Eg: API fetching, localization, animation etc"
      data={suggestions}
      // onSelect={() => setIsOpen(false)}
      {...rest}
    />
  );
};

export default SearchBox;
