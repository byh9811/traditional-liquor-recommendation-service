import React from 'react'
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel/Carousel.jsx';
import Func from '../components/Func';
// css file 
import main from './Home.module.css'; 
export default function Home() {
  return (
    <div className={main.main__wrapper}>
        <Func 
          linkUrl="/test/index"
          img = "/img/test.png"
        />
        <Func 
          linkUrl="/all/index"
          img = "/img/all.jpeg"
        />
        <Func 
          linkUrl="/shops"
          img = "/img/shop.png"
        />
        <div className={main.carousel}>
            <Carousel />
        </div>
        <div className={main.dictionary}>5</div>
    </div>
  )
}
