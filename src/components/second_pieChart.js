import React, { Component } from 'react';
import {CanvasJSChart} from 'canvasjs-react-charts'

class second_pieChart extends Component {	
	render() {
		const options = {
			animationEnabled: true,
			exportEnabled: false,
			theme: "light1",
			
			data: [{
				type: "pie",
				indexLabel: "{label}: {y}%",		
				startAngle: -90,
				dataPoints: [
					{ y: 20, label: "Airfare" },
					{ y: 24, label: "Food & Drinks" },
					{ y: 20, label: "Accomodation" },
					{ y: 14, label: "Transportation" },
					{ y: 12, label: "Activities" },
					{ y: 10, label: "Misc" }	
				]
			}]
		}
		
		return (
		<div>
            <div className='graph_headingCard'>
      <div className='row'>
        <div className='col-12'>
          <span className='graphTitle'>Brand Distribution</span>
        </div>
      </div>
    </div>
			<CanvasJSChart options = {options} />
		</div>
		);
	}
}

export default second_pieChart