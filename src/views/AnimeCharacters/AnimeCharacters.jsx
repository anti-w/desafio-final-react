import { useParams } from "react-router-dom";

import {
  CharactersList,
  ContainerWithBackground,
  GridFourCols,
} from "../../components";

import { useFetch } from "../../hooks/useFetch";

import "../../index.css";

const AnimeCharacters = () => {
  let { id } = useParams();

  const { fetchedData, isLoading } = useFetch(`anime/${id}/characters`);

  return (
    <>
      <ContainerWithBackground>
        <GridFourCols>
          <CharactersList characters={fetchedData} isLoading={isLoading} />
        </GridFourCols>
      </ContainerWithBackground>
    </>
  );
};

export default AnimeCharacters;
