import Results from "@/components/Results";
import SearchBox from "@/components/SearchBox";
import Head from "next/head";
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
      <Head>
        <title>JavaScriptLibraryFinder - There is a JS Library for that!</title>
      </Head>
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
