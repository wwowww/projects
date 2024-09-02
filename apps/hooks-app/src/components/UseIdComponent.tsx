import { useEffect, useId, useRef } from "react";

export const MyInput = ({title}: any) => {
  const id = useId();
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    console.log(element);
  }, [])

  return (
    <div>
      <label htmlFor={id}>{title}</label>
      <input type="text" id={id} ref={ref.current} />
    </div>
  )
}

const UseIdComponent = () => {
  return (
    <div>
      <MyInput title={"이름"} />
      <MyInput title={"나이"} />
    </div>
  )
}

export default UseIdComponent;