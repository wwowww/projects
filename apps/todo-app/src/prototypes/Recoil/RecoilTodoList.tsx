import { memo } from 'react';
import BaseTodoList from '@/components/organisms/todo/TodoList/TodoList';
import RecoilTodoEditableItem from './RecoilTodoEditableItem';
import { useRecoilTodoValue } from './useRecoilTodo';

const RecoilTodoList = () => {
  const todos = useRecoilTodoValue();

  return (
    <BaseTodoList todos={todos} ItemElement={memo(RecoilTodoEditableItem)} />
  );
};

export default RecoilTodoList;
