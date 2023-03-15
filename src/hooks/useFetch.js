import { useEffect, useState } from "react";
import api from "../services/api";

export const useFetch = (url, params = {}, observable = null) => {
  const [fetchedData, setFetchedData] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const {
        data: { data },
      } = await api.get(url, { params });
      console.log(data);

      setFetchedData(data);
      setIsLoading(false);
    })();
  }, [observable]);

  return { fetchedData, isLoading };
};
