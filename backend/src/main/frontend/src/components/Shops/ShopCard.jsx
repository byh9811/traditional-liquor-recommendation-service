import React from 'react'
import { Link } from 'react-router-dom';
import CardProperty from './CardProperty';
import detail from './ShopDetail.module.css';

export default function ShopCard({ name, address, tel, menu, link }) {
    let properties = ["식당이름", "주소", "tel", "menu"]
    let className = [detail.shop__name, detail.shop__address,
        detail.shop__tel, detail.shop__menu
    ]
    let names = [ name, address, tel, menu]
  return (
    <a href={ link } className={detail.shop__card}>
        {
            properties.map((value, index) => 
                <CardProperty 
                    property = { properties[index] }
                    name = { names[index] }
                    className = { className[index] }
                />
            )
        }
    </a>
  )
}
