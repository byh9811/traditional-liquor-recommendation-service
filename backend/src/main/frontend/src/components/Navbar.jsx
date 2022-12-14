import React from 'react'
import { Link } from 'react-router-dom';
import navbar from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav>
        <Link to='/' className={ navbar.logo }>Home</Link>
        <Link to='/shop/index' className={ navbar.logo }>shop</Link>
    </nav>
  )
}
