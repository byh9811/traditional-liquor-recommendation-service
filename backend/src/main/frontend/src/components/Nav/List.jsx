import React from 'react'
import { Link } from 'react-router-dom'
import list from './List.module.css';

export default function List({ id, linkName, url }) {
    
  return (
    <li className={ list.link__box } key={ id }>
        <Link to={ url } className={list.link}>{ linkName }</Link>
    </li>
  )
}
