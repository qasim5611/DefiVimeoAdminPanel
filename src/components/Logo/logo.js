import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Divider,
  useMediaQuery
} from "@mui/material";
import BelowHead from "../belowHead/belowHead";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import { Autoplay, Navigation } from "swiper";
import "swiper/modules/pagination/pagination.min.css";
import { HashLink } from "react-router-hash-link";

import SelectUnstyled, {
  selectUnstyledClasses
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  optionUnstyledClasses
} from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled } from "@mui/system";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import Slider from "@mui/material/Slider";



const label = { inputProps: { "aria-label": "Checkbox demo" } };

// Select Field start //
const StyledButton = styled("button")(
  ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 7px;
    font-weight: 600;
    box-sizing: border-box;
    width:100%;
    min-height: calc(1.5em + 22px);
    background: #CCB69F;
    border: 0px solid #371F00;
    border-radius: 5px;
    margin-top:7px;
    padding: 10px;
    text-align: left;
    line-height: 1.5;
    color: #371F00;
    &:hover {
      cursor:pointer;
      background: #CCB69Fa1;
      
    }
    &.${selectUnstyledClasses.expanded} {
      &::after {
        content: '▴';
      }
    }
    &::after {
      content: '▾';
      float: right;
    }
    `
);

const StyledListbox = styled("ul")(
  ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 5px;
    margin: 10px 0;
    width:100%;
    background: #111122;
    border: 1px solid #41414E;
    border-radius: 0.75em;
    color: #ffffff;
    overflow: auto;
    outline: 0px;
    `
);


const CustomizedSlider = styled(Slider)`
  color: #20b2aa;

  :hover {
    color: #2e8b57;
  }
`;

