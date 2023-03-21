import { Container } from "@mui/material";

import { CustomAppBar, FeedbackDialog, Footer } from "../components";

import { styles } from "./styles";

const FlexThreeElements = ({ children }) => {
  return (
    <Container maxWidth={false} sx={styles}>
      <CustomAppBar />
      <FeedbackDialog />
      {children}
      <Footer />
    </Container>
  );
};

export default FlexThreeElements;
