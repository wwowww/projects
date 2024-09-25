import { memo } from 'react';
import TodoList from '@/components/organisms/todo/TodoList/TodoList';
import JotaiTodoEditableItem from './JotaiTodoEditableItem';
import { useJotaiTodoValue } from './useJotaiTodo';

const JotaiTodoList = () => {
  const todos = useJotaiTodoValue();

  return (
    <TodoList todos={todos} ItemElement={memo(JotaiTodoEditableItem)} />
  );
};

export default JotaiTodoList;
