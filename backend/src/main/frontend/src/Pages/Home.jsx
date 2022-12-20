import React from 'react'
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Func from '../components/Func';
// css file 
import main from './Home.module.css'; 
export default function Home() {
  return (
    <div className={main.main__wrapper}>
        <div className={main.content}>1</div>
        <div className={main.content}>2</div>
        <div className={main.content}>3</div>
        <div className={main.carousel}>
            <Carousel />
        </div>
        <div className={main.dictionary}>5</div>
    </div>
  )
}
