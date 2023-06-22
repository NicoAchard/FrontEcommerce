import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const SalesChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const generateRandomData = () => {
      const data = [];
      for (let i = 0; i < 7; i++) {
        data.push(Math.floor(Math.random() * 100));
      }
      return data;
    };

    const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const datasets = [
      {
        label: "Skateboards",
        data: [40, 33, 38, 61, 63, 47, 87],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "Longboards",
        data: [15, 20, 46, 52, 41, 67, 67],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
      },
      {
        label: "Cruisers",
        data: [3, 15, 30, 10, 35, 23, 25],
        borderColor: "rgba(255, 206, 86, 1)",
        backgroundColor: "rgba(255, 206, 86, 0.2)",
      },
      {
        label: "Surfboards",
        data: [1, 10, 15, 26, 26, 40, 45],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ];

    const chartConfig = {
      type: "line",
      data: {
        labels: labels,
        datasets: datasets,
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      chartRef.current.chart = new Chart(chartRef.current, chartConfig);
    }

    return () => {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default SalesChart;