export const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 0.45em;
    cursor: default;
    &:last-of-type {
      border-bottom: none;
    }
    &:hover:not(.${optionUnstyledClasses.disabled}) {
      background-color: #000000;
      color: #ffffff;
    }
    `
);
const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;
export const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components
  };
  return <SelectUnstyled {...props} ref={ref}  components={components} />;
});
//Select fields End //

export default function Logo() {
  const banner = [
    "banner 1",
    "banner 2",
    "banner 3",
    "banner 4",
    "banner 5",
    "banner 6"
  ];
  const matches1 = useMediaQuery("(min-width:1050px)");
  const [size, setSize] = React.useState();
  const [picSize, setPicSize] = React.useState(0);
  let [copied, setCopied] = React.useState(false);

  const handleChange = (event) => {
    if (event.target.value == size) {
      setSize(undefined);
    } else {
      setSize(event.target.value);
    }
  };

  const requireSize = (e) => {
    // if (picSize == 0){
    //   setPicSize(undefined)
    // }
    let myItem = e.split("x");
    setPicSize(myItem[0]);
  };

  const first = ["32x32", "100x100", "200x200", "500x500", "1000x1000"];
  const second = ["200x200", "500x500", "1000x1000", "2400x2400", "5000x5000"];

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      pb={5}
      pt={11.5}
      style={{
        background:
          "linear-gradient(180deg, rgba(255,189,117,1) 0%, rgba(255,250,246,1) 100%)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "100% 100%",
        backgroundSize: "cover",
      }}
    >
      <BelowHead />
      <Container maxWidth="lg">
        <Box display="flex" alignItems="center" flexDirection="column">
          <Box sx={{ textAlign: "center", px: "10%", py: "5%" }}>
            <Box>
              <Typography
                sx={{
                  fontFamily: "MilkyNice",
                  fontSize: { md: "36px", xs: "28" },
                  fontWeight: "700",
                  color: "#894500",
                }}
              >
                LOGO
                <Box display="flex" justifyContent="center">
                  <Divider
                    style={{
                      width: "150px",
                      height: "3px",
                      backgroundColor: "#894500",
                    }}
                  />
                </Box>
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", mt: "2%" }}>
              <FormGroup>
                <FormControlLabel
                  sx={{ color: "#371F00", fontFamily: "Helvatica" }}
                  control={<Checkbox defaultChecked />}
                  label="Check box to select a logo"
                />
              </FormGroup>
            </Box>
          </Box>

          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={5}
          >
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box
                sx={{
                  border: "2px solid #FF5801",
                  borderRadius: "7px",
                  height: "100%",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Checkbox
                    {...label}
                    value="0"
                    onChange={(e) => handleChange(e)}
                    checked={size == 0 ? true : false}
                  />
                </Box>
                <Box textAlign="center">
                  <img
                    style={{ maxWidth: "400px", width: "100%" }}
                    src="/images/1000.png"
                    alt=""
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box
                sx={{
                  border: "2px solid #FF5801",
                  borderRadius: "7px",
                  height: "100%",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Checkbox
                    {...label}
                    value="1"
                    onChange={(e) => handleChange(e)}
                    checked={size == 1 ? true : false}
                  />
                </Box>
                <Box textAlign="center">
                  <img
                    style={{ maxWidth: "400px", width: "100%" }}
                    src="/images/homeLogo.gif"
                    alt=""
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ display: "flex", justifyContent: "center", mt: "1%" }}>
            {size == undefined ? (
              <Box
                p={1}
                sx={{
                  background: "#CCB69F",
                  width: "fit-content",
                  color: "#371F00",
                  fontFamily: "Helvetice-Bold",
                }}
              >
                Select Required Size
              </Box>
            ) : (
              <CustomSelect defaultValue="0" onChange={requireSize}>
                <StyledOption value="0">Select Required Size</StyledOption>
                {size == 0
                  ? first.map((item, i) => {
                      return (
                        <StyledOption value={first[i]}>{item}</StyledOption>
                      );
                    })
                  : second.map((item, i) => {
                      return (
                        <StyledOption value={second[i]}>{item}</StyledOption>
                      );
                    })}
              </CustomSelect>
            )}
          </Box>

          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
            }}
          >
            <Grid item lg={5} md={5} sm={12} xs={12}>
              <Box
                display="flex"
                justifyContent={{ xs: "center", sm: "center", md: "flex-end" }}
                alignItems="center"
              >
                <Box
                  border="2.5px solid #C96100"
                  borderRadius="30px"
                  mt={3}
                  sx={{ width: "fit-content" }}
                >
                  <CopyToClipboard
                    text={
                      size == 0
                        ? `${window.location.origin}/images/${picSize}.png`
                        : `${window.location.origin}/images/${picSize}.gif`
                    }
                    onCopy={() => setCopied(true)}
                  >
                    <Button
                      disabled={
                        size == undefined || picSize == 0 ? true : false
                      }
                      sx={{
                        textTransform: "capitalize",
                        border: "1.5px solid white",
                        borderRadius: "30px",
                        width: "200px",
                        backgroundImage:
                          "linear-gradient(to right, #FF8605, #FFAB24)",
                        fontSize: { xs: "14px", md: "18px" },
                        fontWeight: "700",
                        boxShadow: 4,
                        textAlign: "center",
                        py: "5%",
                      }}
                    >
                      Copy URL
                    </Button>
                  </CopyToClipboard>
                </Box>
              </Box>
            </Grid>

            <Grid item lg={2} md={2} sm={12} xs={12}>
              <Box textAlign="center" mx={6} mt={{ xs: 3, sm: 3, md: 0 }}>
                <Typography color="#371F00">OR</Typography>
              </Box>
            </Grid>

            <Grid item lg={5} md={5} sm={12} xs={12}>
              <Box
                display="flex"
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "flex-start",
                }}
                alignItems="center"
              >
                <Box
                  border="2.5px solid #C96100"
                  borderRadius="30px"
                  mt={3}
                  sx={{ width: "fit-content" }}
                >
                  <Button
                    disabled={size == undefined || picSize == 0 ? true : false}
                    sx={{
                      textTransform: "capitalize",
                      border: "1.5px solid white",
                      borderRadius: "30px",
                      width: "200px",
                      backgroundImage:
                        "linear-gradient(to right, #FF8605, #FFAB24)",
                      fontSize: { xs: "14px", md: "18px" },
                      fontWeight: "700",
                      boxShadow: 4,
                      textAlign: "center",
                      py: "5%",
                    }}
                  >
                    <a
                      download
                      style={{
                        color:
                          size == undefined || picSize == 0
                            ? "#BD6E0D"
                            : "#371F00",
                        textDecoration: "none",
                      }}
                      href={
                        size == 0
                          ? `/images/${picSize}.png`
                          : `/images/${picSize}.gif`
                      }
                      title="RagdollCat"
                    >
                      DOWNLOAD
                    </a>
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container>
        <HashLink to="/#BuyRDC" smooth>
          <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{
              delay: 2500,
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
            style={{ zIndex: 0 }}
          >
            {banner.map((image) => {
              return (
                <SwiperSlide>
                  <Box
                    mt={5}
                    display={matches1 ? "flex" : "none"}
                    justifyContent="center"
                    position="relative"
                    sx={{ zIndex: -10 }}
                  >
                    <img style={{}} src={`/images/970x90/${image}.jpg`} />
                  </Box>

                  <Box
                    mt={5}
                    justifyContent="center"
                    position="relative"
                    display={matches1 ? "none" : "flex"}
                    sx={{ zIndex: -10 }}
                  >
                    <img
                      style={{}}
                      src={`/images/730x90/${image}.jpg`}
                      width="100%"
                    />
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </HashLink>
      </Container>
    </Box>
  );
}
