import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation, useSearchParams ,useNavigate} from 'react-router-dom'; // query string을 가져오기 위함! 

import ShopCard from './ShopCard';

import result from '../../pages/DrinkResult.module.css';
import detail from './ShopDetail.module.css';
// data (Array)
// id: Integer
// name: String
// address: String
// tel: String
// menu: Array (String)
// link: String
export default function ShopDetail() {
    const navigate = useNavigate();
    
    console.log('shop detail 렌더링 됨!!!');
    let [data, setData] = useState([]);
    let [searchParams, setSearchParams] = useSearchParams();
    console.log('쿼리스트링 출력 >> ');
    const location = useLocation();
    console.log(location);
    console.log(location.search);
    const areaName = searchParams.get('areaName');
    // 쿼리스트링에서 areaName의 value를 가져옴! 

    let [arr,setArr] = useState([]); // 받아온 data 바뀌는 로직
    let [pageCountArr, setPageCountArr] = useState({}); // 받아온 page수!
  
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
            setPageCountArr(res.data.pageData); // 
            console.log(res.data.data); // [ "입력해서 받아온 data개수가 뜸" ]
            setArr(res.data.data); // 값을 저장했어!!!!!! 
        })
    }, [])
    console.log('state변수 >> ');
    console.log(data)
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
  console.log('newArr')
  console.log(newArr);

    const hello = (value) => {
        // console.log('called!!!');
        
        value === "<<" ? value = 1 : value = value;
        value === ">>" ? value = pageCountArr.totalPages : value = value;
        axios.get(`/stores?areaName=${areaName}&page=${value}&limit=20`)
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
          navigate(`/stores?areaName=${areaName}&page=${res.data.pageData.currentPage}&limit=20`); // 페이지 이동!
          setArr(res.data.data);
        })
      }
      
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
    </div>
  )
}
