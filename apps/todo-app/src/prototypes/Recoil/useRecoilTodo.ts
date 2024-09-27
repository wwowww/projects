import { useCallback } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'recoilTodos', 
  storage: localStorage,
});

export const todoState = atom<Todo[]>({
  key: 'todo', 
  default: [],
  effects_UNSTABLE: [persistAtom], // 필수
});

export const useRecoilTodoValue = () => {
  return useRecoilValue(todoState);
};

export const useRecoilTodoMutations = () => {
  const setTodos = useSetRecoilState(todoState);

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
