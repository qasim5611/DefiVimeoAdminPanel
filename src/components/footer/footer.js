import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Button } from "@mui/material";
import { Box } from "@mui/system";
import { Divider } from "@mui/material";
import { Container } from "@mui/material";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const products = [
  "RDC Token",
  "NFT Marketplace",
  "Live Cat Marketplace",
  "Cat Lovers Community",
  "Stake & Earn",
  "Blog Post",
];
const Documents = ["Audit", "RoadMap", "WhitePaper", "FAQ", "Business", "Logo"];
const community = [
  "Twitter",
  "Telegram",
  "Facebook",
  "Instagram",
  "YouTube",
  "Bitcointalk",
];
const link1 = [
  "NFT Marketplace",
  "Tokenomics",
  "Tax",
  "Public Presale",
  "Dev Team",
  "Blog",
];
const link2 = [
  "About",
  "Token Info",
  "Private Presale",
  "Documents",
  "Listings",
  "Road Map",
];
export default () => {
  const GetgnrlsiteData = useSelector(
    (state) => state.adminDashboard_red.GetgnrlsiteData
  );
  console.log("GetgnrlData Responce is", GetgnrlsiteData);
  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(180deg, rgba(255,189,117,1) 0%, rgba(255,197,134,1) 3%, rgba(255,203,146,1) 59%, rgba(255,250,246,1) 100%, rgba(255,255,255,1) 100%) ",
        height: "100%",
        paddingTop: "3%",
      }}
    >
      <Box style={{ display: "flex", justifyContent: "space-around" }}>
        <Container>
          <Grid container spacing={5} justifyContent="center">
            <Grid item xs={12} md={3}>
              <Box textAlign="center">
                <Box>
                  <img src="/images/footer.gif" width="80%" />
                </Box>

                <Box
                  sx={{
                    width: "fit-content",
                    border: "3px solid #FF8504",
                    borderRadius: "30px",
                    margin: "auto",
                    boxShadow: 4,
                  }}
                  mt={4}
                >
                  <Button
                    sx={{
                      border: "1.5px solid white",
                      borderRadius: "30px",
                      width: "200px",
                      backgroundImage:
                        "linear-gradient(to right, #FF8605, #FFAB24)",
                      fontSize: { xs: "14px", md: "18px" },
                      fontWeight: "900",
                      fontFamily: "Helvetica",
                      color: "#371F00",
                    }}
                  >
                    BUY RDC
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={6} md={3}>
              <Box textAlign="center">
                <Box
                  color="#371F00"
                  fontSize={{ xs: "14px", md: "18px" }}
                  fontWeight="800"
                  fontFamily="MilkyNice"
                >
                  Quick Links
                </Box>
                <Box display="flex" justifyContent="center">
                  <Divider
                    variant="middle"
                    style={{
                      backgroundColor: "#FFA82A",
                      width: "30%",
                      height: "3px",
                    }}
                  />
                </Box>
              </Box>

              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt={2}
              >
                <Box>
                  {link1.map((data) => {
                    return (
                      <HashLink
                        smooth
                        to={`/home#${data}`}
                        style={{ textDecoration: "none", color: "#371F00" }}
                      >
                        <Box
                          mt={0.5}
                          mr={2}
                          sx={{
                            fontSize: { md: "14px", xs: "12px" },
                            fontWeight: "700",
                            fontFamily: "Helvetica",
                          }}
                          textAlign="Right"
                        >
                          {data}
                        </Box>
                      </HashLink>
                    );
                  })}
                </Box>

                <Box>
                  <Divider
                    style={{
                      backgroundColor: "#FFA82A",
                      width: "4px",
                      height: "170px",
                    }}
                  />
                </Box>
                <Box>
                  {link2.map((data) => {
                    return (
                      <HashLink
                        smooth
                        to={`/home#${data.toLowerCase()}`}
                        style={{ textDecoration: "none", color: "#371F00" }}
                      >
                        <Box
                          mt={0.5}
                          ml={2}
                          sx={{
                            fontSize: { md: "14px", xs: "12px" },
                            fontWeight: "700",
                            fontFamily: "Helvetica",
                          }}
                          textAlign="left"
                        >
                          {data}
                        </Box>
                      </HashLink>
                    );
                  })}
                </Box>
              </Box>
            </Grid>

            <Grid item xs={6} md={2}>
              <Box textAlign="center">
                <Box
                  color="#371F00"
                  fontSize={{ xs: "14px", md: "18px" }}
                  fontWeight="800"
                  fontFamily="MilkyNice"
                >
                  Utilities
                </Box>
                <Box display="flex" justifyContent="center">
                  <Divider
                    variant="middle"
                    style={{
                      backgroundColor: "#FFA82A",
                      width: "35%",
                      height: "3px",
                    }}
                  />
                </Box>
              </Box>

              <Box color="#371F00" mt={2}>
                {products.map((data) => {
                  return (
                    <Box
                      mt={0.5}
                      sx={{
                        fontSize: { md: "14px", xs: "12px" },
                        fontWeight: "700",
                        fontFamily: "Helvetica",
                      }}
                      textAlign="center"
                    >
                      {data}
                    </Box>
                  );
                })}
              </Box>
            </Grid>
            <Grid item xs={6} md={2}>
              <Box textAlign="center">
                <Box
                  color="#371F00"
                  fontSize={{ xs: "14px", md: "18px" }}
                  fontWeight="800"
                  fontFamily="MilkyNice"
                >
                  Documents
                </Box>
                <Box display="flex" justifyContent="center">
                  <Divider
                    variant="middle"
                    style={{
                      backgroundColor: "#FFA82A",
                      width: "50%",
                      height: "3px",
                    }}
                  />
                </Box>
              </Box>

              <Box mt={2}>
                {Documents.map((data) => {
                  return (
                    <HashLink
                      to={`/${data.toLowerCase()}`}
                      style={{ textDecoration: "none", color: "#371F00" }}
                    >
                      <Box
                        mt={0.5}
                        sx={{
                          fontSize: { md: "14px", xs: "12px" },
                          fontWeight: "700",
                          fontFamily: "Helvetica",
                        }}
                        textAlign="center"
                      >
                        {data}
                      </Box>
                    </HashLink>
                  );
                })}
              </Box>
            </Grid>
            <Grid item xs={6} md={2}>
              <Box textAlign="center">
                <Box
                  color="#371F00"
                  fontSize={{ xs: "14px", md: "18px" }}
                  fontWeight="800"
                  fontFamily="MilkyNice"
                >
                  Community
                </Box>
                <Box display="flex" justifyContent="center">
                  <Divider
                    variant="middle"
                    style={{
                      backgroundColor: "#FFA82A",
                      width: "50%",
                      height: "3px",
                    }}
                  />
                </Box>
              </Box>

              <Box color="#371F00" mt={2}>
                {community.map((data) => {
                  return (
                    <Box
                      mt={0.5}
                      sx={{
                        fontSize: { md: "14px", xs: "12px" },
                        fontFamily: "Helvetica",
                        fontWeight: "700",
                      }}
                      textAlign="center"
                    >
                      {data}
                    </Box>
                  );
                })}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box bgcolor="#FFBD72" p={0.5} mt={5}>
        <Container>
          {GetgnrlsiteData ? (
            <div>
              {GetgnrlsiteData.map((item, index) => {
                return (
                  <Box
                    display="flex"
                    justifyContent="space-around"
                    alignItems="center"
                  >
                    <Box
                      component="p"
                      sx={{
                        fontSize: { md: "10px", xs: "7px" },
                        fontFamily: "Helvetica",
                        fontWeight: "800",
                        textAlign: "center",
                        color: "#371F00",
                      }}
                    >
                      {item.copyright}
                    </Box>
                    <Box
                      sx={{
                        fontSize: { md: "10px", xs: "7px" },
                        fontWeight: "800",
                        fontFamily: "Helvetica",
                        textAlign: "center",
                        color: "#371F00",
                      }}
                    >
                      Privacy & Terms
                    </Box>
                  </Box>
                );
              })}
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </Container>
      </Box>
    </Box>
  );
};
