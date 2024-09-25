import { atom, useAtomValue, useSetAtom } from "jotai";
import { useCallback } from "react";

const todoListAtom = atom<Todo[]>([]);

export const useJotaiTodoValue = () => {
  return useAtomValue(todoListAtom);
}

export const useJotaiTodoMutations = () => {
  const setTodos = useSetAtom(todoListAtom);
  
  const addTodo = useCallback((todo: Todo) => {
    setTodos((prev) => [...prev, todo]);
  }, [setTodos])

  const removeTodo = useCallback((id: string) => {
    setTodos((prev) => prev.filter((prev) => prev.id !== id))
  }, [setTodos])

  const updateTodo = useCallback((todo: Todo) => {
    setTodos((prev) => prev.map((prev) => {
      return prev.id === todo.id ? todo : prev;
    }));
  }, [setTodos])

  return {
    addTodo,
    removeTodo,
    updateTodo
  }
}

