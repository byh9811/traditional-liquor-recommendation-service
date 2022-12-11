import React from 'react'
import { Link } from 'react-router-dom'
import navbar from './Navbar.module.css';
export default function Navbar() {
  return (
    <nav>
        <div className={navbar.logo}>
            <Link className={navbar.title} to='/'>Stupping</Link>
        </div>
        <div className={navbar.list}>
            <Link className={navbar.list__sub} to='/login'>login</Link>
            <Link className={navbar.list__sub} to='/login'>login</Link>
            <Link className={navbar.list__sub} to='/login'>login</Link>
            <Link className={navbar.list__sub} to='/login'>login</Link>
        </div>
        <div className={navbar.menu}>dsd</div>
    </nav>
  )
}
