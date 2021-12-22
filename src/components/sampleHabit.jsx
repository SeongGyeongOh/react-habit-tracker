import React, { memo, useCallback, useEffect, useRef, useState } from 'react';

// 리액트 훅 사용하기***
// 함수형 컴포넌트에서 state와 lifecycle을 사용할 수 있도록 도와줌
// 함수형 컴포넌트는 컴포넌트가 변경될 때마다 코드블럭 전체가 반복 실행됨*********
const SampleHabit = props => {
  // state 만들기
  // useState()를 사용하면 실제 count 값과 setCount라는 함수를 리턴해줌
  // useState()로 받아온 것은 메모리에 따로 저장을 해줌 - 컴포넌트가 다시 호출돼도 별도로 값을 저장함!!
  // useRef() 도 마찬가지!!
  const [count, setCount] = useState(0) 
  const spanRef = useRef()

  // useCallback(): 콜백 함수를 메모리에 저장함
  const handleIncrement = useCallback(() => {
    setCount(count + 1)
  })

  // useEffect : componentDidMount, componentDidUpdate를 결합함
  useEffect(()=> {
    console.log(`mounted & updated!: ${count}`)
  }, []) // [] 안에 들어있는 것이 변경이 되었을 때 호출해라!! (빈 배열이면 처음 Mount 됐을 때만 호출됨)

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button 
        className="habit-button habit-increase"
        onClick={handleIncrement}>
        <i className="far fa-plus-square"></i>
      </button>

    </li>
  ) 
}

export default SampleHabit;