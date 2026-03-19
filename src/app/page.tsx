import TodoItem from "@/components/todo-item";

const testInitialItems = [
  {
    name: "toothbrush",
    checked: false,
    id: 1,
  },
  {
    name: "phone",
    checked: false,
    id: 2,
  },
  {
    name: "good mood",
    checked: true,
    id: 3,
  },
];

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center gap-y-8">
      <section>
        <h1 className="text-4xl font-bold tracking-wider">Todo List</h1>
      </section>
      <section className="">
        <ul className="border-t border-t-zinc-300">
          {testInitialItems.map((item) => (
            <TodoItem item={item} key={item.id} />
          ))}
        </ul>
      </section>
    </main>
  );
}
