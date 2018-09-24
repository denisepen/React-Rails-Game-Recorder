import React from 'react';
// import NewUser from './new_user'

export default  () => {

  const logout = () => {localStorage.removeItem("jwtToken")}
  return (
    <div className="logout">
      <h1> Please Visit Again and Save More Games</h1>
      <button onClick={logout()}>
        Logout
        </button>

    </div>
  )
}
