import { Box, Typography } from "@mui/material";
import React from "react";
import Header from "../components/header/Header";
import CategoryTable from "../components/category/CategoryTable";

export default function CategoryPage({ lang, setLang }) {
  console.log(lang);
  return (
    <Box>
      <Header lang={lang} setLang={setLang} />
      <Typography sx={{ fontSize: "30px", ml: 3, mt: 3 }}>Category</Typography>

      <CategoryTable />
    </Box>
  );
}
