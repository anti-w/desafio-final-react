import { useParams } from "react-router-dom";

import { CharactersList } from "../../components";

import { useFetch } from "../../hooks/useFetch";

import { FlexThreeElements } from "../../layouts";

const AnimeCharacters = () => {
  let { id } = useParams();

  const { fetchedData, isLoading } = useFetch(`anime/${id}/characters`);

  return (
    <FlexThreeElements>
      <CharactersList characters={fetchedData} isLoading={isLoading} />
    </FlexThreeElements>
  );
};

export default AnimeCharacters;
