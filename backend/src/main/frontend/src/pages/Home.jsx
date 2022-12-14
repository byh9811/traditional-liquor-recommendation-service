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
          img = "/img/test-removebg-preview.png"
        />
        <Func 
          linkUrl="/drinks?search=&page=1&limit=20"
          img = "/img/all.jpeg"
        />
        <Func 
          linkUrl="/stores/index"
          img = "/img/shop-removebg-preview.png"
        />
        <div className={main.carousel}>
            <Carousel /> 
            {/* 이 캐러셀이 움직이는거야!! => 저 컴포넌트가 움직이는거야 무조건! */}
            
        </div>
        <div className={main.dictionary}>
          <SubCarousel />
        </div>
    </div>
  )
}
