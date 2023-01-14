// radio button이 can choose only one
// checkbox can choose multy options. 
import React from 'react'
import test from './Test.module.css';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// import Question from '../components/Test/Question';

// import TestBox from '../components/Test/TestBox';


export default function Test() {
  // // let arr = [1,2,3,4]; // 임의로 만든 배열;
  // let content = ["🤮싫어한다","😕보통이다","😀좋아한다","🥰사랑한다"];
  // let id = ["question1", "question2", 'question3', 'question4'];
  // let [text, setText] = useState('');
  // let question = ["단맛을 얼마나 좋아하세요?","신맛을 얼마나 좋아하세요?","바디감를 얼마나 좋아하세요?","청량감을 얼마나 좋아하세요?"]
  // let [styles, setStyles] = useState({});
  // let btnRef = useRef([]);
  // function moveCarousel(index) {
  //   // alert(`${index}버튼 눌림!`);
  //   setStyles(
  //     {
  //       transition : 'all 0.5s',
  //       transform : `translateX(${index * -25}%)`
  //     }
  //   )
  // }
  const [form, setForm] = useState({q1 : '', q2 : '', q3 : '', q4 : ''});
  const navigate = useNavigate();

  const onChange = (e) => {
    let { name, value } = e.target;
    console.log(`name >> ${name}`);
    console.log(`value >> ${value}`);
    const nextInputs = {
      ...form,
      [name] : value,
    }
    setForm(nextInputs);
    
  }
  // console.log(JSON.stringify(form));
  let obj = {...form}
  console.log(obj);
  const { q1, q2, q3, q4 } = form;
  let arr = [q1,q2,q3,q4];
  console.log(arr.join(','));

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('보내는 값 >> ', arr.join(','));
    navigate(`/drinks/recommendation?answer=${arr.join(',')}`); // 페이지 이동!
  }
  return (
    <div className={test.test__wrapper}>
      <div className={test.test__area}>
        <div className={test.carousel}>
          <form onSubmit = { handleSubmit } className= {test.form}>
            <div className={test.question}>
              {/* <input type="text" name="text1" id="" value={form.text1}
              onChange = { handleChange }
              />
              <input type="text" name="text2" id="" value={form.text2}
              onChange = { handleChange }
              /> */}
              <p>01. 단맛을 얼마나 좋아하나요?</p>
              <p>
                <label htmlFor="a1">사랑한다</label>
                <input type="radio" name="q1" id="a1" onChange = { onChange } value = "1"/>
              </p>
              <p>
              <label htmlFor="a2">좋아한다</label>
                <input type="radio" name="q1" id="a2" onChange = { onChange } value = "2"/>
              </p>
              <p>
                <label htmlFor="a3">그럭저럭</label>
                <input type="radio" name="q1" id="a3" onChange = { onChange } value = "3"/>
              </p>
              <p>
                <label htmlFor="a4">싫어한다</label>
                <input type="radio" name="q1" id="a4" onChange = { onChange } value = "4"/>
              </p>
              
            </div>
            <div className={test.question}>
              {/* <input type="text" name="text1" id="" value={form.text1}
              onChange = { handleChange }
              />
              <input type="text" name="text2" id="" value={form.text2}
              onChange = { handleChange }
              /> */}
              <p>02. 신맛을 얼마나 좋아하나요?</p>

              <p>
                <label htmlFor="b1">사랑한다</label>
                <input type="radio" name="q2" id="b1" onChange = { onChange } value = "1"/>
              </p>
              <p>
              <label htmlFor="b2">좋아한다</label>
                <input type="radio" name="q2" id="b2" onChange = { onChange } value = "2"/>
              </p>
              <p>
                <label htmlFor="b3">그럭저럭</label>
                <input type="radio" name="q2" id="b3" onChange = { onChange } value = "3"/>
              </p>
              <p>
                <label htmlFor="b4">싫어한다</label>
                <input type="radio" name="q2" id="b4" onChange = { onChange } value = "4"/>
              </p>
              
            </div>
            <div className={test.question}>
              {/* <input type="text" name="text1" id="" value={form.text1}
              onChange = { handleChange }
              />
              <input type="text" name="text2" id="" value={form.text2}
              onChange = { handleChange }
              /> */}
              <p>03. 바디감을 얼마나 좋아하나요?</p>

              <p>
                <label htmlFor="c1">사랑한다</label>
                <input type="radio" name="q3" id="c1" onChange = { onChange } value = "1"/>
              </p>
              <p>
              <label htmlFor="c2">좋아한다</label>
                <input type="radio" name="q3" id="c2" onChange = { onChange } value = "2"/>
              </p>
              <p>
                <label htmlFor="c3">그럭저럭</label>
                <input type="radio" name="q3" id="c3" onChange = { onChange } value = "3"/>
              </p>
              <p>
                <label htmlFor="c4">싫어한다</label>
                <input type="radio" name="q3" id="c4" onChange = { onChange } value = "4"/>
              </p>
              
            </div>
            <div className={test.question}>
              {/* <input type="text" name="text1" id="" value={form.text1}
              onChange = { handleChange }
              />
              <input type="text" name="text2" id="" value={form.text2}
              onChange = { handleChange }
              /> */}
              <p>04. 청량감을 얼마나 좋아하나요?</p>

              <p>
                <label htmlFor="d1">사랑한다</label>
                <input type="radio" name="q4" id="d1" onChange = { onChange } value = "1"/>
              </p>
              <p>
                <label htmlFor="d2">좋아한다</label>
                <input type="radio" name="q4" id="d2" onChange = { onChange } value = "2"/>
              </p>
              <p>
                <label htmlFor="d3">그럭저럭</label>
                <input type="radio" name="q4" id="d3" onChange = { onChange } value = "3"/>
              </p>
              <p>
                <label htmlFor="d4">싫어한다</label>
                <input type="radio" name="q4" id="d4" onChange = { onChange } value = "4"/>
              </p>
            </div>

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



