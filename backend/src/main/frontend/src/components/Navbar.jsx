import React from 'react'
// component
import List from './Nav/List';
// css file
import nav from './Navbar.module.css';
// font-awsome
import { faNoteSticky, faWineBottle, faHeart, faShop } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  let idList = ["1", "2", "3", "4"];
  let iconList = [faHeart, faNoteSticky, faWineBottle, faShop];
  let urlList = ['/', '/test/index', '/drinks?search=&page=1&limit=20',
  '/stores/index'
  ]
  let linkNameList = ["HOM2", "T2ST", "DRINK5", "5HOP"];
  return (
    <nav>
      <ul className={nav.lists}>
        {
          idList.map((value, index) => 
            <List 
              id = { idList[index] }
              icon = { iconList[index] }
              url = { urlList[index] }
              linkName = { linkNameList[index] }
            />
          )
        }
      </ul>
    </nav>
  )
}
