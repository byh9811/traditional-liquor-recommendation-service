import React from 'react'
import { Link } from 'react-router-dom';
import shop from './Shop.module.css';

import Area from '../components/Area';
export default function Shop() {
  return (
    <div className={shop.shop__wrapper}>
        <Area 
        areaUrl = "/shop/seoul"
        areaName = "SEOUL" 
        />
        <Area 
        areaUrl = "/shop/gyeonggi"
        areaName = "GYEONGGI" 
        />
        <Area 
        areaUrl = "/shop/inchon"
        areaName = "INCHON" 
        />
        <Area 
        areaUrl = "/shop/chungcheong"
        areaName = "CHUNCHEONG" 
        />
        <Area 
        areaUrl = "/shop/busan"
        areaName = "BUSAN" 
        />
        <Area 
        areaUrl = "/shop/gyeongsang"
        areaName = "GYEONGSANG" 
        />
        <Area 
        areaUrl = "/shop/jeolla"
        areaName = "JEOLLA" 
        />
        <Area 
        areaUrl = "/shop/jeju"
        areaName = "JEJU" 
        />
    </div>
  )
}
