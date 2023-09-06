import { Box, Typography } from "@mui/material";
import React from "react";
import Header from "../components/header/Header";
import CategoryTable from "../components/category/CategoryTable";

export default function CategoryPage() {
  return (
    <Box>
      <Header />
      <Typography sx={{ fontSize: "30px", ml: 3, mt: 3 }}>Category</Typography>

      <CategoryTable />
    </Box>
  );
}
