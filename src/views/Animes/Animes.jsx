import { useState } from "react";

import { AnimeCard, SearchBar } from "./components";
import { useFetch } from "../../hooks/useFetch";
import { FlexThreeElements } from "../../layouts";
import { Box } from "@mui/material";

const Animes = () => {
  const [animesSearch, setAnimesSearch] = useState("");

  const { fetchedData, isLoading } = useFetch(
    "/anime",
    {
      q: animesSearch,
      sfw: true,
    },
    animesSearch
  );

  return (
    <FlexThreeElements>
      <SearchBar
        searchForAnimeName={setAnimesSearch}
        searchedAnime={animesSearch}
      />
      <Box>
        {fetchedData?.map((anime) => (
          <AnimeCard
            key={anime.mal_id}
            cover={anime.images?.webp.image_url}
            favorites={anime.favorites}
            score={anime.score}
            title={anime.title_english || anime.title}
            url={anime.url}
            genres={anime.genres}
            episodes={anime.episodes}
            id={anime.mal_id}
          />
        ))}
      </Box>
    </FlexThreeElements>
  );
};

export default Animes;
