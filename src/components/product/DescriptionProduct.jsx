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

export default function DescriptionProduct({ data }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);
  console.log(data);
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
                Product Information language En
              </Typography>
              <Typography>{data.product_information_en}</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                {" "}
                Product Information language Uz
              </Typography>
              <Typography>{data.product_information_uz}</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                {" "}
                Product Information language Ru
              </Typography>
              <Typography>{data.product_information_ru}</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              mt: 4,
              display: "flex",
              flexWrap: "wrap",
              gap: "30px",
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
                Product Title language En
              </Typography>
              <Typography>{data.product_title_en}</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                {" "}
                Product Title language Uz
              </Typography>
              <Typography>{data.product_title_uz}</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                {" "}
                Product Title language Ru
              </Typography>
              <Typography>{data.product_title_ru}</Typography>
            </Box>

            <Box>
              <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                {" "}
                Product Img Url
              </Typography>
              <a href={data.product_image_url}>Image</a>
            </Box>
          </Box>

          <Box
            sx={{
              mt: 4,
              display: "flex",
              flexWrap: "wrap",
              gap: "30px",
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
                Product Model language En
              </Typography>
              <Typography>{data.product_model_en}</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                {" "}
                Product Model language Uz
              </Typography>
              <Typography>{data.product_model_uz}</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                {" "}
                Product Model language Ru
              </Typography>
              <Typography>{data.product_model_ru}</Typography>
            </Box>

            <Box>
              <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                {" "}
                Product Price
              </Typography>
              <Typography>{data.product_price}</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              mt: 4,
              display: "flex",
              flexWrap: "wrap",
              gap: "30px",
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
                Product Attention language En
              </Typography>
              <Typography>{data.product_attention_en}</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                {" "}
                Product Attention language Uz
              </Typography>
              <Typography>{data.product_attention_uz}</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                {" "}
                Product Attention language Ru
              </Typography>
              <Typography>{data.product_attention_ru}</Typography>
            </Box>

            <Box>
              <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                {" "}
                Brand Name
              </Typography>
              <Typography>{data.brand_name}</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              mt: 4,
              display: "flex",
              flexWrap: "wrap",
              gap: "30px",
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
                Product Country language En
              </Typography>
              <Typography>{data.product_country_en}</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                {" "}
                Product Country language Uz
              </Typography>
              <Typography>{data.product_country_uz}</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                {" "}
                Product Country language Ru
              </Typography>
              <Typography>{data.product_country_ru}</Typography>
            </Box>

            <Box>
              <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                {" "}
                Brand Name
              </Typography>
              <Typography>{data.brand_name}</Typography>
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
