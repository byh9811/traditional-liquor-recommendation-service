import React from 'react'
import carousel from './Carousel.module.css';
import {useNavigate} from "react-router-dom";

export default function ItemBox({ id, url }) {
    const navigate = useNavigate();
    function goDetail(id) {
        navigate(`/drinks/${id}`);
    }
  return (
    <div className={carousel.item} >
        <img src= { url } alt=""
             onClick={ () => {
                 goDetail(id);
             }}
        />
    </div>
  )
}
