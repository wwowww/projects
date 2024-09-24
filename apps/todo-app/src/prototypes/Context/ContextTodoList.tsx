import TodoList from "../../components/organisms/todo/TodoList/TodoList";
import { useContextTodo } from "./useContextTodo";

import { memo } from "react";
import ContextTodoEditableItem from "./ContextTodoEditableItem";

const ContextTodoList = () => {
  const todos = useContextTodo();

  if (!todos) {
    throw new Error('TodoContext Provider not found');
  }
  
  return (
    <TodoList todos={todos} ItemElement={memo(ContextTodoEditableItem)} />
  )
}

export default ContextTodoList;