import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const AnimeCard = ({ title, genres = [], favorites, score, cover, url }) => {
  return (
    <Card sx={{ display: "flex", justifyContent: "space-between", padding: 2 }}>
      <CardContent>
        <Typography color="text.primary">{title}</Typography>
        <Typography>{score}</Typography>
      </CardContent>

      <CardMedia component="img" image={cover} sx={{ width: 240 }} />
    </Card>
  );
};

export default AnimeCard;
