import React from 'react'
import { useState } from 'react';
// css
import search from './Search.module.css';
export default function Search() {
    let [text, setText] = useState('');
    let handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <form onSubmit={ handleSubmit }>
        <input 
        placeholder='drink name'
        type="text" 
        name="" 
        id=""
        value={ text }
        onChange = {
            (e) => {
                setText(e.target.value);
                console.log(text);
            }
        }
        />
    </form>
  )
}
