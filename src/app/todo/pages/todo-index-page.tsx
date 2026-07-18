import { AddTodo } from "../components/add-todo";
import TodoItem from "../components/todo-item";
import { useTodoStore } from "../hooks/use-todo-store";

export function TodoIndexPage() {
  const { todos } = useTodoStore();
  return (
    <main className="max-w-md mx-auto py-6 flex flex-col gap-4">
      <h1>{`لیست کارها (${todos.length})`}</h1>
      <AddTodo />
      <ul className="flex flex-col gap-2">
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem data={todo} />
          </li>
        ))}
      </ul>
    </main>
  );
}
