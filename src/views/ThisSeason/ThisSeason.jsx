import { useFetch } from "../../hooks/useFetch";

import { FlexThreeElements } from "../../layouts";
import { AnimesTable } from "./components";

const ThisSeason = () => {
  const { fetchedData, isLoading } = useFetch("/seasons/now", { sfw: true });
  return (
    <FlexThreeElements>
      <AnimesTable animes={fetchedData} />
    </FlexThreeElements>
  );
};

export default ThisSeason;
