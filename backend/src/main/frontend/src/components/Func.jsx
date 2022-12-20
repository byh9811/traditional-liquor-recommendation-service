import React from 'react'
import { Link } from 'react-router-dom';
// css 
import func from './Func.module.css';
export default function Func({ linkUrl, img }) {
  return (
    <div className={func.img__wrapper}>
        <Link className={ func.link }>
            <img src={ img } alt="" />
            {/* ㅇㄴㅇ */}
        </Link>
    </div>
  )
}
