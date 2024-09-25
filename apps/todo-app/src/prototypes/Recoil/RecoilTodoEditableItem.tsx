import { useCallback, useState } from 'react';
import { useRecoilTodoMutations } from './useRecoilTodo';
import TodoItem from '@/components/organisms/todo/TodoItem/TodoItem';
import TodoEditItem from '@/components/organisms/todo/TodoEditItem/TodoEditItem';

const RecoilTodoEditableItem = (props: { todo: Todo }) => {
  const { todo } = props;
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { updateTodo, removeTodo } = useRecoilTodoMutations();

  const handleClickEdit = useCallback(() => {
    setIsEdit(true);
  }, []);

  if (isEdit) {
    return <TodoEditItem todo={todo} updateTodo={updateTodo} />
  }

  return (
    <TodoItem 
      todo={todo}
      onClickEdit={handleClickEdit}
      onUpdateTodo={updateTodo}
      onRemoveTodo={removeTodo}
    />
  )
}

export default RecoilTodoEditableItem;