import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import { FlexThreeElements } from "../../layouts";
import { Content } from "./content";

const Mangas = () => {
  const { fetchedData, isLoading } = useFetch("/manga", { sfw: true });

  const { pathname } = useLocation();

  return (
    <FlexThreeElements>
      {isLoading ? (
        <h1 style={{ height: "100%" }}>Carregando...</h1>
      ) : (
        <Content mangas={fetchedData} isLoading={isLoading} path={pathname} />
      )}
    </FlexThreeElements>
  );
};

export default Mangas;
