import { memo } from 'react';

type Props = {
  name: string,
  age: number
}

const Child = ({name, age}: Props) => {
  console.log("자녀 컴포넌트도 렌더링이 되네요!")

  return (
    <div style={{ border: "1px solid powderblue", padding: 10}}>
      <h3>👶 자녀</h3>
      <p>name: {name}</p>
      <p>age: {age}살</p>
    </div>
  )
}

export default memo(Child);