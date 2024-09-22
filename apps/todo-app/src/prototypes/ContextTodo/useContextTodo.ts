import { Dispatch, createContext, useCallback, useContext } from "react";

export type TodoContextActions = 
| {
  type: 'add' | 'update';
  payload: Todo;
}
| {
  type: 'remove';
  payload: string;
};

export const TodoContext = createContext<Todo[] | null>(null);
export const TodoDispatchContext = createContext<Dispatch<TodoContextActions> | null>(null);

export const useContextTodo = () => {
  return useContext(TodoContext);
};

export const useContextTodoMutations = () => {
  const dispatch = useContext(TodoDispatchContext);

  const addTodo = useCallback((todo: Todo) => {
    if (!dispatch) {
      throw new Error('TodoContext Provider not found');
    }

    dispatch({ type: 'add', payload: todo });
  }, [dispatch]);

  const updateTodo = useCallback((todo: Todo) => {
    if (!dispatch) {
      throw new Error('TodoContext Provider not found');
    }

    dispatch({ type: 'update', payload: todo });
  }, [dispatch]);

  const removeTodo = useCallback((id: string) => {
    if (!dispatch) {
      throw new Error('TodoContext Provider not found');
    }

    dispatch({ type: 'remove', payload: id });
  }, [dispatch]);

  return {
    addTodo,
    updateTodo,
    removeTodo
  };
};

