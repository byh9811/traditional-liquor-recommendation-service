import React from 'react'
import content from './Contentbox.module.css';
import ContentElement from './ContentElement';

export default function Contentbox({ title, company, type, price, volume, alcohol, sweet, sour, body, cool, food, material }) {
  let className = [content.content__title,
  content.content__company, content.content__type,
  content.content__price, content.content__volume,
  content.content__alcohol, content.content__sweet,
  content.content__sour, content.content__body,
  content.content__cool, content.content__food,
  content.content__material,
  // 이런식으로 문자열이 아니라 변수식으로 전달해줘야 한다.
  ]
  let properties = [
    "title", "company", "type", "price", "volume", "alcohol",
    "sweet", " sour", "body" , "cool", "food", "material"
  ]

  let values = [
    title, company, type, price, volume, alcohol, 
    sweet, sour, body, cool, food, material
  ]
  return (
    <div className={ content.content__wrapper }>
        {/* 총 12개! */}
        {
          className.map((value, index) => 
            <ContentElement 
              className = { className[index] } 
              property = { properties[index] }
              value = { values[index] }
            /> 
        )}
    </div>
  )
}
