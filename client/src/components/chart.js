import React from 'react'
import { Line } from 'react-chartjs-2';


const Chart = (props) => {
  console.log("chart data props: ", props.data);
    const chartData = {
      // labels:  [],
      datasets: [{
      label: props.label,
      // labels: props.data.map(data => data[1]),
      // labels: [],
      // spanGaps: true,

      fill: false,
      lineTension: 0.5,
      backgroundColor: props.color,
      // borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      // borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      // pointBackgroundColor: '#fff',
      pointBorderWidth: 5,
      pointHoverRadius: 1,
      // pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      // pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [1,20, 50]
      // props.data
      // data: props.data.map(data => data[0]),

      }
    ]
  }

  return(

    <div className="chart">
      <Line
      width={450} height={250}
        data={chartData}

        options={{
          responsive: true,
          // maintainAspectRatio: false,
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
              type: 'category',
              offset: false,
              stepSize: 1,
              scaleLabel: {
                // type: 'linear',

                display: false,
                labelString: 'Date',
                fontSize: 10,
                },
            // type: 'linear',
              position: 'bottom',
              gridLines: {
                display: false
              },
              ticks: {
                // autoSkip: false,

                min: 0,
                max: 10,
                // stepSize: 1
              },
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true,
                max: 50
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
