import type { ITodo } from "@/types/i-todo";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type TodoStoreType = {
  todos: ITodo[];
  addTodo: (title: string) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
};

const useTodoStore = create<TodoStoreType>()(
  persist(
    (set) => ({
      todos: [],
      addTodo(title) {
        set((state) => ({
          todos: [
            ...state.todos,
            { id: crypto.randomUUID(), title, idDone: false },
          ],
        }));
      },
      removeTodo(id) {
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        }));
      },
      toggleTodo(id) {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, isDone: !todo.idDone } : todo,
          ),
        }));
      },
    }),
    {
      name: "todo-list-key",
    },
  ),
);

export { useTodoStore };
