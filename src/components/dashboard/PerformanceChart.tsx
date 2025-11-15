import React from 'react';
import ReactECharts from 'echarts-for-react';
import { faker } from '@faker-js/faker';

const PerformanceChart: React.FC = () => {
  const options = {
    grid: { top: 30, right: 20, bottom: 50, left: 50 },
    xAxis: {
      type: 'category',
      data: Array.from({ length: 12 }, (_, i) => faker.date.month({ abbr: true })),
      axisLine: {
        lineStyle: {
          color: '#313547'
        }
      },
      axisLabel: {
        color: '#A0A3B1'
      }
    },
    yAxis: {
      type: 'value',
      splitLine: {
        lineStyle: {
          color: '#232634'
        }
      },
      axisLabel: {
        color: '#A0A3B1'
      }
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(35, 38, 52, 0.9)',
      borderColor: '#313547',
      textStyle: {
        color: '#F0F0F0'
      }
    },
    legend: {
      data: ['API Calls', 'Deployments'],
      textStyle: {
        color: '#A0A3B1'
      },
      bottom: 0,
    },
    series: [
      {
        name: 'API Calls',
        data: Array.from({ length: 12 }, () => faker.number.int({ min: 500, max: 5000 })),
        type: 'line',
        smooth: true,
        showSymbol: false,
        itemStyle: {
          color: '#7B61FF'
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [{
              offset: 0, color: 'rgba(123, 97, 255, 0.3)'
            }, {
              offset: 1, color: 'rgba(123, 97, 255, 0)'
            }]
          }
        }
      },
      {
        name: 'Deployments',
        data: Array.from({ length: 12 }, () => faker.number.int({ min: 10, max: 100 })),
        type: 'line',
        smooth: true,
        showSymbol: false,
        itemStyle: {
          color: '#4A90E2'
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [{
              offset: 0, color: 'rgba(74, 144, 226, 0.3)'
            }, {
              offset: 1, color: 'rgba(74, 144, 226, 0)'
            }]
          }
        }
      }
    ]
  };

  return (
    <div className="bg-surface-primary p-6 rounded-lg border border-border-color h-full">
      <h3 className="text-lg font-semibold text-text-primary mb-4">Platform Performance</h3>
      <div className="h-[300px]">
        <ReactECharts option={options} style={{ height: '100%', width: '100%' }} notMerge={true} lazyUpdate={true} />
      </div>
    </div>
  );
};

export default PerformanceChart;
