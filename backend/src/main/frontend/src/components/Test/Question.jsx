import React from 'react'
import test from '../../pages/Test.module.css';
import Radio from './Radio';
export default function Question({ question, answer, name, onChange, id }) {
    let questionList = [4, 3, 2, 1];
  return (
    <div className={test.question}>
        <p>{ question }</p>
        <Radio 
            answer = { answer }
            name = { name }
            onChange = { onChange }
            id = { id[0] }
            // 하... 객체로 2중 반복문을 사용한다시 보단 
            // 배열을 통째로 넘겨주고 여기서 index로 접근한다!!!!!!
            value = { questionList[0] }
        />
        <Radio 
            answer = { answer }
            name = { name }
            onChange = { onChange }
            id = { id[1] }
            value = { questionList[1] }
        />
        <Radio 
            answer = { answer }
            name = { name }
            onChange = { onChange }
            id = { id[2] }
            value = { questionList[2] }
        />
        <Radio 
            answer = { answer }
            name = { name }
            onChange = { onChange }
            id = { id[3] }
            value = { questionList[3] }
        />
    </div>
  )
}
