import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// component
import Contentbox from '../components/Detail/Contentbox.jsx';
import Imgbox from '../components/Detail/Imgbox.jsx';

// css
import detail from './DrinkDetail.module.css';

export default function DrinkDetail() { // id값을 넘겨줘야했음!
  // id를 넘겨줘야하잖아. => 그럼 db에서 id가 n번인 값을 요청하자. 
  const { id } = useParams();
  let [ drinkData, setDrinkData ] = useState({});

  useEffect(() => {
    // id값을 받아와야함...
    axios.get(`/drinks/${id}`)
    .then((res) => {
      setDrinkData(res.data.data); // res.data.data.title
    })
  }, []); // 처음에만 1번 딱 호출이 된다고 생각 
  return (
    <div className={detail.detail__wrapper}>
        <div className={detail.detail__img}>
          <Imgbox 
            id = { id }
          />
        </div>
        <div className={detail.detail__content}>
          <Contentbox 
            title = { drinkData.title }
            company = { drinkData.company }
            type = { drinkData.type }
            price = { drinkData.price }
            volume = { drinkData.volume }
            alcohol = { drinkData.alcohol }
            sweet = { drinkData.sweet }
            sour = { drinkData.sour }
            body = { drinkData.body }
            cool = { drinkData.cool }
            food = { drinkData.food }
            material = { drinkData.material }
          />
        </div>
    </div>
  )
}
// id: Integer
// title: String
// price: Integer
// volume: Integer
// type: String
// alcohol: Double
// food: Array (String)
// sweet: Integer
// sour: Integer
// body: Integer
// cool: Integer
// material: Array (String)
// company: String