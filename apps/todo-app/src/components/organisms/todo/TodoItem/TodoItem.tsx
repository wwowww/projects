import { useCallback } from "react";
import Button from "../../../atoms/Button/Button";
import style from "./TodoItem.module.scss";

export type TodoItemProps = {
  todo: Todo;
  onUpdateTodo: (todo: Todo) => void;
  onRemoveTodo: (id: string) => void;
  onClickEdit: () => void;
};

const TodoItem = (props: TodoItemProps) => {
  const { todo, onRemoveTodo, onUpdateTodo, onClickEdit } = props;
  const { id, title, isDone } = todo;
  
  const handleToggleDone = useCallback(() => {
      onUpdateTodo({ ...todo, isDone: !todo.isDone });
    },
    [onUpdateTodo, todo]
  );

  const handleDelete = useCallback(() => {
      onRemoveTodo(id);
    },
    [onRemoveTodo, id]
  );
  
  return (
    <li key={id} className={style.wrap}>
      <div className={style.content}>
        <button
          type="button"
          onClick={handleToggleDone}
          className={`${isDone ? style.done : ""} ${style.checkboxButton}`}
        >
          {isDone ? '완료' : '미완료'}
        </button>
        <p className={`${isDone ? style.underline : ""} ${style.note}`}>{title}</p>
      </div>
      <div className={style.buttonWrap}>
        {!isDone && 
          <Button type="button" onClick={onClickEdit} buttonType="edit">
            수정
          </Button>
        }
        <Button type="button" onClick={handleDelete} buttonType="delete">
          삭제
        </Button>
      </div>
    </li>
  )
}

export default TodoItem;