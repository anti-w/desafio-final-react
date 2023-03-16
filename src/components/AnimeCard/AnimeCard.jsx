import { ArrowBendUpRight, Star } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const AnimeCard = ({
  title,
  urlCover,
  urlVisit,
  id,
  score,
  genres,
  status,
  episodes,
}) => {
  return (
    <div key={id} className="grid grid-cols-2 place-items-center mb-10">
      <div className="flex items-center justify-center flex-col">
        <h2 className="font-bold text-xl mb-4 text-center">{title}</h2>
        <img src={urlCover} className="w-48" />
      </div>
      <div className="flex flex-col text-lg">
        <a
          href={urlVisit}
          className="border-2 border-white w-9 flex items-center justify-center aspect-square rounded-full"
          target="_blank"
          title="Visit Anime Page"
        >
          <ArrowBendUpRight size={24} weight="bold" />
        </a>
        <span className="flex items-center gap-2 text-yellow-500 font-bold">
          <Star size={26} weight="bold" />
          {score}
        </span>
        <span className="text-red-500">
          {episodes === 1 ? `${episodes} episode` : `${episodes} episodes`}{" "}
        </span>
        {genres.map((genre, i) => (
          <span key={i}>{genre.name}</span>
        ))}
        <p>{status}</p>
        <Link to={`/${id}/characters`}>Personagens</Link>
      </div>
    </div>
  );
};

export default AnimeCard;
