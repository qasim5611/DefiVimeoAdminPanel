
import React from 'react'
import { Container, Grid, useMediaQuery } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";



const data = [
    {
      name: "Mar 8",
      pv: 6,
    },
    {
      name: "Mar 9",
      uv: 1,
      pv: 8,
    },
    {
      name: "Mar 10",
      pv: 12,
    },
    {
      name: "Mar 11",
      pv: 11,
    },
    {
      name: "Mar 12",
      pv: 15,
    },
    {
      name: "Mar 13",
      pv: 10,
    },
    {
      name: "Mar 14",
      uv: 2,
      pv: 16,
    },
    {
      name: "Mar 15",
      uv: 1,
      pv: 7,
    },
    {
      name: "Mar 16",
      pv: 5,
    },
    {
      name: "Mar 17",
      pv: 5,
    },
    {
      name: "Mar 18",
      pv: 10,
    },
    {
      name: "Mar 19",
      pv: 5,
    },
    {
      name: "Mar 20",
      pv: 6,
    },
    {
      name: "Mar 21",
      pv: 10,
    },
    {
      name: "Mar 22",
      pv: 10,
    },
    {
      name: "Mar 23",
      pv: 13,
    },
    {
      name: "Mar 24",
      pv: 10,
    },
    {
      name: "Mar 25",
      pv: 14,
    },
    {
      name: "Mar 26",
      pv: 19,
    },
    {
      name: "Mar 27",
      pv: 10,
    },
    {
      name: "Mar 28",
      pv: 11,
    },
    {
      name: "Mar 29",
      pv: 13,
    },
    {
      name: "Mar 30",
      pv: 17,
    },
    {
      name: "Mar 31",
      pv: 9,
    },
    {
      name: "Apr 1",
      pv: 10,
    },
    {
      name: "Apr 2",
      pv: 8,
    },
    {
      name: "Apr 3",
      pv: 5,
    },
    {
      name: "Apr 4",
      pv: 6,
    },
    {
      name: "Apr 5",
      pv: 15,
    },
    {
      name: "Apr 6",
      pv: 2,
    },
  ];

export default function InvestBarChart() {
  const matches = useMediaQuery("(min-width:750px)");


  return (
      <>
        <ResponsiveContainer width="100%" height={120}>
              <BarChart data={data}>
                <XAxis dataKey="name" hide={true} />
                <YAxis hide={true} />
                <Tooltip />
                <Bar dataKey="pv" stackId="a" fill="#798BFF" barSize={9} />
              </BarChart>
            </ResponsiveContainer>
      </>
  )
}
