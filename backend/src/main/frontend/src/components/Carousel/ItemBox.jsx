import React from 'react'
import carousel from './Carousel.module.css';

export default function ItemBox({ url }) {
  return (
    <div className={carousel.item} >
        <img src= { url } alt="" />
    </div>
  )
}
