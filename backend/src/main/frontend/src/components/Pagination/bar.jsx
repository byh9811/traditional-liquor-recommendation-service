import React from 'react'
import bar from './Bar.module.css';
import PageButton from './PageButton';
export default function Bar() {
  let pageNum = [1,2,3,4,5,6,7,8,9,10];
  return (
    <div className={ bar.bar__wrapper }>
      {
        pageNum.map((value) => 
        <PageButton 
        pageNum = { value }
        />


        )
      }
    </div>
  )
}
