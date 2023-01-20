import React from 'react'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import shop from '../pages/Shop.module.css';

export default function Area({ areaName, key }) {
  let areaRef = useRef();
  const navigate = useNavigate(); // shop result페이지 이동

  async function axiosArea() {
    navigate(`/stores?areaName=${areaRef.current.innerText}&page=1&limit=20`);
  }
  return (
    <div className={shop.shop} key= { key } ref={ areaRef } onClick={ axiosArea }>
        <h4 className={shop.link}>{ areaName }</h4>
        {/* 링크를 없애는 대신 리디렉션을 해준다... */}
    </div>
  )
}
