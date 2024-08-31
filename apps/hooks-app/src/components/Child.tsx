import { memo } from 'react';

type Props = {
  name: {
    lastName: string,
    firstName: string,
  },
  tellMe: () => void;
}

const Child = ({name, tellMe}: Props) => {
  console.log("자녀 컴포넌트도 렌더링이 되네요!")

  return (
    <div style={{ border: "1px solid powderblue", padding: 10}}>
      <h3>👶 자녀</h3>
      <p>성: {name.lastName}</p>
      <p>이름: {name.firstName}</p>
      <button onClick={tellMe}>엄마 나 사랑해?</button>
    </div>
  )
}

export default memo(Child);