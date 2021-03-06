import React from 'react'
import { Line } from 'react-chartjs-2';


const Chart = (props) => {
  // console.log("chart data props: ", props.data);
  // const labels = [];


    const chartData = {
      labels: props.gameIds.map(game => ""),
      // labels: props.duoData.map(data => data[1]),
      datasets: [
        {
      label: 'Solo',
      pointHoverBackgroundColor: 'red',
      pointHoverRadius: 6,
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'red',
      borderColor: 'red',
      borderDashOffset: 1.5,
      data: props.soloData
        },
        {
        label: 'Squad',
        pointHoverBackgroundColor: 'orange',
        pointHoverRadius: 5,
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'orange',
        borderColor: 'orange',
        data: props.squadData
      },
      {
      label: '50v50',
      pointHoverBackgroundColor: 'green',
      pointHoverRadius: 4,
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'green',
      borderColor: 'green',
      data: props.fiftyData
      },
      {
      label: 'Duo',
      pointHoverBackgroundColor: 'purple',
      pointHoverRadius: 3,
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'purple',
      borderColor: 'purple',
      data: props.duoData
      // data: props.duoData.map(data => data[0]),
      },
      {
      label: 'Playground',
      pointHoverBackgroundColor: 'blue',
      pointHoverRadius: 8,
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'blue',
      borderColor: 'blue',
      data: props.playgroundData

      },

    ]
  }

  return(

    <div className="chart">
      <Line
      width={150} height={50}
        data={chartData}

        options={{
          responsive: true,

          // maintainAspectRatio: false,
            title: {
              display: true,
              text: props.chartTitle,
              fontColor: 'black',
              fontSize: 15
              },
            legend: {
              display: true,
              position: 'bottom',
              labels:{
                fontColor: 'black'
              }
              // labelString: 'Final Position'
              },
          scales: {
            xAxes: [{
              type: 'category',
              offset: false,
              stepSize: 1,
              fontColor: 'black',
              scaleLabel: {
                // type: 'linear',

                display: false,
                labelString: 'Date',
                fontSize: 10,
                fontColor: 'black',
                },
            // type: 'linear',
              position: 'bottom',
              gridLines: {
                display: false
              },
              ticks: {
                fontColor: 'black',
                // autoSkip: false,

                // min: 0,
                // max: 10,
                // stepSize: 1
              },
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true,
                fontColor: 'black',
                // max: 30
              },
              scaleLabel: {
                display: true,
                ticks: {
                  beginAtZero: true,
                  max: 100
                },
                labelString: props.chartTitle,
                fontSize: 10,
                fontColor: 'black',
              }
            }]
          }
        }}
      />

    </div>
  )
}

  export default Chart;
