import React from 'react'
import { Line } from 'react-chartjs-2';


const Chart = (props) => {

    const chartData = {
      // labels:  [],
      datasets: [{
      label: props.label,
      fill: true,
      lineTension: 0.1,
      backgroundColor: props.color,
      // borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      // pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      // pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: props.data,
      }
    ]
  }
  return(

    <div className="chart">
      <Line
      width={250} height={250}
        data={chartData}

        options={{
          responsive: true,
          maintainAspectRatio: false,
            title: {
              display: true,
              text: props.mode,
              fontSize: 15
              },
            legend: {
              display: false,
              position: 'bottom',
              // labelString: 'Final Position'
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
              ticks: {
                beginAtZero: true,
                // max: 100
              },
              scaleLabel: {
                display: true,
                ticks: {
                  beginAtZero: true,
                  max: 100
                },
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

  export default Chart;
