import { type TodoItemT } from "@/lib/types";

function TodoItem({ item }: { item: TodoItemT }) {
  return (
    <li className="flex w-full items-center gap-5 border-b border-b-zinc-300 p-3">
      <input type="checkbox" checked={item.checked || false} />
      <p>{item.name}</p>
    </li>
  );
}

export default TodoItem;
