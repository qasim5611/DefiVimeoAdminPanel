import React, { useRef, useState } from "react";
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Autoplay, Navigation } from "swiper";
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
// import { Navigation,  } from "swiper";
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from "@mui/material/Grid";

export default ({ data , number }) => {
    const matches = useMediaQuery('(min-width:950px)');

    return <>
        <Swiper
            slidesPerView={matches ?  4 : 1 }
            spaceBetween={10}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: true,
                reverseDirection: number%2==0 ? false : true,

            }}

            modules={[Navigation, Autoplay]}
            className="mySwiper"
        >
            {
                data.map((num , i)=>{
                    return  <SwiperSlide key={1}>
                    <Box py={1} pl={0.5} sx={{
                        background : 'white',
                        // height : '8vh',
                        borderRadius : '10px'
                    }}>
                        <img src={num}
                            height={matches ? '100%' : '90%'}
                            width={matches ? '100%' : '95%'}
                        />
                    </Box>
            </SwiperSlide>
                })
            }
               
               

        </Swiper>
    </>
}