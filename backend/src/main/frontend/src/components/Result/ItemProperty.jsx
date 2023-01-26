import React from 'react'
import item from './Item.module.css';
export default function ItemProperty({ className, property, value }) {

  return (
    <div className={`${item.property} ${className}`}>
        <p className={item.props}>{ property }</p>
        <p className={item.val}>{ property === 'food' && value.length >= 2 ? value.join(',') : value }</p>
    </div>
  )
}

// 조건을 걸어주려면 반드시 