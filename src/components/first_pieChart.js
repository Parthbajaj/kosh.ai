import React from 'react'
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Swiggy", 44 ],
  ["Zomato", 18 ],
  ["Amazon", 9 ],
  ["EatFit", 29 ],
];

var options = {
  colors: ['#EC8639', '#B53233', '#141920', '#D83276']
};


function first_pieChart() {
  return (
    <>
    <div className='graph_headingCard'>
      <div className='row'>
        <div className='col-6'>
          <span className='graphTitle'>Order Distribution</span>
        </div>
        <div className='col-6'>
          <div className='wholeContainer'>
            <span className='orders'>Orders</span>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
            <span className='graphAmount'>Amount</span>

          </div>
         
        </div>
      </div>
    </div>
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </>
    
  )
}

export default first_pieChart