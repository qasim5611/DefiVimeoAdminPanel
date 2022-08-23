import React from "react";
import {Box,Container,Divider,Grid,Typography,useMediaQuery,} from "@mui/material";
import Bounce from "react-reveal/Bounce";
import animate2 from "../../../images/animate2.png";
import animation from "../../../images/animation.png";
import total from "../../../images/total.png";
import "./Tokenomics.css";
import Tokenomicsgraph from "./Tokenomicsgraph";

const data = [
  { sale: "Private Presale 20.00%", price: "4,200,000,000 RDC" },
  { sale: "Public Presale 34.29%", price: "7,200,000,000 RDC" },
  { sale: "Liquidity On PCS 24.34%", price: "5,112,000,000 RDC" },
  { sale: "Marketing 7.14%", price: "1,500,000,000 RDC" },
  { sale: "Developer Team 7.14%", price: "1,500,000,000 RDC" },
  { sale: "Bouns & Giveaway 7.09%", price: "1,488,000,000 RDC" },
];

const Tokenomics = () => {
  const check = useMediaQuery("(max-Width:900px)");
  const check2 = useMediaQuery("(max-Width:470px)");


  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, rgba(255,189,117,1) 0%, rgba(255,250,246,1) 100%)",
        // backgroundColor: "#ffcc94",
        pb: "30px",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",
            left: "0rem",
            right: "0rem",
          }}
        >
          <img
            className="animation"
            src={animation}
            alt=""
            style={{
              position: "absolute",
              width: check ? "70px" : "100px",
              // height:check?"70px": "100px",
              top: check ? "-2rem" : "-3rem",
              right: "0rem",
              transform: " translateY(-50%) translateX(-10%)",
            }}
          />

          <img
            src={animate2}
            alt=""
            style={{
              width: check ? "70px" : "100px",
              // height:check?"70px": "100px",
              top: "-.1rem",
              left: "50%",
              transform: " translateY(-50%) translateX(0%)",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            // mb:"5%"
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "28px", md: "38px" },
              fontWeight: "Bold",
              color: "#894500",
              mb: "5%",
              fontFamily: "MilkyNice",
            }}
          >
            Tokenomics
            <Box display="flex" justifyContent="center">
              <Divider
                style={{
                  width: "130px",
                  height: "3px",
                  backgroundColor: "#894500",
                }}
              />
            </Box>
          </Typography>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} md={6} align="center">
              <Bounce left>
              <Box>
              <img src={total} alt=""  
              style={{
                    maxWidth: "450px",
                    width: "100%"
                  }}/>
              </Box>
               {/* <Box 
                  style={{
                    // maxWidth: "450px",
                    // width: "100%",
                    position: "relative",
                    left: "0rem",
                    right: "0rem",
                    zIndex:10,
                  }}
                >
                <Box>
                <Tokenomicsgraph />
                </Box>

                  <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  background: "#E48100",
                  maxHeight: "180px",
                  maxWidth: "180px",
                  height: "100%",
                  width: "100%",
                  borderRadius:"100px",
                  // zIndex:-1,
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%,-50%)",
                  boxShadow: "-2px 3px 10px 5px #724000",
                }}
              >
              <Typography sx={{
                fontSize:{xs:"20px", md:"32px"},
                fontWeight:"bold"
              }}>
              Total
              </Typography>
              <Typography sx={{
                fontSize:"14px",
                fontWeight:"bold"
              }}>
              2,14,000,000 RDC

            </Typography> 
            </Box> 
            </Box>  */}
              </Bounce>
            </Grid>
            <Grid item xs={12} md={6} align="center">
              <Bounce right>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  spacing={3}
                >
                  {data.map((item, index) => (
                    <Grid item xs={12} md={6} align="center">
                      <Box
                        sx={{
                          backgroundColor: "white",
                          maxWidth: "340px",
                          minHeight: "100px",
                          borderRadius: "20px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                          // mx:"10px"
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            // justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            sx={{
                              width: "15px",
                              height: "15px",
                              background:
                                index === 0
                                  ? "#F1B20A"
                                  : index === 1
                                  ? "#24A4E5"
                                  : index === 2
                                  ? "#BD742F"
                                  : index === 3
                                  ? "#464FF9"
                                  : index === 4
                                  ? "#F77D00"
                                  : index === 5
                                  ? "black"
                                  : "",
                              borderRadius: "30px",
                              mr: "4px",
                            }}
                          ></Box>
                          <Box>
                            <Typography
                              sx={{
                                fontSize: "18px",
                                color: "#903800",
                                // fontWeight: "bold",
                                fontFamily: "Helvetice-Bold",
                              }}
                            >
                              {item.sale}
                            </Typography>
                          </Box>
                        </Box>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            color: "#903800",
                            // fontWeight: "bold",
                            fontFamily: "Helvetice-Bold",
                          }}
                        >
                          {item.price}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Bounce>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            position: "relative",
            left: "0rem",
            right: "0rem",
          }}
        >
          <img
            className="animation"
            src={animation}
            alt=""
            style={{
              position: "absolute",
              width: check ? "70px" : "100px",
              top: check ? "0rem" : "-1rem",
              left: "0%",
              transform: " translateY(-50%) translateX(50%)",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Tokenomics;
