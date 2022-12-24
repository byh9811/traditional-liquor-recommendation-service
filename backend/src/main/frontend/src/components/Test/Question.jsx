import React from 'react'
import test from '../../pages/Test.module.css';
export default function Question({ question }) {
  return (
    <div className={test.test__question}>
        <h3>{ question }</h3>
    </div>
  )
}
