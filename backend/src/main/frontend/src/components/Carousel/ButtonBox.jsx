import React from 'react'

import carousel from './Carousel.module.css';
export default function ButtonBox({ ref, mouseOver }) {
  return (
    <div
    className = { carousel.button }
    ref = { ref }
    onMouseOver = { mouseOver }
    ></div>
  )
}
