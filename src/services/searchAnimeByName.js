import api from "./api";

export const searchAnimeByName = async (name) => {
  const { data } = await api.get(`/anime`, { params: { q: name, sfw: true } });
  return data;
};
