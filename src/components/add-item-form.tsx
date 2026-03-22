import { Checkbox } from "./ui/checkbox";

function AddItemForm({
  inputValue,
  setInputValue,
  isEditSession,
  handleAddItem,
  itemNameInputRef,
}: {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  isEditSession: boolean;
  handleAddItem: (name: string) => void;
  itemNameInputRef: React.Ref<HTMLInputElement>;
}) {
  return (
    <li className="flex w-full items-center gap-5 border-b border-b-zinc-300 p-3 transition hover:bg-zinc-50">
      <Checkbox checked={false} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (isEditSession) {
          }
          handleAddItem(inputValue);
        }}
      >
        <input
          ref={itemNameInputRef}
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
  );
}

export default AddItemForm;
