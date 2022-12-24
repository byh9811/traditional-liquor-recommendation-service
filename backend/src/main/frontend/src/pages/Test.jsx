// radio button이 can choose only one
// checkbox can choose multy options. 
import React from 'react'
import test from './Test.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from '../components/Test/Question';
import Answer from '../components/Test/Answer';
import Button from '../components/Test/Button';

export default function Test() {
  let arr = [1,2,3,4]; // 임의로 만든 배열;
  let content = ["🤮싫어한다","😕보통이다","😀좋아한다","🥰사랑한다"];
  let id = ["question1", "question2", 'question3', 'question4'];
  let [text, setText] = useState('');
  let question = ["단맛을 얼마나 좋아하세요?","신맛을 얼마나 좋아하세요?","바디를 얼마나 좋아하세요?","청량감을 얼마나 좋아하세요?"]
    const navigate = useNavigate();
    let handleChange = (e) => {
        setText(e.target.value);
        // state변수 변경!
    }
    const handleSubmit = (e) => {
        e.preventDefault(); // 새로고침 방지! 
        alert("제출!");
        setText(''); // 빈 문자열로 새로고침
        navigate(`/drinks?title=${text}`);
    }
  return (
    // 여기서 이제 test page 시작됨! 
    <div className={test.test__wrapper}>
      <div className={test.test__title}>1</div>
      <div className={test.test__form}>
        <form onSubmit={ handleSubmit }>
          {arr.map((value, index) => 
            <div className={test.question__wrapper}>
              <div className={test.test__box}>
                <Question 
                question = { question[index] }
                />
                <div className={test.test__answer}>
                    { arr.map((value, index) => 
                      <Answer 
                      name = { id[index] }
                      id = { index + 1 }
                      value={ index + 1 }
                      content = {content[index]}
                      />
                    )}
                    <Button 
                      content = { index === 3 ? "Submit" : "Next"}
                    />
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
      <div className={test.test__result}>3</div>
    </div>
  )
}
