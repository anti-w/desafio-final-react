import { Box } from "@mui/material";
import { Container } from "@mui/material";

import kami from "../../../images/kami.png";
import { Card } from "../components";

const Content = ({ characters }) => {
  return (
    <Container
      sx={{
        backgroundImage: `url(${kami})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
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
        {characters?.map((char, i) => (
          <Card
            key={i}
            name={char.character.name}
            role={char.role}
            cover={char.character.images.webp.image_url}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Content;
