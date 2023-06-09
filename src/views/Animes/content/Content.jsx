import { Box } from "@mui/material";
import { Container } from "@mui/material";
import { AnimeCard } from "../components";

import obito from "../../../images/obito.png";

const Content = ({ fetchedData, path }) => {
  return (
    <Container
      sx={{
        backgroundImage: `url(${obito})`,
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
        {fetchedData?.map((anime) => (
          <AnimeCard
            key={anime.mal_id}
            cover={anime.images?.webp.image_url}
            favorites={anime.favorites}
            score={anime.score}
            title={anime.title_english || anime.title}
            url={anime.url}
            genres={anime.genres}
            episodes={anime.episodes}
            id={anime.mal_id}
            path={path}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Content;
