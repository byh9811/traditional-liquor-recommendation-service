import React, {useEffect} from 'react'
import { useRef, useState } from 'react';
// css 
import sub from './SubCarousel.module.css';
import SubItem from './SubItem';
import axios from "axios";

export default function SubCarousel() {
  let btnRef = useRef([]);
  let carRef = useRef();
  let [styles, setStyles] = useState({});
  let [guides, setGuides] = useState([]);
  async function getGuides() {
    try {
      await axios.get(`/guides`)
          .then((res) => {
            console.log(res.data.data);
            setGuides(res.data.data);
          })
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getGuides();
  }, [])
  function moveCarousel(index) {
    // alert(`${index}버튼 눌림!`);
    setStyles(
      {
        transition : 'all 0.5s',
        transform : `translateX(${index * -20}%)`
      }
    )
  }
  return (
    <>
    <div className={sub.carousel__wrapper}>
      <div className={sub.carousel__box} ref={ carRef } style = { styles }>
        {
          guides.map((value) =>
              <SubItem
                keyword = {value.keyword}
                meaning = {value.meaning}
              />
          )
        }
      </div>
    </div>
    {/* 이거도 컴포넌트로 남길거야!! 버튼 전체를 하나의 컴포넌트로 남겨야함
    리펙토링 필요!! 
    */}
    <div className={ sub.buttons }>
      <div className={sub.button}
      ref={el => (btnRef.current[0] = el)}
      onMouseOver = { () => { moveCarousel(0)} }
      ></div>
      <div className={sub.button}
      ref={el => (btnRef.current[1] = el)}
      onMouseOver = { () => { moveCarousel(1)} }
      ></div>
      <div className={sub.button}
      ref={el => (btnRef.current[2] = el)}
      onMouseOver = { () => { moveCarousel(2)} }
      ></div>
      <div className={sub.button}
      ref={el => (btnRef.current[3] = el)}
      onMouseOver = { () => { moveCarousel(3)} }
      ></div>
      <div className={sub.button}
      ref={el => (btnRef.current[4] = el)}
      onMouseOver = { () => { moveCarousel(4)} }
      // 이거 컴포넌트화 시킼ㄹ거야! => 싹 다 리펙토링할게 기다려
      ></div>
    </div>
    </>
  )
}
