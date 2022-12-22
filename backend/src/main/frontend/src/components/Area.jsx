import React from 'react'
import { Link } from 'react-router-dom';
import shop from '../pages/Shop.module.css';

export default function Area({ areaUrl, areaName, key }) {
  return (
    <div className={shop.shop} key= { key }>
        <Link to={ areaUrl } className={shop.link}>{ areaName }</Link>
    </div>
  )
}
