import { useCallback, useState } from "react";
import { useJotaiTodoMutations } from "./useJotaiTodo";
import TodoEditItem from "@/components/organisms/todo/TodoEditItem/TodoEditItem";
import TodoItem from "@/components/organisms/todo/TodoItem/TodoItem";

const JotaiTodoEditableItem = (props: { todo: Todo }) => {
  const { todo } = props;
  const [isEdit, setIsEdit] = useState<boolean>(false);
  
  const handleClickEdit = useCallback(() => {
    setIsEdit(true);
  }, []);

  const { updateTodo, removeTodo } = useJotaiTodoMutations();

  if (isEdit) {
    return <TodoEditItem todo={todo} updateTodo={updateTodo} />;
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

export default JotaiTodoEditableItem;