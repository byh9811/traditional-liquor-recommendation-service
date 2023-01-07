import React from 'react'
import img from './Imgbox.module.css';

export default function Imgbox({ id }) {
    const src = "/display/" + id + "?w=640&h=640";
  return (
    <div className={img.img__wrapper}>
        <img src={ src } alt="" />
    </div>
  )
}
