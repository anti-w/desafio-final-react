import { Box, Typography, useTheme } from "@mui/material";
import Image from "mui-image";

const Card = ({ name, role, cover }) => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width={300}
      height={200}
      p={1}
      gap={2}
      borderRadius={3}
      sx={{
        transition: "ease-in-out 0.5s",
        opacity: 0.85,
        ":hover": { opacity: 1 },
      }}
      bgcolor={theme.palette.primary.main}
    >
      <Image src={cover} width={130} height={150} fit="contain" />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={2}
      >
        <Typography variant="body1" fontWeight={900} textAlign="center">
          {name}
        </Typography>
        <span>{role}</span>
      </Box>
    </Box>
  );
};

export default Card;
