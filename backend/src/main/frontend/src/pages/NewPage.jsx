import React from 'react'
import axios from 'axios';

import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom'; // query string을 가져오기 위함! 

// css
import testResult from './NewPage.module.css';
export default function NewPage() {
    const navigate = useNavigate();
    const location = useLocation();
    let [searchParams, setSearchParams] = useSearchParams();
    let [inputData, setInputData] = useState([]);
    let [arr,setArr] = useState([]);
    let value = location.search;
    let property = searchParams.get('answer'); // 잘 돼!! 
    // 검색값이 변할 때 마다 새로운 값을 불러오고싶어!!!!!!! 
    console.log('넘어온 data', property);
    useEffect(() => {
        axios.get(`recommendation?answer=${property}`)
        .then((res) => {
        console.log(res);
        console.log(res.data);
        console.log(res.data.data);
        setArr(res.data.data);
        })
    },[ property ])
    console.log(arr);
  return (

      <div className={testResult.container}>
          {
              arr.map((value) =>
                  <div className={testResult.box}onClick = { () => {
                      navigate(`/drinks/${value.id}`);
                  }}>

                      <div className={ testResult.img__box }>
                          <img src= {`/display/${value.id}`} className={testResult.id}></img>
                      </div>
                      <p className={testResult.title}> {value.title} </p>
                  </div>
              )
          }
      </div>
  )
}
