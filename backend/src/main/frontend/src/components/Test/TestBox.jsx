import React from 'react'
import { useState } from 'react';
// css
import test from '../../pages/Test.module.css';

// component
import Question from './Question.jsx';
import TestPaper from './TestPaper.jsx';
export default function TestBox({ question, name }) {
    // test상자에 질문이랑 문제 radiobox들어가야돼!
    let [ques, setQues] = useState(["단맛을 얼마나 좋아하세요?","신맛을 얼마나 좋아하세요?","바디를 얼마나 좋아하세요?","청량감을 얼마나 좋아하세요?"]);
  return (
    <div className={test.test}>
        <Question 
        question = { question }
        // 저기 부모에서 입력받은 값은 { question }으로! 
        />
        <TestPaper 
        name = { name }
        />
    </div>
  )
}
