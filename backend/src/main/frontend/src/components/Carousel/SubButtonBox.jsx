import React from 'react'

// css
import sub from './SubCarousel.module.css';

export default function SubButtonBox({ ref, onMouseOver }) {
  return (
    <div
    className = { sub.button }
    ref = { ref }
    onMouseOver = { onMouseOver }
    ></div>
  )
}
