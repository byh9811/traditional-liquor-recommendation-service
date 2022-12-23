import React from 'react'
import content from './Contentbox.module.css';
import ContentElement from './ContentElement';

export default function Contentbox() {
  return (
    <div className={ content.content__wrapper }>
        {/* 총 12개! */}
        
        <ContentElement 
        className = { content.content__title }
        property = "title"
        value = "기가막힌 전통주"
        /> 
       <ContentElement 
        className = { content.content__company }
        property = "company"
        value = "회사1"
        /> 
        <ContentElement 
        className = {content.content__type}
        property = "type"
        value = "타입"
        /> 
        <ContentElement 
        className = {content.content__price}
        property = "price"
        value = "5000$"
        /> 
        <ContentElement 
        className = {content.content__volume}
        property = "volume"
        value = "700ml"
        /> 
        <ContentElement 
        className = {content.content__alcohol}
        property = "alcohol"
        value = "도수"
        /> 
        <ContentElement 
        className = {content.content__sweet}
        property = "sweet"
        value = "단맛"
        /> 
        <ContentElement 
        className = {content.content__sour}
        property = "sour"
        value = "신맛"
        /> 
        <ContentElement 
        className = {content.content__body}
        property = "body"
        value = "바디"
        /> 
        <ContentElement 
        className = {content.content__cool}
        property = "cool"
        value = "청량감"
        /> 
        <ContentElement 
        className = {content.content__food}
        property = "food"
        value = "어울리는 음식"
        /> 
        <ContentElement 
        className = {content.content__matetial}
        property = "matetial"
        value = "재료"
        /> 
    </div>
  )
}
// id : Integer
// title: String(o)
// price: Integer(o)
// volume: Integer => 술 ml (price옆에 괄호로)
// type: String(o)
// alcohol: Double 도수 => 
// food: Array (String)ㅐ
// sweet: Integerㅐ
// sour: Integerㅐ
// body: Integerㅐ
// cool: Integerㅐ
// material: Array (String)ㅐ
// company: String