import { Box } from "@mui/material";
import React from "react";
import Header from "../components/header/Header";
import OrderTable from "../components/Order/OrderTable";

export default function Order({ lang, setLang }) {
  console.log(lang);
  return (
    <Box>
      <Header lang={lang} setLang={setLang} />
      <OrderTable lang={lang} setLang={setLang} />
    </Box>
  );
}
