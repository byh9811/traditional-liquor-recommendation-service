import React from 'react'
import button from './Button.module.css';
export default function Button({ content }) {
  return (
    <button className={ button.form__button }>
        { content }
    </button>
  )
}
