import { useCallback, useState } from 'react';
import useZustandTodo from './useZustandTodo';
import TodoItem from '@/components/organisms/todo/TodoItem/TodoItem';
import TodoEditItem from '@/components/organisms/todo/TodoEditItem/TodoEditItem';

const ZustandTodoEditableItem = (props: { todo: Todo }) => {
  const { todo } = props;

  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = useCallback(function handleEdit() {
    setIsEdit(true);
  }, []);

  const updateTodo = useZustandTodo((actions) => actions.updateTodo);
  const removeTodo = useZustandTodo((actions) => actions.removeTodo);

  if (isEdit) {
    return <TodoEditItem todo={todo} updateTodo={updateTodo} />;
  }

  return (
    <TodoItem
      todo={todo}
      onUpdateTodo={updateTodo}
      onClickEdit={handleEdit}
      onRemoveTodo={removeTodo}
    />
  );
};

export default ZustandTodoEditableItem;
