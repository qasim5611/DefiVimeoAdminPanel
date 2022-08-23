import { Container, Grid, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import HelpIcon from "@mui/icons-material/Help";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Mar 8",
    Referrals: 0,
    Members: 6
  },
  {
    name: "Mar 9",
    Referrals: 1,
    Members: 8
  },
  {
    name: "Mar 10",
    Referrals: 0,
    Members: 12
  },
  {
    name: "Mar 11",
    Referrals: 0,
    Members: 11
  },
  {
    name: "Mar 12",
    Referrals: 0,
    Members: 15
  },
  {
    name: "Mar 13",
    Referrals: 0,
    Members: 10
  },
  {
    name: "Mar 14",
    Referrals: 2,
    Members: 16
  },
  {
    name: "Mar 15",
    Referrals: 1,
    Members: 7
  },
  {
    name: "Mar 16",
    Referrals: 0,
    Members: 5
  },
  {
    name: "Mar 17",
    Referrals: 0,
    Members: 5
  },
  {
    name: "Mar 18",
    Referrals: 0,
    Members: 10
  },
  {
    name: "Mar 19",
    Referrals: 0,
    Members: 5
  },
  {
    name: "Mar 20",
    Referrals: 0,
    Members: 6
  },
  {
    name: "Mar 21",
    Referrals: 0,
    Members: 10
  },
  {
    name: "Mar 22",
    Referrals: 0,
    Members: 10
  },
  {
    name: "Mar 23",
    Referrals: 0,
    Members: 13
  },
  {
    name: "Mar 24",
    Referrals: 0,
    Members: 10
  },
  {
    name: "Mar 25",
    Referrals: 0,
    Members: 14
  },
  {
    name: "Mar 26",
    Referrals: 0,
    Members: 19
  },
  {
    name: "Mar 27",
    Referrals: 0,
    Members: 10
  },
  {
    name: "Mar 28",
    Referrals: 0,
    Members: 11
  },
  {
    name: "Mar 29",
    Referrals: 0,
    Members: 13
  },
  {
    name: "Mar 30",
    Referrals: 0,
    Members: 17
  },
  {
    name: "Mar 31",
    Referrals: 0,
    Members: 9
  },
  {
    name: "Apr 1",
    Referrals: 0,
    Members: 10
  },
  {
    name: "Apr 2",
    Referrals: 0,
    Members: 8
  },
  {
    name: "Apr 3",
    Referrals: 0,
    Members: 5
  },
  {
    name: "Apr 4",
    Referrals: 0,
    Members: 6
  },
  {
    name: "Apr 5",
    Referrals: 0,
    Members: 15
  },
  {
    name: "Apr 6",
    Referrals: 0,
    Members: 2
  }
];

