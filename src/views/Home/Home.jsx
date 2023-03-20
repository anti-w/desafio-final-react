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
import onepiece from "../../images/one-piece-logo.png";
import { useEffect } from "react";

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
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={3}>
          Projeto: Consumindo API Jinkan (MyAnimeList)
        </Typography>
        <Box
          display="flex"
          bgcolor={theme.palette.primary.main}
          borderRadius={2}
          p={2}
          my={3}
          gap={1}
          sx={{ opacity: 0.7, ":hover": { opacity: 1 } }}
        >
          <Avatar
            src={bleachskull}
            sx={{ width: 130, height: 130 }}
            variant="rounded"
          />

          <Box
            display="flex"
            flexDirection="column"
            textAlign="center"
            p={1}
            gap={1}
          >
            <Typography variant="h5" fontWeight="bold">
              Animes
            </Typography>
            <Typography variant="h6">
              Veja a popularidade, gêneros, notas da comunidade e personagens.
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="start"
          justifyContent="flex-start"
          borderRadius={2}
          p={2}
          my={3}
          gap={1}
          bgcolor={theme.palette.primary.main}
          sx={{ opacity: 0.7, ":hover": { opacity: 1 } }}
        >
          <Avatar
            src={deathnote}
            sx={{ width: 130, height: 130 }}
            variant="rounded"
          />

          <Box
            display="flex"
            flexDirection="column"
            textAlign="center"
            p={1}
            gap={1}
          >
            <Typography variant="h5" fontWeight="bold">
              Mangás
            </Typography>
            <Typography variant="h6">
              Saiba sobre seu mangá preferido, acompanhe a edição, popularidade
              e etc.
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="start"
          justifyContent="flex-start"
          p={2}
          my={3}
          gap={1}
          borderRadius={2}
          bgcolor={theme.palette.primary.main}
          sx={{ opacity: 0.7, ":hover": { opacity: 1 } }}
        >
          <Avatar
            src={onepiece}
            sx={{ width: 130, height: 130 }}
            variant="rounded"
          />

          <Box
            display="flex"
            flexDirection="column"
            textAlign="center"
            p={1}
            gap={1}
          >
            <Typography variant="h5" fontWeight="bold">
              Recomendações
            </Typography>
            <Typography variant="h6">
              Veja o que a comunidade está falando sore os animes e descubra
              algo novo para acompanhar.
            </Typography>
          </Box>
        </Box>
      </Box>

      <FeedbackDialog />

      <Footer />
    </Container>
  );
};

export default Home;
