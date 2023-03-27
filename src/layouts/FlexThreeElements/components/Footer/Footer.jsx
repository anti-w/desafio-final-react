import { Box, Container, Typography, useTheme } from "@mui/material";
import { FinnTheHuman, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();
  return (
    <Container disableGutters maxWidth={false}>
      <Box
        display="flex"
        justifyContent="center"
        gap={2}
        alignItems="center"
        mb={1}
      >
        <Typography textAlign="center" variant="h6" fontWeight={900}>
          Desenvolvido por Wendel Demétrio
        </Typography>
        <FinnTheHuman size={32} weight="fill" />
      </Box>

      <Box display="flex" justifyContent="center" gap={2} alignItems="center">
        <Link
          style={{
            textDecoration: "none",
            color: theme.palette.text.primary,
          }}
          to="https://github.com/anti-w"
        >
          <GithubLogo weight="fill" size={32} />
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: theme.palette.text.primary,
          }}
          to="https://www.linkedin.com/in/anti-w/"
        >
          <LinkedinLogo weight="fill" size={32} />
        </Link>
      </Box>
    </Container>
  );
};

export default Footer;
