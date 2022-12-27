import axios from 'axios';
import React from 'react'
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import shop from '../pages/Shop.module.css';
// 여기있는 이 컴포넌트를 클릭해야 변화가 생기지...? 
// 그럼 여기서 event를 짜야해.... 
export default function Area({ areaName, key }) {
  let areaRef = useRef();
  const navigate = useNavigate(); // shop result페이지 이동

  async function axiosArea() {
    axios.get(`/stores?areaName=${areaRef.current.innerText}&page=1`)
    .then((res) => {
      let { data } = res.data;
      console.log(data);
      navigate(`/stores?areaName=${areaRef.current.innerText}&page=1`);
      
      // res.data가 body부분 받는 코드(status부분은 header영역이니 삭제.)
    })
  }
  return (
    <div className={shop.shop} key= { key } ref={ areaRef } onClick={ axiosArea }>
        <h4 className={shop.link}>{ areaName }</h4>
        {/* 링크를 없애는 대신 리디렉션을 해준다... */}
    </div>
  )
}
