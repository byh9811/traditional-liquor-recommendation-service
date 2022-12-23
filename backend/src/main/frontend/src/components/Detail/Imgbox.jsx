import React from 'react'
import img from './Imgbox.module.css';

export default function Imgbox({ imgUrl }) {
  return (
    <div className={img.img__wrapper}>
        <img src={ imgUrl } alt="" />
    </div>
  )
}
