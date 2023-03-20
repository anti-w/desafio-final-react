import api from "./api";

export const getMandas = async () => {
  const { data } = await api.get("/manga");
  return data;
};
