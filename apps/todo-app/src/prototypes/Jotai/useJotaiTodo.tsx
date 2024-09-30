import { atom, useAtomValue, useSetAtom } from "jotai";
import { useCallback } from "react";

const localStorageKey = 'jotaiTodoStore';

const getTodosFromLocalStorage = (): Todo[] => {
  const storedTodos = localStorage.getItem(localStorageKey);
  return storedTodos ? JSON.parse(storedTodos) : [];
};

const todoListAtom = atom<Todo[]>(getTodosFromLocalStorage());

export const useJotaiTodoValue = () => {
  return useAtomValue(todoListAtom);
}

export const useJotaiTodoMutations = () => {
  const setTodos = useSetAtom(todoListAtom);
  
  const addTodo = useCallback((todo: Todo) => {
    setTodos((prev) => {
      const newTodos = [...prev, todo];
      localStorage.setItem(localStorageKey, JSON.stringify(newTodos));
      return newTodos;
    });
  }, [setTodos]);

  const removeTodo = useCallback((id: string) => {
    setTodos((prev) => {
      const newTodos = prev.filter((todo) => todo.id !== id);
      localStorage.setItem(localStorageKey, JSON.stringify(newTodos));
      return newTodos;
    });
  }, [setTodos]);

  const updateTodo = useCallback((todo: Todo) => {
    setTodos((prev) => {
      const newTodos = prev.map((prevTodo) => {
        return prevTodo.id === todo.id ? todo : prevTodo;
      });
      localStorage.setItem(localStorageKey, JSON.stringify(newTodos));
      return newTodos;
    });
  }, [setTodos]);

  return {
    addTodo,
    removeTodo,
    updateTodo
  }
}