import { TextField } from "@mui/material";

const SearchBar = ({ searchForAnimeName, searchedAnime }) => {
  return (
    <TextField
      sx={{
        width: { xs: 360, md: 500 },
      }}
      type="search"
      onBlur={() => {}}
      value={searchedAnime}
      placeholder="Digite o nome..."
      onChange={(e) => searchForAnimeName(e.target.value)}
    />
  );
};

export default SearchBar;
