import { useCallback, useState } from "react";
import { useReduxTodoMutations } from "./useReduxTodo";
import TodoItem from "@/components/organisms/todo/TodoItem/TodoItem";
import TodoEditItem from "@/components/organisms/todo/TodoEditItem/TodoEditItem";

const ReduxTodoEditableItem = (props: { todo: Todo }) => {
  const { todo } = props;
  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = useCallback(() => {
    setIsEdit(true);
  }, []);

  const { updateTodo, removeTodo } = useReduxTodoMutations();
  
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
  )
}

export default ReduxTodoEditableItem;