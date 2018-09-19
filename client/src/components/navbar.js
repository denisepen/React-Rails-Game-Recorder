import React from 'react';
import { NavLink } from 'react-router-dom';

 const Navbar = () =>
  <div>
    <NavLink
      to="/"
      /* add prop for activeStyle */
      activeStyle={{
        background: 'yellow'
      }}
    >Home</NavLink>

    <NavLink
      to="/new"
      exact
      activeStyle={{
        background: 'yellow'
      }}
    >New</NavLink>

    <NavLink
      to="/stats"
      exact
      activeStyle={{
        background: 'yellow'
      }}
      >Stats</NavLink>
      <NavLink
        to="/signup"
        exact
        activeStyle={{
          background: 'yellow'
        }}
        >Sign Up</NavLink>
  </div>;

  export default Navbar
