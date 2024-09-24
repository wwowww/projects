import { ChangeEvent, KeyboardEventHandler, useCallback, useState } from 'react';
import { v4 } from "uuid";
import Button from '../../../atoms/Button/Button';
import style from "./TodoInput.module.scss"
import Typography from '../../../atoms/Typography/Typography';

type Props = {
  addTodo: (todo: Todo) => void;
  placeholder?: string;
  errorMessage?: string;
  ref?: any;
}

const Input = ({addTodo, placeholder, errorMessage, ref}: Props) => {
  const [input, setInput] = useState<string>('');
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    e && setShowErrorMessage(false);
  }, []);

  const handleAddTodo = useCallback(() => {
    if (!input) return setShowErrorMessage(true);
    
    addTodo({ id: v4(), title: input, isDone: false });
    setInput('');
    setShowErrorMessage(false);
  },[addTodo, input]);

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
    if (e.key === 'Enter') handleAddTodo();
  },[handleAddTodo, addTodo, input]);

  return (
    <div className={style.todoInput}>
      <div className={style.wrap}>
        <input
          ref={ref}
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className={style.input}
          placeholder={placeholder ?? "할 일을 입력해 주세요."}
        />
        <Button type="button" onClick={handleAddTodo} className={style.button}>
          추가
        </Button>
      </div>
      {showErrorMessage && (
        <Typography className="label-12-100-600" color="#FF5834">
          {errorMessage ?? "할 일을 입력해주세요."}
        </Typography>
      )}
    </div>
  )
}

export default Input;