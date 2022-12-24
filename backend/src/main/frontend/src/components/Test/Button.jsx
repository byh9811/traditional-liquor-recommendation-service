import React from 'react'
import test from '../../pages/Test.module.css';

export default function Button({ content }) {
  return (
    <button className={test.button}>{ content }</button>
  )
}
