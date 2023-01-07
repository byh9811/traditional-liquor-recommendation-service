import React from 'react'
import carousel from './Carousel.module.css';
import {useNavigate} from "react-router-dom";

export default function ItemBox({ id }) {
    const navigate = useNavigate();
    const src = "/display/" + id;
    function goDetail(id) {
        navigate(`/drinks/${id}`);
    }
  return (
    <div className={carousel.item} >
        <img src= { src } alt=""
             onClick={ () => {
                 goDetail(id);
             }}
        />
    </div>
  )
}
