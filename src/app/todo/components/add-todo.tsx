import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { useTodoStore } from "../hooks/use-todo-store";

export function AddTodo() {
  const [title, setTitle] = useState("");
  const { addTodo } = useTodoStore();

  function handleAdd() {
    addTodo(title);
    setTitle("");
  }

  return (
    <div className="flex gap-2 px-6 py-4">
      <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      <Button
        size={"icon"}
        disabled={title.trim().length < 3}
        onClick={handleAdd}
      >
        <PlusIcon />
      </Button>
    </div>
  );
}
