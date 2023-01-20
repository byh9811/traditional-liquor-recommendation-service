import React from 'react'
// import test from '../../pages/Test.module.css';

export default function Radio({ name, id, onChange, answer, value }) {

  return (
    <p>
        <input type="radio" name={ name } id= { id } onChange = { onChange } value = { value }/>
        <label htmlFor={ id }>{ answer }</label>
    </p>
  )
}
