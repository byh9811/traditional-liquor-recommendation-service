import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom'; // query string을 가져오기 위함! 

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
    console.log('shop detail 렌더링 됨!!!');
    let [data, setData] = useState([]);
    let [searchParams, setSearchParams] = useSearchParams();
    console.log('쿼리스트링 출력 >> ');
    const location = useLocation();
    console.log(location);
    console.log(location.search);
    const areaName = searchParams.get('areaName');
    // 쿼리스트링에서 areaName의 value를 가져옴! 

    useEffect(() => {
        axios.get(`/stores?areaName=${areaName}&page=1&limit=20`)
        .then((res) => {
            // console.log(res.data);
            // console.log(res.data.data);
            // console.log(res.data.data[0]);
            // console.log('호출됨');
            // setData(res.data.data); // 바꿔줌!!
            // data가 안 받아지는데...
            console.log('axios >> ', res); // 여기까지 됨.
            console.log(res);
            console.log(res.data);
            console.log(res.data.data);
            setData(res.data.data);
            console.log(res.data.data[0]);
        })
    }, [])
    console.log('state변수 >> ');
    console.log(data)
  return (
    <div className={ detail.detail__wrapper }>
        {/* ?뒤는 신경 안 써줘 돼! 일단.. react router /stores로 해도 돼! */}
        <div className={detail.shop__wrapper}>
            {
                data.map((value, index) => 
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
        <div className={detail.shop__paging}>
            
        </div>
    </div>
  )
}
