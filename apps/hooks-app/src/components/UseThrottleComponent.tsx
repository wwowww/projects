// 쓰로틀링: 함수가 한 번 호출되면, 일정 시간이 지나기 전에 다시 호출되지 않도록 막는 것

import { useRef, useState } from "react";
import "./UseThrottleComponent.scss";

const hackLottoNumbers = () => {
  console.log("로또 번호 열심히 추측하는 중!");

  const lottoNumbers = [];
  for(let i = 0; i < 6; i++) {
    const number = Math.floor(Math.random() * 45) + 1;
    
    lottoNumbers.push(number);
  }

  return lottoNumbers.sort();
}

const UseThrottleComponent = () => {
  const [lottoNumbers, setLottoNumbers] = useState([0, 0, 0, 0, 0, 0]);

  const lastRun = useRef(Date.now());
  
  const handleClick = () => {
    const timeElapsed = Date.now() - lastRun.current;

    if (timeElapsed >= 1000) {
      const result = hackLottoNumbers();
      setLottoNumbers(result);
      lastRun.current = Date.now();
    }
  }

  return (
    <div className="container">
      <h1>로또 번호 맞춰드립니다😎</h1>
      <button 
        className="button"
        onClick={handleClick}
      >번호 맞추기</button>
      <div className="numbers">
        {lottoNumbers.map((number:number, index:number) => (
          <span key={`${number}-${index}`} className="number">
            {number}
          </span>
        ))}
      </div>
    </div>
  )
}

export default UseThrottleComponent;