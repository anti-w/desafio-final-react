import { TextField } from "@mui/material";

const SearchBar = ({ searchForAnimeName, searchedAnime }) => {
  return (
    <TextField
      sx={{
        width: { xs: 360, md: 500 },
        backgroundColor: "transparent",
        mb: -3,
        justifySelf: "start",
      }}
      type="search"
      onBlur={() => {}}
      value={searchedAnime}
      placeholder="Pesquise o nome de um anime..."
      onChange={(e) => searchForAnimeName(e.target.value)}
    />
  );
};

export default SearchBar;
