import { Edit } from "@mui/icons-material";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

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

export default function UpdateNews({ data }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      img,
      description_uz,
      description_ru,
      description_en,
      news_uz,
      news_ru,
      news_en,
    } = e.target.elements;
    const formData = new FormData();

    formData.append("photo", img?.files[0]);
    formData.append("id", data.new_id);
    formData.append("new_title_uz", news_uz.value);
    formData.append("new_title_en", news_en.value);
    formData.append("new_title_ru", news_ru.value);
    formData.append("new_description_uz", description_uz.value);
    formData.append("new_description_ru", description_ru.value);
    formData.append("new_description_en", description_en.value);

    axios
      .put("https://tamal.onrender.com/api/v1/news/update", formData, {
        headers: {
          "Content-Type": "form-data",
          type: "formData",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => console.log(res.data.data), handleClose)
      .catch((error) => console.log(error));
  };

  return (
    <Box sx={{}}>
      <Button variant="contained" color="warning" onClick={handleOpen}>
        <Edit />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update Brand
          </Typography>

          <Box component={"form"} onSubmit={handleSubmit}>
            <Box sx={{ mt: 2, display: "flex", gap: "30px" }}>
              <Box>
                <Typography>Add Title</Typography>
                <TextField
                  defaultValue={data.new_title_en}
                  required
                  fullWidth
                  name="news_en"
                  id="filled-basic"
                  label="New_En"
                  variant="filled"
                  sx={{ mt: 2 }}
                />
                <TextField
                  defaultValue={data.new_title_ru}
                  required
                  fullWidth
                  name="news_ru"
                  id="filled-basic"
                  label="News_ru"
                  variant="filled"
                  sx={{ mt: 2 }}
                />
                <TextField
                  defaultValue={data.new_title_uz}
                  required
                  fullWidth
                  name="news_uz"
                  id="filled-basic"
                  label="News_uz"
                  variant="filled"
                  sx={{ mt: 2 }}
                />
              </Box>
              <Box>
                <Typography>Add Description</Typography>
                <TextField
                  defaultValue={data.new_description_en}
                  required
                  fullWidth
                  name="description_en"
                  id="filled-basic"
                  label="New_En"
                  variant="filled"
                  sx={{ mt: 2 }}
                />
                <TextField
                  defaultValue={data.new_description_ru}
                  required
                  fullWidth
                  name="description_ru"
                  id="filled-basic"
                  label="News_ru"
                  variant="filled"
                  sx={{ mt: 2 }}
                />
                <TextField
                  defaultValue={data.new_description_uz}
                  required
                  fullWidth
                  name="description_uz"
                  id="filled-basic"
                  label="News_uz"
                  variant="filled"
                  sx={{ mt: 2 }}
                />
              </Box>
            </Box>

            <TextField
              required
              fullWidth
              name="img"
              id="filled-basic"
              variant="filled"
              sx={{ mt: 2 }}
              type="file"
            />

            <Button variant="contained" sx={{ mt: 2 }} type="submit">
              Add New
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
