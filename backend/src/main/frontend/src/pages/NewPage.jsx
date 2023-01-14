import React from 'react'
import axios from 'axios';

import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom'; // query string을 가져오기 위함! 

export default function NewPage() {
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
    <>
        <p>넘어온 data --- {property}</p>
        {
            arr.map((value) => 
                <p>
                    <p> {value.id} </p>
                    <p> {value.title} </p>
                </p>
            )
        }
    </>
  )
}
