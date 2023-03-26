import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NavLinks = ({ path, label }) => {
  const { palette } = useTheme();

  return (
    <Link to={path} style={{ textDecoration: "none" }}>
      <Typography
        variant="body1"
        textAlign="center"
        color={palette.text.primary}
        sx={{ textDecoration: "none" }}
        fontWeight={900}
      >
        {label}
      </Typography>
    </Link>
  );
};

export default NavLinks;
