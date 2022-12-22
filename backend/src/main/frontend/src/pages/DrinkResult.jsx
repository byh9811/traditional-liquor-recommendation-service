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
      const response = await axios.get('/data/drinks.json');
      const userId = response.data;
      // userId.length로 반복문 돌리면 돼! 
      setData(userId); // data빈배열을 저 data로 바꿔줌. ㅁ
    }catch(err) {
      console.log(err);
    }
  }
  useEffect(() => {
    console.log(data);
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
                key = {value.key}
                title = {value.title}
                type = {value.type}
                food = {value.food}
                flavorType = {value.flavorType}
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
