import { AnimesList } from "../../components";

import { useFetch } from "../../hooks/useFetch";

import { FlexThreeElements } from "../../layouts";

const ThisSeason = () => {
  const { fetchedData, isLoading } = useFetch("/seasons/now", { sfw: true });
  return (
    <FlexThreeElements>
      <AnimesList animes={fetchedData} isLoading={isLoading} />
    </FlexThreeElements>
  );
};

export default ThisSeason;
