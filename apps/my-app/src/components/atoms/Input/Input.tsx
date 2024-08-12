import style from "./Input.module.scss";

type InputProps = {
  type: "text" | "number" | "email" | "checkbox";
  value?: any;
  placeholder?: string;
  id?: string;
  onChange?: any;
};

const Input = ({ type, value, placeholder, id, onChange }: InputProps) => {
  return (
    <input 
      type={type}
      value={value}
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      className={style.input}
    />
  )
}

export default Input;