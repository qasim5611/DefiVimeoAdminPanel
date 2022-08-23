import { Box } from "@mui/system";
import React from "react";

const LoadingSvg = () => {
  return (
    <div>
      <Box
        width="100%"
        height={"100vh"}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
       >
        <section className="sec-loading">
          <div className="one"></div>
        </section>
      </Box>
    </div>
  );
};

export default LoadingSvg;
