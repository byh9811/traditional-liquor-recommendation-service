import React from 'react'
import { Link } from 'react-router-dom'
import list from './List.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function List({ id, icon, url, linkName }) {
    
  return (
    <li className={ list.link__box } key={ id }>
        <Link to={ url } className={list.link}>
          <FontAwesomeIcon icon={ icon } className={list.icon}/>
          <p>{ linkName }</p>
        </Link>

    </li>
  )
}
