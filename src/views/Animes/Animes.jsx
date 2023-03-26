import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import { FlexThreeElements } from "../../layouts";
import { SearchBar } from "./components";
import { Content } from "./content";

const Animes = () => {
  const [animesSearch, setAnimesSearch] = useState("");
  const { pathname } = useLocation();

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
        <Content path={pathname} fetchedData={fetchedData} />
      )}
    </FlexThreeElements>
  );
};

export default Animes;
