import { Box, Container, Grid, Typography, Button  } from "@mui/material";
import React from "react";
import Bounce from "react-reveal/Bounce";
import { Link } from "react-router-dom";

export default function RagDollCatNFT() {
  return (
    <Box
      style={{
        background:
          "linear-gradient(180deg, rgba(255,189,117,1) 0%, rgba(255,250,246,1) 100%)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "100% 100%",
        backgroundSize: "cover"
      }}
    >
      <Container>
        <Box pt={3} pb={6}>
          <Grid container alignItems="center">
            <Grid item xs={12} lg={6} md={12} sm={12} order={{ xs: 2, sm: 1 }}>
              <Bounce left>
                <Box>
                  <img
                    alt=""
                    style={{
                      maxWidth: "600px",
                      width: "100%"
                    }}
                    src='/images/bannerNo1.png'
                  />
                </Box>
              </Bounce>
            </Grid>

            <Grid item xs={12} lg={6} md={12} sm={12} order={{ xs: 2, sm: 1 }}>
              <Bounce right>
                <Box p={3}>
                  <Typography
                    sx={{
                      fontFamily: "MilkyNice",
                      fontSize: "33px",
                      fontWeight: "700",
                      color: "#371F00",
                      py: "3%",
                      px: "3%"
                    }}
                  >
                    RAGDOLL CAT NFT MARKETPLACE
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "justify",
                      fontSize: "17px",
                      fontFamily: 'Helvetice-Bold',
                      color: "#903800",
                      py: "1%",
                      px: "3%"
                    }}
                  >
                    If you are familiar with NFT or, you have interest to
                    create, buy, sell, store or, collect NFTs, "Ragdoll Cat NFT
                    marketplace" is your gateway to participating in the
                    purchase and sale of these digital assets - from art to
                    music to entire virtual worlds. Think of NFT marketplaces as
                    your Amazon of the digital realm. User-friendly platform to
                    buy/sell NFTs. Create and sell your NFT & get 5% Lifetime
                    royalty from every sale. Buy NFTs to get passive income.
                  </Typography>

                  <Box
                    border="3px solid #FF8504"
                    borderRadius="30px"
                    mt={2}
                    sx={{ width: "fit-content" }}
                  >
                    <Link to="/login" style={{ textDecoration: "none" }}>
                      <Button
                        sx={{
                          textTransform: "capitalize",
                          border: "1.5px solid white",
                          borderRadius: "30px",
                          width: "200px",
                          backgroundImage:
                            "linear-gradient(to right, #FF8605, #FFAB24)",
                          fontSize: { xs: "12px", md: "14px" },
                          // fontWeight: "700",
                          fontFamily: 'Helvetice-Bold',

                          boxShadow: 4
                        }}
                      >
                        View NFT Marketplace
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Bounce>
            </Grid>
          </Grid>

          <Grid container alignItems="center" mt={3}>
            <Grid item xs={12} lg={6} md={12} sm={12} order={{ xs: 2, sm: 1 }}>
              <Bounce left>
                <Box p={3}>
                  <Typography
                    sx={{
                      fontFamily: "MilkyNice",
                      fontSize: "33px",
                      fontWeight: "700",
                      color: "#371F00",
                      py: "3%",
                      px: "3%",
                      textAlign: "right"
                    }}
                  >
                    LIVE CAT MARKETPLACE
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "justify",
                      fontSize: "17px",
                      // fontWeight: "500",
                      fontFamily: 'Helvetice-Bold',
                      color: "#903800",
                      py: "1%",
                      px: "3%"
                    }}
                  >
                    Ragdoll Cat "Live Cat Marketplace", which is a
                    non-profitable social business model marketplace or platform
                    that believes to provide forever homes to cats. This is the
                    first and only place where you can seek cats for sale or buy
                    cats for sale online worldwide from respected and informed
                    registered cat breeders. Just visit our live cat marketplace
                    now to buy or sell cats from anywhere. The easiest way to
                    find your cat's nearby buyer/seller.
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "right"
                    }}
                  >
                    <Box
                      border="3px solid #FF8504"
                      borderRadius="30px"
                      mt={2}
                      sx={{ width: "fit-content" }}
                    >
                      <Link to="/login" style={{ textDecoration: "none" }}>
                        <Button
                          sx={{
                            textTransform: "capitalize",
                            border: "1.5px solid white",
                            borderRadius: "30px",
                            width: "200px",
                            backgroundImage:
                              "linear-gradient(to right, #FF8605, #FFAB24)",
                            fontSize: { xs: "12px", md: "14px" },
                            // fontWeight: "700",
                            fontFamily: 'Helvetice-Bold',
                            boxShadow: 4,
                            textAlign: "right"
                          }}
                        >
                          Live Cat Marketplace
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Bounce>
            </Grid>

            <Grid item xs={12} lg={6} md={12} sm={12} order={{ xs: 1, sm: 2 }}>
              <Bounce right>
                <Box>
                  <img
                    alt=""
                    style={{
                      maxWidth: "600px",
                      width: "100%"
                    }}
                    src='/images/bannerNo2.png'
                  />
                </Box>
              </Bounce>
            </Grid>
          </Grid>

          <Grid container alignItems="center" mt={4}>
            <Grid item xs={12} lg={6} md={12} sm={12}>
              <Bounce left>
                <Box>
                  <img
                    alt=""
                    style={{
                      maxWidth: "600px",
                      width: "100%"
                    }}
                    src='/images/bannerNo3.png'
                  />
                </Box>
              </Bounce>
            </Grid>

            <Grid item xs={12} lg={6} md={12} sm={12}>
              <Bounce right>
                <Box p={3}>
                  <Typography
                    sx={{
                      fontFamily: "MilkyNice",
                      fontSize: "33px",
                      fontWeight: "700",
                      color: "#371F00",
                      py: "3%",
                      px: "3%"
                    }}
                  >
                    CAT LOVERS COMMUNITY
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "justify",
                      fontSize: "17px",
                      // fontWeight: "500",
                      fontFamily: 'Helvetice-Bold',
                      color: "#903800",
                      py: "1%",
                      px: "3%"
                    }}
                  >
                    Welcome to the absolute community of cat lovers. Cats are
                    one of the most beautiful creatures made by god. They are
                    cute, small, gentle animals. People who are loving cats are
                    highly invited to visit our cat lover community. Just share
                    ideas, experiences, difficulties, solutions & cute pictures
                    of cats. Discuss and ask any questions related to cats. If
                    you really a cat lover, just join the community now!
                  </Typography>

                  <Box
                    border="3px solid #FF8504"
                    borderRadius="30px"
                    mt={3}
                    sx={{ width: "fit-content" }}
                  >
                    <Link to="/login" style={{ textDecoration: "none" }}>
                      <Button
                        sx={{
                          textTransform: "capitalize",
                          border: "1.5px solid white",
                          borderRadius: "30px",
                          width: "200px",
                          backgroundImage:
                            "linear-gradient(to right, #FF8605, #FFAB24)",
                          fontSize: { xs: "12px", md: "14px" },
                          // fontWeight: "700",
                          fontFamily: 'Helvetice-Bold',
                          boxShadow: 4
                        }}
                      >
                        Cat Lovers Community
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Bounce>
            </Grid>
          </Grid>

          <Grid container alignItems="center" mt={4}>
            <Grid item xs={12} lg={6} md={12} sm={12} order={{ xs: 2, sm: 1 }}>
              <Bounce left>
                <Box p={3}>
                  <Typography
                    sx={{
                      fontFamily: "MilkyNice",
                      fontSize: "33px",
                      fontWeight: "700",
                      color: "#371F00",
                      py: "3%",
                      px: "3%",
                      textAlign: "right"
                    }}
                  >
                    STAKE & EARN
                  </Typography>
                  <Typography
                    sx={{
                      // justifyContent: 'flex-start',
                      textAlign: "justify",
                      fontSize: "17px",
                      // fontWeight: "500",
                      fontFamily: 'Helvetice-Bold',
                      color: "#903800",
                      py: "1%",
                      px: "3%"
                    }}
                  >
                    Like a lot of effects in the cryptocurrency field, staking
                    can be a complicated idea or a simple bone depending on how
                    numerous situations of the understanding you want to
                    unleash. For a lot of dealers and investors, knowing that
                    staking is a way of earning prices for holding certain
                    cryptocurrencies is the crucial takeaway. But indeed, if
                    you're just looking to earn some staking prices, it's useful
                    to understand at least a little bit about how and why it
                    works the way it does. Stake your RDC to make the volume
                    more without any mistrustfulness.
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "right"
                    }}
                  >
                    <Box
                      border="3px solid #FF8504"
                      borderRadius="30px"
                      mt={2}
                      sx={{ width: "fit-content" }}
                    >
                      <Link to="/login" style={{ textDecoration: "none" }}>
                        <Button
                          sx={{
                            textTransform: "capitalize",
                            border: "1.5px solid white",
                            borderRadius: "30px",
                            width: "200px",
                            backgroundImage:
                              "linear-gradient(to right, #FF8605, #FFAB24)",
                            fontSize: { xs: "12px", md: "14px" },
                            // fontWeight: "700",
                            fontFamily: 'Helvetice-Bold',
                            boxShadow: 4
                          }}
                        >
                          Stake & Earn
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Bounce>
            </Grid>

            <Grid item xs={12} lg={6} md={12} sm={12} order={{ xs: 1, sm: 2 }}>
              <Bounce right>
                <Box>
                  <img
                    alt=""
                    style={{
                      maxWidth: "600px",
                      width: "100%"
                    }}
                    src='/images/bannerNo4.png'
                  />
                </Box>
              </Bounce>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
