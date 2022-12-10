import React from 'react'
import { useState } from 'react';
import count from './Count.module.css';

export default function Count({ total, onClick }) {
    let [ number, setNumber ] = useState(0);
    let addNum = () => {
        setNumber(number + 1);
    }
    // 여기까지는 개별적으로 갖는 data
  return (
    <div className="container">
        <span className="number">{ number }</span>
        <span className='total'>/ { total }</span>
        <button className="button"
        onClick = {
            () => {
                setNumber(number + 1);
                onClick();
            }
        }
        // 또 공통 data도 늘어나야돼! 
        // 근데 공통 data늘어나는 함수를 부모가 갖고있어서 props로 전달 받아야돼! 
        >+</button>
    </div>
  )
}
