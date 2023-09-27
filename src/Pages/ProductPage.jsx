import { Box } from "@mui/material";
import React from "react";
import Header from "../components/header/Header";
import ProductTable from "../components/product/ProductTable";

export default function ProductPage({ lang, setLang }) {
  return (
    <Box>
      <Header lang={lang} setLang={setLang} />
      <ProductTable />
    </Box>
  );
}
