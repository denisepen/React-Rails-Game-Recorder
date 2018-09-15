import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'

class GameStats extends React.Component {

componentDidMount () {
  this.renderCharts()
}

createModeCharts () {
  const soloGames = this.props.games.filter(game =>
    { return (game.mode === 'Solo') })

    const soloKills = [];
     const SoloKills = soloGames.map(game => {
       return soloKills.push(game.max_kills)
      }
    );

    const soloFinalPlace = [];
      const SoloFinalPlace = soloGames.map(game => {
        return soloFinalPlace.push(game.final_place)
        });

  const squadGames = this.props.games.filter(game =>
    { return (game.mode === 'Squads') })

    const squadKills = [];
    const SquadKills = squadGames.map(game => {
      return squadKills.push(game.max_kills)
     }
   );

   const squadFinalPlace = [];
     const SquadFinalPlace = squadGames.map(game => {
       return squadFinalPlace.push(game.final_place)
       });

  const fiftyvGames = this.props.games.filter(game =>
    { return (game.mode === '50v50') })

  const fiftyvKills = [];
  const FiftyvKills = fiftyvGames.map(game => {
    return fiftyvKills.push(game.max_kills)
   }
 );

 const fiftyvFinalPlace = [];
   const FiftyvFinalPlace = fiftyvGames.map(game => {
     return fiftyvFinalPlace.push(game.final_place)
     });

  const duoGames = this.props.games.filter(game =>
    { return (game.mode === 'Duos') })

    const duoKills = [];
    const DuoKills = duoGames.map(game => {
      return duoKills.push(game.max_kills)
     }
   );

// calc final place over time while playing duos
   const duoFinalPlace = [];
     const DuoFinalPlace = duoGames.map(game => {
       return duoFinalPlace.push(game.final_place)
       });

  const playgroundGames = this.props.games.filter(game =>
    { return (game.mode === 'Playground') })

  const playgroundKills = [];
  const PlaygroundKills = playgroundGames.map(game => {
    return playgroundKills.push(game.max_kills)
   }
 );

//  to calc data for final position playing playground mode
 const pgFinalPlace = [];
   const PgFinalPlace = playgroundGames.map(game => {
     return pgFinalPlace.push(game.final_place)
     });

 return (
   <tbody>
       <tr>
       <td> Total Kills </td>
         <td>
           <Chart  data={soloKills} color="red" svgWidth={25} svgHeight={20} />
         </td>
         <td>
           <Chart  data={duoKills} color="purple" svgWidth={25} svgHeight={20} />
         </td>
         <td>
           <Chart  data={squadKills} color="orange" svgWidth={25} svgHeight={20} />
         </td>
         <td>
           <Chart  data={fiftyvKills} color="green" svgWidth={25} svgHeight={20} />
         </td>
         <td>
           <Chart  data={playgroundKills} color="blue" svgWidth={25} svgHeight={20} />
         </td>
       </tr>
       <tr>
       <td> Final Position </td>
         <td>
           <Chart  data={soloFinalPlace} color="red" svgWidth={25} svgHeight={20} />
         </td>
         <td>
           <Chart  data={duoFinalPlace} color="purple" svgWidth={25} svgHeight={20} />
         </td>
         <td>
           <Chart  data={squadFinalPlace} color="orange" svgWidth={25} svgHeight={20} />
         </td>
         <td>
           <Chart  data={fiftyvFinalPlace} color="green" svgWidth={25} svgHeight={20} />
         </td>
         <td>
           <Chart  data={pgFinalPlace} color="blue" svgWidth={25} svgHeight={20} />
         </td>
       </tr>
    </tbody>
 )

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

           <td>
             <Chart  data={overallFinalPlace} color="blue" svgWidth={25} svgHeight={20} />
           </td>
         </tr>
      </tbody>
   )
 }
}

  render () {
    return (
      <div>
        <div>
          <table>
            <thead>
              <th> Game Kills Over Time</th>
              <th> Final Place Over Time </th>
            </thead>
              {this.renderCharts()}
            </table>
          </div>
          <br/>

       <table className="table table-hover">
         <thead>
           <tr>
            <th> Event </th>
             <th> Solo</th>
             <th> Duo </th>
             <th> Squad</th>
             <th> 50v50 </th>
                <th> Playground </th>
           </tr>
         </thead>

         {this.createModeCharts()}

       </table>
      </div>
    );
  }


}

function mapStateToProps(state){
  // debugger;
  return {games: state.games}
}
export default connect (mapStateToProps)(GameStats);
