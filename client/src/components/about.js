import React from 'react';
import AllGames from './allgames'
// import NewUser from './new_user'

export default () => {
  return (
    <div className="about">
      <h1> Welcome</h1>
        <p>
        This application allows you to record the data for each of your Fortnite games.  This data will then be collected so you can track your progress. After adding your games, please check out the stats tab to see your progress over time.
        </p>
        <AllGames />
    </div>
  )
}
