import { TodoItemT } from "@/lib/types";
import TodoItem from "./todo-item";
import AddItemForm from "./add-item-form";

function TodoList({
  items,
  inputValue,
  setInputValue,
  isEditSession,
  handleAddItem,
  handleToggleItem,
  handleEditItem,
  handleDeleteItem,
  itemNameInputRef,
}: {
  items: TodoItemT[];
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  isEditSession: boolean;
  handleAddItem: (name: string) => void;
  handleToggleItem: (id: number) => void;
  handleEditItem: (id: number) => void;
  handleDeleteItem: (id: number) => void;
  itemNameInputRef: React.Ref<HTMLInputElement>;
}) {
  return (
    <ul className="border-t border-t-zinc-300">
      {items.map((item) => (
        <TodoItem
          item={item}
          onToggleItem={() => handleToggleItem(item.id)}
          onDeleteItem={() => handleDeleteItem(item.id)}
          onEditItem={() => handleEditItem(item.id)}
          key={item.id}
        />
      ))}
      <AddItemForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        isEditSession={isEditSession}
        handleAddItem={handleAddItem}
        itemNameInputRef={itemNameInputRef}
      />
    </ul>
  );
}

export default TodoList;
