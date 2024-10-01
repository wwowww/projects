import { useEffect, useReducer } from "react";

export const useLocalStorageReducer = (key, defaultValue, todoReducer) => {
  const [todos, dispatch] = useReducer(todoReducer, defaultValue, () => {
    let value;
    
    try {
      value = JSON.parse(localStorage.getItem(key) as string) || [];
    } catch (error) {
      value = defaultValue;
    }
    return value;
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(todos));
  }, [todos, key]);

  return [todos, dispatch];
}