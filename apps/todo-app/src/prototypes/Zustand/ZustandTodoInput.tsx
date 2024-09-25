import useZustandTodo from "./useZustandTodo";
import TodoInput from "@/components/organisms/todo/TodoInput/TodoInput"

const ZustandTodoInput = () => {
  const addTodo = useZustandTodo((state) => state.addTodo);

  return <TodoInput addTodo={addTodo} />;
};

export default ZustandTodoInput;