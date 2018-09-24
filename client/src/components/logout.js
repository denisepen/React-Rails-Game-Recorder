import React from 'react';
import { Redirect } from 'react-router-dom'

export default  () => {

  
  const logout = () => {localStorage.removeItem("jwtToken")}


  return (
<div className="logout">
    { (localStorage.getItem('jwtToken')) ?
        <div>
          <h1> Please Visit Again and Save More Games</h1>
          <button onClick={logout}>
            Logout
          </button>
          </div>
     : <Redirect to='/' /> }
    </div>
   )
}
