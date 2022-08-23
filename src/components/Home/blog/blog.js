import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
import Bounce from "react-reveal/Bounce";
import { Link } from "react-router-dom";

export default () => {
  const matches = useMediaQuery("(min-width:910px)");
  let bounceArray = ["left", "left", "right", "right"];
  let boxes = [
    {
      date: "March 1,2022",
      text: "Analysts of Listing.Help: GameFi investment reached record highs in early",
      img: "/images/ad1.png"
    },
    {
      date: "January 10,2022",
      text: "Why Are CryptoPunks So Expensive and What Will To Them in 2022",
      img: "/images/img2.png"
    },
    {
      date: "February 8,2022",
      text: "What is Bitcoin Halving? How can it stir crypto markets?",
      img: "/images/img3.png"
    },
    {
      date: "January 26,2022",
      text: "Top 7 Crypto Events in 2022",
      img: "/images/img4.png"
    }
  ];
  return (
    <Box>
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
                fontSize: { md: "28px", xs: "20px" },
                fontFamily: "MilkyNice",
                fontWeight: "bold"
              }}
            >
              Blog
            </Box>
            <Box display="flex" justifyContent="center">
              <Divider
                style={{
                  width: "100px",
                  height: "3px",
                  backgroundColor: "#894500"
                }}
              />
            </Box>
          </Box>

          <Grid py={5} container spacing={3}>
            {boxes.map(({ date, text, img }, i) => {
              return (
                <Grid item md={3} xs={6}>
                  <Bounce
                    left={bounceArray[i] === "left" && true}
                    right={bounceArray[i] === "right" && true}
                  >
                    <Box
                      sx={{
                        background: "white",
                        borderRadius: "15px",
                        fontFamily: "Helvetica",
                        height: "100%"
                        // height: { md: "300px", xs: "250px" }
                      }}
                    >
                      <Box p={1}>
                        <img src={img} width="100%" />
                      </Box>
                      <Box
                        px={1}
                        sx={{
                          fontSize: "12px",
                          color: "black"
                        }}
                      >
                        {date}
                      </Box>
                      <Box
                        px={1}
                        pb={i == 2 ? 3 : i == 3 ? 6 : 1}
                        sx={{
                          fontWeight: "bold",
                          color: "black",
                          fontSize: { md: "16px", xs: "14px" }
                        }}
                      >
                        {text}
                      </Box>
                    </Box>
                  </Bounce>
                </Grid>
              );
            })}
          </Grid>

          <Box
            sx={{
              width: "fit-content",
              border: "3px solid #FF8504",
              borderRadius: "30px",
              margin: "auto"
            }}
          >
            <Link
              to="/blog"
              style={{ textDecoration: "none", color: "#371F00" }}
            >
              <Button
                sx={{
                  border: "1.5px solid white",
                  borderRadius: "30px",
                  backgroundImage:
                    "linear-gradient(to right, #FF8605, #FFAB24)",
                  color: "#371F00",
                  fontSize: { xs: "20px", md: "28px" },
                  fontWeight: "900",
                  fontFamily: "Helvetica",
                  boxShadow: 4,
                  width: "100%"
                }}
              >
                GO TO THE BLOG
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
