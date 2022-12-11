import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    let [text, setText] = useState('');
    const navigate = useNavigate()
    const handleClick = (e) => {
        setText(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setText('');
        navigate(`/login/${text}`); // 입력된 경로로 이동! 
    }
  return (
    <div>
        {/* form action사용하면 새로고침 돼!  */}
        <form onSubmit={ handleSubmit }>
            <input type="text" 
            placeholder='user id'
            value = { text } /**입력한 id */
            onChange = { handleClick } 
            />
        </form>
    </div>
  )
}
