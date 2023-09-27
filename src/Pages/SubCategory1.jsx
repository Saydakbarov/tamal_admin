import { Box, Typography } from "@mui/material";
import React from "react";
import Header from "../components/header/Header";
import SubCategoryTable1 from "../components/SubCategory1/SubCategoryTable";

export default function SubCategory1({ lang, setLang }) {
  return (
    <Box>
      <Header lang={lang} setLang={setLang} />
      <Typography sx={{ fontSize: "30px", ml: 3, mt: 3 }}>
        SubCategory1
      </Typography>

      <SubCategoryTable1 />
    </Box>
  );
}
