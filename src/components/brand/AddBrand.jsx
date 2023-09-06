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

export default function AddBrand() {
  // Modal State Start

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  // Modal State End

  // Select State Start

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // Select State End

  const [cetegoryData, setCategoryData] = useState([]);

  const [selectId, setSelectId] = useState();

  console.log(selectId);

  console.log(age);

  useEffect(() => {
    fetch("https://tamal.onrender.com/api/v1/brands?limit=100&offset=0", {
      method: "GET",
      headers: {},
    })
      .then((res) => res.json())
      .then((data) => setCategoryData(data))
      .catch((e) => console.log(e));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { brand, img } = e.target.elements;
    const formData = new FormData();

    formData.append("photo", img?.files[0]);
    formData.append("brand_name", brand.value);

    console.log(brand.value, img.files[0].name);

    axios
      .post("https://tamal.onrender.com/api/v1/brand/add", formData, {
        headers: {
          "Content-Type": "form-data",
          "type": "formData",
          "Accept": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => console.log(res.request), handleClose)
      .catch((error) => console.log(error));
  };
  return (
    <Box sx={{ marginLeft: "0 auto", width: "100%", mt: 3 }}>
      <Button variant="contained" onClick={handleOpen}>
        Add Brand
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add SubCategory
          </Typography>

          <Box component={"form"} onSubmit={handleSubmit}>
            <TextField
              required
              fullWidth
              name="brand"
              id="filled-basic"
              label="Title"
              variant="filled"
              sx={{ mt: 2 }}
            />

            <TextField
              required
              fullWidth
              name="img"
              //   id="filled-basic"
              variant="filled"
              sx={{ mt: 2 }}
              type="file"
            />

            <Button variant="contained" sx={{ mt: 2 }} type="submit">
              Add SubCategory
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
