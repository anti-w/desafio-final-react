import { Box, Container } from "@mui/material";

import { MangaCard } from "../components";

import saitama from "../../../images/saitama.png";

const Content = ({ mangas, path }) => {
  return (
    <Container
      sx={{
        backgroundImage: `url(${saitama})`,
        backgroundSize: "contain",
        backgroundPosition: "left top",
        backgroundRepeat: "no-repeat",
        overflowY: "scroll",
      }}
      maxWidth={false}
    >
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        gap={4}
      >
        {mangas.map((manga) => (
          <MangaCard
            key={manga.mal_id}
            cover={manga.images?.webp.image_url}
            score={manga.score}
            title={manga.title_english || manga.title}
            url={manga.url}
            genres={manga.genres}
            id={manga.mal_id}
            path={path}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Content;
