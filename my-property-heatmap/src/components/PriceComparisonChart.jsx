import React from 'react';
import { Line } from 'react-chartjs-2';

const PriceComparisonChart = ({ chartData }) => {
  if (!chartData) return null;

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default PriceComparisonChart;
