import api from "./api";

export const getAnimes = async () => {
  const { data } = await api.get("/anime");
  return data;
};
