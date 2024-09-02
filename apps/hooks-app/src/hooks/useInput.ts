import { useState } from "react";

export const useInput = (initialVale: any, submitAction: any) => {
  const [inputValue, setInputValue] = useState(initialVale);

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = () => {
    setInputValue("");
    submitAction(inputValue);
  }

  return [inputValue, handleChange, handleSubmit];
}