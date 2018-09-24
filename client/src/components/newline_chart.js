import React from 'react'
import { Line, Scatter, Bar } from 'react-chartjs-2';


const Chart = (props) => {
  // console.log("chart data props: ", props.data);
  // const labels = [];


    const chartData = {
      labels: props.gameIds.map(game => ""),
      // labels: props.duoData.map(data => data[1]),
      datasets: [
        {
      label: 'Solo Kills',
      pointHoverBackgroundColor: 'gray',
      pointHoverRadius: 5,
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'red',
      borderColor: 'red',
      borderDashOffset: 1.5,
      data: props.soloData
        },
        {
        label: 'Squad Kills',
        pointHoverBackgroundColor: 'gray',
        pointHoverRadius: 5,
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'orange',
        borderColor: 'orange',
        data: props.squadData
      },
      {
      label: '50v50 Kills',
      pointHoverBackgroundColor: 'gray',
      pointHoverRadius: 5,
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'green',
      borderColor: 'green',
      data: props.fiftyData
      },
      {
      label: 'Duo Kills',
      pointHoverBackgroundColor: 'gray',
      pointHoverRadius: 5,
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'purple',
      borderColor: 'purple',
      data: props.duoData
      // data: props.duoData.map(data => data[0]),
      },
      {
      label: 'Playground Kills',
      pointHoverBackgroundColor: 'gray',
      pointHoverRadius: 5,
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
      <Scatter
      width={150} height={50}
        data={chartData}

        options={{
          responsive: true,
          // maintainAspectRatio: false,
            title: {
              display: true,
              text: props.chartTitle,
              fontSize: 15
              },
            legend: {
              display: true,
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

                // min: 0,
                // max: 10,
                // stepSize: 1
              },
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true,
                // max: 30
              },
              scaleLabel: {
                display: true,
                ticks: {
                  beginAtZero: true,
                  max: 100
                },
                labelString: props.chartTitle,
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
