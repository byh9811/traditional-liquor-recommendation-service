import React from 'react'
import content from './Contentbox.module.css';
import ContentElement from './ContentElement';

export default function Contentbox({ title, company, type, price, volume, alcohol, sweet, sour, body, cool, food, material }) {
  return (
    <div className={ content.content__wrapper }>
        {/* 총 12개! */}
        
        <ContentElement 
        className = { content.content__title }
        property = "title"
        value = { title }
        /> 
       <ContentElement 
        className = { content.content__company }
        property = "company"
        value = { company }
        /> 
        <ContentElement 
        className = {content.content__type}
        property = "type"
        value = { type }
        /> 
        <ContentElement 
        className = {content.content__price}
        property = "price"
        value = { price }
        /> 
        <ContentElement 
        className = {content.content__volume}
        property = "volume"
        value = { volume }
        /> 
        <ContentElement 
        className = {content.content__alcohol}
        property = "alcohol"
        value = { alcohol }
        /> 
        <ContentElement 
        className = {content.content__sweet}
        property = "sweet"
        value = { sweet }
        /> 
        <ContentElement 
        className = {content.content__sour}
        property = "sour"
        value = { sour }
        /> 
        <ContentElement 
        className = {content.content__body}
        property = "body"
        value = { body }
        /> 
        <ContentElement 
        className = {content.content__cool}
        property = "cool"
        value = { cool }
        /> 
        <ContentElement 
        className = {content.content__food}
        property = "food"
        value = { food }
        /> 
        <ContentElement 
        className = {content.content__matetial}
        property = "matetial"
        value = { material }
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