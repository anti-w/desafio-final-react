import { Groups2, InsertLink } from "@mui/icons-material";
import {
  Card,
  Box,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
  Icon,
} from "@mui/material";
import { Heart } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const AnimeCard = ({
  title,
  genres = [],
  favorites,
  score,
  cover,
  url,
  episodes,
  rank,
  id,
}) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "start",
        justifyContent: "space-between",
        padding: 1,
        m: 4,
        borderRadius: 4,
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <CardContent sx={{}}>
        <Typography color="text.primary" component="h2" fontWeight={900}>
          {title}
        </Typography>
        <Typography color="text.primary" component="h2" fontWeight={900}>
          {episodes > 1
            ? `${episodes || "??"} episódios`
            : `${episodes || "??"} episódio`}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          {genres.map((genre) => (
            <Box
              bgcolor={theme.palette.text.primary}
              color={theme.palette.primary.main}
              p={0.1}
            >
              <Typography>{genre.name}</Typography>
            </Box>
          ))}
        </Box>
        <Box>
          <Icon>{rank}</Icon>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>{score}</Typography>
          <Box>
            <Heart />
            {favorites}
          </Box>
        </Box>
      </CardContent>
      <Box display="flex" flexDirection="column">
        <CardMedia
          component="img"
          image={cover}
          sx={{
            borderRadius: 2,
            width: 120,
          }}
        />
        <Box display="none">
          <Link to={url} target="_blank">
            <InsertLink />
          </Link>
          <Box>
            <Link to={`/${id}/characters`}>
              <Groups2 />
            </Link>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default AnimeCard;
