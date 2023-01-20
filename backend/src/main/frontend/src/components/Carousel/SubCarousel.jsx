import axios from "axios";
import React, {useEffect} from 'react'
import { useRef, useState } from 'react';

// css 
import sub from './SubCarousel.module.css';

// component
import SubItem from './SubItem';
import SubButtonBox from './SubButtonBox';

export default function SubCarousel() {
  let subButtonCnt = [1,2,3,4,5];
  let btnRef = useRef([]);
  let carRef = useRef();
  let [styles, setStyles] = useState({});
  let [guides, setGuides] = useState([]);
  async function getGuides() {
    try {
      await axios.get(`/guides`)
          .then((res) => {
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
      {
        subButtonCnt.map((value, index ) => 
          <SubButtonBox 
            ref = { el => (btnRef.current[index] = el) }
            onMouseOver = { () => { moveCarousel(index)} }
          />
        )
      }
    </div>
    </>
  )
}
