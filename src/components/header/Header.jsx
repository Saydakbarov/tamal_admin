import { Logout } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

export default function Header({ lang, setLang }) {
  const logOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <Box
      sx={{
        p: 2,
        background: "#040B14",
      }}
    >
      <Box sx={{ textAlign: "end" }}>
        <Button onClick={logOut}>
          <Logout
            sx={{ fontSize: "30px", color: "#ffff", cursor: "pointer" }}
          />
        </Button>

        <select
          defaultValue={lang}
          onChange={(e) => {
            setLang(e.target.value);
            localStorage.setItem("lang", JSON.stringify(e.target.value));
          }}
          style={{
            border: "none",
            outline: "none",
            padding: "5px 10px",
            textTransform: "uppercase",
          }}
        >
          <option value="ru">ru</option>
          <option value="en">en</option>
          <option value="uz">uz</option>
        </select>
      </Box>
    </Box>
  );
}
