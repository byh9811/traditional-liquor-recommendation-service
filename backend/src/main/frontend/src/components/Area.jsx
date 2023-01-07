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
    // axios.get(`/stores?areaName=${areaRef.current.innerText}&page=1&limit=20`)
    // .then((res) => {
    //   console.log(res);
    //   let { data } = res.data;
    //   console.log(data);
    //   navigate(`/stores?areaName=${areaRef.current.innerText}&page=1&limit=20`);
      
    //   // res.data가 body부분 받는 코드(status부분은 header영역이니 삭제.)
    // })
    console.log(areaRef.current.innerText);
    navigate(`/stores?areaName=${areaRef.current.innerText}&page=1&limit=20`);
    // 일단 그냥 이렇게 리디렉션만 해주면 돼!! 
    // 이 넘겨준 값은 detail페이지에서 신경쓰면 되구
  }
  return (
    <div className={shop.shop} key= { key } ref={ areaRef } onClick={ axiosArea }>
        <h4 className={shop.link}>{ areaName }</h4>
        {/* 링크를 없애는 대신 리디렉션을 해준다... */}
    </div>
  )
}
