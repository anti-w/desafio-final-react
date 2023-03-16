import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Header } from "../../components";

const Home = () => {
  const theme = useTheme();

  return (
    <div>
      <Header />
    </div>
  );
};

export default Home;
