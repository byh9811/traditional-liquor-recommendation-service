import React from 'react'
// component
import Contentbox from '../components/Detail/Contentbox.jsx';
import Imgbox from '../components/Detail/Imgbox.jsx';

// css
import detail from './DrinkDetail.module.css';

export default function DrinkDetail() {
  // id를 넘겨줘야하잖아. => 그럼 db에서 id가 n번인 값을 요청하자. 

  return (
    <div className={detail.detail__wrapper}>
        <div className={detail.detail__img}>
          <Imgbox 
            imgUrl= "/img/all-removebg-preview.png"
          />
        </div>
        <div className={detail.detail__content}>
          <Contentbox />
        </div>
    </div>
  )
}
// id: Integer
// title: String
// price: Integer
// volume: Integer
// type: String
// alcohol: Double
// food: Array (String)
// sweet: Integer
// sour: Integer
// body: Integer
// cool: Integer
// material: Array (String)
// company: String