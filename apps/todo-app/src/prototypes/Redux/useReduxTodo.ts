import { useCallback } from "react";
import { useAppDispatch } from "../../store";
import { add, remove, update } from "../../store/slices/todoSlice";

export const useReduxTodoMutations = () => {
  const dispatch = useAppDispatch();
  const addTodo = useCallback((todo: Todo) => {
    dispatch(add(todo));

  }, [dispatch]);

  const updateTodo = useCallback((todo: Todo) => {
    dispatch(update(todo));
  }, [dispatch]);

  const removeTodo = useCallback((id: string) => {
    dispatch(remove(id));
  }, [dispatch]);

  return {addTodo, updateTodo, removeTodo}
}