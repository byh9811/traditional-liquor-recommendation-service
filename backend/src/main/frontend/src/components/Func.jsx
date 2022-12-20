import React from 'react'
import { Link } from 'react-router-dom';
// css 
import func from './Func.module.css';
import main from '../pages/Home.module.css';
export default function Func({ linkUrl, img }) {
  return (
    <div className={main.content}>
        <Link to={ linkUrl } className={main.link}>
          <img src={ img } alt="" />
        </Link>
      </div>
  )
}
