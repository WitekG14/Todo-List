"use client";

import H1 from "@/components/h1";
import HeadingSection from "@/components/heading-section";
import { TodoItemT } from "@/lib/types";
import { useEffect, useRef, useState } from "react";

import dynamic from "next/dynamic";

const ItemsSection = dynamic(() => import("@/components/items-section"), {
  ssr: false,
});

export default function Home() {
  const [items, setItems] = useState<TodoItemT[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("items");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  const [inputValue, setInputValue] = useState("");
  const [editSessionId, setIsEditSession] = useState(false);
  const itemNameInputRef = useRef<HTMLInputElement>(null);

  const isEditSession = !!editSessionId;

  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem("items", JSON.stringify(items));
    }
  }, [items]);

  const handleAddItem = (name: string) => {
    const newItem = {
      name,
      checked: false,
      id: items.length + 1,
    };
    setItems((prev) => [...prev, newItem]);
    setInputValue("");
  };

  const handleDeleteItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  const handleEditItem = (id: number) => {
    setIsEditSession(true);

    const editItem = items.find((item) => item.id === id);
    if (!editItem) return;

    setInputValue(editItem.name);
    handleDeleteItem(id);

    const itemNameInputCurrent = itemNameInputRef.current;
    if (!itemNameInputCurrent) return;
    itemNameInputCurrent.focus();
  };

  return (
    <main className="flex h-full w-full flex-col justify-center">
      <div className="flex min-h-70 flex-col items-center justify-between gap-y-8">
        <HeadingSection>
          <H1>Todo List</H1>
        </HeadingSection>
        <ItemsSection
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
      </div>
    </main>
  );
}
