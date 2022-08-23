import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import banner from "../../../images/hue.png";
import logo from "../../../images/logo.png";
import Bounce from "react-reveal/Bounce";

import React from "react";

export default function OurDocuments() {
  return (
    <Box
      pb={5}
      style={{
        background:
          "linear-gradient(180deg, rgba(255,189,117,1) 0%, rgba(255,250,246,1) 100%)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "100% 100%",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <Box textAlign="center">
          <Box>
            <Typography
              sx={{
                fontFamily: "MilkyNice",
                fontSize: { xs: "27px", md: "36px" },
                fontWeight: "700",
                color: "#894500",
                pt: "2%",
              }}
            >
              Read Our Documents
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

          <Box>
            <Typography
              sx={{
                fontFamily: "Helvetica",
                fontSize: "18px",
                fontWeight: "550",
                color: "#903800",
              }}
              mt={3}
            >
              Here are our full documents that help you to understand about us
            </Typography>
          </Box>
        </Box>

        <Grid container mt={2} spacing={5}>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Box textAlign="center">
              <Bounce left>
                <Box
                  sx={{
                    backgroundImage: `url(${banner})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "100% 100%",
                    height: "30rem",
                  }}
                >
                  <Box p={5}>
                    <Typography
                      p={3}
                      borderBottom="5px solid white"
                      sx={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      WHITEPAPER
                    </Typography>
                  </Box>

                  <Box>
                    <img src={logo} />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    border="3px solid #FF8504"
                    borderRadius="30px"
                    mt={3}
                    sx={{ width: "fit-content" }}
                  >
                    <a
                      href="https://www.flipsnack.com/E77D96AA9F7/rdc-whitepaper.html"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <Button
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
                        WHITEPAPER
                      </Button>
                    </a>
                  </Box>
                </Box>
              </Bounce>
            </Box>
          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Box textAlign="center">
              <Bounce bottom>
                <Box
                  sx={{
                    backgroundImage: `url(${banner})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "100% 100%",
                    height: "30rem",
                  }}
                >
                  <Box p={5}>
                    <Typography
                      p={3}
                      borderBottom="5px solid white"
                      sx={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      ROADMAP
                    </Typography>
                  </Box>

                  <Box>
                    <img src={logo} />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    border="3px solid #FF8504"
                    borderRadius="30px"
                    mt={3}
                    sx={{ width: "fit-content" }}
                  >
                    <a
                      href="https://www.flipsnack.com/E77D96AA9F7/ragdoll-cat-nft-rdc-roadmap.html"
                      target='_blank'
                      style={{ textDecoration: "none" }}
                    >
                      <Button
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
                        ROADMAP
                      </Button>
                    </a>
                  </Box>
                </Box>
              </Bounce>
            </Box>
          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Box textAlign="center">
              <Bounce right>
                <Box
                  sx={{
                    backgroundImage: `url(${banner})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "100% 100%",
                    height: "30rem",
                  }}
                >
                  <Box p={5}>
                    <Typography
                      p={3}
                      borderBottom="5px solid white"
                      sx={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      AUDIT
                    </Typography>
                  </Box>

                  <Box>
                    <img src={logo} />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    border="3px solid #FF8504"
                    borderRadius="30px"
                    mt={3}
                    sx={{ width: "fit-content" }}
                  >
                    <Button
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
                      AUDIT
                    </Button>
                  </Box>
                </Box>
              </Bounce>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
