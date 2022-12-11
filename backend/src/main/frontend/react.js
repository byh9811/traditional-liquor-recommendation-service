'use strict';

// && 연산자 사용해서 뒷 값 구하기!! 
let num = true;
let name = "지성";
console.log(num && name); // 앞 값이 true면 뒷 값 자연스럽게 출력! 
// 하지만 뒷 값이 false (0, -0, null, undefined, NaN, '')

console.log(num || name); // num이 true면 앞에 값 출력! 