import { useMemo, useState } from "react";

const hardCalculate = (number: number) => {
  for(let i = 0; i < 99999999; i++) {};
  return number + 1000000;
}

const easyCalculate = (number: number) => {
  return number + 1;
}

const UseMemoComponent = () => {
  const [hardNumber, setHardNumber] = useState<number>(1);
  const [easyNumber, setEasyNumber] = useState(1);

  const hardSum = hardCalculate(hardNumber);

  const easySum = useMemo(() => {
    return easyCalculate(easyNumber);
  }, [easyNumber]);

  return (
    <>
      <h1>계산기</h1>
      <h2>어려운 계산기</h2>
      <input 
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(+(e.target.value))}
      />
      <span> + 1000000 = {hardSum}</span>
      <hr />
      <h2>쉬운 계산기</h2>
      <input 
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(+(e.target.value))}
      />
      <span> + 1 = {easySum}</span>
    </>
    
  )
}

export default UseMemoComponent;