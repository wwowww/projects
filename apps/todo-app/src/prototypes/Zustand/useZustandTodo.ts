import { create } from 'zustand';

type States = {
  todos: Todo[];
};

type Actions = {
  addTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
  removeTodo: (id: string) => void;
};

const useZustandTodo = create<States & Actions>((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  updateTodo: (todo) =>
    set((state) => {
      return {
        todos: state.todos.map((prevTodo) => {
          return prevTodo.id === todo.id ? todo : prevTodo;
        }),
      };
    }),
  removeTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
}));

export default useZustandTodo;
