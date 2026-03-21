import { type TodoItemT } from "@/lib/types";
import { Checkbox } from "./ui/checkbox";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";

function TodoItem({
  item,
  onToggleItem,
  onDeleteItem,
  onEditItem,
}: {
  item: TodoItemT;
  onToggleItem: () => void;
  onDeleteItem: () => void;
  onEditItem: () => void;
}) {
  return (
    <li className="flex w-full items-center justify-between border-b border-b-zinc-300 p-3 transition hover:bg-zinc-50">
      <section className="flex items-center gap-5">
        <Checkbox checked={item.checked || false} onClick={onToggleItem} />
        <p>{item.name}</p>
      </section>
      <section className="flex items-center justify-center gap-2">
        <Pencil1Icon
          className="text-yellow-200 transition hover:text-yellow-400"
          onClick={onEditItem}
        />
        <TrashIcon
          className="text-red-400 transition hover:text-red-600"
          onClick={onDeleteItem}
        />
      </section>
    </li>
  );
}

export default TodoItem;
