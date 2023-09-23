import { Box } from "@mui/material";
import React from "react";
import Header from "../components/header/Header";
import OrderTable from "../components/Order/OrderTable";

export default function Order() {
  return (
    <Box>
      <Header />
      <OrderTable />
    </Box>
  );
}
