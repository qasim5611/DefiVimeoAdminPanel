import { Button, Container, Grid, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DailyInsight from "./DailyInsight";
import UserActivities from "./UserActivities";

import Transaction from "./transaction";
export default () => {
  const matches = useMediaQuery("(min-width: 600px)");

  return (
    <Box pb={20} bgcolor="#F5F6FA">
      <Container>
        {/*---------- Main heading Box ---------- */}
        <Box
          display={matches ? "flex" : "none"}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box mt={4}>
            <Box color="#364A63" fontSize="1.75rem" fontWeight="550">
              Overview
            </Box>
            <Box color="#8094ae " fontSize="14px">
              Here is an insight of what's going on.
            </Box>
          </Box>

          <Box>
            <Button
              variant="contained"
              startIcon={
                <SwapHorizIcon
                  style={{
                    border: "1px solid white",
                    borderRadius: "4px",
                    width: "18px",
                    fontSize: "14px"
                  }}
                />
              }
              style={{
                textTransform: "capitalize",
                backgroundColor: "#037DFF",
                fontWeight: "700",
                fontSize: "13px"
              }}
            >
              view transaction
            </Button>
          </Box>
        </Box>
        {/* heading for small screen */}
        <Box
          display={matches ? "none" : "flex"}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Box color="#364A63" fontSize="1.75rem" fontWeight="500">
              Overview
            </Box>
            <Box color="#8099C2" fontSize=".875rem">
              Here is an insight of what's going on.
            </Box>
          </Box>

          <Box>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#037DFF",
                height: "35px"
              }}
            >
              <SwapHorizIcon
                style={{
                  border: "1px solid white",
                  borderRadius: "4px",
                  width: "25px",
                  fontSize: "18px"
                }}
              />
            </Button>
          </Box>
        </Box>
        {/*----------END Main heading Box ---------- */}
        {/*---------- Contact us Box ---------- */}
        <Box
          bgcolor="white"
          color="#C3463C"
          px={3}
          py={2}
          mb={2}
          mt={4}
          fontSize=".875rem"
          sx={{
            border: "1px solid #F7C1BD",
            borderRadius: "4px",
            textAlign: "left"
          }}
        >
          All the additional
          <span
            style={{
              backgroundColor: "#1c2b46",
              color: "white",
              fontSize: ".675rem",
              padding: "4px",
              borderRadius: "30px",
              marginRight: "5px",
              marginLeft: "5px"
            }}
          >
            Module
          </span>
          and
          <span
            style={{
              backgroundColor: "#E85347",
              color: "white",
              fontSize: ".675rem",
              padding: "4px",
              borderRadius: "30px",
              marginRight: "5px",
              marginLeft: "5px"
            }}
          >
            Add-ons
          </span>
          are NOT part of main product. Please feel free to
          <span
            style={{
              marginRight: "5px",
              marginLeft: "5px",
              color: "#9C3830",
              fontWeight: "800",
              cursor: "pointer",
              textDecoration: "underline #9C3830"
            }}
          >
            contact us
          </span>
          for more information or to get those.
        </Box>
        {/*---------- End of Contact Box ---------- */}
        {/* --------- Attention Box -----------*/}
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection={{ md: "row", xs: "column" }}
          alignItems="center"
          bgcolor="white"
          px={3}
          py={1.5}
          mb={4}
          sx={{
            border: "1px solid #6CBBF7",
            borderRadius: "4px"
          }}
        >
          <Box
            color="#8099C2"
            fontSize="14px"
            width={{ md: "60%", xs: "100%" }}
          >
            <InfoOutlinedIcon
              sx={{
                color: "#0894FF",
                verticalAlign: "-4px",
                marginRight: "2%"
              }}
              fontSize="small"
            />
            <span style={{ color: "#0894FF" }}>Attention:</span> You have few
            pending request, that need to review.
          </Box>

          <Box color="#0894FF" width={{ xs: "100%", md: "40%" }}>
            <Grid container>
              <Grid item xs={6} md={4}>
                <Box
                  sx={{ cursor: "pointer", textTransform: "uppercase" }}
                  fontSize="13px"
                  fontWeight="600"
                >
                  878 deposite
                </Box>
              </Grid>
              <Grid item xs={6} md={4}>
                <Box
                  sx={{ cursor: "pointer", textTransform: "uppercase" }}
                  fontSize="13px"
                  fontWeight="600"
                >
                  21 referral
                </Box>
              </Grid>
              <Grid item xs={6} md={4}>
                <Box
                  sx={{ cursor: "pointer", textTransform: "uppercase" }}
                  fontSize="13px"
                  fontWeight="600"
                >
                  143 withdraw
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* --------- End Attention Box -----------*/}

        <DailyInsight />

        <Transaction />
        <UserActivities />
      </Container>
    </Box>
  );
};
