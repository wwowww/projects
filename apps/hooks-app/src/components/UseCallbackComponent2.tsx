import { useCallback, useEffect, useState } from "react";
import Box from "./Box";

const UseCallbackComponent2 = () => { // useCallback은 콜백하는 함수 자체를 memoization 함
  const [size, setSize] = useState<number>(100);
  const [isDark, setIsDark] = useState<boolean>(false);
  
  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: "pink",
      width: `${size}px`,
      height: `${size}px`
    }
  }, [size]); // 사이즈가 바꼈을 때만 초기화

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: isDark ? "black" : "white",
      }}
    >
      <input 
        type="number"
        value={size}
        onChange={(e) => setSize(+(e.target.value))}
      />
      <Box createBoxStyle={createBoxStyle} />
      <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
    </div>
  )
}

export default UseCallbackComponent2;