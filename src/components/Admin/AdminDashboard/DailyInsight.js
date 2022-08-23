import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import CallMadeIcon from "@mui/icons-material/CallMade";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import DailyInsightChart from "./dailyInsightChart";

export default () => {
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item md={8} xs={12}>
          {/* ---------Chart BOX---------- */}
          <Box bgcolor="white" border="1px solid #DBDFEA" borderRadius="4px">
            <Container>
              <Box py={3}>
                <Box>
                  <Box color="#364a63" fontSize="16px" fontWeight="700">
                    Daily Insight
                  </Box>
                  <Box color="#8094ae" fontSize="12px">
                    Daywise overall deposite & withdraw
                  </Box>
                </Box>

                {/* ------Chart making----- */}
                <Box mt={3} mb={4}>
                  <DailyInsightChart />
                </Box>

                {/* -----cards with charts ----------*/}
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <Box border="2px solid #1C8AFF" borderRadius="4px" py={3}>
                      <Container>
                        <Box color="#1C8AFF" display="flex" alignItems="center">
                          <Box fontSize="1.5rem" fontWeight="700">
                            1,428,322.93
                          </Box>
                          <Box fontSize="20px" ml={1}>
                            USD
                          </Box>
                        </Box>

                        <Box display="flex" alignItems="center" mt={0.5}>
                          <Box color="#80B1D8" fontSize="12px">
                            Last month
                          </Box>
                          <Box
                            ml={1}
                            color="#364a63"
                            fontSize="12px"
                            fontWeight="600"
                          >
                            2,310.65 USD
                          </Box>
                        </Box>

                        <Box display="flex" alignItems="center" mt={1}>
                          <Box
                            width="23px"
                            height="23px"
                            bgcolor="#1C8AFF"
                            borderRadius="50px"
                            textAlign="center"
                          >
                            <CallReceivedIcon fontSize="small" />
                          </Box>
                          <Box
                            color="#8094ae"
                            fontSize="14px"
                            fontWeight="600"
                            ml={2}
                          >
                            Deposit
                          </Box>
                        </Box>
                      </Container>
                    </Box>
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <Box border="2px solid #ED756C" borderRadius="4px" py={3}>
                      <Container>
                        <Box color="#ED756C" display="flex" alignItems="center">
                          <Box fontSize="1.5rem" fontWeight="700">
                            105,024.55
                          </Box>
                          <Box fontSize="20px" ml={1}>
                            USD
                          </Box>
                        </Box>

                        <Box display="flex" alignItems="center" mt={0.5}>
                          <Box color="#80B1D8" fontSize="12px">
                            Last month
                          </Box>
                          <Box
                            ml={1}
                            color="#364a63"
                            fontSize="12px"
                            fontWeight="600"
                          >
                            772.98 USD
                          </Box>
                        </Box>

                        <Box display="flex" alignItems="center" mt={1}>
                          <Box
                            width="23px"
                            height="23px"
                            bgcolor="#ED756C"
                            borderRadius="50px"
                            textAlign="center"
                          >
                            <CallMadeIcon fontSize="small" />
                          </Box>
                          <Box
                            color="#8094ae"
                            fontSize="14px"
                            fontWeight="600"
                            ml={2}
                          >
                            Withdraw
                          </Box>
                        </Box>
                      </Container>
                    </Box>
                  </Grid>
                </Grid>
                {/* -----END cards with charts ----------*/}
              </Box>
            </Container>
          </Box>
          {/* ---------END Chart BOX---------- */}
        </Grid>

        <Grid item md={4} xs={12}>
          {/* -----cards of deposite and withdraw with chart element------- */}
          <Box
            bgcolor="white"
            border="1px solid #DBDFEA"
            borderRadius="4px"
            py={3}
          >
            <Container>
              <Box color="#52648C" fontSize="14px" fontWeight="600">
                Total Deposite
              </Box>

              <Box display="flex" alignItems="center" mt={1}>
                <Box color="#364A63" fontSize="24px" fontWeight="550">
                  1,482,322.93
                </Box>
                <Box color="#526484" fontSize="24px" ml={1}>
                  USD
                </Box>
              </Box>

              <Box mt={2}>
                <Box color="#8094ae" fontSize="11px" mb={0.5}>
                  THIS MONTH
                </Box>
                <Box fontSize="15px" display="flex" alignItems="center">
                  <Box color="#364a63" mr={1}>
                    10.00
                  </Box>
                  <Box color="#e85347">
                    <ArrowDownwardIcon fontSize="14px" />
                    23006%
                  </Box>
                </Box>
              </Box>
              <Box mt={1.5}>
                <Box color="#8094ae" fontSize="11px" mb={0.5}>
                  THIS WEEK
                </Box>
                <Box fontSize="15px" display="flex" alignItems="center">
                  <Box color="#364a63" mr={1}>
                    0.00
                  </Box>
                  <Box color="#e85347">
                    <ArrowDownwardIcon fontSize="14px" />
                    100%
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>

          <Box
            bgcolor="white"
            border="1px solid #DBDFEA"
            borderRadius="4px"
            py={3}
            mt={5}
          >
            <Container>
              <Box color="#52648C" fontSize="14px" fontWeight="600">
                Total Withdraw
              </Box>

              <Box display="flex" alignItems="center" mt={1}>
                <Box color="#364A63" fontSize="24px" fontWeight="550">
                  105,024.55
                </Box>
                <Box color="#526484" fontSize="24px" ml={1}>
                  USD
                </Box>
              </Box>

              <Box mt={2}>
                <Box color="#8094ae" fontSize="11px" mb={0.5}>
                  THIS MONTH
                </Box>
                <Box fontSize="15px" display="flex" alignItems="center">
                  <Box color="#364a63" mr={1}>
                    0.00
                  </Box>
                  <Box color="#e85347">
                    <ArrowDownwardIcon fontSize="14px" />
                    100%
                  </Box>
                </Box>
              </Box>
              <Box mt={1.5}>
                <Box color="#8094ae" fontSize="11px" mb={0.5}>
                  THIS WEEK
                </Box>
                <Box color="#364a63" fontSize="15px">
                  0.00
                </Box>
              </Box>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
