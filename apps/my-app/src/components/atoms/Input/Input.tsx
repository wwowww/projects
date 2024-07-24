import { useState } from "react";
import style from "./Input.module.scss";

type InputProps = {
  type: "text" | "number" | "email";
  placeholder?: string;
  onInsertTodo?: any;
  errorMessage?: string;
};

const InputBox = ({ type, placeholder, onInsertTodo, errorMessage }: InputProps) => {
  const [value, setValue] = useState<string>("");
  const [viewErrorMessage, setViewErrorMessage] = useState(false);
  
  const onChange = (e: any) => {
    setValue(e.target.value);
  }

  const onSubmit = (e: any) => {
    e.preventDefault();
    onInsertTodo(value);
    setValue("");
  }

  return (
    <form onSubmit={onSubmit} className={style.formWrap}>
      <input 
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <button type="submit" onClick={() => setViewErrorMessage(true)}>+</button>
      {value.length === 0 && viewErrorMessage ? errorMessage : ""}
    </form>
    
  )
}

export default InputBox;