import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography
} from "@mui/material";
import React from "react";
import { useMediaQuery } from "@mui/material";
import Bounce from "react-reveal/Bounce";
import animation from "../../../images/animation.png";

const About = () => {
  const check = useMediaQuery("(max-Width:900px)");
  // const check2 = useMediaQuery("(max-Width:452px)");

  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, rgba(255,189,117,1) 0%, rgba(255,250,246,1) 100%)",
        backgroundColor: "#ffcc94"
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",
            left: "0rem",
            right: "0rem"
          }}
        >
          <img
            className="animation"
            src={animation}
            alt=""
            style={{
              position: "absolute",
              width: check ? "70px" : "100px",
              top: check ? "-2rem" : "-3rem",
              right: "0rem",
              transform: " translateY(-50%) translateX(-10%)"
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            pb: check ? "13%" : "5%"
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "28px", md: "38px" },
              color: "#894500",
              my: "5%",
              fontFamily: "MilkyNice"
            }}
          >
            About
            <Box display="flex" justifyContent="center">
              <Divider
                sx={{
                  width: { md: "110px", xs: "80px" },
                  height: "3px",
                  backgroundColor: "#894500"
                }}
              />
            </Box>
          </Typography>
          <Grid container justifyContent="center" spacing={3}>
            <Grid item xs={12} md={6} align="center">
              <Bounce left>
                <Box
                  pt={2}
                  pb={{ xs: 0, md: 7 }}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "400px",
                    height: "100%",
                    border: "2px solid #ff9d09",
                    my: 3,
                    position: "relative",
                    left: "0rem",
                    right: "0rem",
                    borderRadius: "40px"
                  }}
                >
                  <Button
                    sx={{
                      background:
                        "linear-gradient(34deg, rgba(255,82,0,1) 0%, rgba(255,157,9,1) 100%)",
                      fontSize: check ? "16" : "20px",
                      width: "60%",

                      fontWeight: "bold",
                      borderRadius: "30px",
                      py: "5px",
                      px: "10px",
                      fontFamily: "MilkyNice",
                      position: "absolute",
                      top: "-.1rem",
                      left: "50%",
                      transform: " translateY(-50%) translateX(-50%)"
                    }}
                  >
                    RagDoll Cat
                  </Button>

                  <Typography
                    sx={{
                      p: "20px",
                      fontSize: { md: "20px", xs: "16px" },
                      color: "#903800",
                      fontFamily: "Helvetica",
                      textAlign: "justify"
                    }}
                  >
                    The "Ragdoll Cat" is a cat strain with a color point fleece
                    and blue eyes. Its form is large and muscular and its fleece
                    is silky soft and semi-longhair. In the 1960s, Ragdolls were
                    developed by American breeder Ann Baker. They're best known
                    for their amenable and placid disposition and tender nature.
                    Ragdolls are large, sweet pussycats who are incredibly
                    patient and gentle. Despite their assessing size, these
                    pussycats are a calm and quiet strain who love nothing
                    further than playing and snuggling with their pet parents.
                  </Typography>
                </Box>
              </Bounce>
            </Grid>
            <Grid item xs={12} md={6} align="center">
              <Bounce right>
                <Box
                  pt={2}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "400px",
                    height: "100%",
                    border: "2px solid #ff9d09",
                    borderRadius: "40px",
                    my: 3,
                    position: "relative",
                    left: "0rem",
                    right: "0rem"
                  }}
                >
                  <Button
                    sx={{
                      background:
                        "linear-gradient(34deg, rgba(255,82,0,1) 0%, rgba(255,157,9,1) 100%)",
                      fontSize: check ? "16" : "20px",
                      width: "60%",
                      fontWeight: "bold",
                      borderRadius: "30px",
                      py: "5px",
                      px: "10px",
                      fontFamily: "MilkyNice",
                      position: "absolute",
                      top: "-.1rem",
                      left: "50%",
                      transform: " translateY(-50%) translateX(-50%)"
                    }}
                  >
                    RagDoll Cat NFT
                  </Button>

                  <Typography
                    sx={{
                      p: "20px",
                      fontSize: { md: "20px", xs: "16px" },
                      color: "#903800",
                      fontFamily: "Helvetica",
                      textAlign: "justify"
                    }}
                  >
                    Ragdoll Cat NFT is a project based on the NFT marketplace.
                    It's had some other Important Utilities, like; "Live Cat
                    Marketplace", where users can post ads to buy/sell cats, and
                    the first-ever online cat shop to get local buyers/sellers.
                    "Cat Lovers Community" is A Public Chatting Group for
                    Registered Users, all of whom are cat lovers. "Stake & Earn"
                    There have different staking packages of RDC. " Ragdoll Cat
                    (RDC)" is our base Token based on BEP20, It's usable
                    everywhere on our project. Also, we have an attractive
                    referral program. In addition, we have our own blog and
                    strong social channels.
                  </Typography>
                </Box>
              </Bounce>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
