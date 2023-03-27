import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "mui-image";

import { IconButton, useTheme } from "@mui/material";
import { DotsThreeOutlineVertical } from "@phosphor-icons/react";

const AnimesTable = ({ animes }) => {
  const theme = useTheme();
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650, px: 1 }}
        aria-label="simple table"
        stickyHeader
      >
        <TableHead>
          <TableRow>
            <TableCell align="left">Título</TableCell>
            <TableCell align="left">Capa</TableCell>
            <TableCell align="left">Score</TableCell>
            <TableCell align="left">Likes</TableCell>
            <TableCell align="left">Episodes</TableCell>
            <TableCell align="left">Visualizar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {animes.map((row) => (
            <TableRow
              key={row.mal_id}
              hover
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">
                {row.title_english || row.title}
              </TableCell>

              <TableCell align="left">
                <Image
                  src={row.images?.webp.image_url}
                  fill="scale-down"
                  width="50%"
                />
              </TableCell>

              <TableCell align="left">{row.score}</TableCell>
              <TableCell align="left">{row.favorites}</TableCell>
              <TableCell align="left">
                {row.episodes || "Não definido"}
              </TableCell>
              <TableCell align="left">
                <IconButton
                  onClick={() =>
                    alert(
                      `Você selecionou o anime: ${
                        row.title_english || row.title
                      }`
                    )
                  }
                >
                  <DotsThreeOutlineVertical
                    color={theme.palette.text.primary}
                    size={24}
                    weight="fill"
                  />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AnimesTable;
