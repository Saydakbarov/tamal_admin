import {
  Box,
  Button,
  Checkbox,
  Grid,
  Modal,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { MoreVert } from "@mui/icons-material";

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
  overflowX: "scroll",
  height: "100vh",
  "&::-webkit-scrollbar": {
    display: "none",
  },
};

export default function OrderProduct({ data, lang }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);
  console.log(lang);

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
          <Box sx={{}}>
            <Grid container justifyContent={"center"} gap={2} mt={8}>
              <Grid item lg={11} md={11} sm={11} xs={11}>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    300: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                    1500: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                  style={{ paddingBottom: "50px" }}
                >
                  {data?.map((v, i) => (
                    <SwiperSlide className="swiperSlideBox">
                      <Box
                        sx={{
                          boxShadow:
                            " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                          p: 2,
                          height: "490px",
                        }}
                        component={"div"}
                      >
                        <Box
                          sx={{
                            width: "100%",
                          }}
                        >
                          <img
                            style={{
                              width: "100%",
                              height: "220px",
                              objectPosition: "100%",
                            }}
                            src={v.product_image_url}
                            alt=""
                          />
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                          <Box>
                            <Rating
                              sx={{ fontSize: "15px !important" }}
                              name="simple-controlled"
                              value={v.product_rating}
                              disabled
                            />
                          </Box>

                          <Typography
                            sx={{
                              fontWeight: "600",
                              fontSize: "18px",
                              mt: 2,
                              color: "#01466A",
                            }}
                          >
                            {lang == "ru"
                              ? v.product_title_ru
                              : lang == "uz"
                              ? v.product_title_uz
                              : lang == "en"
                              ? v.product_title_en
                              : ""}
                          </Typography>
                          <Typography
                            sx={{ mt: 2, fontSize: "14px", color: "gray" }}
                          >
                            {lang == "ru"
                              ? v.product_information_ru?.split(" ").length > 10
                                ? v.product_information_ru
                                    ?.split(" ")
                                    .splice(0, 10)
                                    .join(" ") + "..."
                                : v.product_information_ru
                              : lang == "uz"
                              ? v.product_information_uz?.split(" ").length > 10
                                ? v.product_information_uz
                                    ?.split(" ")
                                    .splice(0, 10)
                                    .join(" ") + "..."
                                : v.product_information_uz
                              : lang == "en"
                              ? v.product_information_en?.split(" ").length > 10
                                ? v.product_information_en
                                    ?.split(" ")
                                    .splice(0, 10)
                                    .join(" ") + "..."
                                : v.product_information_en
                              : ""}
                          </Typography>
                        </Box>
                      </Box>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
