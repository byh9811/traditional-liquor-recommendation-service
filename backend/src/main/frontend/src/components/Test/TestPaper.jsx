import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import RadioBox from './RadioBox';
import paper from './TestPaper.module.css';

export default function TestPaper({ name }) {
  let [text, setText] = useState([]);
  let id = ["최고야😘", "괜찮아😀", "그저그래😕", "싫어🤮"];
  // let buttonContent = ["넘겨", "넘겨", "넘겨", "제출"]
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
    <main>
      <form onSubmit={ handleSubmit } class={paper.form}>
          <RadioBox 
          name = { name }
          id = { id[0] }
          onChange = { (e) => {
            setText(e.target.value);
          }}
          value = { text[0] }
          />
          <RadioBox 
          name = { name }
          id = { id[1] }
          onChange = { (e) => {
            setText(e.target.value);
          }}
          value = { text[1] }
          />
          <RadioBox 
          name = { name }
          id = { id[2] }
          onChange = { (e) => {
            setText(e.target.value);
          }}
          value = { text[2] }

          />
          <RadioBox 
          name = { name }
          id = { id[3] }
          onChange = { (e) => {
            setText(e.target.value);
          }}
          value = { text[3] }

          />
          <div className={ paper.form__wrapper }>
            <Button 
            content = { "안녕" }
            />
          </div>
      </form>
      {/* 제출버튼과 carousel button구별해주자! */}
    </main>
  )
}
