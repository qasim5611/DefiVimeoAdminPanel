import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Box, Container, Grid, useMediaQuery, Button } from "@mui/material";
import BarChart from "./BarChart";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import InvestOverview from "./investOverview";
import Investedscheme from "./Investedscheme";

const data = [
  { name: "Jupiter", value: 530 },
  { name: "Venus", value: 360 },
  { name: "Mercury", value: 30 },
  { name: "Others", value: 80 }
];
const COLORS = ["#9CABFF", "#B8ACFF", "#FFA9CE", "#F9DB7B"];

export default function ActivedInvestmentPlans() {
  const matches = useMediaQuery("(min-width:750px)");

  return (
    <Box bgcolor="#F5F6FA">
      <Container>
        {/*---------- Main heading Box ---------- */}
        <Box
          display={matches ? "flex" : "none"}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box mt={4}>
            <Box color="#364A63" fontSize="28px" fontWeight="500">
              Investment Insight
            </Box>
            <Box color="#8094ae " fontSize="14px">
              Here is an insight of what's going on.
            </Box>
          </Box>

          <Box>
            <Button
              variant="contained"
              startIcon={
                <CurrencyExchangeOutlinedIcon
                  style={{
                    width: "18px",
                    fontSize: "1.5rem"
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
              View Investment
            </Button>
          </Box>
        </Box>
        {/* heading for small screen */}
        <Box
          display={matches ? "none" : "flex"}
          justifyContent="space-between"
          alignItems="center"
          pt={4}
        >
          <Box>
            <Box color="#364A63" fontSize="23px" fontWeight="500">
              Investment Insight
            </Box>
            <Box color="#8099C2" fontSize="12px">
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
              <CurrencyExchangeOutlinedIcon
                style={{
                  width: "25px",
                  fontSize: "18px"
                }}
              />
            </Button>
          </Box>
        </Box>

        <Grid container spacing={4} mt={2}>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              sx={{
                border: 1,
                borderColor: "divider",
                borderRadius: "4px"
              }}
              bgcolor="white"
            >
              <Box px={3}>
                <Box
                  pt={2.5}
                  sx={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: "#364a63"
                  }}
                >
                  Actived Investment
                </Box>
                <Box
                  sx={{
                    color: "#8094ae",
                    fontSize: "12px"
                  }}
                >
                  The amount of investment currently actived.
                </Box>
              </Box>

              <Box display="flex" alignContent="center" mt={3} px={3}>
                {/* <ShareOutlinedIcon sx={{ color: "#8094ae" }} /> */}
                <Box>
                  <Box color="#526484" fontSize="24px" fontWeight="500">
                    59,742.00 USD
                  </Box>
                  <Box color="#526484" fontSize="15px" fontWeight="600">
                    4,342.0
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#8094ae",
                        fontWeight: "500"
                      }}
                    >
                      since last week
                    </span>
                  </Box>
                </Box>
              </Box>

              <Box display="flex" alignItems="center" mt={4} mb={3}>
                <Box display="flex" alignContent="center">
                  {/* <GroupOutlinedIcon sx={{ color: "#8094ae" }} /> */}
                  <Box ml={1.5}>
                    <Box color="#8094ae" fontSize="12px">
                      PROFIT TO PAY
                    </Box>
                    <Box color="#526484" fontSize="1.125rem" fontWeight="500">
                      59,603.2 USD
                    </Box>
                  </Box>
                </Box>

                <Box display="flex" alignContent="center" ml={5}>
                  {/* <ShareOutlinedIcon sx={{ color: "#8094ae" }} /> */}
                  <Box ml={1.5}>
                    <Box color="#8094ae" fontSize="12px">
                      ACTIVE PLANS
                    </Box>
                    <Box color="#526484" fontSize="1.125rem" fontWeight="500">
                      160
                      <span
                        style={{
                          fontSize: "13px",
                          color: "#1EE0AC",
                          marginLeft: "3px"
                        }}
                      >
                        47%
                      </span>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box mt={8}>
                <BarChart />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Box
              sx={{
                border: 1,
                borderColor: "divider",
                borderRadius: "4px"
              }}
              bgcolor="white"
            >
              <Box px={3}>
                <Box
                  pt={2}
                  sx={{
                    fontSize: "16px",
                    color: "#364a63"
                  }}
                >
                  Actived Investment Plan
                </Box>
                <Box
                  sx={{
                    color: "#8094ae",
                    fontSize: "12px"
                  }}
                >
                  The invested plans that currently actived.
                </Box>
              </Box>

              <Box>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={data}
                      innerRadius={60}
                      outerRadius={80}
                      //   fill="#8884d8"
                      paddingAngle={1}
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </Box>

              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                ml="20%"
              >
                <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      mt={0.5}
                      sx={{
                        width: matches ? "15px" : "20px",
                        height: "15px",
                        borderRadius: "5px",
                        background: "#9CABFF"
                      }}
                    ></Box>
                    <Box pl={2}>
                      <Box
                        sx={{
                          color: "#8094ae",
                          fontSize: { md: "15px", xs: "13px" }
                        }}
                      >
                        Jupiter
                      </Box>
                      <Box
                        sx={{
                          color: "#526484",
                          fontWeight: "550",
                          fontSize: "18px"
                        }}
                      >
                        86
                        <span
                          style={{
                            marginLeft: "5px",
                            color: "#8094ae",
                            fontSize: "13px"
                          }}
                        >
                          53%
                        </span>
                      </Box>
                    </Box>
                  </Box>

                  <Box pl={matches ? 10 : 3} sx={{ display: "flex" }}>
                    <Box
                      mt={0.5}
                      sx={{
                        width: matches ? "15px" : "18px",
                        height: "15px",
                        borderRadius: "5px",
                        background: "#B8ACFF"
                      }}
                    ></Box>
                    <Box pl={2}>
                      <Box
                        sx={{
                          color: "#8094ae",
                          fontSize: { md: "15px", xs: "13px" }
                        }}
                      >
                        Venus
                      </Box>
                      <Box
                        sx={{
                          color: "#526484",
                          fontWeight: "550",
                          fontSize: "18px"
                        }}
                      >
                        58
                        <span
                          style={{
                            marginLeft: "5px",
                            color: "#8094ae",
                            fontSize: "13px"
                          }}
                        >
                          36%
                        </span>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box
                  py={3}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start"
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Box
                      mt={0.5}
                      sx={{
                        width: matches ? "15px" : "20px",
                        height: "15px",
                        borderRadius: "5px",
                        background: "#FFA9CE"
                      }}
                    ></Box>
                    <Box pl={2}>
                      <Box
                        sx={{
                          color: "#8094ae",
                          fontSize: { md: "15px", xs: "13px" }
                        }}
                      >
                        Mercury
                      </Box>
                      <Box
                        sx={{
                          color: "#526484",
                          fontWeight: "550",
                          fontSize: "18px"
                        }}
                      >
                        6
                        <span
                          style={{
                            marginLeft: "5px",
                            color: "#8094ae",
                            fontSize: "13px"
                          }}
                        >
                          3%
                        </span>
                      </Box>
                    </Box>
                  </Box>

                  <Box pl={matches ? 8 : 3} sx={{ display: "flex" }}>
                    <Box
                      mt={0.5}
                      sx={{
                        width: matches ? "15px" : "18px",
                        height: "15px",
                        borderRadius: "5px",
                        background: "#F9DB7B"
                      }}
                    ></Box>
                    <Box pl={2}>
                      <Box
                        sx={{
                          color: "#8094ae",
                          fontSize: { md: "15px", xs: "13px" }
                        }}
                      >
                        others
                      </Box>
                      <Box
                        sx={{
                          color: "#526484",
                          fontWeight: "550",
                          fontSize: "18px"
                        }}
                      >
                        2
                        <span
                          style={{
                            marginLeft: "5px",
                            color: "#8094ae",
                            fontSize: "13px"
                          }}
                        >
                          8%
                        </span>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box mt={4} pb={10}>
          <Grid container justifyContent="center" spacing={4}>
            <Grid item xs={12} md={6}>
              <InvestOverview />
            </Grid>

            <Grid item xs={12} md={6}>
              <Investedscheme />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
