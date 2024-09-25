import { ChangeEvent, KeyboardEventHandler, useCallback, useEffect, useRef, useState } from 'react';
import Button from '@/components/atoms/Button/Button';
import style from "./TodoEditItem.module.scss";

export type TodoEditItemProps = {
  todo: Todo;
  updateTodo: (todo: Todo) => void;
};

const TodoEditItem = (props: TodoEditItemProps): JSX.Element => {
  const { todo, updateTodo } = props;
  const [input, setInput] = useState(todo.title);

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  const handleDone = useCallback(() => {
    updateTodo({ ...todo, title: input });
  },[updateTodo, todo, input]);

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
    if (e.key === 'Enter') handleDone();
  },[handleDone]);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);


  return (
    <li className={style.wrap}>
      <input
        ref={inputRef}
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <div>
        <Button type="button" onClick={handleDone}>
          완료
        </Button>
      </div>
    </li>
  )
}

export default TodoEditItem;