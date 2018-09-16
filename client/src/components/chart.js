import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import {Bar, Line, Pie} from 'react-chartjs-2';


export default (props) => {

    const chartData = {
      // labels:  [],
      datasets: [{
        label: 'Total Kills per Game',
        data: props.data,
        backgroundColor: props.color
      }]
    }


  return(
    // <div>
      // <Sparklines height={120} width={180}
      //   data={props.data}>
      //   <SparklinesLine  color={props.color} />
      //   {/*<SparklinesReferenceLine type="avg" />*/}
      //
      // </Sparklines>

    // </div>

    <div className="chart">
      <Line
        data={chartData}

        options={{

          maintainAspectRatio: false,
            title: {
              display: true,
              text: props.mode,
              fontSize: 15
              },
            legend: {
              display: false,
              position: 'bottom'
              },
          scales: {
            xAxes: [{
              scaleLabel: {
                display: false,
                labelString: 'Date',
                fontSize: 10
              },
            // type: 'linear',
            position: 'bottom',
            gridLines: {
                display: false
                }
              }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: props.y,
                fontSize: 10
              }
            }]
          }
        }}
      />

    </div>
  )
}
