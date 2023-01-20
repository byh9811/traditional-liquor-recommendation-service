// radio button이 can choose only one
// checkbox can choose multy options. 
import React from 'react'
import test from './Test.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from '../components/Test/Question';
// import Question from '../components/Test/Question';

// import TestBox from '../components/Test/TestBox';


export default function Test() {
  let questionList = ["01. 단맛을 얼마나 좋아하나요?",
  "02. 신맛을 얼마나 좋아하나요?",
  "03. 바디감을 얼마나 좋아하나요?",
  "04. 청량감을 얼마나 좋아하나요?"
  ]
  let answerList = ["사랑한다", "좋아한다", "그럭저럭", "싫어한다"];
  let nameList = ["q1", "q2", "q3", "q4"];
  let idList = [["a1", "a2", "a3", "a4"], ["b1", "b2", "b3", "b4"], ["c1", "c2", "c3", "c4"], ["d1", "d2", "d3", "d4"]];
  const [form, setForm] = useState({q1 : '', q2 : '', q3 : '', q4 : ''});
  const navigate = useNavigate();

  const onChange = (e) => {
    let { name, value } = e.target;
    const nextInputs = {
      ...form,
      [name] : value,
    }
    setForm(nextInputs);
    
  }
  // console.log(JSON.stringify(form));
  const { q1, q2, q3, q4 } = form;
  let arr = [q1,q2,q3,q4];

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/drinks/recommendation?answer=${arr.join(',')}`); // 페이지 이동!
  }
  return (
    <div className={test.test__wrapper}>
      <div className={test.test__area}>
        <div className={test.carousel}>
          <form onSubmit = { handleSubmit } className= {test.form}>
            {
              idList.map((value, index) => 
                <Question 
                  question = { questionList[index] }
                  answer = { answerList[index] }
                  name = { nameList[index] } 
                  onChange = { onChange }
                  id = { value }
                  // value가 각각 [][][][]를 의미함. 
                  // value[1]하면 []중 1을 선택한다!! 
                />
              )
            }
            <div className={test.button__box}>
              <button>제출!</button>
            </div>
          </form>
       </div>
      </div>
      <div className={test.result__area}></div>
    </div>



  )
}



