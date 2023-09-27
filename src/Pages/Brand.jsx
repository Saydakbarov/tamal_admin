import { Box } from "@mui/material";
import React from "react";
import Header from "../components/header/Header";
import BrandTable from "../components/brand/BrandTable";

export default function Brand({lang, setLang}) {
  return (
    <Box>
      <Header lang={lang} setLang={setLang} />
      <BrandTable />
    </Box>
  );
}
