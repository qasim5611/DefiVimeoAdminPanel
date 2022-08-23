import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import Bounce from "react-reveal/Bounce";
import animation from "../../../images/animation.png";


export default () => {
  const matches = useMediaQuery("(min-width:950px)");
  const check = useMediaQuery("(max-Width:900px)");

  let tax = [
    { one: "4%", two: "MARKETING & TEAM" },
    { one: "3%", two: "BUY BACK" },
    { one: "2%", two: "AUTO LIQUIDITY" }
  ];

  let bounceArray = ["left", "bottom", "right"];

  return (
    <Box
      pt={5}
      pb={4}
      sx={{
        background:
          "linear-gradient(180deg, rgba(255,189,117,1) 0%, rgba(255,197,134,1) 3%, rgba(255,203,146,1) 59%, rgba(255,250,246,1) 100%, rgba(255,255,255,1) 100%)"
      }}
    >

    <Box
      sx={{
        position: "relative",
        left: "0rem",
        right: "0rem",
      }}
    >
      <img className="animation"
        src={animation}
        alt=""
        style={{
          position: "absolute",
          width:check?"70px": "100px",
          top:check?"-4.5rem": "-5.5rem",
          right: "2rem",
          transform: " translateY(-50%) translateX(-10%)",
        
        }}
      />
    </Box>
      <Box
        sx={{
          background: "#FDB967",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            background: "#FFC484",
            width: "200px"
          }}
        >
          <Box
            sx={{
              color: "#894500",
              fontSize: { md: "36px", xs: "25px" },
              fontFamily: "MilkyNice",
              fontWeight: "bold"
            }}
          >
            Tax
          </Box>
          <Box display="flex" justifyContent="center">
            <Divider
              style={{
                width: "150px",
                height: "3px",
                backgroundColor: "#894500"
              }}
            />
          </Box>
        </Box>
      </Box>
      <Container maxWidth="md">
        <Grid pt={5} spacing={2} alignItems="center" container>
          {tax.map(({ one, two }, i) => {
            return (
              <Grid item xs={4} key={i}>
                <Bounce
                  right={bounceArray[i] === "right" && true}
                  left={bounceArray[i] === "left" && true}
                  bottom={bounceArray[i] === "bottom" && true}
                >
                  <Box
                    sx={{
                      color: "#894500",
                      border: "2px solid #FF5100",
                      borderRadius: "20px",
                      fontFamily: "Helvetica",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: matches ? "65%" : "100%",
                      margin: "auto",
                      height : '8rem'
                    }}
                  >
                    <Box
                      py={2}
                      sx={{
                        fontSize: { md: "20px", xs: "14px" },
                        fontWeight: "bold"
                      }}
                    >
                      {one}
                    </Box>
                    <Box
                      py={2}
                      sx={{
                        fontSize: { md: "16px", xs: "14px" },
                        fontWeight: "bold",
                        textAlign: "center"
                      }}
                    >
                      {two}
                    </Box>
                  </Box>
                </Bounce>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};
