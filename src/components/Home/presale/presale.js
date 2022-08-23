import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
import Bounce from "react-reveal/Bounce";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses
} from "@mui/material/LinearProgress";
import { toast } from "react-toastify";
import Loading from "../../../loading.jsx";

import { formatUnits, parseUnits } from "@ethersproject/units";

// Contract Imports

import {
  useAllPresaleContract,
  useTokenContract
} from "../../../ConnectivityAss/hooks";

import { useContext } from "react";
import { AppContext } from "../../../utils";

export default ({ setopen }) => {
  const matches = useMediaQuery("(min-width:950px)");
  // ----use for getting value and
  const [value, setValue] = React.useState(0.05);
  const [total, setTotal] = React.useState("");
  const [per, setPer] = React.useState("");
  const [planIndex, setplanIndex] = React.useState(0);
  let percentage;

  React.useEffect(() => {
    if (value == 0.05) {
      percentage = (value * 15000000 * 0) / 100;
      setPer(percentage);
      setplanIndex(0);
    } else if (value == 0.1) {
      percentage = (value * 15000000 * 10) / 100;
      setPer(percentage);
      setplanIndex(1);
    } else if (value == 0.5) {
      percentage = (value * 15000000 * 20) / 100;
      setPer(percentage);
      setplanIndex(2);
    } else if (value == 1) {
      percentage = (value * 15000000 * 30) / 100;
      setPer(percentage);
      setplanIndex(3);
    } else if (value == 5) {
      percentage = (value * 15000000 * 40) / 100;
      setPer(percentage);
      setplanIndex(4);
    } else if (value == 10) {
      percentage = (value * 15000000 * 50) / 100;
      setPer(percentage);
      setplanIndex(5);
    }

    setTotal(value * 15000000 + per);
  }, [value, per]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: "60%",
    marginTop: "12px",
    marginLeft: "24px",
    borderRadius: 20,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      background: "transparent"
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 20,
      background:
        "linear-gradient(34deg, rgba(255,82,0,1) 0%, rgba(255,157,9,1) 100%)"
    }
  }));

  // Connectivity starts here 4/18/2022

  const { account, signer, connect, chainId } = useContext(AppContext);
  const [updateState, setupdateState] = React.useState(false);
  const [loading, setloading] = React.useState(false);

  // States for Visual data
  const [amountRaised, setamountRaised] = React.useState(0);
  const [getProgress, setgetProgress] = React.useState(0);
  const [tokenDecimals, settokenDecimals] = React.useState(0);

  // Contract State
  const PresaleContract = useAllPresaleContract(signer);
  const TokenContract = useTokenContract(signer);

  // Function for Initial Data

  const VisualData = async () => {
    const tokenDecimals = await TokenContract.decimals();
    settokenDecimals(tokenDecimals);

    const amountRaisedResponse = await PresaleContract.amountRaised();
    setamountRaised(Number(formatUnits(amountRaisedResponse)).toFixed(2));
    console.log(typeof formatUnits(amountRaisedResponse), "amount");

    const getProgressResponse = await PresaleContract.getProgress();
    setgetProgress(+getProgressResponse);
    console.log(+getProgressResponse, "progress");

    setupdateState(false);
  };

  React.useEffect(() => {
    VisualData();
  }, [updateState]);

  const buyToken = async () => {
    if (account) {
      try {
        setloading(true);
        const buyTokenResponse = await PresaleContract.buyToken(planIndex, {
          value: parseUnits(value.toString(), tokenDecimals)
        });
        await buyTokenResponse.wait();
        toast.success("Transaction successful");
        setloading(false);
        setupdateState(true);
      } catch (error) {
        setloading(false);
        if (error?.data?.message) {
          toast.error(error?.data?.message);
        } else if (error?.data) {
          toast.error(error?.data);
        } else if (error?.message) {
          toast.error(error?.message);
        }
      }
    } else {
      connect();
    }
  };

  // Network Switch
  // console.log(chainId, "chainId");
  React.useEffect(() => {
    if (account && chainId != 56) {
      setopen(true);
    }
  }, [chainId]);

  return (
    <>
      <Loading loading={loading} />

      <Box id="privatesale">
        <Box
          py={5}
          sx={{
            background:
              "linear-gradient(180deg, rgba(255,189,117,1) 0%, rgba(255,197,134,1) 3%, rgba(255,203,146,1) 59%, rgba(255,250,246,1) 100%, rgba(255,255,255,1) 100%)"
          }}
        >
          <Container>
            <Box sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  color: "#894500",
                  fontSize: { md: "36px", xs: "28px" },
                  fontFamily: "MilkyNice",
                  fontWeight: "bold"
                }}
              >
                Private Presale
              </Box>
              <Box display="flex" justifyContent="center">
                <Divider
                  style={{
                    width: "130px",
                    height: "3px",
                    backgroundColor: "#894500"
                  }}
                />
              </Box>
            </Box>

            <Box
              pt={4}
              sx={{
                width: "70%",
                margin: "auto"
              }}
            >
              <Box
                py={2}
                sx={{
                  fontSize: { md: "28px", xs: "20px" },
                  color: "#371F00",
                  fontWeight: "bold",
                  textAlign: "center",
                  background: "#FFE0BE",
                  fontFamily: "MilkyNice",
                  borderRadius: "20px"
                }}
              >
                Phase 1 out of 3 is active
              </Box>
            </Box>

            <Grid container pt={5}>
              <Grid item md={6} xs={12}>
                <Box
                  mx={5}
                  sx={{
                    color: "#371F00",
                    fontFamily: "Helvetica",
                    textAlign: "center"
                  }}
                >
                  <Box sx={{}}>Raised Amount Phase 1</Box>
                  {/* <Bounce left> */}
                  <Box
                    sx={{
                      background:
                        "linear-gradient(34deg, rgba(255,82,0,1) 0%, rgba(255,157,9,1) 100%)",
                      borderRadius: "20px"
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontSize: { md: "28px", xs: "20px" },
                        fontWeight: "bold"
                      }}
                    >
                      {amountRaised}
                    </Box>
                    <Box
                      component="span"
                      sx={{
                        fontSize: { md: "18px", xs: "15px" }
                      }}
                    >
                      BNB
                    </Box>
                  </Box>
                  {/* </Bounce> */}
                </Box>
              </Grid>

              <Grid item md={6} xs={12}>
                <Box
                  mx={5}
                  sx={{
                    color: "#371F00",
                    fontFamily: "Helvetica",
                    textAlign: "center"
                  }}
                >
                  <Box sx={{}}>Total Raised Amount</Box>
                  {/* <Bounce right> */}
                  <Box
                    sx={{
                      background:
                        "linear-gradient(34deg, rgba(255,82,0,1) 0%, rgba(255,157,9,1) 100%)",
                      borderRadius: "20px"
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontSize: { md: "28px", xs: "20px" },
                        fontWeight: "bold"
                      }}
                    >
                      {amountRaised}
                    </Box>
                    <Box
                      component="span"
                      sx={{
                        fontSize: { md: "18px", xs: "15px" }
                      }}
                    >
                      BNB
                    </Box>
                  </Box>
                  {/* </Bounce> */}
                </Box>
              </Grid>
            </Grid>

            <Box pt={10}>
              <Box
                sx={{
                  color: "#371F00",
                  display: "flex",
                  justifyContent: "space-evenly",
                  fontFamily: "Helvetica"
                }}
              >
                <Box>25%</Box>
                <Box>50%</Box>
                <Box>75%</Box>
              </Box>
            </Box>

            <Box
              sx={{
                height: "60px",
                borderRadius: "30px",
                borderWidth: "2px",
                borderColor: "#FF5100",
                borderStyle: "solid dashed none dashed"
              }}
            >
              <BorderLinearProgress variant="determinate" value={getProgress} />
            </Box>

            {/* <Bounce bottom> */}
            <Box
              mt={5}
              sx={{
                border: "2px solid #FF5100",
                borderRadius: "5px",
                color: "#371F00",
                textAlign: "center",
                fontWeight: "bolder"
              }}
            >
              <Box
                sx={{
                  fontSize: { md: "28px", xs: "20px" },
                  fontWeight: "bold",
                  fontFamily: "MilkyNice",
                  borderBottom: "2px solid #FF5100"
                }}
              >
                Next tokens sale phase 2
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  fontFamily: "Helvetice-Bold",
                  alignItems: "center"
                }}
              >
                <Box
                  sx={{
                    width: "30%"
                  }}
                >
                  <Box
                    mt={1}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end"
                    }}
                  >
                    <Box
                      px={0.5}
                      component="span"
                      sx={{
                        border: "1px solid #FF5100",
                        borderRadius: "3px",
                        fontSize: { md: "16px", xs: "13px" }
                      }}
                    >
                      Live!
                    </Box>
                  </Box>
                  <Box pt={6}>Phase 1 Price</Box>
                  <Box pb={7}>1 BNB = 15,000,000 RDC</Box>
                </Box>

                <Box
                  sx={{
                    borderLeft: "2px solid #FF5100",
                    width: "30%"
                  }}
                >
                  <Box
                    mt={1}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end"
                    }}
                  >
                    <Box
                      px={0.5}
                      component="span"
                      sx={{
                        border: "1px solid #FF5100",
                        borderRadius: "3px",
                        fontSize: { md: "16px", xs: "13px" }
                      }}
                    >
                      Upcoming
                    </Box>
                  </Box>
                  <Box pt={6}>Phase 2 Price</Box>
                  <Box pb={7}>1 BNB = 14,000,000 RDC</Box>
                </Box>

                <Box
                  sx={{
                    borderLeft: "2px solid #FF5100",
                    width: "30%"
                  }}
                >
                  <Box
                    mt={1}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end"
                    }}
                  >
                    <Box
                      px={0.5}
                      component="span"
                      sx={{
                        border: "1px solid #FF5100",
                        borderRadius: "3px",
                        fontSize: { md: "16px", xs: "13px" }
                      }}
                    >
                      Closing
                    </Box>
                  </Box>
                  <Box pt={6}>Phase 3 Price</Box>
                  <Box pb={7}>1 BNB = 13,000,000 RDC</Box>
                </Box>
              </Box>
            </Box>
            {/* </Bounce> */}

            {/* <Bounce left> */}
            <Box
              pt={12}
              sx={{
                color: "#371F00",
                fontSize: { md: "28px", xs: "20px" },
                fontWeight: "bold",
                fontFamily: "MilkyNice",
                textAlign: "center"
              }}
            >
              BUY RDC DIRECTLY FROM THE WEBSITE
            </Box>

            <Box
              pt={2}
              sx={{
                color: "#371F00",
                fontSize: { md: "16px", xs: "14px" },
                textAlign: "center",
                fontFamily: "Helvetica",
                fontWeight: "bold"
              }}
            >
              Choose the amount you want to invest in RDC
            </Box>
            <Box
              pt={2}
              sx={{
                color: "#371F00",
                fontSize: { md: "16px", xs: "14px" },
                textAlign: "center",
                fontFamily: "Helvetica",
                fontWeight: "bold"
              }}
              id="BuyRDC"
            >
              Select a bigger amount to get more bonus
            </Box>

            <Box mt={3} mx={matches ? 30 : 5}>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={value}
                  onChange={handleChange}
                  sx={{
                    backgroundColor: "#CCB8A1",
                    color: "#371F00",
                    fontSize: { md: "20px", xs: "16px" },
                    fontWeight: "bold",
                    fontFamily: "Helvetica"
                  }}
                >
                  <MenuItem
                    value={0.05}
                    sx={{ backgroundColor: "#CCB8A1", color: "black" }}
                  >
                    <Box
                      width="100%"
                      display="flex"
                      justifyContent="space-between"
                    >
                      <Box>0.05 BNB </Box>
                      <Box>No Bonus</Box>
                    </Box>
                  </MenuItem>

                  <MenuItem
                    value={0.1}
                    sx={{ backgroundColor: "#CCB8A1", color: "black" }}
                  >
                    <Box
                      width="100%"
                      display="flex"
                      justifyContent="space-between"
                    >
                      <Box>0.10 BNB </Box>
                      <Box>10% Bonus</Box>
                    </Box>
                  </MenuItem>

                  <MenuItem
                    value={0.5}
                    sx={{ backgroundColor: "#CCB8A1", color: "black" }}
                  >
                    <Box
                      width="100%"
                      display="flex"
                      justifyContent="space-between"
                    >
                      <Box>0.50 BNB </Box>
                      <Box>20% Bonus</Box>
                    </Box>
                  </MenuItem>

                  <MenuItem
                    value={1}
                    sx={{ backgroundColor: "#CCB8A1", color: "black" }}
                  >
                    <Box
                      width="100%"
                      display="flex"
                      justifyContent="space-between"
                    >
                      <Box>1 BNB </Box>
                      <Box>30% Bonus</Box>
                    </Box>
                  </MenuItem>

                  <MenuItem
                    value={5}
                    sx={{ backgroundColor: "#CCB8A1", color: "black" }}
                  >
                    <Box
                      width="100%"
                      display="flex"
                      justifyContent="space-between"
                    >
                      <Box>5 BNB </Box>
                      <Box>40% Bonus</Box>
                    </Box>
                  </MenuItem>

                  <MenuItem
                    value={10}
                    sx={{ backgroundColor: "#CCB8A1", color: "black" }}
                  >
                    <Box
                      width="100%"
                      display="flex"
                      justifyContent="space-between"
                    >
                      <Box>10 BNB</Box>
                      <Box>50% Bonus</Box>
                    </Box>
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box
              mt={3}
              mx={matches ? 30 : 5}
              sx={{
                color: "#371F00",
                fontSize: { md: "20px", xs: "15px" },
                fontWeight: "bold",
                fontFamily: "Helvetica",
                display: "flex",
                justifyContent: "space-between",
                background: "#CCB8A1"
              }}
            >
              <Box px={1}>
                {(value * 15000000).toLocaleString("en-US")} RDC +{" "}
                {per.toLocaleString("en-US")} RDC (Bonus)
              </Box>
              <Box px={1}>Total {total.toLocaleString("en-US")} RDC</Box>
            </Box>

            <Box
              pt={2}
              sx={{
                color: "#371F00",
                fontFamily: "Helvetica",
                fontSize: { md: "16px", xs: "14px" },
                textAlign: "center",
                fontWeight: "bold"
              }}
            >
              Buy now and get up to 50% Bonus
            </Box>
            <Box
              pt={2}
              pb={5}
              sx={{
                color: "#371F00",
                fontFamily: "Helvetica",
                fontSize: { md: "16px", xs: "14px" },
                textAlign: "center"
              }}
            >
              Minimum buy 0.05 BNB, Maximum buy 10 BNB
            </Box>

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
                  onClick={() => {
                    buyToken();
                  }}
                >
                  BUY NOW
                </Button>
              </Box>
            </Box>
            {/* </Bounce> */}
          </Container>
        </Box>
      </Box>
    </>
  );
};
