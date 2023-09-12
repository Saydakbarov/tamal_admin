import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React from "react";
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

export default function ModalCategory() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);
  // https://tamal.onrender.com/
  const handleSubmit = (e) => {
    e.preventDefault();
    const { category_en, category_ru, category_uz } = e.target.elements;

    fetch(`${BASE_URl}api/v1/category/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category_uz: category_uz.value,
        category_ru: category_ru.value,
        category_en: category_en.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data), handleClose())
      .catch((e) => console.log(e));
  };
  return (
    <Box sx={{ marginLeft: "0 auto", width: "100%", mt: 3 }}>
      <Button variant="contained" onClick={handleOpen}>
        Add Category
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Category
          </Typography>

          <Box component={"form"} onSubmit={handleSubmit}>
            <TextField
              required
              fullWidth
              name="category_en"
              id="filled-basic"
              label="Category_En"
              variant="filled"
              sx={{ mt: 2 }}
            />
            <TextField
              name="category_ru"
              fullWidth
              id="filled-basic"
              label="Category_Ru"
              variant="filled"
              sx={{ mt: 2 }}
              required
            />
            <TextField
              name="category_uz"
              fullWidth
              id="filled-basic"
              label="Category_Uz"
              variant="filled"
              sx={{ mt: 2 }}
              required
            />
            <Button variant="contained" sx={{ mt: 2 }} type="submit">
              Add Category
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
