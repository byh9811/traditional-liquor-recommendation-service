import axios from 'axios';
import React, { useState,useEffect,useRef } from 'react'
// component 
import ButtonBox from './ButtonBox';
import ItemBox from './ItemBox';
// post css
import carousel from './Carousel.module.css';

export default function Carousel() {
  
  let btnRef = useRef([]); // 여러개를 배열로다가 관리... querySelectorAll같은 역할!
  let carRef = useRef();
  let [styles, setStyles] = useState({});
  let [data, setData] = useState([]);
  let buttonCnt = [1, 2, 3];
  async function getData() {
    try {
      await axios.get(`/drinks/main-carousel`)
          .then((res) => {
            setData(res.data.data);
          })
    } catch (err) {
      console.log(err);
    }
  }

  let moveCarousel = (index) => {
    setStyles(
      {
        transition : 'all 0.5s',
        transform : `translateX(${index * -33.3}%)`
      }
    )
  }

  useEffect(() => {
    getData();
  }, [])
  
  
  
  return (
    <>
    <div className={carousel.carousel__wrapper}>
        <div className={carousel.carousel__box} ref={ carRef } style = { styles }>
          {
            data.map((value) =>
                <ItemBox id = {value} />
            )
          }
        </div>
    </div>
    <div className={carousel.buttons}>
      {/* 
      tip : 함수는 부모에서 선언을 하고, 그 함수를 변수에 넣어서 변수를 
            props로 전달! 
      */}
      {buttonCnt.map((value, index) => 
        <ButtonBox 
        // 
        ref = { el => (btnRef.current[index] = el) }
        mouseOver = { () => { moveCarousel(index) }}
        />
      )}
    </div>
    </>
  )
}
