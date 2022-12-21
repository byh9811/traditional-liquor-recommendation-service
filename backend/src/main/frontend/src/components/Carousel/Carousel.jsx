import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import carousel from './Carousel.module.css';

export default function Carousel() {
  let [drinkData, setDrinkData] = useState([]);
  async function getData() {
    try{
      const data = axios.get('data/drink.json')
      .then((res) => {
        console.log(res.data);
        setDrinkData(res.data);
      });
      // console.log(data);
    }catch {
      console.log('401 error!');
    }
  }
  useEffect(() => {
    getData();
    // 함수만을 return할 수 있음.
  }, [])
  
  return (
    <div className={carousel.carousel__wrapper}>
        {/* <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div> */}
        <p>
          
        </p>
    </div>
  )
}
