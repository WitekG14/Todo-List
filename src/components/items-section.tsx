import { TodoItemT } from "@/lib/types";
import EmptyList from "./empty-list";

import dynamic from "next/dynamic";

const TodoList = dynamic(() => import("./todo-list"), { ssr: false });

function ItemsSection({
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
    <section className="min-h-50">
      {items.length === 0 && <EmptyList />}
      <TodoList
        items={items}
        inputValue={inputValue}
        setInputValue={setInputValue}
        isEditSession={isEditSession}
        handleAddItem={handleAddItem}
        handleToggleItem={handleToggleItem}
        handleEditItem={handleEditItem}
        handleDeleteItem={handleDeleteItem}
        itemNameInputRef={itemNameInputRef}
      />
    </section>
  );
}

export default ItemsSection;
