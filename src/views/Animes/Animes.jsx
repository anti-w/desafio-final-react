import { useState } from "react";

import { AnimesList } from "../../components";

import { useFetch } from "../../hooks/useFetch";
import { FlexThreeElements } from "../../layouts";

const Animes = () => {
  const [animesSearch, setAnimesSearch] = useState([{}]);

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
      <AnimesList animes={fetchedData} isLoading={isLoading} />
    </FlexThreeElements>
  );
};

export default Animes;
