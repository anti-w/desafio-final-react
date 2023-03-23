import { Container } from "@mui/material";

const Footer = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>elemento 1</h1>
      <h1>elemento 2</h1>
      <h1>elemento 3</h1>
    </Container>
  );
};

export default Footer;
