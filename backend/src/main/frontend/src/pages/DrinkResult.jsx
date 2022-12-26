import axios from 'axios';
import React from 'react'
import { useState } from 'react';

import { useEffect } from 'react';
import Item from '../components/Result/Item';
// css
import result from './DrinkResult.module.css';

export default function DrinkResult() {
  // title, type, food, flavorType을 이제 서버에서 받아와야해!! 
  let [data, setData] = useState([]);

  async function getData() {
    try {
      const response = await axios.get(`/drinks?search=${data}&page=1`)
      .then((res) => {
        console.log(res.data.data);
        console.log(typeof res.data.data);
        setData(res.data.data);
      })
      // setData(userId); // data빈배열을 저 data로 바꿔줌. ㅁ
    }catch(err) {
      console.log(err);
    }
  }
  console.log(data);
  useEffect(() => {
    getData();
  }, []); // 1번만 호출!
  return (
    <div className={result.result__wrapper}>
        <div className={result.title}>
            <h2>Drink Result</h2>
        </div>
        <div className={result.result__items}>
          {
            data.map((value) => 
              <Item  
              // 만약 Item을 click하는거면 Item component에다가 작성해주기!
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
    </div>
  )
}

// item컴포넌트 => itembox를 가리킴 
// item자식으로는 itemProperty라는 컴포넌트가 있는데 각각의 속성을 가리킴 

// 즉 result > item > itemProperty
