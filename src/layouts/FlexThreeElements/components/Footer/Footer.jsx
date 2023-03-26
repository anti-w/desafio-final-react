import { Container, Typography } from "@mui/material";
import { FinnTheHuman } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 3,
        alignItems: "center",
      }}
    >
      <Typography textAlign="center" variant="h6" fontWeight={900}>
        Desenvolvido por Wendel Demétrio
      </Typography>
      <FinnTheHuman size={32} weight="fill" />
    </Container>
  );
};

export default Footer;
