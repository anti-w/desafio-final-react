import { Avatar, Box, Typography, useTheme } from "@mui/material";

import deathnote from "../../../images/death-note.png";
import bleachskull from "../../../images/bleach-skull.png";
import onepiece from "../../../images/one-piece-logo.png";

const Content = () => {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      flexDirection="column"
      zIndex={999}
      alignItems="center"
      flexWrap="wrap"
    >
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={3}>
        Consumindo API Jinkan (MyAnimeList)
      </Typography>

      <Box
        display="flex"
        bgcolor={theme.palette.primary.main}
        borderRadius={2}
        p={2}
        my={2}
        gap={1}
        maxWidth={500}
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
        maxWidth={500}
        p={2}
        my={2}
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
            Saiba sobre seu mangá preferido, acompanhe a edição, popularidade e
            etc.
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="start"
        justifyContent="flex-start"
        maxWidth={500}
        p={2}
        my={2}
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
            Temporada
          </Typography>
          <Typography variant="h6">
            Acompanhe os lançamentos da temporada atual em uma tabela.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Content;
