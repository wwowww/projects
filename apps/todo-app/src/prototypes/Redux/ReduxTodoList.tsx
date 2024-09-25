import { memo } from 'react';
import { useAppSelector } from '@/store';
import { selectTodo } from '@/store/slices/todoSlice';
import ReduxTodoEditableItem from "./ReduxTodoEditableItem";
import TodoList from "@/components/organisms/todo/TodoList/TodoList";

const ReduxTodoList = () => {
  const todos = useAppSelector(selectTodo);

  return (
    <TodoList todos={todos} ItemElement={memo(ReduxTodoEditableItem)} />
  )
}

export default ReduxTodoList;