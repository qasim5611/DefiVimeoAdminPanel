import React, { useRef, useState } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Autoplay, Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
// import { Navigation,  } from "swiper";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";

export default ({ data, number }) => {
  const matches = useMediaQuery("(min-width:950px)");
  const matches1 = useMediaQuery("(min-width:650px)");

  return (
    <>
      <Swiper
        slidesPerView={matches ? 5 : matches1 ? 4 : 3}
        spaceBetween={matches ? 15 : 10}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
          reverseDirection: number % 2 == 0 ? false : true
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        style={{
          marginLeft: matches ? "1%" : matches1 ? "3.7%" : "-0.5%"
          // paddingRight: '5%'
        }}
      >
        {data.map((num, i) => {
          return (
            <SwiperSlide key={i}>
              <Grid px={1} pt={3} item md={2} xs={4}>
                <Box>
                  <img
                    src={`/images/image${num}.png`}
                    height={matches ? "180rem" : matches1 ? '140rem' : "90rem"}
                    width={matches ? "180rem" : matches1 ? '140rem' : "90rem"}
                  />
                </Box>
              </Grid>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
