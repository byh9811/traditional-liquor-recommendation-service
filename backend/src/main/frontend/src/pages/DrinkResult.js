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

  // 현재 페이지 받아오는 data 
  let [page, setPage] = useState([]);
  let [data, setData] = useState([]);
  let [currentPage, setCurrentPage] = useState();

  let value = location.search;
  let property = searchParams.get('search'); // 잘 돼!! 


  let [arr,setArr] = useState([]); // 받아온 data 바뀌는 로직
  let [pageCountArr, setPageCountArr] = useState({}); // 받아온 page수!
  
  useEffect(() => { // 검색을 할 때 마다.... => 값도 얻어오고 페이지 수도 딱 해놔야돼!

    // 검색값이 바뀔 때 마다 ==> 
    // 1. data불러오고
    // 2. 페이지 값 변경함.
    axios.get(`/drinks?search=${property}&page=${ 1 }&limit=20`)
    .then((res) => {
      // 아이템을 받아왔을 때 ==> 
      // 서버 totalpage 받아오고 
      console.log(res.data.pageData);
      
      // totalpage변수로 받아주고... 
      setPageCountArr(res.data.pageData); // 
      console.log(res.data.data); // [ "입력해서 받아온 data개수가 뜸" ]
      setArr(res.data.data); // 값을 저장했어!!!!!! 
    })
  }, [ property ]) // 검색어가 계속 변경되고 앤터를 칠 때 마다... 
  // item, 
  console.log(`데이터 >> `);
  console.log(arr);
  console.log(`페이지 >> `);
  console.log(pageCountArr); // state
  let pageCnt = []; // 페이지가 담기는 진짜 배열 => 
  let start = ["<<"]; // 
  let end = [">>"]; // 
  // 1부터 - 
  for(let i = pageCountArr.startPage; i <= pageCountArr.endPage; i++) {
    pageCnt.push(i); // 1은 무조건 담기네. 
  }
  console.log(pageCnt);
  let newArr = [...start, ...pageCnt, ...end]; 


  // 내가 밑에 페이지를 클릭했을 때만 작동하는 함수
  const hello = (value) => {
    // console.log('called!!!');
    
    value === "<<" ? value = 1 : value = value;
    value === ">>" ? value = pageCountArr.totalPages : value = value;
    axios.get(`/drinks?search=${property}&page=${value}&limit=20`)
    .then((res) => {
      console.log(res);
      console.log(res.data);
      setData(res.data.data);
      setPageCountArr(res.data.pageData);
      console.log(pageCountArr);
      // let { startPage, endPage, totalPages, currentPage } = res.data.pageData;
      // console.log(startPage, endPage, totalPages, currentPage); 
      // setPage([startPage, endPage, totalPages, currentPage]);
      // setCurrentPage(currentPage);
      navigate(`/drinks?search=${property}&page=${currentPage}&limit=20`); // 페이지 이동!
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
            newArr.map((value) => 
            <div className={ result.page__btn }
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
