import { Box } from "@mui/system";
import { NavLinks } from "../NavLinks";
import { style } from "./styles";

const pages = [
  {
    path: "/animes",
    label: "Animes",
  },
  {
    path: "/mangas",
    label: "Mangás",
  },
  {
    path: "/recomendations",
    label: "Recomendações",
  },
];

const Nav = () => {
  return (
    <Box
      component="nav"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
      }}
    >
      {pages.map(({ path, label }, idx) => (
        <NavLinks key={idx} path={path} label={label} />
      ))}
    </Box>
  );
};

export default Nav;
