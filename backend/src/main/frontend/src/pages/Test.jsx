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
            <p>
              {/* <input type="text" name="text1" id="" value={form.text1}
              onChange = { handleChange }
              />
              <input type="text" name="text2" id="" value={form.text2}
              onChange = { handleChange }
              /> */}
              <input type="radio" name="q1" id="" onChange = { onChange } value = "1"/>
              <input type="radio" name="q1" id="" onChange = { onChange } value = "2"/>
              <input type="radio" name="q1" id="" onChange = { onChange } value = "3"/>
              <input type="radio" name="q1" id="" onChange = { onChange } value = "4"/>
            </p>
            <p>
              {/* <input type="text" name="text1" id="" value={form.text1}
              onChange = { handleChange }
              />
              <input type="text" name="text2" id="" value={form.text2}
              onChange = { handleChange }
              /> */}
              <input type="radio" name="q2" id="" onChange = { onChange } value = "1"/>
              <input type="radio" name="q2" id="" onChange = { onChange } value = "2"/>
              <input type="radio" name="q2" id="" onChange = { onChange } value = "3"/>
              <input type="radio" name="q2" id="" onChange = { onChange } value = "4"/>
            </p>
            <p>
              {/* <input type="text" name="text1" id="" value={form.text1}
              onChange = { handleChange }
              />
              <input type="text" name="text2" id="" value={form.text2}
              onChange = { handleChange }
              /> */}
              <input type="radio" name="q3" id="" onChange = { onChange } value = "1"/>
              <input type="radio" name="q3" id="" onChange = { onChange } value = "2"/>
              <input type="radio" name="q3" id="" onChange = { onChange } value = "3"/>
              <input type="radio" name="q3" id="" onChange = { onChange } value = "4"/>
            </p>
            <p>
              {/* <input type="text" name="text1" id="" value={form.text1}
              onChange = { handleChange }
              />
              <input type="text" name="text2" id="" value={form.text2}
              onChange = { handleChange }
              /> */}
              <input type="radio" name="q4" id="" onChange = { onChange } value = "1"/>
              <input type="radio" name="q4" id="" onChange = { onChange } value = "2"/>
              <input type="radio" name="q4" id="" onChange = { onChange } value = "3"/>
              <input type="radio" name="q4" id="" onChange = { onChange } value = "4"/>
            </p>

            <p>
              <button>제출!</button>
            </p>
          </form>
       </div>
      </div>
      <div className={test.result__area}></div>
    </div>



  )
}



