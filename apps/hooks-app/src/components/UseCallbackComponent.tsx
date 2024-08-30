import { useCallback, useEffect, useState } from "react";

const UseCallbackComponent = () => { // useCallback은 콜백하는 함수 자체를 memoization 함
  const [number, setNumber] = useState<number>(0);
  const [toggle, setToggle] = useState<boolean>(true);

  const someFunction = useCallback(() => {
    console.log( `someFunc: number: ${number}`);
    return;
  }, [number]);

  useEffect(() => {
    console.log("someFunction이 변경되었습니다.")
  }, [someFunction]);

  return (
    <div>
      <input 
        type="number" 
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <br />
      <button onClick={someFunction}>Call someFunc</button>
    </div>
  )
}

export default UseCallbackComponent;