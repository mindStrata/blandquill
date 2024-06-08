/** @format */
"use client";

import React, { FC } from "react";
import {
  BarChart as BarGraph,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar,
} from "recharts";

type Props = {
  name: string;
  total: string | number;
};

type BarChartProps = {
  data: Props[];
};

const BarChart: FC<BarChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <BarGraph data={data}>
        <XAxis
          dataKey={"name"}
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
          tickFormatter={(value) => value}
        />
        <Bar dataKey={"total"} radius={[4, 4, 0, 0]} fill={"#08080a"} />
      </BarGraph>
    </ResponsiveContainer>
  );
};
export default BarChart;
