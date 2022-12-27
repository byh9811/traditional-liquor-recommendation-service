import React from 'react'
import { Link } from 'react-router-dom'
// component
import List from './Nav/List';

// css file
import nav from './Navbar.module.css';

// font-awsome
import { faNoteSticky, faWineBottle, faHeart, faShop } from "@fortawesome/free-solid-svg-icons";
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
        linkName = "HOM2"
        />
        <List 
        id = "2"
        icon = { faNoteSticky }
        url = "/test/index"
        linkName = "T2ST"
        />
        <List 
        id = "3"
        icon = { faWineBottle }
        url = "/all/index"
        linkName = "DRINK5"
        />
        <List 
        id = "4"
        icon = { faShop }
        url = "/stores/index"
        linkName = "5HOP"
        />
      </ul>
    </nav>
  )
}
