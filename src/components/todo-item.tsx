import { type TodoItemT } from "@/lib/types";
import { Checkbox } from "./ui/checkbox";
import { TrashIcon } from "@radix-ui/react-icons";

function TodoItem({
  item,
  onToggleItem,
  onDeleteItem,
}: {
  item: TodoItemT;
  onToggleItem: () => void;
  onDeleteItem: () => void;
}) {
  return (
    <li className="flex w-full items-center justify-between border-b border-b-zinc-300 p-3 transition hover:bg-zinc-50">
      <div className="flex items-center gap-5">
        <Checkbox checked={item.checked || false} onClick={onToggleItem} />
        <p>{item.name}</p>
      </div>
      <TrashIcon
        className="text-red-400 transition hover:text-red-600"
        onClick={onDeleteItem}
      />
    </li>
  );
}

export default TodoItem;
