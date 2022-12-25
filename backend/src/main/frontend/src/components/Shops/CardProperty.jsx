import React from 'react'
import detail from './ShopDetail.module.css';

export default function CardProperty({ property, name, className }) {
  return (
    <p className={`${detail.shop__content} ${ className }`  }>
        { property } : { name }
    </p>
  )
}
