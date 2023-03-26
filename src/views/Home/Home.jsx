import { Container } from "@mui/material";

import madara from "../../images/madara.png";

import { FlexThreeElements } from "../../layouts";
import { Content } from "./content";

const Home = () => {
  return (
    <FlexThreeElements>
      <Container
        sx={{
          backgroundImage: `url(${madara})`,
          backgroundPosition: "left bottom",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        maxWidth={false}
      >
        <Content />
      </Container>
    </FlexThreeElements>
  );
};

export default Home;
