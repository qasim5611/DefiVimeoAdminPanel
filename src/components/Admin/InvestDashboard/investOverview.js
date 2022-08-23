import React from "react";
import { Box, Container, Grid, useMediaQuery, Button } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles({
  scroller: {
    width: "100%",
    background: "white",
    border: 1,
    borderColor: "divider",
    height: "65vh",
    overflowY: "scroll",
    scrollBehavior: "smooth",
    "&::-webkit-scrollbar": {
      width: "2px"
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1"
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#888"
    }
  }
});

export default () => {
  const [value, setValue] = React.useState(0);
  const matches = useMediaQuery("(min-width:950px)");
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        background: "white",
        border: 1,
        borderColor: "divider",
        borderRadius: "4px"
      }}
    >
      <Box px={3}>
        <Box
          pt={2}
          sx={{
            fontWeight: "bold",
            fontSize: "16px",
            color: "#364a63"
          }}
        >
          Actived Investment
        </Box>
        <Box
          mt={1}
          sx={{
            color: "#8094ae",
            fontSize: "12px"
          }}
        >
          The overview of investment.
          <Link
            to="/adminDashboard/investment/history"
            style={{ color: "#037DFF", textDecoration: "none" }}
          >
            <Box component="span" ml={0.5}>
              View Investment
            </Box>
          </Link>
        </Box>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          aria-label="scrollable auto tabs example"
          sx={{
            fontSize: { md: "14px", xs: "11px" },
            color: "#037DFF",
            borderBottom: 2,
            borderColor: "divider"
          }}
        >
          <Tab
            label="This Month"
            style={{
              color: value == 0 ? "#037DFF" : "black",
              borderBottom: value == 0 ? 4 : "none",
              borderColor: value == 0 ? "#037DFF" : "black"
            }}
            sx={{
              fontSize: "12px"
            }}
            {...a11yProps(0)}
          />
          <Tab
            label="This Year"
            style={{ color: value == 1 ? "#037DFF" : "black" }}
            {...a11yProps(1)}
            sx={{
              fontSize: "12px"
            }}
          />
          <Tab
            label="All Time"
            style={{ color: value == 2 ? "#037DFF" : "black" }}
            {...a11yProps(2)}
            sx={{
              fontSize: "12px"
            }}
          />
        </Tabs>
      </Box>

      <Box>
        <TabPanel value={value} index={0}>
          <Box px={3} pt={5}>
            <Box
              sx={{
                color: "#8094ae",
                fontSize: "13px"
              }}
            >
              Total Investment
            </Box>
            <Box
              pt={2}
              sx={{
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <Box>
                <Box
                  sx={{
                    fontWeight: "bold",
                    fontSize: { md: "18px", xs: "16px" },
                    color: "#364a63"
                  }}
                >
                  21,678.5
                  <Box component="span">USD</Box>
                  <Box
                    pl={1}
                    component="span"
                    sx={{
                      color: "red"
                    }}
                  >
                    <ArrowDownwardIcon style={{ paddingTop: "5px" }} /> 59%
                  </Box>
                </Box>
                <Box
                  sx={{
                    color: "#8094ae",
                    fontSize: "11px"
                  }}
                >
                  INVESTMENT AMOUNT
                </Box>
              </Box>

              <Box pr={matches ? 10 : 1}>
                <Box
                  sx={{
                    fontWeight: "bold",
                    fontSize: { md: "18px", xs: "16px" },
                    color: "#364a63"
                  }}
                >
                  77
                  <Box
                    pl={1}
                    component="span"
                    sx={{
                      color: "red"
                    }}
                  >
                    <ArrowDownwardIcon style={{ paddingTop: "5px" }} /> 162%
                  </Box>
                </Box>
                <Box
                  sx={{
                    color: "#8094ae",
                    fontSize: "11px"
                  }}
                >
                  PLANS
                </Box>
              </Box>
            </Box>
            <Box
              pt={2}
              pb={4}
              sx={{
                borderBottom: 1,
                borderColor: "divider"
              }}
            >
              <Box
                sx={{
                  fontWeight: "bold",
                  fontSize: { md: "18px", xs: "16px" },
                  color: "#364a63"
                }}
              >
                13,290.21
                <Box component="span">USD</Box>
              </Box>
              <Box
                sx={{
                  color: "#8094ae",
                  fontSize: "11px"
                }}
              >
                PAID PROFIT
              </Box>
            </Box>

            <Box
              pt={3}
              sx={{
                color: "#8094ae",
                fontSize: "13px"
              }}
            >
              Investment in Last Month
            </Box>

            <Box
              pt={2}
              sx={{
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <Box>
                <Box
                  sx={{
                    fontWeight: "bold",
                    fontSize: { md: "18px", xs: "16px" },
                    color: "#364a63"
                  }}
                >
                  34,563.00
                  <Box component="span">USD</Box>
                </Box>

                <Box
                  sx={{
                    color: "#8094ae",
                    fontSize: "11px"
                  }}
                >
                  INVESTMENT AMOUNT
                </Box>
              </Box>

              <Box pb={4} pr={matches ? 10 : 4}>
                <Box
                  sx={{
                    fontWeight: "bold",
                    fontSize: { md: "18px", xs: "16px" },
                    color: "#364a63"
                  }}
                >
                  64,321.14
                  <Box component="span">USD</Box>
                </Box>

                <Box
                  sx={{
                    color: "#8094ae",
                    fontSize: "11px"
                  }}
                >
                  PAID PROFIT
                </Box>
              </Box>
            </Box>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box px={3} pt={5}>
            <Box
              sx={{
                color: "#8094ae",
                fontSize: "13px"
              }}
            >
              Total Investment
            </Box>
            <Box
              pt={2}
              sx={{
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <Box>
                <Box
                  sx={{
                    fontWeight: "bold",
                    fontSize: { md: "18px", xs: "16px" },
                    color: "#364a63"
                  }}
                >
                  139,834.62
                  <Box component="span">USD</Box>
                  <Box
                    pl={1}
                    component="span"
                    sx={{
                      color: "red"
                    }}
                  >
                    <ArrowDownwardIcon style={{ paddingTop: "5px" }} /> 253%
                  </Box>
                </Box>
                <Box
                  sx={{
                    color: "#8094ae",
                    fontSize: "11px"
                  }}
                >
                  INVESTMENT AMOUNT
                </Box>
              </Box>

              <Box pr={matches ? 10 : 1}>
                <Box
                  sx={{
                    fontWeight: "bold",
                    fontSize: { md: "18px", xs: "16px" },
                    color: "#364a63"
                  }}
                >
                  712
                  <Box
                    pl={1}
                    component="span"
                    sx={{
                      color: "red"
                    }}
                  >
                    <ArrowDownwardIcon style={{ paddingTop: "5px" }} /> 219%
                  </Box>
                </Box>
                <Box
                  sx={{
                    color: "#8094ae",
                    fontSize: "11px"
                  }}
                >
                  PLANS
                </Box>
              </Box>
            </Box>
            <Box
              pt={2}
              pb={4}
              sx={{
                borderBottom: 1,
                borderColor: "divider"
              }}
            >
              <Box
                sx={{
                  fontWeight: "bold",
                  fontSize: { md: "18px", xs: "16px" },
                  color: "#364a63"
                }}
              >
                148,303.85
                <Box component="span">USD</Box>
              </Box>
              <Box
                sx={{
                  color: "#8094ae",
                  fontSize: "11px"
                }}
              >
                PAID PROFIT
              </Box>
            </Box>

            <Box
              pt={3}
              sx={{
                color: "#8094ae",
                fontSize: "13px"
              }}
            >
              Investment in Last Year
            </Box>

            <Box
              pt={2}
              sx={{
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <Box>
                <Box
                  sx={{
                    fontWeight: "bold",
                    fontSize: { md: "18px", xs: "16px" },
                    color: "#364a63"
                  }}
                >
                  494,380.32
                  <Box component="span">USD</Box>
                </Box>

                <Box
                  sx={{
                    color: "#8094ae",
                    fontSize: "11px"
                  }}
                >
                  INVESTMENT AMOUNT
                </Box>
              </Box>

              <Box pb={4} pr={matches ? 10 : 4}>
                <Box
                  sx={{
                    fontWeight: "bold",
                    fontSize: { md: "18px", xs: "16px" },
                    color: "#364a63"
                  }}
                >
                  335,180.38
                  <Box component="span">USD</Box>
                </Box>

                <Box
                  sx={{
                    color: "#8094ae",
                    fontSize: "11px"
                  }}
                >
                  PAID PROFIT
                </Box>
              </Box>
            </Box>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Box px={3} pt={5}>
            <Box
              sx={{
                color: "#8094ae",
                fontSize: "13px"
              }}
            >
              Total Investment
            </Box>
            <Box
              pt={2}
              sx={{
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <Box>
                <Box
                  sx={{
                    fontWeight: "bold",
                    fontSize: { md: "18px", xs: "16px" },
                    color: "#364a63"
                  }}
                >
                  634,214.94
                  <Box component="span">USD</Box>
                </Box>
                <Box
                  sx={{
                    color: "#8094ae",
                    fontSize: "11px"
                  }}
                >
                  INVESTMENT AMOUNT
                </Box>
              </Box>

              <Box pr={matches ? 15 : 8}>
                <Box
                  sx={{
                    fontWeight: "bold",
                    fontSize: { md: "18px", xs: "16px" },
                    color: "#364a63"
                  }}
                >
                  2990
                </Box>
                <Box
                  sx={{
                    color: "#8094ae",
                    fontSize: "11px"
                  }}
                >
                  PLANS
                </Box>
              </Box>
            </Box>
            <Box
              pt={2}
              pb={4}
              sx={{
                borderBottom: 1,
                borderColor: "divider"
              }}
            >
              <Box
                sx={{
                  fontWeight: "bold",
                  fontSize: { md: "18px", xs: "16px" },
                  color: "#364a63"
                }}
              >
                483,484.22
                <Box component="span">USD</Box>
              </Box>
              <Box
                sx={{
                  color: "#8094ae",
                  fontSize: "11px"
                }}
              >
                PAID PROFIT
              </Box>
            </Box>

            <Box
              pt={3}
              sx={{
                color: "#8094ae",
                fontSize: "13px"
              }}
            >
              Investment in Last Year
            </Box>

            <Box
              pt={2}
              sx={{
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <Box>
                <Box
                  sx={{
                    fontWeight: "bold",
                    fontSize: { md: "18px", xs: "16px" },
                    color: "#364a63"
                  }}
                >
                  139,834.62
                  <Box component="span">USD</Box>
                </Box>

                <Box
                  sx={{
                    color: "#8094ae",
                    fontSize: "11px"
                  }}
                >
                  INVESTMENT AMOUNT
                </Box>
              </Box>

              <Box pb={4} pr={matches ? 10 : 4}>
                <Box
                  sx={{
                    fontWeight: "bold",
                    fontSize: { md: "18px", xs: "16px" },
                    color: "#364a63"
                  }}
                >
                  148,303.85
                  <Box component="span">USD</Box>
                </Box>

                <Box
                  sx={{
                    color: "#8094ae",
                    fontSize: "11px"
                  }}
                >
                  PAID PROFIT
                </Box>
              </Box>
            </Box>
          </Box>
        </TabPanel>
      </Box>
    </Box>
  );
};
