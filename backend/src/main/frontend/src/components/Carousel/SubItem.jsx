import React from 'react'
// css
import sub from './SubCarousel.module.css';
import subItem from './SubItem.module.css';

export default function SubItem({ keyword, meaning }) {
  return (
    <div className={sub.item}>
        <div className={subItem.keyword}>
            { keyword }
        </div>
        <div className={subItem.meaning}>
            { meaning }
        </div>
    </div>
  )
}
