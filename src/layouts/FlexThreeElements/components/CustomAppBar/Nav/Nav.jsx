import { MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import { NavLinks } from "../";

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
    path: "/season",
    label: "Temporada",
  },
];

const stylesMobile = {
  display: { xs: "flex", md: "none" },
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
  flexWrap: "wrap",
  flexDirection: "column",
};

const stylesWeb = {
  display: { xs: "none", md: "flex" },
  justifyContent: "space-between",
  padding: "1rem",
  alignItems: "center",
  gap: 3,
};

const Nav = ({ onMobile = false, handleCloseNavMenu = () => {} }) => {
  if (onMobile) {
    return pages.map(({ path, label }, i) => (
      <MenuItem
        onClick={handleCloseNavMenu}
        key={i}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <NavLinks path={path} label={label} />
      </MenuItem>
    ));
  }
  return (
    <Box component="nav" sx={onMobile ? stylesMobile : stylesWeb}>
      {pages.map(({ path, label }, idx) => (
        <NavLinks key={idx} path={path} label={label} />
      ))}
    </Box>
  );
};

export default Nav;
