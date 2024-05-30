import { Cross } from "../../../icons/Cross";

export function CreateAtom() {
  return (
    <form
      className={`absolute z-10 shadow-xl bg-base-100 p-3 m-2 rounded-md flex gap-2 max-w-xl items-center`}
    >
      <label>X:</label> <input className="w-full p-2" type="number" />
      <label>Y:</label> <input className="w-full p-2" type="number" />
      <label>Z:</label> <input className="w-full p-2" type="number" />
      <label>R:</label> <input className="w-full p-2" type="number" />
      <button
        className="p-2 bg-emerald-600 hover:bg-emerald-400 rounded-sm text-white"
        onClick={(e) => {
          e.preventDefault();
          setOptionSelected("Options");
        }}
      >
        Crear
      </button>
      <button
        className="p-2 bg-red-600 hover:bg-red-400 rounded-sm text-white"
        onClick={(e) => {
          e.preventDefault();
          setOptionSelected("Options");
        }}
      >
        <Cross />
      </button>
    </form>
  );
}
