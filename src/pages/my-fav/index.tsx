import FavLibs from "@/components/FavLibs";
import { useLocalStorage } from "@mantine/hooks";
import Head from "next/head";

const MyFav = () => {
  const [favLibs] = useLocalStorage({
    key: "fav-libs",
    defaultValue: [],
  });

  return (
    <>
      <Head>
        <title>JavaScriptLibraryFinder - Favourites</title>
      </Head>
      <section>
        <div className="container mx-auto">
          <h1>Your Favourite marked libraries will be saved here.</h1>
          <FavLibs favLibs={favLibs} />
        </div>
      </section>
    </>
  );
};

export default MyFav;
