import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  tension: 0.4,
  plugins: {
    legend: {
      position: "top",
      align: "end",
    },
    title: {
      display: true,
      text: "Revenue",
      position: "top",
      align: "start",
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Course Visit",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "#605c94",
      backgroundColor: "rgba(96, 92, 148, 0.2)",
    },
    {
      fill: false,
      label: "Course Sale",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "#ff0000",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function App() {
  return <Line options={options} data={data} />;
}
