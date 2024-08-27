import { useState } from "react";

const heavyWork = () => {
  console.log("엄청 무거운 작업");
  return ["권은지", 1+1, 2*77, 36**2+"계산완료"]
}

const UseStateComponent = () => {
  // const [names, setNames] = useState(heavyWork()); // 이렇게 하면 무거운 작업이 값 업데이트마다 계속 랜더링됨 -> 비효율적
  const [names, setNames] = useState(() => heavyWork());
  const [input, setInput] = useState("");

  const handleInputChange = (e: any) => {
    setInput(e.target.value);
  }

  const handleUpload = () => {
    setNames((prevState: any) => {
      return [...prevState, input]
    })
  }

  return (
    <div>
      <input type="text" placeholder="이름을 입력해주세요." value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>update</button>
      {names && names.map((name: any, i: number) => (
        <p key={"number"+i}>* {name}</p>
      ))}
    </div>
  )
}

export default UseStateComponent;