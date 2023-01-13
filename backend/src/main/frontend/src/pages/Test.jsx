// radio button이 can choose only one
// checkbox can choose multy options. 
import React from 'react'
import test from './Test.module.css';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// import TestBox from '../components/Test/TestBox';


export default function Test() {
  let arr = [1,2,3,4]; // 임의로 만든 배열;
  let content = ["🤮싫어한다","😕보통이다","😀좋아한다","🥰사랑한다"];
  let id = ["question1", "question2", 'question3', 'question4'];
  let [text, setText] = useState('');
  let question = ["단맛을 얼마나 좋아하세요?","신맛을 얼마나 좋아하세요?","바디감를 얼마나 좋아하세요?","청량감을 얼마나 좋아하세요?"]
  let [styles, setStyles] = useState({});
  let btnRef = useRef([]);
  function moveCarousel(index) {
    // alert(`${index}버튼 눌림!`);
    setStyles(
      {
        transition : 'all 0.5s',
        transform : `translateX(${index * -25}%)`
      }
    )
  }
  
  return (
    <div className={test.test__wrapper}>
      <div className={test.test__area}>
        <div className={test.carousel} style = { styles }>
          <form className={ test.form }>
            
          </form>
       </div>
      </div>
      <div className={test.result__area}></div>
    </div>
  )
}
