import { useState } from "react";

import {
  ContainerWithBackground,
  GridFourCols,
  AnimesList,
  Header,
} from "../../components";

import { useFetch } from "../../hooks/useFetch";

import "../../index.css";

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
    <>
      <ContainerWithBackground>
        <Header setAnimes={setAnimesSearch} />
        <GridFourCols>
          <AnimesList animes={fetchedData} isLoading={isLoading} />
        </GridFourCols>
      </ContainerWithBackground>
    </>
  );
};

export default Animes;
