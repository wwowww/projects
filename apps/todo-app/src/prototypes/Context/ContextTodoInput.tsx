
import TodoInput from '../../components/organisms/todo/TodoInput/TodoInput';
import { useContextTodoMutations } from './useContextTodo';

const ContextTodoInput = () => {
  const { addTodo } = useContextTodoMutations();

  return <TodoInput addTodo={addTodo} />;
};

export default ContextTodoInput;
