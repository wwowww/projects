import { useEffect, useRef } from "react";

const UseRefComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const hasInput = () => {
    inputRef.current && inputRef.current.focus();
  };

  useEffect(() => {
    hasInput;
  }, []);

  const loginAlert = () => {
    inputRef.current?.value.length === 0 ? (
      alert(`user name을 입력해주세요.`)
    ) : (
      alert(`환영합니다. ${inputRef.current?.value}`)
    )
    hasInput;
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="user name" />
      <button onClick={loginAlert}>Login</button>
    </div>
  )
}

export default UseRefComponent;