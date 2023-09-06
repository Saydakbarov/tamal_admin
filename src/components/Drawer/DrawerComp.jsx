import { Close } from "@mui/icons-material";
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Menu,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MenuData } from "../../data/AllData";

export default function DrawerComp() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();

  // List Item Style
  const listItem = {
    a: {
      color: "grey",
      "&:hover": {
        color: "#ffff",
      },
    },
  };
  return (
    <React.Fragment>
      <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <Box
          sx={{ width: "300px", backgroundColor: "#040B14", height: "100vh" }}
        >
          <IconButton
            sx={{
              display: "inline-block",
              width: "50px",
              marginLeft: "250px",
              color: "white",
            }}
            onClick={() => setMobileOpen(false)}
          >
            <Close />
          </IconButton>
          <Box textAlign={"center"}></Box>
          <List sx={{ mt: 4 }}>
            {MenuData.map((v, i) => (
              <ListItem
                key={i}
                sx={listItem}
                onClick={() => setMobileOpen(false)}
              >
                <ListItemButton onClick={() => navigate(v.path)}>
                  <Link to="">{v.title}</Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <footer
            style={{ textAlign: "center", color: "#ffff", marginTop: "40px" }}
          >
            <p>
              &#169; Saydakbarov Jasur 2022 - {new Date().getFullYear()} | Made
              with ❤
            </p>
          </footer>
        </Box>
      </Drawer>
      <Box>
        <Button
          variant="contained"
          sx={{ borderRadius: "10%", p: 1 }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Menu />
        </Button>
      </Box>
    </React.Fragment>
  );
}
