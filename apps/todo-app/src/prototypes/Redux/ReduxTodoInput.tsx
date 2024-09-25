import TodoInput from "@/components/organisms/todo/TodoInput/TodoInput";
import { useReduxTodoMutations } from "./useReduxTodo";

const ReduxTodoInput = () => {
  const { addTodo } = useReduxTodoMutations();

  return (
    <TodoInput addTodo={addTodo} />
  )
}

export default ReduxTodoInput;