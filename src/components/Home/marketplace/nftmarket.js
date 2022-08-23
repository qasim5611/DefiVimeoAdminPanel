import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import { Bounce } from "react-reveal";
import SwiperFile from "./swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import { Autoplay, Navigation } from "swiper";
import "swiper/modules/pagination/pagination.min.css";
import { HashLink } from "react-router-hash-link";

export default () => {
  const loop1 = [1, 2, 3, 4, 5];
  const loop2 = [6, 7, 8, 9, 10];
  const loop3 = [11, 12, 13, 14, 15];
  const banner = [
    "banner 1",
    "banner 2",
    "banner 3",
    "banner 4",
    "banner 5",
    "banner 6"
  ];
  const matches1 = useMediaQuery("(min-width:1050px)");
  // const matches2 = useMediaQuery("(min-Width:790px)");

  return (
    <Box
      py={5}
      sx={{
        background:
          "linear-gradient(180deg, rgba(255,189,117,1) 0%, rgba(255,197,134,1) 3%, rgba(255,203,146,1) 59%, rgba(255,250,246,1) 100%, rgba(255,255,255,1) 100%)"
      }}
    >
      <Container>
        <Box sx={{ textAlign: "center" }}>
          <Box
            sx={{
              color: "#894500",
              fontSize: { md: "36px", xs: "27px" },
              fontWeight: "bold",
              fontFamily: "MilkyNice"
            }}
          >
            NFT Marketplace
          </Box>
          <Box display="flex" justifyContent="center">
            <Divider
              style={{
                width: "120px",
                height: "3px",
                backgroundColor: "#894500"
              }}
            />
          </Box>
        </Box>

        <Bounce left>
          <Box
            mt={5}
            sx={{
              borderRadius: "5px",
              border: "2px solid white",
              position: "relative"
            }}
          >
            <Box
              sx={{
                // fontWeight: "bolder",
                color: "#894500",
                textAlign: "center",
                border: "2px solid white",
                width: "200px",
                margin: "auto",
                borderRadius: "5px",
                background:
                  "linear-gradient(34deg, rgba(255,82,0,1) 0%, rgba(255,157,9,1) 100%)",
                position: "absolute",
                left: "0rem",
                right: "0rem",
                top: "-1rem",
                fontFamily: "Helvetice-Bold"
              }}
            >
              Promoted
            </Box>

            <SwiperFile data={loop1} number={1} />
          </Box>
        </Bounce>

        <Bounce right>
          <Box
            mt={5}
            sx={{
              borderRadius: "5px",
              border: "2px solid white",
              position: "relative"
            }}
          >
            <Box
              sx={{
                // fontWeight: "bolder",
                color: "#894500",
                textAlign: "center",
                border: "2px solid white",
                width: "200px",
                margin: "auto",
                borderRadius: "5px",
                background:
                  "linear-gradient(34deg, rgba(255,82,0,1) 0%, rgba(255,157,9,1) 100%)",
                position: "absolute",
                left: "0rem",
                right: "0rem",
                top: "-1rem",
                fontFamily: "Helvetice-Bold"
              }}
            >
              Popular
            </Box>

            <SwiperFile data={loop2} number={2} />
          </Box>
        </Bounce>
        <Bounce left>
          <Box
            mt={5}
            sx={{
              borderRadius: "5px",
              border: "2px solid white",
              position: "relative"
            }}
          >
            <Box
              sx={{
                // fontWeight: "bolder",
                color: "#894500",
                textAlign: "center",
                border: "2px solid white",
                width: "200px",
                margin: "auto",
                borderRadius: "5px",
                background:
                  "linear-gradient(34deg, rgba(255,82,0,1) 0%, rgba(255,157,9,1) 100%)",
                position: "absolute",
                left: "0rem",
                right: "0rem",
                top: "-1rem",
                fontFamily: "Helvetice-Bold"
              }}
            >
              Recent Upload
            </Box>

            <SwiperFile data={loop3} number={3} />
          </Box>
        </Bounce>
      </Container>

      <Container>
        <HashLink to="/#BuyRDC" smooth>
          <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            }}
            autoplay={{
              delay: 2500
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            {banner.map((image) => {
              return (
                <SwiperSlide>
                  <Box
                    mt={3}
                    display={matches1 ? "flex" : "none"}
                    justifyContent="center"
                  >
                    <img src={`/images/970x90/${image}.jpg`} />
                  </Box>

                  <Box
                    mt={3}
                    justifyContent="center"
                    display={matches1 ? "none" : "flex"}
                  >
                    <img src={`/images/730x90/${image}.jpg`} width="100%" />
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </HashLink>
      </Container>
    </Box>
  );
};
