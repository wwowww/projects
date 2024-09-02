import { useEffect, useLayoutEffect, useRef, useState } from "react";

const getNumbers = () => {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
}

const UseLayoutEffectComponent2 = () => {
  const [numbers, setNumbers] = useState<any>([]);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const nums = getNumbers();
    setNumbers(nums);
  }, []);

  useLayoutEffect(() => {
    if(numbers.lenght === 0) {
      return;
    }

    for (let i = 0; i < 300000000; i++) {}

    ref.current.scrollTop = ref.current?.scrollHeight
  }, [numbers])

  return (
    <>
      <button onClick={() => setNumbers([])}>RESET</button>
      <div
        ref={ref}
        style={{
          height: 300,
          border: "1px solid blue",
          overflowY: "scroll",
        }}
      >
        {numbers.map((number: any, index: number) => (
          <p key={index}>{number}</p>
        ))}
      </div>
    </>
    
  )
}

export default UseLayoutEffectComponent2;