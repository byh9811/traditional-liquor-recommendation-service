import React from 'react'
// css 
import sub from './SubCarousel.module.css';

export default function SubCarousel() {
  return (
    <div className={sub.carousel__wrapper}>
        <div className={sub.item}>
          1
          
        </div>
        <div className={sub.item}>2</div>
        <div className={sub.item}>3</div>
        <div className={sub.item}>4</div>
    </div>
  )
}
