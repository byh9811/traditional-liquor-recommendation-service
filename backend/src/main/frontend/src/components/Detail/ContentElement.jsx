import React from 'react'
import element from './ContentElement.module.css';
export default function ContentElement({ className, property, value}) {
  return (
    <div className={className}>
        <p className={`${element.property} ${element.content}`}>{ property }</p>
        <p className={`${element.value} ${element.content}`}>{ value }</p>
    </div>
  )
}
