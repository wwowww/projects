import TodoInput from '@/components/organisms/todo/TodoInput/TodoInput';
import { useRecoilTodoMutations } from './useRecoilTodo';

const RecoilTodoInput = () => {
  const { addTodo } = useRecoilTodoMutations();

  return <TodoInput addTodo={addTodo} />;
};

export default RecoilTodoInput;
