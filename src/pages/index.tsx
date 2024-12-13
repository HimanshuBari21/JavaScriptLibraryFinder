import SearchBox from "@/components/SearchBox";
import SearchResults from "@/components/SearchResults";
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
        <h2 className="text-3xl md:text-6xl text-center py-12 font-bold leading-loose">
          There is a JavaScript library for that
          <span className="md:text-5xl"> 🚀</span>
        </h2>
        <SearchBox
          query={query}
          onChange={setQuery}
          onOptionSubmit={setSelectedOption}
        />
        <SearchResults selectedOption={selectedOption} />
      </div>
    </section>
  );
};

export default Home;
