import {
  Avatar,
  Box,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "mui-image";
import { Footer, CustomAppBar, FeedbackDialog } from "../../components";

import dbz from "../../images/dbz.png";
import deathnote from "../../images/death-note.png";
import bleachskull from "../../images/bleach-skull.png";
import noragamilogo from "../../images/noragami-logo.png";

const Home = () => {
  const theme = useTheme();

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        gap: "2rem",
        justifyContent: "space-between",
      }}
    >
      <CustomAppBar />
      <Box display="flex" height="100%" flexDirection="column">
        <Typography variant="h4" fontWeight="bold" textAlign="center">
          Projeto: Consumindo API Jinkan (MyAnimeList)
        </Typography>
        <Box
          display="flex"
          alignItems="start"
          justifyContent="flex-start"
          py={4}
          pl={1}
          border="1px solid gray"
          my={3}
        >
          <Avatar
            src={bleachskull}
            sx={{ width: 100, height: 100 }}
            variant="rounded"
          />

          <Box display="flex" width="100%">
            <Typography variant="h6">Animes</Typography>
            <Typography variant="h6">Animes</Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="start"
          justifyContent="flex-start"
          py={4}
          pl={1}
          my={3}
          border="1px solid gray"
        >
          <Avatar
            src={deathnote}
            sx={{ width: 88, height: 88 }}
            variant="rounded"
          />

          <Box display="flex" width="100%">
            <Typography variant="h6">Animes</Typography>
            <Typography variant="h6">Animes</Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="start"
          justifyContent="flex-start"
          py={4}
          pl={1}
          my={3}
          border="1px solid gray"
        >
          <Avatar
            src={noragamilogo}
            sx={{ width: 100, height: 100 }}
            variant="rounded"
          />

          <Box display="flex" width="100%">
            <Typography variant="h6">Animes</Typography>
            <Typography variant="h6">Animes</Typography>
          </Box>
        </Box>
      </Box>

      <FeedbackDialog />

      <Footer />
    </Container>
  );
};

export default Home;
