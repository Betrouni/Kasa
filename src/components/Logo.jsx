import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/images/logo_kasa.svg'

export default function Logo() {
  return (
    <>
      <NavLink className='navbar-brand' to="/Home">
        <img src={logo} alt="Logo Kasa" width={150}/>
      </NavLink>
    </>
  );
};

