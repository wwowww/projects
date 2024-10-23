import { FC } from "react";
import style from "./TodoList.module.scss";

const TodoList = (props: {
  todos: Todo[] | any;
  ItemElement: FC<{ todo: Todo }>;
}) => {
  const { todos, ItemElement } = props;

  return (
    todos.length > 0 ? (
      <ul className={style.wrap}>
      {todos.map((todo) => {
        return <ItemElement key={todo.id} todo={todo} />;
      })}
    </ul>
    ) : (
      ""
    )
  )
}

export default TodoList;