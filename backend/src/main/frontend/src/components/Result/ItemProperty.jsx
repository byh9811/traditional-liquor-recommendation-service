import React from 'react'
import item from './Item.module.css';
export default function ItemProperty({ className, property, value }) {
    
  return (
    <div className={`${item.property} ${className}`}>
        <p className={item.props}>{ property }</p>
        <p className={item.val}>{ value }</p>
    </div>
  )
}
