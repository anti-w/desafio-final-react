import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ResponsiveAppBar, ToggleDarkModeButton } from "../../components";

const Home = () => {
  const theme = useTheme();

  return (
    <div>
      <ResponsiveAppBar />
      <ToggleDarkModeButton />
    </div>
  );
};

export default Home;
