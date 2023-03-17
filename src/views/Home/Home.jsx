import { Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Header } from "../../components";

const Home = () => {
  const theme = useTheme();

  return (
    <Container maxWidth={false}>
      <Header />
    </Container>
  );
};

export default Home;
