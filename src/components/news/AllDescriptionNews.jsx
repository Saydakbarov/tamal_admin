import { MoreVert } from "@mui/icons-material";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AllDescriptionNews({ data }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  console.log(data);

  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Button variant="outlined" onClick={handleOpen}>
        <MoreVert />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            News Description
          </Typography>

          <Box
            sx={{
              mt: 2,
              display: "flex",
              gap: "50px",
              background:
                "linear-gradient(138deg, rgba(95,83,53,1) 0%, rgba(49,250,143,1) 0%, rgba(170,183,199,1) 100%)",
              p: 2,
              alignItems: "center",
              justifyContent: "center",
              color: "black",
              flexWrap: "wrap",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                {" "}
                New Description language En
              </Typography>
              <Typography>{data.new_description_en}</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                {" "}
                New Description language Uz
              </Typography>
              <Typography>{data.new_description_uz}</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                {" "}
                New Description language Ru
              </Typography>
              <Typography>{data.new_description_ru}</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              mt: 4,
              display: "flex",
              flexWrap: "wrap",
              gap: "50px",
              background:
                "linear-gradient(138deg, rgba(95,83,53,1) 0%, rgba(49,250,143,1) 0%, rgba(170,183,199,1) 100%)",
              p: 2,
              alignItems: "center",
              justifyContent: "center",
              color: "black",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                {" "}
                New Title language En
              </Typography>
              <Typography>{data.new_title_en}</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                {" "}
                New Title language Uz
              </Typography>
              <Typography>{data.new_title_uz}</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                {" "}
                New Title language Ru
              </Typography>
              <Typography>{data.new_title_ru}</Typography>
            </Box>

            <Box>
              <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                {" "}
                New Img Url
              </Typography>
              <a href={data.new_img}>Image</a>
            </Box>
          </Box>
          <Box sx={{ textAlign: "end", mt: 3 }}>
            <Button
              sx={{ textAlign: "end" }}
              variant="contained"
              color="inherit"
              onClick={handleClose}
            >
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
