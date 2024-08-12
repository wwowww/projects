import { create } from "zustand";

type States = {
  todos: Todo[];
}

interface Actions {
  addTodo: (text:any, description: any) => void;
  toggleTodo: (todo: Todo) => void;
  removeTodo: (id: string) => void;
  updateTodo: (todo: Todo) => void;
};

const useTodoStore = create<States & Actions>((set) => ({
  todos: [],
  addTodo: (text:any, description: any) => 
    set((state) => ({
      todos: [...state.todos, { text, description, id: Date.now(), checked: false }],
    })),
  toggleTodo: (todo) =>
    set((state) => ({
      todos: state.todos.map((e: any) =>
        e.id === todo.id ? { ...e, checked: !e.checked } : e
      ),
    })),
  removeTodo: (id) => 
    set((state) => ({
      todos: state.todos.filter((e: any) => e.id !== id)
    })),
  updateTodo: (todo) =>
    set((state) => {
      return {
        todos: state.todos.map((prevTodo: any) => {
          return prevTodo.id === todo.id ? todo : prevTodo;
        })
      }
    }),
}));

export default useTodoStore;