import { useCallback, useState } from "react";
import { useContextTodoMutations } from "./useContextTodo";
import TodoEditItem from "@/components/organisms/todo/TodoEditItem/TodoEditItem";
import TodoItem from "@/components/organisms/todo/TodoItem/TodoItem";

const ContextTodoEditableItem = (props: { todo: Todo }) => {
  const { todo } = props;

  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = useCallback(() => {
    setIsEdit(true);
  }, []);

  const { updateTodo, removeTodo } = useContextTodoMutations();

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

export default ContextTodoEditableItem;