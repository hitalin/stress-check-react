// ShowRadar.tsx
import React from 'react';
import { Radar } from 'react-chartjs-2';

import { Chart, RadialLinearScale, PointElement, LineElement, ArcElement } from 'chart.js';

// 必要な要素とスケールを登録
Chart.register(RadialLinearScale, PointElement, LineElement, ArcElement);

interface Factor {
  scale: string;
  value: number;
}

interface ShowRadarProps {
  factors: Factor[];
  level: 'high' | 'low';
}

const ShowRadar: React.FC<ShowRadarProps> = ({ factors, level }) => {
  const data = {
    labels: factors.map(factor => factor.scale),
    datasets: [{
      data: factors.map(factor => factor.value),
      borderColor: level === 'high' ? ['rgba(255, 0, 0, 1)'] : ['rgba(0, 0, 255, 1)'],
      backgroundColor: level === 'high' ? ['rgba(255, 0, 0, 0.2)'] : ['rgba(0, 0, 255, 0.2)'],
      pointBackgroundColor: level === 'high' ? ['rgba(255, 0, 0, 1)'] : ['rgba(0, 0, 255, 1)'],
      pointBorderColor: level === 'high' ? ['rgba(255, 0, 0, 1)'] : ['rgba(0, 0, 255, 1)'],
      pointHoverBackgroundColor: level === 'high' ? ['rgba(255, 0, 0, 1)'] : ['rgba(0, 0, 255, 1)'],
      pointHoverBorderColor: level === 'high' ? ['rgba(255, 0, 0, 1)'] : ['rgba(0, 0, 255, 1)'],
      pointRadius: 3,
      pointHitRadius: 10,
      lineTension: 0.3,
      fill: true,
      showLine: true,
    }]
  };

  return (
    <div style={{width: '30.0%', height: '30.0%'}}>
      <Radar
        data={data}
        options={{
          scales: {
            r: {
              suggestedMin: 0,
              suggestedMax: 5,
              ticks: {
                stepSize: 1
              }
            }
          },
          plugins: {
            legend: {
              display: false
            }
          }
        }}
        plugins={[RadialLinearScale, PointElement, LineElement, ArcElement]}
      />
    </div>
  );
};

export default ShowRadar;