import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import {Bar, Line, Pie} from 'react-chartjs-2';


export default (props) => {

    const chartData = {
      labels:  ['Solo', 'Squad', '50v50', 'Duo', 'Playground'],
      datasets: [{
        label: 'Percentage of Game Play',
        data: props.data,
        backgroundColor: ['red', 'green', 'blue', 'orange', 'purple']
      }]
    }


  return(
    <div className="chart">
      <Pie
        data={chartData}

        options={{

          maintainAspectRatio: false,
            title: {
              display: true,
              text: 'Games By Mode',
              fontSize: 15
              },
            legend: {
              display: true,
              position: 'right',
              text: 'Percentage of Game Play'
              }
        }}
      />

    </div>
  )
}
