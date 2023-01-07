import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom'; // query string을 가져오기 위함! 
import Item from '../components/Result/Item';
// css
import result from './DrinkResult.module.css';

export default function DrinkResult() {
  // title, type, food, flavorType을 이제 서버에서 받아와야해!! 

  // http://localhost:8080/drinks?search=%EB%B0%A4&page=1&limit=20 =>  query문
  // 감 => 감 앙 => 앙 
  let [data, setData] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();
  let [inputData, setInputData] = useState();
  console.log('shop result 랜더링 됨!!');
  console.log('쿼리스트링 출력 >> ');
  const location = useLocation();
  console.log(location.search); // query문! ?search=%EB%B0%A4&page=1&limit=20
  let searchName = searchParams.get('search');
  console.log(searchName); //searchName이 포함된거!! =======> 여기까지는 돼!!!!!!!!!! %EB%B0%A4
                      async function getData() {
                        try {
                          const response = await axios.get(`/drinks?search=${searchName}&page=1&limit=20`)
                          .then((res) => {
                            console.log('전체 호출 >> ');
                            console.log(res.data);
                            console.log(res.data.data); // 내가 실제 원하는 data ==> 진짜 data를 얻어옴.
                            setInputData(searchName);
                            setData(res.data.data); // qkR
                          })
                          // setData(userId); // data빈배열을 저 data로 바꿔줌. ㅁ
                        }catch(err) {
                          console.log(err);
                        }
                      }
  console.log(`입력된 data >>`, searchName);
  console.log(data);
  useEffect(() => {
    console.log('useEffect 호출됨!!!');
    getData(); // 이제 data[0].title 이런식으로 접근하면 돼!
  }, [data]); // 1번만 호출!
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
