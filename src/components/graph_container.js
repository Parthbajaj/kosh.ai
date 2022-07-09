import React from 'react'
import FirstChart from './first_pieChart'
import SecondChart from './second_pieChart'
import StackedChart from './untitled.png'

function graph_container() {
  return(
<div className='container_wrapper addSpace'>
    <div className='row'>
        <div className='col-4'>
            <div className='graph_box'>
                <FirstChart />
            </div>
        </div>
        <div className='col-4'>
          
            <div className='graph_box alignContent'>
              <div className='graph_headingCard'>
                <div className='row'>
                  <div className='col-12'>
                    <span className='graphTitle'>Product Distribution</span>
                  </div>
                </div>
              </div>
              <div className='img_wrapper'>
                <img src={StackedChart } />
              </div>
                
            </div>
        </div>
        <div className='col-4'>
            <div className='graph_box'>
                <SecondChart />
            </div>
        </div>
    </div>
</div>
    
  ) 
  
}

export default graph_container