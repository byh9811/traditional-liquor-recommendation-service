import React from 'react'
import { useNavigate } from 'react-router-dom';
// css
import result from '../../pages/DrinkResult.module.css';
import item from './Item.module.css'; // 객체로 모아준다!! 
import ItemProperty from './ItemProperty';
// class이름은 약간 프로퍼티라고 생각하자!! 

export default function Item({ id, title, price, volume, type, alcohol, food }) {
    const navigate = useNavigate();
    const src = "/display/" + id + "?w=640&h=640";
    function goDetail(id, title) {
      console.log(typeof id);
      navigate(`/drinks/${id}`); // ❗️ detail page로 이동 => 갈 때 id넘겨줘야돼!! ❗️
    }
  return (
    <li className={`${result.item} ${item.item}`} key = { id }
    onClick = { () => {
      goDetail(id, title);
    } }
    >
        <div className={item.img}>
            <img src={src}/>
        </div>
        <ItemProperty 
        className = "item.title"
        property= "title"
        value = { title }
        // value는 이제 result에서 props로 전달해줄거야!
        />
        <ItemProperty 
        className = "item.price"
        property= "price"
        value = { price }
        />
        <ItemProperty 
        className = "item.volume"
        property= "volume"
        value = { volume }
        />
        <ItemProperty 
        className = "item.type"
        property= "type"
        value = { type }
        />
        <ItemProperty 
        className = "item.alcohol"
        property= "alcohol"
        value = { alcohol }
        />
        <ItemProperty 
        className = "item.food"
        property= "food"
        value = { food }
        />
    </li>
  )
}
