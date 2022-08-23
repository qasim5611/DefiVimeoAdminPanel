import { useMediaQuery } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "23 Mar",
    Deposit: 10
  },
  {
    name: "24 Mar",
    Deposit: 10
  },
  {
    name: "25 Mar",
    Deposit: 10
  },
  {
    name: "26 Mar",
    Deposit: 10
  },
  {
    name: "27 Mar",
    Deposit: 40
  },
  {
    name: "28 Mar",
    Deposit: 10
  },
  {
    name: "29 Mar",
    Deposit: 10
  },
  {
    name: "30 Mar",
    Deposit: 10
  },
  {
    name: "31 Mar",
    Deposit: 10
  },
  {
    name: "1 Apr",
    Deposit: 10
  },
  {
    name: "2 Apr",
    Deposit: 10
  },
  {
    name: "3 Apr",
    Deposit: 10
  },
  {
    name: "4 Apr",
    Deposit: 10
  },
  {
    name: "5 Apr",
    Deposit: 10
  },
  {
    name: "6 Apr",
    Deposit: 10
  }
];

export default () => {
  const yaxisTisk = [10, 12, 16, 20, 24, 28, 32, 36, 40];
  const matches = useMediaQuery("(min-Width: 550px)");

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart
        data={data}
        maxBarSize={2}
        width="100%"
        margin={{
          left: -40,
          top: 5
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="name"
          tick={{ fontSize: 12, fill: "#C0CAE0" }}
          tickLine={false}
          axisLine={false}
          angle={matches ? -30 : -50}
          dx={-5}
          interval={0}
        />

        <YAxis
          domain={["dataMin", "dataMax"]}
          interval={0}
          tick={{ fontSize: 11, fill: "#C0CAE0" }}
          ticks={yaxisTisk}
          tickLine={false}
        />
        <Tooltip
          separator=" / "
          contentStyle={{
            backgroundColor: "#101924",
            color: "white",
            fontSize: "12px",
            borderRadius: "5px",
            height: "55px",
            width: "120px"
          }}
          itemStyle={{ color: "white" }}
        />
        <Bar dataKey="Deposit" fill="#6576FF" barSize={8} />
      </BarChart>
    </ResponsiveContainer>
  );
};
