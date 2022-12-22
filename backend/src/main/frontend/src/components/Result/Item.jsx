import React from 'react'
// css
import result from '../../pages/DrinkResult.module.css';
import item from './Item.module.css'; // 객체로 모아준다!! 
import ItemProperty from './ItemProperty';
// class이름은 약간 프로퍼티라고 생각하자!! 

export default function Item({ key, title, type, food, flavorType }) {
    
  return (
    <div className={`${result.item} ${item.item}`} key={ key }>
        <div className={item.img}>1</div>
        <ItemProperty 
        className = "item.title"
        property= "title"
        value = {title}
        // value는 이제 result에서 props로 전달해줄거야!
        />
        <ItemProperty 
        className = "item.type"
        property= "type"
        value = { type }
        />
        <ItemProperty 
        className = "item.food"
        property= "food"
        value = { food }
        />
        <ItemProperty 
        className = "item.flavor__type"
        property= "flavor-type"
        value = { flavorType }
        />
        
    </div>
  )
}
