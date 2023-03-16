import { useTheme } from "@emotion/react";
import { Box } from "@mui/system";
import { useState } from "react";
import logo from "../../images/Myanimelist_logo.webp";
import { ToggleDarkModeButton } from "../ToggleDarkModeButton";
import { Nav } from "./Nav";

const Header = ({ setAnimes }) => {
  const [name, setName] = useState("");

  const theme = useTheme();

  const handleSubmit = () => {
    setAnimes(name);
  };
  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: theme.palette.primary.main,
        borderRadius: "12px",
        padding: "10px",
      }}
    >
      <img src={logo} style={{ objectFit: "contain", width: "15%" }} />
      <Nav />
      <ToggleDarkModeButton />
    </Box>
  );
};

export default Header;
