import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "mui-image";

const AnimesTable = ({ animes }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Título</TableCell>
            <TableCell>Capa</TableCell>
            <TableCell align="right">Score</TableCell>
            <TableCell align="right">Ranking</TableCell>
            <TableCell align="right">Likes</TableCell>
            <TableCell align="right">Episodes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {animes.map((row) => (
            <TableRow key={row.mal_id} hover>
              <TableCell>{row.title_english || row.title}</TableCell>
              <TableCell align="right">
                <Image
                  src={row.images?.webp.image_url}
                  width="50%"
                  fit="scale-down"
                />
              </TableCell>
              <TableCell align="right">{row.score}</TableCell>
              <TableCell align="right">{row.rank}</TableCell>
              <TableCell align="right">{row.favorites}</TableCell>
              <TableCell align="right">{row.episodes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AnimesTable;
