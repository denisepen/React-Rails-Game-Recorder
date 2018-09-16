import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'
import { fetchGames } from '../actions/index'
import PieChart from '../components/pie_chart'

class GameStats extends React.Component {
  constructor (props) {
    super(props)

    // this.state = props
    this.props.fetchGames();
  }

// componentWillMount() {
//   // this.props.fetchGames();
//   this.renderCharts()
// }

componentWillUnmount () {
  this.props = {games: []}
}

createPieChart () {
  const soloGames =this.props.games.filter(game => (game.mode === 'Solo'))
  const squadGames = this.props.games.filter(game => (game.mode === 'Squads'))
  const fiftyvGames = this.props.games.filter(game => (game.mode === '50v50'))
  const duoGames = this.props.games.filter(game => (game.mode === 'Duos'))
  const playgroundGames = this.props.games.filter(game => (game.mode === 'Playground'))

  const pieData = [soloGames.length, squadGames.length, fiftyvGames.length, duoGames.length, playgroundGames.length]

  return (
    <PieChart data={pieData} total={this.props.games.length}/>
  )


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

 //  const playgroundKills = [];
 //  const PlaygroundKills = playgroundGames.map(game => {
 //    return playgroundKills.push(game.max_kills)
 //   }
 // );

  const playgroundKills = playgroundGames.map(game => game.max_kills)


console.log("PG Games", playgroundGames);
console.log("PG Kills", playgroundKills);
//  to calc data for final position playing playground mode
 const pgFinalPlace = [];
   const PgFinalPlace = playgroundGames.map(game => {
     return pgFinalPlace.push(game.final_place)
     });

    // const  pieData = [soloGames.length, squadGames.length, fiftyvGames.length, duoGames.length, playgroundGames.length]

 return (
   <div>

       <tbody>
           <tr>
           <td> Total Kills </td>
             <td>
               <Chart  data={soloKills} color="red" mode={'Solo'} y={'Total Kills'}/>
             </td>
             <td>
               <Chart  data={duoKills} color="purple" mode={'Duos'} y={'Total Kills'} />
             </td>
             <td>
               <Chart  data={squadKills} color="orange"  mode={'Squads'} y={'Total Kills'}/>
             </td>
             <td>
               <Chart  data={fiftyvKills} color="green"  mode={'50v50'} y={'Total Kills'}/>
             </td>
             <td>
               <Chart  data={playgroundKills} color="blue" mode={'Playground'}  y={'Total Kills'}/>
             </td>
           </tr>
           <tr>
           <td> Final Position </td>
             <td>
               <Chart  data={soloFinalPlace} color="red" mode={'Solo'} y={'Final Position'}/>
             </td>
             <td>
               <Chart  data={duoFinalPlace} color="purple" mode={'Duos'} y={'Final Position'}/>
             </td>
             <td>
               <Chart  data={squadFinalPlace} color="orange" mode={'Squads'} y={'Final Position'}/>
             </td>
             <td>
               <Chart  data={fiftyvFinalPlace} color="green" mode={'50v50'} y={'Final Position'}/>
             </td>
             <td>
               <Chart  data={pgFinalPlace} color="blue" mode={'Playground'} y={'Final Position'}/>
             </td>
           </tr>
        </tbody>
    </div>
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
             <Chart  data={overallKills} color="green" mode={'All Games'} />
           </td>

           <td>
             <Chart  data={overallFinalPlace} color="blue" mode={'All Games'} />
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
          {this.createPieChart()}
        </div>
          <br/>

       <table className="table table-hover">
         <thead>
           <tr>
            <th>  </th>
             <th> </th>
             <th>  </th>
             <th> </th>
             <th>  </th>
                <th>  </th>
           </tr>
         </thead>

         {this.createModeCharts()}

       </table>
      </div>
    );
  }


}

const mapDispatchToProps = dispatch => {
  return {

    fetchGames: () => {
      dispatch(fetchGames())
    }
  }
}

function mapStateToProps(state){
  // debugger;
  return {games: state.games}
}
export default connect (mapStateToProps, mapDispatchToProps)(GameStats);

// <div>
//   <table>
//     <thead>
//       <th> Game Kills Over Time</th>
//       <th> Final Place Over Time </th>
//     </thead>
//       {this.renderCharts()}
//     </table>
//   </div>
