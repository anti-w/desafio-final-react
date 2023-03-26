export const filterCharactersByRole = (characters = []) => {
  let mainChars = [];
  let supportChars = [];

  mainChars = characters.filter((char) => char.role === "Main");
  supportChars = characters.filter((char) => char.role === "Supporting");

  return { mainChars, supportChars };
};
