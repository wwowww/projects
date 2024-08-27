import { useEffect, useState } from "react";

const Timer = () => {
  let [time, setTime] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 돌아가는 중..")
      setTime(++time)
    }, 1000)
    return () => {  // clean up
      clearInterval(timer);
    }
  }, []);

  return (
    <div>
      <span>타이머를 시작합니다. 콘솔을 보세요!</span> <br/>
      {time}초
    </div>
  )
}

export default Timer;