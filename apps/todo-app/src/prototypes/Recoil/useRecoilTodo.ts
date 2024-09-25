import { useCallback } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

const todoListState = atom<Todo[]>({
  key: 'todoList',
  default: [],
});

export const useRecoilTodoValue = () => {
  return useRecoilValue(todoListState);
};

export const useRecoilTodoMutations = () => {
  const setTodos = useSetRecoilState(todoListState);

  const addTodo = useCallback((todo: Todo) => {
    setTodos((prev) => [...prev, todo])
  }, [setTodos])

  const removeTodo = useCallback((id: string) => {
    setTodos((prev) => prev.filter(prev => prev.id !== id))
  }, [setTodos])

  const updateTodo = useCallback((todo: Todo) => {
    setTodos((prev) => prev.map((prev) => {
      return prev.id === todo.id ? todo : prev;
    }))
  }, [setTodos])

  return {
    addTodo,
    removeTodo,
    updateTodo
  }
}
