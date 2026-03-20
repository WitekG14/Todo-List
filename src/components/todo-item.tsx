import { type TodoItemT } from "@/lib/types";
import { Checkbox } from "./ui/checkbox";

function TodoItem({
  item,
  onToggleItem,
}: {
  item: TodoItemT;
  onToggleItem: () => void;
}) {
  return (
    <li className="flex w-full items-center gap-5 border-b border-b-zinc-300 p-3 transition hover:bg-zinc-50">
      <Checkbox checked={item.checked || false} onClick={onToggleItem} />
      <p>{item.name}</p>
    </li>
  );
}

export default TodoItem;
