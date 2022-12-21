import React from 'react'
import { Link } from 'react-router-dom'
// component
import List from './Nav/List';

// css file
import nav from './Navbar.module.css';

// font-awsome
import { faHouseUser, faWineBottle, faHeart, faShop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {
  return (
    <nav>
      <ul className={nav.lists}>
        {/* 여기까지 */}
        <List 
        id = "1"
        icon = { faHeart }
        url = "/"
        linkName = "home"
        />
        <List 
        id = "2"
        icon = { faWineBottle }
        url = "/test/index"
        linkName = "test"
        />
        <List 
        id = "3"
        icon = { faWineBottle }
        url = "/all/index"
        linkName = "Drinks"
        />
        <List 
        id = "4"
        icon = { faShop }
        url = "/shops"
        linkName = "SHOP"
        />
      </ul>
    </nav>
  )
}
