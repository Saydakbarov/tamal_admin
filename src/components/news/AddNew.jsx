import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BASE_URl from "../../Server";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddNew() {
  // Modal State Start

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  // Modal State End

  // Select State Start

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      news_en,
      news_ru,
      news_uz,
      description_en,
      description_uz,
      description_ru,
      img,
    } = e.target.elements;
    const formData = new FormData();

    formData.append("new_title_uz", news_uz.value);
    formData.append("new_title_ru", news_ru.value);
    formData.append("new_title_en", news_en.value);
    formData.append("new_description_uz", description_uz.value);
    formData.append("new_description_ru", description_ru.value);
    formData.append("new_description_en", description_en.value);
    formData.append("photo", img?.files[0]);

    axios
      .post(`${BASE_URl}api/v1/news/add`, formData, {
        headers: {
          "Content-Type": "form-data",
          type: "formData",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => console.log(res.data), handleClose())
      .catch((error) => console.log(error));
  };
  return (
    <Box sx={{ marginLeft: "0 auto", width: "100%", mt: 3 }}>
      <Button variant="contained" onClick={handleOpen}>
        Add New
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New
          </Typography>

          <Box component={"form"} onSubmit={handleSubmit}>
            <Box sx={{ mt: 2, display: "flex", gap: "30px" }}>
              <Box>
                <Typography>Add Title</Typography>
                <TextField
                  required
                  fullWidth
                  name="news_en"
                  id="filled-basic"
                  label="New_En"
                  variant="filled"
                  sx={{ mt: 2 }}
                />
                <TextField
                  required
                  fullWidth
                  name="news_ru"
                  id="filled-basic"
                  label="News_ru"
                  variant="filled"
                  sx={{ mt: 2 }}
                />
                <TextField
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
                  required
                  fullWidth
                  name="description_en"
                  id="filled-basic"
                  label="New_En"
                  variant="filled"
                  sx={{ mt: 2 }}
                />
                <TextField
                  required
                  fullWidth
                  name="description_ru"
                  id="filled-basic"
                  label="News_ru"
                  variant="filled"
                  sx={{ mt: 2 }}
                />
                <TextField
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
