import FavLibs from "@/components/FavLibs";
import { CodeHighlight } from "@mantine/code-highlight";
import { Button, Modal } from "@mantine/core";
import { useDisclosure, useLocalStorage } from "@mantine/hooks";
import Head from "next/head";

const MyFav = () => {
  const [favLibs] = useLocalStorage({
    key: "fav-libs",
    defaultValue: [],
  });
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Head>
        <title>JavaScriptLibraryFinder - Favourites</title>
      </Head>
      <section>
        <Modal opened={opened} onClose={close} title="Authentication" centered>
          <p>Here is your JSON list of favourite libraries:</p>
          <CodeHighlight
            language="json"
            code={JSON.stringify(favLibs, null, 2)}
          />
        </Modal>

        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <h1>Your Favourite marked libraries will be saved here.</h1>
            <Button className="!bg-jet-red" onClick={open}>
              Get JSON list
            </Button>
          </div>
          <FavLibs favLibs={favLibs} />
        </div>
      </section>
    </>
  );
};

export default MyFav;
