import React, { memo } from 'react';

// memo : class의 PureComponent와 동일한 사용
const HabitInputForm = memo(props => {
    // ref 사용하기 - DOM 요소에 직접 접근하지 않기 때문에, 다른 React 요소에 접근하고 싶다면 ref를 사용하면 된다
    // input과 inputRef가 연결됨
    const inputRef = React.createRef()
  
    const onSubmit = event => {
      event.preventDefault()
      const name = inputRef.current.value
      name && props.onAdd(name)
      inputRef.current.value = ''
    }
  
    return (
      <form className="add-form" onSubmit={onSubmit}>
        <input 
          ref={inputRef}
          className='input-box' 
          placeholder='Habit'></input>
        <button className='input-button'>Add</button>
      </form>
    );
  }
)

export default HabitInputForm;