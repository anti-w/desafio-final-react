import { Box, Container, Grid, useTheme } from "@mui/material";
import Image from "mui-image";
import { Footer, CustomAppBar, FeedbackDialog } from "../../components";

import dbz from "../../images/dbz.png";

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
        gap: "42px",
        overflow: "hidden",
      }}
    >
      <CustomAppBar />
      <Grid container columnGap={10}>
        <Grid
          item
          xs={6}
          pl={10}
          bgcolor={theme.palette.primary.main}
          borderRadius="1rem"
        >
          <Image src={dbz} fit="scale-down" height="72vh" width="30vw" />
        </Grid>
        <Grid container xs={5} bgcolor="red">
          <Grid item xs={12} sx={{ placeSelf: "end" }}>
            <h1>teste</h1>
          </Grid>
          <Grid container>
            <Grid item xs={4} sx={{}}>
              <h1>teste1</h1>
            </Grid>
            <Grid item xs={4} sx={{}}>
              <h1>teste1</h1>
            </Grid>
            <Grid item xs={4} sx={{}}>
              <h1>teste1</h1>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <FeedbackDialog />

      <Footer />
    </Container>
  );
};

export default Home;
