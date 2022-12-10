import React from 'react'
import { useState } from 'react';
import app from './App.module.css';
import Count from './component/Main/Count';
export default function App() {
    // props : 부모가 자식에게 전달해주고 싶은 data! 
    let [total, setTotal] = useState(0);
    // 전체 클릭된 횟수 => 자식들에게 전달! 
    let totalInc = () => {
        setTotal(total + 1);
    }
  return (
    <div className={ app.container }>
        <div className="total">
            <span className="total__num">
                { total }
            </span>
        </div>
        <Count 
        total = "0"
        onClick = {totalInc}
        />
        {/* 전체 클릭된 수 전달해줘야돼!! => 그럼 클릭을 했을 때! 전체가 증가하는 함수도 전달해줘야돼! 
         */}
        <Count 
        total = "0"
        onClick = {totalInc}
        // 전체가 증가하는 함수! => 증가시켜준다. 
        />
    </div>
  )
}

// 1. 자식 state가 변하면, 즉 자식이 재랜더링 되면, 부모의 state도 변한다. 
// ==> 를 구현해보자.

// 자식의 버튼에게 onclick을 전달을 해보자!! => 그럼 자식이 onclick되면, 부모의 값도 변함. 
// 어디까지 공통 data를 갖고있으며,
// 어디까지 자식 개개인만의 state를 갖는지 파악해줘야돼! 

// 자 공통 data는 부모에게 두고, 자식도 필요하면 props로 전달해주면 돼! 

// 자식에서 전체 클릭된 data는 부모가 전달해줘야 하는 data이기 때문이다!! 
// total이 계속 증가할거야 그럼!! 

// 그럼 부모가 전달해줘야 할 state는 버튼 눌렀을 때 공통 state가 증가하는 함수. 
// 계속 증가하는 total state값! 