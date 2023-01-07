import React from 'react'
import img from './Imgbox.module.css';

export default function Imgbox({ id }) {
    const src = "/display/" + id;
  return (
    <div className={img.img__wrapper}>
        <img src={ src } alt="" />
    </div>
  )
}
