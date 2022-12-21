import React from 'react'
import { Link } from 'react-router-dom';
import shop from '../pages/Shop.module.css';

export default function Area({ areaUrl, areaName }) {
  return (
    <div className={shop.shop}>
        <Link to={ areaUrl } className={shop.link}>{ areaName }</Link>
    </div>
  )
}
