import { useState } from "react";
import Child from "./Child";

// React.memo
// React.memo는 오직 Props 변화에만 의존하는 최적화 방법

// 1. 컴포넌트가 같은 Props로 자주 렌더링 될 때
// 2. 컴포넌트가 렌더링이 될 때마다 복잡한 로직을 처리해야 한다면

const ReactMemo = () => {
  const [parentAge, setParentAge] = useState(0);
  const [childAge, setChildAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  }

  const incrementChildAge = () => {
    setChildAge(childAge + 1);
  }

  console.log("부모 컴포넌트가 렌더링이 되었어요!")

  return (
    <div style={{border: '2px solid navy', padding: 10}}>
      <h1>👥 부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <button onClick={incrementChildAge}>자녀 나이 증가</button>
      <Child name={"은지"} age={childAge}  />
    </div>
  )
}

export default ReactMemo;