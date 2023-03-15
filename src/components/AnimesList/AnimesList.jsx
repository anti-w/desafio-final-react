import { AnimeCard } from "../AnimeCard";

const AnimesList = ({ animes, isLoading }) => {
  if (isLoading) return <h1>Carregando</h1>;

  return animes.map((anime) => (
    <AnimeCard
      id={anime.mal_id}
      title={anime.title_english ? anime.title_english : anime.title}
      urlCover={anime.images.jpg.image_url}
      urlVisit={anime.url}
      key={anime.mal_id}
      score={anime.score}
      genres={anime.genres}
      status={anime.status}
      episodes={anime.episodes}
    />
  ));
};

export default AnimesList;
