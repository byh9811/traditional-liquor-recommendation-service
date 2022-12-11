import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
    const { id } = useParams();
    // console.log(id);
    // param오브젝트 안에 key형태로 담아서 파람스를 출력할 수 있음. 
  return (
    <div>Detail page : { id }</div>
    // 참고로 params에 띄어쓰기 입력하면 이상한 문자 대체되니까 띄어쓰기 절대안돼! 
  )
}
