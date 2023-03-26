import {
  Card,
  Box,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
  Tooltip,
} from "@mui/material";

import { Heart, Star } from "@phosphor-icons/react";

import { Link } from "react-router-dom";

const AnimeCard = ({
  title,
  genres = [],
  favorites,
  score,
  cover,
  episodes,
  id,
  path,
}) => {
  const theme = useTheme();

  return (
    <Link to={`${path}/${id}/characters`} style={{ textDecoration: "none" }}>
      <Card
        key={id}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 1,
          maxWidth: { xs: 360, sm: 400 },
          height: 240,
          my: 2,
          opacity: 0.85,
          borderRadius: 4,
          backgroundColor: theme.palette.primary.main,
          fontWeight: 900,
          transition: "ease-in 0.5s",
          ":hover": {
            opacity: 1,
          },
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <Box display="flex" flexDirection="column">
            <Typography
              color="text.primary"
              component="h2"
              fontSize={20}
              fontWeight={900}
            >
              {title}
            </Typography>
            <Typography color="text.primary" component="h2">
              {episodes > 1
                ? `${episodes || "??"} episódios`
                : `${episodes || "??"} episódio`}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              minWidth: 200,
              gap: 1,
            }}
          >
            {genres.map((genre, i) => (
              <Box
                display="flex"
                key={genre.name + i}
                bgcolor={theme.palette.text.primary}
                color={theme.palette.primary.main}
                p={0.5}
                borderRadius={1}
              >
                <Typography fontWeight={900} fontSize={14}>
                  {genre.name}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box
            mt={1}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Tooltip title="score">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={1}
              >
                <Star size={24} weight="fill" />
                <Typography component="span">{score}</Typography>
              </Box>
            </Tooltip>

            <Tooltip title="favorites">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={1}
              >
                <Heart size={24} weight="fill" color="#f51000" />
                <Typography component="span">{favorites}</Typography>
              </Box>
            </Tooltip>
          </Box>
        </CardContent>
        <Tooltip title="Ver Personagens">
          <Box display="flex" flexDirection="column" p={1}>
            <CardMedia
              component="img"
              image={cover}
              sx={{
                borderRadius: 2,
                height: 170,
                width: 130,
              }}
            />
          </Box>
        </Tooltip>
      </Card>
    </Link>
  );
};

export default AnimeCard;
