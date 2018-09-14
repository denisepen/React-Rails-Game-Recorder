import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'

class GameStats extends Component {
//   constructor (props) {
//     super(props)
//     debugger
// }

componentDidMount () {
  this.renderCharts()
}


 renderCharts(){
   // debugger;
   if (this.props.games === []){
     return <div>Loading </div>
   } else {
     console.log("This.props:", this.props.games);

  const overallKills = [];
   const OverallKills = this.props.games.map(game => {
     return overallKills.push(game.max_kills)
    }
  );

  const overallFinalPlace = [];

    const OverallFinalPlace = this.props.games.map(game => {
      return overallFinalPlace.push(game.final_place)
      });

    const finalPosition = this.props.games.map(game =>
     game.final_place);

   return (
     <tbody>
         <tr>
           <td>
             <Chart  data={overallKills} color="green" svgWidth={25} svgHeight={20} />
           </td>
         </tr>
         <tr>
           <td>
             <Chart  data={overallFinalPlace} color="blue" svgWidth={25} svgHeight={20} />
           </td>
         </tr>
      </tbody>
   )
 }
}



   //   <div> Overall charts
   //   <p>Overall Kills </p>
   //   <div>
   //    <Chart  data={overallKills} color="green" svgWidth={25} svgHeight={20} />
   //    </div>
   //
   //    <p> Final Position </p>
   //    <div>
   //    <Chart  data={overallKills} color="green" svgWidth={25} svgHeight={20} />
   //    </div>
   //   </div>
   // )
   // }
  render () {
    // debugger;
    return (
      // <div>
      //   {this.renderCharts(this.props)}
      // </div>
      <table>
        <thead>
          <th> Total Kills</th>
          <th> Final Place </th>
        </thead>


        {this.renderCharts()}


      </table>
      // <table className="table table-hover">
      //   <thead>
      //     <tr>
      //       <th> Game Mode</th>
      //       <th> Total Kills </th>
      //       <th> Final Position</th>
      //       <th> Comments</th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //   {this.renderCharts()}
      //   </tbody>
      // </table>
    );
  }


}

function mapStateToProps(state){
  // debugger;
  return {games: state.games}
}
export default connect (mapStateToProps)(GameStats);
