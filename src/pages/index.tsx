import Results from "@/components/Results";
import SearchBox from "@/components/SearchBox";
import { useEffect, useState } from "react";

const Home = () => {
  const [query, setQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    if (selectedOption !== query) {
      setSelectedOption("");
    }
  }, [query, selectedOption]);

  return (
    <section>
      <div className="container mx-auto">
        <SearchBox
          query={query}
          onChange={setQuery}
          onOptionSubmit={setSelectedOption}
          dropdownOpened={!!query?.length && !selectedOption.length}
        />
        <Results selectedOption={selectedOption} />
      </div>
    </section>
  );
};

export default Home;
