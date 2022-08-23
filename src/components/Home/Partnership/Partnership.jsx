import {
  Container,
  Box,
  Grid,
  Typography,
  useMediaQuery,
  Divider
} from "@mui/material";
import React from "react";
import logo1 from "../../../images/partnership/img1.png"
import logo2 from "../../../images/partnership/img2.png"
import logo3 from "../../../images/partnership/img3.png"
import logo4 from "../../../images/partnership/img4.png"
import logo5 from "../../../images/partnership/img5.png"
import logo6 from "../../../images/partnership/img6.png"
import logo7 from "../../../images/partnership/img7.png"
import logo8 from "../../../images/partnership/img8.png"
import logo9 from "../../../images/partnership/img9.png"
import logo10 from "../../../images/partnership/img10.png"
import logo11 from "../../../images/partnership/img11.png"
import logo12 from "../../../images/partnership/img12.png"
import logo13 from "../../../images/partnership/img13.png"
import logo14 from "../../../images/partnership/img14.png"
import logo15 from "../../../images/partnership/img15.png"
import logo16 from "../../../images/partnership/img16.png"
import Bounce from "react-reveal/Bounce";
import SwiperFile from './swiper'

const Partnership = () => {
  const check = useMediaQuery("(max-Width:900px)");
  const loop1 = [logo1, logo2, logo3, logo4 , logo5, logo6, logo7, logo8]
  const loop2 = [logo9, logo10, logo11, logo12 ,logo13, logo14, logo15, logo16  ]
  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, rgba(255,189,117,1) 0%, rgba(255,250,246,1) 100%)",
        pb: "4%"
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <Typography
            sx={{
              fontSize: check ? "28px" : "38px",
              fontWeight: "Bold",
              color: "#894500",
              my: "4%",
              fontFamily: "MilkyNice"
            }}
          >
            Partnerships
            <Box display="flex" justifyContent="center">
              <Divider
                style={{
                  width: "130px",
                  height: "3px",
                  backgroundColor: "#894500"
                }}
              />
            </Box>
          </Typography>

        </Box>
      </Container>
      <Container maxWidth="lg" >
        <Box
          sx={{
            p: "20px",
            backgroundColor: "rgba(0,0,0,0.3)",
            borderRadius : '15px'
          }}
        >
          <Box py={1}>
            <SwiperFile data={loop1} number={1} />
          </Box>
          <Box pb={1}>
            <SwiperFile data={loop2} number={2} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Partnership;
