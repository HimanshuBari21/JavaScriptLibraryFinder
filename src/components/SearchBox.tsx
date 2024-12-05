import { searchLibraries } from "@/utils/libraryData";
import { Autocomplete, AutocompleteProps } from "@mantine/core";
import { useState } from "react";

export type SearchBox = AutocompleteProps;

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const suggestions = searchLibraries(query);
  console.log(suggestions);

  return (
    <Autocomplete
      label="Search for feature"
      placeholder="Eg: API fetching, localization, animation etc"
      data={suggestions}
      onChange={setQuery}
      dropdownOpened={!!query.length}
    />
  );
};

export default SearchBox;
