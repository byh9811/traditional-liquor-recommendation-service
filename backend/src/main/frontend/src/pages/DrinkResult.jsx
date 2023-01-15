import axios from 'axios';
import React from 'react'
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom'; // query string을 가져오기 위함! 

import Item from '../components/Result/Item';
// css
import result from './DrinkResult.module.css';

export default function DrinkResult() {
  const navigate = useNavigate();
  const location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();
  let [inputData, setInputData] = useState([]);
  let pageNum = ['<<',1,2,3,4,5,6,7,8,9,10,">>"];

  let value = location.search;
  let property = searchParams.get('search'); // 잘 돼!! 
  // 검색값이 변할 때 마다 새로운 값을 불러오고싶어!!!!!!! 
  console.log('넘어온 data', property);
  let [arr,setArr] = useState([]);
  // `/drinks?search=${inputValue}&page=1&limit=20`
  useEffect(() => { // 검색을 할 때 마다.... 
    console.log('gogo');
    axios.get(`/drinks?search=${property}&page=${1}&limit=20`)
    .then((res) => {
      console.log(res);
      console.log(res.data);
      console.log(res.data.data);
      setArr(res.data.data);
    })
  }, [ property ])
  console.log(arr);
  console.log('변한 프로퍼티 >> ', property);
  let btnRef = useRef();
  let pageObj = {};
  const hello = (value) => {
    console.log('called!!!');
    value === "<<" ? value = 1 : value = value;
    value === ">>" ? value = 10 : value = value;
    axios.get(`/drinks?search=${property}&page=${value}&limit=20`)
    .then((res) => {
      console.log(res);
      console.log(res.data);
      console.log(res.data.data);
      console.log(res.data.pageData);
      pageObj = { ...(res.data.pageData) };
      navigate(`/drinks?search=${property}&page=${res.data.pageData.startPage}&limit=20`); // 페이지 이동!
      setArr(res.data.data);
    })
  }
  
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
        <div className={ result.paging__wrapper }>
          {
            pageNum.map((value) => 
            <div className={ result.page__btn } ref = { btnRef }
            onClick = { () => {
              hello(value);
            } }
            >{ value }</div>
            )
          }

        </div>
       </div>
    </div>
  )
}

// item컴포넌트 => itembox를 가리킴 
// item자식으로는 itemProperty라는 컴포넌트가 있는데 각각의 속성을 가리킴 

// 즉 result > item > itemProperty
