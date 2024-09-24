import { PropsWithChildren, useReducer } from 'react';
import { TodoContext, TodoContextActions, TodoDispatchContext } from './useContextTodo';

const todoReducer = (todos: Todo[], action: TodoContextActions) => {
  switch (action.type) {
    case 'add': {
      return [...todos, action.payload];
    }
    case 'update': {
      const newTodo = action.payload;

      return todos.map((prevTodo) =>
        prevTodo.id === newTodo.id ? newTodo : prevTodo
      );
    }
    case 'remove': {
      return todos.filter((prevTodo) => prevTodo.id !== action.payload);
    }
    default: {
      throw new Error(`Unknown action : ${action}`);
    }
  }
};

const initialTodos: Todo[] = [];

const ContextTodoProvider = ({ children }: PropsWithChildren) => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};

export default ContextTodoProvider;
