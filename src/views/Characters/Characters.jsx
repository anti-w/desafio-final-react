import { useParams } from "react-router-dom";

import { CharactersList } from "../../components";

import { useFetch } from "../../hooks/useFetch";

import { FlexThreeElements } from "../../layouts";

const Characters = () => {
  let { id, type } = useParams();

  let typeCleaned = type.replace("s", "");

  const { fetchedData, isLoading } = useFetch(
    `${typeCleaned}/${id}/characters`
  );

  return (
    <FlexThreeElements>
      <CharactersList characters={fetchedData} isLoading={isLoading} />
    </FlexThreeElements>
  );
};

export default Characters;
