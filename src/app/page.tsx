export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center gap-y-8">
      <section>
        <h1 className="text-4xl font-bold tracking-wider">Todo List</h1>
      </section>
      <section className="">
        <ul className="border-t border-t-zinc-300">
          <li className="flex w-full items-center justify-center gap-5 border-b border-b-zinc-300 p-3">
            <input type="checkbox" />
            <p>Apples</p>
          </li>
          <li className="flex w-full items-center justify-center gap-5 border-b border-b-zinc-300 p-3">
            <input type="checkbox" />
            <p>Apples</p>
          </li>
          <li className="flex w-full items-center justify-center gap-5 border-b border-b-zinc-300 p-3">
            <input type="checkbox" />
            <p>Apples</p>
          </li>
        </ul>
      </section>
    </main>
  );
}
