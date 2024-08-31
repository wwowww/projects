import { useMemo, useState } from "react";
import Child from "./Child";

// React.memo
// React.memo는 오직 Props 변화에만 의존하는 최적화 방법

// 1. 컴포넌트가 같은 Props로 자주 렌더링 될 때
// 2. 컴포넌트가 렌더링이 될 때마다 복잡한 로직을 처리해야 한다면

const ReactMemo = () => {
  const [parentAge, setParentAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  }

  console.log("부모 컴포넌트가 렌더링이 되었어요!")

  // **string, number와 같은 원시타입과 다르게 변수에 저장되는 것이 아닌, 
  // **객체, 배열은 메모리 주소가 변수 안에 저장됨. 
  // 따라서 아래 코드는 useMemo로 사용해줘야 함.
  // const name = {
  //   lastName: '권',
  //   firstName: '은지'
  // }

  const name = useMemo(() => {
    return {
      lastName: '권',
      firstName: '은지'
    }
  }, []);

  return (
    <div style={{border: '2px solid navy', padding: 10}}>
      <h1>👥 부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <Child name={name}  />
    </div>
  )
}

export default ReactMemo;