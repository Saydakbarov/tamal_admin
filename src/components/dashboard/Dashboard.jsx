import React, { useState } from "react";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import DrawerComp from "../Drawer/DrawerComp";

import TamalLogo from "../../tamalLogo.png";
import { content } from "../Localizations/content";

export default function Dashboard({ lang, setLang }) {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  // List Item Style

  // Drawer and Responsive
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ display: "flex" }}>
      {!isMatch && (
        <Box
          sx={{ width: "350px", backgroundColor: "#040B14", height: "100vh" }}
        >
          <img
            style={{
              width: "200px",
              cursor: "pointer",
              textAlign: "center",
              marginTop: "30px",
            }}
            onClick={() => navigate("/")}
            src={TamalLogo}
            alt=""
          />

          <Box textAlign={"center"}></Box>
          <List sx={{ mt: 1 }}>
            {content[lang].header.links.map((v, i) => (
              <ListItem
                key={i}
                sx={{
                  background: title === v.title ? "red" : " ",
                  mt: 2,
                  borderRadius: "4px",
                }}
              >
                <ListItemButton
                  sx={{}}
                  onClick={() => {
                    setTitle(v.title);
                    navigate(v.path);
                  }}
                >
                  <Link style={{ textDecoration: "none", color: "#fff" }}>
                    {v.title}
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      )}

      <Box
        sx={{
          width: "100%",
          height: "100vh",
          overflow: "auto",
          position: "relative",
        }}
      >
        <Box sx={{ position: "absolute", right: "3%", top: "2%" }}>
          {isMatch && <DrawerComp />}
        </Box>
        <Outlet />
      </Box>
    </Box>
  );
}
