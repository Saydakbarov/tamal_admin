import { Box, Typography } from "@mui/material";
import React from "react";
import Header from "../components/header/Header";
import SubCategoryTable3 from "../components/SubCategory3/SubCategoryTable3";

export default function SubCategory3() {
  return (
    <Box>
      <Header />
      <Typography sx={{ fontSize: "30px", ml: 3, mt: 3 }}>
        SubCategory3
      </Typography>
      <SubCategoryTable3 />
    </Box>
  );
}
