import React from 'react'
import { useNavigate } from 'react-router-dom';
// css
import item from './Item.module.css'; // 객체로 모아준다!! 
import result from '../../pages/DrinkResult.module.css';

// component
import ItemProperty from './ItemProperty';


export default function Item({ id, title, price, volume, type, alcohol, food }) {
    let itemName = [item.title, item.price, item.volume, item.type, item.alcohol, item.food];
    let values = [ title, price, volume, type, alcohol, food];
    let properties = ["title", "price", "volume", "type", "alcohol", "food"];
    const navigate = useNavigate();
    const src = "/display/" + id;
    const goDetail = (id, title) => {
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
        {
          itemName.map((value, index) => 
            <ItemProperty 
              className = { itemName[index] }
              property= { properties[index] }
              value = { values[index] }
            // value는 이제 result에서 props로 전달해줄거야!
            />
          )
        }
    </li>
  )
}
