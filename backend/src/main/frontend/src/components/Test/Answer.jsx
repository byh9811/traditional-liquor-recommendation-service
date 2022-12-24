import React from 'react'
import test from '../../pages/Test.module.css';

export default function Answer({ name, id, value, content }) {
  return (
    <p>
        <input type="radio" name={ name } id={ id } value={ value }/>
        <label htmlFor={ id }>{ content }</label>
    </p>
  )
}
