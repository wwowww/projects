import { useInput } from "../hooks/useInput";

const displayMessage = (message: string) => {
  alert(message)
}

const CustomHook = () => {
  const [inputValue, handleChange, handleSubmit] = useInput("", displayMessage);

  return (
    <div>
      <h1>useInput</h1>
      <input value={inputValue || ''} onChange={handleChange} />
      <button onClick={inputValue && handleSubmit}>확인</button>
    </div>
  )
}

export default CustomHook;