import { Edit } from "@mui/icons-material";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import axios from "axios";
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

export default function UpdateBrand({ data }) {
  const [open, setOpen] = React.useState(false);

  const [updateData, setUpdateData] = useState([]);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { brand_name, photo } = e.target.elements;
    const formData = new FormData();

    formData.append("photo", photo?.files[0]);
    formData.append("id", data.brand_id);
    formData.append("brand_name", brand_name.value);
    axios
      .put(`${BASE_URl}api/v1/brand/update`, formData, {
        headers: {
          "Content-Type": "form-data",
          type: "formData",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => console.log(res.data.data))
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
            <TextField
              required
              fullWidth
              defaultValue={data.brand_name}
              name="brand_name"
              id="filled-basic"
              label="Category_En"
              variant="filled"
              sx={{ mt: 2 }}
            />
            <TextField
              name="photo"
              defaultValue={data.brand_name_ru}
              fullWidth
              id="filled-basic"
              variant="filled"
              sx={{ mt: 2 }}
              required
              type="file"
              inputProps={{
                multiple: true,
              }}
            />

            <Button variant="contained" sx={{ mt: 2 }} type="submit">
              Update Category
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
