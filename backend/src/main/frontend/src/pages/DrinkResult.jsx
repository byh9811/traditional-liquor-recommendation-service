import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom'; // query string을 가져오기 위함! 
import Bar from '../components/Pagination/Bar';
import Item from '../components/Result/Item';
// css
import result from './DrinkResult.module.css';

export default function DrinkResult() {
  
  const location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();
  let [inputData, setInputData] = useState([]);
  
  let value = location.search;
  let property = searchParams.get('search'); // 잘 돼!! 
  // 검색값이 변할 때 마다 새로운 값을 불러오고싶어!!!!!!! 
  console.log('넘어온 data', property);
  let [arr,setArr] = useState([]);
  // `/drinks?search=${inputValue}&page=1&limit=20`
  useEffect(() => { // 검색을 할 때 마다.... 
    console.log('gogo');
    axios.get(`/drinks?search=${property}&page=1&limit=20`)
    .then((res) => {
      console.log(res);
      console.log(res.data);
      console.log(res.data.data);
      setArr(res.data.data);
    })
  }, [ property ])
  console.log(arr);
  return (
    <div className={result.result__wrapper}>
         <div className={result.title}>
            <h2>Drink Result</h2>
         </div>
         <div className={result.result__items}>
          {
            arr.map((value) => 
               <Item   
                id = {value.id}
                title = {value.title}
                  price = {value.price}
                  volume = {value.volume}
                  type = {value.type}
                  alcohol = {value.alcohol}
                  food = {value.food}
                />
            )
            
         }
       </div> 
       <div className={result.paging__bar}>
        <Bar />
       </div>
    </div>
  )
}

// item컴포넌트 => itembox를 가리킴 
// item자식으로는 itemProperty라는 컴포넌트가 있는데 각각의 속성을 가리킴 

// 즉 result > item > itemProperty
