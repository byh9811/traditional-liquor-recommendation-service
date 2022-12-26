import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// css
import search from './Search.module.css';
export default function Search() {
    let [text, setText] = useState('');
    const navigate = useNavigate();
    let handleChange = (e) => {
        setText(e.target.value);
        // state변수 변경!
    }
    const handleSubmit = (e) => {
        e.preventDefault(); // 새로고침 방지! 
        setText(''); // 빈 문자열로 새로고침
        console.log(text);
        navigate(`/drinks?search=${text}&page=1`); // 페이지 이동!
    }
    // 보내주는거까지...!!
  return (
    <form onSubmit={ handleSubmit }>
        <input 
        placeholder='drink name'
        type="text" 
        name="" 
        id=""
        value={ text }
        onChange = {
            handleChange
        }
        />
    </form>
  )
}
