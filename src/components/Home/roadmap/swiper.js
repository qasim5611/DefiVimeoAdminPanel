import React, { useRef, useState } from "react";
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import { Navigation } from "swiper";
import useMediaQuery from '@mui/material/useMediaQuery';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
export default () => {
    const matches = useMediaQuery('(min-width:950px)');
    let road1 = [
        'Market Research',
        'Project Concept',
        'Website Launch',
        'Whitepaper',
        'Team Organization',
        'Early Marketing Plan',
        'Socials Development',
        'Community Event',
        'Contract Deployment',
        'Awareness Campaign',
    ]

    let road2 = [
        'Ads and Promotions',
        'Audit and KYC',
        'Whitelist Competition',
        'Referral Contest ',
        'Private Presale',
        'Marketing Campaign',
        'Pinksale Presale',
        'Pancakeswap Launch',
        'NFT Marketplace Launch',
        'Staking Platform Launch',
        'Live Cat Marketplace Launch',
        'Cat Lovers Community Launch'
    ]

    let road3 = [
        'Mega Buyback',
        'CMC & CG Listing',
        'More Partnership',
        'YouTube Promotion',
        'Big Marketing Campaign',
        'Centralized Exchanges',
        'Influencer Collaboration',
        'Continuous Content Release',
        'Regular Marketing',
        'Regular Buyback',
        'Stay Tuned for The Next Update'
    ]
    return <>
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }}

            modules={[Navigation]}
        >
            <SwiperSlide>
                <Box pt={3} pl={3}>
                    <Button
                        sx={{
                            border: "1.5px solid white",
                            borderRadius: "30px",
                            fontFamily: 'Helvetica',
                            backgroundImage:
                                "linear-gradient(34deg, rgba(255,82,0,1) 0%, rgba(255,157,9,1) 100%)",
                            color: '#371F00',
                            fontSize: { xs: "18px", md: "26px" },
                            fontWeight: "900",
                            boxShadow: 4,
                            width: { md: '40%', xs: '50%' }
                        }}>
                        PHASE ONE
                    </Button>
                    <Box pt={2}>
                        {
                            road1.map((text, i) => {
                                return <Box pl={1} pt={1} key={i}>
                                    <Box component='span' style={{ color: 'green' }}>&#10004; </Box>
                                    <Box pl={1} component='span' sx={{
                                        color: '#371F00'
                                    }}> {text}</Box>
                                </Box>
                            })
                        }
                    </Box>

                </Box>
            </SwiperSlide>

            <SwiperSlide>
                <Box pt={3} pl={3}>
                    <Button
                        sx={{
                            border: "1.5px solid white",
                            borderRadius: "30px",
                            fontFamily: 'Helvetica',
                            backgroundImage:
                                "linear-gradient(34deg, rgba(255,82,0,1) 0%, rgba(255,157,9,1) 100%)",
                            color: '#371F00',
                            fontSize: { xs: "18px", md: "26px" },
                            fontWeight: "900",
                            boxShadow: 4,
                            width: { md: '40%', xs: '50%' }
                        }}>
                        PHASE TWO
                    </Button>
                    <Box pt={2}>
                        {
                            road2.map((text, i) => {
                                return <Box pl={1} pt={1} key={i}>
                                    <Box component='span' style={{ color: 'green' }}>&#10004; </Box>
                                    <Box pl={1} component='span' sx={{
                                        color: '#371F00'
                                    }}> {text}</Box>
                                </Box>
                            })
                        }
                    </Box>

                </Box>
            </SwiperSlide>

            <SwiperSlide>
                <Box pt={3} pl={3}>
                    <Button
                        sx={{
                            border: "1.5px solid white",
                            borderRadius: "30px",
                            fontFamily: 'Helvetica',
                            backgroundImage:
                                "linear-gradient(34deg, rgba(255,82,0,1) 0%, rgba(255,157,9,1) 100%)",
                            color: '#371F00',
                            fontSize: { xs: "18px", md: "26px" },
                            fontWeight: "900",
                            boxShadow: 4,
                            width: { md: '43%', xs: '53%' }
                        }}>
                        PHASE THREE
                    </Button>
                    <Box pt={2}>
                        {
                            road3.map((text, i) => {
                                return <Box pl={1} pt={1} key={i}>
                                    <Box component='span' style={{ color: 'green' }}>&#10004; </Box>
                                    <Box pl={1} component='span' sx={{
                                        color: '#371F00'
                                    }}> {text}</Box>
                                </Box>
                            })
                        }
                    </Box>

                </Box>
            </SwiperSlide>

            <Box pt={3} sx={{ display: 'flex', justifyContent: 'center' }}>


                <FaArrowCircleLeft className="swiper-button-prev"
                    style={{
                        marginRight: '10px',
                        color: '#FF5100',
                        fontSize: '2rem ',

                    }}
                />
                <FaArrowCircleRight className="swiper-button-next"
                    style={{
                        color: '#FF5100',
                        fontSize: '2rem ',
                    }}
                />


            </Box>
        </Swiper>
    </>
}