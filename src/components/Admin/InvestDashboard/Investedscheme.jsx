import { Container, Grid, Slider, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import LinearProgress, {
  linearProgressClasses
} from "@mui/material/LinearProgress";

const data = [
  {
    name: "Mar 8",
    investment: 0
  },
  {
    name: "Mar 10",
    investment: 0
  },
  {
    name: "Mar 12",
    investment: 0
  },
  {
    name: "Mar 14",
    investment: 0
  },
  {
    name: "Mar 16",
    investment: 0
  },
  {
    name: "Mar 18",
    investment: 0
  },
  {
    name: "Mar 20",
    investment: 0
  },
  {
    name: "Mar 22",
    investment: 0
  },
  {
    name: "Mar 24",
    investment: 0
  },
  {
    name: "Mar 26",
    investment: 0
  },
  {
    name: "Mar 28",
    investment: 0
  },
  {
    name: "Mar 30",
    investment: 0
  },
  {
    name: "Mar 31",
    investment: 0
  },
  {
    name: "Apr 1",
    investment: 0
  },
  {
    name: "Apr 2",
    investment: 0
  },
  {
    name: "Apr 3",
    investment: 0
  },
  {
    name: "Apr 4",
    investment: 0
  },
  {
    name: "Apr 5",
    investment: 0
  },
  {
    name: "Apr 6",
    investment: 0
  },
  {
    name: "Apr 7",
    investment: 0
  },
  {
    name: "Apr 8",
    investment: 0
  },
  {
    name: "Apr 9",
    investment: 0.5
  },
  {
    name: "Apr 10",
    investment: 0.6
  },
  {
    name: "Apr 11",
    investment: 0.4
  },
  {
    name: "Apr 12",
    investment: 0.2
  },
  {
    name: "Apr 13",
    investment: 1
  },
  {
    name: "Apr 14",
    investment: 10
  },
  {
    name: "Apr 15",
    investment: 9
  },
  {
    name: "Apr 16",
    investment: 0
  }
];

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 7,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800]
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8"
  }
}));

const Investedscheme = () => {
  return (
    <Box
      bgcolor="white"
      sx={{
        border: 1,
        borderRadius: "4px",
        borderColor: "divider"
      }}
      py={2}
      px={3}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: "30px"
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#364A63",
              fontSize: "16px"
            }}
          >
            Top Invested Scheme
          </Typography>
          <Typography
            sx={{
              color: "#8094AE",
              fontSize: "12px"
            }}
          >
            In last 30 days top invested plans.
          </Typography>
        </Box>
        <MoreHorizIcon
          sx={{
            color: "#364A63"
          }}
        />
      </Box>
      <Box sx={{ flexGrow: 1, mb: "20px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <Typography
            sx={{
              color: "#8094AE",
              fontSize: "12px"
            }}
          >
            Mercury
          </Typography>
          <Typography
            sx={{
              color: "#8094AE",
              fontSize: "12px"
            }}
          >
            38
          </Typography>
        </Box>
        <BorderLinearProgress variant="determinate" value={38} />
      </Box>
      <Box sx={{ flexGrow: 1, mb: "20px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <Typography
            sx={{
              color: "#8094AE",
              fontSize: "12px"
            }}
          >
            Silver Plan
          </Typography>
          <Typography
            sx={{
              color: "#8094AE",
              fontSize: "12px"
            }}
          >
            22
          </Typography>
        </Box>
        <BorderLinearProgress variant="determinate" value={22} />
      </Box>
      <Box sx={{ flexGrow: 1, mb: "20px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <Typography
            sx={{
              color: "#8094AE",
              fontSize: "12px"
            }}
          >
            Standard Plan
          </Typography>
          <Typography
            sx={{
              color: "#8094AE",
              fontSize: "12px"
            }}
          >
            6
          </Typography>
        </Box>
        <BorderLinearProgress variant="determinate" value={6} />
      </Box>
      <Box sx={{ flexGrow: 1, mb: "20px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <Typography
            sx={{
              color: "#8094AE",
              fontSize: "12px"
            }}
          >
            Venus
          </Typography>
          <Typography
            sx={{
              color: "#8094AE",
              fontSize: "12px"
            }}
          >
            4
          </Typography>
        </Box>
        <BorderLinearProgress variant="determinate" value={4} />
      </Box>
      <Box sx={{ flexGrow: 1, mb: "20px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <Typography
            sx={{
              color: "#8094AE",
              fontSize: "12px"
            }}
          >
            Platinum Plan
          </Typography>
          <Typography
            sx={{
              color: "#8094AE",
              fontSize: "12px"
            }}
          >
            3
          </Typography>
        </Box>
        <BorderLinearProgress variant="determinate" value={3} />
      </Box>

      <Box mt={3.7}>
        <ResponsiveContainer width="100%" height={130}>
          <LineChart data={data}>
            <XAxis dataKey="name" hide={true} />
            <YAxis hide={true} />
            <Line
              type="monotone"
              dataKey="investment"
              stroke="#816BFF"
              strokeWidth={2.5}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default Investedscheme;
