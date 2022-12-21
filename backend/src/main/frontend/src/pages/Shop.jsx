import React from 'react'
import { Link } from 'react-router-dom';
import shop from './Shop.module.css';

import Area from '../components/Area';
export default function Shop() {
  let area = ['seoul','gyeonggi','inchon','chungcheong','busan','gyeongsang','jeolla','jeju'];
  let areaUrl = ['/shops/seoul','/shops/gyeonggi','/shops/inchon','/shops/chungcheong','/shops/busan','/shops/gyeongsang','/shops/jeolla','/shops/jeju'];
  let key = [1,2,3,4,5,6,7,8];
  return (
    <div className={shop.shop__wrapper}>
      {
        area.map((value, index) => <Area
        key = { key[index] }
        areaUrl = { areaUrl[index] }
        areaName = { value }
        />)
      }
    </div>
  )
}
