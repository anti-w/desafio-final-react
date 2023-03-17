import { useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";

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
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      bgcolor={theme.palette.primary.main}
      borderRadius="10px"
    >
      <Grid xs={4} item>
        <img src={logo} style={{ objectFit: "contain", width: "45%" }} />
      </Grid>
      <Grid xs={4} item>
        <Nav />
      </Grid>
      <Grid xs={4} item>
        <ToggleDarkModeButton />
      </Grid>
    </Grid>
  );
};

export default Header;
