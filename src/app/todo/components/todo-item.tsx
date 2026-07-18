import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import type { ITodo } from "@/types/i-todo";
import { TrashIcon } from "lucide-react";
import { useTodoStore } from "../hooks/use-todo-store";

export default function TodoItem({ data }: { data: ITodo }) {
  const { toggleTodo, removeTodo } = useTodoStore();

  function handleToggle() {
    if (data.id) {
      toggleTodo(data.id);
    }
  }
  function handleRemove() {
    if (data.id) {
      removeTodo(data.id);
    }
  }
  return (
    <div className="flex gap-2 items-center">
      <FieldLabel>
        <Field orientation="horizontal">
          <Checkbox
            checked={data.isDone}
            onCheckedChange={handleToggle}
            id="toggle-checkbox-2"
            name="toggle-checkbox-2"
          />
          <FieldContent>
            <FieldTitle>{data.title}</FieldTitle>
            <FieldDescription>بخش توضیحات خالی است</FieldDescription>
          </FieldContent>
        </Field>
      </FieldLabel>
      <Button onClick={handleRemove} size={"icon"} variant={"ghost"}>
        <TrashIcon />
      </Button>
    </div>
  );
}
