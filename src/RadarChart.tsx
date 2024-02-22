// RadarChart.tsx
import React from 'react';
import { Radar } from 'react-chartjs-2';

import { Chart, RadialLinearScale, PointElement, LineElement, ArcElement, Filler } from 'chart.js';

// 必要な要素とスケールを登録
Chart.register(RadialLinearScale, PointElement, LineElement, ArcElement, Filler );

interface Factor {
  scale: string;
  value: number;
}

interface RadarChartProps {
  factors: Factor[];
  level: 'high' | 'low';
}

const RadarChart: React.FC<RadarChartProps> = ({ factors, level }) => {
  const data = {
    labels: factors.map((factor) => factor.scale.split('\n').map((line) => line.trim())),
    datasets: [
      {
        data: factors.map((factor) => factor.value),
        borderWidth: 1,
        borderColor: level === 'high' ? ['rgba(255, 99, 132, 1)'] : ['rgba(100, 149, 237, 1)'],
        backgroundColor: level === 'high' ? ['rgba(255, 99, 132, 0.2)'] : ['rgba(100, 149, 237, 0.2)'],
        pointBackgroundColor: level === 'high' ? ['rgba(255, 99, 132, 1)'] : ['rgba(100, 149, 237, 1)'],
        pointBorderColor: level === 'high' ? ['rgba(255, 99, 132, 1)'] : ['rgba(100, 149, 237, 1)'],
        pointHoverBackgroundColor: level === 'high' ? ['rgba(255, 99, 132, 1)'] : ['rgba(100, 149, 237, 1)'],
        pointHoverBorderColor: level === 'high' ? ['rgba(255, 99, 132, 1)'] : ['rgba(100, 149, 237, 1)'],
        pointRadius: 2,
        pointHitRadius: 8,
      },
    ],
  };

  return (
    <Radar
      data={data}
      options={{
        scales: {
          r: {
            suggestedMin: 0,
            suggestedMax: 5,
            ticks: {
              stepSize: 1,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
      plugins={[RadialLinearScale, PointElement, LineElement, ArcElement]}
    />
  );
};

export default RadarChart;

