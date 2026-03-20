"use client";

import TodoItem from "@/components/todo-item";
import { Checkbox } from "@/components/ui/checkbox";
import { TodoItemT } from "@/lib/types";
import { useState } from "react";

const testInitialItems: TodoItemT[] = [
  {
    name: "toothbrush",
    checked: false,
    id: 1,
  },
  {
    name: "phone",
    id: 2,
  },
  {
    name: "good mood",
    checked: true,
    id: 3,
  },
];

export default function Home() {
  const [items, setItems] = useState(testInitialItems);
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = (name: string) => {
    const newItem = {
      name,
      checked: false,
      id: items.length + 1,
    };
    setItems((prev) => [...prev, newItem]);
    setInputValue("");
  };

  const handleToggleItem = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  return (
    <main className="flex h-full w-full flex-col items-center justify-center gap-y-8">
      <section>
        <h1 className="text-4xl font-bold tracking-wider">Todo List</h1>
      </section>
      <section className="">
        <ul className="border-t border-t-zinc-300">
          {items.map((item) => (
            <TodoItem
              item={item}
              onToggleItem={() => handleToggleItem(item.id)}
              key={item.id}
            />
          ))}
          <li className="flex w-full items-center gap-5 border-b border-b-zinc-300 p-3 transition hover:bg-zinc-50">
            <Checkbox checked={false} />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddItem(inputValue);
              }}
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => {
                  e.preventDefault();
                  setInputValue(e.target.value);
                }}
                className="max-h-6 border-b border-b-zinc-200 transition-all outline-none hover:border-b-zinc-400 focus:border-b-zinc-400 focus:ring-0 focus:ring-offset-0"
                placeholder="Add a new item..."
              />
            </form>
          </li>
        </ul>
      </section>
    </main>
  );
}
