import { Container } from "@mui/material";

import { styles } from "../styles";
import { CustomAppBar, FeedbackDialog, Footer } from "./components";

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
