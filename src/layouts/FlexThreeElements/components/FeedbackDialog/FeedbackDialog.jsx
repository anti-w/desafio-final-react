import { useEffect, useState } from "react";

import {
  Box,
  Tooltip,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Rating,
} from "@mui/material";

import Image from "mui-image";
import uzumaki from "../../../../images/uzumaki.png";

import { Form } from "./Form";

const FeedbackDialog = () => {
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    let note = sessionStorage.getItem("note");
    setNote(parseInt(note));
  }, []);

  return (
    <div>
      <Tooltip
        title={note ? `Obrigado pela nota ${note}` : "Deixe seu feedback!"}
        enterDelay={300}
      >
        <Box
          bgcolor="transparent"
          component="button"
          position="fixed"
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={1}
          flexDirection="column"
          right="42px"
          border="none"
          bottom="100px"
          width="4.2rem"
          height="4.2rem"
          p="0.2rem"
          zIndex={999}
          sx={{
            cursor: "pointer",
            opacity: 0.4,
            ":hover": {
              opacity: 1,
              transition: "ease-in-out 0.5s",
            },
          }}
          onClick={handleClickOpen}
        >
          <Image src={uzumaki} bgColor="transparent" fit="fill" />
          <Rating value={note} readOnly />
        </Box>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle m={1}>
          <Typography textAlign="center" fontWeight={900} fontSize={18}>
            Nos ajude a melhorar nosso site!
          </Typography>
          <Typography textAlign="center">
            (Seu feedback é importante)
          </Typography>
        </DialogTitle>

        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            alignItems: "center",
          }}
        >
          <Form handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FeedbackDialog;
