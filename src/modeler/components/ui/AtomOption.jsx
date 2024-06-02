import { Cross } from "../../icons/Cross";
import { useStore as useUI } from "../../store/ui";
import { useStore as useAtoms } from "../../store/three";
import { useState } from "react";

export function CreateAtom() {
  const [setOptions] = useUI((state) => [state.setOptions]);
  const [atoms, addAtom] = useAtoms((state) => [state.atoms, state.addAtom]);

  const [atom, setAtom] = useState([]);
  return (
    <form
      className={`absolute z-10 shadow-xl bg-base-100 p-3 m-2 rounded-md flex gap-2 max-w-xl items-center`}
    >
      <label>X:</label>{" "}
      <input
        onChange={(e) => {
          setAtom([e.target.value, atom[1], atom[2], atom[3]]);
        }}
        className="w-full p-2"
        type="number"
      />
      <label>Y:</label>{" "}
      <input
        onChange={(e) => setAtom([atom[0], e.target.value, atom[2], atom[3]])}
        className="w-full p-2"
        type="number"
      />
      <label>Z:</label>{" "}
      <input
        onChange={(e) => setAtom([atom[0], atom[1], e.target.value, atom[3]])}
        className="w-full p-2"
        type="number"
      />
      <label>R:</label>{" "}
      <input
        onChange={(e) => setAtom([atom[0], atom[1], atom[2], e.target.value])}
        className="w-full p-2"
        type="number"
      />
      <button
        className="p-2 bg-emerald-600 hover:bg-emerald-400 rounded-sm text-white"
        onClick={(e) => {
          e.preventDefault();
          addAtom(...atom);
          setOptions("Options");
        }}
      >
        Crear
      </button>
      <button
        className="p-2 bg-red-600 hover:bg-red-400 rounded-sm text-white"
        onClick={(e) => {
          setOptions("Options");
        }}
      >
        <Cross />
      </button>
    </form>
  );
}
