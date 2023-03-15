const CharacterCard = ({ name, coverUrl, role }) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={coverUrl} />
      <span>{role}</span>
    </div>
  );
};

export default CharacterCard;
