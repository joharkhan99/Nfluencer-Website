import React, { useState } from "react";
import Chart from "react-apexcharts";

const BalanceChart = () => {
  const [options, setOptions] = useState({
    chart: {
      id: "basic-area",
      fontFamily: "Inter, Graphik, sans-serif",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      labels: {
        style: {
          colors: "#9CA3AF",
          fontSize: 11,
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#E9D5FF", "rgb(96,66,196)"],
        stops: [0, 500],
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const yValue = series[seriesIndex][dataPointIndex]; // Get the y-value

        return (
          '<div class="p-2 bg-white shadow-none text-center border-none shadow-white">' +
          `<span class="text-xs font-bold block">$${yValue}</span>` +
          "</div>"
        );
      },
    },
    colors: ["#7852F3"],
    grid: {
      show: false,
    },
    yaxis: {
      show: false,
    },

    stroke: {
      width: 3,
      curve: "smooth",
    },
  });

  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [900, 400, 200, 300, 600, 700, 100],
    },
  ]);

  return (
    <div className="bg-white rounded-xl">
      <Chart
        options={options}
        series={series}
        type="area"
        width="100%"
        // height="180px"
        // height="100px"
      />
    </div>
  );
};

export default BalanceChart;
