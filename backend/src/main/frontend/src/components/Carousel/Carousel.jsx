import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import carousel from './Carousel.module.css';
import ItemBox from './ItemBox';

export default function Carousel() {
  
  return (
    <div className={carousel.carousel__wrapper}>
        <ItemBox />
        <ItemBox />
        <ItemBox />
    </div>
  )
}
