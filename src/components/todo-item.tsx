import { type TodoItemT } from "@/lib/types";

function TodoItem({
  item,
  onToggleItem,
}: {
  item: TodoItemT;
  onToggleItem: () => void;
}) {
  return (
    <li className="flex w-full items-center gap-5 border-b border-b-zinc-300 p-3">
      <input
        type="checkbox"
        checked={item.checked || false}
        onChange={onToggleItem}
      />
      <p>{item.name}</p>
    </li>
  );
}

export default TodoItem;
