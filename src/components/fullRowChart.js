import React from 'react'
import { Chart } from "react-google-charts";
export const data = [
  ["Metabase FileData", "Channel File Data"],
  [2 / 3, -1],
  [2 / 3, -1],
  [2 / 3, -1],
  [-1 / 3, 0],
  [-1 / 3, 0],
  [-1 / 3, 0],
  [-1 / 3, 0],
];

export const options = {
 
  legend: { position: "bottom", maxLines: 2 },
  colors: ["#2171B5", "#F9D849"],
  interpolateNulls: true,
};


function fullRowChart() {
  return (
    <div className='container_wrapper addSpace'>
      <div className='fullChartcontainer'>
        <div className='ChartHeading'>
          <p className='chartTitle'>Daily Order Trend</p>
        </div>

        <Chart
        chartType="Histogram"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />

      </div>
        
    </div>
  )
}

export default fullRowChart