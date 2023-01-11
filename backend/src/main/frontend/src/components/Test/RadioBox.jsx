import React from 'react'
import radio from './RadioBox.module.css';
export default function RadioBox({ name, id, onChange, value }) {
  return (
    <div>
        <input type="radio" name= { name } id={ id } 
            value={ value }
            onChange = { onChange }
        />
        <label htmlFor={ id }>{ id }</label>
    </div>
  )
}
