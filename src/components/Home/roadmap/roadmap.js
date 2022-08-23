import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import Bounce from "react-reveal/Bounce";
import SwiperFile from "./swiper";
export default () => {
  const matches = useMediaQuery("(min-width:950px)");

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
          <Box id="roadmap" sx={{ textAlign: "center" }}>
            <Box
              sx={{
                color: "#894500",
                fontSize: { md: "28px", xs: "20px" },
                fontFamily: "MilkyNice",
                fontWeight: "bold",
              }}
            >
              Road Map
            </Box>
            <Box display="flex" justifyContent="center">
              <Divider
                style={{
                  width: "100px",
                  height: "3px",
                  backgroundColor: "#894500",
                }}
              />
            </Box>
          </Box>

          <Grid py={7} container>
            <Grid item md={6} xs={12}>
              <Bounce left>
                <Box>
                  <img src="/images/road.png" width="90%" />
                </Box>
              </Bounce>
            </Grid>
            <Grid item md={6} xs={12}>
              <Bounce right>
                <SwiperFile />
              </Bounce>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
