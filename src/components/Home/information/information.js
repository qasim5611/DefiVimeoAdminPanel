import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import Bounce from "react-reveal/Bounce";

export default () => {
  const matches = useMediaQuery("(min-width:950px)");
  const matches1 = useMediaQuery("(min-width:750px)");
  const matches2 = useMediaQuery("(min-width:470px)");
  let info = [
    { one: "Name", two: "RagDoll Cat NFT" },
    { one: "Symbol", two: "RDC" },
    { one: "Token Decimals", two: "9" },
    { one: "Network", two: "Binance Smart Chain (BEP20)" },
    {
      one: "Contract Address",
      two: "0xf9Fd2b7154d341098611391638c090d962793f9A",
    },
  ];

  return (
    <Box>
      <Box
        py={5}
        sx={{
          background:
            "linear-gradient(180deg, rgba(255,189,117,1) 0%, rgba(255,197,134,1) 3%, rgba(255,203,146,1) 59%, rgba(255,250,246,1) 100%, rgba(255,255,255,1) 100%)",
        }}
      >
        <Container>
          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{
                color: "#894500",
                fontSize: { md: "36px", xs: "27px" },
                fontFamily: "MilkyNice",
                fontWeight: "bold",
              }}
            >
              Token Information
            </Box>
            <Box display="flex" justifyContent="center" mb={5}>
              <Divider
                style={{
                  width: "150px",
                  height: "3px",
                  backgroundColor: "#894500",
                }}
              />
            </Box>
          </Box>

          {info.map(({ one, two }, i) => {
            return (
              <Grid
                key={i}
                container
                mt={2}
                mr={2}
                sx={{
                  border: "2px solid #FF5100",
                  borderRadius: "30px",
                  fontSize: { md: "18px", xs: "14px" },
                  fontWeight: "bold",
                  fontFamily: "Helvetica",
                  color: "#894500",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Grid item xs={6}>
                  <Bounce left>
                    <Box
                      py={1}
                      pl={matches ? 3 : 1}
                      sx={{
                        textAlign: "left",
                        background:
                          "linear-gradient(34deg, rgba(255,82,0,1) 0%, rgba(255,157,9,1) 100%)",
                        borderRadius: "30px",
                        height: "100%",
                        padding: {
                          md: "none",
                          xs: i == 3 ? (matches2 ? "" : "19px 8px") : "none",
                        },
                        
                      }}
                    >
                      {one}
                    </Box>
                  </Bounce>
                </Grid>
                <Grid py={1} pr={matches ? 3 : 1} item xs={6}>
                  <Bounce right>
                    <Box
                      sx={{
                        textAlign: "right",
                      }}
                    >
                      {
                        matches1 ? two : i==4 ?  two.slice(0, 4) + "..." + two.slice(-4) : two 
                      }
                      {/* {two.indexOf("0x") != -1
                        ? two.slice(0, 4) + "..." + two.slice(-4)
                        : two} */}
                      {/* {two} */}
                    </Box>
                  </Bounce>
                </Grid>
              </Grid>
            );
          })}
        </Container>
      </Box>
    </Box>
  );
};
