import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import { Button, Grid, useMediaQuery } from "@mui/material";
import BelowHead from "../../belowHead/belowHead";
import { Bounce } from "react-reveal";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { AppContext } from "../../../utils";
import { HashLink } from "react-router-hash-link";

export default function Home() {
  const matches = useMediaQuery("(min-width: 750px)");
  const { account, connect, disconnect } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <Box
      pt={15}
      sx={{
        backgroundImage:
          "url(/images/vector.png), linear-gradient(180deg, rgba(255,189,117,1) 0%, rgba(255,197,134,1) 3%, rgba(255,203,146,1) 59%, rgba(255,250,246,1) 100%, rgba(255,255,255,1) 100%) "
      }}
    >
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={matches ? 6 : 12}>
            <Box
              style={{
                background:
                  "linear-gradient(113.1deg, #FF5701 35%, #FF7504 38.5%, #FF7104 60.53%, #FF9608 78%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textTransform: "uppercase"
              }}
              fontSize={{ xs: "40px", sm: "50px", md: "60px" }}
              fontFamily="MilkyNice"
              mt={{ xs: 0, md: 7 }}
            >
              good luck <br />
              in the year of the ragdoll cat
            </Box>

            <Box display="flex" textAlign="center" mt={4}>
              <Grid container spacing={{ xs: 2, sm: 3, md: 5 }}>
                <Grid item xs={6} sm={6} md={6}>
                  <Box
                    sx={{
                      width: "fit-content",
                      border: "3px solid #FF8504",
                      borderRadius: "30px",
                      margin: "auto",
                      boxShadow: 4
                    }}
                  >
                    <Link to="/login" style={{ textDecoration: "none" }}>
                      <Button
                        sx={{
                          textTransform: "capitalize",
                          border: "1px solid white",
                          borderRadius: "30px",
                          width: { md: "200px", sm: "170px", xs: "140px" },
                          backgroundImage:
                            "linear-gradient(to right, #FF8605, #FFAB24)",
                          fontSize: { xs: "10px", sm: "12px", md: "14px" },

                          fontFamily: "Helvetice-Bold"
                        }}
                      >
                        view NFT marketplace
                      </Button>
                    </Link>
                  </Box>
                </Grid>

                <Grid item xs={6} sm={6} md={6}>
                  <Box
                    sx={{
                      width: "fit-content",
                      border: "3px solid #FF8504",
                      borderRadius: "30px",
                      margin: "auto",
                      boxShadow: 4
                    }}
                  >
                    <Link to="/login" style={{ textDecoration: "none" }}>
                      <Button
                        sx={{
                          textTransform: "capitalize",
                          border: "1px solid white",
                          borderRadius: "30px",
                          width: { md: "200px", sm: "170px", xs: "140px" },
                          backgroundImage:
                            "linear-gradient(to right, #FF8605, #FFAB24)",
                          fontSize: { xs: "10px", sm: "12px", md: "14px" },

                          fontFamily: "Helvetice-Bold"
                        }}
                      >
                        live cat marketplace
                      </Button>
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Box display="flex" textAlign="center" mt={4}>
              <Grid container spacing={{ xs: 2, sm: 3, md: 5 }}>
                <Grid item xs={6} sm={6} md={6}>
                  <Box
                    sx={{
                      width: "fit-content",
                      border: "3px solid #FF8504",
                      borderRadius: "30px",
                      margin: "auto",
                      boxShadow: 4
                    }}
                  >
                    <Link to="/login" style={{ textDecoration: "none" }}>
                      <Button
                        sx={{
                          textTransform: "capitalize",
                          border: "1px solid white",
                          borderRadius: "30px",
                          width: { md: "200px", sm: "170px", xs: "140px" },
                          backgroundImage:
                            "linear-gradient(to right, #FF8605, #FFAB24)",
                          fontSize: { xs: "10px", sm: "12px", md: "14px" },

                          fontFamily: "Helvetice-Bold"
                        }}
                      >
                        cat lovers community
                      </Button>
                    </Link>
                  </Box>
                </Grid>

                <Grid item xs={6} sm={6} md={6}>
                  <Box
                    sx={{
                      width: "fit-content",
                      border: "3px solid #FF8504",
                      borderRadius: "30px",
                      margin: "auto",
                      boxShadow: 4
                    }}
                  >
                    {account ? (
                      <HashLink
                        smooth
                        to="/home#Private Presale"
                        style={{ textDecoration: "none", color: "#0C0C0C" }}
                      >
                        <Box
                          py={0.9}
                          sx={{
                            cursor: "pointer",
                            border: "1px solid white",
                            borderRadius: "30px",
                            width: { md: "200px", sm: "170px", xs: "140px" },
                            backgroundImage:
                              "linear-gradient(to right, #FF8605, #FFAB24)",
                            fontSize: { xs: "10px", sm: "12px", md: "14px" },
                            fontFamily: "Helvetice-Bold"
                          }}
                          // onClick={() => disconnect()}
                          style={{ zIndex: 1 }}
                        >
                          {/* {account.slice(0, 4) + "..." + account.slice(-4)} */}
                          Buy RDC Now
                        </Box>
                      </HashLink>
                    ) : (
                      <Box
                        zIndex={1}
                        py={0.9}
                        color="#0C0C0C"
                        sx={{
                          cursor: "pointer",
                          border: "1px solid white",
                          borderRadius: "30px",
                          width: { md: "200px", sm: "170px", xs: "140px" },
                          backgroundImage:
                            "linear-gradient(to right, #FF8605, #FFAB24)",
                          fontSize: { xs: "10px", sm: "12px", md: "14px" },
                          fontFamily: "Helvetice-Bold"
                        }}
                        onClick={() => connect()}
                      >
                        Buy RDC Now
                      </Box>
                    )}
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Box display="flex" justifyContent="center" py={4}>
              <Box
                sx={{
                  width: "fit-content",
                  border: "3px solid #FF8504",
                  borderRadius: "30px",
                  margin: "auto",
                  boxShadow: 4
                }}
              >
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      textTransform: "capitalize",
                      border: "1px solid white",
                      borderRadius: "30px",
                      width: { md: "200px", sm: "170px", xs: "140px" },
                      backgroundImage:
                        "linear-gradient(to right, #FF8605, #FFAB24)",
                      fontSize: { xs: "10px", sm: "12px", md: "14px" },

                      fontFamily: "Helvetice-Bold"
                    }}
                  >
                    stake & earn
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={matches ? 6 : 12}>
            <Bounce top>
              <Box>
                <img src="/images/homeLogo.gif" width="100%" />
              </Box>
            </Bounce>
          </Grid>
        </Grid>
      </Container>
      <BelowHead />
    </Box>
  );
}
