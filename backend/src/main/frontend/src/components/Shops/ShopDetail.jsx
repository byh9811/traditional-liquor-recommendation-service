import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import ShopCard from './ShopCard';

import detail from './ShopDetail.module.css';
// data (Array)
// id: Integer
// name: String
// address: String
// tel: String
// menu: Array (String)
// link: String
export default function ShopDetail() {
    let [shopData, setShopData] = useState([]); // 처음엔 빈배열 
    // data가져오는 함수!
    // /stores?areaName = seoul & page = 1
    async function getShopData() {
        try {
            let shop = await axios.get('/stores')
            .then((res) => {
                console.log(res);
            })
        }catch(e) {
            console.log(e);
        }
    }
    
    useEffect(() => {
        getShopData();
    }, []);
  return (
    <div className={ detail.detail__wrapper }>
        <div className={detail.shop__wrapper}>
            {
                shopData.map((value, index) => 
                    <ShopCard 
                    name = { value.name }
                    address = { value.address }
                    tel = { value.tel }
                    menu = { value.menu }
                    link = { value.link }
                    />
                )
            }
            
        </div>
    </div>
  )
}
