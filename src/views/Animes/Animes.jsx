import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";

import { FlexThreeElements } from "../../layouts";
import { SearchBar } from "./components";
import { Content } from "./content";

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
      {isLoading ? (
        <h1 style={{ height: "100%" }}>Carregando...</h1>
      ) : (
        <Content
          fetchedData={fetchedData}
          animesSearch={animesSearch}
          setAnimesSearch={setAnimesSearch}
        />
      )}
    </FlexThreeElements>
  );
};

export default Animes;
