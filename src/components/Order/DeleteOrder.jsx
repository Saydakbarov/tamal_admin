import { Delete } from "@mui/icons-material";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import BASE_URl from "../../Server";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function DeleteOrder({ id }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);
  console.log(id);

  const deleteFunc = () => {
    fetch(`${BASE_URl}api/v1/order/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data), window.location.reload())
      .catch((e) => console.log(e));
  };
  return (
    <Box>
      <Button variant="contained" color="error" onClick={handleOpen}>
        <Delete />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Rostan ham o'chirmoqchimisiz
          </Typography>

          <Box sx={{ display: "flex", gap: "20px", mt: 5 }}>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                deleteFunc();
                handleClose();
              }}
            >
              Delete
            </Button>
            <Button variant="contained" onClick={handleClose}>
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
