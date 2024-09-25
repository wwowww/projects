import { memo } from 'react';
import TodoList from "@/components/organisms/todo/TodoList/TodoList";
import useZustandTodo from './useZustandTodo';
import ZustandTodoEditableItem from './ZustandTodoEditableItem';

const ZustandTodoList = () => {
  const todos = useZustandTodo((state) => state.todos);

  return (
    <TodoList todos={todos} ItemElement={memo(ZustandTodoEditableItem)} />
  );
};

export default ZustandTodoList;