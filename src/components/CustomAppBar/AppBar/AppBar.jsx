import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";

import {
  AppBar as MuiAppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Container,
} from "@mui/material";

import { Logo, ToggleDarkModeButton } from "../..";
import { Nav } from "../";

const AppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <MuiAppBar position="static" sx={{ borderRadius: "10px", mt: 0.3 }}>
      <Container maxWidth={false}>
        <Toolbar
          disableGutters
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            placeItems: "center",
          }}
        >
          <Box
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Logo width="40%" />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", justifySelf: "start" },
              ml: 1,
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Nav onMobile={true} />
            </Menu>
          </Box>
          <Box
            component="a"
            href="/"
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 2,
            }}
          >
            <Logo />
          </Box>
          <Nav />

          <Box sx={{ flexGrow: 0, justifySelf: "end", mr: 3 }}>
            <ToggleDarkModeButton />
          </Box>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
};
export default AppBar;
