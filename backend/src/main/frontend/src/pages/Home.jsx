import React from 'react'
import { Link } from 'react-router-dom';
// component
import Carousel from '../components/Carousel/Carousel.jsx';
import SubCarousel from '../components/Carousel/SubCarousel.jsx';
import Func from '../components/Func.jsx';
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
        <div className={main.dictionary}>
          <SubCarousel />
        </div>
    </div>
  )
}
