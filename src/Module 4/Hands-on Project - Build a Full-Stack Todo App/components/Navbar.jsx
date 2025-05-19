import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul style={{ display: 'flex', listStyle: 'none', gap: '15px' }}>
      <li>
        <NavLink to="/" end style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/todos" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
          Todos
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
          Contact
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
