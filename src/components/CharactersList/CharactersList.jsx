import { CharacterCard } from "../CharacterCard";

const CharactersList = ({ characters, isLoading }) => {
  if (isLoading) return <h1>Carregando</h1>;

  return characters.map((character, i) => (
    <CharacterCard
      key={i}
      name={character.character.name}
      coverUrl={character.character.images.webp.image_url}
      role={character.role}
    />
  ));
};

export default CharactersList;
