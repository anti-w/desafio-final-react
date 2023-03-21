import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { Avatar, Box, Tooltip, useTheme } from "@mui/material";

import Image from "mui-image";
import uzumaki from "../../images/uzumaki.png";
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
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <Form />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FeedbackDialog;
