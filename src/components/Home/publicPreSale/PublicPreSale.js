import { Container, Grid, Typography, Button, Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Bounce from "react-reveal/Bounce";

export default function PublicPreSale() {
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
        <Box sx={{ textAlign: "center", px: "10%", py: "5%" }}>
          <Box>
            <Typography
              sx={{
                fontFamily: "MilkyNice",
                fontSize: { xs: "25px", md: "36px" },
                fontWeight: "700",
                color: "#894500"
              }}
            >
              Public Presale on Pinksale
              <Box display="flex" justifyContent="center">
                <Divider
                  style={{
                    width: "150px",
                    height: "3px",
                    backgroundColor: "#894500"
                  }}
                />
              </Box>
            </Typography>
          </Box>

          <Bounce right>
            <Box
              sx={{
                border: "3px solid #FF7F00",
                borderRadius: "10px",
                color: "#371F00",
                mt: "3%"
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Helvetica",
                  fontSize: "25px",
                  fontWeight: "700"
                }}
              >
                Soft Cap 300 BNB, Hard Cap 600 BNB
              </Typography>
            </Box>

            <Box
              sx={{
                border: "3px solid #FF7F00",
                borderRadius: "10px",
                color: "#371F00",
                mt: "1%"
              }}
            >
              <Typography
                sx={{
                  fontSize: "25px",
                  fontWeight: "700"
                }}
              >
                71% Liquidity Locked For 365 Days
              </Typography>
            </Box>

            <Box
              sx={{
                border: "3px solid #FF7F00",
                borderRadius: "10px",
                color: "#371F00",
                mt: "1%"
              }}
            >
              <Typography
                sx={{
                  fontSize: "25px",
                  fontWeight: "700"
                }}
              >
                Minimum Buy 0.10 BNB, Maximum Buy 3 BNB
              </Typography>
            </Box>

            <Box
              sx={{
                border: "3px solid #FF7F00",
                borderRadius: "10px",
                color: "#371F00",
                mt: "1%"
              }}
            >
              <Typography
                sx={{
                  fontSize: "25px",
                  fontWeight: "700"
                }}
              >
                Public Sale Price; 1 BNB = 12,000,000 RDC
              </Typography>
            </Box>

            <Box
              sx={{
                border: "3px solid #FF7F00",
                borderRadius: "10px",
                color: "#371F00",
                mt: "1%"
              }}
            >
              <Typography
                sx={{
                  fontSize: "25px",
                  fontWeight: "700"
                }}
              >
                Pancakeswap starting price; 1 BNB = 10,000,000 RDC
              </Typography>
            </Box>
          </Bounce>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Box
              border="3px solid #FF8504"
              borderRadius="30px"
              mt={3}
              sx={{ width: "fit-content" }}
            >
              <a
                style={{ textDecoration: "none" }}
                href="https://www.pinksale.finance/#/launchpad/0x55B8fD4b83566DF555e98816D09360f9c9A14d3E?chain=BSC"
                target="_blank"
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
                    py: "5%"
                  }}
                >
                  BUY NOW
                </Button>
              </a>
            </Box>
          </Box>
          {/*------------ whitelisted button-------- */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Box
              border="3px solid #FF8504"
              borderRadius="30px"
              mt={1.5}
              px={0.5}
              sx={{
                width: "fit-content",
                backgroundImage: "linear-gradient(to right, #FF8605, #FFAB24)"
              }}
            >
              <a
                style={{ textDecoration: "none" }}
                href="https://t.me/RDCwhitelistBot"
                target="_blank"
              >
                <Button
                  sx={{
                    textTransform: "capitalize",
                    border: "1.5px solid white",
                    borderRadius: "30px",
                    width: "100%",
                    fontSize: { xs: "14px", md: "18px" },
                    fontWeight: "700",
                    boxShadow: 4,
                    textAlign: "center",
                    py: "2%"
                  }}
                >
                  Be Whitelisted Here Now To Get 10% Extra On Public Presale.
                </Button>
              </a>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
