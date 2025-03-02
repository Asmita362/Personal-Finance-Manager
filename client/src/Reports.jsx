import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

// Register the components you need from Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Reports = () => {
  // Data for the Bar chart (Income vs Expenses)
  const barData = {
    labels: ['Income', 'Expenses'],
    datasets: [
      {
        label: 'Income vs Expenses',
        data: [5000, 3000], // You can replace this with dynamic data
        backgroundColor: ['#4caf50', '#f44336'],
        borderColor: ['#4caf50', '#f44336'],
        borderWidth: 0.5,  // Thinner border lines (reduce the width of lines)
        barThickness: 30,   // Increased bar width (make bars a bit wider)
      },
    ],
  };

  // Data for the Pie chart (Category-wise Expenses)
  const pieData = {
    labels: ['Food', 'Entertainment', 'Rent', 'Utilities'], // Categories
    datasets: [
      {
        label: 'Category-wise Expenses',
        data: [500, 300, 1000, 200], // You can replace this with dynamic data
        backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0'],
        hoverOffset: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // To control the aspect ratio and make the chart smaller
    plugins: {
      legend: {
        position: 'top', // Position the legend at the top
      },
      tooltip: {
        enabled: true, // Enable tooltips
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines
        },
      },
      y: {
        beginAtZero: true, // Ensure the y-axis starts at 0
      },
    },
  };

  return (
    <div className="reports">
      <h2>Your Financial Report</h2>

      <div className="chart-container" style={{ marginBottom: '30px', height: '250px', width: '70%' }}>
        <h3>Income vs Expenses</h3>
        <Bar data={barData} options={chartOptions} />
      </div>

      <div className="chart-container" style={{ height: '250px', width: '80%' }}>
        <h3>Category-wise Expenses</h3>
        <Pie data={pieData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Reports;
