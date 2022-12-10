import React from 'react'
import { useState } from 'react';
import app from '../../App.module.css';

export default function Count({ total, onClick }) {
    
    // 여기까지는 개별적으로 갖는 data => props가 필요없음.
    let [number, setNumber] = useState(0);
    const add = () => {
        setNumber(number + 1);
    }
  return (
    <div className= { app.count__box }>
        { number } / { total }
        <button className="button"
        onClick = { 
            () => {
                setNumber(number + 1);
                onClick();
            }
         }
        >+</button>
    </div>
  )
}
