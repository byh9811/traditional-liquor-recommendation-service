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
    
  }, [])
  console.log(drinkData);
  return (
    <div className={carousel.carousel__wrapper}>
        {/* <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div> */}
        <p>
          {drinkData[0].name}
        </p>
        <p>
        {drinkData[1].name}

        </p>
        <p>
        {drinkData[2].name}

        </p>
    </div>
  )
}
