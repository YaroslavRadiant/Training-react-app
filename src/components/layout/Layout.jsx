import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './layout.css';

export default function Layout() {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/todo">ToDo page</NavLink>
        <NavLink to="/else">Else page</NavLink>
      </header>
      <Outlet />
    </>
  );
}
