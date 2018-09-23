import React from 'react'
import { Line, Scatter, Bar } from 'react-chartjs-2';


const Chart = (props) => {
  // console.log("chart data props: ", props.data);
  const labels = [];


    const chartData = {
      // labels:  [],
      datasets: [
        {
        labels: props.soloData.map(game => "Game: " + game),

      label: 'Solo Kills',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'red',
      borderColor: 'red',
      borderDashOffset: 1.5,
      data: props.soloData
        },
        {
        label: 'Squad Kills',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'orange',
        borderColor: 'orange',
        data: props.squadData
      },
      {
      label: '50v50 Kills',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'green',
      borderColor: 'green',
      data: props.fiftyData
      },
      {
      label: 'Duo Kills',
      // labels: props.duoData.map(data => data[1]),
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'purple',
      borderColor: 'purple',
      data: props.duoData
      // data: props.duoData.map(data => data[0]),
      },
      {
      label: 'Playground Kills',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'blue',
      borderColor: 'blue',
      data: props.playgroundData

      },

    ]
  }
console.log("Labels", labels)
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
              text: 'Total Game Kills',
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

                min: 0,
                max: 10,
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
                labelString: "Total Kills",
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
