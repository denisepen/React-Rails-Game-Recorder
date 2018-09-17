import React from 'react'
import {Pie} from 'react-chartjs-2';


export default (props) => {

    const chartData = {
      labels:  ['Solo', 'Squad', '50v50', 'Duo', 'Playground'],
      datasets: [{
        // label: 'Game Play',
        data: props.data,
        backgroundColor: ['red', 'orange', 'green', 'purple', 'blue']
      }],
      borderWidth: 1,
      borderColor: 'gray',
      hoverBorderWidth: 3,
      hoverBorderColor: 'black'
    }


  return(
    <div className="chart">
      <Pie
        data={chartData}
        width={450}  height={350}
        options={{
          layout:{
            padding:{
              left: 50,

            }
          },
          toolTips:{
            enabled: true
          },

          maintainAspectRatio: false,
            title: {
              display: true,
              text: 'Total Games Played by Game Mode',
              fontSize: 20
              },
            legend: {
              display: true,
              position: 'bottom',
              // text: 'Percentage of Game Play'
              labels:{
                fontColor: 'black'
              }
              }
        }}
      />

    </div>
  )
}
