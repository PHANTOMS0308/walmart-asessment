// Next
import { useRouter } from "next/router";

// Types
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import type { Character, Episode } from "@/types";

// Components
import Head from "next/head";
import CharacterCard from "@/components/CharacterCard";
import FilterList from "@/components/FilterList";

// Services
import {
  getCharactersByPage,
  getAllEpisodes,
  getCharactersById,
  getEpisodeById,
} from "@/services";

// Utils
import { handleCatchError } from "@/utils/error";

export interface HomePageProps {
  characters: Array<Character>;
  episodes: Array<Episode>;
  selectedEpisodeId: number | null;
}

export default function HomePage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { characters, episodes, selectedEpisodeId } = props;
  const router = useRouter();

  // Derived states
  const selectedEpisode = episodes.find(({ id }) => id === selectedEpisodeId);

  return (
    <div className="py-12 px-8 h-screen max-w-[1600px] space-y-16">
      <Head>
        <title>Rick And Morty Characters</title>
      </Head>
      <h1 className="w-full text-center font-semibold text-2xl md:text-4xl">
        Rick And Morty Characters
      </h1>
      <div className="flex items-start justify-center gap-16">
        <nav
          className="
            w-1/5 h-[600px] p-4 overflow-y-auto
            border border-cyberpunk rounded-xl 
          "
        >
          <div>
            <h3 className="text-xl font-bold text-center">Episodes</h3>
            <hr className="border-cyberpunk mt-1"></hr>
          </div>
          <div className="h-full w-full overflow-y-visible ">
            <FilterList
              items={episodes}
              selectedItemId={selectedEpisodeId}
              onSelect={(id) => {
                if (id === selectedEpisodeId) router.push("/");
                else router.push(`?episodeId=${id}`);
              }}
            />
          </div>
        </nav>
        <section className="w-4/5 h-[750px] overflow-y-auto">
          {selectedEpisode && (
            <h3 className="pl-12 text-xl">
              {`${selectedEpisode.characters.length}
                Characters in episode
              "${selectedEpisode.name}"`}
            </h3>
          )}
          <ul className="w-full p-4 grid gap-4 place-items-center grid-cols-5">
            {characters.map(({ id, name, image }) => (
              <CharacterCard key={id} name={name} image={image} />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

// Any error, default to 404 page
export const getServerSideProps = (async ({ query }) => {
  const { episodeId } = query;

  let episodes: Array<Episode> | undefined;

  // 1. Fetch all episodes
  try {
    episodes = await getAllEpisodes();

    if (!episodes) {
      throw new Error(`Unable to get Episode ${episodeId}`);
    }
  } catch (err) {
    handleCatchError(err);
    return { notFound: true };
  }

  // 2. When no episode provided, show the first page of characters
  if (episodeId === undefined) {
    try {
      const characters = await getCharactersByPage();
      return { props: { episodes, characters, selectedEpisodeId: null } };
    } catch (err) {
      handleCatchError(err);
      return { notFound: true };
    }
  }

  // When invalid episodeId, redirect to 404
  if (typeof episodeId !== "string" || parseInt(episodeId) < 1) {
    return { notFound: true };
  }

  // 3. For each episode, get the corresponding characters
  try {
    const episode = await getEpisodeById(+episodeId);
    const characterIds = episode?.characters.map((url) =>
      parseInt(url.split("/").at(-1) ?? "")
    );

    if (!characterIds) {
      throw new Error(`Unable to get Characters for Episode ${episodeId}`);
    }

    const characters = await getCharactersById(characterIds);
    return { props: { episodes, characters, selectedEpisodeId: +episodeId } };
  } catch (err) {
    handleCatchError(err);
    return { notFound: true };
  }
}) as GetServerSideProps<HomePageProps>;
