import React from 'react'
// css
import result from './DrinkResult.module.css';

export default function DrinkResult() {
  return (
    <div className={result.result__wrapper}>
        <div className={result.title}>
            <h2>Drink Result</h2>
        </div>
        <div className={result.result__items}>
            <div className={result.item}>1</div>
            <div className={result.item}>2</div>
            <div className={result.item}>1</div>
            <div className={result.item}>2</div>
            <div className={result.item}>1</div>
            <div className={result.item}>2</div>
            <div className={result.item}>1</div>
            <div className={result.item}>2</div>
            <div className={result.item}>1</div>
            <div className={result.item}>2</div>
            <div className={result.item}>1</div>
            <div className={result.item}>2</div>
            <div className={result.item}>1</div>
            <div className={result.item}>2</div>
            <div className={result.item}>1</div>
            <div className={result.item}>2</div>
            <div className={result.item}>1</div>
            <div className={result.item}>2</div>
            <div className={result.item}>1</div>
            <div className={result.item}>2</div>
        </div>
    </div>
  )
}
