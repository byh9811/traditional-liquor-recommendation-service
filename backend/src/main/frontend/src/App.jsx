import React from 'react'
import { useState } from 'react';
import app from './App.module.css';
import Count from './component/Main/Count';
export default function App() {
    // 부모는 공통 data + 개별 data를 가질 수 있다! 
    // 공통 data 
    let [total, setTotal] = useState(0);
    let addTotal = () => {
        setTotal(total + 1);
    } // 자식에서 click을 해도 addTotal이 발동해야돼!! 

    let [toggle , setToggle] = useState("true");
    let turn = () => {
        toggle === "true" ? setToggle("false") : setToggle("true");
    }
  return (
    <div className={app.container}>
        <div className={ app.total__count }>
            { total }
        </div>
        <Count 
        total = { total }
        onClick = { addTotal }
        // 값도 전달할 수 있고, 자식이 필요하면 함수도 전달할 수 있어.
        />
        <Count 
        total = { total }
        onClick = { addTotal }
        />

        <button
        onClick = { turn }
        >{ toggle }</button>
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


// 정리 
// 공통 data가 있고, 자식만 갖고있는 data가 있다. 
// 만약 공통 data를 자식도 쓰고싶다면 props로 전달해준다! => 자식에게 선언하고, component할 때 초기화만 해주면 돼! 

// 자식만 쓰고싶은 data가 있다면 부모에게 전달받지 않아도 돼! 

