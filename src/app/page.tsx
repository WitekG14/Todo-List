"use client";

import TodoItem from "@/components/todo-item";
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
        </ul>
      </section>
    </main>
  );
}
