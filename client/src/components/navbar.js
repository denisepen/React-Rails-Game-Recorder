import React from 'react';
import { NavLink } from 'react-router-dom';

 const Navbar = () =>
  <div>
    <NavLink
      to="/"


      /* add prop for activeStyle */
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/new"
      exact

      activeStyle={{
        background: 'darkblue'
      }}
    >New</NavLink>
    <NavLink
      to="/stats"
      exact

      activeStyle={{
        background: 'darkblue'
      }}
      >Stats</NavLink>
  </div>;

  export default Navbar
