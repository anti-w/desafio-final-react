import api from "./api";

export const getAnimeCharacters = async (id) => {
  const { data } = await api.get(`anime/${id}/characters`);
  return data;
};
