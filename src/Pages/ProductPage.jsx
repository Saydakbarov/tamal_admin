import { Box } from "@mui/material";
import React from "react";
import Header from "../components/header/Header";
import ProductTable from "../components/product/ProductTable";

export default function ProductPage() {
  return (
    <Box>
      <Header />
      <ProductTable />
    </Box>
  );
}
