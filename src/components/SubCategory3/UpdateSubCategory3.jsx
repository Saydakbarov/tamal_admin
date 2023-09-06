import { Edit } from "@mui/icons-material";
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

export default function UpdateSubCategory3({ data }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const [selectId, setSelectId] = useState();

  console.log(selectId);

  // Select State Start

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // Select State End

  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    fetch("https://tamal.onrender.com/api/v1/secondsubcategories", {
      method: "GET",
      headers: {},
    })
      .then((res) => res.json())
      .then((data) => setCategoryData(data.data))
      .catch((e) => console.log(e));
  }, []);

  console.log(selectId);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { category_en, category_ru, category_uz } = e.target.elements;

    fetch("https://tamal.onrender.com/api/v1/thirdsubcategory/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        second_sub_category_id: selectId,
        id: data.third_sub_category_id,
        sub_category_uz: category_uz.value,
        sub_category_ru: category_ru.value,
        sub_category_en: category_en.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data), handleClose())
      .catch((e) => console.log(e));

    //
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
            Update Category
          </Typography>

          <Box component={"form"} onSubmit={handleSubmit}>
            <FormControl fullWidth sx={{ mt: 3 }}>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                defaultValue="Металлопрокат"
                onChange={handleChange}
              >
                {categoryData.map((v, i) => (
                  <MenuItem
                    key={v.second_sub_category_id}
                    onClick={() => setSelectId(v.second_sub_category_id)}
                    value={v.second_sub_category_name_ru}
                  >
                    {v.second_sub_category_name_ru}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              required
              fullWidth
              defaultValue={data.third_sub_category_name_en}
              name="category_en"
              id="filled-basic"
              label="Category_En"
              variant="filled"
              sx={{ mt: 2 }}
            />
            <TextField
              name="category_ru"
              defaultValue={data.third_sub_category_name_ru}
              fullWidth
              id="filled-basic"
              label="Category_Ru"
              variant="filled"
              sx={{ mt: 2 }}
              required
            />
            <TextField
              name="category_uz"
              defaultValue={data.third_sub_category_name_uz}
              fullWidth
              id="filled-basic"
              label="Category_Uz"
              variant="filled"
              sx={{ mt: 2 }}
              required
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
