import Timer from "./Timer";
import { useEffect, useState } from "react";

const UseEffectComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  
  const handleCountUpdate = () => {
    setCount(count + 1)
  }

  const handleInputChange = (e:any) => {
    setName(e.target.value);
  }
  
  useEffect(() => {
    console.log("마운팅");
  }, []);

  const [showTimer, setShowTimer] = useState<boolean>(false);

  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
      <hr />
      <button onClick={handleCountUpdate}>Update</button><br/>
      <span>conut: {count}</span><br/>
      <input type="text" onChange={handleInputChange} placeholder="이름을 입력해주세요." /><br/>
      <span>이름: {name}</span>
    </div>
  )
}

export default UseEffectComponent;