'use strict';
let arr = [[1,2,3,4], [5,6,7,8], [9,10,11,12]]

console.log(arr.map((value, index) => 
  value.map((value2, index2) => 
    value2
  )
))