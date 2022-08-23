import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Container, Grid, useMediaQuery } from "@mui/material";
import {
  BsFillArrowDownLeftCircleFill,
  BsFillArrowUpRightCircleFill
} from "react-icons/bs";
import { makeStyles } from "@mui/styles";
import Avatar from "@mui/material/Avatar";

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
    <Box>
      <Grid mt={4} container spacing={4}>
        <Grid item md={6} xs={12}>
          <Box
            sx={{
              border: 1,
              borderColor: "divider",
              borderRadius: "5px"
            }}
          >
            <Box
              pt={1}
              sx={{
                border: 1,
                borderColor: "divider",
                display: "flex",
                justifyContent: "space-between",
                background: "white"
              }}
            >
              <Box
                pl={2}
                pt={1.5}
                sx={{
                  fontWeight: "bold",
                  fontSize: { md: "16px", xs: "14px" },
                  color: "black"
                }}
              >
                Transactions
              </Box>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                aria-label="scrollable auto tabs example"
                sx={{
                  fontSize: { md: "14px", xs: "11px" },
                  color: "black"
                }}
              >
                <Tab label="In" {...a11yProps(0)} />
                <Tab label="Out" {...a11yProps(1)} />
                <Tab label="All" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <Box className={classes.scroller} px={1}>
              <TabPanel value={value} index={0}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, i) => {
                  return (
                    <Box
                      p={matches ? 2 : 1}
                      sx={{
                        background: "white",
                        borderBottom: 1,
                        borderColor: "divider",
                        display: "flex",
                        alignItems: "center"
                      }}
                    >
                      <Box
                        sx={{
                          height: "fit-content"
                        }}
                      >
                        <BsFillArrowDownLeftCircleFill
                          style={{
                            color: "#1EE0AC",
                            fontSize: matches ? "2rem" : "1.5rem"
                          }}
                        />
                      </Box>

                      <Box pl={matches ? 3 : 1} flexGrow="1">
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between"
                          }}
                        >
                          <Box
                            sx={{
                              color: "#364A63",
                              fontWeight: "500",
                              fontSize: { md: "14px", xs: "11px" }
                            }}
                          >
                            Bonus Added
                          </Box>
                          <Box
                            sx={{
                              color: "#526484",
                              fontSize: { md: "14px", xs: "11px" }
                            }}
                          >
                            <Box component="span" fontWeight="700">
                              + 500.00
                            </Box>{" "}
                            USD
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between"
                          }}
                        >
                          <Box
                            sx={{
                              color: "#9096B6",
                              fontSize: { md: "12px", xs: "10px" }
                            }}
                          >
                            March 14,2022
                          </Box>
                          <Box
                            sx={{
                              color: "#1ee0ac",
                              fontSize: { md: "12px", xs: "10px" }
                            }}
                          >
                            + 500 USD
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
              </TabPanel>
              <TabPanel value={value} index={1}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, i) => {
                  return (
                    <Box
                      key={i}
                      p={matches ? 2 : 1}
                      sx={{
                        background: "white",
                        borderBottom: 1,
                        borderColor: "divider",
                        display: "flex",
                        alignItems: "center"
                      }}
                    >
                      <Box
                        sx={{
                          height: "fit-content"
                        }}
                      >
                        <BsFillArrowUpRightCircleFill
                          style={{
                            color: "#F4C073",
                            fontSize: matches ? "2rem" : "1.5rem"
                          }}
                        />
                      </Box>

                      <Box pl={matches ? 3 : 1} flexGrow="1">
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between"
                          }}
                        >
                          <Box
                            sx={{
                              color: "#364A63",
                              fontWeight: "500",
                              fontSize: { md: "14px", xs: "11px" }
                            }}
                          >
                            Send Funds
                          </Box>
                          <Box
                            sx={{
                              color: "#526484",
                              fontSize: { md: "14px", xs: "11px" }
                            }}
                          >
                            <Box component="span" fontWeight="700">
                              - 500.00
                            </Box>{" "}
                            USD
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between"
                          }}
                        >
                          <Box
                            sx={{
                              color: "#9096B6",
                              fontSize: { md: "12px", xs: "10px" }
                            }}
                          >
                            March 14,2022
                          </Box>
                          <Box
                            sx={{
                              color: "#ED756C",
                              fontSize: { md: "12px", xs: "10px" }
                            }}
                          >
                            - 500 USD
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
              </TabPanel>
              <TabPanel value={value} index={2}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, i) => {
                  return (
                    <Box
                      key={i}
                      p={matches ? 2 : 1}
                      sx={{
                        background: "white",
                        borderBottom: 1,
                        borderColor: "divider",
                        display: "flex",
                        alignItems: "center"
                      }}
                    >
                      <Box
                        sx={{
                          height: "fit-content"
                        }}
                      >
                        <BsFillArrowDownLeftCircleFill
                          style={{
                            color: "#1EE0AC",
                            fontSize: matches ? "2rem" : "1.5rem"
                          }}
                        />
                      </Box>

                      <Box pl={matches ? 3 : 1} flexGrow="1">
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between"
                          }}
                        >
                          <Box
                            sx={{
                              color: "#364A63",
                              fontWeight: "500",
                              fontSize: { md: "14px", xs: "11px" }
                            }}
                          >
                            Bonus Added
                          </Box>
                          <Box
                            sx={{
                              color: "#526484",
                              fontSize: { md: "14px", xs: "11px" }
                            }}
                          >
                            <Box component="span" fontWeight="700">
                              + 500.00
                            </Box>{" "}
                            USD
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between"
                          }}
                        >
                          <Box
                            sx={{
                              color: "#9096B6",
                              fontSize: { md: "12px", xs: "10px" }
                            }}
                          >
                            March 14,2022
                          </Box>
                          <Box
                            sx={{
                              color: "#1ee0ac",
                              fontSize: { md: "12px", xs: "10px" }
                            }}
                          >
                            + 500 USD
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
              </TabPanel>
            </Box>
          </Box>
        </Grid>

        <Grid item md={6} xs={12}>
          <Box
            sx={{
              border: 1,
              borderColor: "divider",
              borderRadius: "5px"
            }}
          >
            <Box
              py={1.2}
              sx={{
                border: 1,
                borderColor: "divider",
                display: "flex",
                justifyContent: "space-between",
                background: "white"
              }}
            >
              <Box
                pl={2}
                pt={1.5}
                sx={{
                  fontWeight: "bold",
                  fontSize: { md: "16px", xs: "14px" },
                  color: "black"
                }}
              >
                Investment Activities
              </Box>
              <Box
                pr={2}
                pt={1.5}
                sx={{
                  fontWeight: "400",
                  fontSize: { md: "16px", xs: "14px" },
                  color: "#0894FF",
                  cursor: "pointer"
                }}
              >
                All Investment
              </Box>
            </Box>
            <Box className={classes.scroller}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num, i) => {
                return (
                  <Box key={i}>
                    <Box
                      p={matches ? 2 : 1}
                      sx={{
                        background: "white",
                        borderBottom: 1,
                        borderColor: "divider",
                        display: "flex",
                        alignItems: "center"
                      }}
                    >
                      <Box
                        sx={{
                          height: "fit-content"
                        }}
                      >
                        <Avatar sx={{ fontSize: "14px" }}>
                          {i % 2 == 0 ? "MC" : "SV"}
                        </Avatar>
                      </Box>

                      <Box pl={matches ? 3 : 1} flexGrow="1">
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column"
                          }}
                        >
                          <Box
                            sx={{
                              color: "#364A63",
                              fontWeight: "500",
                              fontSize: { md: "14px", xs: "11px" }
                            }}
                          >
                            Bonus Added
                          </Box>

                          <Box
                            sx={{
                              color: "#9096B6",
                              fontSize: { md: "12px", xs: "10px" }
                            }}
                          >
                            March 14,2022
                          </Box>
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          color: "#526484",
                          fontSize: { md: "14px", xs: "11px" }
                        }}
                      >
                        <Box component="span" fontWeight="700">
                          + 500.00
                        </Box>{" "}
                        USD
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