export default () => {
  const matches = useMediaQuery("(min-width:750px)");
  return (
    <Box mt={4} pb={4}>
      <Grid container spacing={4}>
        <Grid item md={6} xs={12}>
          <Box
            border="1px solid #DBDFEA"
            borderRadius="4px"
            pt={3}
            bgcolor="white"
          >
            <Container>
              <Box>
                <Box color="#364a63" fontSize="16px" fontWeight="700">
                  User Activities
                </Box>
                <Box color="#8094ae" fontSize="12px">
                  In last 30 days
                  <InfoOutlinedIcon
                    fontSize="12px"
                    sx={{ verticalAlign: "-2px", marginLeft: "4px" }}
                  />
                </Box>
              </Box>

              <Box display="flex" alignItems="center" mt={2} mb={3}>
                <Box display="flex" alignContent="center">
                  <GroupOutlinedIcon sx={{ color: "#8094ae" }} />
                  <Box ml={1.5}>
                    <Box color="#526484" fontSize="1.125rem" fontWeight="550">
                      357
                    </Box>
                    <Box color="#8094ae" fontSize="12px">
                      Direct Join
                    </Box>
                  </Box>
                </Box>

                <Box display="flex" alignContent="center" ml={5}>
                  <ShareOutlinedIcon sx={{ color: "#8094ae" }} />
                  <Box ml={1.5}>
                    <Box color="#526484" fontSize="1.125rem" fontWeight="550">
                      7
                    </Box>
                    <Box color="#8094ae" fontSize="12px">
                      Referral Join
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Container>

            <ResponsiveContainer width="100%" height={120}>
              <BarChart data={data}>
                <XAxis dataKey="name" hide={true} />
                <YAxis hide={true} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#101924",
                    color: "white",
                    fontSize: "14px",
                    borderRadius: "5px",
                    height: "80px",
                    width: "120px"
                  }}
                  itemStyle={{ color: "white", fontSize: "11px" }}
                />
                <Bar dataKey="Members" stackId="a" fill="#798BFF" barSize={9} />
                <Bar
                  dataKey="Referrals"
                  stackId="a"
                  fill="#CCD4FF"
                  barSize={9}
                />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Grid>

        <Grid item md={6} xs={12}>
          <Box
            px={3}
            sx={{
              background: "white",
              border: 1,
              borderColor: "divider",
              borderRadius: "4px"
            }}
          >
            <Box
              py={2}
              sx={{
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <Box
                pt={2}
                sx={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "#364a63"
                }}
              >
                Total Stats
              </Box>
              <Box
                pt={2}
                sx={{
                  color: "#B6C6E5"
                }}
              >
                <HelpIcon />
              </Box>
            </Box>

            <Box
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
                    background: "#F7BF90"
                  }}
                ></Box>
                <Box pl={2}>
                  <Box
                    sx={{
                      color: "#8094ae",
                      fontSize: "12px"
                    }}
                  >
                    Deposits
                  </Box>
                  <Box
                    sx={{
                      color: "#526484",
                      fontWeight: "550",
                      fontSize: "18px"
                    }}
                  >
                    940
                  </Box>
                  <Box
                    sx={{
                      color: "#8094ae",
                      fontSize: "14px"
                    }}
                  >
                    12
                    <span style={{ fontSize: "12px", marginLeft: "5px" }}>
                      since last month
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
                    background: "#FFA9CE"
                  }}
                ></Box>
                <Box pl={2}>
                  <Box
                    sx={{
                      color: "#8094ae",
                      fontSize: "12px"
                    }}
                  >
                    Withdraws
                  </Box>
                  <Box
                    sx={{
                      color: "#526484",
                      fontWeight: "550",
                      fontSize: "18px"
                    }}
                  >
                    236
                  </Box>
                  <Box
                    sx={{
                      color: "#8094ae",
                      fontSize: "14px"
                    }}
                  >
                    16
                    <span style={{ fontSize: "12px", marginLeft: "5px" }}>
                      since last month
                    </span>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box
              py={3.64}
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
                    background: "#9096B6"
                  }}
                ></Box>
                <Box pl={2}>
                  <Box
                    sx={{
                      color: "#8094ae",
                      fontSize: "12px"
                    }}
                  >
                    Transactions
                  </Box>
                  <Box
                    sx={{
                      color: "#526484",
                      fontWeight: "550",
                      fontSize: "18px"
                    }}
                  >
                    11285
                  </Box>
                  <Box
                    sx={{
                      color: "#8094ae",
                      fontSize: "14px"
                    }}
                  >
                    3085
                    <span style={{ fontSize: "12px", marginLeft: "5px" }}>
                      since last month
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
                    background: "#9CABFF"
                  }}
                ></Box>
                <Box pl={2}>
                  <Box
                    sx={{
                      color: "#8094ae",
                      fontSize: "12px"
                    }}
                  >
                    Users
                  </Box>
                  <Box
                    sx={{
                      color: "#526484",
                      fontWeight: "550",
                      fontSize: "18px"
                    }}
                  >
                    3611
                  </Box>
                  <Box
                    sx={{
                      color: "#8094ae",
                      fontSize: "14px"
                    }}
                  >
                    358
                    <span style={{ fontSize: "12px", marginLeft: "5px" }}>
                      since last month
                    </span>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
