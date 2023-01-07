import React from 'react'
import { Link } from 'react-router-dom';
import shop from './Shop.module.css';

import Area from '../components/Area';
export default function Shop() {
  let area = ['Seoul','Gyeonggi','Incheon','Chungcheong','Busan','Gyeongsang','Jeolla','Jeju','Gangwon', 'Daejeon', 'Gwangju', 'Daegu', 'Ulsan', 'Sejong'];
  // let areaUrl = ['/stores?areaName="]; => 이거 안되니까 navigate로 가자...
  let key = [1,2,3,4,5,6,7,8];

  return (
    <div className={shop.shop__wrapper}>
      {
        area.map((value, index) => 
        <Area
        key = { key[index] }
        areaName = { value }
        />)
      }
    </div>
  )
}
