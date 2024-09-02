// effect가 실행되는 시점이 다르다.
// * useEffect: 화면 업데이트 -> effect 실행
// * useLayoutEffect: effect 실행 0 -> 화면 업데이트

import { useEffect, useLayoutEffect, useState } from "react";

const UseLayoutEffectComponent = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => { // 비동기적으로 실행됨
    console.log("useEffect", count)
  }, [count])

  useLayoutEffect(() => {// 동기적으로 실행됨. 즉, 블로킹될 수 있음
    console.log("useLayoutEffect", count)
  }, [count])

  const handleCountUpdate = () => {
    setCount(count+1)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleCountUpdate}>Update</button>
    </div>
  )
}

export default UseLayoutEffectComponent;