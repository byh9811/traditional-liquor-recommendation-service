import React from 'react'
// css

// import content from './Contentbox.module.css';
import content from './Contentbox.module.css';
import element from './ContentElement.module.css';
export default function ContentElement({ className, property, value}) {
  return (
    <div className={ className }>
        <p className={`${element.property} ${element.content}`}>{ property }</p>
        <p className={`${element.value} ${element.content}`}>{ value }</p>
    </div>
  )
}
