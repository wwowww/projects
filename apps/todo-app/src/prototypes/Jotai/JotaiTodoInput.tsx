import TodoInput from '@/components/organisms/todo/TodoInput/TodoInput';
import { useJotaiTodoMutations } from './useJotaiTodo';

const JotaiTodoInput = () => {
  const { addTodo } = useJotaiTodoMutations();

  return <TodoInput addTodo={addTodo} />;
};

export default JotaiTodoInput;