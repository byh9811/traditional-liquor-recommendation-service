import React from 'react'
import CardProperty from './CardProperty';
import detail from './ShopDetail.module.css';
export default function ShopCard({ name, address, tel, menu, link }) {
    
  return (
    <div className={detail.shop__card}>
        <CardProperty 
            property = "식당이름"
            name = { name }
            className = { detail.shop__name }
        />
        <CardProperty 
            property = "주소"
            name = { address }
            className = { detail.shop__address }
        />
        <CardProperty 
            property = "tel"
            name = { tel }
            className = { detail.shop__tel }
        />
        <CardProperty 
            property = "menu"
            name = { menu }
            className = { detail.shop__menu }
        />
        <CardProperty 
            property = "링크"
            name = { link }
            className = { detail.shop__link }
        />
    </div>
  )
}
