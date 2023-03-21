import { useState } from "react";

import {
  Box,
  Tooltip,
  Dialog,
  DialogContent,
  DialogTitle,
  useTheme,
} from "@mui/material";

import Image from "mui-image";
import uzumaki from "../../images/uzumaki.png";
import uchiha from "../../images/uchiha.png";
import { Form } from "./Form";

const FeedbackDialog = () => {
  const [open, setOpen] = useState(false);

  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="Deixe seu feedback!" enterDelay={300}>
        <Box
          bgcolor="transparent"
          component="button"
          position="fixed"
          right="42px"
          border="none"
          bottom="100px"
          width="4.2rem"
          height="4.2rem"
          p="0.2rem"
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
        </Box>
      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle textAlign="center" fontWeight="bold">
          Nos ajude a melhorar
        </DialogTitle>
        <DialogContent sx={{ backgroundImage: uchiha }}>
          <Form />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FeedbackDialog;
