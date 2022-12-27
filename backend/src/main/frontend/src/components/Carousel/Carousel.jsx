import axios from 'axios';
import React, { useState,useEffect,useRef } from 'react'
// component 
import ButtonBox from './ButtonBox';
import ItemBox from './ItemBox';
// post css
import carousel from './Carousel.module.css';
import { faBlackTie, faBluetooth } from '@fortawesome/free-brands-svg-icons';

export default function Carousel() {
  // 여기에다가 또 item url연결시켜놓기!!
  let btnRef = useRef([]); // 여러개를 배열로다가 관리... querySelectorAll같은 역할!
  let carRef = useRef();
  let [styles, setStyles] = useState({});
  function moveCarousel(index) {
    // alert(`${index}버튼 눌림!`);
    setStyles(
      {
        transition : 'all 0.5s',
        transform : `translateX(${index * -33.3}%)`
      }
    )
  }
  
  return (
    <>
    <div className={carousel.carousel__wrapper}>
        <div className={carousel.carousel__box} ref={ carRef } style = { styles }>
          <ItemBox url = "img/shop-removebg-preview.png"/>
          <ItemBox url = "img/shop-removebg-preview.png"/>
          <ItemBox url = "img/shop-removebg-preview.png"/>
        </div>
    </div>
    <div className={carousel.buttons}>
      <div className={`${carousel.button} ${carousel.first__button}`}
      ref={el => (btnRef.current[0] = el)}
      onMouseOver = { () => { moveCarousel(0)} }
      ></div>
      <div className={`${carousel.button} ${carousel.second__button}`}
      ref={el => (btnRef.current[1] = el)}
      onMouseOver = { () => { moveCarousel(1)} }
      ></div>
      <div className={`${carousel.button} ${carousel.third__button}`}
      ref={el => (btnRef.current[2] = el)}
      onMouseOver = { () => { moveCarousel(2)} }
    ></div>
    </div>
    </>
  )
}
