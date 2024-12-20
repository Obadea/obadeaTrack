import { ApexOptions } from "apexcharts";

export const TotalRevenueSeries = [
  {
    name: "Neigborhood A",
    data: [183, 124, 115, 85, 143, 143, 96],
  },
  {
    name: "Neigborhood B",
    data: [95, 84, 72, 44, 108, 108, 47],
  },
];

export const TotalRevenueOptions: ApexOptions = {
  chart: {
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  colors: ["#475BE8", "#CFC8FF"],
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      columnWidth: "55%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  stroke: {
    colors: ["transparent"],
    width: 4,
  },

  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  },
  yaxis: {
    title: {
      text: "Safety Scores",
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
  },
  tooltip: {
    fillSeriesColor: true,
    theme: "dark",

    y: {
      formatter(val: number) {
        return `${val} score`;
      },
    },
  },
};
