import { useParams } from "react-router-dom";
import { filterCharactersByRole } from "../../helpers";

import { useFetch } from "../../hooks/useFetch";

import { FlexThreeElements } from "../../layouts";
import { Content } from "./content";

const Characters = () => {
  let { id, type } = useParams();

  let typeCleaned = type.replace("s", "");

  const { fetchedData, isLoading } = useFetch(
    `${typeCleaned}/${id}/characters`
  );

  if (!isLoading) {
    const { mainChars, supportChars } = filterCharactersByRole(fetchedData);
  }

  return (
    <FlexThreeElements>
      {isLoading ? (
        <h1>Carregando...</h1>
      ) : (
        <Content characters={fetchedData} />
      )}
    </FlexThreeElements>
  );
};

export default Characters;
