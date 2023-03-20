import { AnimesList } from "../../components";

import { useFetch } from "../../hooks/useFetch";

import { FlexThreeElements } from "../../layouts";

const Mangas = () => {
  const { fetchedData, isLoading } = useFetch("/manga", { sfw: true });
  return (
    <FlexThreeElements>
      <AnimesList animes={fetchedData} isLoading={isLoading} />
    </FlexThreeElements>
  );
};

export default Mangas;
