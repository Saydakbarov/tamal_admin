import { Box } from "@mui/material";
import React from "react";
import Header from "../components/header/Header";
import NewsTable from "../components/news/NewsTable";

export default function NewsPage({ lang, setLang }) {
  return (
    <Box>
      <Header lang={lang} setLang={setLang} />
      <NewsTable />
    </Box>
  );
}
