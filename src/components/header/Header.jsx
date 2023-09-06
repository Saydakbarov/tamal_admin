import { Logout } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

export default function Header() {
  const logOut = () => {
    localStorage.setItem("token", false);
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
      </Box>
    </Box>
  );
}
