import { Box, Container, Grid, Paper, useTheme } from "@mui/material";
import { Footer, Header } from "../../components";

const Home = () => {
  const theme = useTheme();

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "space-between",
      }}
    >
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box bgcolor={theme.palette.primary.main}>
            <h1>ola</h1>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor={theme.palette.primary.main}>
            <h1>ola</h1>
          </Box>
        </Grid>
      </Grid>

      <Footer />
    </Container>
  );
};

export default Home;
