import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";

const NavLinks = ({ path, label }) => {
  const { palette } = useTheme();

  return (
    <Link
      to={path}
      style={{
        textDecoration: "none",
        fontSize: "18px",
        color: palette.text.primary,
        fontWeight: "bold",
      }}
    >
      {label}
    </Link>
  );
};

export default NavLinks;
