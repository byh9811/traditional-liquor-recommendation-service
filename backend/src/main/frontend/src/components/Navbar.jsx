import React from 'react'
import { Link } from 'react-router-dom'
import List from './Nav/List';
import nav from './Navbar.module.css';
export default function Navbar() {
  return (
    <nav>
      <ul className={nav.lists}>
        <List 
        id = "1"
        url = "/"
        linkName = "home"
        />
        <List 
        id = "2"
        url = "/test/index"
        linkName = "test"
        />
        <List 
        id = "3"
        url = "/all/index"
        linkName = "ALL"
        />
        <List 
        id = "4"
        url = "/shops"
        linkName = "SHOP"
        />
      </ul>
    </nav>
  )
}
